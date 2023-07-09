<script lang="ts">
	import type { AboutData } from '../interfaces';
	export let aboutData: AboutData;
</script>

<div>
	<h2>About Me</h2>
	<p>{aboutData.bio}</p>
	<h3>Background</h3>
	<ul>
		{#each aboutData.background as item}
			<li>{item}</li>
		{/each}
	</ul>
	<h3>Tools and Technologies</h3>
	<ul>
		{#each aboutData.tools as item}
			<li>{item}</li>
		{/each}
	</ul>
</div>
