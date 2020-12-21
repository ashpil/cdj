<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<style>
  main {
    max-width: 50rem;
    margin: 0 auto;
  }
</style>

<Header />
<main>
  <slot />
</main>
<Footer />

