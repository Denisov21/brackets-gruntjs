/*
* Grunt.js
* @author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT @license:
* http://www.opensource.org/licenses/mit-license.php
*
* Grunt.js Copyright Fede91 2014.
*/
module.exports = function (grunt) {

    grunt.initConfig({
        jslint: {
            all: {
                src: ["*.js", "src/*.js"],
                directives: {
                    "node": true,
                    "nomen": true,
                    "regexp": true,
                    "sloppy": true,
                    "todo": true,
                    "vars": true,
                    "unparam": true,
                    "globals": {
                        "$": true,
                        "document": true,
                        "brackets": true,
                        "define": true,
                        "Mustache": true
                    }
                }
            }
        },
        jshint: {
            files: ["*.js", "src/*.js"],
            options: {
                jshintrc: true
            }
        },
        less: {
            development: {
                files: {
                    "styles/brackets-gruntjs.css": "styles/brackets-gruntjs.less"
                }
            }
        }
    });

    // Init plugin
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    // Init task
    grunt.registerTask("build-less", ["less"]);
    grunt.registerTask("build", ["less", "jslint", "jshint"]);
};