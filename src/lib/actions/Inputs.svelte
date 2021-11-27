<script>
	import { month, dates, checked, selectedDates } from '$lib/_store/month';
	export let option = '';
</script>

<div
	class="inputs {option}"
	style="grid-template-columns: 10em repeat({$month.length}, 2em) repeat(2, 2em);"
>
	<slot />
</div>

<style>
	.inputs {
		display: grid;
		grid-gap: 1px;
	}
</style>
