<template>
  <div>
    <p class="">Second Circle</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dashArray: 283,
      timerLimit: 6000,
      time: 0,
      timerEnabled: true,
    };
  },

  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.dashArray--;
        }, this.time);
      }
    },
    dashArray: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.dashArray--;
          }, this.time);
          return;
        }
        console.log("go switch pictures and animate");
        this.dashArray = 283;
      },
      immediate: true,
    },
  },
  mounted() {
    this.getTiming();
  },
  methods: {
    getTiming() {
      this.time = (this.timerLimit / this.dashArray).toFixed(0);
    },
    play() {
      this.timerEnabled = true;
    },
    pause() {
      this.timerEnabled = false;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-flow: column nowrap;
}
.btn-halo {
  width: 100px;
  height: 100px;
  position: relative;
  fill: white;
  stroke: green;
  stroke-width: 0.2rem;
  stroke-linecap: round;
  /* Makes sure the animation starts at the top of the circle */
  transform: rotate(90deg);
  transform-origin: center;

  /* One second aligns with the speed of the countdown timer */
  transition: 1s linear all;
  transform: scaleX(-1);

  /* Allows the ring to change color when the color value updates */
}
</style>
