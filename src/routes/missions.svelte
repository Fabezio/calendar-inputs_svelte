<script>
	import HeadTitle from "$lib/header/HeadTitle.svelte"
	import { services, jobTypes, workerRanks, hours } from '$lib/_store/jobs';
	import FormButtons from '$lib/actions/FormButtons.svelte';
	import { FormGroup, Label, Input, Form } from 'sveltestrap';
	import Select from '$lib/Forms/Select.svelte';
	// import { prefetch } from "$app/navigation";
	let job = '';
	$jobTypes = [];
	function addJob() {
		$jobTypes = [...$jobTypes, job];
		job = '';
		return $jobTypes;
	}
	function handleKey(e) {
		if ((e.key = 'Enter')) addJob();
	}
</script>
<HeadTitle title="Ajouter une mission" />
<!-- <h1>Ajouter une mission</h1> -->
<form action="" on:keydown={handleKey} on:submit|preventDefault={addJob}>
	<FormGroup>
		<!-- <Label for="mission">Mission</Label> -->
		<Input type="text" id="mission" name="mission" placeholder="Mission" bind:value={job} />
	</FormGroup>
	<FormButtons />
</form>
{#each $jobTypes as item}
	<div>{item}</div>
{/each}
