<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script lang="ts">
	import type { SmartSession } from "../stores";
	import { session } from "../stores";

	export let title: string;
	let username: string;

	session.subscribe((currSession: SmartSession) => {
		console.log('Home page: username = '+currSession.loggedUser);
		username = currSession.loggedUser;
	});

</script>

<div class="sm:mx-18 md:mx-10 lg:mx-20">
	<h2 class="text-indigo-600 font-bold text-xl mb-6">{title}</h2>

	<p class="italic">
		{#if username }
		Welcome, {username}.
		{/if}
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div>
