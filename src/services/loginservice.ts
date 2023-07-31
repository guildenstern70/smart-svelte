/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import { session } from '../stores';

type UserAndPassword = {
	username: string;
	password: string;
};

export class LoginService {
	acceptedUsernames: UserAndPassword[] = [
		{ username: 'alessio', password: 'doctor' },
		{ username: 'guest', password: 'guest' }
	];

	performLogin(username: string, password: string): boolean {
		let foundUser = false;
		this.acceptedUsernames.forEach((user) => {
			if (user.username === username && user.password === password) {
				console.log('Login confirmed for user ' + username);
				session.update(() => ({ loggedUser: username }));
				foundUser = true;
			}
		});

		if (!foundUser) {
			console.error('User unknown: ' + username);
			session.update(() => ({ loggedUser: '' }));
			return false;
		}
		return true;
	}
}
