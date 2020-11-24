<script>
    import { metatags, layout, ready } from '@roxi/routify';
    import { setContext } from 'svelte';
    import Intro from './_components/Intro.svelte';
    import ArticleBig from './_components/ArticleBig.svelte';
    import ArticleSmall from './_components/ArticleSmall.svelte';

    metatags.title = 'Cornell Data Journal';
    metatags.description = 'A digital magazine offering data-driven perspectives on current events, academics, politics, and beyond.';

    const articles = $layout.children
      .find(entry => entry.path === '/articles').children
      .map(post => ({
        slug: post.path,
        component: post.children.find(child => child.title === 'Preview_').component,
        ...post.__file.children.find(child => child.file === 'index.svx').meta.frontmatter,
      }));

        
    let componentsReady = 0
    setContext('ready', () => componentsReady++ )
    $: if(componentsReady === articles.length) {$ready();}
</script>

<style>
  #articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: 2rem;
  }

</style>

<Intro/>
{#each articles.filter(article => article.featured) as article}
  <ArticleBig {article} />
{/each}

<div id="articles">
  {#each articles.filter(article => !article.featured) as article}
    <ArticleSmall {article} />
  {/each}
</div>
