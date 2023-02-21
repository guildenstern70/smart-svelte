<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->


<script>
  import { currentPage } from '../../../stores';
  import ColorItem from "../../../components/coloritem.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  currentPage.update(n => 2);
</script>


<div class="grid place-items-center py-5">
  {#await data}
    <p>...loading data...</p>
  {:then colors }
  <table class="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="px-6 py-3">
        ID
      </th>
      <th scope="col" class="px-6 py-3">
        Name
      </th>
      <th scope="col" class="px-6 py-3">
        Year
      </th>
      <th scope="col" class="px-6 py-3">
        Color
      </th>
      <th scope="col" class="px-6 py-3">
        Pantone
      </th>
    </tr>
    </thead>
    <tbody>
      {#each colors.colors as color}
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {color.id}
          </th>
          <td class="px-6 py-4">
            {color.name}
          </td>
          <td class="px-6 py-4">
            {color.year}
          </td>
          <td class="px-6 py-4">
            <ColorItem color="{color.color}" />
          </td>
          <td class="px-6 py-4">
            {color.pantone_value}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

