<script>
export default {
  data() {
    return {
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
      isSubNavigationOpen: false,
      subMenuItems: [],
      subMenuTitle: "",
    };
  },
};
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__items" role="list">
      <template v-for="route in routes" :key="route.path">
        <li v-if="route.subroutes.length === 0" class="navigation__item">
          <a href="">{{ route.name }}</a>
        </li>
        <li
          v-else
          class="navigation__item dropdown"
          @mouseover="
            (subMenuItems = route.subroutes), (isNavigationOpen = true)
          "
          @mouseleave="isNavigationOpen = false"
        >
          <a href="">{{ route.name }}</a>
          <div class="dropdown-menu">
            <ul class="dropdown-menu__items" role="list">
              <template v-for="subroute in subMenuItems" :key="subroute.path">
                <li class="dropdown-menu__item">
                  <a href="">{{ subroute.name }}</a>
                </li>
              </template>
            </ul>
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "../styles/resources.scss";
.navigation {
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease-in-out;

  &__items {
    display: flex;
    flex-flow: column nowrap;
    font-size: 1.6rem;
    flex: 1;

    @include md {
      display: flex;
      flex-flow: row nowrap;
    }

    li {
      color: palette(text-primary);
      margin-right: 2.4rem;

      a {
        color: palette(text-primary);
      }
    }

    .dropdown-menu {
      position: relative;

      &__items {
        position: absolute;
        left: 0;
        top: calc(100% + 1.6rem);
        width: 20rem;
        background-color: #fff;
        box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.1);
        z-index: 1;

        @include md {
          display: flex;
          flex-flow: column nowrap;
        }

        li {
          color: palette(text-primary);
          margin-bottom: 1.6rem;

          a {
            color: palette(text-primary);
          }
        }
      }
    }
  }

  &__item {
    cursor: pointer;
  }
}
</style>
