/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { SmartSession } from "../stores";

import { describe, it, expect } from 'vitest';
import { LoginService } from './loginservice';
import { session } from "../stores";

describe('login colors', () => {

    const loginService = new LoginService();
    let currentSession: SmartSession;
    const updatedSession = session.subscribe( (currSession) => currentSession = currSession);

    it('existing user should be able to log in', () => {
        const isLoggedIn = loginService.performLogin('alessio', 'doctor');
        expect(isLoggedIn).toBe(true);
        expect(currentSession.loggedUser).toBe('alessio');
    });

    it('non existing user should NOT be able to log in', () => {
        const isLoggedIn = loginService.performLogin('carl', 'romano');
        expect(isLoggedIn).toBe(false);
        expect(currentSession.loggedUser).toBe('');
    });
});
