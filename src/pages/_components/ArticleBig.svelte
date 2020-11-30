<script>
  import Preview from './Preview.svelte';

  export let article;
</script>

<style>
  .article {
    background-color: $light-magneta;
    margin: 3rem 0;

    .article_inner {
      max-width: $max-width;
      margin: 0 auto;
      padding: 2rem 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
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
    }
  }

</style>

<div class="article">
  <div class="article_inner">
    <Preview slug={article.slug} component={article.component} />
    <div class="description">
      <h2><a href={article.slug}>{article.title}</a></h2>
      <p>{article.description}</p>
    </div>
  </div>
</div>

