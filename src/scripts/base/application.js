//#MODULE - Application
//> Author: Tiago Garcia
//> Create Date: Jan 9, 2015
//
//##DESCRIPTION: The Marionette application
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'base/rootView', 'browseGrid/browseGridFeature', 'facetedSidebar/facetedSidebarFeature' ], function ( $, _, Backbone, Marionette, RootView, BrowseGridFeature, FacetedSidebarFeature ) {

    'use strict';

    var Application = Marionette.Application.extend( {

        initialize: function ( options ) {
            this.rootView = new RootView();
            this.rootView.render();

            this.browseGridFeature = new BrowseGridFeature( {
                region: this.rootView.getRegion( 'content' )
            } );
            this.facetedSidebarFeature = new FacetedSidebarFeature( {
                region: this.rootView.getRegion( 'sidebar' )
            } );
        },

        onStart: function () {
            this.browseGridFeature.triggerMethod( 'start' );
            this.facetedSidebarFeature.triggerMethod( 'start' );
            Backbone.history.start();
        }
    } );

    return Application;

} );
