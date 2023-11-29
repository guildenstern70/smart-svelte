/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Cookies } from "@sveltejs/kit";

type UserAndPassword = {
	username: string;
	password: string;
};

export class LoginService {
	acceptedUsernames: UserAndPassword[] = [
		{ username: 'alessio', password: 'doctor' },
		{ username: 'guest', password: 'guest' }
	];

	setUsernameCookie(cookies: Cookies, username: string): void {
		cookies.set('username', username, {
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			path: '/',
			maxAge: 60 * 60 * 24 * 7
		});
	}

	performLogin(cookies: Cookies, username: string, password: string): boolean {
		for (const user of this.acceptedUsernames) {
			if (user.username === username && user.password === password) {
				console.log('Login confirmed for user ' + username);
				this.setUsernameCookie(cookies, username);
				return true;
			}
		}
		console.log('Login failed for user ' + username);
		this.setUsernameCookie(cookies, '');
		return false;
	}

}
