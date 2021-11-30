<script>
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	// import { month, dates, checked, selectedDates, jobs } from '$lib/_store/month';
	// import { name } from '$lib/_store/users';
	import {
		month,
		dates,
		checked,
		selectedDates,
		jobs,
		selectdate,
		missions
	} from '$lib/_store/month';
	import { name, rank, jobType, job, thoseUsers } from '$lib/_store/users';

	import TableField from './TableField.svelte';
	import FormButtons from './actions/FormButtons.svelte';
	import DateLine from './DateLine.svelte';

	let newUser = false;
	function addUser() {
		newUser = true;
		// const filter = usersList.filter({nom, prenom}=> (nom===))
	}
	function submitJobs() {
		// console.log(day, ssiap2);
		console.log($thoseUsers);
		console.log($name);
		const newUsers = $thoseUsers.filter(({ completeName }) => $name != completeName);
		console.log(newUsers);
		$thoseUsers = [...newUsers];
		$checked = { name: $name, rank: $rank, jobType: $jobType, dates: $selectedDates };
		$jobs = [...$jobs, $checked];
		$checked = {};
		$job = '';
		$rank = '';
		$jobType = '';
		$selectedDates = [];
		$dates.map((d, i) => {
			$selectedDates = [...$selectedDates, { day: d.day, checked: false }];
			return $selectedDates;
		});
		// $dates.map((d,i)=> {
		// 		$selectedDates = [...$selectedDates, {day: d.day, checked: false}];
		// 		return $selectedDates
		// 	})
		$name = '';
		$selectdate = '';
		// $dates = []

		return $jobs;
	}
	const cancelForm = () => {
		$checked = [];
		$name = '';
		return $checked;
	};
</script>

<form action="" on:submit|preventDefault={submitJobs}>
	<div class="w-50 d-flex ">
		<!-- <label for="job py-auto">Mission</label> -->
		<select
			class="form-select form-control border border-dark ms-2"
			id="job"
			name="job"
			bind:value={$job}
		>
			<option class="text-dark" value="Mission">--Choisir une vacation--</option>
			{#each $missions as { label }}
				<option class="text-dark" value={label}>{label}</option>
			{/each}
			<!-- <option class="text-dark" value="SSIAP2 Nuit">SSIAP2 NUIT</o/option> -->
		</select>
	</div>
	<TableField />
	<DateLine />
	<!-- 
	{#if newUser}
		<DateLine />
	{/if}

	<Button on:click={addUser} block size="lg" color="primary" class="my-2 ">ajouter agent</Button> -->
	<!-- <FormButtons on:cancel={cancelForm} size="md" /> -->
	<div class="d-grid  my-3">
		<FormButtons size="md" />
	</div>
</form>
<!-- <div class="form-check form-switch">
	<input
		class="form-check-input"
		type="checkbox"
		role="switch"
		id="flexSwitchCheckChecked"
		checked
	/>
	<label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div> -->
