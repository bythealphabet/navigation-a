<script>
export default {
  name: "Button",
  props: {
    href: {
      default: "",
    },
    classNames: {
      default: "button button--primary",
    },
    disabled: {
      default: false,
    },
    ariaLabel: {
      default: "",
    },
    omitPrevent: {
      default: false,
    },
  },
  computed: {
    type() {
      return this.href ? "NuxtLink" : "button";
    },
    hasOnClick() {
      return this.onClick && !this.disabled && !this.href;
    },
    doesSlotHaveText() {
      return this.$slots.default[0].text.length;
    },
  },
  methods: {
    onClick() {
      if (this.hasOnClick) this.$emit("onClick");
    },
  },
};
</script>

<template>
  <component
    v-if="omitPrevent"
    :is="type"
    :to="href ? href : null"
    :class="[classNames, disabled ? 'disabled' : null]"
    :aria-disabled="disabled"
  >
    <slot />
  </component>
  <component
    v-else
    :is="type"
    :to="href ? href : null"
    :class="[classNames, disabled ? 'disabled' : null]"
    :aria-disabled="disabled"
    @click.prevent="onClick"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@import "../../styles/resources.scss";

.button,
.link {
  font-size: 1.6rem;
  cursor: pointer;
  line-height: 1.6rem;
}

.button {
  padding: 1.6rem;
  border-radius: 4rem;
  border: none;
  transition: background-color 0.2s ease-in-out;
  display: inline-block;
  text-decoration: none;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--primary {
    background-color: palette(secondary);
    color: palette(white);

    &:hover {
      background-color: palette(secondary-shadow);
    }

    &.disabled {
      background-color: palette(black);
      cursor: not-allowed;
      opacity: 0.3;
    }

    path {
      fill: palette(white);
    }
  }

  &--secondary {
    background-color: palette(white);
    color: palette(text-primary);

    &:hover {
      background-color: palette(off-white);
    }

    &.disabled {
      background-color: palette(white);
      cursor: not-allowed;
      opacity: 0.3;
    }

    path {
      fill: palette(text-primary);
    }
  }

  &--tertiary {
    background: none;
    border: 0.1rem solid rgba(palette(secondary), 0.4);
    color: palette(text-primary);
    transition: border 0.2s ease-in-out;

    path {
      fill: palette(text-primary);
    }

    &:hover,
    &:active,
    &:focus {
      border: 0.1rem solid palette(secondary);
    }

    &.disabled {
      opacity: 0.4;
      color: palette(secondary);
      border-color: palette(secondary);
      cursor: not-allowed;
    }
  }

  &--quaternary {
    background: none;
    border: 0.1rem solid rgba(palette(white), 0.4);
    color: palette(white);
    transition: border 0.2s ease-in-out;

    path {
      fill: palette(white);
    }

    &:hover,
    &:active,
    &:focus {
      border: 0.1rem solid palette(white);
    }

    &.disabled {
      opacity: 0.4;
      color: palette(white);
      border-color: palette(white);
      cursor: not-allowed;
    }
  }
}

.link {
  padding: 0.2rem;
  position: relative;
  transition: outline 0.2s ease-in-out;
  background: none;
  border: none;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 0.1rem;
    position: absolute;
    bottom: -0.8rem;
    transition: background-color 0.2s ease-in-out;
  }

  &:focus {
    outline: solid 0.1rem palette(focus);
  }

  &--primary {
    color: palette(text-primary);
    &:after {
      background-color: rgba(palette(secondary-light), 0.3);
    }

    &:hover,
    &:active,
    &:focus {
      &:after {
        background-color: palette(secondary-light);
      }
    }
  }

  &--secondary {
    color: palette(white);

    &:after {
      background-color: rgba(palette(white), 0.3);
    }

    &:hover,
    &:active,
    &:focus {
      &:after {
        background-color: palette(white);
      }
    }
  }
}
</style>
