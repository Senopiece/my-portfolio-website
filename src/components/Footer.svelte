<script lang="ts">
	let year = new Date().getFullYear();
</script>

<footer>
	<p>© {year} <slot /></p>
	<style>
		footer {
			padding: 10px;
			text-align: center;
			font-family: Arial, sans-serif;
		}

		p {
			font-size: 16px;
		}
	</style>
</footer>
