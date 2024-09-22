<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";
  let value = '';

  const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
    value = e.currentTarget.value + '!';

  };
</script>

<div style="display: inline;">
  <input
  autocomplete="off"
  bind:value="{value}"
  on:input={handleInput}
  />
  <span> value: {value}</span>
</div>
