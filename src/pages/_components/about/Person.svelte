<script>
  export let name;
  export let role;
  export let color;
  export let desc;
  export let year;

  let highlight;

  let out = false;
  let hover = false;

  function reverse() {
    out = !out;
    hover = false;
  }
  function start() {
    out = true;
    hover = true;
  }
  function transitionEnd(e) {
    if (e.propertyName == 'top') {
      out = false;
      if (hover) {
        highlight.style.zIndex = '1';
      } else {
        highlight.style.zIndex = '-1';
      }
    }
  }
</script>

<style>
  .parent {
    position: relative;
    z-index: 2;
    padding-right: 1.15rem;
    img {
      border: 3px solid black;
      height: 15rem;
      width: 15rem;
      object-fit: contain;
      display: block;
      position: relative;
      top: 0;
      left: 0;
      transition: top 0.25s, left 0.25s;
    }
    .person-highlight {
      display: flex;
      justify-content: center; /* align horizontal */
      align-items: center; /* align vertical */
      position: absolute;
      height: 100%;
      width: 100%;
      border: 3px solid black;
      top: 5%;
      left: 5%;
      z-index: -1;
      background-color: white;
      transition: top 0.25s, left 0.25s;
      p {
        font-size: 17px;
        margin: 1.5em;
        :global {
          b {
            text-decoration: underline;
            text-decoration-color: $yellow;
            text-decoration-thickness: 2px;
          }
          i {
            text-decoration: underline;
            text-decoration-color: $steelblue;
            text-decoration-thickness: 2px;
            font-style: normal;
            font-weight: bold;
          }
        }
      }
    }
    h3 {
      color: $blue;
      margin: 0.5em 0;
    }
    p {
      margin: 0.5em 0;
    }
    .big {
      position: relative;
    }
    .info {
      position: relative;
      z-index: -2;
      margin: 3rem 0 3rem 0.5rem;
    }
  }
  .out {
    .person-highlight {
      left: 15% !important;
      top: 15% !important;
    }
    img {
      left: -15%;
      top: -15%;
    }
  }
</style>

<div class="parent">
  <div on:mouseleave={reverse} on:mouseenter={start} class="big" class:out>
    <img src="/authors/high/{name.replace(/ /g, '_')}.png" on:error={e => e.target.src = '/authors/backup.svg'} alt={name} style="background-color: {color}">
    <div bind:this={highlight} class="person-highlight" on:transitionend={transitionEnd}>
      <p>{@html desc}</p>
    </div>
  </div>
  <div class="info">
    <h3>{`${name} ${year !== undefined ? '`' + year : ''}`}</h3>
    <p>{role}</p>
  </div>
</div>
