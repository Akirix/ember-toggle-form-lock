import Ember from 'ember';
import ToggleFormLockControllerMixin from 'ember-toggle-form-lock/mixins/toggle-form-lock-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | toggle form lock controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let ToggleFormLockControllerObject = Ember.Object.extend(ToggleFormLockControllerMixin);
  let subject = ToggleFormLockControllerObject.create();
  assert.ok(subject);
});
