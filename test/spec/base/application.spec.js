define( [ 'base/application', 'marionette' ], function ( Application, Marionette ) {

    'use strict';

    describe( 'Application', function () {
        loadFixtures( 'application.html' );

        var application = new Application();

        it( 'should be a Marionette.Application', function () {
            expect( typeof Application ).toEqual( 'function' );
            expect( application instanceof Marionette.Application ).toEqual( true );
        } );

        it( 'should have a rootView with regions', function () {
            expect( application.rootView ).toBeDefined();
            expect( application.rootView instanceof Marionette.LayoutView ).toEqual( true );

            expect( Object.keys( application.rootView.regions ) ).toContain( 'header' );
            expect( Object.keys( application.rootView.regions ) ).toContain( 'sidebar' );
            expect( Object.keys( application.rootView.regions ) ).toContain( 'content' );
        } );
    } );
} );
