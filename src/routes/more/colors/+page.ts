/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Color } from '$lib/model/color';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {
	const REST_API_URL = 'https://reqres.in/api/unknown';
	console.log(`Calling ${REST_API_URL} ...`);

	const response = await fetch(REST_API_URL, {
		method: "GET",
		redirect: "follow",
		headers: {
			"x-api-key": "reqres-free-v1",
		},
	});

	console.log(`Response: ${response.status} ${response.statusText}`);

	if (response.ok) {
		const responseData: { data: Color[] } = await response.json();
		console.log('Got: ' + JSON.stringify(responseData));
		return { colors: responseData.data, error: null };
	}

	return { colors: undefined, error: `Cannot load colors from ${REST_API_URL} ...`};
}
