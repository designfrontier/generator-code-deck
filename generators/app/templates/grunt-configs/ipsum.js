// ================================================================================
// GRUNT CONFIG: IPSUM
// Creates dummy JSON data, to mock getting content from a RESTful JSON API.
// grunt-ipsum
// https://www.npmjs.org/package/grunt-ipsum
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('ipsum.mytask', {

		dest: 'dist/api/data.json',
		template: {

			// ------------------------------------------------------------------------------
			// GENERAL PLACEHOLDERS
			// ------------------------------------------------------------------------------
			header: 'Deserunt consequat adipisicing',
			sentence: 'Duis nulla irure esse ut officia id Lorem dolor tempor magna nostrud Lorem eu.',
			paragraph: 'Minim fugiat veniam deserunt exercitation voluptate sint consequat cillum. Duis incididunt nostrud dolore in labore culpa reprehenderit irure eiusmod pariatur cillum. Velit est adipisicing minim deserunt dolor non qui duis et cillum. Magna ex exercitation ipsum est anim amet anim elit sunt id tempor dolore. Duis nulla irure esse ut officia id Lorem dolor tempor magna nostrud Lorem eu. Excepteur veniam anim voluptate id sit reprehenderit sint anim.',
			date: '{%= grunt.template.date(847602000000, "yyyy-mm-dd") %}',
			full: '{%= ipsum.loremPixelAbstractBw(1200, 400) %}',
			thumb: '{%= ipsum.loremPixelAbstractBw(400, 300) %}',
			links: {
				title: 'Duis incididunt nostrud',
				subtitle: 'Velit est adipisicing minim deserunt dolor',
				href: 'https://www.lds.org/?lang=eng'
			}

			// ------------------------------------------------------------------------------
			// COMPONENTS
			// ------------------------------------------------------------------------------

		},



		// ------------------------------------------------------------------------------
		// REPETITIONS
		// For JSON generated from templates above
		// ------------------------------------------------------------------------------
		repetitions: {
			'links' : 5
		}
	});
};
