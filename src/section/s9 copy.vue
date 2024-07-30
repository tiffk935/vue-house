<template>
  <section class="s9 user-n w-full relative text-white">
    <img class="style absolute w-full top-0 left-0 md:hidden" src="@/section/s9/style-m.svg" />
    <img class="style absolute hidden md:block" src="@/section/s9/style.svg" />
    <img class="logo absolute" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <div class="txt absolute" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">沙鹿車站商圈</div>
    <img class="bag absolute" src="@/section/s1/bag.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" />
    <img class="label absolute hidden md:block" src="@/section/s9/label.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  height: size-m(627);
  z-index: 1;
  @media (min-width: 768px) {
    height: size(900);
  }

  .style {
    @media (min-width: 768px) {
      top: size(219);
      left: size(322);
      width: size(1275);
    }
  }
  
  .logo {
    top: size-m(96);
    left: size-m(43);
    width: size-m(289);
    @media (min-width: 768px) {
      top: size(234);
      left: size(662);
      width: size(597);
    }
  }

  .txt {
    width: 100%;
    top: size-m(232);
    left: 0;
    text-align: center;
    font-size: size-m(32);
    font-weight: 700;
    @media (min-width: 768px) {
      top: size(526);
      font-size: size(64.88);
    }
  }

  .bag {
    top: size-m(369);
    left: size-m(147);
    width: size-m(186.03);
    @media (min-width: 768px) {
      top: size(463);
      left: size(385);
      width: size(224.54);
    }
  }

  .label {
    @media (min-width: 768px) {
      top: size(642);
      left: size(793);
      width: size(338.34);
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
