<template>
  <section class="s1 text-white relative">
    <img class="leaf-1" src="@/section/s1/leaf-1.webp">
    <img class="leaf-2" src="@/section/s1/leaf-2.webp">
    <img class="green-bg" src="@/section/s1/green-bg.webp">
<div class="H1" data-aos="fade"
    data-aos-delay="500"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true"
    >
    <img class="Coming-soon"
    v-if="isMobile"
    src="@/section/s1/Coming soon-m.svg">
     <img class="Coming-soon"
    v-else
    src="@/section/s1/Coming soon.svg">

    <img class="Line"
    v-if="isMobile"
    src="@/section/s1/Line-m.svg">
    <img class="Line"
    v-else
    src="@/section/s1/Line.svg">

    <img class="Local"
    v-if="isMobile"
    src="@/section/s1/Local-m.svg">
    <img class="Local"
    v-else
    src="@/section/s1/Local.svg">

    <img class="LOGO"
    v-if="isMobile"
    src="@/section/s1/LOGO-m.svg">
    <img class="LOGO"
    v-else
    src="@/section/s1/LOGO.svg">
 </div> 
    
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: size-m(736);
  font-weight: 500;
  @media screen and (min-width:768px) {
    height: size(1080);
  }
  
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
    top: -800px;
    left: calc(50% - 420px);
    mix-blend-mode:multiply;
    z-index: 2;

    animation: leafFtop 8s ease-in-out infinite;
    transform-origin: top;
  }


.H1 {
    position: relative;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 12px;
    z-index: 3;
  }

  .Coming-soon {
    position: relative;
    width: clamp(320px, 60vw, 920px);
    height: 180px;
    object-fit: Contain;
    margin: clamp(0px, 12vw, 240px) auto 0 auto;
    z-index: 3;
  }

  .Line {
    position: relative;
    width: clamp(320px, 60vw, 920px);
    height: 64px;
    object-fit: contain;
    margin: clamp(0px, 80vw, 24px) auto clamp(0px, 80vw, 24px) auto;
    z-index: 3;
  }

  .Local {
    position: relative;
    width: clamp(320px, 60vw, 920px);
    height: 96px;
    object-fit: contain;
    margin: clamp(0px, 80vw, 24px) auto clamp(0px, 80vw, 24px) auto;
    z-index: 3;
  }

  .LOGO {
    position: relative;
    width: clamp(320px, 60vw, 920px);
    height: 128px;
    object-fit: contain;
    margin: clamp(0px, 40vw, 48px) auto clamp(0px, 40vw, 48px) auto;
    z-index: 3;
  }


  .green-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
    top: -240px;
    left: 0;
    z-index: 1;
  }
  
  
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

<script setup>
import { onMounted, ref, computed, getCurrentInstance } from 'vue';

const viewbox = ref();
const viewImg = ref();
const swiped = ref(false);
const offsetRatio = 1.92; 

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

onMounted(() => {
  viewImg.value.addEventListener('load', () => {
    if (isMobile.value) {
      let scroll = new BScroll(viewbox.value, {
        probeType: 2,
        scrollX: true,
        scrollY: true,
        disableTouch: false,
        disableMouse: false,
        bindToWrapper: true,
        eventPassthrough: "vertical",
        bounce: false,
      });

      scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);
      setTimeout(() => {
        scroll.on("scroll", () => {
          swiped.value = true;
        });
      }, 1000);
    }
  });
});
</script>