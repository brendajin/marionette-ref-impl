describe( 'StringUtil polyfills', function () {

    String.prototype.trim = undefined;

    define( [ 'util/stringUtil' ], function ( stringUtil ) {

        describe( 'trim', function () {

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

} );
