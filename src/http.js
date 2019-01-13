// tom-weatherhead/common-utilities.js/src/http.js

'use strict';

export function getJson (url) {

	return new Promise((resolve, reject) => {
		const xmlhttp = new XMLHttpRequest();

		xmlhttp.overrideMimeType('application/json');
		xmlhttp.open('GET', url, true);

		xmlhttp.onreadystatechange = () => {

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
		};

		xmlhttp.send(null);
	});
}

export function postJson (url, jsonToPost) {

	return new Promise((resolve, reject) => {
		const xmlhttp = new XMLHttpRequest();

		// xmlhttp.overrideMimeType('application/json');
		xmlhttp.open('POST', url, true);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');

		xmlhttp.onreadystatechange = () => {

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
		};

		xmlhttp.send(JSON.stringify(jsonToPost));
	});
}
