<template>
  <section class="s3 user-n w-full relative">
    <div class="content">
      <div class="main-title hidden md:block text-[#9F223D]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">靜藏北區富域，該有的，一樣不少。</div>
      <div class="md:flex md:justify-between">
        <img class="title block md:hidden" src="@/section/s3/title-m.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
        <img class="title hidden md:block" src="@/section/s3/title.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
        <div class="txt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">長磯機構・長築興業深耕台南30載，自代銷起家，深諳地段價值與居者需求，以精湛工藝與國際視野，打造歷久彌新的經典建築。秉持「長住而安」的初心，始終專注於創造穩定、踏實的美好日常。如今，延續多年淬鍊的建築哲學，於北區城央精鑄傳世訂製宅—藏筑3，敬邀您共賞「家」的全新詮釋。</div>
      </div>
    </div>
    <div class="slider-label relative">
      <div class="point relative" :class="{active: activeIdx === 0}" @click="slideTo(0)"><div class="point-label">藏筑3</div></div>
      <div class="point relative" :class="{active: activeIdx === 1}" @click="slideTo(1)"><div class="point-label">藏筑2</div></div>
      <div class="point relative" :class="{active: activeIdx === 2}" @click="slideTo(2)"><div class="point-label">藏筑</div></div>
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
        @swiper="setSwiper"
        @slideChange="slideChange"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s3/1.jpg" />
            <div class="slide-content absolute hidden md:block">
              <div class="t1 text-[#9F223D]">藏筑3｜北區和緯路</div>
              <div class="t2">城央訂製  經典卓越靜生活<br>57地坪｜4車6大房</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s3/2.jpg" />
            <div class="slide-content absolute hidden md:block">
              <div class="t1 text-[#9F223D]">藏筑2｜北區文賢路</div>
              <div class="t2">核心地段，靜藏繁華富境地<br>46地坪｜4車5大房</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s3/3.jpg" />
            <div class="slide-content absolute hidden md:block">
              <div class="t1 text-[#9F223D]">藏筑｜安平區建平15街</div>
              <div class="t2">藏筑星鑽，新東方建築美學<br>40.2-44.5地坪｜4車5大房</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  padding: size-m(49) 0 0 0;
  @media screen and (min-width:768px) {
    padding: size(125) 0 0 0;
  }

  .content {
    @media screen and (min-width:768px) {
      width: size(1295);
      margin: 0 auto size(173) auto;
    }
  }

  .main-title {
    @media screen and (min-width:768px) {
      font-size: 39px;
      font-weight: 500;
      padding-bottom: size(27);
      border-bottom: size(2) solid #9F223D;
      margin-bottom: size(96);
    }
  }

  .title {
    width: size-m(242.48);
    margin: 0 auto size-m(31) auto;
    @media screen and (min-width:768px) {
      width: size(480.95);
      margin: 0;
    }
  }

  .txt {
    padding: 0 size-m(30);
    margin: 0 0 size-m(61) 0;
    font-size: size-m(12);
    font-weight: 500;
    line-height: size-m(21);
    @media screen and (min-width:768px) {
      padding: 0;
      margin: 0;
      font-size: size(20);
      line-height: size(42);
      width: size(732);
    }
  }

  .slider-label {
    width: size-m(242);
    margin: 0 auto size-m(28) auto;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      width: size(618);
      margin: 0 auto size(66) auto;
    }

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: size-m(1);
      background: #9F223D;
      @media screen and (min-width:768px) {
        height: size(2);
      }
    }

    .point {
      width: size-m(13);
      height: size-m(13);
      border: size-m(1) solid #9F223D;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      @media screen and (min-width:768px) {
        width: size(20);
        height: size(20);
        border: size(2) solid #9F223D;
      }

      .point-label {
        color: #9FA0A0;
        font-size: size-m(16);
        font-weight: 500;
        position: absolute;
        top: size-m(-9);
        left: 50%;
        transform: translate(-50%, -100%);
        white-space: nowrap;
        @media screen and (min-width:768px) {
          font-size: size(26);
          top: size(-22);
        }
      }

      &.active {
        background: #9F223D;

        .point-label {
          color: #9F223D;
        }
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

    .slide-content {
      @media screen and (min-width:768px) {
        top: size(114);
        left: size(242);
        width: size(314);
        color: #211815;
        font-size: size(22);
        font-weight: 500;
        line-height: size(39);
      }

      .t1 {
        font-size: size(28);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-bottom: size(17);
        border-bottom: size(2) solid #9F223D;
        margin-bottom: size(17);
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
const swiperRef = ref();
const activeIdx = ref(0);

const setSwiper = swiper => {
  swiperRef.value = swiper;
}

const slideTo = idx => {
  swiperRef.value.slideTo(idx+1);
}

const slideChange = () => {
  if (swiperRef.value) {
    activeIdx.value = swiperRef.value.realIndex;
  }
}
</script>