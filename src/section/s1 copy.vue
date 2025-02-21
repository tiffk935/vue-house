<template>
  <article class="s1">
    <div
      class="cloth2 absolute"
      data-aos="fade"
      data-aos-delay="200">
    <img
      src="@/section/s1/cloth.webp"
      alt="cloth"
    />
  </div>
  <div
      class="cloth1 absolute"
      data-aos="fade"
      data-aos-delay="0">
    <img
      src="@/section/s1/cloth.webp"
      alt="cloth"
    />
  </div>
    <img
      class="logo"
      src="@/section/s1/logo.svg"
      alt="logo"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <img class="t1" v-if="!isMobile" src="@/section/s1/t1.png" alt="" 
      data-aos="fade-up"
      data-aos-delay="200"/>
    <img class="t1" 
      data-aos="fade-up"
      data-aos-delay="200" v-else src="@/section/s1/t1m.png" alt="" />
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
  }
  .t1 {
    width: size(883);
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
    }
    .t1 {
      width: sizem(306.69);
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
