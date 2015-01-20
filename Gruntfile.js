module.exports = function ( grunt ) {
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        jsbeautifier: {
            all: {
                src: [ '**/**.js', '!node_modules/**', '!src/vendor/**' ],
                options: {
                    config: 'config/js-beautify.json'
                }
            }
        },
        jshint: {
            all: {
                src: [ 'src/scripts/**.js' ]
            },
            options: {
                "jshintrc": "config/jshint.json",
                "extensions": "js"
            }
        },
    } );

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-jsbeautifier' );
};
