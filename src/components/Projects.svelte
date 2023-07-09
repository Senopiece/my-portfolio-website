<script lang="ts">
	import type { NavigationsListMap } from '../interfaces';

	export let projects: NavigationsListMap;
</script>

<div>
	<h2>Projects</h2>
	{#each Object.keys(projects) as group}
		<h3>{group}</h3>
		<ul>
			{#each projects[group] as project}
				<li><a href={project.url}>{project.label}</a></li>
			{/each}
		</ul>
	{/each}
</div>
