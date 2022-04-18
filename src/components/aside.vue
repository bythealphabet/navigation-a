<script>
import Button from "./btn/button.vue";
import Icon from "./icon/icon.vue";

export default {
  components: {
    Button,
    Icon,
  },
  data() {
    return {
      cartTotalItems: 10,
      buttonUrl: "https://www.google.com",
      buttonText: "Development Environment",
    };
  },
};
</script>

<template>
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
</template>

<style lang="scss" scoped>
@import "../styles/resources.scss";
.navigation__aside {
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
</style>
