/* eslint-env node */
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const envFactory = require(path.join(rootDir, 'config', 'environment'));
const ENV = envFactory('production');

const site = ENV.site;
const baseUrl = site.base_url.replace(/\/$/, '');

const pages = [
  {
    route: '/',
    file: path.join(distDir, 'index.html'),
    title: site.title,
    description: site.description,
  },
  {
    route: '/projects',
    file: path.join(distDir, 'projects', 'index.html'),
    title: 'Web Application Projects - IT Works Better',
    description: 'Web Application Projects. ' + site.description,
  },
  {
    route: '/scripts',
    file: path.join(distDir, 'scripts', 'index.html'),
    title: 'Website Scripts - IT Works Better',
    description: 'Website Scripts. ' + site.description,
  },
  {
    route: '/privacy-policy',
    file: path.join(distDir, 'privacy-policy', 'index.html'),
    title: 'Privacy Policy - IT Works Better',
    description: 'Privacy Policy. ' + site.description,
  },
  {
    route: '/error404',
    file: path.join(distDir, 'error404', 'index.html'),
    title: 'Error 404 - IT Works Better',
    description: 'Error 404. ' + site.description,
  },
];

function buildHeadBlock(page) {
  const canonical = `${baseUrl}${page.route}`;
  const imageUrl = `${baseUrl}${site.image}`;

  return [
    '<!-- dynamic-head:start -->',
    `  <base href="${site.base_url}">`,
    `  <link rel="canonical" href="${canonical}">`,
    `  <link rel="alternate" type="text/markdown" href="${canonical}.md" title="${page.title} - Markdown source">`,
    `  <title>${page.title}</title>`,
    `  <meta name="description" content="${page.description}">`,
    `  <meta name="keywords" content="${site.keywords}">`,
    `  <link rel="shortcut icon" href="${imageUrl}">`,
    `  <meta property="og:title" content="${page.title}">`,
    `  <meta property="og:image" content="${imageUrl}">`,
    `  <meta property="og:image:secure_url" content="${imageUrl}">`,
    `  <meta property="og:image:width" content="${site.image_width}">`,
    `  <meta property="og:image:height" content="${site.image_height}">`,
    `  <meta property="og:description" content="${page.description}">`,
    '  <meta property="og:type" content="website">',
    `  <meta property="og:site_name" content="${page.title}">`,
    '  <meta property="og:locale" content="en_US">',
    `  <meta property="og:url" content="${canonical}">`,
    '  <meta name="twitter:card" content="summary">',
    `  <meta name="twitter:title" content="${page.title}">`,
    `  <meta name="twitter:description" content="${page.description}">`,
    `  <meta name="twitter:image" content="${imageUrl}">`,
    '<!-- dynamic-head:end -->',
  ].join('\n');
}

function upsertHeadBlock(html, block) {
  const startMarker = '<!-- dynamic-head:start -->';
  const endMarker = '<!-- dynamic-head:end -->';

  if (html.includes(startMarker) && html.includes(endMarker)) {
    return html.replace(
      new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`),
      block,
    );
  }

  return html.replace('</head>', `${block}\n</head>`);
}

for (const page of pages) {
  if (!fs.existsSync(page.file)) {
    continue;
  }

  const html = fs.readFileSync(page.file, 'utf8');
  const updated = upsertHeadBlock(html, buildHeadBlock(page));
  fs.writeFileSync(page.file, updated, 'utf8');
  console.log(`Injected head tags into ${path.relative(rootDir, page.file)}`);
}
