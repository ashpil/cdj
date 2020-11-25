<script>
  import Footer from './_components/Footer.svelte';
</script>

<style global>
  main {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: $max-width;
  }
</style>

<main>
  <slot />
</main>
<Footer />

