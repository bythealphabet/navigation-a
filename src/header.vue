<script>
import Hamburger from "./components/hamburger.vue";
import Menu from "./components/menu.vue";
import Logo from "./components/logo.vue";
import Aside from "./components/aside.vue";
import Navigation from "./navigation.vue";

export default {
  components: {
    Hamburger,
    Menu,
    Logo,
    Aside,
    Navigation,
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.isNavigationScrolled = true;
      } else if (window.scrollY === 0) {
        this.isNavigationScrolled = false;
      }
    },
    toggleNavigation() {
      this.isNavigationOpen = !this.isNavigationOpen;
    },
  },
  data() {
    return {
      isNavigationOpen: false,
      isNavigationScrolled: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div>
    <!-- <Navigation /> -->
    <header
      class="header"
      :class="{
        scrolled: isNavigationScrolled,
        open: isNavigationOpen,
        sticky: isNavigationScrolled,
      }"
    >
      <Menu />
      <Hamburger />
      <Logo />
      <Aside />
    </header>
    <div class="main"></div>
  </div>
</template>

<style lang="scss">
@import "./styles/resources.scss";

.header {
  background: salmon;
  display: flex;
  align-items: center;
  padding: 1.6rem;
  background: transparent;
  transition: background-color 0.2s ease-in-out;

  @include md {
    padding: 2.1rem 3.2rem;
  }
}

.sticky {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
}

.scrolled,
.open {
  background-color: white;

  .navigation__aside .cart-button .cart-badge {
    border-color: white;
  }
}

.main {
  background: salmon;
  width: 100vw;
  height: 220vh;
}
</style>
