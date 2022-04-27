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
      <Menu :active="isNavigationOpen" />
      <Hamburger :active="isNavigationOpen" :toggleHandler="toggleNavigation" />
      <Logo />
      <Aside />
    </header>
    <main class="main">
      <!-- <div role="menu" aria-orientation="vertical" data-state="open" dir="ltr" id="radix-1" aria-labelledby="radix-0" class="c-hEkcDJ" tabindex="-1" data-orientation="vertical" style="outline: none; --radix-dropdown-menu-content-transform-origin:var(--radix-popper-transform-origin); pointer-events: auto;" data-side="top" data-align="center"><div role="menuitem" class="c-gPJYUc" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">New Tab <div class="c-lfxdkY">⌘+T</div></div><div role="menuitem" class="c-gPJYUc" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">New Window <div class="c-lfxdkY">⌘+N</div></div><div role="menuitem" aria-disabled="true" data-disabled="" class="c-gPJYUc" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">New Private Window <div class="c-lfxdkY">⇧+⌘+N</div></div><div role="menuitem" id="radix-9" aria-haspopup="menu" aria-expanded="false" aria-controls="radix-8" data-state="closed" class="c-bsSaIE" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">More Tools<div class="c-lfxdkY"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></div><div role="separator" aria-orientation="horizontal" class="c-jpCrn"></div><div role="menuitemcheckbox" aria-checked="true" class="c-gPJYUc" data-state="checked" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><span class="c-eRePVY" data-state="checked"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>Show Bookmarks <div class="c-lfxdkY">⌘+B</div></div><div role="menuitemcheckbox" aria-checked="false" class="c-gPJYUc" data-state="unchecked" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">Show Full URLs</div><div role="separator" aria-orientation="horizontal" class="c-jpCrn"></div><div class="c-bKbfOB">People</div><div role="group"><div role="menuitemradio" aria-checked="true" class="c-gPJYUc" data-state="checked" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><span class="c-eRePVY" data-state="checked"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg></span>Pedro Duarte</div><div role="menuitemradio" aria-checked="false" class="c-gPJYUc" data-state="unchecked" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">Colm Tuite</div></div><span style="position: absolute; pointer-events: none; width: 10px; height: 10px; transform: rotate(0deg); will-change: transform; top: 100%; direction: ltr; left: 112.203px;"><span style="display: inline-block; vertical-align: top; pointer-events: auto;"><svg class="c-fjMftf" width="10" height="5" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block;"><polygon points="0,0 30,0 15,10"></polygon></svg></span></span></div> -->
      <div
        data-radix-popper-content-wrapper=""
        style="
          position: absolute;
          top: 0px;
          left: 0px;
          transform: translate3d(683px, 118px, 0px);
          min-width: max-content;
          will-change: transform;
          --radix-popper-transform-origin: center 262px;
        "
      >
        <div
          role="menu"
          aria-orientation="vertical"
          data-state="open"
          dir="ltr"
          id="radix-1"
          aria-labelledby="radix-0"
          class="c-hEkcDJ"
          tabindex="-1"
          data-orientation="vertical"
          style="
            outline: none;
            --radix-dropdown-menu-content-transform-origin: var(
              --radix-popper-transform-origin
            );
            pointer-events: auto;
          "
          data-side="top"
          data-align="center"
        >
          <div
            role="menuitem"
            class="c-gPJYUc"
            tabindex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            New Tab
            <div class="c-lfxdkY">⌘+T</div>
          </div>
          <div
            role="menuitem"
            class="c-gPJYUc"
            tabindex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            New Window
            <div class="c-lfxdkY">⌘+N</div>
          </div>
          <div
            role="menuitem"
            aria-disabled="true"
            data-disabled=""
            class="c-gPJYUc"
            tabindex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            New Private Window
            <div class="c-lfxdkY">⇧+⌘+N</div>
          </div>
          <div
            role="menuitem"
            id="radix-13"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-controls="radix-12"
            data-state="closed"
            class="c-bsSaIE"
            tabindex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            More Tools
            <div class="c-lfxdkY">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div
            role="separator"
            aria-orientation="horizontal"
            class="c-jpCrn"
          ></div>
          <div
            role="menuitemcheckbox"
            aria-checked="true"
            class="c-gPJYUc"
            data-state="checked"
            tabindex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            <span class="c-eRePVY" data-state="checked"
              ><svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path></svg></span
            >Show Bookmarks
            <div class="c-lfxdkY">⌘+B</div>
          </div>
          <div
            role="menuitemcheckbox"
            aria-checked="false"
            class="c-gPJYUc"
            data-state="unchecked"
            tabindex="-1"
            data-orientation="vertical"
            data-radix-collection-item=""
          >
            Show Full URLs
          </div>
          <div
            role="separator"
            aria-orientation="horizontal"
            class="c-jpCrn"
          ></div>
          <div class="c-bKbfOB">People</div>
          <div role="group">
            <div
              role="menuitemradio"
              aria-checked="true"
              class="c-gPJYUc"
              data-state="checked"
              tabindex="-1"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <span class="c-eRePVY" data-state="checked"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                    fill="currentColor"
                  ></path></svg></span
              >Pedro Duarte
            </div>
            <div
              role="menuitemradio"
              aria-checked="false"
              class="c-gPJYUc"
              data-state="unchecked"
              tabindex="-1"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              Colm Tuite
            </div>
          </div>
          <span
            style="
              position: absolute;
              pointer-events: none;
              width: 10px;
              height: 10px;
              transform: rotate(0deg);
              will-change: transform;
              top: 100%;
              direction: ltr;
              left: 112.203px;
            "
            ><span
              style="
                display: inline-block;
                vertical-align: top;
                pointer-events: auto;
              "
              ><svg
                class="c-fjMftf"
                width="10"
                height="5"
                viewBox="0 0 30 10"
                preserveAspectRatio="none"
                style="display: block"
              >
                <polygon points="0,0 30,0 15,10"></polygon></svg></span
          ></span>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "./styles/resources.scss";

.header {
  /* background: salmon; */
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
  width: 100vw;
  height: 220vh;
}
</style>
