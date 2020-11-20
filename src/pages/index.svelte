<script>
    import { metatags, layout } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';
    import ArticleBig from './_components/ArticleBig.svelte';

    metatags.title = 'Cornell Data Journal';
    metatags.description = 'Description coming soon...';

    const articles = $layout.children
      .find((entry) => entry.path === '/articles').children
      .map((post) => ({
        slug: post.path,
        component: post.children.find((child) => child.title === 'Preview_').component,
        ...post.__file.children.find((child) => child.file === 'index.svx').meta.frontmatter,
      }));
</script>

<Intro/>
{#each articles as article}
  <ArticleBig {article} />
{/each}

