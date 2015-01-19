//#MODULE - Content View
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The content view for the application
define( [ 'jquery', 'underscore', 'backbone', 'marionette' ], function ( $, _, Backbone, Marionette ) {

    'use strict';

    var ContentView = Marionette.ItemView.extend( {
      template: false
    } );

    return ContentView;

} );
