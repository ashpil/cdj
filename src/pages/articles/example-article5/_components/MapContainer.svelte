<script>
  let svg;
</script>

<style>
  svg {
    max-height: inherit;
    display: block;
    margin: 0 auto;
  }

</style>

<svg viewBox="0 0 700 533" bind:this={svg}>
    <slot />
</svg>

