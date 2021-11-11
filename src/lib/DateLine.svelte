<script lang="ts">
	import { month, dates, checked, selectedDates } from '$lib/_store/month';
	import { name } from '$lib/_store/users';
	// import { gridTemplateColumn } from '$lib/_store/style';

	import { db } from '$lib/data/db';
	import FormButtons from './actions/FormButtons.svelte';
	// const month = [...Array(30).keys()];
	$name = '';
	function submitJobs() {
		$checked = [...$checked, { name: $name, dates: $selectedDates }];
		if ($selectedDates.length) $selectedDates = [];
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

<div
	class="inputs"
	style="grid-template-columns: 10em repeat({$month.length}, 2em) repeat(2, 2em);"
>
	<div>
		<input
			type="text"
			autofocus
			class="text-input"
			bind:value={$name}
			list="names-hint"
			placeholder="nom"
		/>
		<datalist id="names-hint" name="choix">
			{#each db.users as { nom, prenom }}
				<option value="{nom} {prenom}" />
			{/each}
		</datalist>
	</div>

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
</div>

<style>
	.inputs {
		display: grid;
		grid-gap: 1px;

		/* border-width: 0px; */
	}
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
		width: 32px;
		height: 32px;
		/* border: 1px solid red; */
	}
	input:checked {
		/* background: green; */
		box-shadow: 0 0 0 3px skyblue;
		color: red;
		/* text: "";		 */
	}
</style>
