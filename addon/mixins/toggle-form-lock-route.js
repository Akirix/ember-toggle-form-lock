import Ember from 'ember';

export default Ember.Mixin.create( {

    setupController: function( controller ){
        controller.set( 'formIsLocked', true );
    },

    resetController: function( controller ){
        controller.set( 'formIsLocked', true );
    }

} );
