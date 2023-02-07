<script>
  import Paragraph from "../../components/paragraph.svelte";
  import { currentPage } from '../../stores';

  currentPage.update(n => 0);
</script>

<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->


<Paragraph title="HOME" />

