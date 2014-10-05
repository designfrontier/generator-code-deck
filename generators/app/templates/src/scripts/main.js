// ================================================================================
// PROJECT LEVEL: JS
// <%= presentationName %>
// Only contains JS shared across the project.
// ================================================================================

// Initialize revealjs when page has loaded
document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// REVEAL
	Reveal.initialize({

		// Display controls in the bottom right corner
		controls: false,

		// Display a presentation progress bar
		progress: true,

		// Display the page number of the current slide
		slideNumber: false,

		// Push each slide change to the browser history
		history: true,

		// Enable keyboard shortcuts for navigation
		keyboard: true,

		// Enable the slide overview mode
		overview: true,

		// Vertical centering of slides
		center: true,

		// Enables touch navigation on devices with touch input
		touch: true,

		// Loop the presentation
		loop: false,

		// Change the presentation direction to be RTL
		rtl: false,

		// Turns fragments on and off globally
		fragments: true,

		// Flags if the presentation is running in an embedded mode,
		// i.e. contained within a limited portion of the screen
		embedded: false,

		// Number of milliseconds between automatically proceeding to the
		// next slide, disabled when set to 0, this value can be overwritten
		// by using a data-autoslide attribute on your slides
		autoSlide: 0,

		// Stop auto-sliding after user input
		autoSlideStoppable: true,

		// Enable slide navigation via mouse wheel
		mouseWheel: false,

		// Hides the address bar on mobile devices
		hideAddressBar: true,

		// Opens links in an iframe preview overlay
		previewLinks: false,

		// Transition style
		transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

		// Transition speed
		transitionSpeed: 'default', // default/fast/slow

		// Transition style for full page slide backgrounds
		backgroundTransition: 'default', // default/none/slide/concave/convex/zoom

		// Number of slides away from the current that are visible
		viewDistance: 3,
	});
});
