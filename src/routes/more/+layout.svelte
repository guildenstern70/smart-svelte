<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->

<script>
  import { currentPage } from '../../store.ts'

  let storedCurrentPage;

  let homeStyle = 'navitem';
  let aboutStyle = 'navitem';
  let servicesStyle = 'navitem';
  let pricingStyle = 'navitem';

  currentPage.subscribe(value => {
    storedCurrentPage = value;
    homeStyle = 'navitem';
    aboutStyle = 'navitem';
    servicesStyle = 'navitem';
    pricingStyle = 'navitem';
    switch (storedCurrentPage) {
      case 0: // home
        homeStyle = 'selectednavitem';
        break;
      case 1: // about
        aboutStyle = 'selectednavitem';
        break;
      case 2: // services
        servicesStyle = 'selectednavitem';
        break;
      case 3: // pricing
        pricingStyle = 'selectednavitem';
        break;
    }

  });


</script>

<nav class="bg-gray-100 border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex">
      <span class="text-xl font-semibold whitespace-nowrap dark:text-white">SmartSvelte</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
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
<div class="mx-6 my-6">
  <slot />
</div>

