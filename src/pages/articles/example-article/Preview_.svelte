<script>
  import CountyInformation from './_components/CountyInformation.svelte';
  import MapContainer from './_components/MapContainer.svelte';
  import MapRegion from './_components/MapRegion.svelte';
  import regions from './_data/regions';
  import data from './_data/data';

  export let preview;

  let activeRegion;

  const colorPalette = ['#FE7D00', '#FE7D00', '#FE7D00', '#FE7D00',
    '#FE7D00', '#2BACBB', '#2BACBB', '#2BACBB', '#2BACBB', '#2BACBB'];

  function getCountyData(countyName) {
    return data
      .filter((county) => county[8] === countyName)
      .map((county) => ({
        ...county,
        color: colorPalette[county[12][4]],
      }))[0];
  }
</script>

{#if preview !== true }
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
      on:click={() => { activeRegion = name; }}
      {svgPath}
      fillColour={activeRegion === name ? '#7F6273' : getCountyData(name).color}
    />
  {/each}
</MapContainer>

