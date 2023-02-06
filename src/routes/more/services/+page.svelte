<script>
  import Paragraph from "../../../Paragraph.svelte";
  import { currentPage } from '../../../stores.ts';

  currentPage.update(n => 2);
</script>

<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->

<Paragraph title="SERVICES" />
