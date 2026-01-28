<template>
  <section class="s1 user-n w-full relative z-[1]">
    <!-- <img src="./s1/mo.jpg" class="t0">  -->
    <img class="lion absolute" src="./s1/lion.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
    <img class="logo absolute" src="./s1/logo.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <img class="text absolute block md:hidden" src="./s1/t1m.svg" data-aos="fade-up" data-aos-duration="1000"
      data-aos-offset="-600" />
    <img class="text absolute hidden md:block" src="./s1/t1.svg" data-aos="fade-up" data-aos-duration="1000"
      data-aos-offset="-600" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.ball,
.ball:after {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  z-index: -1;
}

.ball:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@keyframes ball {
  to {
    transform: translate(0);
  }
}

.s1 {
  height: calc(100dvh - 63px);
  min-height: size-m(469);
  max-height: size-m(750);
  background: url("./s1/bgm.jpg");
  background-size: cover;
  overflow: hidden;

  @media screen and (min-width:768px) {
    background-image: url("./s1/bgm.jpg");
    background-position: 50% 0;
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
    margin-bottom: size(120);
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
    top: size-m(270);
    top:calc(50% + #{size-m(270 - 469 * .5)});
    object-fit: cover;
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (max-width:767px) {
      height: 47%;
      width: auto;
      min-height: size-m(279);
    }

    @media screen and (min-width:768px) {
      top: 0;
      left: 0;
      right: auto;
      height: auto;
      object-fit: cover;
      width: size(1068);

    }
  }

  .logo {
    //  left: size-m(31);
    width: auto;
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (max-width:767px) {
      bottom: size-m(210);
      bottom:calc(50% + #{size-m(210 - 469 * .5)});
      height: 9%;
      min-height: size-m(49);
    }

    @media screen and (min-width:768px) {
      top: size(290);
      top:calc(50% + #{size(290 - 1080 * .5)});
      right: size(196);
      left: auto;
      width: size(730);
    }
  }

  .text {
    left: 0;
    right: 0;
    margin: auto;

    @media screen and (max-width:767px) {
      bottom: size-m(191);
      bottom:calc(50% + #{size-m(191 - 469 * .5)});
      height: 40%;
      min-height: size-m(224);
    }

    @media screen and (min-width:768px) {
      top: size(625);
      left: auto;
      top:calc(50% + #{size(625 - 1080 * .5)});
      right: size(196);
      width: size(730);
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
