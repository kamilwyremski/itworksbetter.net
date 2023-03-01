import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click, visit, currentURL } from '@ember/test-helpers';

module('Unit | Route | scripts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:scripts');
    assert.ok(route);
  });

  test('visiting /scripts', async function (assert) {
    await visit('/');

    await click('.menu a:nth-child(2)');

    assert.strictEqual(currentURL(), '/scripts');

    assert.dom('h1').hasText('Website scripts');

    assert.dom('.script').exists();
    assert.dom('.script h2').includesText('Notice3');
  });
});
