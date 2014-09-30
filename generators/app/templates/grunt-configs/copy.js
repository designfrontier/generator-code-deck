// ================================================================================
// GRUNT CONFIG: COPY
// Copies files and folders.
// grunt-contrib-copy
// https://github.com/gruntjs/grunt-contrib-copy
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('copy', {
		main: {
			expand: true,
			cwd: 'src/',
			src: '*.html',
			dest: 'dist/'
		},
	});
};
