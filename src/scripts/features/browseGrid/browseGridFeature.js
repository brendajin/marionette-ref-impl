//#MODULE - Browse Grid Feature
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The feature for Browse Grid
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'browseGrid/browseGridView' ], function ( $, _, Backbone, Marionette, BrowseGridView ) {

    'use strict';

    var BrowseGridFeature = Marionette.Object.extend( {
        initialize: function ( options ) {
            _.extend( this, options );
        },

        onStart: function () {
            this.region.show( new BrowseGridView() );
        }
    } );

    return BrowseGridFeature;

} );
