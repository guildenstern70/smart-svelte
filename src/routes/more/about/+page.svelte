<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script lang="ts">
	import type { PageData } from '../$types';
	import Paragraph from '$lib/components/paragraph.svelte';
	import { currentPage } from '../../../stores';

	currentPage.update(() => 1);

	export let data: PageData;
	const username = data.loggedUser;
</script>

<Paragraph {username} heading="ABOUT" />
