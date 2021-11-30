<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import NewTimemap from '$lib/NewTimemap.svelte';
	import HeadTitle from '$lib/header/HeadTitle.svelte';
</script>

<HeadTitle title="Nouveau planning" />
<NewTimemap />
