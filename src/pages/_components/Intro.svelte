<script>
    import { isActive, url } from '@roxi/routify';
    import { slide } from 'svelte/transition';

    export let blurb;

    const links = [
      ['./about', 'about'],
      ['./get_involved', 'get involved'],
      ['./learn', 'learn'],
    ];

    let windowWidth;

    let opened = false;

    $: if (windowWidth > 950) opened = true;

    function slideIfMobile(node, params) {
      if (windowWidth <= 950) {
        return slide(node, params);
      }
    }
</script>

<style>
  #intro {
    font-family: $font-secondary;
    font-weight: 900;
    display: grid;
    grid-template:
      [row1-start] "title nav" 1fr [row1-end]
      [row2-start] "desc ." auto [row2-end]
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
      &:hover {
        text-decoration: none;
      }
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
    nav {
      grid-area: nav;
      align-self: center;
      justify-self: end;
      #links {
        display: grid;
        grid-template-columns: auto auto auto;
        place-items: center;
        a {
          padding: 1rem;
          color: $purple;
          font-family: $font-secondary;
          font-weight: 900;
        }

        .active {
          color: $yellow;
          &:hover {
            text-decoration: none;
            cursor: default;
          }
        }
      }
      #nav-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        #logo-in {
          img {
            width: 2.5rem;
          }
        }

        .menu {
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          .line {
            fill: none;
            stroke: black;
            stroke-width: 6;
            transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
          }
          .line1 {
            stroke-dasharray: 60 207;
            stroke-width: 6;
          }
          .line2 {
            stroke-dasharray: 60 60;
            stroke-width: 6;
          }
          .line3 {
            stroke-dasharray: 60 207;
            stroke-width: 6;
          }
        }
        .opened {
          .line1 {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
            stroke-width: 6;
          }
          .line2 {
            stroke-dasharray: 1 60;
            stroke-dashoffset: -30;
            stroke-width: 6;
          }
          .line3 {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
            stroke-width: 6;
          }
        }
      }
    }
  }

  @media only screen and (max-width: $mobile-cutoff) {
    #intro {
      grid-template:
        [row1-start] "nav nav" 1fr [row1-end]
        [row2-start] "title title" auto [row2-end]
        [row2-start] "desc desc" auto [row2-end]
        / 1fr auto;
      margin-top: 0;
      #title {
        padding: 0;
        h1 {
          line-height: 1.3;
          margin: 1rem 0;
        }
      }
      nav {
        grid-area: nav;
        place-self: stretch;
        background-color: $lavender;
        margin: 0 -1rem;
        padding: 0 1rem;
        #links {
          display: block;
          margin: 0.5rem 0 1rem 0;
          a {
            display: block;
            padding: 0.5rem 0;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 580px) {
    #intro {
      #title {
        h1 {
          word-spacing: 2000%;
        }
      }
    }
  }
  @media only screen and (max-width: $mobile-cutoff-xs) {
    #intro {
      padding: 0 0.5rem;
      nav {
        margin: 0 -0.5rem;
        padding: 0 0.5rem;
      }
    }
  }
</style>

<svelte:window bind:outerWidth={windowWidth}/>
<div id="intro">
  {#if windowWidth > 950}
    <a id="logo" href="/"><img src="/favicon.svg" alt="CDJ Logo"></a>
  {/if}
  <a id="title" href="/"><h1>cornell data journal</h1></a>
  <h3 id="blurb">{blurb}</h3>
  <nav>
    {#if windowWidth <= 950}
      <div id="nav-top">
        <a id="logo-in" href="/"><img src="/favicon.svg" alt="CDJ Logo"></a>
        <button class="menu" on:click={() => opened = !opened} class:opened>
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path class="line line2" d="M 20,50 H 80" />
            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </div>
    {/if}
    {#if opened}
      <div id="links" transition:slideIfMobile|local>
        {#each links as [path, name]}
          <a href={$url(path)} class:active={$isActive(path)}>
            {name}
          </a>
        {/each}
      </div>
    {/if}
  </nav>
</div>

