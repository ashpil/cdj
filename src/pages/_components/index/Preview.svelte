<script>
  import { getContext } from 'svelte';
  
  export let component;
  export let slug;
</script>

<style>
  .preview {
    position: relative;
    display: block;
    padding: 0 1rem 1rem 0;
    .component {
      position: relative;
      z-index: 1;
      border: 2px solid black;
      background-color: white;
      height: 17rem;
      transition: border 200ms ease;
      overflow: hidden;
    }

    .highlight {
      position: absolute;
      width: calc(100% - 1.2rem);
      height: 17rem;
      background-color: white;
      border: 2px solid black;
      left: 0.7rem;
      top: 0.7rem;
      z-index: 0;
      transition: width 200ms ease, height 200ms ease, border 200ms ease;
    }

    &:hover .highlight {
      width: calc(100% - 1rem);
      height: 17.3rem;
      border: 2px solid $yellow;
    }
    &:hover .component {
      border: 2px solid $yellow;
    }
  }

@media only screen and (max-width: 700px) {
  .preview {
    .component {
      height: auto;
    }
    .highlight {
      height: calc(100% - 1.2rem);
    }
    &:hover .highlight {
      height: calc(100% - 1rem);
    }
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

