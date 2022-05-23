<script setup>
const onDrag = (e) => {
  console.log(e);
};
</script>

<template>
  <div>
    <div class="carousel">
      <div class="carousel-box">
        <div
          v-for="(card, index) in Array(5).fill(10, 5)"
          :key="index"
          class="card"
          v-on:drag="onDrag"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  width: 90vw;
  height: 400px;
  background: #fafafa;
  border: solid 1px tomato;
}

.carousel-box {
  border: solid 4px turquoise;
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  cursor: grab;
  overflow: auto;
}

.card {
  width: 200px;
  height: 100%;
  background: #fafafa;
  border: solid 1px tomato;
}
</style>
