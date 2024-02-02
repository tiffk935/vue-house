<template>
  <section class="s13 w-full relative text-[#173868] bg-white">
    <img class="style absolute" src="@/section/s11/style.svg" />
    <div class="txt text-center md:text-left">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">高訂美學 穿梭想像</div>
        <div class="subtitle">International Location</div>
        <div class="content">
          公設品味五感在線，追夢者的頂極饗宴<br>
          重點精選世界精品HERMES頂級家具、家飾<br>
          千坪中庭花園、健身會館、泳池場域，連成澎湃一氣<br>
          以高奢訂製格局，實踐永恆渴望的夢想之見
        </div>
      </div>
    </div>
    <div class="imgs hidden md:block">
      <div class="img absolute">
        <img class="block" src="@/section/s13/1.webp" />
        <div class="info absolute">公設3D合成示意圖</div>
      </div>
      <div class="img absolute">
        <img class="block" src="@/section/s13/2.webp" />
        <div class="info absolute">公設3D合成示意圖</div>
      </div>
    </div>
    <div class="slider md:hidden">
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
          <div class="img relative">
            <img class="block" src="@/section/s13/1.webp" />
            <div class="info absolute">3D外觀合成示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img relative">
            <img class="block" src="@/section/s13/2.webp" />
            <div class="info absolute">3D外觀合成示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s13 {
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
    top: size-m(-90);
    left: size-m(20);
    width: size-m(335);
    @media (min-width: 768px) {
      top: size(-311);
      left: size(1309);
      width: size(633.2);
    }
  }

  .txt {
    padding: size-m(50) size-m(30);
    z-index: 1;
    @media (min-width: 768px) {
      position: absolute;
      top: size(608);
      left: size(1166);
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
        margin-bottom: size(51);
      }
    }
  }

  .img {
    width: 100%;
    height: size-m(314);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .imgs .img {
    &:nth-child(1) {
      width: size(956);
      height: auto;
      left: 0;
      top: size(51);
    }

    &:nth-child(2) {
      width: size(642);
      height: auto;
      left: size(1166);
      top: size(169);
    }

    img {
      height: auto;
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
    .swiper-button-next, .swiper-button-prev {
      width: size-m(40);
      height: size-m(40);
      color: #fff;
      justify-content: flex-start;
      text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.60);

      &:after {
        font-size: 7vw;
        @media (min-width: 768px) {
          font-size: 1.4vw;
        }
      }
    }

    .swiper-button-next {
      justify-content: flex-end;
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