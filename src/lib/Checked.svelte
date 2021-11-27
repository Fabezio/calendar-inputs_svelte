<script>
	import { month, checked, jobs } from '$lib/_store/month';
	import { jobType, rank } from './_store/users';
	import Inputs from '$lib/actions/Inputs.svelte';
	// import TableField from "$lib/actions/TableField.svelte";
	// const {log, table} = console
	// console.table($jobs)
	let complete = false;
	let newMap = [];

	// $jobs.map(({ rank, jobType }) => {
	// 	const job = `${rank} ${jobType}`;
	// 	let nomatch = newMap.filter((data) => job !== `${data.rank} ${data.jobType}`);
	// 	console.log(newMap.filter((data) => job !== `${data.rank} ${data.jobType}`));
	// 	if (nomatch || !newMap.length) newMap = [...newMap, { rank, jobType }];
	// 	console.log('vacations :', newMap);
	// 	return newMap;
	// });
	// let thisJob = $jobs.filter(({jobType})=> jobType.length)
	// console.log(thisrank, thisJob)

	// $: $jobs.map((job,i)=>{
	// 	let newObject = {rank:job.rank,
	// 			 jobType: job.jobType,}
	// 	if(!newMap.length) {
	// 		newMap = [...newMap, newObject]

	// 	}
	// 	// newMap.map((m,j)=> {
	// 		// newObject = {rank:m.rank,
	// 		// 	 jobType: m.jobType,}

	// 		// console.log(m)
	// 		// console.log(m.rank, m.jobType)
	// 		const sameRank =.rank == job.rank
	// 			const sameJob = m.jobType == job.jobType

	// 		console.log('même plage horaire: ', sameRank)
	// 		console.log('même fonction: ', sameJob)
	// 		if( (sameJob && !sameRank) || (sameRank && !sameJob)) {
	// 			newMap = [...newMap,
	// 				 newObject]

	// 		} else return
	// 	// })
	// 	console.log(newMap)
	// 	return newMap

	// })
	// $: console.log(newMap)
	function makeTimemap() {
		// console.log("nombre de jours:",$month.length)
		$jobs.map(({ name, rank, jobType, dates }, i) => {
			// let workerDates= dates.map((d)=>{return d})
			let workerDates = [];
			dates.map((d, i) => {
				if (d.checked === true) {
					console.log(d.day, rank, jobType);
					workerDates[i] = { d: d.day, checked: d.checked };
				} else {
					workerDates[i] = { d: d.day };
				}
			});

			newMap = [...newMap, {jobType, rank, workerDates}]
			console.log(workerDates);
		});
		return newMap;
	}
	console.log("Missions planifiées:",$jobs)
	// console.log(newMap)
	makeTimemap();
</script>

<h2 class="mt-3">entrées</h2>
<div class="text-center">
	<!-- <h3>{$jobs[0].jobType}</h3> -->
	{#each $jobs as { name, rank, jobType, dates }}
		{#if $jobs.length}
			<Inputs>
				<!-- {$jobs.length} -->
				<div>
					{name}
				</div>
				<div>
					{rank}
				</div>
				{#each dates as { day, checked }}
					<div>
						{checked ? jobType.charAt(0) : '…'}
					</div>
				{/each}
			</Inputs>
		{/if}
	{/each}
</div>
<div class="text-center">
	{#each newMap as map}
		<Inputs>
			<div>{map.rank}</div>
			<div>{map.jobType}</div>
			<!-- <div>{}</div> -->
		</Inputs>
	{/each}
</div>
