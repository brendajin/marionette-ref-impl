//#MODULE - Sidebar View
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The sidebar view for the application
define( [ 'jquery', 'underscore', 'backbone', 'marionette' ], function ( $, _, Backbone, Marionette ) {

    'use strict';

    var SidebarView = Marionette.ItemView.extend( {
        template: false
    } );

    return SidebarView;

} );
