<script setup>
import { ref, render } from "vue";
import anime from "animejs";

defineProps({
  msg: String,
});

const title = ref(null);

const moveTitle = () => {
  anime({
    targets: title.value,
    translateX: [
      { value: -100, duration: 1000 },
      { value: 0, duration: 1000 },
    ],
    easing: "easeInOutQuad",
  });
};
</script>

<template>
  <h1 class="hello" ref="title" @click="moveTitle">{{ msg }}</h1>

  <p ref="move">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
