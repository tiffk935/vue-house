<template>
  <section class="s8 user-n w-full relative">
    <div class="bg absolute"></div>
    <div class="cir1 absolute"></div>
    <div class="cir2 absolute"></div>
    <div class="cir3 absolute"></div>
    <div class="en absolute">CONVENIENT LIVING AMENITIES</div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">凌雲、成泰雙商圈<br>生活機能全部到位</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">洲子洋重劃區開發成熟！</div>
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">現有成熟雙商圈凌雲路、成泰路商圈在身邊，全聯、成州傳統市場美食採買無比便利，食衣住行育樂通通有；成蘆橋一橋之隔即為蘆洲總站商圈、長榮路商圈，生活所需不遠求。</div>
    <div class="slider absolute">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="0"
        :centeredSlides="true"
        :loop="true"
        :navigation="false"
        :pagination="{
          clickable: true
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @swiper="setSwiper"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s8/1.jpg" />
            <div class="txt">凌雲路商圈</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s8/2.jpg" />
            <div class="txt">商圈情境圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s8/3.jpg" />
            <div class="txt">商圈情境圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s8/4.jpg" />
            <div class="txt">成泰路商圈</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="btn-prev" @click="slidePrev"></div>
      <div class="btn-next" @click="slideNext"></div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  height: size-m(817);
  @media screen and (min-width:768px) {
    height: size(1198);
  }

  .bg {
    bottom: 0;
    left: size-m(-334);
    width: size-m(736.15);
    height: size-m(210);
    background-image: url(@/section/s8/bg.png);
    background-position: left bottom;
    background-size: 100% auto;
    @media screen and (min-width:768px) {
      left: 0;
      width: size(1921);
      height: size(548);
    }
  }

  .en {
    top: size-m(76);
    left: size-m(20);
    font-size: size-m(13);
    font-weight: 300;
    line-height: 180%;
    letter-spacing: .35em;
    white-space: nowrap;
    @media screen and (min-width:768px) {
      top: size(153);
      left: size(470);
      font-size: size(33);
      letter-spacing: .53em;

      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: size(127);
        height: size(1);
        background: #514E4E;
      }

      &:before {
        left: size(-23);
        transform: translate(-100%, -50%);
      }

      &:after {
        right: calc(size(-23) + .53em);
        transform: translate(100%, -50%);
      }
    }
  }

  .t1 {
    top: size-m(163);
    left: size-m(36);
    font-size: size-m(28);
    font-weight: 700;
    line-height: 123%;
    letter-spacing: .05em;
    text-align: justify;
    @media screen and (min-width:768px) {
      top: size(424);
      left: size(200);
      font-size: size(62);
    }
  }

  .t2 {
    width: size-m(310);
    top: size-m(271);
    left: size-m(36);
    font-size: size-m(18);
    color: #6a1684;
    font-family: "Noto Sans TC";
    font-weight: 700;
    line-height: 160%;
    @media screen and (min-width:768px) {
      width: size(545);
      top: size(650);
      left: size(200);
      font-size: size(38);
    }
  }

  .t3 {
    width: size-m(310);
    top: size-m(310);
    left: size-m(36);
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: size-m(14);
    line-height: 180%;
    letter-spacing: .05em;
    @media screen and (min-width:768px) {
      width: size(545);
      top: size(739);
      left: size(200);
      font-size: size(16);
    }
  }

  .slider {
    width: size-m(310.5);
    top: size-m(480);
    left: size-m(36);
    @media screen and (min-width:768px) {
      width: size(900);
      top: size(431 - 47);
      left: size(831);
      z-index: 1;
      padding-top: size(47);
      overflow: hidden;
    }

    .swiper {
      z-index: initial;
      @media screen and (min-width:768px) {
        overflow: visible;
      }

      * {
        z-index: initial;
      }
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: flex;
        margin: 0;
        line-height: 1;
        bottom: auto;
        top: size(-47);
        justify-content: flex-end;
      }

      .swiper-pagination-bullet {
        width: size(70);
        height: size(7);
        background: #B3B3B3;
        border-radius: size(10);
        opacity: .5;

        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }

    .swiper-slide {
      img {
        width: 100%;
        height: size-m(207);
        display: block;
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: size(600);
        }
      }

      .txt {
        position: absolute;
        bottom: size-m(3);
        left: size-m(10);
        color: #FFF;
        text-shadow: 0px 0px size-m(3) rgba(0, 0, 0, 0.50);
        font-family: "Noto Sans TC";
        font-size: size-m(12);
        line-height: 180%;
        @media screen and (min-width:768px) {
          bottom: .3em;
          left: .7em;
          text-shadow: 0px 0px size(3) rgba(0, 0, 0, 0.50);
          font-size: size(15);
        }
      }
    }

    .btn-prev, .btn-next {
      width: size-m(29);
      height: size-m(29);
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background-repeat: no-repeat;
      background-size: size-m(6.22) auto;
      background-position: center;
      cursor: pointer;
      @media screen and (min-width:768px) {
        display: none;
      }
    }

    .btn-prev {
      left: size-m(-29);
      background-image: url('data:image/svg+xml,<svg width="10" height="34" viewBox="0 0 10 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.21588 2.44922L2.43987 14.8508C1.85338 16.1126 1.85338 17.9574 2.43987 19.2192L8.21588 31.6208" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      @media screen and (min-width:768px) {
        left: size(-82);
        background-image: url('data:image/svg+xml,<svg width="21" height="86" viewBox="0 0 21 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4875 2L3.2375 36.89C1.5875 40.44 1.5875 45.63 3.2375 49.18L19.4875 84.07" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }
    }

    .btn-next {
      right: size-m(-29);
      background-image: url('data:image/svg+xml,<svg width="10" height="34" viewBox="0 0 10 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.78406 2.44922L7.56007 14.8508C8.14656 16.1126 8.14656 17.9574 7.56007 19.2192L1.78406 31.6208" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      @media screen and (min-width:768px) {
        right: size(-82);
        background-image: url('data:image/svg+xml,<svg width="22" height="86" viewBox="0 0 22 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30756 2L18.5576 36.89C20.2076 40.44 20.2076 45.63 18.5576 49.18L2.30756 84.07" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }
    }
  }

  .cir1 {
    top: size-m(131);
    left: size-m(-8.5);
    width: size-m(39);
    height: size-m(39);
    border-radius: 50%;
    background: linear-gradient(135deg, #6a1684 14.65%, #450957 85.36%);
    opacity: 0.7;
    transform: translateY(-5vw);
    animation: ball 7s ease-in-out -4s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(152);
      left: size(-67);
      width: size(200);
      height: size(200);
    }
  }

  .cir2 {
    top: size-m(430);
    right: size-m(-38.5);
    width: size-m(140);
    height: size-m(140);
    border-radius: 50%;
    background: linear-gradient(135deg, #a33cc2 28.79%, #6a1684 85.35%);
    transform: translateY(-5vw);
    animation: ball 7s ease-in-out -2s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(1161);
      right: size(-87);
      width: size(124);
      height: size(124);
      background: linear-gradient(135deg, #6a1684 14.65%, #450957 85.36%);
      z-index: 1;
    }
  }

  .cir3 {
    top: size-m(756);
    left: size-m(-4);
    width: size-m(90);
    height: size-m(90);
    border-radius: 50%;
    background: linear-gradient(135deg, #a33cc2 28.79%, #6a1684 85.35%);
    transform: translateY(5vw);
    animation: ball 7s ease-in-out 0s infinite alternate-reverse;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(1091);
      left: size(219);
      width: size(140);
      height: size(140);
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

const setSwiper = swiper => {
  swiperRef.value = swiper;
}

const slidePrev = () => {
  swiperRef.value.slidePrev();
}

const slideNext = () => {
  swiperRef.value.slideNext();
}
</script>