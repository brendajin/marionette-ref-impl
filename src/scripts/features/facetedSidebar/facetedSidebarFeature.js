//#MODULE - Faceted Sidebar Feature
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The feature for Faceted Sidebar
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'facetedSidebar/facetedSidebarView' ], function ( $, _, Backbone, Marionette, FacetedSidebarView ) {

    'use strict';

    var FacetedSidebarFeature = Marionette.Object.extend( {
        initialize: function ( options ) {
            _.extend( this, options );
        },

        onStart: function () {
            this.region.show( new FacetedSidebarView() );
        }
    } );

    return FacetedSidebarFeature;

} );
