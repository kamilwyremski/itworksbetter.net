import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click, visit, currentURL } from '@ember/test-helpers';

module('Unit | Route | index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h1').hasText('IT Works Better');

    assert.dom('h2').hasText('Creating web applications and websites');
    await click('.menu a:last-child');

    assert.strictEqual(currentURL(), '/projects');
  });
});
