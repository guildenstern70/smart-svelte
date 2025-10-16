/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */
import type { Cookies } from '@sveltejs/kit';
import { CookieService } from './cookieservice';
import { UserDb } from '$lib/services/userdb';

type UserAndPassword = {
	username: string;
	password: string;
};

export class LoginService {
	private readonly cookieService: CookieService;

	constructor(cookies?: Cookies) {
		this.cookieService = new CookieService(cookies);
	}

	acceptedUsernames: UserAndPassword[] = [
		{ username: 'alessio', password: 'doctor' },
		{ username: 'guest', password: 'guest' }
	];

	performLogin(username: string, password: string): boolean {
		for (const user of this.acceptedUsernames) {
			if (user.username === username && user.password === password) {
				console.log('Login confirmed for user ' + username);
				const user = new UserDb().getUser(username);
				if (user) {
					this.cookieService.setSessionCookie(user);
					return true;
				}
				console.warn('User not found in database');
			}
		}
		console.log('Login failed for user ' + username);
		this.cookieService.deleteSessionCookie();
		return false;
	}
}
