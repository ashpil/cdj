<script>
  import Footer from './_components/Footer.svelte';
</script>

<div id="banner">
    <h6>
        Hey, you! 👋 Our next info session is <b>Sept. 8, 5-6pm @ Gates G01</b>. Be there or be square!
    </h6>
</div>

<style>
  #banner {
    background-color: $blue;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
    h6 {
      color: white;
      font-weight: 400;
      padding: 1em;
      margin: 0;
      font-size: 22px;
      text-align: center;
      b {
        color: $yellow;
        font-weight: 1000;
      }
    }
  }
  main {
    margin: 0 auto;
    overflow: hidden;
  }
</style>

<main>
  <slot />
</main>
<Footer />

