<template>
  <section class="s1 user-n w-full relative">
    <div class="bg w-full relative">
      <img class="block md:hidden w-full h-full relative" src="@/section/s1/bg_m.png" />
      <img class="hidden md:block w-full relative" src="@/section/s1/bg.png" />
      <img class="bg_ani absolute" src="@/section/s1/bg_ani.svg" />
    </div>
    <img class="logo absolute" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <img class="title absolute" src="@/section/s1/title.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
    <!-- <img class="map2 absolute top-0 left-0 w-full pointer-events-none" src="@/section/s2/map2.svg" /> -->
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  .bg {
    height: size-m(667);
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
      background: linear-gradient(0deg, #0072EF 0.5%, #FFF 20.5%);
    }

    .bg_ani {
      top: size-m(113);
      left: size-m(-97);
      width: size-m(1028);
      max-width: none;
      @media screen and (min-width:768px) {
        top: size(132);
        left: size(0);
        width: size(1946);
      }
    }
  }

  .logo {
    top: size-m(107);
    left: size-m(74.42);
    width: size-m(226.13);
    @media screen and (min-width:768px) {
      top: size(244);
      left: size(337);
      width: size(562.32);
    }
  }

  .title {
    top: size-m(337);
    left: size-m(52);
    width: size-m(270);
    @media screen and (min-width:768px) {
      top: size(425.98);
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
