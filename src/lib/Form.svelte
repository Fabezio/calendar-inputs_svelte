<script>
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	// import { month, dates, checked, selectedDates, jobs } from '$lib/_store/month';
	// import { name } from '$lib/_store/users';
	import {month, dates, checked, selectedDates, jobs, selectdate} from '$lib/_store/month'; 
	import {name,
rank,
jobType, job} from '$lib/_store/users';

	import FormButtons from './actions/FormButtons.svelte';
	import DateLine from './DateLine.svelte';

	let newUser = false;
	function addUser() {
		newUser = true;
		// const filter = usersList.filter({nom, prenom}=> (nom===))
	}
	function submitJobs() {
		// console.log(day, ssiap2);
		$checked = { name: $name, rank: $rank, jobType: $jobType, dates: $selectedDates };
		$jobs = [...$jobs, $checked];
		$checked = {};
		$job = '';
		$rank = '';
		$jobType = '';
		$selectedDates = []
		$dates.map((d,i)=> {
		$selectedDates = [...$selectedDates, {day: d.day, checked: false}];
		return $selectedDates
	})
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
	<DateLine />
	<!-- 
	{#if newUser}
		<DateLine />
	{/if}

	<Button on:click={addUser} block size="lg" color="primary" class="my-2 ">ajouter agent</Button> -->
	<!-- <FormButtons on:cancel={cancelForm} size="md" /> -->
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
