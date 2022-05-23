import { ref, reactive, onMounted, watch, computed, watchEffect } from "vue";

export default function circleLogic() {
  const dashArray = ref(283);
  const timerLimit = ref(8000);
  const time = ref(0);
  const timerEnabled = ref(true);
  const animate = ref(false);

  const getTiming = () => {
    time.value = (timerLimit.value / dashArray.value).toFixed(0);
  };
  const play = () => (timerEnabled.value = true);
  const pause = () => (timerEnabled.value = false);
  const reset = () => (dashArray.value = 283);
  const startTextAnimation = () => {
    animate.value = false;
  };

  onMounted(() => {
    getTiming();
  });

  watch(
    timerEnabled,
    (value) => {
      if (value) {
        setTimeout(() => {
          dashArray.value--;
        }, time.value);
      }
    },
    { immediate: true }
  );

  watch(dashArray, (value) => {
    animate.value = false;
    if (value > 0 && timerEnabled.value) {
      setTimeout(() => {
        dashArray.value--;
      }, time.value);
      return;
    }

    if (value <= 0) {
      animate.value = true;
      reset();
      startTextAnimation();
    }
  });

  return {
    dashArray,
    play,
    pause,
    animate,
  };
}
