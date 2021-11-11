<script>
	import { text } from 'svelte/internal';

	export let color = 'primary';
	export let icon = '';
	export let size = '';
	export let use = '';
	export let label = '';
</script>

{#if use === 'submit'}
	<button
		type="submit"
		class="btn {size.length ? `btn-${size}` : ''}
 btn-{(color = 'success')} 
"
		><i
			class="fas fa-{(icon = 'plus')} fa-xl {label.length ? 'pe-2' : ''}
"
		/></button
	>
{:else if use === 'reset'}
	<button
		type="reset"
		class="btn {size.length ? `btn-${size}` : ''}
 btn-{(color = 'warning')} 
"
		><i
			class="fas {size.length ? `btn-${size}` : ''}
 fa-{(icon = 'undo')} fa-xl {label.length ? 'pe-2' : ''}"
		/>
	</button>
{:else}
	<button class="btn btn-{color}"
		><i
			class="fas fa-{icon} fa-xl {label.length ? 'pe-2' : ''}
"
		/></button
	>
{/if}
