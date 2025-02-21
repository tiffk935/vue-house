<template>
  <div class="order-badge">集賢路首排｜正臨家樂福｜２-３房</div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.order-badge {
  @apply absolute top-0 left-0 w-full text-black flex items-center justify-center;
  height: size(75);
  background: linear-gradient(
    90deg,
    rgba(255, 230, 121, 0) 0%,
    #ffe679 21%,
    #e4bc53 30%,
    #d6a640 44%,
    #c28724 67%,
    #bb7c1a 80%,
    rgba(187, 124, 26, 0) 100%
  );
  font-size: size(32);
  font-weight: 500;
  letter-spacing: size(1.92);
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .order-badge {
    @apply absolute top-0 left-0 w-full text-black flex items-center justify-center;
    height: sizem(45);
    background: linear-gradient(
      90deg,
      rgba(255, 230, 121, 0) 0%,
      #ffe679 21%,
      #e4bc53 30%,
      #d6a640 44%,
      #c28724 67%,
      #bb7c1a 80%,
      rgba(187, 124, 26, 0) 100%
    );
    font-size: sizem(16);
    font-weight: 500;
    letter-spacing: sizem(0.96);
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())
</script>
