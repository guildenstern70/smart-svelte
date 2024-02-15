<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script lang="ts">
	export let color: string;
</script>

<div class="coloritem" style="--x-color: {color}" />

<style>
	.coloritem {
		width: 90px;
		height: 30px;
		background-color: var(--x-color);
		border: 1px solid black;
	}
</style>
