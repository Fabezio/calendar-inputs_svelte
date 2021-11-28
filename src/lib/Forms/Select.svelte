<script>
    import {FormGroup, Label, Input, Form} from "sveltestrap"
    export let input
    export let label
</script>

<FormGroup >
    
      <Label for={label}>Mission</Label>
      <Input id={label} name={label} bind:this={input}  on:input   />
    

  </FormGroup>