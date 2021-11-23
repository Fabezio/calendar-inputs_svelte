<script>
	import { month, dates, checked, selectedDates, jobs, selectdate } from '$lib/_store/month';
	import { name, rank, jobType, job } from '$lib/_store/users';
	import { db } from '$lib/data/db';

	import FormButtons from '$lib/actions/FormButtons.svelte';
	import Inputs from '$lib/actions/Inputs.svelte';
	// import Switch from '$lib/actions/Switch.svelte';

	$job = '';
	$rank = '';
	$jobType = '';
	$selectdate = "";
	// let thisDay = {day: $selectdate, checked:false}

	let ssiap2 = true;
	let day = true;
	let disabled = false;
	$: if ($job.length) {
		$rank = $job.split(' ')[0];
		$jobType = $job.split(' ')[1];
	}
	let monthDays = [...Array($month.length).keys()];

	const handleSwitch = () => {
		if (!ssiap2) {
			day = false;
			disabled = true;
		}
	};
	$selectedDates=[]
	$name = '';
	$dates.map((d,i)=> {
		$selectedDates = [...$selectedDates, {day: d.day, checked: false}];
		return $selectedDates
	})
	

	function addDate(day, checked) {
		console.log(day, checked)

		
		
		// $selectedDates.map((item, i) => {
		// 	if (!$selectedDates[i].checked) {
		// 		console.log(`${item} déjà dans la liste`);
		// 		$selectedDates = $selectedDates.filter((el) => el != item);
		// 	} else {

		// 		$selectedDates = [...$selectedDates, day];
		// 	}
			// console.log(monthDays);
		// });
		
		


		// monthDays.map()
	}
	$: console.log($selectedDates)
</script>

<Inputs>
	<div>
		<input type="text" class="text-input" bind:value={$name} list="names-hint" placeholder="nom" />
		<datalist id="names-hint" name="choix">
			{#each db.users as { id, nom, prenom }}
				<option value="{nom} {prenom}" />
			{/each}
		</datalist>
	</div>
	<div>
		<select class="form-select border border-dark" id="job" name="job" bind:value={$job}>
			<option class="text-dark">--Choisir une vacation--</option>
			<option class="text-dark" value="SSIAP2 Jour">SSIAP2 JOUR</option>
			<option class="text-dark" value="SSIAP2 Nuit">SSIAP2 NUIT</option>
			<option class="text-dark" value="SSIAP1 Jour">SSIAP1 JOUR</option>
		</select>
	</div>
	<!-- <Switch  bind:this={ssiap2} val={ssiap2} />
	<Switch  bind:this={day} val={day} /> -->

	{#each $selectedDates as { day, checked },i}
	<input
		class="checkbox"
		on:change={() => checked = !checked}
		bind:value={$selectdate}
		type="checkbox"
		checked={checked}
		

	/>
	
	{/each}
	<FormButtons  size="sm" />
	<!-- <div class="btn-group btn-group-sm">
		<button type="submit" class="btn btn-success"><i class="fas fa-plus fa-xl" /></button>
		<button on:click={() => ($checked = [])} type="reset" class="btn btn-warning"
			><i class="fas fa-undo fa-xl" /></button
		>
		<button type="reset" class="btn btn-danger"><i class="fas fa-times fa-xl" /></button>
	</div> -->
</Inputs>

<!-- {rank} {jobType} -->
<style>
	input {
		width: 100%;
		height: 32px;
		/* display: flex;
		align-self: center; */
		margin-right: 5px;
		margin-top: 1px;
		padding: 5px;
	}
	div select {
		margin-right: 5px;
		margin-top: 2px;
		padding: 3px;

		width: 100%;
		/* margin: 0;
		padding: 0; */
	}

	/* 
	input[type='checkbox'] {
		width: 32px;
		height: 32px;
	}
	*/
	input:checked {
		/* background: green; */
		box-shadow: 0 0 0 3px skyblue;
		color: red;
		/* text: "";		 */
	}
</style>
