<script>
  export let name;
  export let year;
  export let position;
  export let desc;
  export let color;

  let img;
  let highlight;

  let out = false;
  let hover = false;

  function reverse(t) {
    out = !out;
    hover = false;
  }
  function start(t) {
    out = true;
    hover = true;
  }
  function transitionEnd(t) {
    if (event.propertyName == 'top') {
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
    img {
      border: 3px solid black;
      height: 13rem;
      width: 15rem;
      object-fit: contain;
      padding-top: 2rem;
      display: block;
    }
    .img {
      position: relative;
      top: 0;
      left: 0;
      transition: top 0.25s, left 0.25s;
    }
    .highlight {
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
        font-size: 16px;
        margin: 1em;
      }
    }
    h3 {
      color: $blue;
      margin: 0.5em 0;
    }
    p {
      margin: 0.5em 0;
    }
    .over {
      position: absolute;
      top: 0;
      padding: 1rem;
      color: gray;
      h4, p {
        margin: 0;
        font-size: 14px;
      }
      h4 {
        font-family: $font-secondary;
      }
    }
    .big {
      position: relative;
      margin: 3rem 0;
    }
    .info {
      position: relative;
      z-index: -2;
      margin-left: 0.5rem;
    }
  }
  .out {
    .highlight {
      left: 15% !important;
      top: 15% !important;
    }
    .img {
      left: -15%;
      top: -15%;
    }
  }
</style>

<div class="parent">
  <div on:mouseleave={reverse} on:mouseenter={start} class="big" class:out>
    <div bind:this={img} class="img">
      <img alt={name} src="/authors/backup.svg" style="background-color: {color}"/>
      <div class="over">
        <h4>{name.toUpperCase()}</h4>
        <p>{position}</p>
      </div>
    </div>
    <div bind:this={highlight} class="highlight" on:transitionend={transitionEnd}>
      <p>{desc}</p>
    </div>
  </div>
  <div class="info">
    <h3>{name}</h3>
    <p>Class of '{year}</p>
  </div>
</div>
