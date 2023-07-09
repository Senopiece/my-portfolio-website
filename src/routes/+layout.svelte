<script lang="ts">
	import { base } from '$app/paths';
	import Footer from '../components/Footer.svelte';
	const str = "Vitaly's Portfolio";
</script>

<header>
	<h1>{str}</h1>
	<nav id="pages_nav">
		<ul>
			<li><a href="{base}/">portfolio</a></li>
			<li><a href="{base}/comic">comic</a></li>
		</ul>
	</nav>
	<style>
		#pages_nav ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			display: flex;
		}

		#pages_nav li {
			margin-right: 10px;
			font-size: 20px;
		}

		header {
			background-color: #f2f2f2;
			padding: 5px;
			padding-left: 1em;
			display: flex;
			justify-content: flex-end;
			justify-content: space-between;
			align-items: center;
		}
	</style>
</header>
<slot />
<Footer>{str}</Footer>

<style>
	/* Global styles */
	:global(body) {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
	}

	:global(h1, h2, h3) {
		font-weight: lighter;
	}

	:global(h2, h3) {
		margin-top: 1em;
	}

	:global(ul) {
		/* list-style: none; */
		margin: 0;
		margin-top: 0.5em;
		padding: 0;
		padding-right: 0.52em;
	}

	:global(li:not(:last-child)) {
		margin-bottom: 0.5em;
	}

	:global(a) {
		color: #333;
		text-decoration: none;
	}

	:global(nav) {
		margin-left: 1em;
		margin-top: 2em;
	}

	:global(nav ul) {
		list-style: none;
	}

	:global(nav a) {
		color: #666;
	}

	:global(nav a:hover) {
		color: #333;
	}

	:global(main) {
		max-width: 45em;
		margin: 0 auto;
		padding: 2em;
	}

	:global(h3) {
		color: #666;
		font-size: 1.1em;
		margin-top: 1em;
		margin-bottom: 0.5em;
	}

	:global(ul) {
		margin-left: 1em;
		margin-bottom: 0.5em;
	}
</style>
