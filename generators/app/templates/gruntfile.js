// ================================================================================
// PRIMER LEVEL: GRUNTFILE
// Grunt build process.
// http://gruntjs.com
// ================================================================================

module.exports = function(grunt) {
	'use strict';



	// ------------------------------------------------------------------------------
	// PROJECT LEVEL: VARIABLES
	// Contains only variables shared across Grunt files.
	// ------------------------------------------------------------------------------

	var gruntScope = {

		// COMMENT BANNERS
		// Placed on generated files to warn developers not to edit `dist` files directly.
		commentBannerText: '\tWARNING: Do not edit this file! It is generated automatically from multiple source files.\n\tLAST GENERATED: <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>\n',
		commentBannerHtml: '<!--\n<%= gruntScope.commentBannerText %>-->\n\n',
		commentBannerStars: '/**\n<%= gruntScope.commentBannerText %>*/\n\n',

		// HTML FILES
		srcHtmlFiles: [
			'src/*.html',
		],
		distHtmlFiles: [
			'dist/*.html'
		],

		// HANDLEBARS TEMPLATES & PARTIALS
		srcHandlebarsFiles: [
			'src/sections/**/*.hbs'
		],

		// SASS/CSS FILES
		srcSassFiles: [
			'src/styles/**/*.scss'
		],
		srcMainSassFile: 'src/styles/main.scss',
		distMainCssFile: 'dist/all.min.css',

		// JS FILES
		srcJsBowerComponentFiles: [
			'src/bower_components/revealjs/js/reveal.js',
			'src/bower_components/handlebars/handlebars.runtime.js'
		],
		srcJsFiles: [
			'src/scripts/**/*.js'
		],
		distMainJsFile: 'dist/all.min.js',
		gruntConfigJsFiles: [
			'Gruntfile.js',
			'grunt-configs/*.js'
		],

		// IMAGES
		srcImageFiles: [
			'src/images/**/*.{png,jpg,gif,svg}'
		]
	};



	// ------------------------------------------------------------------------------
	// CONFIG
	// ------------------------------------------------------------------------------

	// INIT
	grunt.initConfig({
		pkg: require('./package.json'),

		// Pass shared variables to be used by external config files.
		gruntScope: gruntScope
	});

	// LOAD TASKS
	// Load tasks automatically with 'load-grunt-tasks' plugin.
	// https://github.com/sindresorhus/load-grunt-tasks
	require('load-grunt-tasks')(grunt);

	// TASK CONFIGS
	// Load per-task configs from seperate files.
	grunt.loadTasks('grunt-configs/');



	// ------------------------------------------------------------------------------
	// REGISTER TASKS
	// ------------------------------------------------------------------------------

	// DEFAULT
	// Runs all tasks
	// Run 'grunt'
	grunt.registerTask('default', [
		'clean',
		'handlebars',
		'copy',
		'usebanner',
		'sass:dist',
		'autoprefixer',
		'uglify:dist'
	]);

	// SERVE
	// Runs all general tasks (default), then starts a server for live reloading.
	// Run 'grunt serve'
	grunt.registerTask('serve', [
		'default',
		'browserSync',
		'watch'
	]);
};
