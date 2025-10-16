/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Cookies } from '@sveltejs/kit';
import type { SmartSession } from '$lib/model/session';

const SESSION_COOKIE_KEY = 'session';

export class CookieService {
	private readonly cookies?: Cookies;

	constructor(cookies?: Cookies) {
		this.cookies = cookies;
	}

	setSessionCookie(user: SmartSession): void {
		const jsonSession = JSON.stringify(user);
		this.setCookie(SESSION_COOKIE_KEY, jsonSession);
	}

	getSessionCookie(): SmartSession | undefined {
		if (this.cookies) {
			const jsonSession = this.cookies.get(SESSION_COOKIE_KEY);
			if (jsonSession)
				return JSON.parse(jsonSession);
			else return undefined;
		}
		return undefined;
	}

	deleteSessionCookie() {
		if (this.cookies) {
			this.cookies.delete(SESSION_COOKIE_KEY, { path: '/'});
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
