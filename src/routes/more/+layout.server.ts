/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { RequestEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { SmartSession } from '$lib/model/session';
import { CookieService } from '$lib/services/cookieservice';

export const load: LayoutServerLoad = async (event: RequestEvent) => {
	// Cookies are only available in server-side code
	const cookies = event.cookies;

	if (cookies) {
		const cookieService = new CookieService(cookies);
		const loggedUser: SmartSession | undefined = cookieService.getSessionCookie();
		if (loggedUser) {
			console.log('Found user in cookies = ' + loggedUser.username);
			return { loggedUser };
		} else {
			console.warn('No user found in cookies');
		}
	}

	return {};
};
