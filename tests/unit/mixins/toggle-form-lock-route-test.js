import Ember from 'ember';
import ToggleFormLockRouteMixin from 'ember-toggle-form-lock/mixins/toggle-form-lock-route';
import { module, test } from 'qunit';

module('Unit | Mixin | toggle form lock route');

// Replace this with your real tests.
test('it works', function(assert) {
  let ToggleFormLockRouteObject = Ember.Object.extend(ToggleFormLockRouteMixin);
  let subject = ToggleFormLockRouteObject.create();
  assert.ok(subject);
});
