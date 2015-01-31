define( [ 'backbone', 'marionette', 'facetedSidebar/facetedSidebarApp' ], function ( Backbone, Marionette, FacetedSidebarApp ) {

    'use strict';

    describe( 'FacetedSidebarApp', function () {

        loadFixtures( 'application.html' );
        var facetedSidebarApp = new FacetedSidebarApp( {
            region: jasmine.createSpyObj( 'region', [ 'show' ] )
        } );

        it( 'should be a Marionette.Application', function () {
            expect( typeof FacetedSidebarApp ).toEqual( 'function' );
            expect( facetedSidebarApp instanceof Marionette.Application ).toEqual( true );
        } );

        it( 'should have a region', function () {
            expect( facetedSidebarApp.region ).toBeDefined();
            expect( facetedSidebarApp.region.show ).toBeDefined();
        } );

        it( 'should start', function () {
            expect( typeof facetedSidebarApp.onStart ).toEqual( 'function' );

            facetedSidebarApp.start();

            expect( facetedSidebarApp.region.show ).toHaveBeenCalled();
        } );
    } );
} );
