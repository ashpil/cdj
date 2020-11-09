<script>
  import CountyInformation from './_components/CountyInformation.svelte';
  import MapContainer from './_components/MapContainer.svelte';
  import MapRegion from './_components/MapRegion.svelte';
  import regions from './_data/regions.js';
  import data from './_data/data';
  import cornell from './_images/cornell.jpg';

  export let preview;

  let activeRegion;

  const colorPalette = ["#38003c", "#2a404e", "#274c52", "#265053",
                         "#255454", "#245956", "#226659", "#1f735d",
                         "#1c8060", "#198c64", "#169968", "#14a66b",
                         "#11b26f", "#0ebf73", "#0bcc76", "#08d97a",
                         "#06e67e", "#03f281", "#00ff85"]; 

  function getCountyData(countyName) {
    return data
      .filter(county => county[8] === countyName)
      .map(county => {
        return {
          color: colorPalette[county[12][4]],
          ...county
        }
      })
    [0];
  };
</script>

{#if preview !== true }
  <h3>{activeRegion ?? "None"}</h3>
  {#if activeRegion}
    <CountyInformation
      county={getCountyData(activeRegion)}
      onClose={() => {
        activeRegion = undefined;
      }} />
  {/if}
{/if}
<MapContainer>
  {#each Object.entries(regions) as [name, svgPath]}
    <MapRegion
      on:click={() => {activeRegion = name}}
      {svgPath}
      fillColour={activeRegion === name ? '#333' : getCountyData(name).color}
    />
  {/each}
</MapContainer>

