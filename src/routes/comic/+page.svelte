<script lang="ts">
	import { onMount } from 'svelte';
	import Comic from '../../components/Comic.svelte';
	import type { ComicData, Id } from '../../interfaces';

	export let data: Id; // id from the server
	let comicData: ComicData;
	let isError = false;

	onMount(() => {
		fetch(`https://fwd.innopolis.university/api/comic?id=${data.id}`)
			.then((response: Response) => response.json() as Promise<ComicData>)
			.then((data: ComicData) => {
				comicData = data;
			})
			.catch((error: Error) => {
				console.error(error);
				isError = true;
			});
	});
</script>

<title>XKCD Comic Viewer</title>
<body>
	<h1>XKCD Comic Viewer</h1>
	{#if isError}
		<p>Error</p>
	{:else if comicData}
		<Comic {comicData} />
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
