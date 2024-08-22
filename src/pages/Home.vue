<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="佳鋐大境" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home overflow-hidden font-['Noto_Sans_TC'] bg-[#EC6300]">
    <h1 style="display:none;">佳鋐大境</h1>
    <S1 />
    <S2 /> 
    <S3 />
    <S4 />
   <!--   <S5 />
    <S6 />
    <div class="s7s8">
      <S7 />
      <S8 />
    </div>
    <S22 />
  --> 
    <S1 />
   <!-- <S9 /> --> 
    <Order />
  </div>
</template>

<style lang="scss">
  @import "@/assets/style/function.scss";
  .user-n{
    user-select:none;
  }
  .s7s8 {
    @media (min-width: 768px) {
      background-image: url(@/section/s7/bg.webp);
      background-size: cover;
    }
  }
</style>

<script setup>
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
// mport S22 from "@/section/s22.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
// import S5 from "@/section/s5.vue"
//import S6 from "@/section/s6.vue"
//import S7 from "@/section/s7.vue"
//import S8 from "@/section/s8.vue"
// import S9 from "@/section/s9.vue"
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
    AOS.init();
  };
})
</script>
