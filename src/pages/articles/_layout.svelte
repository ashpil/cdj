<script>
  import Intro from '../_components/Intro.svelte';
</script>
<style global>
  #centered {
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    font-size: 40px;
    line-height: initial;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }
</style>
<Intro blurb=""/>
<div id="centered">
  <slot />
</div>
