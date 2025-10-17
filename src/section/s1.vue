<template>
  <section class="s1 user-n w-full relative">
    <swiper
      :effect="'fade'"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide>
        <img class="logo1 absolute" src="@/section/s1/logo1.png" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="0" />
      </swiper-slide>
      <swiper-slide>
        <img class="logo2 absolute" src="@/section/s1/logo2.png" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

// .ball,
// .ball:after {
//   background-size: 100% 100%;
//   background-repeat: no-repeat;
//   border-radius: 50%;
//   z-index: -1;
// }

// .ball:after {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// @keyframes ball {
//   to {
//     transform: translate(0);
//   }
// }

.s1 {
  height: size-m(800);
  background-image: url(@/section/s1/bg.png);
  background-size: auto 100%;
  background-position: 32.5% 0;
  background-repeat: no-repeat;
  @media screen and (min-width:768px) {
    height: size(900);
    background-size: cover;
    background-position: 50% 50%;
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      img {
        opacity: 0;
      }

      &.swiper-slide-active {
        img {
          opacity: 1;
        }
      }
    }
  }

  .logo1 {
    top: size-m(320);
    left: size-m(38);
    width: size-m(300);
    @media screen and (min-width:768px) {
      top: size(360);
      left: size(657);
      width: size(606);
    }
  }

  .logo2 {
    top: size-m(277);
    left: size-m(55);
    width: size-m(266);
    @media screen and (min-width:768px) {
      top: size(314);
      left: size(754);
      width: size(412);
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

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

const modules = [Autoplay, EffectFade];
</script>
