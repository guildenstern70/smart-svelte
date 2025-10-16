/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { RequestEvent } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { CookieService } from '$lib/services/cookieservice';

export const load: PageServerLoad = async (event: RequestEvent) => {
	console.log('Logging user out from PageServerLoad');
	const cookieService = new CookieService(event.cookies);
	cookieService.deleteSessionCookie();
};
