/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
	// load Grunt plugins from NPM
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-gettext');

    // configure plugins
    grunt.initConfig({
    	nggettext_extract: {
    		pot: {
    			files: {
    				'po/template.pot': ['wwwroot/**/*.html']
    			}
    		}
    	},

    	nggettext_compile: {
    		all: {
    			files: {
    				'wwwroot/js/translations.js': ['po/*.po']
    			}
    		}
    	},

    	concat: {
    		angular: {
    			src: [
					'bower_components/angular-google-maps/dist/angular-google-maps.min.js',
					'bower_components/angular-gettext/dist/angular-gettext.min.js',
    			],
    			dest: 'wwwroot/js/angular.libs.min.js'
    		},
    		app: {
    			src: [
					'Scripts/app.js',
					'Scripts/appBackend.js',
					'Scripts/**/*.js'],
    			dest: 'wwwroot/js/app.js'
			}
    	},

        uglify: {
            my_target: {
            	files: { 'wwwroot/js/app.min.js': ['wwwroot/js/app.js'] }
            }
        },

        watch: {
            scripts: {
            	files: ['bower_components/**/*.js', 'Scripts/**/*.js'],
            	tasks: ['concat', 'uglify']
            }
        }
    });

    // define tasks
    grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};