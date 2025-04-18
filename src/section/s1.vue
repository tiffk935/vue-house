<template>
  <section class="s1 user-n w-full relative">
    <img class="logo absolute" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <img class="main absolute" src="@/section/s1/main.png" data-aos="fade" data-aos-duration="1000" data-aos-delay="100" />
    <img class="t2 absolute" src="@/section/s1/t2.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
    <img class="title absolute" src="@/section/s1/title.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
    <img class="en absolute hidden md:block" src="@/section/s1/en.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  background: #9F223D;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .logo {
    top: size-m(59);
    left: size-m(59);
    width: size-m(257.45);
    @media screen and (min-width:768px) {
      top: size(438);
      left: size(166);
      width: size(454.17);
    }
  }

  .main {
    top: size-m(203);
    left: size-m(121);
    width: size-m(130);
    @media screen and (min-width:768px) {
      top: size(242);
      left: size(791);
      width: size(388);
    }
  }

  .t2 {
    top: size-m(218);
    left: size-m(73);
    width: size-m(228.58);
    @media screen and (min-width:768px) {
      top: size(621);
      left: size(759);
      width: size(401.97);
    }
  }

  .title {
    top: size-m(471);
    left: size-m(45);
    width: size-m(287);
    @media screen and (min-width:768px) {
      top: size(435);
      left: size(1253);
      width: size(529.1);
    }
  }

  .en {
    @media screen and (min-width:768px) {
      top: size(706);
      left: size(1370);
      width: size(283.88);
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
