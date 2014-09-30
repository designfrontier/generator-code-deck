// ================================================================================
// GRUNT CONFIG: AUTOPREFIXER
// Auto add vendor prefixes for browser support using the 'caniuse.com' database.
// grunt-autoprefixer
// https://github.com/nDmitry/grunt-autoprefixer
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('autoprefixer', {
		dist: {
			src: [
				'<%= gruntScope.distMainCssFile %>'
			]
		},
		options: {

			// Portfolio level standard for browser support
			browsers: [
				'last 2 versions'
			]
		}
	});
};
