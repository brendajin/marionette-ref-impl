( function () {

    'use strict';

    var paths = {
        // third party libraries
        backbone: '/vendor/backbone/backbone',
        marionette: '/vendor/marionette/lib/backbone.marionette',
        handlebars: '/vendor/script/handlebars/handlebars.amd',
        jquery: '/vendor/jquery/dist/jquery',
        require: '/vendor/requirejs/require',
        underscore: '/vendor/underscore/underscore',

        // handlebar templates base location
        templates: '/templates',

        // scripts
        base: '/scripts/base',
        components: '/scripts/components',
        features: '/scripts/features',

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
        }
    };

    // set up require
    require.config( {
        baseUrl: '/src',
        paths: paths,
        shim: shims
    } );

    require( [ 'base/application' ], function( Application ) {
        new Application( {
            container: '#application'
        } );
    } );

} )();
