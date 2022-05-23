<script setup>
import CircleJsx from "./components/circleJsx.jsx";
import circleLogic from "./components/circleLogic";

const { dashArray, play, pause, animate } = circleLogic();
</script>

<template>
  <h1 :class="{ go: animate }">GOOD OLD TEXT</h1>
  <CircleJsx :dashArray="dashArray" />

  <button @click="play">play</button>
  <button @click="pause">pause</button>
</template>

<style>
body {
  height: 100vh;
  background: slategray;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 3rem;
  color: white;
  text-align: center;
  font-weight: bold;
}

.go {
  transform: translate3d(100px, 200px, 0);
}
</style>
