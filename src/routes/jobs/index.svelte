<script>
  import { onMount } from "svelte";
  // import dateFormat from "dateformat";
  import axios from "axios";

  // import Title from "$lib/Header/Title.svelte";
  // import Input from "$lib/Forms/Input.svelte";
  // import Select from "$lib/Forms/Select.svelte";
  // import Button from "$lib/Compos/Button.svelte";
  // import NotifBar from "$lib/Compos/NotifBar.svelte";
  import { joursFeriés } from "$lib/data/joursferiés";
  import HeadTitle from "$lib/header/HeadTitle.svelte"

  // const today = dateFormat(new Date(), "isoDate");
  // const thisDay = dateFormat(new Date(), "fullDate");
  //   const thisDay =
 const formatter = Intl.DateTimeFormat('fr', {year: "numeric", month: "long", weekday:"long", day:"numeric"})
  let showAll = false;
  let addJob = false;
  let selected = ""; //temporaire
  let date = "";
  let chefJour = "";
  let chefNuit = "";
  let agentJour = "";
  let agentNuit = "";
  let job = {};
  let jobs = [];
  const url = "http://localhost:3000/api/jobs";
  const workersUrl = "http://localhost:3000/api/workers";
  let workers = [];
  let newJobsList = [];
  let month = 0;
  async function fetchWorkers() {
    const { data } = await axios.get(workersUrl);
    workers = data;
    workers.map(({ nom, prenom }) => {
      console.log(nom, prenom);
      sortedList = [...sortedList, [nom, prenom]];
      return sortedList;
    });
  }
  let sortedList = [];

  let full = false;
  function submit(e) {
    full = true;
    let isFerie = false;
    e.preventDefault();
    for (let k in joursFeriés) {
      if (date === k) isFerie = true;
      // console.log(k);
    }

    job = {
      date: date,
      isFerie: isFerie,
      chefJour: pickWorker(chefJour),
      agentJour: pickWorker(agentJour),
      chefNuit: pickWorker(chefNuit),
      agentNuit: pickWorker(agentNuit),
    };
    const response = axios.post(url + "/add", job);
    console.log(response)
    // jobs = [...jobs, response.data];
    full = false;
    addJob = false;
    fetchWorkers();
    fetchData();
  }
  const pageTitle = "Planning du mois de Décembre";

  onMount(() => {
    fetchWorkers();
    fetchData();
  });
  function pickWorker(nom) {
    // console.log("nom:", nom);
    let found;
    workers.map((w) => {
      if (w.nom === nom) found = w;
    });
    console.log(found);
    // delete found._id;
    return found;
  }
  async function fetchData() {
    const { data } = await axios.get(url);
    data.map((item) => {
      // if (item.date.split("-")[1] == parseInt(today.split("-")[1]) + 1)
        newJobsList = [...newJobsList, item];
    });
    jobs = data;
    return(  jobs);
  }
  async function removeJob(id) {
    const response = await axios.delete(`${url}/${id}`);
    if (response.data.id === id) {
      jobs = jobs.filter((w) => w.id !== id);
    }
    fetchData();
  }
  function previous() {
    month -= 1;
    console.log(month);
    fetchData();
  }
  function next() {
    month += 1;
    console.log(month);
    fetchData();
  }
</script>

<HeadTitle title={pageTitle} />
{#each jobs as job}
{#if job.date.split("-")[1] === "09"}
  
<div class="{job.isFerie || (formatter.format(new Date(job.date))).split(" ")[0] == 'samedi' || (formatter.format(new Date(job.date))).split(" ")[0] == 'dimanche' ? 'text-success': ''}">{formatter.format(new Date(job.date))} : <span> {job.chefJour.nom},   {job.chefNuit.nom} </span>; <span> {job.agentJour.nom}, {job.agentNuit.nom} </span>

</div>
{/if}
  <!-- <div>{job.date}</div> -->
{/each}



<style>
  .grid {
    display: grid;
    grid-template-columns: 1em 1fr 1em;
  }
  i {
    place-self: center center;
  }
  .bar {
    display: grid;
    grid-gap: 1em;
    place-content: center space-between;
    grid-template-columns: 1fr repeat(1, 1em 1fr);
    grid-template-areas:
      "date day daycom"
      "date day dayoff"
      "date night nightcom"
      "date night nightoff";
  }
  /* height: 5rem; */

  .date {
    grid-area: date;
    grid-row: span 4;
    align-self: start;
  }
  .day {
    grid-area: day;
    justify-self: end;
    align-self: start;
  }
  .daycom {
    grid-area: daycom;
    justify-self: start;
  }
  .dayoff {
    justify-self: start;
    grid-area: dayoff;
  }
  .night {
    align-self: start;
    grid-area: night;
    justify-self: end;
  }
  .nightoff {
    justify-self: start;
    grid-area: nightoff;
  }
  .nightcom {
    justify-self: start;
    grid-area: nightcom;
  }
  @media screen and (min-width: 960px) {
    .bar {
      border-radius: 8px;
      grid-template-columns: 1fr repeat(2, 1em 1fr);
      grid-template-areas:
        "date day daycom night nightcom"
        "date day dayoff night nightoff";
    }
    .date {
      grid-row: span 2;
    }
  }
</style>
