/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

// This variable is used to store the pages of the app,
// so that we can use it in the app to navigate between pages.
export const appPages = new Map<string, string>();

appPages.set('Home', '/more');
appPages.set('About', '/more/about');
appPages.set('Colors', '/more/colors');
appPages.set('Pricing', '/more/pricing');
