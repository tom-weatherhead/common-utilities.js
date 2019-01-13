// tom-weatherhead/common-utilities.js/src/http.js

// See e.g.:
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
// - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout

'use strict';

export function getJson (url) {

	return new Promise((resolve, reject) => {
		const xmlhttp = new XMLHttpRequest();

		xmlhttp.overrideMimeType('application/json');
		xmlhttp.open('GET', url, true);

		// xmlhttp.onreadystatechange = () => {
		xmlhttp.addEventListener('load', () => {

			if (xmlhttp.readyState === 4) {

				if (xmlhttp.status === 200) {
					// console.log('xmlhttp.responseText is', xmlhttp.responseText);

					try {
						resolve(JSON.parse(xmlhttp.responseText));
					} catch (error) {
						console.error('JSON.parse error:', error);
						reject(error);
					}
				} else {
					// console.error('xmlhttp.readyState is', xmlhttp.readyState);
					// console.error('xmlhttp.status is', xmlhttp.status);
					reject(new Error({
						status: xmlhttp.status,
						statusText: xmlhttp.statusText
					}));
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
