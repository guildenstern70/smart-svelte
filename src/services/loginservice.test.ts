/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { SmartSession } from '../stores';

import { describe, it, expect } from 'vitest';
import { LoginService } from './loginservice';
import { session } from '../stores';

describe('login colors', () => {
	const loginService = new LoginService();
	let currentSession: SmartSession;
	session.subscribe((currSession) => (currentSession = currSession));


});
