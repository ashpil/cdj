<script>
    // import thumb from './_images/thumb.png'; // NEED A THUMB PNG
  
    export let preview;
  </script>
  
  <style>
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
  
  {#if preview}
    <!-- <img src={thumb} alt="North Carolina Tent City Timeline and Line Graph"> -->
  {/if}
  
  