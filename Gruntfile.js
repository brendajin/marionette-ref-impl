module.exports = function ( grunt ) {
    // must do this this way as beautified could be undefined and don't want to split on thats
    function getFilesToBeautify() {
        var i, result = [],
            extension,
            beautyFiles = grunt.option( "beautified" );
        if ( beautyFiles && beautyFiles !== "" ) {
            beautyFiles = beautyFiles.replace( /(macys)(JS|CSS|Templates)\//g, '' ).split( /\n|\r/ );
        } else {
            beautyFiles = [];
        }
        for ( i = 0; i < beautyFiles.length; i++ ) {
            extension = beautyFiles[ i ].substring( beautyFiles[ i ].length - 3 );
            if ( extension === '.js' && beautyFiles[ i ].indexOf( "node_modules" ) === -1 ) {
                result.push( beautyFiles[ i ] );
            }
        }
        return result;
    }

    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        jsbeautifier: {
            all: {
                src: [ '**/**.js', '!node_modules/**', '!src/vendor/**' ],
                options: {
                    config: 'config/js-beautify.json'
                }
            },
            "git-pre-commit": {
                src: getFilesToBeautify(),
                options: {
                    config: 'config/js-beautify.json',
                    mode: "VERIFY_ONLY"
                }
            }
        },
        jshint: {
            all: {
                src: [ 'src/scripts/**/*.js' ]
            },
            options: {
                "jshintrc": "config/jshint.json"
            }
        },
        clean: {
            // Clean any pre-commit hooks in .git/hooks directory
            hooks: [ '.git/hooks/pre-commit' ]
        },
        copy: {
            hooks: {
                files: [ {
                    flatten: true,
                    expand: true,
                    filter: 'isFile',
                    src: [ 'config/git-hooks/pre-commit' ],
                    dest: '.git/hooks/'
                } ]
            },
            options: {
                mode: true
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-jsbeautifier' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );

    // Post npm install task, to setup the pre-commit hook
    grunt.registerTask(
        'postInstall', [
            'clean:hooks',
            'copy:hooks'
        ]
    );

    // Git pre-commit hook
    grunt.registerTask(
        "preCommit", [
            "jsbeautifier:git-pre-commit",
            "jshint"
        ]
    );
};
