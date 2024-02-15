<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script lang="ts">
	export let username: string | undefined;
	export let heading: string;

	console.log('Paragrah with username = ' + username);
</script>

<div class="sm:mx-18 md:mx-10 lg:mx-20">
	<h2 class="text-indigo-600 font-bold text-xl mb-6">{heading}</h2>

	<p class="italic">
		{#if username}
			Welcome, <b>{username}</b>.&nbsp;
		{/if}
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
		aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
		dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
		officia deserunt mollit anim id est laborum.
	</p>
</div>
