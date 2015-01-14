var allTestFiles = [];
var TEST_REGEXP = /\.spec\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

var paths = {
    // third party libraries
    backbone: '/base/src/vendor/backbone/backbone',
    marionette: '/base/src/vendor/marionette/lib/backbone.marionette',
    handlebars: '/base/src/vendor/script/handlebars/handlebars.amd',
    jquery: '/base/src/vendor/jquery/dist/jquery',
    require: '/base/src/vendor/requirejs/require',
    underscore: '/base/src/vendor/underscore/underscore',

    // handlebar templates base location
    templates: '/base/src/templates',

    // scripts
    base: '/base/src/scripts/base',
    components: '/base/src/scripts/components',
    features: '/base/src/scripts/features'

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

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: paths,

  shim: shims,

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
