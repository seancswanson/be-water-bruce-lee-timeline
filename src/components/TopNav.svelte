<script lang="ts">
  export let modes: Map;
  export let currentModeIndex: Number;
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  import { sineIn } from "svelte/easing";
  export let setModeIndexCallback: (index: number) => void = () => {};

  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };
</script>

<header
  class="h-[100px] sm:h-[50px] border-b flex flex-col sm:flex-row items-center px-12 gap-4 sm:gap-0 sm:justify-between justify-center z-20 fixed w-full bg-white"
>
  <div class="logo-container relative">
    <a href="/" class=" text-4xl sm:text-xl font-black" id="logo">BE WATER</a>

    <span
      id="be-water-cn"
      class="absolute text-[3.5em] sm:text-[2em] break-keep text-gray-300 z-[-1] translate-x--1/2 translate-y--1/2 left-1/4 top-[-50%]"
      >如水</span
    >
  </div>
  <nav class="hidden sm:flex flex-col gap-4 sm:gap-8 sm:h-full sm:flex-row">
    <button on:click={() => setModeIndexCallback(0)}>Timeline</button>
    <button on:click={() => setModeIndexCallback(1)}>Connections</button>
    <button on:click={() => setModeIndexCallback(2)}>Grid</button>
    <Button on:click={() => (hidden1 = false)}>{modes[currentModeIndex]}</Button
    >
  </nav>

  <Drawer
    transitionType="fly"
    {transitionParams}
    bind:hidden={hidden1}
    id="sidebar1"
  >
    <div class="flex items-center">
      <h5
        id="drawer-label"
        class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <InfoCircleSolid class="w-5 h-5 me-2.5" /> Info
      </h5>
      <CloseButton
        on:click={() => (hidden1 = true)}
        class="mb-4 dark:text-white"
      />
    </div>
    <nav class="flex flex-col gap-8">
      <button on:click={() => setModeIndexCallback(0)}>Timeline</button>
      <button on:click={() => setModeIndexCallback(1)}>Connections</button>
      <button on:click={() => setModeIndexCallback(2)}>Grid</button>
    </nav>
  </Drawer>
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
