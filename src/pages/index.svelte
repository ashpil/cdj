<script>
    import { metatags, layout } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';

    metatags.title = 'cdj';
    metatags.description = 'Description coming soon...';

    const posts = $layout.parent.children
        .filter((entry) => entry.path === '/articles')[0].children
        .map((file) => ({
            ...file.children.find((x) => x.__file.file === 'index.svx').meta.frontmatter,
            slug: file.path,
        }));
</script>

<Intro/>

<p>
    Check out <a href="/about">about</a> and <a href="/articles">articles</a>
</p>
<p>Hello!</p>
{#each posts as post}
    <p>
        <a href={post.slug}>{post.title}</a>
    </p>
{/each}