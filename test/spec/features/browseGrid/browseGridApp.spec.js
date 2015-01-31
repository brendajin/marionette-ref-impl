define( [ 'backbone', 'marionette', 'browseGrid/browseGridApp' ], function ( Backbone, Marionette, BrowseGridApp ) {

    'use strict';

    describe( 'BrowseGridApp', function () {

        loadFixtures( 'application.html' );
        var browseGridApp = new BrowseGridApp( {
            region: jasmine.createSpyObj( 'region', [ 'show' ] )
        } );

        it( 'should be a Marionette.Application', function () {
            expect( typeof BrowseGridApp ).toEqual( 'function' );
            expect( browseGridApp instanceof Marionette.Application ).toEqual( true );
        } );

        it( 'should have a region', function () {
            expect( browseGridApp.region ).toBeDefined();
            expect( browseGridApp.region.show ).toBeDefined();
        } );

        it( 'should start', function () {
            expect( typeof browseGridApp.onStart ).toEqual( 'function' );

            browseGridApp.start();

            expect( browseGridApp.region.show ).toHaveBeenCalled();
        } );
    } );
} );
