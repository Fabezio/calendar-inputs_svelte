<script>
	import { onMount } from 'svelte';
	import HeadTitle from '$lib/header/HeadTitle.svelte';
  import FormButtons from '$lib/actions/FormButtons.svelte';
	// import { workers } from "$lib/_store/workers";
	import axios from 'axios';
	import About from '../about.svelte';

	// import Input from "$lib/Forms/Input.svelte";
	// import Button from "$lib/Compos/Button.svelte";
	// import NotifBar from "$lib/Compos/NotifBar.svelte";
	let addWorker = false;
	// import {
	//     nom,
	//     prenom,
	//     email,
	//     phone,
	//     worker,
	//     workers,
	// } from "../store/worker";
	let nom = '';
	let prenom = '';
	let phone = '';
	let email = '';
	let worker = {};
	let workers = [];
	// import { url } from "../store/db";
	// const url = "http://localhost:3000/api/workers/add";
	const url = 'http://localhost:3000/api/workers';
	let full = false;
	function submit(e) {
		full = true;
		e.preventDefault();
		worker = {
			nom: nom,
			prenom: prenom,
			phone: phone,
			email: email.value
		};
		const response = axios.post(url + '/add', worker);
		// workers = [...workers, response.data];
		addWorker = false;
		return workers;
	}
	const pageTitle = 'Liste des employés';

	// let workers = [];
	onMount(() => fetchData());
	async function fetchData() {
		const { data } = await axios.get(url);
		workers = data;
	}
	async function removeWorker(id) {
		const response = await axios.delete(`${url}/${id}`);
		if (response.data.id === id) {
			workers = workers.filter((w) => w.id !== id);
		}
	}
	async function updateWorker() {
		alert('update me!');
	}
	// console.log(addWorker);
</script>

<HeadTitle title={pageTitle} />
<ul class="list-group">
  <li class="list-group-item">
	<div class="row text-uppercase fw-bold">
		<div class="col-4 ">Identité</div>
		<div class="col-3">
			Numéro de Téléphone
		</div>
		<div class="col-3">
      Adresse Email
			
		</div>
		<div class="col-2">
      Actions
			
		</div>
		<!-- {@debug email} -->

		<!-- {/if} -->
	</div>
</li>
{#each workers as { _id, nom, prenom, email, phone }}

	{#if nom !== 'inconnu'}
  <li class="list-group-item">
		<div class="row">

			<div class="col-4 text-capitalize fw-bold">{nom}, {prenom}</div>
      <div class="col-3">
        {#if phone.length >= 10 && phone.match(/[0-9]/) && phone !== "1234567890" }
          N°: {phone}
        {/if}

      </div>
      <div class="col-3">
        {#if email.length && email !== "moi@moi.fr" && email !== "adresse@temporaire.fr"}
        Contact: {email}
        
        {/if}
      </div>
      <div class="col-2">
      <FormButtons on:erase={removeWorker(_id)} erase=true size="sm" />
      </div>

      <!-- {@debug email} -->
        
      <!-- {/if} -->
       
		<!-- </div> -->

  </li>
	{/if}

  {/each}
</ul>
<!-- 
<svelte:head>
    <title>Planning | {title}</title>
</svelte:head>

<h1>{title}</h1> -->
