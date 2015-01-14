'use strict';

define( [ 'base/application', 'marionette' ], function( Application, Marionette ) {
    describe( 'Application', function() {
        it( 'should be a Marionette.Application', function() {
            expect( typeof Application ).toEqual( 'function' );

            var application = new Application();
            expect( application instanceof Marionette.Application ).toEqual( true );
        } );
    } );
} );
