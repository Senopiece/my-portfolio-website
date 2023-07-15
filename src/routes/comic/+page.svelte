<script lang="ts">
	import Comic from '../../components/Comic.svelte';
	import type { ComicData } from '../../interfaces';

	export let data: ComicData;
</script>

<title>XKCD Comic Viewer</title>
<body>
	<h1>XKCD Comic Viewer</h1>
	{#if data}
		<Comic comicData={data} />
	{:else}
		<p>Loading...</p>
	{/if}
</body>

<style>
	body {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: sans-serif;
	}
</style>
