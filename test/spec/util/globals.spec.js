define( [ 'util/globals' ], function ( Globals ) {

    'use strict';

    describe( 'Globals', function () {

        it( "When there isn't a value for the a key it must return undefined", function () {
            expect( Globals.getValue( 'FOO' ) ).toEqual( undefined );
        } );

        it( "When I set a value FOO using GREEN as a key it must return FOO when using the same key", function () {
            Globals.setValue( 'FOO', 'GREEN' );

            expect( Globals.getValue( 'FOO' ) ).toEqual( 'GREEN' );
        } );

        it( "should set a namespaced variable using dot notation", function () {
            Globals.setValue( 'foo.bar', "myValue" );
            Globals.setValue( 'foo.bar2', "myValue2" );

            expect( Globals.getValue( 'foo.bar' ) ).toEqual( "myValue" );
            expect( Globals.getValue( 'foo.bar2' ) ).toEqual( "myValue2" );
        } );

        it( "should return undefinejd if the namespace is missing", function () {
            expect( Globals.getValue( 'bar.foo' ) ).toEqual( undefined );
        } );
    } );

} );
