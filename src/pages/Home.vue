<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="戀JIA" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC']">

        <img class="leaf-1" src="@/section/s1/leaf-1.webp">
    <img class="leaf-2" src="@/section/s1/leaf-2.webp">

  <div class="page-bg">

    <img
      v-for="i in 20"
      :key="'pc-'+i"
      class="bg-piece bg-pc"
      :class="{ flip:i % 2 === 0 }"
      src="@/section/s1/bg-4.webp"
      alt=""
    >

    <img
      v-for="i in 20"
      :key="'mobile-'+i"
      class="bg-piece bg-mobile"
      :class="{ flip:i % 2 === 0 }"
      src="@/section/s1/bg-2m.webp"
      alt=""
    >

  </div>


  <S1 />
  <S2 />
  <Order />

</div>
</template>

<style lang="scss">

.leaf-1 {
    position: absolute;
    width: 1476px;
    height: 1272px;
    top: -180px;
    left: calc(0% - 880px);
    mix-blend-mode:multiply;
    filter: brightness(0.9);
    z-index: 2;

    animation: leafFloat 8s ease-in-out infinite;
    transform-origin: center;
  }

  .leaf-2 {
    position: absolute;
    width: 720px;
    height: 844px;
    aspect-ratio: 46/55;
    top: -560px;
    left: calc(50% - 420px);
    mix-blend-mode:multiply;
    z-index: 2;

    animation: leafFtop 8s ease-in-out infinite;
    transform-origin: top;
  }

.home{
  position:relative;
}


.page-bg{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;

  display:flex;
  flex-direction:column;

  z-index:0;

  overflow:hidden;
}


.bg-piece{
  width:100%;
  height:auto;
  display:block;
  flex-shrink:0;

  margin-top:-3px;
}


.flip{
  transform:scaleY(-1);
}


.bg-mobile{
  display:none;
}



@media(max-width:767px){

  .bg-pc{
    display:none;
  }


  .bg-mobile{
    display:block;
  }

}


.s1,
.s2,
.order{
  position:relative;
  z-index:1;
}


@keyframes leafFloat {
  0% {
    transform: translateY(0) rotate(-2deg);
  }
  25% {
    transform: translateY(-4px) rotate(2deg);
  }
  50% {
    transform: translateY(-12px) rotate(-1deg);
  }
  75% {
    transform: translateY(-6px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(-2deg);
  }
}

@keyframes leafFtop {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  35% {
    transform: translateY(-2px) rotate(1deg);
  }
  50% {
    transform: translateY(-6px) rotate(0deg);
  }
  80% {
    transform: translateY(-2px) rotate(1deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}



</style>

* {
  outline:1px solid red;
}

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
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
