<template>
  <section class="s1 user-n w-full relative">
    <div class="bg"></div>
    <div class="relative">
      <img class="logo block" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
      <div class="name" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">洲子洋全能住宅王</div>
      <div class="sub-title">一站蘆洲，校園首排</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  height: size-m(640);
  padding-top: size-m(67);
  text-align: center;
  @media screen and (min-width:768px) {
    height: size(1081);
    padding-top: size(110);
  }

  .bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(181);
    background-size: auto 100%;
    background-position: size-m(-74.54) 0;
    background-image: url(@/section/s1/bg.png);
    @media screen and (min-width:768px) {
      height: size(390);
      background-position: 0 0;
    }
  }

  .logo {
    width: size-m(310);
    margin: 0 auto size-m(17) auto;
    @media screen and (min-width:768px) {
      width: size(596.3);
      margin: 0 auto size(17.7) auto;
    }
  }

  .name {
    font-size: size-m(28);
    font-weight: 700;
    line-height: 160%;
    letter-spacing: .41em;
    margin-bottom: size-m(2);
    @media screen and (min-width:768px) {
      font-size: size(78);
      margin-bottom: size(1);
    }
  }

  .sub-title {
    color: #FFF;
    font-family: "Noto Sans TC";
    font-size: size-m(12);
    font-style: normal;
    font-weight: 700;
    line-height: 160%;  
    letter-spacing: 1.64em;
    padding: size-m(5) 0;
    width: size-m(317);
    margin: 0 auto;
    background: #E50012;
    background: linear-gradient(90deg,rgba(229, 0, 18, 1) 0%, rgba(126, 21, 26, 1) 100%);
    @media screen and (min-width:768px) {
      font-size: size(28);
      padding: size(5) 0;
      width: size(849.35);
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
