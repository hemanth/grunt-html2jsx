'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		html2jsx: {
			options: {
				includeRuntime: true
			},
			convert: {
				files: {
					'test/tmp/converted.jsx': [
						'test/fixture/original.html',
					]
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'html2jsx', 'simplemocha', 'clean']);
};
