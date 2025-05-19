<!--
-
-  SmartSvelte
-  A web template project for Svelte
-  Copyright (c) 2023-25 Alessio Saltarin
-  MIT License - see LICENSE
-
-->

<script lang="ts">
	let { color }: { color: string } = $props();
</script>

<div class="coloritem" style="--x-color: {color}" >
</div>

<style>
	.coloritem {
		width: 90px;
		height: 30px;
		background-color: var(--x-color);
		border: 1px solid black;
	}
</style>
