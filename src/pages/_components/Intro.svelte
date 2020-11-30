<script>
    import Nav from './Nav.svelte';

    export let blurb;
</script>

<style>
  #intro {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: end;
    margin: 3rem auto;
    max-width: $max-width;
    padding: 0 1rem;

    #intro-desc {
      justify-self: stretch;
      #title {
        display: flex;
        align-items: center;
        color: black;
        img {
          max-width: 2.5rem;
          padding: 1.5rem 1rem 1.5rem 0;
        }
        h1 {
          margin: 0;
        }
        &:hover {
          text-decoration: none;
        }
      }
      h3 {
        font-size: 22px;
        margin: 0;
        color: $gray;
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
    <a id="title" href="/">
      <img src="/favicon.svg" alt="CDJ Logo">
      <h1>cornell data journal</h1>
    </a>
    <h3>{blurb}<h3>
  </div>
  <Nav/>
</div>

