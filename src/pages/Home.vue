<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="國王大道" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-[#393cdb] text-white overflow-hidden font-['Noto_Sans_TC']">
    <h1 style="display:none;">國王大道</h1>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <!-- <Order /> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.user-n{
  user-select: none;
}

@keyframes bg {
  to {
    transform: translate(0);
  }
}

.home:before {
  content: '';
  background: url(@/section/bg.webp) center;
  background-size: 100% auto;
  position: fixed;
  width: 240%;
  height: 240vw;
  left: -70%;
  top: calc(50% - 120vw);
  right: 0;
  bottom: 0;
  transform: translate(0) rotate(360deg);
  filter: blur(10px);
  animation: bg 40s linear infinite;
  @media screen and (min-width:768px) {
    width: 120%;
    height: 120vw;
    left: -10%;
    top: calc(50% - 60vw);
  }
}
</style>

<script setup>
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init();
  };
})
</script>
