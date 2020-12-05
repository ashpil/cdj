<script>
  export let fillColour;
  export let svgPath;
</script>

<style>
  .path {
    transition: fill 0.5s ease;
      &:hover {
        fill: #7F6273;
        cursor: pointer;
      }
  }
</style>

<path
  on:click
  fill={fillColour}
  class="path"
  d="{svgPath}"
  stroke="white"
/>
