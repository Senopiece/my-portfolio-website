<script lang="ts">
	import { onMount } from 'svelte';
	import { formatDistanceToNow } from 'date-fns';
	import type { ComicData } from '../interfaces';

	export let comicData: ComicData;

	let publishedDate: Date;

	onMount(() => {
		publishedDate = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`);
	});

	function getTimeAgo() {
		const timeAgo = formatDistanceToNow(publishedDate);
		return `${timeAgo} ago`;
	}
</script>

<div>
	<img src={comicData.img} alt={comicData.alt} />
	<h2>{comicData.safe_title}</h2>
	<p>{publishedDate && publishedDate.toLocaleDateString()}</p>
	<p>{publishedDate && getTimeAgo()}</p>

	<style>
		img {
			max-width: 100%;
			height: auto;
		}
	</style>
</div>
