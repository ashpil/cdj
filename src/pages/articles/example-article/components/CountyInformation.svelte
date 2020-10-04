<script>
  import { slide } from "svelte/transition";
  import { quintInOut } from "svelte/easing";

  export let county;
  export let onClose;
</script>

<style>
.modal-overlay {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #333;
    opacity: 0.5;
    z-index: 5;
  }

  .container {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .modal {
    padding: 10px;
    overflow-y: scroll;
    text-align: center;
    border-radius: 7px;
    background-color: #fff;
    box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
    height: 420px;
  }

  @media (min-width: 400px) {
    .modal {
      height: 520px;
    }
  }

  @media (min-width: 820px) {
    .container {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal {
      width: 820px;
      height: 620px;
    }
  }

  .header {
    margin-bottom: 20px;
  }

  .header-back-button {
    position: absolute;
  }

  .header-back-button > button {
    width: 32px;
    height: 32px;
    padding: 0;
    background: #f5f5f5;
  }

  .header-title {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .header-title > h1 {
    margin: 0;
    font-size: 1.4em;
  }

  .body-players {
    display: flex;
    flex-direction: column;
  }

  .body-players > h2 {
    font-size: 1.2em;
  }
</style>

<section class="container" transition:slide={{ duration: 200, easing: quintInOut }}>
      <div class="modal">
    <header class="header">
        <div class="header-back-button">
  <button on:click={onClose}>
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path
        fill="#333"
        d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>
  </button>
</div>
    </header>
    <section class="body">
        {#each Object.entries(county) as [entryname, data]}
            <p>{data}</p>
        {/each}
    </section>
  </div>
</section>
