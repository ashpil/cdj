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
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: 2rem;

    .description {
      h2 {
        margin: 0;
      }
      p {
        font-size: 18px;
      }
    }

    .preview {
      padding: 1rem;
      border: 1px solid grey;
    }
  }

</style>

<div class="article">
  <div class="description">
    <h2><a href={article.slug}>{article.title}</a></h2>
    <p>{article.description}</p>
  </div>
  <a class="preview" href={article.slug}>
    <svelte:component this={component} preview={true} />
  </a>
</div>

