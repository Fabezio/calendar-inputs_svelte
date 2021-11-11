<script>
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	import FormButtons from './actions/FormButtons.svelte';
	import DateLine from './DateLine.svelte';
	import { month, dates, checked, selectedDates } from '$lib/_store/month';
	import { name } from '$lib/_store/users';

	let newUser = false;
	function addUser() {
		newUser = true;
		// const filter = usersList.filter({nom, prenom}=> (nom===))
	}
	function submitJobs() {
		$checked = [...$checked, { name: $name, dates: $selectedDates }];
		if ($selectedDates.length) $selectedDates = [];
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
	{#if newUser}
		<DateLine />
	{/if}

	<Button on:click={addUser} block size="lg" color="primary" class="my-2 ">ajouter agent</Button>
	<FormButtons on:cancel={cancelForm} size="md" />
</form>
