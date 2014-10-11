![Code Deck - Powerpoint for Coders](readme-images/logo.png)

## About

_Code Deck_ is a [Yeoman generator](http://yeoman.io/) for creating code based slideshow presentations. It was built because HTML slideshows are awesome, but they take too long to make. With _Code Deck_, your project is **automatically** set up so you can focus on presenting great content.



-------------------------------------------------------



## Get Started

0. Run `npm install -g generator-code-deck` to install the generator, once you have the ["Prerequistes"](#prerequisites) setup.
0. Run `cd` to where you want the project built.
0. Run `yo code-deck` to **create a project**.



-------------------------------------------------------



## Customizing your presentation

After you run the _Code Deck_ generator, you only need to do **two** things:

0. Replace `src/images/logo.png` with your own logo.
0. Edit the data in `src/data.js`.

Use the `grunt serve` command in the root directory to develop and present.

_Refer to the [RevealJS documentation](https://github.com/hakimel/reveal.js) for slide specific functionality and options._



-------------------------------------------------------



## Prerequisites

Before using _Code Deck_, you need to install a few things if you don't have them already...

0. [Node](http://nodejs.org/): [install](http://nodejs.org/)
0. [Bower](http://bower.io/): `npm install -g bower`.
0. [Yeoman](http://yeoman.io/): `npm install -g yo`.
0. [Grunt](http://gruntjs.com/): `npm install -g grunt-cli`.
0. [Sass](http://sass-lang.com/): `gem install sass`.

If you run into any problems, you may need to use the `sudo` command or [reclaim ownership of the `.npm` directory](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo).



-------------------------------------------------------



## Features

- [RevealJS](http://lab.hakim.se/reveal-js/#/) for slide animations and functionality.
- [Grunt](http://gruntjs.com/) tasks for easy development and a shareable `dist` folder.
- [BrowserSync](http://www.browsersync.io/) for live style and content injections during development.
- [Sass](http://sass-lang.com/) variables for easy branding/theming.
- [Handlebars](http://handlebarsjs.com/) templates for automatic slide creation from the data in `src/data.js`.
- [HighlightJS](https://highlightjs.org/) for easy code syntax highlighting inside of `<pre><code>` blocks.



-------------------------------------------------------



## Changelog

##### 1.3.0

- Providing example slide content in `src/data.js`.
- Cleaning up documentation.

##### 1.2.0

- Moving all content to the `data` object in `data.js` for easier editing.

##### 1.1.0

- Creating a `section` template which is re-used for each `section` object in `data.js`.

##### 1.0.0

- Public release



-------------------------------------------------------



Built with ♡ by [@trevordmiller](http://www.trevordmiller.com).
