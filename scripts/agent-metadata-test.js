/* eslint-env node */
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const envFactory = require('../config/environment');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const site = envFactory('production').site;

function read(relativePath) {
  return fs.readFileSync(path.join(dist, relativePath), 'utf8');
}

test('base URLs are normalized centrally in every environment', () => {
  for (const environment of ['development', 'test', 'production']) {
    const config = envFactory(environment);
    assert.ok(!config.site.base_url.endsWith('/'));
    assert.equal(config.rootURL, '/');
    assert.equal(
      config.site.base_url,
      environment === 'production' ? 'https://itworksbetter.net' : '',
    );
  }
});

test('all prerendered pages advertise existing Markdown, not /.md', () => {
  for (const [route, markdownPath] of Object.entries(site.markdown_paths)) {
    const html = read(route === '/' ? 'index.html' : `${route}/index.html`);
    if (route === '/error404') {
      assert.doesNotMatch(html, /<link\b[^>]*rel="canonical"/);
    } else {
      assert.ok(
        html.includes(`rel="canonical" href="${site.base_url}${route}"`),
      );
    }
    const links = [
      ...html.matchAll(
        /<link\b[^>]*rel="alternate"[^>]*type="text\/markdown"[^>]*href="([^"]+)"/g,
      ),
    ];
    assert.ok(links.length, `Missing Markdown alternate for ${route}`);
    for (const [, href] of links) {
      assert.equal(href, `${site.base_url}${markdownPath}`);
    }
    assert.match(read(markdownPath), /(^|\n)# /);
    assert.match(html, /rel="ard" href="\/.well-known\/ard.json"/);
  }
});

test('skill discovery uses the published format and current content digest', () => {
  const index = JSON.parse(read('.well-known/agent-skills/index.json'));
  assert.equal(
    index.$schema,
    'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
  );
  assert.equal(index.skills.length, 1);
  for (const skill of index.skills) {
    assert.equal(skill.type, 'skill-md');
    assert.match(skill.description, /Use when/);
    const content = fs.readFileSync(
      path.join(dist, new URL(skill.url).pathname),
    );
    assert.equal(
      skill.digest,
      `sha256:${crypto.createHash('sha256').update(content).digest('hex')}`,
    );
    assert.match(content.toString(), /^---\nname: .+\ndescription: Use when/);
  }
});

test('discovery catalogs reference real, read-only resources', () => {
  const ard = JSON.parse(read('.well-known/ard.json'));
  assert.equal(ard.specVersion, '1.0');
  assert.ok(ard.entries.length);
  for (const entry of ard.entries) {
    assert.match(entry.identifier, /^urn:air:itworksbetter\.net:/);
    assert.equal(entry.type, 'application/agent-skills+md');
    assert.ok(read(new URL(entry.url).pathname));
  }

  const catalog = JSON.parse(read('.well-known/api-catalog'));
  assert.equal(catalog.linkset[0].item.length, 2);
  for (const item of catalog.linkset[0].item) {
    assert.equal(item.type, 'application/json');
    assert.ok(
      Array.isArray(JSON.parse(read(new URL(item.href).pathname)).data),
    );
  }
});

test('organization contact and price ranges match published content', () => {
  const blocks = [
    ...read('index.html').matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ].map(([, json]) => JSON.parse(json));
  const organization = blocks.find(
    (block) => block['@type'] === 'Organization',
  );
  assert.equal(organization.contactPoint.email, site.email);
  assert.equal(
    organization.contactPoint.url,
    'https://itworksbetter.net/contact',
  );
  const offers = organization.hasOfferCatalog.itemListElement;
  assert.deepEqual(
    offers.map((offer) => offer.priceSpecification),
    [
      {
        '@type': 'PriceSpecification',
        minPrice: 240,
        priceCurrency: 'EUR',
      },
      {
        '@type': 'PriceSpecification',
        minPrice: 200,
        maxPrice: 600,
        priceCurrency: 'EUR',
      },
      {
        '@type': 'PriceSpecification',
        minPrice: 1000,
        priceCurrency: 'EUR',
      },
    ],
  );
  assert.match(read('index.html'), /from 240 EUR/);
  assert.match(read('index.md'), /Website Script: from 240 EUR/);
  const sitemap = read('sitemap.xml');
  for (const route of ['/about', '/contact']) {
    assert.ok(sitemap.includes(`${site.base_url}${route}`));
    assert.match(read(`${route}/index.html`), /<h1 /);
  }
});
