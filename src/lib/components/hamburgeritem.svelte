<!--
-
-  SmartSvelte
-  A web template project for Svelte
-  Copyright (c) 2023-25 Alessio Saltarin
-  MIT License - see LICENSE
-
-->

<script lang="ts">
	import { goto } from '$app/navigation';

	type OnClickFunction = () => void;

	interface HamburgerItemProps {
		url: string | undefined;
		name: string;
		onClick: OnClickFunction;
	}

	let { url, name, onClick }: HamburgerItemProps = $props();

	let className = 'selectedHamburgerNav';  // if selected, else 'hamburgerNav'

	function routeToPage(route: string): void {
		goto(route);
		onClick();
	}
</script>

<li>
	<button onclick={() => routeToPage(url)} class={className}>{name}</button>
</li>
