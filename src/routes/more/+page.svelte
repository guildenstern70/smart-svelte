<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script lang="ts">
	import type { PageData } from './$types';
	import Paragraph from '../../components/paragraph.svelte';
	import { currentPage } from '../../stores';

	currentPage.update(() => 0);

	export let data: PageData;

	// we can access `data.loggedUser` because it's returned from
	// the parent layout `load` function
	const username = data.loggedUser;
</script>

<Paragraph {username} heading="HOME" />
