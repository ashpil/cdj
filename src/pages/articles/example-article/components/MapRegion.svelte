<script>
  export let fillColour;
  export let svgPath;
</script>

<style lang="scss">
  .path {
    transition: fill 0.5s ease;
      &:hover {
        fill: #333;
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
