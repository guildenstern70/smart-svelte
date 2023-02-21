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

	export let username: string;
	let capitalizedName = username.charAt(0).toUpperCase() + username.slice(1);
</script>

<Avatar
	id="user-drop"
	src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
	dot={{ color: 'green' }}
/>
<Dropdown triggeredBy="#user-drop">
	<DropdownHeader>
		<span class="block text-sm"> {capitalizedName} </span>
		<span class="block truncate text-sm font-medium"> {username}@smartsvelte.org </span>
	</DropdownHeader>
	<DropdownItem><a href="/logout">Sign out</a></DropdownItem>
</Dropdown>
