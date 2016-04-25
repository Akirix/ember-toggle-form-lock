# Creating an Ember Addon with ember-cli
This tutorial walks through how the ember-toggle-lock form addon was created. The purpose of this tutorial is to show you how to create an addon with mixins. It doens't cover the specifics of how the toggle-form-lock addon works.

## Getting started
Personally, in my development folder I've created a folder designated for Ember addons called **ember-addons**. Navigate to the folder you would like to create addons in.
1. `ember addon ember-toggle-lock-form` (creates an addon and a folder of the same name: ember-toggle-lock-form)
2. `cd ember-toggle-lock-form`
3. Now open the addon/director with your editor of choice (sublime, atom, webstrom, etc.)
4. Navigate to `package.json` and move `ember-cli-htmlbars` from `devDependencies` object into the `dependencies` object. If you forget to do this, you'll get an error message when you try to serve the dummy application that looks something like this:

`Addon templates were detected, but there are no template compilers registered for <addon-folder-name>. Please make sure your template precompiler (commonly 'ember-cli-htmlbars') is listed in 'dependencies' (NOT 'devDependencies') in <addon-folder-name>'s 'package.json'.`

## Adding dependencies
Just like any other application, if we need a dependency we have to run `ember install`, `npm install`, or `bower install` respectively.
1. `npm install jquery && bower install jquery`
2. For font-awesome, add `<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">` to `tests\dummy\app\index.html` just below `{{content-for "head"}}`


## Creating a Component in your Addon
1. `ember g component toggle-form-lock`  
This is going to create a test file, a .js file in `addon/components/`, an .hbs file in `addon/templates/components/`, and another .js file in `app/components/`. Notice how the last file is in `app` instead of `addon`. This makes the component available to whatever application the addon is installed to.
2. Open `addon/components/toggle-form-lock` and replace the code with:
```javascript
import Ember from 'ember';
import layout from '../templates/components/toggle-form-lock';

export default Ember.Component.extend({
  layout,
  tagName: 'form',
    spinner: '<i class="fa fa-spinner fa-spin"></i>',

    lockForm: function(){
        if( this.get( 'formIsLocked' ) ){
            this.$( 'input,textarea,select' ).not( ':disabled' ).addClass( 'defaultEnabled' ).attr( 'disabled', true );
            this.$( 'i#toggle-form-lock' ).removeClass( 'fa-unlock' ).addClass( 'fa-lock' );
        }
        else{
            this.$( 'input.defaultEnabled,textarea.defaultEnabled,select.defaultEnabled' ).not( ':enabled' ).removeClass( 'defaultEnabled' ).attr( 'disabled', false );
            this.$( 'i#toggle-form-lock' ).removeClass( 'fa-lock' ).addClass( 'fa-unlock' );
        }
    },

    observeLock: Ember.observer( 'formIsLocked', function(){
        this.lockForm();
    } ),

    didInsertElement: function(){

        if( Ember.isEmpty( this.get( 'formIsLocked' ) ) ){
            this.set( 'formIsLocked', true );
        }
        this.lockForm();
    }
});
```

## Creating the Mixins in your Addon
1. `ember g mixin toggle-form-lock-controller && ember g mixin toggle-form-lock-route` creates the mixins in `addon/mixins`
2. `ember g controller application --dummy && ember g route application --dummy`  
This creates a controller and route for `tests/dummy` so that we can import the mixins from the `addon` folder. You may be prompted to overwrite `tests/dummy/app/templates/application.hbs`. Since we haven't done anything to it yet, you can select yes or no. Select no if you've already worked on that file.
3. Overwrite the content of the two **_addon_** files you've just created as follows:

```javascript
// addon\mixins\toggle-form-lock-controller.js
import Ember from 'ember';

export default Ember.Mixin.create( {

    actions: {
        toggleLock: function(){
            this.toggleProperty( 'formIsLocked' );
        }
    }

} );
```

```javascript
// addon\mixins\toggle-form-lock-route.js
import Ember from 'ember';

export default Ember.Mixin.create( {

    setupController: function( controller ){
        controller.set( 'formIsLocked', true );
    }

} );
```

4. Now, we just need to treat our dummy app like an actual app and import the mixins to the application route and controller:

```javascript
// tests\dummy\app\controllers\application.js
import Ember from 'ember';
import ToggleFormLockControllerMixin from "ember-toggle-form-lock/mixins/toggle-form-lock-controller";

export default Ember.Controller.extend( ToggleFormLockControllerMixin, {
} );
```

```javascript
// tests\dummy\app\routes\application.js
import Ember from 'ember';
import ToggleFormLockRouteMixin from "ember-toggle-form-lock/mixins/toggle-form-lock-route";

export default Ember.Route.extend( ToggleFormLockRouteMixin, {
} );
```

5. Finally, let's build a form in the **_application_** template:

```html
// tests\dummy\app\templates\application.hbs
<h2 id="title">Welcome to Ember</h2>
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
6. You should now be able to serve the dummy application and test out the addon! `ember s`
## Setting up NPM
1. If you don't already have a profile with npm, create one at https://www.npmjs.com/signup.
2. Go to your terminal, type `npm adduser` and follow the prompts. It will ask you enter your username, password, and email associated with your npm profile.

## Publishing to npm and github
Now you want to make your addon public. Just run the commands below in your terminal:  

```bash
 npm version 0.0.1
 git push origin <branch-name>
 git push origin --tags
 npm publish
 ```
Follow the same steps everytime you make changes that you want available for the addon on npm. Just increment the version number appropriately [major].[minor].[patch]
