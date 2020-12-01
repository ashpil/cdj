<script>
    import Nav from './Nav.svelte';

    export let blurb;
</script>

<style>
  #intro {
    display: grid;
    grid-template:
      [row1-start] "title nav" 1fr [row1-end]
      [row2-start] "desc nav" auto [row2-end]
      / 2fr 1fr;
    margin: 3rem auto;
    max-width: $max-width;
    padding: 0 1rem;

    #logo {
      max-width: 2.5rem;
      padding: 1.5rem 1rem 1.5rem 0;
      grid-area: title;
    }
    #title {
      color: black;
      grid-area: title;
      align-self: center;
      padding-left: 3rem;
      h1 {
        margin: 0;
      }
    }
    #blurb {
      font-size: 22px;
      margin: 0;
      color: $gray;
      grid-area: desc;
    }
    #nav-wrap {
      grid-area: nav;
      align-self: center;
      justify-self: end;
    }
    a:hover {
      text-decoration: none;
    }
  }

  @media only screen and (max-width: $mobile-cutoff) {
    #intro {
      grid-template:
        [row1-start] "logo nav" 1fr [row1-end]
        [row2-start] "title title" auto [row2-end]
        [row2-start] "desc desc" auto [row2-end]
        / 1fr auto;
      margin-top: 0;
        #logo {
          grid-area: logo;
          padding: 0.5rem 0;
          align-self: center;
        }
        #title {
          padding: 0;
          h1 {
            line-height: 1.3;
            margin: 1rem 0;
          }
        }
    }
  }
  @media only screen and (max-width: $mobile-cutoff-xs) {
    #intro {
      padding: 0 0.5rem;
    }
  }
</style>

<div id="intro">
  <a id="logo" href="/"><img src="/favicon.svg" alt="CDJ Logo"></a>
  <a id="title" href="/"><h1>cornell data journal</h1></a>
  <h3 id="blurb">{blurb}</h3>
  <div id="nav-wrap"><Nav/></div>
</div>

