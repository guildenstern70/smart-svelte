<!--
-
-  SmartSvelte
-  A web template project for Svelte
-  Copyright (c) 2023-25 Alessio Saltarin
-  MIT License - see LICENSE
-
-->

<script lang="ts">
	import type { PageData } from './$types';
	import Paragraph from '$lib/components/paragraph.svelte';

	const { data }: { data: PageData } = $props();

	let username: string | undefined = $state(undefined);
	if (data.loggedUser) {
		username = data.loggedUser;
	}
</script>

<Paragraph {username} heading="HOME" />
