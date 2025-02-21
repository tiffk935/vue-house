<template>
  <article class="order-intro">
    <img class="t1" src="@/section/resource/logo.svg" alt="" srcset="">
    <img class="t2" src="@/section/order_intro/t2.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.order-intro {
    @apply flex flex-col justify-center items-center;
    gap: size(96);
    margin: size(120) 0;
    .t1 {
        width: size(567);
    }
    .t2 {
        width: size(919);
    }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .order-intro {
    @apply flex flex-col justify-center items-center;
    gap: sizem(32);
    margin: sizem(120) 0;
    .t1 {
        width: sizem(191);
    }
    .t2 {
        width: sizem(310);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())
</script>
