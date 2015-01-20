'use strict';

define( [ 'base/application', 'marionette' ], function ( Application, Marionette ) {
    describe( 'Application', function () {
        beforeEach( function () {
            loadFixtures( 'application.html' )
        } );

        it( 'should be a Marionette.Application', function () {
            expect( typeof Application ).toEqual( 'function' );

            var application = new Application();
            expect( application instanceof Marionette.Application ).toEqual( true );

            expect( application.rootView ).toBeDefined();
            expect( application.rootView instanceof Marionette.LayoutView ).toEqual( true );
        } );
    } );
} );
