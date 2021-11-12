<script>
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	import { month, dates, checked, selectedDates, jobs } from '$lib/_store/month';
	import { name } from '$lib/_store/users';
	import FormButtons from './actions/FormButtons.svelte';
	import DateLine from './DateLine.svelte';

	let newUser = false;
	function addUser() {
		newUser = true;
		// const filter = usersList.filter({nom, prenom}=> (nom===))
	}
	function submitJobs() {
		$checked = { name: $name, dates: $selectedDates };
		$jobs = [...$jobs, $checked];
		$checked = [];
		$name = '';

		// if ($selectedDates.length) $selectedDates = [];
		return $checked;
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
