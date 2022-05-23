<template>
  <CircleJsx :dashArray="dashArray" />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import "./cirlceJsx.scss";
import CircleJsx from "./circleJsx.jsx";

const dashArray = ref(283);
const timerLimit = ref(6000);
const time = ref(0);
const timerEnabled = ref(true);

const getTiming = () => {
  time.value = (timerLimit.value / dashArray.value).toFixed(0);
};

const play = () => (timerEnabled.value = true);
const pause = () => (timerEnabled.value = false);

onMounted(() => {
  getTiming();
});

watch(
  dashArray,
  (value) => {
    if (value > 0 && timerEnabled.value) {
      setTimeout(() => {
        dashArray.value--;
      }, time.value);
      return;
    }
    console.log("go switch pictures and animate");
    dashArray.value = 283;
  },
  { immediate: true }
);
</script>
