/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Cookies } from '@sveltejs/kit';

export class CookieService {
	private readonly cookies?: Cookies;

	constructor(cookies?: Cookies) {
		this.cookies = cookies;
	}

	setUsernameCookie(username: string): void {
		this.setCookie('username', username);
	}

	getUsernameCookie(): string | undefined {
		if (this.cookies) {
			return this.cookies.get('username');
		}
	}

	getCookie(cookieKey: string): string | undefined {
		if (this.cookies) {
			return this.cookies.get(cookieKey);
		}
	}

	deleteCookie(cookieKey: string) {
		if (this.cookies) {
			this.cookies.delete(cookieKey);
		}
	}

	setCookie(cookieKey: string, cookieValue: string): void {
		if (this.cookies) {
			this.cookies.set(cookieKey, cookieValue, {
				httpOnly: true,
				sameSite: 'strict',
				secure: false,
				path: '/',
				maxAge: 60 * 60 * 24 * 7
			});
		}
	}
}
