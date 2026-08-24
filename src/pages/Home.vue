<template>


<svg
  class="water-filter"
  width="0"
  height="0"
  xmlns="http://www.w3.org/2000/svg"
>

  <defs>

    <!-- X 方向位移來源：左右緩慢飄移的大範圍漸層 -->
    <linearGradient id="wave-x-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#404040" />
      <stop offset="50%"  stop-color="#ffffff" />
      <stop offset="100%" stop-color="#404040" />

      <animate
        attributeName="x1"
        values="-60%; 60%; -60%"
        dur="70s"
        calcMode="spline"
        keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x2"
        values="40%; 160%; 40%"
        dur="70s"
        calcMode="spline"
        keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
        repeatCount="indefinite"
      />
    </linearGradient>

    <!-- Y 方向位移來源：上下緩慢飄移的大範圍漸層 -->
    <linearGradient id="wave-y-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stop-color="#404040" />
      <stop offset="50%"  stop-color="#ffffff" />
      <stop offset="100%" stop-color="#404040" />

      <animate
        attributeName="y1"
        values="-60%; 60%; -60%"
        dur="90s"
        calcMode="spline"
        keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="40%; 160%; 40%"
        dur="90s"
        calcMode="spline"
        keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
        repeatCount="indefinite"
      />
    </linearGradient>

    <rect id="wave-x-rect" width="100%" height="100%" fill="url(#wave-x-grad)" />
    <rect id="wave-y-rect" width="100%" height="100%" fill="url(#wave-y-grad)" />

  </defs>

  <filter
  id="water-distortion"
  x="-20%"
  y="-20%"
  width="140%"
  height="140%"
>

  <feTurbulence
    type="fractalNoise"
    baseFrequency="0.0015 0.003"
    numOctaves="1"
    seed="3"
    result="noise"
  >

    <animate
      attributeName="baseFrequency"
      dur="40s"
      calcMode="spline"
      keyTimes="0; 0.25; 0.5; 0.75; 1"
keySplines="
  0.42 0 0.58 1;
  0.42 0 0.58 1;
  0.42 0 0.58 1;
  0.42 0 0.58 1
"
      values="
        0.0008 0.0004;
        0.0028 0.0012;
        0.0010 0.0005;
        0.0032 0.0014;
        0.0008 0.0004;
      "
      repeatCount="indefinite"
    />

  </feTurbulence>

  <feGaussianBlur
  in="noise"
  stdDeviation="8"
  result="noise-smooth"
/>

  <feDisplacementMap
    in="SourceGraphic"
    in2="noise"
    scale="120"
    xChannelSelector="R"
    yChannelSelector="G"
  />

</filter>
</svg>


  <div ref="gtmNoScript">

    <!-- loading -->
    <div
      v-bind:class="{
        'opacity-0': !isLoading,
        'pointer-events-none': !isLoading
      }"
      class="transition-all duration-500 flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]"
    >
      <img
        class="w-32"
        src="@/assets/loading_w.gif"
        alt="昕馳"
      >
    </div>

    <!-- loading end -->

    <Nav v-if="config.showNav" />

    <div class="home bg-white overflow-hidden font-['Noto_Sans_TC']">

      <!-- 背景 -->
      <div class="page-bg-mask">
        <div class="page-bg">

          <img
            v-for="i in 20"
            :key="'pc-'+i"
            class="bg-piece bg-pc"
            :class="{ flip: i % 2 === 0 }"
            src="@/section/s1/bg-ok.webp"
            alt=""
          >

          <img
            v-for="i in 20"
            :key="'mobile-'+i"
            class="bg-piece bg-mobile"
            :class="{ flip: i % 2 === 0 }"
            src="@/section/s1/bg-ok.webp"
            alt=""
          >

        </div>
      </div>



      <S1 />
      <S2 />
      <Order />

    </div>

  </div>

</template>


<style lang="scss">

.home {
  position: relative;
}
/*::selection {
  background: rgba(255, 255, 255, 0.411);
  color: #1c36ad;
  
}*/

/* =========================
   背景
========================= */

.page-bg-mask {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; // 真正裁切的地方
}

.page-bg {
  position: absolute;

  top: -12%;
  left: -12%;
  width: 124%;
  height: 124%;

  display: flex;
  flex-direction: column;

  filter: url("#water-distortion"); // filter 放在有多餘內容的這層
}


/* =========================
   背景圖片
========================= */

.bg-piece {
  width: 100%;
  height: auto;

  display: block;

  flex-shrink: 0;

  margin-top: -3px;
}


.flip {
  transform: scaleY(-1);
}


.bg-mobile {
  display: none;
}


/* =========================
   內容
========================= */

.s1,
.s2,
.order {
  position: relative;
  z-index: 1;
}

.light-effect {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
}


/* =========================
   RWD
========================= */

@media(max-width: 767px) {

  .bg-pc {
    display: none;
  }

  .bg-mobile {
    display: block;
  }

}

@supports (-webkit-hyphens: none) and (not (-webkit-touch-callout: none)) {
  .page-bg {
    filter: none !important;
  }
}

@keyframes iosWater {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
  }

  50% {
    transform: scale(1.015) translate3d(0.5%, -0.3%, 0);
  }

  100% {
    transform: scale(1.01) translate3d(-0.5%, 0.4%, 0);
  }
}



</style>


<script setup>

import info from "@/info"

import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"

import { onMounted, ref } from "vue"

import AOS from "aos"


const isLoading = ref(true)

const gtmNoScript = ref('')

const config = ref({
  showNav: false
})




onMounted(() => {

  window.onload = function () {

    isLoading.value = false

    AOS.init()

  }

})

</script>