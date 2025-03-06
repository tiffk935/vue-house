<template>
  <section class="s1 user-n w-full relative">
    <img class="en block md:hidden" src="@/section/s1/en-m.svg" data-aos="fade" data-aos-duration="1000" data-aos-delay="500" />
    <img class="en hidden md:block" src="@/section/s1/en.svg" data-aos="fade" data-aos-duration="1000" data-aos-delay="500" />
    <img class="en2 block" src="@/section/s1/en2.svg" data-aos="fade" data-aos-duration="1000" data-aos-delay="500" />
    <img class="title block md:hidden" src="@/section/s1/title-m.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" />
    <img class="title hidden md:block" src="@/section/s1/title.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" />
    <img class="logo block" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
    <img class="t2 block md:hidden" src="@/section/s1/t2-m.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
    <img class="t2 hidden md:block" src="@/section/s1/t2.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: size-m(667);
  background: #C68865;
  background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  padding: size-m(13) 0 0 0;
  @media screen and (min-width:768px) {
    height: size(1080);
    background-image: url(@/section/s1/bg.jpg);
    padding: size(13) 0 0 0;
  }

  .en {
    width: size-m(353);
    margin: 0 auto size-m(20) auto;
    mix-blend-mode: multiply;
    @media screen and (min-width:768px) {
      width: 98%;
      margin: 0 auto size(37) auto;
    }
  }

  .en2 {
    width: size-m(301);
    margin: 0 auto size-m(69) auto;
    @media screen and (min-width:768px) {
      width: size(850);
      margin: 0 auto size(121) auto;
    }
  }

  .title {
    width: size-m(233);
    margin: 0 auto size-m(106) auto;
    @media screen and (min-width:768px) {
      width: size(848.61);
      margin: 0 auto size(321) auto;
    }
  }

  .logo {
    width: size-m(101.88);
    margin: 0 auto size-m(46) auto;
    @media screen and (min-width:768px) {
      width: size(226.19);
      margin: 0 auto size(100) auto;
    }
  }

  .t2 {
    width: size-m(101.06);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: size(842.36);
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
