import Ember from 'ember';
import layout from '../templates/components/toggle-form-lock';

export default Ember.Component.extend({
  layout,
  tagName: 'form',
  spinner: '<i class="fa fa-spinner fa-spin"></i>',

  lockForm: function() {
    if (this.get('formIsLocked')) {
      this.$('input,textarea,select').not(':disabled').addClass('defaultEnabled').attr('disabled', true);
      this.$('i#toggle-form-lock').removeClass('fa-unlock').addClass('fa-lock');
    } else {
      this.$('input.defaultEnabled,textarea.defaultEnabled,select.defaultEnabled').not(':enabled').removeClass('defaultEnabled').attr('disabled', false);
      this.$('i#toggle-form-lock').removeClass('fa-lock').addClass('fa-unlock');
    }
  },

  observeLock: Ember.observer('formIsLocked', function() {
    this.lockForm();
  }),

  didInsertElement: function() {

    if (Ember.isEmpty(this.get('formIsLocked'))) {
      this.set('formIsLocked', true);
    }
    this.lockForm();
  }
});
