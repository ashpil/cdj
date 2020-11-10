<script>
  import { onMount } from 'svelte';
  import { ready } from '@roxi/routify';

  export let article;

  let component;

  onMount(async () => {
    component = await article.component;
    $ready();
  });
</script>

<style>
  .article {
    display: grid;
    grid:
      "title preview" min-content
      "desc preview" 1fr
      / 1fr 2fr;
    grid-gap: 0.5rem;

    h2 {
      grid-area: title;
      margin: 0;
    }
    p {
      grid-area: desc;
    }
    .preview {
      grid-area: preview;
      padding: 1rem;
      border: 1px solid grey;
    }
  }

</style>

<div class="article">
  <h2><a href={article.slug}>{article.title}</a></h2>
  <p>{article.description}</p>
  <a class="preview" href={article.slug}>
      <svelte:component this={component} preview={true} />
  </a>
</div>

