// ================================================================================
// PRIMER LEVEL: PAGE SUB-GENERATOR
// Scaffolds out a project with the Primer default package (linting files, Grunt tasks, Bower dependencies, directory structure etc.).
// https://code.ldschurch.org/stash/projects/PRIMER/repos/generator-reveal/browse
// http://yeoman.io/authoring/running-context.html
// ================================================================================

'use strict';



// ------------------------------------------------------------------------------
// DEPENDENCIES
// ------------------------------------------------------------------------------

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var banner = require('../../assets/banner');



// ------------------------------------------------------------------------------
// CHALK STYLES
// https://github.com/sindresorhus/chalk
// ------------------------------------------------------------------------------

var highlightStyle = chalk.yellow;
var headerStyle = chalk.yellow.underline;
var dividerLine = '----------------------------------------------------------';



// ------------------------------------------------------------------------------
// "PROJECT" GENERATOR PROCESS
// ------------------------------------------------------------------------------

var PrimerGenerator = yeoman.generators.Base.extend({

	// INIT
	initializing: function() {

		// Require root package.json to avoid npm errors
		this.pkg = require('../../package.json');

		// BANNER ASCII ART
		this.log(banner);
	},

	// COMMAND LINE PROMPTS
	prompting: function() {

		// Wait to go on to the next function until the user has answered the prompts
		var done = this.async();

		// USER INPUT
		// Using Inquirer.js
		// https://github.com/SBoudrias/Inquirer.js
		var prompts = [
			{
				type: 'input',
				name: 'presentationName',
				message: 'Enter the slug for the "presentation":',
				default: 'presentation-name'
			}
		];

		// Store user input and other variables for use in generating files from templates
		this.prompt(prompts, function (props) {

			// User input
			this.presentationName = props.presentationName;

			// Hack so that Yeoman wont process grunt variables that should be variables after the project has been generated
			this.yeomanReplaceTimeStamp = '<%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>';

			// Other variables to pass along
			var dateObject = new Date();
			this.currentDate = dateObject.getFullYear();
			this.humanPresentationName = this._.humanize(props.presentationName);

			// Allow the file to continue executing the next function
			done();
		}.bind(this));
	},

	// CREATE FILES & FOLDERS
	configuring: function() {

		// Alert user
		console.log('\n');
		console.log(highlightStyle('Building "project" folders and files from templates...'));
		console.log('\n');

		// Store user input and variables and use them to render the rest of the files from the templates
		var context = {
			presentationName: this.presentationName,
			humanPresentationName: this.humanPresentationName,
			currentDate: this.currentDate,
			yeomanReplaceTimeStamp: this.yeomanReplaceTimeStamp
		};

		// CREATE FILES & FOLDERS

		// ROOT
		// Root level files
		this.copy('gruntfile.js', 'gruntfile.js');
		this.copy('.bowerrc', '.bowerrc');
		this.copy('.gitignore', '.gitignore');
		this.copy('.gitattributes', '.gitattributes');
		this.copy('.editorconfig', '.editorconfig');
		this.copy('.jshintrc', '.jshintrc');
		this.copy('.scss-lint.yml', '.scss-lint.yml');
		this.template('_README.md', 'README.md', context);
		this.template('_LICENSE.md', 'LICENSE.md', context);
		this.template('_package.json', 'package.json', context);
		this.template('_bower.json', 'bower.json', context);

		// GRUNT CONFIGS
		// `grunt-configs` folder and files
		this.mkdir('grunt-configs');
			this.copy('grunt-configs/autoprefixer.js', 'grunt-configs/autoprefixer.js');
			this.copy('grunt-configs/browserSync.js', 'grunt-configs/browserSync.js');
			this.copy('grunt-configs/clean.js', 'grunt-configs/clean.js');
			this.copy('grunt-configs/copy.js', 'grunt-configs/copy.js');
			this.copy('grunt-configs/handlebars.js', 'grunt-configs/handlebars.js');
			this.copy('grunt-configs/sass.js', 'grunt-configs/sass.js');
			this.copy('grunt-configs/uglify.js', 'grunt-configs/uglify.js');
			this.copy('grunt-configs/usebanner.js', 'grunt-configs/usebanner.js');
			this.copy('grunt-configs/watch.js', 'grunt-configs/watch.js');

		// SRC
		// `src` folder & files
		this.mkdir('src');

			// ROOT
			this.copy('src/index.html', 'src/index.html');
			this.copy('src/index.hbs', 'src/index.hbs');
			this.copy('src/main.scss', 'src/main.scss');
			this.copy('src/main.js', 'src/main.js');

			// COMPONENTS
			// "sections" generated from `yo code-deck:section`
			this.mkdir('src/sections');

				// Default "sections"
				this.template('src/sections/example-section/_example-section.hbs', 'src/sections/example-section/_example-section.hbs');

			// IMAGES
			this.mkdir('src/images');

				// Example image
				this.copy('src/images/logo.png', 'src/images/logo.png');

			// FONTS
			this.mkdir('src/fonts');
	},

	// INSTALL DEPENDENCIES
	install: {

		// INSTALL BOWER DEPENDENCIES
		// This will create the 'bower_components' folder and add bower dependencies to it listed in the newly generated 'bower.json' file
		runBowerInstall: function() {

			// Wait to go on to the next function until this function is done
			var done = this.async();

			// Run "bower install"
			console.log('\n');
			console.log(highlightStyle('Running "bower install" to install the "src/bower_sections" folder and dependencies...'));
			console.log('\n');
			this.bowerInstall('', function() {

				// Allow the file to continue executing the next function
				done();
			});
		},

		// INSTALL NODE DEPENDENCIES
		// This will create the 'node_modules' folder and add node dependencies to it listed in the newly generated 'package.json' file
		runNpmInstall: function() {

			// Wait to go on to the next function until this function is done
			var done = this.async();

			// Run "npm install"
			console.log('\n');
			console.log(highlightStyle('Running "npm install" to install the "node_modules" folder and dependencies. This will take about 60 seconds...'));
			console.log('\n');
			this.npmInstall('', function() {

				// Allow the file to continue executing the next function
				done();
			});
		}
	},

	// END
	end: {

		// GOODBYE MESSAGE
		sayGoodbye: function() {
			console.log('\n');
			console.log(highlightStyle('Your project has been generated!'));
			console.log('\n');
			console.log(highlightStyle(dividerLine));
			console.log('\n');
		},

		// RUN GRUNT DIST
		runGruntServe: function() {

			// Run `grunt serve` to build "src" files to "dist" folder for the first time and launch a node server with live reload.
			console.log('\n');
			console.log(highlightStyle('Running "grunt serve" to build "src/" files to "dist/" folder for the first time and launch a node server with BrowserSync...'));
			console.log('\n');
			this.spawnCommand('grunt', ['serve']);
		}
	}
});



// ------------------------------------------------------------------------------
// MODULE
// ------------------------------------------------------------------------------

module.exports = PrimerGenerator;
