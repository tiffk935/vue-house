<template>
  <section class="s1 user-n w-full relative z-[1]">
    <!--  <img src="./s1/1.jpg" class="t0"> -->
    <img class="lion absolute" src="./s1/lion2.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
    <img class="logo absolute" src="./s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <img class="t1 absolute" src="./s1/t1.svg" data-aos="fade-up" data-aos-duration="1000"
      data-aos-offset="-600" /> 
       <img class="t2 absolute" src="./s1/t2.svg" data-aos="fade-up" data-aos-duration="1000"
      data-aos-offset="-600" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  height: calc(100dvh - 63px);
  min-height: size-m(469);
  max-height: size-m(750);
 // background: url("./s1/bg.png") center center;
 // background-size: cover;
  overflow: hidden;

  @media screen and (min-width:768px) {
   // background-image: url("./s1/bgm.jpg");
   // background-position: 50% 0;
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
   // margin-bottom: size(120);
    //  height: size(1200);
  }

  .t0 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .3;
  }

  .lion {
    object-fit: cover;
    margin: auto;

    @media screen and (max-width:767px) {
    top: size-m(270);
    top:calc(50% + #{size-m(270 - 469 * .5)});
    left: 0;
    right: 0;
      height: 47%;
      width: auto;
      min-height: size-m(279);
    }

    @media screen and (min-width:768px) {
      bottom: 0;
    bottom:calc(50% + #{size(0 - 1080 * .5)});
      left:  47%;
     // right: auto;
      height: auto;
      object-fit: cover;
      width: size(1176);

    }
  }

  .logo {
    //  left: size-m(31);
    width: auto;
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (max-width:767px) {
      top: size-m(114);
      top:calc(50% + #{size-m(114 - 604 * .5)});
      width: size-m(262);
    }

    @media screen and (min-width:768px) {
      top: size(295);
      top:calc(50% + #{size(295 - 1080 * .5)});
      right: auto;
      left: size(295);
      width: size(645);
    }
  }

  .t1 {
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (max-width:767px) {
      top: size-m(240);
      top:calc(50% + #{size-m(240 - 604 * .5)});
      width: size-m(207);
    }

    @media screen and (min-width:768px) {
      top: size(615);
      top:calc(50% + #{size(615 - 1080 * .5)});
      left:size(367);
      right: auto;
      width: size(504);
    }
  }

  .t2 {
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (max-width:767px) {
      top: size-m(554);
      top:calc(100% + #{size-m(554 - 604 * 1)});
      width: size-m(207);
      filter:drop-shadow(0 0  size-m(5) rgba(0,0,0,1));
    }

    @media screen and (min-width:768px) {
      top: size(820);
      top:calc(50% + #{size(820 - 1080 * .5)});
      left:size(385);
      right: auto;
      width: size(470);
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
