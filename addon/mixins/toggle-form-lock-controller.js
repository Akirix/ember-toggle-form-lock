import Ember from 'ember';

export default Ember.Mixin.create( {

    actions: {
        toggleLock: function(){
            this.toggleProperty( 'formIsLocked' );
        }
    }

} );
