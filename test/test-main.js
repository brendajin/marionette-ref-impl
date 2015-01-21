var allTestFiles = [];
var TEST_REGEXP = /\.spec\.js$/i;

var pathToModule = function ( path ) {
    return path.replace( /^\/base\//, '' ).replace( /\.js$/, '' );
};

Object.keys( window.__karma__.files ).forEach( function ( file ) {
    if ( TEST_REGEXP.test( file ) ) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push( pathToModule( file ) );
    }
} );

var paths = {
    // third party libraries
    backbone: '/base/src/vendor/backbone/backbone',
    marionette: '/base/src/vendor/marionette/lib/backbone.marionette',
    handlebars: '/base/src/vendor/handlebars/handlebars',
    jquery: '/base/src/vendor/jquery/dist/jquery',
    underscore: '/base/src/vendor/underscore/underscore',

    // scripts
    base: '/base/src/scripts/base',
    browseGrid: '/base/src/scripts/features/browseGrid',
    facetedSidebar: '/base/src/scripts/features/facetedSidebar',

    // templates
    'browseGrid.templates': '/base/target/templates/features/browseGrid',
    'facetedSidebar.templates': '/base/target/templates/features/facetedSidebar'

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

require.config( {
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: paths,

    shim: shims,

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
} );

jasmine.getFixtures().fixturesPath = 'base/test/fixtures';
