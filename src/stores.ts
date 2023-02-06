/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import { writable } from 'svelte/store';


// Current page store
export const currentPage = writable(0);

// // Session storage
export const session = writable('');


