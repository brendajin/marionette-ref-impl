//#MODULE - Root View
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The root view working as a base layout for the application
define( [ 'jquery', 'underscore', 'backbone', 'marionette' ], function ( $, _, Backbone, Marionette ) {

    'use strict';

    var RootView = Marionette.LayoutView.extend( {
        el: '#globalLayout',
        template: false,

        regions: {
            header: '#header',
            sidebar: '#sidebar',
            content: '#content'
        }
    } );

    return RootView;

} );
