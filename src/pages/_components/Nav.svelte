<script>
  import { isActive, url } from '@roxi/routify';

  const links = [
    ['./about', 'about'],
    ['./get_involved', 'get involved'],
    ['./learn', 'learn'],
  ];
</script>

<style>
  nav {
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
</style>

<nav>
  {#each links as [path, name]}
    <a href={$url(path)} class:active={$isActive(path)}>
      {name}
    </a>
  {/each}
</nav>

