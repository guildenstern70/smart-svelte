/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const REST_API_URL = 'https://reqres.in/api/unknown';
	console.log(`Calling ${REST_API_URL} ...`);

	const res = await fetch(REST_API_URL);
	if (res.ok) {
		const { data } = await res.json();
		console.log('Got: ' + JSON.stringify(data));
		return { colors: data };
	}

	return new Error(`Cannot load colors from ${REST_API_URL} ...`);
}
