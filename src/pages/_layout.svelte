<script>
  import Footer from './_components/Footer.svelte';
</script>

<div id="banner">
    <h6>
        Hey, you! 👋 Our next info session is <b>Sept. 13, 5-6pm <a href="https://bit.ly/cdj-info">on Zoom</a></b>. In the meantime, join our <a href="https://join.slack.com/t/cornell-data-journal/shared_invite/zt-ugj8kfd0-TvH0uYbPasGJNzJ7s4DVQg">slack workspace</a> to get updates on our first g-body and other exciting club details!
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

<main>
  <slot />
</main>
<Footer />

