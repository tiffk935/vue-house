<template>
  <section class="s6 user-n w-full relative">
    <img class="line absolute md:hidden" src="@/section/s6/line-m.svg" />
    <div class="cir1 absolute"></div>
    <div class="cir2 absolute"></div>
    <div class="cir3 absolute"></div>
    <div class="content">
      <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">雙公園左擁右抱<br>水岸樂活新版圖</div>
      <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">近享424公頃<br>大台北都會公園水岸風光</div>
      <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">城市中綠地難得，「日進學」左擁右抱雙公園，散步距離約500公尺即抵洲子洋公園，園區內設有五股國民運動中心，游泳池、體適能、兒童遊戲區…健康樂活應有盡有。同樣車行約2分鐘可抵占地2.5公頃的體健公園，園區內豐富的互動遊具，融入在地意象成為大人小孩身心暢遊首選！</div>
    </div>
    <div class="slider">
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
            <img src="@/section/s6/1.jpg" />
            <div class="txt">公園情境圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s6/2.jpg" />
            <div class="txt">體健公園實景圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s6/3.jpg" />
            <div class="txt">國民運動中心實景圖</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="btn-prev" @click="slidePrev"></div>
      <div class="btn-next" @click="slideNext"></div>
    </div>
    <div class="jp">
      <div data-aos="fade-up" data-aos-delay="0">健康で幸せな生活</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  background: #fff;
  @media screen and (min-width:768px) {
    height: size(1365);
    background: none;
  }

  .content {
    position: relative;
    width: 100%;
    height: size-m(504);
    @media screen and (min-width:768px) {
      position: static;
      height: auto;
    }
  }
  
  .line {
    top: 0;
    left: 0;
    width: size-m(357);
  }

  .t1 {
    top: size-m(60);
    left: size-m(32);
    font-size: size-m(28);
    font-weight: 700;
    line-height: 123%;
    letter-spacing: .05em;
    text-align: justify;
    @media screen and (min-width:768px) {
      top: size(158);
      left: size(1248);
      font-size: size(62);
    }
  }

  .t2 {
    width: size-m(310);
    top: size-m(188);
    left: size-m(32);
    font-size: size-m(18);
    color: #6a1684;
    font-family: "Noto Sans TC";
    font-weight: 700;
    line-height: 160%;
    @media screen and (min-width:768px) {
      width: size(555);
      top: size(412);
      left: size(1248);
      font-size: size(38);
    }
  }

  .t3 {
    width: size-m(310);
    top: size-m(256);
    left: size-m(32);
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: size-m(14);
    line-height: 180%;
    letter-spacing: .05em;
    @media screen and (min-width:768px) {
      width: size(555);
      top: size(562);
      left: size(1248);
      font-size: size(16);
    }
  }

  .slider {
    position: relative;
    @media screen and (min-width:768px) {
      width: size(1136);
      top: size(154);
      left: 0;
      z-index: 1;
      padding-bottom: size(60);
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
        bottom: size(-60);
        justify-content: flex-end;
      }

      .swiper-pagination-bullet {
        width: size(90);
        height: size(7);
        background: #fff;
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
        height: size-m(262);
        display: block;
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: size(793);
        }
      }

      .txt {
        position: absolute;
        bottom: size-m(3);
        left: size-m(12);
        color: #FFF;
        text-shadow: 0px 0px size-m(3) rgba(0, 0, 0, 0.50);
        font-family: "Noto Sans TC";
        font-size: size-m(12);
        line-height: 180%;
        @media screen and (min-width:768px) {
          bottom: .5em;
          left: 1em;
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
      left: 0;
      background-image: url('data:image/svg+xml,<svg width="10" height="34" viewBox="0 0 10 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.21588 2.44922L2.43987 14.8508C1.85338 16.1126 1.85338 17.9574 2.43987 19.2192L8.21588 31.6208" stroke="%23ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      @media screen and (min-width:768px) {
        left: size(-82);
        background-image: url('data:image/svg+xml,<svg width="21" height="86" viewBox="0 0 21 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4875 2L3.2375 36.89C1.5875 40.44 1.5875 45.63 3.2375 49.18L19.4875 84.07" stroke="%23ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }
    }

    .btn-next {
      right: 0;
      background-image: url('data:image/svg+xml,<svg width="10" height="34" viewBox="0 0 10 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.78406 2.44922L7.56007 14.8508C8.14656 16.1126 8.14656 17.9574 7.56007 19.2192L1.78406 31.6208" stroke="%23ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      @media screen and (min-width:768px) {
        right: size(-82);
        background-image: url('data:image/svg+xml,<svg width="22" height="86" viewBox="0 0 22 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30756 2L18.5576 36.89C20.2076 40.44 20.2076 45.63 18.5576 49.18L2.30756 84.07" stroke="%23ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }
    }
  }

  .jp {
    position: relative;
    height: size-m(214);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-align: center;
    font-size: size-m(28);
    line-height: 160%;
    letter-spacing: .08em;
    background: #450957;
    background: linear-gradient(90deg, #450957 2.45%, #6a1684 55.6%, #FFF 97.36%);
    @media screen and (min-width:768px) {
      height: size(514);
      font-size: size(100);
    }

    div {
      @media screen and (min-width:768px) {
        margin-top: size(90);
      }
    }

    &:before, &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: size-m(40);
      height: size-m(1);
      background: #fff;
      @media screen and (min-width:768px) {
        top: calc(50% + size(55));
        width: size(250);
        height: size(4);
      }
    }

    &:before {
      left: size-m(17);
      @media screen and (min-width:768px) {
        left: size(250);
      }
    }

    &:after {
      right: size-m(17);
      @media screen and (min-width:768px) {
        right: size(250);
      }
    }
  }

  .cir1 {
    top: size-m(-90);
    right: size-m(-172);
    width: size-m(232);
    height: size-m(232);
    border-radius: 50%;
    background: linear-gradient(135deg, #6a1684 14.65%, #450957 85.36%);
    transform: translateY(-15vw);
    animation: ball 7s ease-in-out 0s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(-246);
      right: size(-251);
      width: size(450);
      height: size(450);
      transform: translateY(5vw);
    }
  }

  .cir2 {
    top: size-m(158);
    left: size-m(-12.3);
    width: size-m(46);
    height: size-m(46);
    border-radius: 50%;
    background: linear-gradient(135deg, #9030ad 28.79%, #6a1684 85.35%);
    transform: translateY(-8vw);
    animation: ball 7s ease-in-out -4s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(250);
      left: size(1002);
      width: size(240);
      height: size(240);
      transform: translateY(-5vw);
    }
  }

  .cir3 {
    top: size-m(468);
    right: size-m(24);
    width: size-m(151);
    height: size-m(151);
    border-radius: 50%;
    background: linear-gradient(135deg, #c470dd 28.79%, #6a1684 85.35%);
    opacity: 0.8;
    transform: translateY(-10vw);
    animation: ball 5s ease-in-out -2s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(858);
      right: auto;
      left: size(-190);
      width: size(363);
      height: size(363);
      transform: translateY(-5vw);
      z-index: 1;
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