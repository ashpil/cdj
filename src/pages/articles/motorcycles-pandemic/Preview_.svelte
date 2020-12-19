<script>
  import thumb from './_images/thumb.png';

  export let preview;
</script>

{#if preview}
  <img src={thumb} alt="Dark Map of US">
{/if}

