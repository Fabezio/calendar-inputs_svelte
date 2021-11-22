<script>
	import { checked, jobs } from '$lib/_store/month';
</script>

{#each $jobs as { name, rank, jobType, dates }}
	{#if $jobs.length}
		<!-- {$jobs.length} -->
		<div>{name} {rank} {jobType.toUpperCase()} <span>{dates.join(', ')}</span></div>
	{/if}
{/each}
