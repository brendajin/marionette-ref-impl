//#MODULE - Main Application
//> Author: Tiago Garcia
//> Create Date: Jan 9, 2015
//
//##DESCRIPTION: The Main application
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'base/rootView', 'browseGrid/browseGridApp', 'facetedSidebar/facetedSidebarApp' ], function ( $, _, Backbone, Marionette, RootView, BrowseGridApp, FacetedSidebarApp ) {

    'use strict';

    var MainApp = Marionette.Application.extend( {

        initialize: function ( options ) {
            this.rootView = new RootView();
            this.rootView.render();

            this.browseGridApp = new BrowseGridApp( {
                region: this.rootView.getRegion( 'content' )
            } );
            this.facetedSidebarApp = new FacetedSidebarApp( {
                region: this.rootView.getRegion( 'sidebar' )
            } );
        },

        onStart: function () {
            this.browseGridApp.start();
            this.facetedSidebarApp.start();
            Backbone.history.start();
        }
    } );

    return MainApp;

} );
