/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export type SmartSession = {
    loggedUser: string,
}

// Current page store
export const currentPage: Writable<number> = writable(0);

// Session storage
export const session: Writable<SmartSession> = writable({ loggedUser: '' } );


