function gruntSupportCode( grunt ) {

    var outExt = "js",
        target = "target";

    grunt.util.linefeed = '\n';

    function getFileMap( baseDir, ext ) {
        var sources = {},
            key;

        if ( !grunt.file.exists( target ) ) {
            grunt.file.mkdir( target );
        }

        grunt.file.recurse( baseDir, function ( abspath, rootdir, subdir, filename ) {
            if ( filename.substring( filename.length - ext.length ) === ext ) {
                key = abspath.replace( ext, outExt ).replace( "src", target );
                sources[ key ] = abspath;
            }
        } );

        return sources;
    }

    return {
        getFileMap: getFileMap
    };
}

module.exports = function ( grunt ) {

    var gruntSupport = gruntSupportCode( grunt );

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
        },
        handlebars: {
            compile: {
                files: gruntSupport.getFileMap( 'src/templates', 'hbs' )
            },
            options: {
                namespace: false,
                amd: true
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-jsbeautifier' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-handlebars' );

    grunt.registerTask( 'default', [ 'handlebars' ] );

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
