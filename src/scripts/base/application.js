//#MODULE - Application
//> Author: Tiago Garcia
//> Create Date: Jan 9, 2015
//
//##DESCRIPTION: The Marionette application
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'base/rootView', 'base/headerView', 'browseGrid/browseGridView', 'facetedSidebar/facetedSidebarView' ], function ( $, _, Backbone, Marionette, RootView, HeaderView, BrowseGridView, FacetedSidebarView ) {

    'use strict';

    var Application = Marionette.Application.extend( {
        initialize: function ( options ) {
            this.rootView = new RootView();
            this.rootView.render();

            this.rootView.getRegion( 'header' ).show( new HeaderView() );
            this.rootView.getRegion( 'sidebar' ).show( new FacetedSidebarView() );
            this.rootView.getRegion( 'content' ).show( new BrowseGridView() );

            Backbone.history.start();
        }
    } );

    return Application;

} );
