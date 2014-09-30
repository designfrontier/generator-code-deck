// ================================================================================
// GRUNT CONFIG: CLEAN
// Cleans dist folder.
// grunt-contrib-clean
// https://github.com/gruntjs/grunt-contrib-clean
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('clean', {
		clean: [
			'dist'
		]
	});
};
