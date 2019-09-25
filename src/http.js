// tom-weatherhead/common-utilities.js/src/http.js

// See e.g.:
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout

'use strict';

function sendHttpRequest_clientSideVersion (method, urlString, requestData = null /* , verbose = false */) {
	// console.log(`verbose is ${verbose}`);

	return new Promise((resolve, reject) => {
		const xmlhttp = new XMLHttpRequest();

		xmlhttp.overrideMimeType('application/json'); // ? Which methods (if any) require this?
		xmlhttp.open(method, urlString, true);

		if (requestData) {
			xmlhttp.setRequestHeader('Content-Type', 'application/json');
		}

		xmlhttp.addEventListener('load', () => {

			// if (xmlhttp.readyState === 4) {
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
			// }
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

		if (requestData) {
			xmlhttp.send(JSON.stringify(requestData));
		} else {
			xmlhttp.send(null);
		}
	});
}

/*
// TODO: Move this to common-utilities-heavy.js ?

function sendHttpRequest_serverSideVersion (method, urlString, requestData = null, verbose = false) {
	// console.log('sendHttpRequest_serverSideVersion() : Begin');
	// console.log('sendHttpRequest_serverSideVersion() : urlString is', urlString);

	const url = require('url');

	return new Promise((resolve, reject) => {
		const parsedUrl = url.parse(urlString);

		// console.log('sendHttpRequest_serverSideVersion() : parsedUrl is', parsedUrl);

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
			reject(`Unsupported protocol: ${options.protocol}`);
		}

		// console.log('sendHttpRequest_serverSideVersion() : http is', http);

		const requestObject = http.request(options, response => {
			// console.log('sendHttpRequest_serverSideVersion() : Callback: Begin');

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
					status: response.statusCode,
					statusText: response.statusMessage,
					responseText: rawResponseBody
				};

				if (verbose) {
					console.log('No more data in the response.');
				}

				try {
					result.responseJson = JSON.parse(rawResponseBody);

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
					console.log('Sending result:', result.status, result.statusText);
					console.log('rawResponseBody', result.responseText);
					console.log('jsonResponseBody', result.responseJson);
				}

				resolve(result);
			});
		});

		requestObject.on('error', error => {
			console.error(`HTTP request error: ${error.message || error}`);
			reject(error);
		});

		if (requestData !== null) {
			// console.log('sendHttpRequest_serverSideVersion() : Adding the request data to the request object');

			// Write data to the request body
			let requestDataString = JSON.stringify(requestData);

			requestObject.setHeader('Content-Type', 'application/json');
			requestObject.setHeader('Content-Length', Buffer.byteLength(requestDataString));
			requestObject.write(requestDataString);
		}

		requestObject.end();

		return () => {

			if (verbose) {
				console.log('sendHttpRequest_serverSideVersion() : The End.');
			}
		};
	});
}
 */

/*
const postRaw = (urlString, requestData, verbose = false) => request('POST', urlString, requestData, verbose);
const getRaw = (urlString, verbose = false) => request('GET', urlString, null, verbose);
const putRaw = (urlString, requestData, verbose = false) => request('PUT', urlString, requestData, verbose);
const deleteRaw = (urlString, verbose = false) => request('DELETE', urlString, null, verbose);
*/

export function getJson (urlString, verbose = false) {

	// if (typeof XMLHttpRequest !== 'undefined') {
	return sendHttpRequest_clientSideVersion('GET', urlString, null, verbose);
	// } else {
	// 	return sendHttpRequest_serverSideVersion('GET', urlString, null, verbose);

	// 	// return Promise.reject('XMLHttpRequest missing but required. Node.js packages such as http cause angular-cli to fail.');
	// }
}

export function postJson (urlString, jsonToPost, verbose = false) {

	// if (typeof XMLHttpRequest !== 'undefined') {
	return sendHttpRequest_clientSideVersion('POST', urlString, jsonToPost, verbose);
	// } else {
	// 	return sendHttpRequest_serverSideVersion('POST', urlString, jsonToPost, verbose);

	// 	// return Promise.reject('XMLHttpRequest missing but required. Node.js packages such as http cause angular-cli to fail.');
	// }
}
