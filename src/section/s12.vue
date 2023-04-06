<template>
  <section class="s12 bg-[#2C4E37] text-white relative">
    <div class="slider absolute">
      <swiper
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img class="w-full block" src="@/section/s12/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s12/2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s12/3.jpg" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="t1 absolute" data-aos="fade-up">24000坪低密度<br class="hidden md:block"><span class="inline md:hidden">&nbsp;</span>大闊基地</div>
    <div class="t2 absolute" data-aos="fade-up">打造一座台南從來沒有的適居別墅莊園</div>
    <div class="t3 absolute" data-aos="fade-up">擁有多重安全防護社區，藏風納氣，風生水起，<br class="md:hidden">處處是風景！</div>
    <div class="style1" data-aos="fade-right">
      <img class="absolute" src="@/section/s12/style1.png" />
    </div>
    <div class="style2">
      <img class="absolute" src="@/section/s12/style2.png" />
    </div>
    <div class="style3">
      <img class="absolute" src="@/section/s12/style3.png" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  width: 100%;
  height: size-m(665);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .slider {
    width: 100%;
    left: 0;
    top: size-m(260);
    @media screen and (min-width:768px) {
      width: size(1303);
      left: size(573);
      top: size(70);
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(26);
      height: size-m(26);
      background-repeat: no-repeat;
      background-size: size-m(13.58) auto;
      opacity: 1;
      @media screen and (min-width:768px) {
        width: size(60);
        height: size(60);
        background-size: size(31) auto;
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: size-m(9);
      background-image: url(@/section/s8/arrow-prev.svg);
      background-position: left center;
      @media screen and (min-width:768px) {
        left: size(18);
      }
    }

    .swiper-button-next {
      right: size-m(9);
      background-image: url(@/section/s8/arrow-next.svg);
      background-position: right center;
      @media screen and (min-width:768px) {
        right: size(18);
      }
    }

    img {
      height: size-m(405);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }
  }

  .t1 {
    top: size-m(48);
    left: size-m(28);
    font-family: 'Noto Serif TC';
    font-weight: 500;
    font-size: size-m(24);
    line-height: size-m(34);
    text-align: center;
    letter-spacing: 0.08em;
    @media screen and (min-width:768px) {
      top: size(274);
      left: size(62);
      font-size: size(59);
      line-height: size(85);
    }
  }

  .t2 {
    top: size-m(94);
    left: size-m(60);
    font-family: 'Noto Serif TC';
    font-style: normal;
    font-weight: 500;
    font-size: size-m(15);
    line-height: size-m(25);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(475);
      left: size(66);
      font-size: size(25);
      line-height: size(55);
      letter-spacing: -0.03em;
    }
  }

  .t3 {
    top: size-m(122);
    left: size-m(25);
    width: size-m(325);
    font-weight: 500;
    font-size: size-m(13);
    line-height: size-m(25);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(535);
      left: size(66);
      width: size(435);
      font-size: size(25);
      line-height: size(55);
      letter-spacing: -0.03em;
      text-align: left;
    }
  }

  .style1 {
    img {
      left: size-m(-23);
      top: size-m(165);
      width: size-m(134);
      transform: matrix(-1, 0, 0, 1, 0, 0);
      @media screen and (min-width:768px) {
        left: size(150);
        top: size(757);
        width: size(369);
      }
    }
  }

  .style2 {
    img {
      left: size-m(-80);
      top: size-m(222);
      width: size-m(183);
      transform: matrix(-1, 0, 0, 1, 0, 0);
      @media screen and (min-width:768px) {
        left: size(-186);
        top: size(914);
        width: size(575);
      }
    }
  }

  .style3 {
    img {
      left: size-m(274.83);
      top: size-m(194.82);
      width: size-m(135.45);
      transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
      @media screen and (min-width:768px) {
        left: size(-94.45);
        top: size(-50.87);
        width: size(273.68);
        transform: matrix(0.87, -0.5, -0.5, -0.87, 0, 0);
      }
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