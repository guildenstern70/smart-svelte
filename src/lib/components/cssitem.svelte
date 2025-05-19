<!--
-
-  SmartSvelte
-  A web template project for Svelte
-  Copyright (c) 2023-25 Alessio Saltarin
-  MIT License - see LICENSE
-
-->

<script lang="ts">
	interface CssItemProps {
		url: string | undefined;
		name: string;
	}

	let { url, name }: CssItemProps = $props();
	let className = 'selectedHamburgerNav';  // if selected, else 'hamburgerNav'

</script>

<li>
	<a href={url} class={className}>{name}</a>
</li>
