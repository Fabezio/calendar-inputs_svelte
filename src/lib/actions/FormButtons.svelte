<script>
	import { createEventDispatcher } from 'svelte';
	import { Button, ButtonGroup, Icon, Styles } from 'sveltestrap';

	import '../../main.scss';
	export let size = '';
	export let erase = false
	// export let block = false;
	const dispatch = createEventDispatcher();
	let contents = [
		{ type: 'submit', color: 'primary', label: 'valider', icon: 'check', dispatcher: 'submit' },
		{
			type: 'reset',
			color: 'secondary',
			label: 'effacer',
			icon: 'arrow-counterclockwise',
			dispatcher: 'reset'
		}
		
	];
	$: if (erase) contents = [...contents, { type: '', color: 'danger', label: 'annuler', icon: 'trash', dispatcher: "erase" }]
</script>

<ButtonGroup {size}>
	<Styles />
	{#each contents as { type, label, color, icon, dispatcher }}
		<Button on:click={() => dispatch(dispatcher)} block {type} {color}>
			{#if size === 'sm'}
				<Icon name={icon} class="text-light fa-1x" />
			{:else if size === 'lg'}
				<div class="row">
					<div class="col col-1">
						<Icon name={icon} class="fa-lg me-2 text-light" />
					</div>
					<div class="col col-10">
						<span class=" text-light text-shadow">
							{label.toUpperCase()}
						</span>
					</div>
				</div>
			{:else}
				<span class=" text-light text-shadow">
					{label.toUpperCase()}
				</span>
			{/if}
		</Button>
	{/each}
</ButtonGroup>
