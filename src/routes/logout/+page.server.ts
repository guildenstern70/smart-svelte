/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import { redirect } from '@sveltejs/kit';
import type { RequestEvent, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: RequestEvent) => {
	console.log('Deleting cookie...');
	// eat the cookie
	event.cookies.delete('username');

	// redirect the user
	throw redirect(302, '/login');
};
