// ================================================================================
// DATA
// Handlebars data and template rendering
// ================================================================================

// GLOBAL CONTEXT (DATA)
var data = {

	// THEME
	theme: {
		mainColor: '#fead4c',
		specialTransition: 'zoom'
	},

	// GENERAL
	title: 'This is the title',
	subtitle: 'And this is the subtitle',
	greetingText: 'Hello!',
	goodbyeText: 'Thanks!',
	authorName: 'Billy Bob Joe',
	authorWebsite: {
		text: '@billybob',
		href: 'http://github.com'
	},

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
