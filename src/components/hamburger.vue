<script>
export default {
  methods: {
    toggleNavigation() {
      this.isNavigationOpen = !this.isNavigationOpen;
    },
  },
  data() {
    return {
      isNavigationOpen: false,
    };
  },
};
</script>

<template>
  <div class="hamburger" @click="toggleNavigation()">
    <div class="nav-icon" :class="{ open: isNavigationOpen }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/resources.scss";
.hamburger {
  flex: 1;

  .nav-icon {
    width: 2.3rem;
    height: 1.5rem;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    display: block;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 0.1rem;
      width: 100%;
      background: palette(text-primary);
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 0.7rem;
      }

      &:nth-child(4) {
        top: 1.4rem;
      }
    }

    &.open {
      span {
        &:nth-child(1),
        &:nth-child(4) {
          top: 1.8rem;
          width: 0%;
          left: 50%;
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @include md {
    display: none;
  }
}
</style>
