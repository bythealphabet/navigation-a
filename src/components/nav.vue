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
    <ul
      class="navigation__items"
      role="list"
      v-for="route in routes"
      :key="route.path"
    >
      <li v-if="route.subroutes.length === 0" class="navigation__item">
        <a href="">{{ route.name }}</a>
      </li>
      <li
        v-else
        class="navigation__item"
        @mouseover="(subMenuItems = route.subroutes), (isNavigationOpen = true)"
      >
        <a href="">{{ route.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "../styles/resources.scss";
.navigation {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &__items {
    font-size: 1.6rem;
    flex: 1;
    display: none;

    @include md {
      display: flex;
    }

    li {
      color: palette(text-primary);
      margin-right: 2.4rem;
    }
  }

  &__item {
    cursor: pointer;
  }
}
</style>
