<script>
	import { month, dates, checked, selectedDates } from '$lib/_store/month';
	import Input from '$lib/actions/Inputs.svelte';
</script>

<Input option="fw-bold text-center fs-6">
	<!-- <label for="">nom</label> -->
	<div>NOMS</div>
	<div>Vacation</div>

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
</Input>
