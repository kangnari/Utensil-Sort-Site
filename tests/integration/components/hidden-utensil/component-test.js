import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hidden-utensil', 'Integration | Component | hidden utensil', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hidden-utensil}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hidden-utensil}}
      template block text
    {{/hidden-utensil}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
