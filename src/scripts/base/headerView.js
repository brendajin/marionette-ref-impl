//#MODULE - Header View
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The header view for the application
define( [ 'jquery', 'underscore', 'backbone', 'marionette' ], function ( $, _, Backbone, Marionette ) {

    'use strict';

    var HeaderView = Marionette.ItemView.extend( {
        template: false
    } );

    return HeaderView;

} );
