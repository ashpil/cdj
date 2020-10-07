<script>
    import { metatags, layout } from '@roxi/routify';

    metatags.title = 'buncha articles';
    metatags.description = 'Description coming soon...';

    const posts = $layout.parent.children
      .filter((entry) => entry.__file.isDir)
      .map((file) => ({
        ...file.children.find((x) => x.__file.file === 'index.svx').meta.frontmatter,
        slug: file.path,
      }));
</script>

<p>Hello!</p>
{#each posts as post}
    <p>
        <a href={post.slug}>{post.title}</a>
    </p>
{/each}

