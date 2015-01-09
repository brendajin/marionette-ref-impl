//#MODULE - Application
//> Author: Tiago Garcia
//> Create Date: Jan 9, 2015
//
//##DESCRIPTION: The Marionette application
define( [ 'jquery', 'underscore', 'backbone', 'marionette' ], function ( $, _, Backbone, Marionette ) {

    'use strict';

    var Application = Marionette.Application.extend( {
        initialize: function(options) {
            if ( Backbone.history ) {
                Backbone.history.start();
                console.log( 'Backbone.history has been started' );
            }
        }
    } );

    return Application;

} );
