# SmartSvelte (smart-svelte)

SmartSvelte is a web template app build upon:

- [Svelte](https://svelte.dev/) web framework
- [SvelteKit](https://kit.svelte.dev/) Svelte with superpowers
- [Vite](https://vitejs.dev/) generator
- [Tailwind CSS](https://tailwindcss.com/) responsive library
- [Svelte Tailwind](https://flowbite-svelte.com/) Svelte-ready components for Tailwind

## Setup

Once you've created installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of SmartSvelte:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Unit Tests

To run unit tests:

```bash
npm run test:unit
```

## UI Tests

Before running UI tests with 'npm run test', you must install 'playwright' with

```bash
npx playwright install
```

then run

```bash
npm run test
```

## Docker Image

First of all install dotenv

    npm install dotenv

Then build with

    node -r dotenv/config build

We are using 'Node.js Adapter' to deploy SmartSvelte app as a Node.js application.

    docker build -t smartsvelte-docker .
    docker run -p 8080:8080 smartsvelte-docker

You may navigate the site with

    http://0.0.0.0:8080/


