<template>
  <section class="s1 user-n w-full relative">
    <!-- <img src="./s1/mo.jpg" class="t0">  -->
    <div class="bg"></div>
      <img class="logo block" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-delay="0" alt="日進學 快樂王國3" />
      <img class="txt block" src="@/section/s1/txt.svg" data-aos="fade-up" data-aos-delay="200" alt="震撼讓利 全新完工 買3房 含裝潢+全室冷氣+車位" />
    <div class="relative">
      <!-- 
      <div class="name" data-aos="fade-up" data-aos-delay="200">洲子洋全能住宅王</div>
      <div class="sub-title" data-aos="fade-up" data-aos-delay="400">一站蘆洲，校園首排</div>
      -->
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

  .t0{position: absolute;width: 100%;top:0px;left: 0; pointer-events: none;z-index: 9;opacity: .7;}
.s1 {
  height: size-m(640);
  padding-top: size-m(67);
  text-align: center;
  @media screen and (min-width:768px) {
    height: 100vh;
    max-height: size(1080);
    min-height: size(1000);
    padding-top:0;
   display: flex;
   align-items:center;justify-content:center;
   // padding-top: size(110);
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
    position: absolute;
      top: size-m(60);
      left:0;right: 0;margin: auto;
    width: size-m(310);
    @media screen and (min-width:768px) {
      top: size(62);
      left: size(230);right: auto;
      width: size(700);
    }
  }
  .txt {
    position: absolute;
    width: size-m(205);
      top: size-m(390);
      left:0;right: 0;margin: auto;
    @media screen and (min-width:768px) {
      top: size(260);
      left: size(985);right: auto;
      width: size(600);
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
