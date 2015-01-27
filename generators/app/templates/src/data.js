// ================================================================================
// DATA
// ================================================================================

'use strict';

// Grab user's github data via the GitHub API
var githubData = getData('https://api.github.com/users/<%= githubUsername %>');

// Global context for Handlebars templates in `src/templates`
var data = {
	githubData: githubData,



	// ------------------------------------------
	// CUSTOMIZE BELOW
	// ------------------------------------------
	social: {
		twitter: 'daniel_sellers',
		github: 'designfrontier',
		profile: 'http://photos-h.ak.instagram.com/hphotos-ak-xpf1/t51.2885-15/10755899_365394280313935_633423439_n.jpg',
		name: 'Daniel Sellers'
	},
	theme: {
		mainColor: '<%= mainColor %>',
		specialTransition: 'zoom'
	},
	title: '<%= humanPresentationName %>',
	subtitle: '<%= presentationDescription %>',
	greetingText: 'This is greeting text!',
	goodbyeText: 'This is goodbye text!',
	sections: [
		{
			title: 'This is the 1st section',
			subtitle: 'This is a subtitle',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '\
						<pre>\
							<code>\
var coolFunction = function() {\
    console.log("This is block of code.");\
};\
							</code>\
						</pre>'
				},
				{
					title: 'this is not a module.'
					, background: {
						image: 'swissArmy_1.jpg'
					}
					, image: {
						attribution: 'Swiss Army Knife by Basheer Tome | CC BY 2.0'
					}
					, classes: 'invert--header'
				},
				{
					title: 'This is the 3rd slide',
					uniqueContent: 'This is a <strong>strong</strong> element.'
				},
				{
					title: 'This is the 4th slide',
					uniqueContent: '\
						<ul>\
							<li>This is an unordered list.</li>\
							<li>You can make items appear...</li>\
							<li class="fragment">one</li>\
							<li class="fragment">at</li>\
							<li class="fragment">a</li>\
							<li class="fragment">time.</li>\
							<li class="fragment">You can use ordered lists too.</li>\
						</ul>\
					'
				},
				{
					title: 'This is the 5th slide',
					uniqueContent: '<iframe class="stretch" src="//www.youtube.com/embed/XQu8TTBmGhA" frameborder="0" allowfullscreen></iframe>'
				},
				{
					title: 'This is the 6th slide',
					uniqueContent: '\
						<blockquote>\
							"This is a quoteblock." - Some cool dude.\
						</blockquote>\
					'
				}
			]
		},
		{
			title: 'This is the 2nd section',
			subtitle: 'This is a subtitle',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		}
	]
};
