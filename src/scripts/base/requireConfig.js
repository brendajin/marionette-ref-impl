( function () {

    'use strict';

    var paths = {
        // third party libraries
        backbone: '/vendor/backbone/backbone',
        marionette: '/vendor/marionette/lib/backbone.marionette',
        handlebars: '/vendor/handlebars/handlebars',
        jquery: '/vendor/jquery/dist/jquery',
        require: '/vendor/requirejs/require',
        underscore: '/vendor/underscore/underscore',

        // scripts
        base: '/scripts/base',
        browseGrid: '/scripts/features/browseGrid',
        facetedSidebar: '/scripts/features/facetedSidebar',

        // templates
        'browseGrid.templates': '/templates/features/browseGrid',
        'facetedSidebar.templates': '/templates/features/facetedSidebar'
    };

    var shims = {
        marionette: {
            deps: [ 'backbone' ],
            exports: 'Marionette'
        },
        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    };

    // set up require
    require.config( {
        paths: paths,
        shim: shims
    } );

    require( [ 'base/application' ], function ( Application ) {
        var app = new Application();
    } );

} )();
