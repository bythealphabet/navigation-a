<template>
  <div>
    <svg
      class="btn-halo"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke-linecap="round"
        :stroke-dasharray="`${setCircleDasharray} 283`"
        stroke-mitterlimit="0"
        transform="rotate(-90 ) translate(-100 0)"
      />
    </svg>

    {{ setCircleDasharray }}

    <button @click="stopTimer">Stop</button>
    {{ calculateTimeFraction }}
    <button @click="startTimer">Start</button>

    {{ timepassed }}

    <input type="range" id="vol" name="vol" min="30" max="315" v-model="vol" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      vol: 0,
      timeLimit: 5,
      timeLeft: 5,
      timerInterval: null,
      timepassed: 0,
    };
  },
  computed: {
    calculateTimeFraction() {
      const rawTimeFraction = this.timeLeft / this.timeLimit;
      return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
    },
    setCircleDasharray() {
      return (this.calculateTimeFraction * 283).toFixed(0);
    },
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timepassed++;
        this.timeLeft = this.timeLimit - this.timepassed;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timerInterval);
    },
  },
  mounted() {
    // this.startTimer();
  },
};
</script>

<style scoped>
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
