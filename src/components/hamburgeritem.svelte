<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script lang="ts">
	import { currentPage } from '../stores';
	import { goto } from '$app/navigation';
	import { appPages } from "../pages";

	type OnClickFunction = () => void;

	export let url: string;
	export let name = 'Home';
	export let onClick: OnClickFunction;

	let storedCurrentPage: number;
	let isSelected = false;

	currentPage.subscribe(async (value) => {
		storedCurrentPage = value;
		const selectedItemName = Array.from(appPages.keys())[storedCurrentPage];
		isSelected = (name === selectedItemName)
	});

	$: className = isSelected ? 'selectedHamburgerNav' : 'hamburgerNav';

	function routeToPage(route: string): void {
		goto(route);
		onClick();
	}

</script>

<li>
	<button on:click={() => routeToPage(url)} class={className}>{name}</button>
</li>
