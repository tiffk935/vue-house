<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div
    v-bind:class="{
      'opacity-0': !isLoading,
      'pointer-events-none': !isLoading,
    }"
    class="transition-all duration-500flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]"
  >
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="" />
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div
    class="home bg-[#fff] overflow-hidden font-['Noto_Sans_TC'] pb-[64px] md:pb-0"
  >
    <S1 />
    <S2 />
    <T1 />
    <T2 />
    <S3 />
    <T3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <T4 />
    <T5 />
    <T6 />
    <T7 />
    <Order />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/custom-aos.css";
@import "@/assets/style/function.scss";

img {
  display: inline;
  max-width: unset;
  height: unset;
  /* margin: 0 auto; */
}

.home {
  background: #fff;
}

@media screen and (max-width: 768px) {
  .mo-arrow {
    @apply absolute w-screen left-0 z-10;
    @apply flex justify-between items-center;
    @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none;
    padding: 0 10px;
    .next {
      @apply -scale-x-100;
    }
    img {
      @apply pointer-events-auto;
      width: sizem(15);
    }
  }
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import T1 from "@/section/t1.vue"
import T2 from "@/section/t2.vue"
import S3 from "@/section/s3.vue"
import T3 from "@/section/t3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import T4 from "@/section/t4.vue"
import T5 from "@/section/t5.vue"
import T6 from "@/section/t6.vue"
import T7 from "@/section/t7.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"
import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: true
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1000,
    })
  };
})
</script>