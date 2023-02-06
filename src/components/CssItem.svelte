<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->

<script lang="ts">

  import { currentPage } from '../stores.ts'

  export let url: string;
  export let name = 'Home';

  let storedCurrentPage;
  let isSelected = false;

  currentPage.subscribe(async value => {
    storedCurrentPage = value;
    isSelected = isItemSelected(name);
  });


  $: className = isSelected ? 'selectednavitem' : 'navitem';

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
      case 2: // services
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
  <a href="{url}" class="{className}">{name}</a>
</li>



