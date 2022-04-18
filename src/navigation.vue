<template>
  <div class="navigation-wrapper">
    <!-- Main navigation bar start -->
    <div
      class="navigation"
      :class="{ scrolled: isNavigationScrolled, open: isNavigationOpen }"
    >
      <div class="navigation__items">
        <template
          v-for="(item, index) in routes"
          :to="localePath(item.url)"
          :key="index"
        >
          <a v-if="item.subroutes.length === 0" :key="index" href="#">
            <span>{{ item.name }}</span>
          </a>
          <div
            v-else
            class="navigation__item"
            @mouseover="
              (subMenuItems = item.navigationItems), (isNavigationOpen = true)
            "
          >
            <span>{{ item.name }}</span>
          </div>
        </template>
      </div>
      <div class="navigation__hamburger" @click="toggleNavigation()">
        <div class="nav-icon" :class="{ open: isNavigationOpen }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <Logo />
      <div class="navigation__aside">
        <Button
          classNames="button button--tertiary"
          :href="buttonUrl"
          v-if="buttonUrl && buttonText"
        >
          {{ buttonText }}
        </Button>
        <div class="cart-button">
          <Button classNames="button button--tertiary" href="/cart">
            <Icon type="Cart" color="#004438" />
          </Button>
          <div v-if="cartTotalItems > 0" class="cart-badge">
            <span>{{ cartTotalItems }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Main navigation bar end -->
    <!-- Desktop sub navigation start -->
    <div class="sub-navigation" :class="{ open: isNavigationOpen }">
      <a
        v-for="(item, index) in subMenuItems"
        :key="index"
        :to="localePath(item.url)"
        class="sub-navigation__item"
      >
        <span>{{ item.label }}</span>
      </a>
    </div>
    <!-- Desktop sub navigation start -->
    <div class="mobile-navigation" :class="{ open: isNavigationOpen }">
      <!-- Main mobile menu start -->
      <template v-for="(item, index) in menuItems" :to="localePath(item.url)">
        <a
          v-if="item.submenu === undefined"
          :key="index"
          :to="localePath(item.url)"
          class="mobile-navigation__item"
        >
          <span>{{ item.label }}</span>
        </a>
        <div
          v-else
          :key="item.name"
          @click="
            (subMenuItems = item.submenu),
              (isSubNavigationOpen = true),
              (subMenuTitle = item.label)
          "
          class="mobile-navigation__parent-item mobile-navigation__item"
        >
          <span>{{ item.label }}</span>
          <Icon type="Arrow" />
        </div>
      </template>
      <Button
        classNames="button button--tertiary"
        class="mobile-navigation__cta-button"
        href="/"
      >
        Ontvang persoonlijk advies
      </Button>
      <!-- Main mobile menu end -->
      <!-- Sub mobile menu start -->
      <div
        v-if="menuItems.length > 0"
        class="mobile-navigation mobile-navigation--secondary"
        :class="{ open: isSubNavigationOpen }"
      >
        <Button
          classNames="button button--tertiary"
          class="mobile-navigation__back"
          @onClick="isSubNavigationOpen = false"
        >
          <Icon type="Arrow" color="#004438" />
        </Button>
        <span class="mobile-navigation__title">{{ subMenuTitle }}</span>
        <template
          v-for="(item, index) in subMenuItems"
          :to="localePath(item.url)"
        >
          <a
            v-if="item.submenu === undefined"
            :key="index"
            href="#"
            class="mobile-navigation__item"
          >
            <span>{{ item.label }}</span>
          </a>
          <div
            v-else
            :key="item.name"
            @click="subMenuItems = item.submenu"
            class="mobile-navigation__parent-item mobile-navigation__item"
          >
            <span>{{ item.label }}</span>
            <Icon type="Arrow" />
          </div>
        </template>
      </div>
      <!-- Sub mobile menu end -->
    </div>
    <!-- Background fill for when navigation is opened -->
    <div
      class="sub-navigation-fill"
      :class="{ open: isNavigationOpen }"
      @mouseover="isNavigationOpen = false"
    ></div>
  </div>
</template>
<script lang="ts">
import Button from "./components/btn/button.vue";
import Hamburger from "./components/hamburger.vue";
import Icon from "./components/icon/icon.vue";
import Logo from "./components/logo.vue";

export default {
  name: "Pagination",
  components: {
    Button,
    Icon,
    Logo,
    Hamburger,
  },
  props: {
    menuItems: { type: Array, default: [] },
    logoUrl: { type: String, default: "" },
    buttonText: { type: String, default: "" },
    buttonUrl: { type: String, default: "" },
  },

  //   setup() {
  //     // Get the cart content and return amount of items
  //     const { cart, load: loadCart } = useCart();
  //     const cartTotalItems = computed(() => {
  //       const count = cartGetters.getTotalItems(cart.value);
  //       return count ? count.toString() : null;
  //     });

  //     onSSR(async () => {
  //       await loadCart();
  //     });

  //     return {
  //       cartTotalItems,
  //     };
  //   },
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
      isSubNavigationOpen: false,
      subMenuItems: [],
      subMenuTitle: "",
      cart: true,
      cartTotalItems: 10,
      routes: [
        {
          path: "#",
          name: "Advies",
          subroutes: [],
        },
        {
          path: "#",
          name: "Doelstellingen",
          subroutes: [
            {
              path: "#",
              name: "sub Menu 1",
            },
            {
              path: "#",
              name: "sub Menu 2",
            },
            {
              path: "#",
              name: "sub Menu 3",
            },
          ],
        },
        {
          path: "#",
          name: "Producten",
          subroutes: [],
        },
        {
          path: "#",
          name: "Wetenschap",
          subroutes: [],
        },
      ],
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
<style lang="scss">
@import "./styles/resources.scss";

.navigation-wrapper {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;

  .navigation {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem;
    transition: background-color 0.2s ease-in-out;

    @include md {
      padding: 2.1rem 3.2rem;
    }

    &.scrolled,
    &.open {
      background-color: white;

      .navigation__aside .cart-button .cart-badge {
        border-color: white;
      }
    }

    &__items {
      font-size: 1.6rem;
      flex: 1;
      display: none;

      @include md {
        display: flex;
      }

      span {
        color: palette(text-primary);
        margin-right: 2.4rem;
      }
    }

    &__item {
      cursor: pointer;
    }

    &__hamburger {
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

    &__logo {
      display: flex;
      justify-content: center;
      flex: 1;

      img {
        width: 8.6rem;
        height: 2.4rem;
      }
    }

    &__aside {
      display: flex;
      flex: 1;
      justify-content: flex-end;

      .button {
        display: none;
        margin-right: 1rem;

        @include md {
          display: inline-block;
        }
      }

      .icon {
        display: flex;
        align-items: center;
        margin-left: 2rem;
      }

      .cart-button {
        display: flex;

        a {
          margin-right: 0;
        }

        .button {
          display: flex;
          border: none;
          padding: 0 0 0 1rem;
        }

        .icon {
          margin: 0;
        }

        .cart-badge {
          font-size: 1.2rem;
          color: white;
          background-color: palette(secondary);
          display: inline-flex;
          border-radius: 100%;
          width: 2rem;
          height: 2rem;
          justify-content: center;
          align-items: center;
          margin-left: -0.6rem;
          border: 0.2rem solid palette(off-white);

          @include md {
            margin-top: 1.2rem;
          }
        }
      }
    }
  }

  .sub-navigation,
  .mobile-navigation {
    background-color: white;
    width: 100%;
    flex-direction: column;
    transition: transform 0.35s ease-in-out;
    z-index: -1;
    position: absolute;
    flex-wrap: wrap;

    a {
      margin: 1.6rem 0;
    }
  }

  .sub-navigation {
    display: none;
    max-height: 52rem;
    transform: translateY(calc(-100% - 9.7rem));
    top: 9.2rem;
    padding: 1.6rem;

    &.open {
      transform: translateY(0%);
    }

    &__item {
      font-size: 2.4rem;
      color: palette(text-primary);
    }

    @include md {
      display: flex;
      padding: 3.2rem 10rem;
    }
  }

  .mobile-navigation {
    padding: 8rem 1.6rem;
    height: 100vh;
    transform: translateX(100%);
    top: 0;
    display: flex;

    &.open {
      transform: translateX(0%);
    }

    &__parent-item {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    &--secondary {
      z-index: 1;
    }

    &__item {
      font-size: 2rem;
      color: palette(text-primary);
    }

    &__title {
      font-size: 2.8rem;
      color: palette(text-primary);
      margin-bottom: 3rem;
    }

    &__back {
      display: flex;
      justify-content: flex-start;
      cursor: pointer;
      margin-bottom: 1.6rem;
      border: none;
      padding-left: 0;

      svg {
        transform: rotate(180deg);
      }
    }

    &__cta-button {
      position: absolute;
      bottom: 1.6rem;
      left: 50%;
      transform: translateX(-50%);
    }

    @include md {
      display: none;
    }
  }

  .sub-navigation-fill {
    background-color: palette(text-primary);
    opacity: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -2;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out;

    &.open {
      visibility: visible;
      opacity: 0.7;
    }
  }
}
</style>
