<script>
  import {services, jobTypes, workerRanks, hours} from "$lib/_store/jobs"
  import FormButtons from "$lib/actions/FormButtons.svelte";
import { prefetch } from "$app/navigation";
  let job = ""
  $jobTypes = []
  function addJob() {
    $jobTypes = [...$jobTypes, job]
    job = ""
    return $jobTypes
  }
  function handleKey (e) {
    if(e.key="Enter") addJob()
  }

</script>

<h1>Ajouter une mission</h1>
<form action="" on:keydown={handleKey} on:submit|preventDefault={addJob} >
  <div class="form-label">
    <label for="missions">Mission</label>
    <input type="text" id="mission" name="mission" bind:value={job}>
  </div>
  <FormButtons />
</form>
{#each $jobTypes as item}
  <div>{item}</div>
{/each}