//#MODULE - StringUtil
//> Authors: Dev 1, Dev 2, Brenda Jin
//>
//> Create Date: November 6, 2013
//>
//##DESCRIPTION: This module will handle string manipulation. For numbers manipulation that does not include special characters like '$' signs, please see MathUtil.js

define( [], function () {
    var truncate = function ( text, minChar, maxChar, addon ) {
        var str = '';
        var _addon = addon || "";

        if ( text.length < maxChar ) {
            str = text;
        } else {
            for ( var i = maxChar; i > minChar; i-- ) {
                if ( text.charAt( i - 1 ) == ',' ) {
                    str = text.substring( 0, i - 1 ) + _addon;
                } else if ( text.charAt( i ) == ' ' ) {
                    str = text.substring( 0, i ) + _addon;
                }
            }
        }

        return str;
    };
    /* checking valid or in valid input*/
    var isEmptyString = function ( input ) {
        if ( input !== undefined && input !== null && input !== "" ) {
            return true;
        } else {
            return false;
        }
    };


    //###Method: will replace the pattern of $1,$2,$3,etc in str for the amount of args passed in.
    var repMult = function ( str, args ) {
        if ( arguments.length > 1 ) {
            for ( var i = 1; i < arguments.length; i++ ) {
                str = str.replace( '$' + i, arguments[ i ] );
            }
        }
        return str;
    };

    var vPostCode = function ( str, country ) {
        var country = country || 'US';
        switch ( country.toUpperCase() ) {
            default: return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test( str );
        }
    };

    //###Method - isEmpty(val) public method that takes in variable and returns false if it is
    //not a string with a length greater than zero.  IMPORTANT TO NOTE: This function treats a string that only contains
    //white-space as "empty".
    //
    //> parameters
    //>
    //+ *str* - this is the string that we want analyze for empty
    //
    //> returns
    //>
    //+ boolean true/false depending on outcome of analyzing str
    var isEmpty = function ( str ) {
        if ( str ) {
            return ( ( str === null ) || str.length == 0 || /^\s+$/.test( str ) );
        } else {
            return true;
        }
    };

    // ###Method - toPrice( str ) is a public method that can take either a number or string, and returns a value in the format `$XX.XX`
    // **Important**: this function does that accept strings that cannot be parsed with parseFloat()
    var toPrice = function ( str ) {
        var myPrice = parseFloat( str );
        if ( isNaN( myPrice ) ) {
            throw new Error( "string argument must be parseable with parseFloat()" );
        }

        return '$' + myPrice.toFixed( 2 );
    };

    //###Method - getURLParameter(name, querystring )
    //Grabs a value out of the querystring based on the name passed in.  The querystring parameter is optional, and if not passed
    //(undefined) then it will attempt to grab the string from the window.location object.
    //
    //> parameters
    //>
    //+ *name* - The name of the key that contains the value.
    //+ *querystring* (optional) - a querystring patterned string or undefined.
    //
    //> returns
    //>
    //+ string or null.  This is the value of "name" or null if name is not found.  Null differentiates from found but blank.
    var getURLParameter = function ( name, querystring ) {
        querystring = ( typeof querystring !== "undefined" ) ? querystring : location.search;
        return decodeURIComponent( ( new RegExp( '[?|&]?' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec( querystring ) || [ "", "" ] )[ 1 ]
            .replace( /\+/g, '%20' ) ) || null;
    };
    // get parameter value from hash string
    var getURLParameterFromHash = function ( name, testHash ) {
        var hash = testHash || location.hash;
        var regex = new RegExp( '[#|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' );
        var arr = regex.exec( hash );
        return decodeURIComponent( ( regex.exec( hash ) || [ "", "" ] )[ 1 ].replace( /\+/g, '%20' ) ) || null;
    };

    //###Method - escapeForRegEx( str )
    //When we have a string that will be used for a RegExp, we must first escape any special characters in the string
    //(characters that have special meaning for RegExp: i.e. "\", ".", etc).  This method will take in the string
    //and then return the string back, but with the right characters escaped.
    //
    //> parameters
    //>
    //+ *str* - This is the string that needs escaping
    //
    //> returns
    //>
    //+ String - Returns the same string value but with the special characters replaced for RegExp
    function escapeForRegEx( str ) {
        return str.replace( /([()[{*+.$^\\|?])/g, '\\$1' );
    }


    //##Method - toCapitalize(str)
    //This method will convert the String input in to toCapitalize.
    function toCapitalize( str ) {
        var title = str.charAt( 0 ).toUpperCase() + str.substr( 1 ).toLowerCase();
        return title;
    }

    //###Method - maskCreditCard( toMask, mask )
    //Public method to mask any string except last four digit.
    //The logic to mask string except last four digits is very specific to creditcard hence this method is named maskCreditCard.
    //
    //> parameters
    //>
    //+ *toMask* : *String* - String that needs to be masked
    //+ *mask* : *String* - String to mask with.
    //
    //> returns
    //>
    //+ A masked string.
    function maskCreditCard( toMask, mask ) {
        var arr = [];
        if ( !toMask || typeof toMask !== 'string' || ( mask && typeof mask !== 'string' ) ) {
            throw new Error( "Incorrect parameters passed." );
        }
        if ( toMask.length > 4 ) {
            mask = mask || '*';
            arr[ toMask.length - 4 ] = undefined;
            return arr.join( mask ) + toMask.substr( toMask.length - 4, 4 );
        } else {
            return toMask;
        }
    }

    //Immediate Invoke Function (IIFE)
    //This function will be used add methods to String object as soon as StringUtils.js is loaded
    //Since StringUtils.js is part of McomBase.js it will get executed before any page specfic modules are loaded
    //
    //> parameters
    //+ none
    //
    //> returns
    //+ none
    //
    ( function () {
        //POLYFILL: check if there is a "trim" function in native String() and add it if not
        //Checking if trim method is available as part of String Object or not and add it if not available
        //Internally it is calling jQuery's trim (http://api.jquery.com/jquery.trim/) method.
        if ( typeof String.prototype.trim !== 'function' ) {
            String.prototype.trim = function () {
                return this.replace( /^[\s|\t]+/g, '' ).replace( /[\s|\t]+$/g, '' );
            };
        }

        //POLYFILL: check if there is an "endsWidth" function in native String() and add it if not
        if ( typeof String.prototype.endsWith !== 'function' ) {
            String.prototype.endsWith = function ( searchString, position ) {
                var subjectString = this.toString();
                if ( position === undefined || position > subjectString.length ) {
                    position = subjectString.length;
                }
                position -= searchString.length;
                var lastIndex = subjectString.indexOf( searchString, position );
                return lastIndex !== -1 && lastIndex === position;
            };
        }
    }() );

    return {
        truncate: truncate,
        replaceMultiple: repMult,
        validatePostalCode: vPostCode,
        isEmpty: isEmpty,
        isEmptyString: isEmptyString,
        toPrice: toPrice,
        getURLParameter: getURLParameter,
        getURLParameterFromHash: getURLParameterFromHash,
        escapeForRegEx: escapeForRegEx,
        toCapitalize: toCapitalize,
        maskCreditCard: maskCreditCard

    };
} );
