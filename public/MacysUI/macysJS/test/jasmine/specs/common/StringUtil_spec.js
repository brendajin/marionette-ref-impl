describe( "StringUtil spec", function () {

    beforeEach( function () {
        var _this = this;
        // console.log( "beforeEach" );
        var flag = false;
        require( [ "stringUtil" ], function ( stringUtil ) {
            // console.log( 'shortendesc required' );
            _this.stringUtil = stringUtil;
            flag = true;
        } );

        waitsFor( function () {
            return flag;
        } );
    } );

    describe( "truncate", function () {
        it( "should be a method", function () {
            expect( typeof this.stringUtil.truncate ).toEqual( "function" );
        } );

        it( "should correctly truncate strings", function () {
            var _this = this;
            expect( this.stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 10 ) ).toEqual( "The wild" );
            expect( this.stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 10, "..." ) ).toEqual( "The wild..." );
            expect( this.stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 10, " (more)" ) ).toEqual( "The wild (more)" );
            expect( this.stringUtil.truncate( "The wild cats roamed throughout the city.", 5, 1000, " (more)" ) ).toEqual( "The wild cats roamed throughout the city." );
            expect( this.stringUtil.truncate( "The wild cats, roamed throughout the city.", 5, 15 ) ).toEqual( "The wild" );
            //expect(this.stringUtil.truncate("Theoretically speaking this should still work.",5,10,"...")).toEqual("Theoretically...");
        } );

        it( "should throw errors if missing required arguments", function () {
            var _this = this;
            //expect(function(){ return _this.stringUtil.truncate("The Cat In The Hat"); }).toThrow(new Error("StringUtil.truncate failed! Missing required arguments."));
            //expect(function(){ return _this.stringUtil.truncate("The Cat In The Hat",5); }).toThrow(new Error("StringUtil.truncate failed! Missing required arguments."));
        } );
    } );

    describe( "replaceMultiple", function () {
        it( "can replace a string when 0, 1, 2, and more than 10 arguments are passed into string", function () {
            expect( this.stringUtil.replaceMultiple( "The quick fox jumped over the lazy brown cows." ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
            expect( this.stringUtil.replaceMultiple( "The $1 fox jumped over the lazy brown cows.", "quick" ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
            expect( this.stringUtil.replaceMultiple( "The quick $1 jumped over the $2 brown cows.", "fox", "lazy" ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
            expect( this.stringUtil.replaceMultiple( "$1 $2 $3 $4 $5 $6 $7 $8 $9$10", "The", "quick", "fox", "jumped", "over", "the", "lazy", "brown", "cows", "." ) ).toEqual( "The quick fox jumped over the lazy brown cows." );
        } );
    } );

    describe( "validatePostalCode", function () {
        it( "can validate a US Postal Code by returning true for valid and false for all others", function () {
            expect( this.stringUtil.validatePostalCode( "20004" ) ).toEqual( true );
            expect( this.stringUtil.validatePostalCode( "asfafds" ) ).toEqual( false );
            expect( this.stringUtil.validatePostalCode( "" ) ).toEqual( false );
            expect( this.stringUtil.validatePostalCode( "20004-000" ) ).toEqual( false );
            expect( this.stringUtil.validatePostalCode( "20004-" ) ).toEqual( false );
            expect( this.stringUtil.validatePostalCode( "20004-0000" ) ).toEqual( true );
        } );
    } );

    describe( "isEmpty", function () {

        it( 'can evaluate any input and determine if it is an empty string or not', function () {
            expect( this.stringUtil.isEmpty() ).toEqual( true );
            expect( this.stringUtil.isEmpty( null ) ).toEqual( true );
            expect( this.stringUtil.isEmpty( undefined ) ).toEqual( true );
            expect( this.stringUtil.isEmpty( '' ) ).toEqual( true );
            expect( this.stringUtil.isEmpty( new String() ) ).toEqual( true );
            expect( this.stringUtil.isEmpty( 'a'.replace( 'a', '' ) ) ).toEqual( true );
            expect( this.stringUtil.isEmpty( ' ' ) ).toEqual( true );
            expect( this.stringUtil.isEmpty( '\n' ) ).toEqual( true );
            expect( this.stringUtil.isEmpty( '\t' ) ).toEqual( true );

            expect( this.stringUtil.isEmpty( 'a' ) ).toEqual( false );
            expect( this.stringUtil.isEmpty( ' a' ) ).toEqual( false );
            expect( this.stringUtil.isEmpty( '1' ) ).toEqual( false );
            expect( this.stringUtil.isEmpty( 1 ) ).toEqual( false );
            expect( this.stringUtil.isEmpty( 123 ) ).toEqual( false );
            expect( this.stringUtil.isEmpty( 123 + 456 ) ).toEqual( false );
        } );
    } )

    it( "StringUtil js should have a public api with following method isEmptyString", function () {
        expect( typeof this.stringUtil.isEmptyString ).toEqual( "function" );
    } );


    describe( "Testcase", function () {

        it( "success for isEmptyString method: checking input is not empty or undefined or null", function () {
            var input1 = "999";
            var output1 = this.stringUtil.isEmptyString( input1 );
            expect( output1 ).toBe( true );
        } );
        it( "failure for isEmptyString method: checking input is undefined", function () {
            var input1;
            var output1 = this.stringUtil.isEmptyString( input1 );

            expect( output1 ).not.toBe( true );
        } );
        it( "success for isEmptyString method: checking input is  empty", function () {
            var input1 = "";
            var output1 = !this.stringUtil.isEmptyString( input1 );
            expect( output1 ).toBe( true );
        } );
        it( "success for isEmptyString method: checking input is undefined", function () {
            var input1 = undefined;
            var output1 = !this.stringUtil.isEmptyString( input1 );
            expect( output1 ).toBe( true );
        } );
        it( "failure for isEmptyString method: checking input is  empty or undefined or null", function () {
            var input1 = "8888";
            var output1 = !this.stringUtil.isEmptyString( input1 );

            expect( output1 ).not.toBe( true );
        } );
    } );


    describe( "toPrice", function () {
        it( "should be method", function () {
            expect( typeof this.stringUtil.toPrice ).toEqual( "function" );
        } )

        it( "should take a string or number and return a dollar price", function () {
            var self = this;
            expect( function () {
                self.stringUtil.toPrice( '$20' )
            } ).toThrow( new Error( 'string argument must be parseable with parseFloat()' ) )
            expect( this.stringUtil.toPrice( 20 ) ).toBe( '$20.00' );
            expect( this.stringUtil.toPrice( '20.1' ) ).toBe( '$20.10' );
            expect( this.stringUtil.toPrice( '20.' ) ).toBe( '$20.00' );
            expect( this.stringUtil.toPrice( 20.1 ) ).toBe( '$20.10' );
            expect( this.stringUtil.toPrice( '20.15' ) ).toBe( '$20.15' );
            expect( this.stringUtil.toPrice( 20.25 ) ).toBe( '$20.25' );
            expect( this.stringUtil.toPrice( '20.256' ) ).toBe( '$20.26' );
            expect( this.stringUtil.toPrice( '20.254' ) ).toBe( '$20.25' );
            expect( this.stringUtil.toPrice( 20.256 ) ).toBe( '$20.26' );
            expect( this.stringUtil.toPrice( 20.254 ) ).toBe( '$20.25' );
            expect( this.stringUtil.toPrice( 0 ) ).toBe( '$0.00' );
            expect( this.stringUtil.toPrice( "0" ) ).toBe( '$0.00' );
        } )
    } );

    describe( "maskCreditCard", function () {
        it( "should be method", function () {
            expect( typeof this.stringUtil.maskCreditCard ).toEqual( "function" );
        } );

        it( "should take a string and return it masked", function () {
            var self = this;

            expect( function () {
                self.stringUtil.maskCreditCard( undefined );
            } ).toThrow( new Error( "Incorrect parameters passed." ) );
            expect( function () {
                self.stringUtil.maskCreditCard( '12345', 123 );
            } ).toThrow( new Error( "Incorrect parameters passed." ) );

            expect( self.stringUtil.maskCreditCard( '12345' ) ).toEqual( '*2345' );
            expect( self.stringUtil.maskCreditCard( '12345', '#' ) ).toEqual( '#2345' );
            expect( self.stringUtil.maskCreditCard( '123' ) ).toEqual( '123' );
            expect( self.stringUtil.maskCreditCard( '1234' ) ).toEqual( '1234' );

        } )
    } );

    describe( 'toCapitalize', function () {
        it( "should be method", function () {
            expect( typeof this.stringUtil.toCapitalize ).toEqual( "function" );
        } );
        it( "should take a string and return it toCapitalize", function () {
            var self = this;
            expect( self.stringUtil.toCapitalize( 'saikumar' ) ).toEqual( 'Saikumar' );
            expect( self.stringUtil.toCapitalize( 'Saikumar' ) ).toEqual( 'Saikumar' );

        } );


    } );

    describe( 'getURLParameterFromHash method', function () {
        it( "should have method to retrieve values from hash, when formatted as query string", function () {

            expect( this.stringUtil.getURLParameterFromHash( "foo", "#foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
            expect( this.stringUtil.getURLParameterFromHash( "cats", "#foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
            expect( this.stringUtil.getURLParameterFromHash( "ying", "#foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

        } );
    } );

    describe( 'getURLParameter method', function () {
        it( "should have method to retrieve values from querystring, when formatted as query string", function () {

            expect( this.stringUtil.getURLParameter( "foo", "foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
            expect( this.stringUtil.getURLParameter( "cats", "foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
            expect( this.stringUtil.getURLParameter( "ying", "foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

            expect( this.stringUtil.getURLParameter( "foo", "?foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
            expect( this.stringUtil.getURLParameter( "cats", "?foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
            expect( this.stringUtil.getURLParameter( "ying", "?foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

            expect( this.stringUtil.getURLParameter( "foo", "&foo=bar&cats=dogs&ying=yang" ) ).toEqual( "bar" );
            expect( this.stringUtil.getURLParameter( "cats", "&foo=bar&cats=dogs&ying=yang" ) ).toEqual( "dogs" );
            expect( this.stringUtil.getURLParameter( "ying", "&foo=bar&cats=dogs&ying=yang" ) ).toEqual( "yang" );

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

            expect( this.stringUtil.escapeForRegEx( stringToEscape ) ).toEqual( stringEscaped );

        } );
    } );
} );

describe( 'StringUtil polyfills', function () {
    describe( 'trim', function () {
        String.prototype.trim = undefined;

        beforeEach( function () {
            var _this = this;
            // console.log( "beforeEach" );
            var flag = false;
            require( [ "stringUtil" ], function ( stringUtil ) {
                // console.log( 'shortendesc required' );
                _this.stringUtil = stringUtil;
                flag = true;
            } );

            waitsFor( function () {
                return flag;
            } );
        } );

        it( 'should include a polyfill that makes sure that String.prototype has a trim method', function () {
            expect( String.prototype.trim ).toBeDefined();
        } );

        it( 'should trim leading space', function () {
            expect( ' leading space'.trim() ).toEqual( 'leading space' );
            expect( '       leading space'.trim() ).toEqual( 'leading space' );
        } );

        it( 'should trim trailing space', function () {
            expect( 'trailing space '.trim() ).toEqual( 'trailing space' );
            expect( 'trailing space       '.trim() ).toEqual( 'trailing space' );
        } );

        it( 'should trim leading tab', function () {
            expect( '\tleading tab'.trim() ).toEqual( 'leading tab' );
            expect( '\t\tleading tab'.trim() ).toEqual( 'leading tab' );
        } );

        it( 'should trim trailing tab', function () {
            expect( 'trailing tab\t'.trim() ).toEqual( 'trailing tab' );
            expect( 'trailing tab\t\t'.trim() ).toEqual( 'trailing tab' );
        } );


    } );
} );
