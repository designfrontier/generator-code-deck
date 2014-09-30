// ================================================================================
// REVEAL: SLIDE SUB-GENERATOR
// Generates a new slide for your project.
// https://github.com/trevordmiller/generator-reveal
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

var highlightStyle = chalk.cyan.bold;
var headerStyle = chalk.cyan.bold.underline;
var dividerLine = '----------------------------------------------------------';



// ------------------------------------------------------------------------------
// "SLIDE" SUB-GENERATOR PROCESS
// ------------------------------------------------------------------------------

var SlideGenerator = yeoman.generators.Base.extend({
    init: function () {

        // BANNER
        this.log(banner);

        // SUB BANNER
        this.log(headerStyle('Reveal: "Slide" Sub-Generator'));

        // INSTRUCTIONS
        this.log(highlightStyle('Instructions:'));
        this.log(highlightStyle('    1) Make sure you are familiar with the documentation (https://github.com/trevordmiller/generator-reveal).'));
        this.log(highlightStyle('    2) Make sure you are in the correct directory.'));
        this.log(highlightStyle('    3) Answer the prompts below to generate your Reveal "Slide".'));
        this.log('\n');
    },

    // COMMAND LINE PROMPTS
    promptUser: function() {

        // Wait to go on to the next function until the user has answered the prompts
        var done = this.async();

        // USER INPUT
        // Using Inquirer.js
        // https://github.com/SBoudrias/Inquirer.js
        var prompts = [
            {
                type: 'input',
                name: 'slideName',
                message: 'Enter the slug for the "slide":',
                default: 'slide-name'
            },
            {
                type: 'checkbox',
                name: 'fileTypes',
                message: 'What file types will the slide need?',
                choices: [
                    {
                        name: 'Handlebars Partial',
                        value: 'includeHandlebars',
                        checked: true
                    },
                    {
                        name: 'Sass Partial',
                        value: 'includeSass',
                        checked: true
                    },
                    {
                        name: 'JavaScript Module',
                        value: 'includeJs',
                        checked: true
                    }
                ]
            }
        ];

        // Store user input and other variables for use in generating files from templates
        this.prompt(prompts, function (props) {

            // Set up function to decide if a file type needs to be included or not
            var hasFileType = function (fileType) {
                return props.fileTypes.indexOf(fileType) !== -1;
            };

            // Store user input
            this.slideName = props.slideName;
            this.includeHandlebars = hasFileType('includeHandlebars');
            this.includeSass = hasFileType('includeSass');
            this.includeJs = hasFileType('includeJs');

            // Allow the file to continue executing the next function
            done();
        }.bind(this));
    },

    // CREATE FOLDER & FILES
    createFiles: function () {
        console.log('\n');
        console.log(highlightStyle('Building "slide" folder and files from templates...'));
        console.log('\n');

        // Dynammically generated files from templates
        // Store user input and variables and use them to render the rest of the files from the templates
        var context = {
            slideName: this.slideName,
            includeHandlebars: this.includeHandlebars,
            includeSass: this.includeSass,
            includeJs: this.includeJs
        };

        // Include files based on user's selections
        if (context.includeHandlebars === true) {
            this.template('_slide-name.hbs', 'src/slides/' + context.slideName + '/' + '_' + context.slideName + '.hbs', context);
        }
        if (context.includeSass === true) {
            this.template('_slide-name.scss', 'src/slides/' + context.slideName + '/' + '_' + context.slideName + '.scss', context);
        }
        if (context.includeJs === true) {
            this.template('_slide-name.js', 'src/slides/' + context.slideName + '/' + '_' + context.slideName + '.js', context);
        }
    },

    // GOODBYE MESSAGE
    sayGoodbye: function(){
        console.log('\n');
        console.log(highlightStyle('Your slide folder and files have been generated inside of "src/slide/".'));
        console.log('\n');
        console.log(highlightStyle(dividerLine));
        console.log('\n');
    }
});



// ------------------------------------------------------------------------------
// MODULE
// ------------------------------------------------------------------------------

module.exports = SlideGenerator;
