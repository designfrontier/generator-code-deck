// ================================================================================
// DATA
// Handlebars data and template rendering
// ================================================================================


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
			title: 'This is a title 1',
			subtitle: 'This is a subtitle 1',
			slides: [
				{
					title: 'This is a slide 1'
				},
				{
					title: 'This is a slide 2'
				},
				{
					title: 'This is a slide 3'
				},
				{
					title: 'This is a slide 4'
				},
				{
					title: 'This is a slide 5'
				}
			]
		},
		{
			title: 'This is a title 2',
			subtitle: 'This is a subtitle 2',
			slides: [
				{
					title: 'This is a slide 1'
				},
				{
					title: 'This is a slide 2'
				},
				{
					title: 'This is a slide 3'
				},
				{
					title: 'This is a slide 4'
				},
				{
					title: 'This is a slide 5'
				}
			]
		},
		{
			title: 'This is a title 3',
			subtitle: 'This is a subtitle 3',
			slides: [
				{
					title: 'This is a slide 1'
				},
				{
					title: 'This is a slide 2'
				},
				{
					title: 'This is a slide 3'
				},
				{
					title: 'This is a slide 4'
				},
				{
					title: 'This is a slide 5'
				}
			]
		}
	]
};
