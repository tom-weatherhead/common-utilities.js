// tom-weatherhead/common-utilities.js/src/http.js

// See e.g.:
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout

'use strict';

import {
	isDefined
} from './types.js';

// export function getJson (url) {
// function getJson_clientSideVersion (url) {
function sendHttpRequest_clientSideVersion (method, urlString, requestData = null, verbose = false) {
	console.log(`verbose is ${verbose}`);

	return new Promise((resolve, reject) => {
		// !!! XMLHttpRequest (apparently) does not exist on the server side. Use require('http') on the server side instead?
		// See e.g. tom-weatherhead\observable-json-rest-api-client\src\engine.js
		const xmlhttp = new XMLHttpRequest();

		xmlhttp.overrideMimeType('application/json'); // ? Which methods (if any) require this?
		// xmlhttp.open('GET', url, true);
		xmlhttp.open(method, urlString, true);

		if (requestData) {
			xmlhttp.setRequestHeader('Content-Type', 'application/json');
		}

		// xmlhttp.onreadystatechange = () => {
		xmlhttp.addEventListener('load', () => {

			if (xmlhttp.readyState === 4) {
				const response = {
					status: xmlhttp.status,
					statusText: xmlhttp.statusText,
					responseText: xmlhttp.responseText
				};

				if (xmlhttp.status === 200) {
					// console.log('xmlhttp.responseText is', xmlhttp.responseText);

					try {
						response.responseJson = JSON.parse(xmlhttp.responseText);
					} catch (error) {
						console.error('JSON.parse error:', error);
						// reject(error);
						response.jsonParseError = error;
					}

					resolve(response);
				} else {
					// console.error('xmlhttp.readyState is', xmlhttp.readyState);
					// console.error('xmlhttp.status is', xmlhttp.status);
					/* reject(new Error({
						status: xmlhttp.status,
						statusText: xmlhttp.statusText
					})); */
					reject(response);
				}
			}
		// };
		});

		/*
		xmlhttp.addEventListener('progress', event => {
		// if (event.lengthComputable) {
		// var percentComplete = event.loaded / event.total * 100;
		// ...
		// } else {
		// Unable to compute progress information since the total size is unknown
		// }
		});
		*/

		xmlhttp.addEventListener('abort', event => {
			console.error('Abort. event:', event);
			reject(new Error('Abort'));
		});

		xmlhttp.addEventListener('error', event => {
			console.error('Error. event:', event);
			reject(new Error('Error'));
		});

		xmlhttp.addEventListener('timeout', event => {
			console.error('Timeout. event:', event);
			reject(new Error('Timeout'));
		});

		xmlhttp.send(null);
	});
}

function sendHttpRequest_serverSideVersion (method, urlString, requestData = null, verbose = false) {
	const url = require('url');

	return new Promise((resolve, reject) => {
		const parsedUrl = url.parse(urlString);
		const options = {
			protocol: parsedUrl.protocol,
			hostname: parsedUrl.hostname,
			port: parsedUrl.port,
			path: parsedUrl.path,
			method: method
		};
		let http;

		if (options.protocol === 'http:') {
			http = require('http');
		} else if (options.protocol === 'https:') {
			http = require('https');
		} else {
			// observer.error(`Unsupported protocol: ${options.protocol}`);
			reject(`Unsupported protocol: ${options.protocol}`);
		}

		const requestObject = http.request(options, response => {
			let rawResponseBody = '';

			if (verbose) {
				console.log(`HTTP response status: ${response.statusCode} ${response.statusMessage}`);
				console.log(`HTTP response headers: ${JSON.stringify(response.headers)}`);
			}

			response.setEncoding('utf8');	// Do we want to allow the caller to choose the encoding?

			response.on('data', chunk => {

				if (verbose) {
					console.log(`HTTP response body chunk: ${chunk}`);
				}

				rawResponseBody += chunk;
			});

			response.on('end', () => {
				let result = {
					statusCode: response.statusCode,
					statusMessage: response.statusMessage,
					rawResponseBody: rawResponseBody
				};

				if (verbose) {
					console.log('No more data in the response.');
				}

				try {
					result.jsonResponseBody = JSON.parse(rawResponseBody);

					if (verbose) {
						console.log('JSON parse succeeded.');
					}
				} catch (error) {
					result.jsonParseError = error;

					if (verbose) {
						console.log('JSON parse failed. Error:', error);
					}
				}

				if (verbose) {
					console.log('Sending result:', result.statusCode, result.statusMessage);
					console.log('rawResponseBody', result.rawResponseBody);
					console.log('jsonResponseBody', result.jsonResponseBody);
				}

				// observer.next(result);
				// observer.complete();
				resolve(result);
			});
		});

		requestObject.on('error', error => {
			console.error(`HTTP request error: ${error.message || error}`);
			// observer.error(error.message);
			reject(error);
		});

		if (requestData !== null) {
			// Write data to the request body
			let requestDataString = JSON.stringify(requestData);

			requestObject.setHeader('Content-Type', 'application/json');
			requestObject.setHeader('Content-Length', Buffer.byteLength(requestDataString));
			requestObject.write(requestDataString);
		}

		requestObject.end();

		return () => {

			if (verbose) {
				console.log('request() : The End.');
			}
		};
	});
}

/*
const postRaw = (urlString, requestData, verbose = false) => request('POST', urlString, requestData, verbose);
const getRaw = (urlString, verbose = false) => request('GET', urlString, null, verbose);
const putRaw = (urlString, requestData, verbose = false) => request('PUT', urlString, requestData, verbose);
const deleteRaw = (urlString, verbose = false) => request('DELETE', urlString, null, verbose);
*/

export function getJson (urlString, verbose = false) {

	if (isDefined(XMLHttpRequest)) {
		return sendHttpRequest_clientSideVersion('GET', urlString, null, verbose);
	} else {
		return sendHttpRequest_serverSideVersion('GET', urlString, null, verbose);
	}
}

export function postJson (urlString, jsonToPost, verbose = false) {

	if (isDefined(XMLHttpRequest)) {
		return sendHttpRequest_clientSideVersion('POST', urlString, jsonToPost, verbose);
	} else {
		return sendHttpRequest_serverSideVersion('POST', urlString, jsonToPost, verbose);
	}
}

/*
export function postJson (url, jsonToPost) {

	return new Promise((resolve, reject) => {
		const xmlhttp = new XMLHttpRequest();

		// xmlhttp.overrideMimeType('application/json');
		xmlhttp.open('POST', url, true);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');

		// xmlhttp.onreadystatechange = () => {
		xmlhttp.addEventListener('load', () => {

			if (xmlhttp.readyState === 4) {

				if (xmlhttp.status === 200) {
					resolve(xmlhttp.responseText);
				} else {
					// console.error('xmlhttp.readyState is', xmlhttp.readyState);
					// console.error('xmlhttp.status is', xmlhttp.status);
					reject(new Error({
						status: xmlhttp.status,
						statusText: xmlhttp.statusText
					}));
				}
			}
		});
		// };

		xmlhttp.addEventListener('abort', event => {
			console.error('Abort. event:', event);
			reject(new Error('Abort'));
		});

		xmlhttp.addEventListener('error', event => {
			console.error('Error. event:', event);
			reject(new Error('Error'));
		});

		xmlhttp.addEventListener('timeout', event => {
			console.error('Timeout. event:', event);
			reject(new Error('Timeout'));
		});

		xmlhttp.send(JSON.stringify(jsonToPost));
	});
}
*/
