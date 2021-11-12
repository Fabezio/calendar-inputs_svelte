<script>
	import { month, dates, checked, selectedDates, jobs } from '$lib/_store/month';
	import { name } from '$lib/_store/users';
	import { db } from '$lib/data/db';

	import FormButtons from '$lib/actions/FormButtons.svelte';
	import Inputs from '$lib/actions/Inputs.svelte';
	import Switch from '$lib/actions/Switch.svelte';

	let ssiap2 = true;
	let day = true;
	let disabled = false;
	const handleSwitch = () => {
		if (!ssiap2) {
			day = false;
			disabled = true;
		}
	};

	$name = '';
	function submitJobs() {
		$checked = { name: $name, dates: $selectedDates };
		$jobs = [...$jobs, $checked];
		$checked = [];

		return $checked;
	}

	let selectdate = '';
	function addDate(day) {
		let filterDates;
		$selectedDates.map((item, i) => {
			if (item === day) {
				console.log(`${item} déjà dans la liste`);
				$selectedDates = $selectedDates.filter((el) => el != item);
			}
		});

		$selectedDates = [...$selectedDates, day];
	}
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
	<Switch val={ssiap2} />
	<Switch val={day} />

	{#each $dates as { day }}
		<input class="checkbox" on:change={addDate(day)} bind:value={selectdate} type="checkbox" />
	{/each}
	<FormButtons on:submit={submitJobs} size="sm" />
	<!-- <div class="btn-group btn-group-sm">
		<button type="submit" class="btn btn-success"><i class="fas fa-plus fa-xl" /></button>
		<button on:click={() => ($checked = [])} type="reset" class="btn btn-warning"
			><i class="fas fa-undo fa-xl" /></button
		>
		<button type="reset" class="btn btn-danger"><i class="fas fa-times fa-xl" /></button>
	</div> -->
</Inputs>

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

	input[type='checkbox'] {
		/* width: 32px;
		height: 32px; */
	}
	input:checked {
		/* background: green; */
		box-shadow: 0 0 0 3px skyblue;
		color: red;
		/* text: "";		 */
	}
</style>
