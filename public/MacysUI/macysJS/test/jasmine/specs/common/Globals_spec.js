describe( "Globals object", function () {

    var globals;

    beforeEach( function () {
        var flag = false;

        require( [ 'globals' ],
            function ( Globals ) {
                globals = Globals;

                flag = true;
            } );

        waitsFor( function () {
            return flag;
        } );
    } );


    it( "When there isn't a value for the a key it must return undefined", function () {
        expect( globals.getValue( 'FOO' ) ).toEqual( undefined );
    } );

    it( "When I set a value FOO using GREEN as a key it must return FOO when using the same key", function () {
        globals.setValue( 'FOO', 'GREEN' );

        expect( globals.getValue( 'FOO' ) ).toEqual( 'GREEN' );
    } );

    it( "should set a namespaced variable using dot notation", function () {
        globals.setValue( 'foo.bar', "myValue" );
        globals.setValue( 'foo.bar2', "myValue2" );

        expect( globals.getValue( 'foo.bar' ) ).toEqual( "myValue" );
        expect( globals.getValue( 'foo.bar2' ) ).toEqual( "myValue2" );
    } );

    it( "should return undefined if the namespace is missing", function () {
        expect( globals.getValue( 'bar.foo' ) ).toEqual( undefined );
    } );

} );
