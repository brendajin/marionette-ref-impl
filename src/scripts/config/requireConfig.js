( function () {

    'use strict';

    window.baseUrlSrc = window.baseUrlSrc || '/';
    window.baseUrlTarget = window.baseUrlTarget || '/';

    var paths = {
        // third party libraries
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/marionette/lib/backbone.marionette',
        handlebars: 'vendor/handlebars/handlebars',
        jquery: 'vendor/jquery/dist/jquery',
        require: 'vendor/requirejs/require',
        underscore: 'vendor/underscore/underscore',

        // scripts
        base: 'scripts/base',
        util: 'scripts/util',
        browseGrid: 'scripts/features/browseGrid',
        facetedSidebar: 'scripts/features/facetedSidebar',

        // templates
        'browseGrid.templates': 'templates/features/browseGrid',
        'facetedSidebar.templates': 'templates/features/facetedSidebar'
    };

    Object.keys( paths ).forEach( function ( path ) {
        paths[ path ] = ( ( path.indexOf( '.templates' ) > -1 ) ? window.baseUrlTarget : window.baseUrlSrc ) + paths[ path ];
    } );

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
        shim: shims,
        callback: window.requireConfigCallback
    } );

} )();
