window.baseUrlSrc = '/';
window.baseUrlTarget = '/';

window.requireConfigCallback = function () {

    'use strict';

    require( [ 'base/mainApp' ], function ( MainApp ) {
        var mainApp = new MainApp();
        mainApp.start();
    } );
};
