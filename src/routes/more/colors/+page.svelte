<!--
-
-  SmartSvelte
-  A web template project for Svelte
-  Copyright (c) 2023-25 Alessio Saltarin
-  MIT License - see LICENSE
-
-->

<script lang="ts">
	import ColorItem from '$lib/components/coloritem.svelte';
	import type { Color } from '$lib/model/color';
	import type { PageData } from './$types';
	import { page } from '$app/state';

	const { data }: { data: PageData } = $props();
	let colors: Color[] | undefined = data.colors;

</script>

<div class="sm:mx-18 md:mx-10 lg:mx-20">
	<h2 class="text-indigo-600 font-bold text-xl mb-6">COLORS</h2>

	<div class="grid place-items-center py-5">
		<table class="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
			<thead
				class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
			>
				<tr>
					<th scope="col" class="px-6 py-3"> ID </th>
					<th scope="col" class="px-6 py-3"> Name </th>
					<th scope="col" class="px-6 py-3"> Year </th>
					<th scope="col" class="px-6 py-3"> Color </th>
					<th scope="col" class="px-6 py-3"> Pantone </th>
				</tr>
			</thead>
			<tbody>
			{#if page.error}
				<tr>
					<td colspan="5" class="text-center">{page.error.message}</td>
				</tr>
			{/if}
			{#if colors && colors.length > 0}
				{#if colors.length === 0}
					<tr>
						<td colspan="5" class="text-center">No colors found</td>
					</tr>
				{:else}
					{#each colors as color (color.id)}
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								{color.id}
							</th>
							<td class="px-6 py-4">
								{color.name}
							</td>
							<td class="px-6 py-4">
								{color.year}
							</td>
							<td class="px-6 py-4">
								<ColorItem color={color.color} />
							</td>
							<td class="px-6 py-4">
								{color.pantone_value}
							</td>
						</tr>
					{/each}
				{/if}
			{/if}
			</tbody>
		</table>
	</div>
</div>


