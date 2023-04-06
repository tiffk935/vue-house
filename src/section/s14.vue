<template>
  <section class="s14 relative">
    <img class="bg absolute t-0 l-0 w-full h-full object-cover" src="@/section/s14/bg.jpg" />
    <img class="text absolute md:hidden" data-aos="fade-up" src="@/section/s14/text-m.svg" />
    <img class="text absolute hidden md:block" data-aos="fade-up" src="@/section/s14/text.svg" />
    <img class="style1 absolute" data-aos="fade-right" src="@/section/s14/style1.png" />
    <img class="style2 absolute" src="@/section/s14/style2.png" />
    <img class="style3 absolute" src="@/section/s14/style3.png" />
    <img class="style4 absolute" src="@/section/s14/style4.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes skew {
  to {
    transform: skewX(0deg);
  }
}

.s14 {
  width: 100%;
  height: size-m(518);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .text {
    left: size-m(25);
    top: size-m(86);
    width: size-m(325);
    @media screen and (min-width:768px) {
      left: size(448);
      top: size(402);
      width: size(1024.93);
    }
  }

  .style1 {
    left: size-m(39);
    top: size-m(281);
    width: size-m(202);
    @media screen and (min-width:768px) {
      width: size(319);
      left: size(197);
      top: size(637);
    }
  }

  .style2 {
    left: 0;
    bottom: 0;
    width: size-m(125);
    transform: skewX(5deg);
    transform-origin: 0 100%;
    animation: skew 6s linear infinite alternate;
    @media screen and (min-width:768px) {
      width: size(340);
    }
  }

  .style3 {
    right: 0;
    bottom: size-m(42);
    width: size-m(94);
    @media screen and (min-width:768px) {
      bottom: size(152);
      width: size(292);
    }
  }

  .style4 {
    right: -1vw;
    bottom: -5vw;
    width: size-m(213);
    transform: skewX(5deg);
    transform-origin: 0 100%;
    animation: skew 6s linear infinite alternate;
    @media screen and (min-width:768px) {
      right: -1vw;
      bottom: size(0);
      width: size(573);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay } from "swiper";
const modules = ref([Navigation, Autoplay]);
</script>