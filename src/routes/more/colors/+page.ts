/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Color, Colors } from '../../../model/color';

export async function load(): Promise<Colors | Error> {
	const REST_API_URL = 'https://reqres.in/api/unknown';
	console.log(`Calling ${REST_API_URL} ...`);

	const response = await fetch(REST_API_URL);

	if (response.ok) {
		const responseData: { data: Color[] } = await response.json();
		console.log('Got: ' + JSON.stringify(responseData));
		return { colors: responseData.data };
	}

	return new Error(`Cannot load colors from ${REST_API_URL} ...`);
}
