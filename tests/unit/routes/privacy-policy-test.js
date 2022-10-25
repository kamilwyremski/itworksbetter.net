import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click, visit, currentURL } from '@ember/test-helpers'

module('Unit | Route | privacy-policy', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:privacy-policy');
    assert.ok(route);
  });

  test('visiting /polityka-prywatnosci', async function(assert) {
    await visit('/');

    await click('footer .footer-privacy-policy a');

    assert.equal(currentURL(), '/polityka-prywatnosci');

    assert.dom('h1').hasText('Privacy policy');

  });
});
