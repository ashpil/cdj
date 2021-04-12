<script>
  import { onMount } from 'svelte';
  import tippy from 'tippy.js';

  export let authors;

  const colors = ['#A5BDDA', '#2D2D94', '#EAC428', '#672893'];

  onMount(() => {
    tippy('[data-tippy-content]');
  });
</script>

<style>
  .authors {
    margin-top: 1.5rem;
    .author {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      img {
        display: block;
        margin: 0 auto;
        max-height: 100%;
      }
    }
  }
</style>

<div class="authors">
  {#each authors as author, i}
    <span  data-tippy-content="{author}" class="author" style="background-color:{colors[i % colors.length]};">
      <img src="/authors/low/{author.replace(' ', '_')}.png" on:error={e => e.target.remove()} alt={author}>
    </span>
  {/each}
</div>

