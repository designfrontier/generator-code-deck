// ================================================================================
// GRUNT CONFIG: COPY
// Copies files and folders.
// grunt-contrib-copy
// https://github.com/gruntjs/grunt-contrib-copy
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('copy', {
		html: {
			expand: true,
			cwd: 'src/',
			src: '*.html',
			dest: 'dist/'
		},
		data: {
			expand: true,
			cwd: 'src/',
			src: 'data.js',
			dest: 'dist/'
		},
		scripts: {
			expand: true,
			cwd: 'src/',
			src: 'scripts/**/*',
			dest: 'dist/'
		},
		images: {
			expand: true,
			cwd: 'src/',
			src: 'images/**/*.{png,jpg,gif,svg}',
			dest: 'dist/'
		},
		reveal: {
			expand: true,
			cwd: 'src/bower_components/revealjs/css/',
			src: 'reveal.min.css',
			dest: 'dist/'
		},
		ace: {
			expand: true,
			cwd: 'src/bower_components/',
			src: 'ace/**/*',
			dest: 'dist/'
		}
	});
};
