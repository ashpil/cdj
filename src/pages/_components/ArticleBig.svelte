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
        font-size: 28px;
      }
      p {
        font-size: 20px;
        margin: 0.5rem 0;
      }
    }

    .preview {
      padding: 1rem;
      border: 1px solid $gray;
      position: relative;
      background-color: white;
      .highlight {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $yellow;
        left: 10px;
        top: 10px;
        z-index: -1;
      }
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
    <div class="highlight"></div>
  </a>
</div>

