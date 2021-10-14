<script>
  import Footer from './_components/Footer.svelte';
</script>

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
      a {
          color: $steelblue;
      }
    }
  }
  main {
    margin: 0 auto;
    overflow: hidden;
  }
</style>

<div id="banner">
    <h6>
        Hey, you! 👋 Join our <b><a href="https://join.slack.com/t/cornell-data-journal/shared_invite/zt-xkae7bn4-57myrKPjhZMHO8Bj4WTDUw">slack workspace</a></b> to get updates on exciting club details!
    </h6>
</div>
<main>
  <slot />
</main>
<Footer />

