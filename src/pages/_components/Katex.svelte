<script>
  import katex from 'katex';
  import { onMount } from 'svelte';

  export let displayMode = false;

  let wrapper;
  let content = "";

  onMount(() => {
    content = wrapper.textContent;
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css">
</svelte:head>

<span bind:this={wrapper} hidden><slot /></span>

{@html katex.renderToString(content, { displayMode })}

