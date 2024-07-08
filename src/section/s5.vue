<template>
  <section class="s5 w-full relative text-white">
    <div class="rect absolute top-0 left-0 w-full h-full"></div>
    <div class="md:flex md:flex-row-reverse md:justify-between" data-aos="fade-up" data-aos-delay="0">
      <div class="t1">文教新未來</div>
      <div class="t2"><span>7</span>分鐘到義大醫學院，設全台少見「醫學科技學院」</div>
    </div>
    <div class="imgs hidden md:flex md:justify-between">
      <img src="@/section/s5/1.jpg" data-aos="zoom-in" data-aos-delay="0" />
      <img src="@/section/s5/2.jpg" data-aos="zoom-in" data-aos-delay="200" />
      <img src="@/section/s5/3.jpg" data-aos="zoom-in" data-aos-delay="400" />
    </div>
    <div class="t3" data-aos="fade-up" data-aos-delay="0">結合醫學與智慧科技，培育全方位醫療科技人才，包含生物醫學工程學系（所）等八大醫科學系等。</div>
    <div class="slider">
      <swiper
        :loop="true"
        :navigation="false"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @init="init"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/2.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/3.jpg" />
          </div>
        </swiper-slide>
      </swiper>

      <div class="slide-prev" @click="slidePrev"></div>
      <div class="slide-next" @click="slideNext"></div>
    </div>
    <div class="info absolute">義守大學實景圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(667);
  background-image: url(@/section/s5/bg.jpg);
  background-size: 400% auto;
  background-position: 57% 75%;
  z-index: 1;
  padding-top: size-m(54);
  @media screen and (min-width:768px) {
    height: size(801);
    background-size: 120% auto;
    background-position: left bottom;
    padding: size(92) size(171) 0;
  }

  .rect {
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
    z-index: -1;
  }

  .t1 {
    font-size: size-m(25);
    font-weight: 700;
    letter-spacing: .02em;
    text-align: right;
    margin: 0 size-m(30) 0 size-m(55);
    line-height: 1;
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(54);
      margin: 0;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: size-m(150);
      height: size-m(1);
      background: #fff;
      @media screen and (min-width:768px) {
        display: none;
      }
    }
  }

  .t2 {
    font-size: size-m(14);
    font-weight: 700;
    margin: -3vw size-m(30 - 9) size-m(68) size-m(0);
    text-align: right;
    line-height: 1;
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(24);
      margin: 0;
      text-align: left;

      &:after {
        content: '';
        position: absolute;
        bottom: 1.1vw;
        left: calc(100% + 0.6vw);
        width: size-m(150);
        height: size-m(1);
        background: #fff;
        @media screen and (min-width:768px) {
          width: size(690);
          height: size(1);
        }
      }
    }

    span {
      font-size: size-m(41);
      line-height: 1;
      @media screen and (min-width:768px) {
        font-size: size(44);
      }
    }
  }

  .imgs {
    margin: size(92) 0 size(60);

    img {
      width: size(505);
      border: size(1) solid #fff;
    }
  }

  .t3 {
    text-align: justify;
    font-size: size-m(12);
    font-weight: 500;
    line-height: 175%;
    padding: 0 size-m(30);
    margin-bottom: size-m(22);
    @media screen and (min-width:768px) {
      font-size: size(20);
      padding: 0;
      margin: 0;
      text-align: right;
    }
  }

  .slider {
    position: relative;
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      display: none;
    }
    
    .swiper {
      border: size-m(1) solid #fff;
    }

    .swiper-slide {
      img {
        width: 100%;
        height: size-m(330);
        object-fit: cover;
      }
    }

    .swiper-pagination {
      display: none;
    }

    .slide-prev, .slide-next {
      width: size-m(30);
      height: size-m(30);
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background-position: center;
      background-repeat: no-repeat;

      &.slide-prev {
        left: 0;
        background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4594 23.1383C10.9963 23.6753 11.8669 23.6753 12.4039 23.1383C12.9409 22.6013 12.9409 21.7307 12.4039 21.1937L3.32256 12.1124L12.4039 3.03105C12.9409 2.49408 12.9409 1.62348 12.4039 1.08651C11.8669 0.549536 10.9963 0.549536 10.4594 1.08651L0.40575 11.1401C-0.131221 11.6771 -0.131221 12.5477 0.40575 13.0847L10.4594 23.1383Z" fill="white"/></svg>');
      }

      &.slide-next {
        right: 0;
        background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54063 1.08681C2.00366 0.549839 1.13306 0.549839 0.596088 1.08681C0.0591166 1.62378 0.0591166 2.49438 0.596088 3.03135L9.67743 12.1127L0.596088 21.194C0.0591166 21.731 0.0591166 22.6016 0.596088 23.1386C1.13306 23.6756 2.00366 23.6756 2.54063 23.1386L12.5943 13.085C13.1312 12.548 13.1312 11.6774 12.5943 11.1404L2.54063 1.08681Z" fill="white"/></svg>');
      }
    }
  }

  .info {
    bottom: size-m(10);
    left: size-m(10);
    text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.55);
    font-size: size-m(12);
    font-weight: 600;
    @media screen and (min-width:768px) {
      bottom: size(143);
      left: size(171);
      color: #FFF;
      text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.55);
      font-size: size(15);
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
const swiperRef = ref(null);

const init = swiper => {
  swiperRef.value = swiper;
}

const slidePrev = () => {
  if(swiperRef.value){
    swiperRef.value.slidePrev();
  }
}

const slideNext = () => {
  if(swiperRef.value){
    swiperRef.value.slideNext();
  }
}
</script>