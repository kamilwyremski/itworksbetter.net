import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | env', function(hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', 'base_url');

    await render(hbs`{{env inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'https://itworksbetter.net');
  });
});
