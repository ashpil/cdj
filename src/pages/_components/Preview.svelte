<script>
  import { getContext } from 'svelte';
  
  export let component;
  export let slug;
</script>

<style>
  .preview {
    position: relative;
    display: block;
    margin: 0 0 1rem 1rem;
    .component {
      position: relative;
      z-index: 1;
      border: 2px solid black;
      background-color: white;
      padding: 0.5rem;
      max-height: 17rem;
    }

    .highlight {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      border: 2px solid black;
      right: 0.7rem;
      top: 0.7rem;
      z-index: 0;
    }
  }
</style>

<a class="preview" href={slug}>
  <div class="component">
    {#await component then cmp}
      <svelte:component this={cmp} preview={true} />
      {getContext('ready')()}
    {/await}
  </div>
  <div class="highlight"></div>
</a>

