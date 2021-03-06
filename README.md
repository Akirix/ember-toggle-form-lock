# Ember Toggle Lock Form
A tool for locking forms with the ability to unlock them. To see the steps for creating an addon with a component and mixins, visit https://github.com/Akirix/ember-toggle-form-lock/blob/master/TUTORIAL.md.

## Installation

* `ember install ember-toggle-form-lock`
* Import the controller and route mixin where you want to use the addon respectively.  
`import ToggleFormLockControllerMixin from "ember-toggle-form-lock/mixins/toggle-form-lock-controller";`  
`import ToggleFormLockRouteMixin from "ember-toggle-form-lock/mixins/toggle-form-lock-route";`  

## Dependencies

* jquery
* font-awesome (not included)

## Helpers
`{{#toggle-form-lock formIsLocked=formIsLocked}}`: Replaces the `<form>` element for a form that you want to lock. I.e., wrap this around form elements to lock them. **`formisLocked=formIsLocked` must be passed in for the toggle to work.**

## Actions
`toggleLock`: Locks and unlocks a form.

## Example
```html
{{#toggle-form-lock formIsLocked=formIsLocked}}  {{!-- Wrapper to lock the input field --}}
    {{!-- This input is locked --}}
    {{input type='text' class='form-control' placeholder='This input locks/unlocks'}}
    {{input type='text' class='form-control' placeholder='This one too'}}
    {{!-- This input is locked --}}

    {{!-- A lock/unlock buton for the form  (use the 'toggleLock' action)--}}
    <button {{action 'toggleLock'}} class="btn btn-default btn-sm" type="button">
        <i id="toggle-form-lock" class="fa fa-lock"></i>
    </button>
        {{!-- A lock/unlock buton for the form --}}
{{/toggle-form-lock}}
<form class="" action="" method="post">
  {{input type='text' class='form-control' placeholder='This input is not affected'}}
</form>
```
