//#MODULE - Application
//> Author: Tiago Garcia
//> Create Date: Jan 9, 2015
//
//##DESCRIPTION: The Marionette application
define( [ 'jquery', 'underscore', 'backbone', 'marionette', 'base/rootView', 'base/headerView', 'base/sidebarView', 'base/contentView' ], function ( $, _, Backbone, Marionette, RootView, HeaderView, SidebarView, ContentView ) {

    'use strict';

    var Application = Marionette.Application.extend( {
        initialize: function ( options ) {
            this.rootView = new RootView();
            this.rootView.render();

            this.rootView.getRegion( 'header' ).show( new HeaderView() );
            this.rootView.getRegion( 'sidebar' ).show( new SidebarView() );
            this.rootView.getRegion( 'content' ).show( new ContentView() );

            Backbone.history.start();
        }
    } );

    return Application;

} );
