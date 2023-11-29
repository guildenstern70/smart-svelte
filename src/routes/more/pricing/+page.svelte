<!--
  -
  -  SmartSvelte
  -  A web template project for Svelte
  -  Copyright (c) 2023 Alessio Saltarin
  -  MIT License - see LICENSE
  -
  -->
<script>
	import Paragraph from '../../../components/paragraph.svelte';
	import { currentPage } from '../../../stores';

	currentPage.update(() => 3);
</script>

<Paragraph heading="PRICING" />
