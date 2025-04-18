<template>
  <section class="s7 user-n w-full relative" @click="showModal">
    <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="title w-full block" src="@/section/s7/title.svg" />
      <div>開闊舒適的住家空間，滿足現代家庭的各種需求，讓家擁有更多延展性，擁抱生活的寬度與自在。</div>
    </div>
    <div class="slider">
      <swiper
        :spaceBetween="10"
        :loop="true"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s7/1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s7/1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s7/1.jpg" />
          </div>
        </swiper-slide>
      </swiper>
      <div class="info absolute">室內情境示意 | 裝潢風格參考情境示意圖，實際格局依合約書為準</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  text-align: justify;
  font-size: size-m(12);
  font-weight: 500;
  line-height: size-m(21);
  @media screen and (min-width:768px) {
    font-size: size(20);
    line-height: size(34);
  }

  .content {
    padding: size-m(52) size-m(30);
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(95);
      left: 0;
      width: size(661);
      padding: size(35) size(48) size(34) size(166);
      background: #fff;
      z-index: 1;
    }

    .title {
      padding: 0 size-m(12);
      margin-bottom: size-m(25);
      @media screen and (min-width:768px) {
        padding: 0;
        margin-bottom: size(19);
      }
    }
  }

  .slider {
    .swiper, .swiper * {
      z-index: initial;
    }

    .swiper-slide {
      img {
        width: 100%;
        display: block;
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(40);
      height: size-m(40);
      background-size: size-m(13) auto;
      background-position: center;
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        display: none;
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 0;
      background-position: size-m(6) center;
      background-image: url('data:image/svg+xml,<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4652 23.0664C12.0053 23.5071 12.8025 23.4761 13.306 22.9726C13.8095 22.4691 13.8405 21.6719 13.3998 21.1318L13.306 21.0273L4.27867 11.9999L13.306 2.9726C13.843 2.43563 13.843 1.56426 13.306 1.02729C12.769 0.490317 11.8977 0.490317 11.3607 1.02729L1.3607 11.0273C0.82373 11.5643 0.82373 12.4356 1.3607 12.9726L11.3607 22.9726L11.4652 23.0664Z" fill="white"/></svg>');
    }

    .swiper-button-next {
      right: 0;
      background-position: right size-m(6) center;
      background-image: url('data:image/svg+xml,<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.53481 0.933647C1.99474 0.492892 1.1975 0.523888 0.693988 1.0274C0.19048 1.53091 0.159482 2.32815 0.600238 2.86822L0.693988 2.97271L9.72133 12.0001L0.693988 21.0274C0.157017 21.5644 0.157017 22.4357 0.693988 22.9727C1.23096 23.5097 2.10233 23.5097 2.6393 22.9727L12.6393 12.9727C12.9078 12.7042 13.042 12.3521 13.0418 12.0001C13.042 11.648 12.9078 11.2959 12.6393 11.0274L2.6393 1.0274L2.53481 0.933647Z" fill="white"/></svg>');
    }

    .info {
      bottom: size-m(8);
      right: size-m(9);
      color: #FFF;
      font-size: size-m(12);
      font-weight: 500;
      @media screen and (min-width:768px) {
        bottom: size(25);
        right: size(47);
        font-size: size(15);
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
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper";
const modules = ref([Autoplay, Navigation, Pagination]);
</script>