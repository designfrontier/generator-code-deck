// ================================================================================
// GRUNT CONFIG: SASS
// Compiles Sass to CSS.
// grunt-contrib-sass
// https://github.com/gruntjs/grunt-contrib-sass
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('sass', {

		// While watch is running, compress CSS completely to optimize file loading
		dist: {
			files: {
				'<%= gruntScope.distMainCssFile %>': '<%= gruntScope.srcMainSassFile %>'
			},
			options: {
				banner: '<%= gruntScope.commentBannerStars %>',
				require: 'sass-globbing',
				style: 'compressed'
			}
		},

		// If 'grunt debug' is used, don't compress CSS
		debug: {
			files: {
				'<%= gruntScope.distMainCssFile %>': '<%= gruntScope.srcMainSassFile %>'
			},
			options: {
				banner: '<%= gruntScope.commentBannerStars %>',
				require: 'sass-globbing',
				style: 'expanded',
				lineNumbers: true
			}
		}
	});
};
