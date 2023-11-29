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

/**
 * Things to remember about Svelte stores:
 * - Stores are different if set in server or client components (even if they have the same name)
 * - Stores are not shared between server and client components
 * - Stores do not persist between page changes
 *
 * This is why we DO NOT use stores for session data.
 */


// Current page store
export const currentPage: Writable<number> = writable(0);

