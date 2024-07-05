<template>
  <section class="s6 w-full relative text-white">
    <img class="bg" src="@/section/s6/bg.jpg" />
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3 hidden md:block"></div>

    <div class="md:flex md:justify-between md:items-stretch">
      <div class="text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div>
          <div class="t1">醫療新未來</div>
          <div class="t2">約8分鐘到義大醫院，<br class="hidden md:block">南臺灣國際級準醫學中心</div>
          <div class="t3">連續四次通過「JCI國際醫院及學術醫學中心」評鑑，是中南部唯一升格準醫學中心的大型醫院。</div>
        </div>
        <div class="dots">
          <div :class="{ active: activeIdx === 0 }" @click="slideTo(0)"></div>
          <div :class="{ active: activeIdx === 1 }" @click="slideTo(1)"></div>
          <div :class="{ active: activeIdx === 2 }" @click="slideTo(2)"></div>
        </div>
      </div>
      <div class="slider">
        <swiper
          :loop="true"
          :navigation="false"
          :pagination="false"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          @init="init"
          @slideChange="slideChange"
        >
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s6/1.jpg" />
              <div class="txt">義大醫院實景圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s6/2.jpg" />
              <div class="txt">義大醫院實景圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s6/3.jpg" />
              <div class="txt">義大醫院實景圖</div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="slide-prev" @click="slidePrev"></div>
        <div class="slide-next" @click="slideNext"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size-m(667);
  padding: size-m(54) size-m(30) 0;
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(801);
    padding: size(119) 0 size(121) size(170);
  }

  .bg {
    position: absolute;
    top: size-m(152);
    left: size-m(-18);
    width: size-m(727);
    max-width: none;
    z-index: -1;
    @media screen and (min-width:768px) {
      top: 0;
      left: 0;
      width: 100%;
    }
  }

  .rect1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(388);
    background: linear-gradient(0deg, #000 50%, rgba(0, 0, 0, 0.00) 100%);
    z-index: -1;
    @media screen and (min-width:768px) {
      height: size(304);
      background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
    }
  }

  .rect2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(306);
    background: linear-gradient(180deg, #171C37 53.5%, rgba(23, 28, 55, 0.00) 100%);
    z-index: -1;
    @media screen and (min-width:768px) {
      width: size(540);
      height: 100%;
      background: linear-gradient(90deg, #171C37 0%, rgba(23, 28, 55, 0.00) 100%);
    }
  }

  .rect3 {
    @media screen and (min-width:768px) {
      position: absolute;
      top: 0;
      right: 0;
      width: size(540);
      height: 100%;
      background: linear-gradient(270deg, #171C37 0%, rgba(23, 28, 55, 0.00) 100%);
    }
  }

  .text {
    @media screen and (min-width:768px) {
      width: size(287);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .t1 {
    color: #00B294;
    font-size: size-m(25);
    font-weight: 700;
    letter-spacing: .02em;
    padding-bottom: size-m(15);
    margin-bottom: size-m(13);
    border-bottom: size-m(1) solid #00B294;
    @media screen and (min-width:768px) {
      font-size: size(54);
      letter-spacing: .04em;
      padding-bottom: size(19);
      margin-bottom: size(19);
      border-bottom: size(1) solid #00B294;
    }
  }

  .t2 {
    color: #00B294;
    text-align: center;
    font-size: size-m(14);
    font-weight: 700;
    line-height: 150%;
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      text-align: left;
      font-size: size(24);
      line-height: 158%;
      margin-bottom: size(56);
      letter-spacing: .02em;
    }
  }

  .t3 {
    text-align: justify;
    font-size: size-m(12);
    font-style: normal;
    font-weight: 500;
    line-height: 175%;
    margin-bottom: size-m(112);
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: 190%;
      margin-bottom: 0;
      letter-spacing: .11em;
    }
  }

  .slider {
    position: relative;
    margin: 0 size-m(-30);
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      margin: 0;
      padding: 0;
      width: size(998);
    }

    .swiper-slide {
      img {
        width: 100%;
        height: size-m(330);
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: auto;
        }
      }

      .txt {
        position: absolute;
        bottom: size-m(10);
        right: size-m(10);
        text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.55);
        font-size: size-m(12);
        font-weight: 600;
        @media screen and (min-width:768px) {
          bottom: size(12);
          right: size(22);
          text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.55);
          font-size: size(15);
        }
      }
    }

    .slide-prev, .slide-next {
      width: size-m(30);
      height: size-m(30);
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background-position: center;
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        display: none;
      }

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

  .dots {
    display: none;
    @media screen and (min-width:768px) {
      display: flex;

      div {
        width: size(15);
        height: size(15);
        border: size(1) solid #fff;
        border-radius: 50%;
        margin-right: size(10);
        cursor: pointer;

        &.active {
          background: #fff;
        }
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
const swiperRef = ref(null);
const activeIdx = ref(0);

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

const slideChange = swiper => {
  if(swiperRef.value){
    activeIdx.value = swiper.realIndex;
  }
}

const slideTo = idx => {
  swiperRef.value.slideTo(idx + 1);
}
</script>