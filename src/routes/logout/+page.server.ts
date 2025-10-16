/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import { redirect } from '@sveltejs/kit';
import type { RequestEvent, PageServerLoad } from './$types';
import { CookieService } from '$lib/services/cookieservice';

export const load: PageServerLoad = async (event: RequestEvent) => {
	console.log('Deleting cookie...');

	// eat the cookie
	const cookieService = new CookieService(event.cookies);
	cookieService.deleteCookie('username');

	// redirect the user
	throw redirect(302, '/login');
};
