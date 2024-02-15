/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Actions, RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { LoginService } from '../../lib/services/loginservice';

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		const request = event.request;

		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (username == null || password == null) {
			console.error('Username or password are null');
			return;
		}

		console.log('Received login request for ' + username + '/*************');

		const loginService = new LoginService(event.cookies);
		if (loginService.performLogin(username.toString(), password.toString())) {
			throw redirect(303, '/more');
		}

		return { success: false };
	}
};
