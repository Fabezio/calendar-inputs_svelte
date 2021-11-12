<script>
	import { checked, jobs } from '$lib/_store/month';
</script>

{#each $jobs as { name, dates }}
	{#if $jobs.length}
		<!-- {$jobs.length} -->
		<div>{name} <span>{dates.join(', ')}</span></div>
	{/if}
{/each}
