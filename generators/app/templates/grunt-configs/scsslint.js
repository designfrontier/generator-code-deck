// ================================================================================
// GRUNT CONFIG: SASSLINT
// Lints Sass files based on options in the root level `.scss-lint.yml` file.
// grunt-scss-lint
// https://github.com/ahmednuaman/grunt-scss-lint
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('scsslint', {
		files: [
			'<%= gruntScope.srcSassFiles %>'
		],
		options: {
			config: '.scss-lint.yml'
		}
	});
};
