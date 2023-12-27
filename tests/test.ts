/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('SmartSvelte');
	await expect(page).toHaveTitle(/SmartSvelte/);
});

test('existing user should be able to log in', async ({ page }) => {
	// Go to login page
	await page.goto('/login');
	await expect(page.getByRole('heading', { name: 'Sign in to your account' })).toBeVisible();

	// Filling login form with guest user
	await page.getByLabel('Username').fill('guest');
	await page.getByLabel('Password').fill('guest');
	const submitButton = page.getByRole('button', { name: 'Sign in' });
	await submitButton.click();

	// Guest should land to Home Page
	await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();

	// Avatar menu should be visible
	await expect(page.getByAltText('User avatar')).toBeVisible();
});

test('non existing user should NOT be able to log in', async ({ page }) => {
	await page.goto('/login');
	await expect(page.getByRole('heading', { name: 'Sign in to your account' })).toBeVisible();

	await page.getByLabel('Username').fill('carl');
	await page.getByLabel('Password').fill('roman');
	await page.click('text=Sign in');

	// Nothing happens
	await expect(page.getByRole('heading', { name: 'Sign in to your account' })).toBeVisible();
});
