<script lang="ts">
	import { onMount } from 'svelte';
	import Comic from '../../components/Comic.svelte';
	import type { ComicData } from '../../interfaces';

	const email = 'v.mahonin@innopolis.university';
	const hw2Url = `https://fwd.innopolis.university/api/hw2?email=${email}`;

	let comicData: ComicData;
	let isError = false;

	onMount(() => {
		fetch(hw2Url)
			.then((response: Response) => response.text())
			.then((id: string) => {
				const comicUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
				return fetch(comicUrl);
			})
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
