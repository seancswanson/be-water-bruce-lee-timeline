<script lang="ts">
  import { onMount } from "svelte";
  import TopNav from "../TopNav.svelte";
  import * as d3 from "d3";

  let modes: Map = {
    0: "Timeline",
    1: "Connections",
    2: "Grid",
  };
  let activeModeIndex = 0;
  let container;

  function setModeIndex(index) {
    activeModeIndex = index;
    console.log("hello from" + modes[index]);
    updateVisualization();
  }

  function updateVisualization() {
    // This function will handle the transition between modes
    // You'll implement the D3 logic here to rearrange elements
    // based on the activeModeIndex
    const svg = d3.select(container).select("svg");

    // Example transition (you'll need to adjust this based on your specific visualization)
    svg
      .selectAll("*")
      .transition()
      .duration(750)
      .attr("transform", () => {
        switch (activeModeIndex) {
          case 0:
            return "translate(0,0)"; // Timeline layout
          case 1:
            return "translate(100,100)"; // Connections layout
          case 2:
            return "translate(200,200)"; // Grid layout
          default:
            return "translate(0,0)";
        }
      });
  }

  onMount(() => {
    // Initial D3 setup
    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%");

    // Create your initial elements here
    // These elements will persist across mode changes
    svg.append("g").attr("class", "visualization-container");

    // Initial data loading and element creation would go here

    updateVisualization();
  });
</script>

<TopNav setModeIndexCallback={setModeIndex} />

<section>
  <div bind:this={container} id="explore-container">
    <!-- D3 will manage the content here -->
  </div>
</section>

<style>
  #explore-container {
    border: 1px solid black;
    width: 100%;
    height: 600px; /* Adjust as needed */
  }
  .mode-buttons {
    margin-top: 20px;
  }
  button {
    margin-right: 10px;
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #e0e0e0;
  }
</style>
