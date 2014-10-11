// ================================================================================
// DATA
// Handlebars data and template rendering
// ================================================================================

'use strict';

// GITHUB DATA
// Grab user's github data via the GitHub API
var githubData = getData('https://api.github.com/users/<%= githubUsername %>');

// GLOBAL CONTEXT (DATA)
var data = {

	// THEME
	theme: {
		mainColor: '<%= mainColor %>',
		specialTransition: 'zoom'
	},

	// GENERAL
	title: '<%= humanPresentationName %>',
	subtitle: '<%= presentationDescription %>',
	githubData: githubData,
	greetingText: 'Hello!',
	goodbyeText: 'Thanks!',

	// SECTIONS
	sections: [
		{
			title: 'This is the 2nd section',
			subtitle: 'This is a subtitle 2',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '
						<p>After you generator your slideshow, you only need to do two things:</p>
						<ol>
							<li>Replace <span class="code">src/images/logo.png</span> with your own logo.</li>
							<li>Edit the data in <span class="code">src/data.js</span></li>
						</ol>
						<p>Use the <span class="code">grunt serve</span> commmand in the root directory to develop and present.</p>
					'
				}
			]
		},
		{
			title: 'This is the 1st section',
			subtitle: 'This is a subtitle 1',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '
						<pre>
							<code>
var coolFunction = function() {
    console.log("This is block of code.");
};
							</code>
						</pre>
					'
				},
				{
					title: 'This is the 2nd slide',
					uniqueContent: '
						<p>This is a paragraph.</p>
					'
				},
				{
					title: 'This is the 3rd slide',
					uniqueContent: '
						This is a <strong>strong</strong> element.
					'
				},
				{
					title: 'This is the 4th slide',
					uniqueContent: '
						<ul>
							<li>This is an unordered list.</li>
							<li>You can make items appear...</li>
							<li class="fragment">one</li>
							<li class="fragment">at</li>
							<li class="fragment">a</li>
							<li class="fragment">time.</li>
							<li class="fragment">You can use ordered lists too.</li>
						</ul>
					'
				},
				{
					title: 'This is the 5th slide',
					uniqueContent: '
						<iframe class="stretch" src="//www.youtube.com/embed/XQu8TTBmGhA" frameborder="0" allowfullscreen></iframe>
					'
				},
				{
					title: 'This is the 6th slide',
					uniqueContent: '
						<blockquote>
							"This is a quoteblock." - Some cool dude.
						</blockquote>
					'
				}
			]
		}
	]
};
