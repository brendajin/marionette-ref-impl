//#MODULE - Global and singleton object to hold common app properties
//> Author: Rafael Rocha
//>
//> Create Date: <May 12, 2014>
//>
//##DESCRIPTION: Hold common app properties
define( [], function () {
    var self = {},
        map = {};

    self.CM_PAGE_ID = 'CM_PAGE_ID';

    self.setValue = function ( key, value ) {
        var keyParts = key.split( "." ),
            keyPart,
            localMap = map,
            i;

        for ( i = 0; i < keyParts.length; i++ ) {
            keyPart = keyParts[ i ];
            if ( i === keyParts.length - 1 ) {
                localMap[ keyPart ] = value;
            } else {
                localMap[ keyPart ] = localMap[ keyPart ] || {};
                localMap = localMap[ keyPart ];
            }
        }
    };

    self.getValue = function ( key ) {
        var keyParts = key.split( "." ),
            returnValue = map,
            i;

        for ( i = 0; i < keyParts.length && returnValue !== undefined; i++ ) {
            returnValue = returnValue[ keyParts[ i ] ];
        }

        return returnValue;
    };

    return self;
} );
