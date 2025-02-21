<template>
  <article class="s1">
    <img
      class="logo"
      src="@/section/s1/logo.svg"
      alt="logo"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <img class="t1" src="@/section/s1/t1new.png" alt="" 
      data-aos="fade-up"
      data-aos-delay="200"/>
    <div class="vid">
      <video autoplay loop muted playsinline v-if="!isMobile" src="https://h35.banner.tw/fongyi-huili/pc.mp4"></video>
      <video autoplay loop muted playsinline v-else src="https://h35.banner.tw/fongyi-huili/mobile.mp4"></video>

    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full relative;
  @apply bg-cover bg-bottom bg-no-repeat;
  @apply flex flex-col items-center justify-center;
  color: #653f28;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-image: linear-gradient(180deg, #83CCD3 38.5%, #7AC5CB 62.5%, #5FB3BD 76%, #4EA8B3 86%, #45A0B2 100%);
  
  // background-image: url("@/section/s1/bg.jpg");
 // padding-bottom: size(207);
  padding-top: size(105);
  gap: size(136.45);
  .cloth1{
    width: 106vw;
   // top: size(-770);
    top: calc(50% + #{size(-770 - 1080 * .5)});
    left: 13.4vw;
    transform: rotate(5deg)translateX(10%);
    img{width: 100%;}
  }
  .cloth2{
    width: 116.7vw;
    // top: size(-670);
    top: calc(50% + #{size(-670 - 1080 * .5)});
    left: -31.8vw;
    transform: rotate(-10deg)translateX(-10%);
  img{width: 100%;transform: rotate(51.1deg);opacity: 0.55;}
  }

  .logo {
    width: size(559);
    position: absolute;
    top:size(250);
  }
  .t1 {
    width: size(251);
    position: absolute;
    top: size(600);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    @apply bg-top;
    height: calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
   // background-image: url("@/section/s1/bgm.jpg");
 //   padding-bottom: sizem(127.5);
  padding-top: sizem(0);
  padding-bottom: sizem(20);
    gap: sizem(160);
  .cloth1{
        width: 237vw;
        top: -89.5vw;
        left: -30.6vw;
        img{transform: rotate(-1deg);height:sizem(700);}
  }
  .cloth2{
        width: 300vw;
        top: -91.5vw;
        left: -176.8vw;
  img{transform: rotate(55deg);opacity: 0.55;}
  }


    .logo {
      width: sizem(260);
      position: absolute;
      z-index: 99;
      top:sizem(200);

    }
    .t1 {
      width: sizem(150);
      z-index: 99;
      top:sizem(350);
    }

    .vid {
    width: 100%;
    height: 100%;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
