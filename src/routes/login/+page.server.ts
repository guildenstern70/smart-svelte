/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Actions, RequestEvent } from "@sveltejs/kit";
import { redirect }from "@sveltejs/kit";

export const actions: Actions = {
    default: async  (event: RequestEvent) => {

        const request = event.request;
        const cookies = event.cookies;

        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        console.log('Received login request for ' + username + ", " + password);

        if (username === 'guest' && password === 'guest') {
            cookies.set('username', 'guest', {
                // send cookie for every page
                path: '/',
                // server side only cookie so you can't use `document.cookie`
                httpOnly: true,
                // only requests from same site can send cookies
                // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
                sameSite: 'strict',
                // only sent over HTTPS in production
                secure: process.env.NODE_ENV === 'production',
                // set cookie to expire after a day
                maxAge: 60 * 60 * 24,
            });
            throw redirect(303, '/more');
        }

        return { success: true };
    },
};

