<script>
  import { page, metatags } from '@roxi/routify';

  metatags.title = `${$page.meta.frontmatter.title} | CDJ`;
  metatags.description = $page.meta.frontmatter.description;
</script>

<slot />

