describe( 'StringUtil', function () {

    'use strict';

    define( [ 'util/stringUtil' ], function ( stringUtil ) {

        describe( "truncate", function () {
            it( "should be a method", function () {
                expect( typeof stringUtil.truncate ).toEqual( "function" );
            } );

            it( "should correctly truncate strings", function () {
                expect( stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 10 ) ).toEqual( "The wild" );
                expect( stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 10, "..." ) ).toEqual( "The wild..." );
                expect( stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 10, " (more)" ) ).toEqual( "The wild (more)" );
                expect( stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 1000, " (more)" ) ).toEqual( "The wild cats roamed throughout the city." );
                expect( stringUtil.truncate( "The wild cats, roamed throughout the city.", 5, 15 ) ).toEqual( "The wild" );
                //expect(stringUtil.truncate("Theoretically speaking this should still work.",5,10,"...")).toEqual("Theoretically...");
            } );

            it( "should throw errors if missing required arguments", function () {
                //expect(function(){ return _stringUtil.truncate("The Cat In The Hat"); }).toThrow(new Error("StringUtil.truncate failed! Missing required arguments."));
                //expect(function(){ return _stringUtil.truncate("The Cat In The Hat",5); }).toThrow(new Error("StringUtil.truncate failed! Missing required arguments."));
            } );
        } );

        describe( "replaceMultiple", function () {
            it( "can replace a string when 0, 1, 2, and more than 10 arguments are passed into string", function () {
                expect( stringUtil.replaceMultiple( "The quick fox jumped over the lazy brown cows." ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
                expect( stringUtil.replaceMultiple( "The $1 fox jumped over the lazy brown cows.", "quick" ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
                expect( stringUtil.replaceMultiple( "The quick $1 jumped over the $2 brown cows.", "fox", "lazy" ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
                expect( stringUtil.replaceMultiple( "$1 $2 $3 $4 $5 $6 $7 $8 $9$10", "The", "quick", "fox", "jumped", "over", "the", "lazy", "brown", "cows", "." ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
            } );
        } );

        describe( "validatePostalCode", function () {
            it( "can validate a US Postal Code by returning true for valid and false for all others", function () {
                expect( stringUtil.validatePostalCode( "20004" ) ).toEqual( true );
                expect( stringUtil.validatePostalCode( "asfafds" ) ).toEqual( false );
                expect( stringUtil.validatePostalCode( "" ) ).toEqual( false );
                expect( stringUtil.validatePostalCode( "20004-000" ) ).toEqual( false );
                expect( stringUtil.validatePostalCode( "20004-" ) ).toEqual( false );
                expect( stringUtil.validatePostalCode( "20004-0000" ) ).toEqual( true );
            } );
        } );

        describe( "isEmpty", function () {

            it( 'can evaluate any input and determine if it is an empty string or not', function () {
                expect( stringUtil.isEmpty() ).toEqual( true );
                expect( stringUtil.isEmpty( null ) ).toEqual( true );
                expect( stringUtil.isEmpty( undefined ) ).toEqual( true );
                expect( stringUtil.isEmpty( '' ) ).toEqual( true );
                expect( stringUtil.isEmpty( new String() ) ).toEqual( true );
                expect( stringUtil.isEmpty( 'a'.replace( 'a', '' ) ) ).toEqual( true );
                expect( stringUtil.isEmpty( ' ' ) ).toEqual( true );
                expect( stringUtil.isEmpty( '\n' ) ).toEqual( true );
                expect( stringUtil.isEmpty( '\t' ) ).toEqual( true );

                expect( stringUtil.isEmpty( 'a' ) ).toEqual( false );
                expect( stringUtil.isEmpty( ' a' ) ).toEqual( false );
                expect( stringUtil.isEmpty( '1' ) ).toEqual( false );
                expect( stringUtil.isEmpty( 1 ) ).toEqual( false );
                expect( stringUtil.isEmpty( 123 ) ).toEqual( false );
                expect( stringUtil.isEmpty( 123 + 456 ) ).toEqual( false );
            } );
        } )

        it( "StringUtil js should have a public api with following method isEmptyString", function () {
            expect( typeof stringUtil.isEmptyString ).toEqual( "function" );
        } );

        describe( "Testcase", function () {

            it( "success for isEmptyString method: checking input is not empty or undefined or null", function () {
                var input1 = "999";
                var output1 = stringUtil.isEmptyString( input1 );
                expect( output1 ).toBe( true );
            } );
            it( "failure for isEmptyString method: checking input is undefined", function () {
                var input1;
                var output1 = stringUtil.isEmptyString( input1 );

                expect( output1 ).not.toBe( true );
            } );
            it( "success for isEmptyString method: checking input is  empty", function () {
                var input1 = "";
                var output1 = !stringUtil.isEmptyString( input1 );
                expect( output1 ).toBe( true );
            } );
            it( "success for isEmptyString method: checking input is undefined", function () {
                var input1 = undefined;
                var output1 = !stringUtil.isEmptyString( input1 );
                expect( output1 ).toBe( true );
            } );
            it( "failure for isEmptyString method: checking input is  empty or undefined or null", function () {
                var input1 = "8888";
                var output1 = !stringUtil.isEmptyString( input1 );

                expect( output1 ).not.toBe( true );
            } );
        } );


        describe( "toPrice", function () {
            it( "should be method", function () {
                expect( typeof stringUtil.toPrice ).toEqual( "function" );
            } )

            it( "should take a string or number and return a dollar price", function () {
                expect( function () {
                    stringUtil.toPrice( '$20' )
                } ).toThrow( new Error( 'string argument must be parseable with parseFloat()' ) )
                expect( stringUtil.toPrice( 20 ) ).toBe( '$20.00' );
                expect( stringUtil.toPrice( '20.1' ) ).toBe( '$20.10' );
                expect( stringUtil.toPrice( '20.' ) ).toBe( '$20.00' );
                expect( stringUtil.toPrice( 20.1 ) ).toBe( '$20.10' );
                expect( stringUtil.toPrice( '20.15' ) ).toBe( '$20.15' );
                expect( stringUtil.toPrice( 20.25 ) ).toBe( '$20.25' );
                expect( stringUtil.toPrice( '20.256' ) ).toBe( '$20.26' );
                expect( stringUtil.toPrice( '20.254' ) ).toBe( '$20.25' );
                expect( stringUtil.toPrice( 20.256 ) ).toBe( '$20.26' );
                expect( stringUtil.toPrice( 20.254 ) ).toBe( '$20.25' );
                expect( stringUtil.toPrice( 0 ) ).toBe( '$0.00' );
                expect( stringUtil.toPrice( "0" ) ).toBe( '$0.00' );
            } )
        } );

        describe( "maskCreditCard", function () {
            it( "should be method", function () {
                expect( typeof stringUtil.maskCreditCard ).toEqual( "function" );
            } );

            it( "should take a string and return it masked", function () {
                expect( function () {
                    stringUtil.maskCreditCard( undefined );
                } ).toThrow( new Error( "Incorrect parameters passed." ) );
                expect( function () {
                    stringUtil.maskCreditCard( '12345', 123 );
                } ).toThrow( new Error( "Incorrect parameters passed." ) );

                expect( stringUtil.maskCreditCard( '12345' ) ).toEqual( '*2345' );
                expect( stringUtil.maskCreditCard( '12345', '#' ) ).toEqual( '#2345' );
                expect( stringUtil.maskCreditCard( '123' ) ).toEqual( '123' );
                expect( stringUtil.maskCreditCard( '1234' ) ).toEqual( '1234' );

            } )
        } );

        describe( 'toCapitalize', function () {
            it( "should be method", function () {
                expect( typeof stringUtil.toCapitalize ).toEqual( "function" );
            } );
            it( "should take a string and return it toCapitalize", function () {
                expect( stringUtil.toCapitalize( 'saikumar' ) ).toEqual( 'Saikumar' );
                expect( stringUtil.toCapitalize( 'Saikumar' ) ).toEqual( 'Saikumar' );

            } );

        } );

        describe( 'getURLParameterFromHash method', function () {
            it( "should have method to retrieve values from hash, when formatted as query string", function () {

                expect( stringUtil.getURLParameterFromHash( "foo", "#foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
                expect( stringUtil.getURLParameterFromHash( "cats", "#foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
                expect( stringUtil.getURLParameterFromHash( "ying", "#foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

            } );
        } );

        describe( 'getURLParameter method', function () {
            it( "should have method to retrieve values from querystring, when formatted as query string", function () {

                expect( stringUtil.getURLParameter( "foo", "foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
                expect( stringUtil.getURLParameter( "cats", "foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
                expect( stringUtil.getURLParameter( "ying", "foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

                expect( stringUtil.getURLParameter( "foo", "?foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
                expect( stringUtil.getURLParameter( "cats", "?foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
                expect( stringUtil.getURLParameter( "ying", "?foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

                expect( stringUtil.getURLParameter( "foo", "&foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
                expect( stringUtil.getURLParameter( "cats", "&foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
                expect( stringUtil.getURLParameter( "ying", "&foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

            } );
        } );

        describe( 'String.endsWith() polyfill test', function () {
            it( "should be able to test if string 'endsWith(substr)' also with optional position parameter", function () {

                var str = 'To be, or not to be, that is the question.';

                expect( str.endsWith( 'question.' ) ).toBeTruthy(); // true
                expect( str.endsWith( 'to be' ) ).toBeFalsy(); // false
                expect( str.endsWith( 'to be', 19 ) ).toBeTruthy(); // true
            } );
        } );

        describe( 'escapeForRegEx', function () {
            it( 'should be able to escape special characters for a RegExp', function () {
                var stringToEscape = "(hello world) it's like [every] *special* char, is in here!?.";
                var stringEscaped = "\\(hello world\\) it's like \\[every] \\*special\\* char, is in here!\\?\\.";

                expect( stringUtil.escapeForRegEx( stringToEscape ) ).toEqual( stringEscaped );

            } );
        } );
    } );
} );
