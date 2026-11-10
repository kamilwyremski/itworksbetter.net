import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { click, visit } from '@ember/test-helpers';
import config from 'itworksbetter/config/environment';

module('Acceptance | site metadata', function (hooks) {
  setupApplicationTest(hooks);

  test('each page advertises its real Markdown source', async function (assert) {
    for (const [route, markdownPath] of Object.entries(
      config.site.markdown_paths,
    )) {
      await visit(route);

      if (route === '/error404') {
        assert.dom('link[rel="canonical"]', document.head).doesNotExist();
      } else {
        assert
          .dom('link[rel="canonical"][data-dynamic-head="1"]', document.head)
          .hasAttribute('href', route);
      }
      assert
        .dom('base[data-dynamic-head="base"]', document.head)
        .hasAttribute('href', '/');
      assert
        .dom('meta[property="og:image"][data-dynamic-head="1"]', document.head)
        .hasAttribute('content', config.site.image);

      const links = document.head.querySelectorAll(
        'link[rel="alternate"][type="text/markdown"]',
      );
      assert.true(links.length > 0, `${route} has a Markdown alternate`);
      for (const link of links) {
        assert.strictEqual(
          new URL(link.href).pathname,
          markdownPath,
          `${route} links to ${markdownPath}`,
        );
      }
    }

    await visit('/a-page-that-does-not-exist');
    assert.dom('h1').hasText('Error 404');
    assert.dom('link[rel="canonical"]', document.head).doesNotExist();
    assert
      .dom('link[rel="alternate"][type="text/markdown"]', document.head)
      .hasAttribute('href', `${window.location.origin}/error404.md`);
  });

  test('404 removes static and dynamic canonicals, then navigation restores them', async function (assert) {
    await visit('/projects');
    const staticCanonical = document.createElement('link');
    staticCanonical.rel = 'canonical';
    staticCanonical.href = 'https://itworksbetter.net/projects';
    document.head.appendChild(staticCanonical);
    try {
      await visit('/missing-page');
      assert.dom('link[rel="canonical"]', document.head).doesNotExist();
      await visit('/');
      assert
        .dom('link[rel="canonical"]', document.head)
        .hasAttribute('href', '/');
      assert
        .dom('link[rel="alternate"][type="text/markdown"]', document.head)
        .hasAttribute('href', `${window.location.origin}/index.md`);
    } finally {
      staticCanonical.remove();
    }
  });

  test('trust pages are reachable through the footer', async function (assert) {
    await visit('/');
    await click('footer a[href="/about"]');
    assert.dom('h1').hasText('About IT Works Better');

    await click('footer a[href="/contact"]');
    assert.dom('h1').hasText('Contact IT Works Better');
    assert
      .dom('main a[href="mailto:info@itworksbetter.net"]')
      .hasText('info@itworksbetter.net');
  });

  test('homepage shares About and Contact content with dedicated pages', async function (assert) {
    await visit('/');
    const about = document.querySelector('[data-about-content]').textContent;
    const contact = document.querySelector(
      '[data-contact-content]',
    ).textContent;
    assert.dom('.index--pricing:first-child .price').hasText('from 240 EUR');
    assert
      .dom('[data-contact-content] a[href="mailto:info@itworksbetter.net"]')
      .exists();

    await visit('/about');
    assert.strictEqual(
      document.querySelector('[data-about-content]').textContent,
      about,
    );

    await visit('/contact');
    assert.strictEqual(
      document.querySelector('[data-contact-content]').textContent,
      contact,
    );
  });
});
