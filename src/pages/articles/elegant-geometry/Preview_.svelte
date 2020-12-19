<script>
  import thumb from './_images/thumb.jpg';

  export let preview;
</script>

{#if preview}
  <img src={thumb} alt="Geometric Boxes">
{/if}

