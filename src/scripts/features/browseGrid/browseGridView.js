//#MODULE - Browse Grid main view
//> Author: Tiago Garcia
//> Create Date: Jan 19, 2015
//
//##DESCRIPTION: The main view for Browse Grid
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'browseGrid.templates/browseGrid' ], function ( $, _, Backbone, Marionette, BrowseGridTemplate ) {

    'use strict';

    var BrowseGridView = Marionette.ItemView.extend( {
        template: BrowseGridTemplate
    } );

    return BrowseGridView;

} );
