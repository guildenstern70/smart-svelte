/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
