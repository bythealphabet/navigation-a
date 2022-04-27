<script>
import Nav from "./nav.vue";

export default {
  components: {
    Nav,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="menu" :class="{ open: active }">
    <Nav />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/resources.scss";
.menu {
  background: lightblue;
  position: absolute;
  inset: 5.5rem 0 0 0;

  transform: translateX(100%);
  transition: transform 0.35s ease-in-out;

  @include md {
    position: initial;
    background: transparent;
    transform: translateX(0);
  }
}

.open {
  transform: translateX(0);
}
</style>
