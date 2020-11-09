<script>
    import Nav from './Nav.svelte';
</script>

<style>
    #intro {
      #intro-inner {
        max-width: $max-width;
        margin: 0 auto;
        #intro-top {
            display: flex;
            justify-content: space-between;
        }
      }
      margin-bottom: 3rem;
    }
</style>

<div id="intro">
  <div id="intro-inner">
    <div id="intro-top">
      <h1>Cornell Data Journal</h1>
      <Nav/>
    </div>
    <h3>a digital magazine offering data-driven perspectives on current events, academic, politics, and beyond. </h3>
  </div>
</div>

