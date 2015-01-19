requireConfig();

require( [ 'base/application' ], function( Application ) {

  'use strict';

  new Application( {
      container: '#application'
  } );
} );
