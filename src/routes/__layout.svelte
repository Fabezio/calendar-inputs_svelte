<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import NavBar from '$lib/header/NavBar.svelte';
	import '../app.css';
</script>

<NavBar />
<!-- <Header /> -->

<div class="container">
	<div class="my-4">
		<slot />

	</div>
</div>

<footer class="bg-secondary container-fluid fixed-bottom">
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		
	}

	@media (min-width: 480px) {
		footer {
			padding: 30px 0;
		}
	}
</style>
