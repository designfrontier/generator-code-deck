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
			title: 'This is the 1st section',
			subtitle: 'This is a subtitle 1',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '
						<p>Hi there!</p>
					'
				},
				{
					title: 'This is the 2nd slide',
					uniqueContent: '
						<img src="images/example.jpg" alt="Lorem ipsum" />
					'
				},
				{
					title: 'This is the 3rd slide',
					uniqueContent: '
						<iframe class="stretch" src="//www.youtube.com/embed/y-waTi8BPdk" frameborder="0" allowfullscreen></iframe>
					'
				}
			]
		},
		{
			title: 'This is the 2nd section',
			subtitle: 'This is a subtitle 2',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '
						<ul>
							<li class="fragment">Nisi amet enim aliquip tempor qui.</li>
							<li class="fragment">Aliquip enim consectetur dolore ea aliqua aliqua aute.</li>
							<li class="fragment">Commodo tempor ea cillum sit exercitation.</li>
						</ul>
					'
				},
				{
					title: 'This is the 2nd slide',
					uniqueContent: '
						<pre>
							<code class="javascript">
								var coolFunction = function() {
									console.log("I am a cool function");
								};
							</code>
						</pre>
					'
				}
			]
		}
	]
};
