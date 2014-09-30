// ================================================================================
// GRUNT CONFIG: JSHINT
// Lints JS files based on options in the root level `.jshintrc` file.
// grunt-contrib-jshint
// https://github.com/gruntjs/grunt-contrib-jshint
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('jshint', {
		src: [
			'<%= gruntScope.srcJsFiles %>',
			'<%= gruntScope.gruntConfigJsFiles %>'
		],
		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish')
		}
	});
};
