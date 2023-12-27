<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script lang="ts">
	import { Avatar, Dropdown, DropdownHeader, DropdownItem } from 'flowbite-svelte';
	export let username: string | undefined;
	let capitalizedUsername: string = '?';

	if (username != undefined) {
		capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
	}

	console.log('User: ' + capitalizedUsername);
</script>

<div>
	{#if username && username.length > 0}
		<Avatar
			id="user-drop"
			alt="User avatar"
			src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
			dot={{ color: 'green' }}
		/>
		<Dropdown triggeredBy="#user-drop">
			<DropdownHeader>
				<span class="block text-sm"> {capitalizedUsername} </span>
				<span class="block truncate text-sm font-medium"> {username}@smartsvelte.org </span>
			</DropdownHeader>
			<DropdownItem><a href="/logout">Sign out</a></DropdownItem>
		</Dropdown>
	{:else}
		<!-- Login Button -->
		<a
			href="/login"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Login</a
		>
	{/if}
</div>
