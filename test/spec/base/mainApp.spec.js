define( [ 'backbone', 'marionette', 'base/mainApp' ], function ( Backbone, Marionette, MainApp ) {

    'use strict';

    describe( 'MainApp', function () {

        loadFixtures( 'application.html' );
        var mainApp = new MainApp();

        it( 'should be a Marionette.Application', function () {
            expect( typeof MainApp ).toEqual( 'function' );
            expect( mainApp instanceof Marionette.Application ).toEqual( true );
        } );

        it( 'should have a rootView with regions', function () {
            expect( mainApp.rootView ).toBeDefined();
            expect( mainApp.rootView instanceof Marionette.LayoutView ).toEqual( true );

            expect( Object.keys( mainApp.rootView.regions ) ).toContain( 'header' );
            expect( Object.keys( mainApp.rootView.regions ) ).toContain( 'sidebar' );
            expect( Object.keys( mainApp.rootView.regions ) ).toContain( 'content' );
        } );

        it( 'should be startable', function () {
            expect( typeof mainApp.start ).toEqual( 'function' );

            spyOn( mainApp.browseGridApp, 'start' );
            spyOn( mainApp.facetedSidebarApp, 'start' );
            spyOn( Backbone.history, 'start' );

            mainApp.start();

            expect( mainApp.browseGridApp.start ).toHaveBeenCalled();
            expect( mainApp.facetedSidebarApp.start ).toHaveBeenCalled();
            expect( Backbone.history.start ).toHaveBeenCalled();
        } );
    } );
} );
