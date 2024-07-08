<template>
  <section class="s1 user-n w-full relative">
    <div class="bg w-full relative">
      <img class="block md:hidden w-full h-full relative" src="@/section/s1/bg_m.jpg" />
      <img class="hidden md:block w-full relative" src="@/section/s1/bg.jpg" />
      <img class="bg_ani absolute" src="@/section/s1/bg_ani.svg" />
    </div>
    <img class="logo absolute" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-delay="0" />
    <img class="title absolute" src="@/section/s1/title.svg" data-aos="fade-up" data-aos-delay="200" />
    <!-- <img class="map2 absolute top-0 left-0 w-full pointer-events-none" src="@/section/s2/map2.svg" /> -->
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
    height: size-m(667);
      overflow: hidden;
    @media screen and (min-width:768px) {
      height: calc(100vh + #{size(110)});
      max-height:size(1156);
      min-height:size(1010);
    }
  .bg {
    height: size-m(667);position: absolute;left: 0;bottom: 0;z-index: 1;
    @media screen and (min-width:768px) {
      height: auto;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #0072EF 0.5%, #0072EF00 20.5%);z-index: 3;
    }

    .bg_ani {
      top: auto;
      left: size-m(-108);
      bottom: size-m(-16);
      width: size-m(1110);
      height:size-m(576);
      max-width: none;
      @media screen and (min-width:768px) {
        top: auto;
        left: 0;
        bottom: size(-18);
        width:100%;
        height:size(996);
      }
    }
  }

  .logo {
    top: size-m(107);
    left: size-m(74.42);
    width: size-m(226.13);z-index: 2;
    @media screen and (min-width:768px) {
      top: calc(70% + #{size(250 - 1156 * .7)});
      left: size(337);
      width: size(562.32);
    }
  }

  .title {
    top: size-m(337);
    left: size-m(52);
    width: size-m(270);z-index: 2;
    @media screen and (min-width:768px) {
      top: calc(70% + #{size(425 - 1156 * .7)});
      left: size(1081.99);
      width: size(501.56);
    }
  }
}
</style>

<script setup>
// import { inject } from 'vue';
// const smoothScroll = inject('smoothScroll')
// const scrollTo = (el) => {
//   smoothScroll({
//     scrollTo: document.querySelector(el)
//   })
// }
</script>
