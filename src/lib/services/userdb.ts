/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { SmartSession } from '$lib/model/session';

export class UserDb {
	users: SmartSession[] = [
		{
			username: 'alessio',
			firstName: 'Alessio',
			lastName: 'Saltarin'
		},
		{
			username: 'guest',
			firstName: 'Guest',
			lastName: 'User'
		}
	];

	getUser(username: string): SmartSession | undefined {
		return this.users.find((user) => user.username === username);
	}

}
