//#MODULE - Faceted sidebar main view
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The main view for the faceted sidebar
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'facetedSidebar.templates/facetedSidebar' ], function ( $, _, Backbone, Marionette, FacetedSidebarTemplate ) {

    'use strict';

    var FacetedSidebarView = Marionette.ItemView.extend( {
        template: FacetedSidebarTemplate
    } );

    return FacetedSidebarView;

} );
