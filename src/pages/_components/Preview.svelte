<script>
  export let component;
  export let slug;

</script>
<style>
  .preview {
    display: block;
    padding: 1rem;
    margin: 0.35rem;
    border: 1px solid $gray;
    position: relative;
    background-color: white;
    bottom: 0.35rem;
    left: 0.35rem;

    .highlight {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $yellow;
      right: 0.7rem;
      top: 0.7rem;
      z-index: -1;
    }
  }
</style>

<a class="preview" href={slug}>
  <svelte:component this={component} preview={true} />
  <div class="highlight"></div>
</a>

