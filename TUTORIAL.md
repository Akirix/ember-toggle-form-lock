# Creating an Ember Addon with ember-cli
We're going to create an addon with a component and two mixins (a controller mixin and a route mixin).

## Getting started
Personally, in my development folder I've created a folder designated for Ember addons called **ember-addons**. Navigate to the folder you would like to create addons in.
1. `ember addon <ember-addon-name>` (creates an addon and a folder of the same name: ember-ipsum)
2. `cd <ember-addon-name>`
3. Now open the addon/director with your editor of choice (sublime, atom, webstrom, etc.)
4. Navigate to `package.json` and move `ember-cli-htmlbars` from `devDependencies` object into the `dependencies` object. If you forget to do this, you'll get an error message when you try to serve the dummy application that looks something like this:

`Addon templates were detected, but there are no template compilers registered for <addon-folder-name>. Please make sure your template precompiler (commonly 'ember-cli-htmlbars') is listed in 'dependencies' (NOT 'devDependencies') in <addon-folder-name>'s 'package.json'.`  

## Creating a Component in your Addon
Type `ember g component <component-name>` in your terminal. This is going to create a test file and 3 other files:  

**addon\components\<component-name>.js**  
Add any logic you want to happen in your component here.
```javascript
//addon/components/<component-name>.js
import Ember from 'ember';
import layout from '../templates/components/<component-name>';

export default Ember.Component.extend({
  layout
  // just put a comma after layout and insert your code here.
});
```

**addon\templates\components\<component-name>.hbs**  
Add any custom templating you want to happen in here.
```html
{{yield}}
```
**app\components\<component-name>.js**  
Leave this as is. This is what makes your component available to applications after they install your addon.
```javascript
export { default } from 'ember-toggle-form-lock/components/<component-name>';
```

## Creating a Mixin in your Addon
Type `ember g mixin <mixin-name>` in your terminal. This is going to create a test file, and...

**addon\mixins\<mixin-name>.js**  
Write this just like you would a mixin for any ember application.

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
