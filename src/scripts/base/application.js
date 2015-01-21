//#MODULE - Application
//> Author: Tiago Garcia
//> Create Date: Jan 9, 2015
//
//##DESCRIPTION: The Marionette application
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'base/rootView', 'browseGrid/browseGridView', 'facetedSidebar/facetedSidebarView' ], function ( $, _, Backbone, Marionette, RootView, BrowseGridView, FacetedSidebarView ) {

    'use strict';

    var Application = Marionette.Application.extend( {
        initialize: function ( options ) {
            this.rootView = new RootView();
            this.rootView.render();

            this.rootView.getRegion( 'sidebar' ).show( new FacetedSidebarView() );
            this.rootView.getRegion( 'content' ).show( new BrowseGridView() );

            Backbone.history.start();
        }
    } );

    return Application;

} );
