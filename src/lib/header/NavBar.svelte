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
	console.log($page)
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
	<div class="container-fluid">
	  <a class="navbar-brand" sveltekit:prefetch  href="/">Calendar-inputs</a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="container navbar-nav me-auto mb-2 mb-lg-0">
		  <li class="nav-item">
			<a sveltekit:prefetch class="nav-link {$page.path === '/' ? 'active' : ''}" href='/' >Accueil</a>
		  </li>
		  
		  <li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle {$page.path !== '/' ? 'active' : ''}" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			  Créations
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
			  <li><a class="dropdown-item" href="/missions">Missions</a></li>
			  <li><a class="dropdown-item" href="/hours">Horaires</a></li>
			  <!--

				  <li><hr class="dropdown-divider"></li>
				  <li><a class="dropdown-item" href="#">Something else here</a></li>
				-->
			</ul>
		  </li>
		  <!--
			  <li class="nav-item">
				<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
			  </li>

		  -->
		</ul>
		<!--

			<form class="d-flex">
			  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
			  <button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		-->
	  </div>
	</div>
  </nav>
<!--

	<Navbar color="primary"  dark expand="md">
		<NavbarBrand href="/">Timemap</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav	 class="ms-auto" navbar>
				<NavItem>
					<NavLink sveltekit:prefetch  class={$page.path === "/" ? "active" : ""} href="/">Accueil</NavLink>
				</NavItem>
				
				
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Creations</DropdownToggle>
					<DropdownMenu >
						
						<DropdownItem sveltekit:prefetch  href="/missions">Missions</DropdownItem>
						<DropdownItem sveltekit:prefetch  href="/hours">Horaires</DropdownItem>
						
						
					</DropdownMenu>
				</Dropdown>
				
					<DropdownItem>Option 2</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Reset</DropdownItem>
	
				
				
			</Nav>
		</Collapse>
	</Navbar>

-->	

