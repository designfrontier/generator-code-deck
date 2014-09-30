// ================================================================================
// GRUNT CONFIG: USEBANNER
// Adds a banner to files.
// Using for HTML files only since Sass and uglify tasks take care of JS/Sass banners.
// grunt-banner
// https://github.com/mattstyles/grunt-banner
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('usebanner', {
		files: {
			src: [
				'<%= gruntScope.distHtmlFiles %>',
			]
		},
		options: {
			position: 'top',
			banner: '<%= gruntScope.commentBannerHtml %>',
			linebreak: true
		}
	});
};
