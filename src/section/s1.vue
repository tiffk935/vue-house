<template>
  <section class="s1 user-n w-full relative">
    <!-- 
    <img src="./s1/pc.jpg" class="t0">  
    <img src="./s1/mo1.jpg" class="t0">-->
    <img src="./s1/tl.svg" class="tl">
    <img src="./s1/logo.svg" class="logo">
    <img src="./s1/t1.svg" class="t1">
    <div class="img">
      <img src="./s1/img1.svg" alt="1">
      <img src="./s1/img2.svg" alt="2">
      <img src="./s1/img3.svg" alt="3">
      <img src="./s1/img4.svg" alt="4">
      <!-- AppClock.vue -->
  <svg viewBox="0 0 120 120" class="time" >
    <!-- 時針 -->
     
  <polygon :transform="`rotate(${hourDeg}, 60, 60)`" points="60 26.9 54.4 40.4 58.5 38.2 58.5 60 61.7 60 61.7 38.2 65.6 40.4 60 26.9"/>

    <!-- 分針 -->
  <polygon :transform="`rotate(${minuteDeg}, 60, 60)`" points="60 17.9 53.9 35 58.4 32.2 58.4 60 61.8 60 61.8 32.2 66.1 35.1 60 17.9"/>
    <line x1="60" y1="60" x2="60" y2="22"
      
      class="hand minute" />
    <!-- 秒針 -->
    <line x1="60" y1="66" x2="60" y2="18"
      :transform="`rotate(${secondDeg}, 60, 60)`"
      class="hand second" stroke="#000" />
    <circle cx="60" cy="60" r="7" fill="#ef8029"   />
  </svg>

    </div>


  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.t0 {
  position: absolute;
  width: 100%;
  // top:50%;transform: translateY(-50%);
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  opacity: .1;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.s1 {
  height: calc(100vh - 63px);
  min-height: size-m(620);
  max-height: size-m(750);
  padding: 0;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff000;

  @media screen and (min-width:768px) {
    height: 100vh;
    max-height: size(1080);
    min-height: size(900);
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-top: size(110);
  }

  .tl {
    position: absolute;
    top: 0;
    left: 0;
    width: size-m(110);

    @media screen and (min-width:768px) {
      width: size(260);
    }
  }

  .logo {
    position: absolute;
    top: size-m(213);
    left: 0;right: 0;margin: auto;
    width: size-m(290);
    top: calc(90% + #{size-m(213-750 * 0.9)});

    @media screen and (min-width:768px) {
      top: size(295);
    top: calc(50% + #{size(295-1080 * 0.5)});
      left: size(316);right: auto;
      width: size(815);
    }
  }

  .t1 {
    position: absolute;
    top:size-m(345);
    left: 0;right: 0;margin: auto;
    width: size-m(250);
    top: calc(90% + #{size-m(345-750 * 0.9)});

    @media screen and (min-width:768px) {
    top: calc(50% + #{size(673-1080 * 0.5)});
      left: size(435);right: auto;
      width: size(580);
    }
  }

  .img {
    position: absolute;
    bottom: 0;
    right: size-m((515-375)*-.5);
    width: size-m(515);

    @media screen and (min-width:768px) {
      width: size(1370);
      right: size(-420);
    }

    img {
      position: absolute;
      width: 100%;

      &:nth-child(1) {
        top: 0;
        left: 0;
        transform: translateX(-3%);
        animation: an 5s ease-in-out infinite alternate;
      }

      &:nth-child(2) {
        position: relative;
      }

      &:nth-child(3) {
        bottom: -1.6%;
        right: 0;left: 0;margin: auto;
        width: 88%;
        transform: translateX(-200%);
        animation: an2 7s linear infinite;
        margin: 0;
      }

      &:nth-child(4) {
        bottom: 0;
        left: 0;
      }
    }

    .time{position: absolute;
    bottom: 34.7%;
    left: 38.35%;
    width: 6%;
    aspect-ratio: 1/1; 
    fill: #eb7ead;
    }
  }

  @keyframes an2 {
    to {
        transform: translateX(200%);
    }
  }



}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const now = ref(new Date())
let timer

onMounted(() => {
  timer = setInterval(() => { now.value = new Date() }, 1000)
})
onUnmounted(() => clearInterval(timer))

const secondDeg = computed(() => {
  const s = now.value.getSeconds()
  return s * 6
})
const minuteDeg = computed(() => {
  const m = now.value.getMinutes()
  const s = now.value.getSeconds()
  return m * 6 + s * 0.1   // 分針隨秒平滑移動
})
const hourDeg = computed(() => {
  const h = now.value.getHours() % 12
  const m = now.value.getMinutes()
  return h * 30 + m * 0.5  // 時針隨分平滑移動
})


</script>
