/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import { describe, it, expect } from 'vitest';
import { appPages } from './apppages';

describe('pages test', () => {
	it('router should have 4 pages', () => {
		expect(appPages.size).toBe(4);
	});
});
