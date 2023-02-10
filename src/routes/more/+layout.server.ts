/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { LayoutServerLoad } from './$types';
import type { Cookies, RequestEvent } from "@sveltejs/kit";

export const load: LayoutServerLoad = (async (event: RequestEvent) => {

    const cookies = event.cookies;
    const loggedUser: string | undefined = cookies.get('username');
    if (loggedUser) {
        console.log('Found username in cookies = ' + loggedUser);
        return { loggedUser };
    }
    return {};

});

