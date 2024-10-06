<script lang="ts">
  export let setModeIndexCallback: (index: number) => void = () => {};
</script>

<header
  class="h-[200px] sm:h-[50px] border-b flex flex-col sm:flex-row items-center px-12 gap-4 sm:gap-0 sm:justify-between justify-center z-20 fixed w-full bg-white"
>
  <div class="logo-container relative">
    <a href="/" class=" text-4xl sm:text-xl font-black" id="logo">BE WATER</a>

    <span
      id="be-water-cn"
      class="absolute text-[3.5em] sm:text-[2em] break-keep text-gray-300 z-[-1] translate-x--1/2 translate-y--1/2 left-1/4 top-[-50%]"
      >如水</span
    >
  </div>
  <nav class="flex flex-col gap-4 sm:gap-8 sm:h-full sm:flex-row">
    <button on:click={() => setModeIndexCallback(0)}>Timeline</button>
    <button on:click={() => setModeIndexCallback(1)}>Connections</button>
    <button on:click={() => setModeIndexCallback(2)}>Grid</button>
  </nav>
</header>

<style>
  button {
    background: none;
    border-bottom: 2px solid transparent;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  button:hover {
    border-color: #585858;
  }
</style>
