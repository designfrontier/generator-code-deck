// ================================================================================
// GET DATA
// VanillaJS HTTP Get request and JSON parser
// ================================================================================

// GLOBAL FUNCTION
function getData(apiUrl){
	'use strict';

	// Setup
	var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( 'GET', apiUrl, false );
	xmlHttp.send( null );

	// Get the json
	var dataString = xmlHttp.responseText;

	// Convert the returned JSON string into an object literal
	var dataObject = JSON.parse(dataString);

	// Return the object literal
	return dataObject;
};
