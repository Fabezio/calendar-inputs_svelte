<script>
	import { checked, jobs } from '$lib/_store/month';
import { job, jobType } from './_store/users';
</script>

{#each $jobs as { name, rank, jobType, dates }}
	{#if $jobs.length}
		<!-- {$jobs.length} -->
		<div class="text-uppercase">{name} {rank} {#each dates as {day, checked}}
			{checked? jobType.charAt(0):  " "}
		{/each}</div>
	{/if}
{/each}
