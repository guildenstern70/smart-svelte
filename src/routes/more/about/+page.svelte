<script>
  import Paragraph from "../../../Paragraph.svelte";
  import { currentPage } from '../../../store.ts';

  currentPage.update(n => 1);

</script>

<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->

<Paragraph title="ABOUT" />


