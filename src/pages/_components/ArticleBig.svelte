<script>
  export let article;
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
    {#await article.component then cmp}
      <svelte:component this={cmp} preview={true} />
    {/await}
  <a>
</div>

