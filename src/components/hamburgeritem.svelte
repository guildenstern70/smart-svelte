<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->

<script lang="ts">

  import { currentPage } from '../stores'
  import { goto } from "$app/navigation";

  type OnClickFunction = () => void;

  export let url: string;
  export let name = 'Home';
  export let onClick: OnClickFunction;

  let storedCurrentPage: number;
  let isSelected = false;

  currentPage.subscribe(async value => {
    storedCurrentPage = value;
    isSelected = isItemSelected(name);
  });


  $: className = isSelected ? 'selectedHamburgerNav' : 'hamburgerNav';

  function routeToPage(route: string): void {
    goto(route);
    onClick();
  }

  function isItemSelected(menuName: string): boolean {
    switch (storedCurrentPage) {
      case 0: // home
        if (menuName === 'Home') {
          return true;
        }
        break;
      case 1: // about
        if (menuName === 'About') {
          return true;
        }
        break;
      case 2: // colors
        if (menuName === 'Services') {
          return true;
        }
        break;
      case 3: // pricing
        if (menuName === 'Pricing') {
          return true;
        }
        break;
    }
    return false;
  }
</script>

<li>
  <button on:click={() => routeToPage(url)} class="{className}">{name}</button>
</li>
