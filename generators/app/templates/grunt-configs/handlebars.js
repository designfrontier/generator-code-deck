// ================================================================================
// GRUNT CONFIG: HANDLEBARS
// Pre-compiles handlebars templates.
// grunt-contrib-handlebars
// https://github.com/gruntjs/grunt-contrib-handlebars
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('handlebars', {
		compile: {
			options: {

				// Replace the default global 'JST' container of templates with 'Handlebars.Templates'
				namespace: 'Handlebars.Templates',

				// Remove folder name and slash from template function names
				processName: function(filePath) {
					var templateName = filePath.split('/');
					return templateName[templateName.length - 1];
				}
			},
			files: [

				// Compile partials (components)
				{
					'dist/partials.js': 'src/templates/_*.hbs'
				},

				// Compile templates (pages)
				{
					'dist/templates.js': 'src/templates/index.hbs'
				}
			]
		}
	});
};
