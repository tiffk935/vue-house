<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="達麗河蘊" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC']">
    <h1 style="display:none;">達麗河蘊</h1>
    <S1 />
    <S10 />
    <S2 />
    <!-- S9 /-->
    <S3 />
    <S4 />
    <div class="relative">
      <img class="s5s6bg w-full absolute left-0 md:hidden" src="@/section/s5/bg-m.webp" />
      <img class="s5s6bg w-full absolute left-0 hidden md:block" src="@/section/s5/bg.webp" />
      <S5 />
      <!-- S6 /-->
    </div>
    <!--S7 /-->
    <div class="relative">
      <div class="s8bg"></div>
      <S8 />
      <Order />
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/style/function.scss";
  .s5s6bg {
    position: absolute;
    top: size-m(190.73);
    @media screen and (min-width:768px) {
      top: size(367);
    }
  }
  .s8bg {
    position: absolute;
    //top: size-m(146);
    top: size-m(0);
    left: 0;    
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(210,232,244,1) 28%, rgba(156,205,232,1) 54%, rgba(93,141,187,1) 100%);
    @media screen and (min-width:768px) {
      //top: size(-148);
      top: size(0);
      height: calc(100% + size(148));
    }
  }
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S10 from "@/section/s10.vue"
import S2 from "@/section/s2.vue"
//import S9 from "@/section/s9.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
//import S6 from "@/section/s6.vue"
//import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
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
    setTimeout(() => {
      document.querySelector('.s1').classList.add('animating');
    }, 1000);
  };
})
</script>
