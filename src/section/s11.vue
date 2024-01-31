<template>
  <section class="s11 w-full relative text-[#173868] bg-white">
    <img class="style absolute" src="@/section/s11/style.svg" />
    <div class="txt text-center md:text-left">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">2044坪 夢幻大境</div>
        <div class="subtitle">私院莊園 雍容領地</div>
        <div class="content md:hidden">
          觸及你所未想，以夢想格局，圍塑千坪璀璨綠廊，四季栽培而出的流動景觀，和泳池、戶外座席、公設平台親暱互動，自然地讓人與自然留連忘返，營造一座碩大卻優雅的高隱私莊園。
        </div>
      </div>
    </div>
    <div class="content hidden md:block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      觸及你所未想，以夢想格局，圍塑千坪璀璨綠廊，四季栽培而出的流動景觀，和泳池、戶外座席、公設平台親暱互動，自然地讓人與自然留連忘返，營造一座碩大卻優雅的高隱私莊園。
    </div>
    <div class="slider">
      <swiper
        :loop="true"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="img1 relative">
            <img class="block" src="@/section/s11/1.jpg" />
            <div class="info absolute">公設3D合成示意圖</div>
          </div>
          <div class="img2 relative">
            <img class="block w-full" src="@/section/s11/2.jpg" />
            <div class="info absolute">公設3D合成示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img1 relative">
            <img class="block" src="@/section/s11/3.jpg" />
            <div class="info absolute">公設3D合成示意圖</div>
          </div>
          <div class="img2 relative">
            <img class="block w-full" src="@/section/s11/4.jpg" />
            <div class="info absolute">公設3D合成示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  overflow: hidden;
  font-size: size-m(13);
  font-weight: 500;
  line-height: size-m(20);
  @media (min-width: 768px) {
    text-align: justify;
    font-size: size(19);
    line-height: size(33);
    height: size(1080);
  }

  .style {
    top: size-m(-192.36);
    left: size-m(20);
    width: size-m(335);
    @media (min-width: 768px) {
      top: size(-311);
      left: size(1309);
      width: size(633.2);
    }
  }

  .txt {
    padding: size-m(50) size-m(33);
    z-index: 1;
    @media (min-width: 768px) {
      position: absolute;
      top: size(256);
      left: size(1188 - 25);
      width: size(540);
      padding: 0;
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(6.9);
      margin-bottom: size-m(5);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(48);
        letter-spacing: size(15.84);
        margin-bottom: size(3);
        padding-bottom: 0;
      }
    }

    .subtitle {
      font-family: "Noto Serif TC";
      font-size: size-m(15);
      font-weight: 700;
      letter-spacing: size-m(4.95);
      margin-bottom: size-m(17);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
        margin-bottom: size(0);
      }
    }
  }

  .content {
    @media (min-width: 768px) {
      position: absolute;
      top: size(869);
      left: size(604);
      width: size(526);
      z-index: 1;
    }
  }

  .img1 {
    width: size-m(244);
    margin: 0 auto size-m(12);
    @media (min-width: 768px) {
      position: absolute;
      top: size(485);
      // left: size(1188);
      left: auto;
      right: 0;
      width: size(732);
      margin: 0;
    }
  }

  .img2 {
    @media (min-width: 768px) {
      position: absolute;
      top: size(133);
      left: size(0);
      width: size(1125);
    }
  }

  .info {
    bottom: size-m(4);
    right: size-m(4);
    color: #fff;
    font-size: size-m(12);
    line-height: normal;
    @media (min-width: 768px) {
      bottom: size(10);
      right: size(10);
      font-size: size(12);
    }
  }

  .slider {
    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .swiper {
        height: 100%;
        z-index: 0;
      }
    }

    .swiper-button-next, .swiper-button-prev {
      width: size-m(40);
      height: size-m(40);
      color: #ABABAB;
      justify-content: flex-start;
      top: size-m(70);
      margin: 0;
      text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.60);
      @media (min-width: 768px) {
        width: size(40);
        height: size(40);
        top: size(428);
        left: size(1188 - 25);
        text-shadow: none;
      }

      &:after {
        font-size: 7vw;
        @media (min-width: 768px) {
          font-size: 1.4vw;
        }
      }
    }

    .swiper-button-next {
      justify-content: flex-end;
      @media (min-width: 768px) {
        right: auto;
        left: size(1264 - 25);
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";
const modules = ref([Autoplay, Navigation]);
</script>