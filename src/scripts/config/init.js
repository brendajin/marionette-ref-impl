window.requireConfigCallback = function () {

    'use strict';

    require( [ 'base/application' ], function ( Application ) {
        var app = new Application();
    } );
};
