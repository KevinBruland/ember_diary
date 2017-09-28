
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('retain-white-space', 'helper:retain-white-space', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{retain-white-space inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

