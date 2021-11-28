<script lang="ts">
	import { page } from '$app/stores';
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
    
	}
	const links = [
		{url: "/", label: "accueil"},
		{url: "/missions", label: "missions"},
		{url: "/hours", label: "Horaires"},
	]
	const creations = [
		{url: "/missions", label: "missions"},
		{url: "/hours", label: "Horaires"},

	]
</script>

<Navbar color="primary"  dark expand="md">
	<NavbarBrand href="/">Timemap</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav	 class="ms-auto" navbar>
			<NavItem>
				<NavLink class={$page.path === "/" ? "active" : ""} href="/">Accueil</NavLink>
			</NavItem>
			
			
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>Creations</DropdownToggle>
				<DropdownMenu >
					
					<DropdownItem href="/missions">Missions</DropdownItem>
					<DropdownItem href="/hours">Horaires</DropdownItem>
					
					
				</DropdownMenu>
			</Dropdown>
			<!-- 
				<DropdownItem>Option 2</DropdownItem>
				<DropdownItem divider />
				<DropdownItem>Reset</DropdownItem>
		 -->
		</Nav>
	</Collapse>
</Navbar>
