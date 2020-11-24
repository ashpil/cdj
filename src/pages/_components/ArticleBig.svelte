<script>
  import { ready } from '@roxi/routify';
  import Preview from './Preview.svelte';

  export let article;

  let component;

  component = article.component;
</script>

<style>
  .article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    grid-gap: 2rem;
    margin: 3rem 0;

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

</style>

<div class="article">
  <Preview slug={article.slug} {component} />
  <div class="description">
    <h2><a href={article.slug}>{article.title}</a></h2>
    <p>{article.description}</p>
  </div>
</div>

