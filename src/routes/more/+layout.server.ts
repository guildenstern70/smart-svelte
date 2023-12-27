/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { RequestEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event: RequestEvent) => {
	// Cookies are only available in server-side code
	const cookies = event.cookies;

	if (cookies) {
		const loggedUser: string | undefined = cookies.get('username');
		if (loggedUser) {
			console.log('Found username in cookies = ' + loggedUser);
			return { loggedUser };
		}
	}

	return {};
};
