(function() {
	'use strict';

	// CONTEXT (DATA)
	var presentationData = {
		title: 'This is the title',
		subtitle: 'And this is the subtitle',
		greetingText: 'Hello!',
		goodbyeText: 'Thanks!',
		authorName: 'Billy Bob Joe',
		authorWebsite: {
			text: '@billybob',
			href: 'http://github.com'
		},
		theme: {
			mainColor: '#fead4c',
			specialTransition: 'zoom'
		},
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
					}
				]
			}
		]
	};

	// RENDER THE TEMPLATE
	document.body.innerHTML = Handlebars.Templates['index.hbs'](presentationData);
})();
