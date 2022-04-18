<script>
import Nav from "./nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<template>
  <div class="menu">
    <Nav />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/resources.scss";
.menu {
  background: lightblue;
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include md {
    position: initial;
    background: transparent;
  }
}
</style>
