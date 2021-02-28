<script>
  import Header from './Header.svelte';
  import Footer from '../../_components/Footer.svelte';
</script>

<style>
  main {
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    font-size: 30px;
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

