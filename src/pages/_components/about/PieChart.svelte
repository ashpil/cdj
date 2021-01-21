<script>
  import { onMount } from 'svelte';
  import tippy, { followCursor } from 'tippy.js';

  const areas = ["Editing", "Web Development", "Writing", "Journalism", "Data Science", "Economics", "Statistics", "Music", "Art", "Graphics"];

  let checked = false;

  let checkedTooltip = () => {};
  let uncheckedTooltip = () => {};
  let updateTooltip = () => {};
  let pie;

  // https://stackoverflow.com/a/19270021
  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  onMount(() => {
    const uncheckedinfo = tippy('[data-tippy-content]');
    const checkedinfo = tippy(pie, {
      followCursor: true,
      plugins: [followCursor],
    });
    checkedinfo.disable();
    checkedTooltip = () => {
      checkedinfo.enable();
      uncheckedinfo.forEach(t => t.disable());
    }
    uncheckedTooltip = () => {
      checkedinfo.disable();
      uncheckedinfo.forEach(t => t.enable());
    }
    updateTooltip = () => {
      checkedinfo.setContent(getRandom(areas, 2).join(' + '));
    };
  });


  $: checked ? checkedTooltip() : uncheckedTooltip();
</script>

<style>
  svg {
    width: 15rem;
    height: 15rem;
    transition: filter 200ms ease-in-out;
    clip-path: circle(10rem at center);
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    path {
      transition: filter 100ms ease-in-out;
      &:hover {
        filter: brightness(110%);
      }
    }
  }

  svg.checked {
    filter: blur(1rem);
    transform: scale(1.5);
    clip-path: circle(5rem at center);
    &:hover {
      filter: blur(1rem) brightness(110%);
    }
    path {
      &:hover {
        filter: none;
      }
    }
  }

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    h4 {
      display: inline;
      margin: 0 2rem;
    }
    h4.checked {
      color: $lightblue;
    }
    label.checked {
      background: $purple;
      &:after {
        left: calc(100% - 0.25rem);
        transform: translateX(-100%);
      }
    }

    label {
      cursor: pointer;
      width: 4rem;
      height: 2rem;
      background: grey;
      display: inline-block;
      border-radius: 3rem;
      position: relative;
      margin: 0 1rem;
      &:active:after {
        width: 2rem;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        width: 1.5rem;
        height: 1.5rem;
        background: #fff;
        border-radius: 90px;
        transition: 0.2s;
      }
    }
  }

  .info {
    max-width: 25rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    text-align: center;
    p {
      font-size: 18px;
    }
  }

</style>

<svg bind:this={pie} viewBox="0 0 300 300" class:checked on:mousemove={updateTooltip}>
  <path fill="none" d="M-1-1h302v302H-1z"/>
  <g>
    <path data-tippy-content="Computer Science" d="M150 150L41 47a150 150 0 01218 0L150 150z" fill="#2d2d94"/>
    <path data-tippy-content="Information Science" d="M150 150L259 47a150 150 0 0123 175l-132-72z" fill="#a5bdda"/>
    <path data-tippy-content="Education" d="M150 150l132 72a150 150 0 01-132 78V150z" fill="#ffce00"/>
    <path data-tippy-content="English" d="M150 150v150a150 150 0 01-120-60l120-90z" fill="#18a0fb"/>
    <path data-tippy-content="Math" d="M150 150L30 240a150 150 0 01-30-85l150-5z" fill="#672893"/>
    <path data-tippy-content="Social Studies" d="M150 150L0 155a150 150 0 0114-68l136 63z" fill="#ed8c47"/>
    <path data-tippy-content="Economics" d="M150 150L14 87a150 150 0 0127-40l109 103z" fill="#e84671"/>
  </g>
</svg>

<div class="checkbox">
  <h4 class:checked={!checked}>Expecation</h4>
    <input type="checkbox" id="switch" bind:checked class:checked hidden/>
    <label for="switch" class:checked></label>
    <h4 class:checked>Reality</h4>
</div>

<div class="info">
  {#if checked}
    <p>All of our roles are interdisciplinary, each taking part in everything.</p>
  {:else}
    <p>Each of us has our own seperate roles that fit into nice boxes.</p>
  {/if}
</div>
