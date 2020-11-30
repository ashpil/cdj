<script>
    import Nav from './Nav.svelte';
</script>

<style>
  #intro {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: end;
    margin: 3rem auto;
    max-width: $max-width;

    #intro-desc {
      h1 {
        margin: 0 0 1rem 0;
      }
      h3 {
        font-size: 22px;
        font-weight: 200;
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: $mobile-cutoff) {
    #intro {
      grid-template-columns: initial;
      justify-items: stretch;
      margin-bottom: 1rem;
    }
  }
</style>

<div id="intro">
  <div id="intro-desc">
    <h1>cornell data journal</h1>
    <h3>a digital magazine offering data-driven perspectives on current events, academics, politics, and beyond.</h3>
  </div>
  <Nav/>
</div>

