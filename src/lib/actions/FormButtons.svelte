<script>
	import { createEventDispatcher } from 'svelte';
	import { Button, ButtonGroup, Icon, Styles } from 'sveltestrap';

	import '../../main.scss';
	export let size = '';
	const dispatch = createEventDispatcher();
	const contents = [
		{ type: 'submit', color: 'success', label: 'valider', icon: 'check', dispatcher: 'submit' },
		{
			type: 'reset',
			color: 'warning',
			label: 'effacer',
			icon: 'arrow-counterclockwise',
			dispatcher: 'reset'
		}
		// { type: '', color: 'danger', label: 'annuler', icon: 'trash', dispatcher: "cancel" }
	];
</script>

<ButtonGroup {size}>
	<Styles />
	{#each contents as { type, label, color, icon, dispatcher }}
		<Button on:click={() => dispatch(dispatcher)} block {type} {color}>
			{#if size === 'sm'}
				<Icon name={icon} class="text-light fa-1x" />
			{:else if size === 'lg'}
				<Icon name={icon} class="fa-lg me-2" />
				<span class=" text-light text-shadow">
					{label.toUpperCase()}
				</span>
			{:else}
				<span class=" text-light text-shadow">
					{label.toUpperCase()}
				</span>
			{/if}
		</Button>
	{/each}
</ButtonGroup>

<style lang="scss">
	@import '../../main.scss';
	.text-shadow {
		text-shadow: 1px 1px 0 rgba(127, 127, 127, 0.5);
	}
</style>
