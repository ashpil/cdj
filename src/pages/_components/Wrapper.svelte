<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<style>
  main {
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 0.5rem;
  }

  @media only screen and (max-width: $mobile-cutoff-xs) {
    main {
    }
  }
</style>

<Header />
<main>
  <slot />
</main>
<Footer />

