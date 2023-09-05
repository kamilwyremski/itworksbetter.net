import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click, visit, currentURL } from '@ember/test-helpers';

module('Unit | Route | projects', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:projects');
    assert.ok(route);
  });

  test('visiting /projects', async function (assert) {
    await visit('/');

    await click('.menu a:last-child');

    assert.strictEqual(currentURL(), '/projects');

    assert.dom('h1').hasText('Projects of Web Aplications');

    assert.dom('.project').exists();
    assert.dom('.project--right a').includesText('Cargoos');
  });
});
