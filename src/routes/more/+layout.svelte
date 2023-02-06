<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->

<script>
  import { currentPage } from '../../stores.ts'
  import { watchResize } from "svelte-watch-resize";
  import { goto } from '$app/navigation';

  let storedCurrentPage;

  let homeStyle = 'navitem'; let homeHamburgerStyle = 'hamburgerNav';
  let aboutStyle = 'navitem'; let aboutHamburgerStyle = 'hamburgerNav';
  let servicesStyle = 'navitem'; let servicesHamburgerStyle = 'hamburgerNav';
  let pricingStyle = 'navitem'; let pricingHamburgerStyle = 'hamburgerNav';
  let hamburgerStyle = 'hidden';

  currentPage.subscribe(value => {
    storedCurrentPage = value;
    homeStyle = 'navitem'; homeHamburgerStyle = 'hamburgerNav';
    aboutStyle = 'navitem'; aboutHamburgerStyle = 'hamburgerNav';
    servicesStyle = 'navitem'; servicesHamburgerStyle = 'hamburgerNav';
    pricingStyle = 'navitem'; pricingHamburgerStyle = 'hamburgerNav';
    switch (storedCurrentPage) {
      case 0: // home
        homeStyle = 'selectednavitem';
        homeHamburgerStyle = 'selectedHamburgerNav';
        break;
      case 1: // about
        aboutStyle = 'selectednavitem';
        aboutHamburgerStyle = 'selectedHamburgerNav';
        break;
      case 2: // services
        servicesStyle = 'selectednavitem';
        servicesHamburgerStyle = 'selectedHamburgerNav';
        break;
      case 3: // pricing
        pricingStyle = 'selectednavitem';
        pricingHamburgerStyle = 'selectedHamburgerNav';
        break;
    }

  });

  function onHamburger() {
    if (hamburgerStyle === 'hidden')
      hamburgerStyle = '';
    else
      hamburgerStyle = 'hidden';
  }

  function routeToPage(route) {
    hamburgerStyle = 'hidden';
    goto(route);
  }

  function handleResize() {
    if (hamburgerStyle === '')
      hamburgerStyle = 'hidden';
  }


</script>


<nav class="bg-gray-100 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://svelte.dev/" target="_blank" rel="noreferrer" class="flex items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" class="h-6 mr-3 sm:h-9" alt="Svelte Logo">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SmartSvelte</span>
    </a>
    <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button on:click={onHamburger} data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="{hamburgerStyle} w-full" id="navbar-hamburger" use:watchResize={handleResize}>
      <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <button on:click={() => routeToPage('/more')} class="{homeHamburgerStyle}">Home</button>
        </li>
        <li>
          <button on:click={() => routeToPage('/more/about')} class="{aboutHamburgerStyle}">About</button>
        </li>
        <li>
          <button on:click={() => routeToPage('/more/services')} class="{servicesHamburgerStyle}">Services</button>
        </li>
        <li>
          <button on:click={() => routeToPage('/more/pricing')} class="{pricingHamburgerStyle}">Pricing</button>
        </li>
      </ul>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/more" class="{homeStyle}" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/more/about" class="{aboutStyle}">About</a>
        </li>
        <li>
          <a href="/more/services" class="{servicesStyle}">Services</a>
        </li>
        <li>
          <a href="/more/pricing" class="{pricingStyle}">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="mx-6 mt-20">
    <slot />
</div>

