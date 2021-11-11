<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { db } from '$lib/data/db';

	import { month, dates, checked, selectedDates } from '$lib/_store/month';
	import { name } from '$lib/_store/users';
	// import { gridTemplateColumn } from '$lib/_store/grid';
	// const gridTemplateColumn = "grid-template-columns: 10em repeat({$month.length}, 2em) repeat(2, 2em);"


	import Form from '$lib/Form.svelte';

	let usersList = [...db.users];

	// import { db } from "$lib/data/db";
	// import dateFormat, { masks } from 'dateformat';

	// import format from 'date-format';
	$month = [...Array(30).keys()];
	$selectedDates = [];

	// console.log($month);
	$dates = [];
	function makeDates() {
		$month.map((day, i) => {
			const thisDate = `2021-11-${day + 1}`;
			const newDate = new Date(thisDate);
			const newFormat = formatter.format(newDate);
			const dayLetter = newFormat.charAt(0).toUpperCase();

			$dates = [
				...$dates,
				{
					day: day + 1,
					dayLetter
				}
			];
			return $dates;
		});
		// console.log($dates);
	}

	$: makeDates();

	$checked = [];

	const today = '2021-11-6';
	const monthLength = parseInt(today.split('-')[1]);
	const date = new Date(today);
	$name = '';

	const formatter = new Intl.DateTimeFormat('fr', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	});
	$: console.log(monthLength);
	const thisFormat = formatter.format(date);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Input Checkboxes</h1>

	<h2 class="my-3">
		<!-- date format standard {date} -->
		aujourd'hui: {thisFormat}
		<!-- try editing <strong>src/routes/index.svelte</strong> -->
	</h2>

	<!-- <Counter /> -->

	<div
		class="inputs fw-bold text-center fs-6"
		style="grid-template-columns: 10em repeat({$month.length}, 2em) repeat(2, 2em);"

	>
		<!-- <label for="">nom</label> -->
		<div>noms</div>
		{#each $dates as { day, dayLetter }}
			<div class="">
				<div class="">
					{day}
				</div>
				<div class="">
					{dayLetter}
				</div>
			</div>
		{/each}

		<div class="">actions</div>
	</div>
	<Form />

	{#each $checked as { name, dates }}
		{#if $checked.length}
			{$checked.length}
			<div>{name} <span>{dates.join(', ')}</span></div>
		{/if}
	{/each}
</section>

<style>
	.inputs {
		display: grid;
		grid-gap: 1px;

		/* border-width: 0px; */
	}

	section {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
