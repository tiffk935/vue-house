<template>
  <section class="s1 user-n w-full relative">
    <img class="logo absolute" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <img class="text absolute" src="@/section/s1/text.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  height: size-m(800);
  @media screen and (min-width:768px) {
    height: size(1200);
  }

  .logo {
    top: size-m(228);
    left: size-m(31);
    width: size-m(312);
    @media screen and (min-width:768px) {
      top: size(300);
      left: size(688);
      width: size(544);
    }
  }

  .text {
    top: size-m(513);
    left: size-m(38);
    width: size-m(299);
    @media screen and (min-width:768px) {
      top: size(844);
      left: size(774);
      width: size(370);
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
