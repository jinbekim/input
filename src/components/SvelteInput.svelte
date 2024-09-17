<script>
  let value = '';

  const handleInput = (e) => {
    value = e.target.value + '!';
  };
</script>

<input
  id="SvelteInput"
  name="SvelteInput"
  type="text"
  value="{value}"
  on:input={handleInput}
/>
