

<script lang="ts">
	import { db } from '$lib/data/db';

	import { month, dates, checked, selectedDates, jobs, missions } from '$lib/_store/month';
	import { name } from '$lib/_store/users';

	import Form from '$lib/Form.svelte';
	import TableField from '$lib/TableField.svelte';
	import Checked from '$lib/Checked.svelte';
$missions = [
		{label: "SSIAP2 JOUR"},
		{label: "SSIAP2 NUIT"},
		{label: "SSIAP1 JOUR"},
	]
	let usersList = [...db.users];

	$month = [...Array(30).keys()];
	$selectedDates = [];

	$dates = [];
	$: {
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
	}

	$checked = [];

	const today = '2021-11-12';
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


<section>
	

	<h2 class="my-3">
		aujourd'hui: {thisFormat}
	</h2>

	<!-- <TableField /> -->
	<Form />
	<Checked />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;

		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
