<script>
  import Header from './Header.svelte';
  import Footer from '../../_components/Footer.svelte';
  import { page, metatags } from '@roxi/routify';

  const title = $page.meta.frontmatter.title;
  const date = $page.meta.frontmatter.date;
  const authors = $page.meta.frontmatter.authors.join(", ");

  metatags.title = `${title} | CDJ`;
  metatags.description = $page.meta.frontmatter.description;
</script>

<style>
  main {
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 1rem;

    h1 {
      margin: 0.5em 0;
    }

    div {
      font-size: 17px;
      color: $gray;
      span {
        margin-right: 1em;
      }
    }
  }

  @media only screen and (max-width: $mobile-cutoff-xs) {
    main {
    }
  }
</style>

<Header />
<main>
  <h1>{title}</h1>
  <div>
    <span>{date}</span><em>By {authors}</em>
  </div>
  <slot />
</main>
<Footer />

