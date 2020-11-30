<script>
  import Preview from './Preview.svelte';

  export let article;
</script>

<style>
  .article {
    .description {
      margin: 2rem 0;
      h2 {
        margin: 2rem 0;
        font-size: 24px;
      }

      p {
        font-size: 18px;
        margin: 0.5rem 0;
      }
    }
  }

</style>

<div class="article">
  <Preview slug={article.slug} component={article.component} />
  <div class="description">
    <h2><a href={article.slug}>{article.title}</a></h2>
    <p>{article.description}</p>
  </div>
</div>

