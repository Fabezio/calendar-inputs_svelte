<script>
	export let val;
	$: console.log(val);
</script>

<div class="form-check form-switch m-auto">
	<input
		class="form-check-input"
		bind:value={val}
		type="checkbox"
		role="switch"
		id="job"
		checked={val}
	/>
</div>

<style>
	.form-check-input,
	.form-switch {
		height: 1em;
	}
</style>
