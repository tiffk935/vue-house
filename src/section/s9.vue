<template>
  <section class="s9 user-n w-full relative">
    <div class="inner md:flex md:flex-row-reverse md:items-end">
      <div class="slider">
        <swiper
          :loop="true"
          :navigation="false"
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
              <div class="img img1 relative">
                <img src="@/section/s9/slider/1.webp" />
                <div class="txt">BOSCH情境示意圖</div>
                <img class="logo" src="@/section/s9/bosch.svg" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <div class="img img2 relative">
                <img src="@/section/s9/slider/2.webp" />
                <div class="txt">TOTO情境示意圖</div>
                <img class="logo" src="@/section/s9/toto.svg" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <div class="img img3 relative">
                <img src="@/section/s9/slider/3.webp" />
                <div class="txt">GROHE情境示意圖</div>
                <img class="logo" src="@/section/s9/grohe.svg" />
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="slide-prev md:hidden" @click="slidePrev">
          <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15.3071" r="14" transform="rotate(-180 15 15.3071)" fill="white" stroke="#4C6145" stroke-width="2"/>
            <path d="M21.2495 15.458L9.80718 15.458" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.1567 21.185L9.43557 15.4638L15.1567 9.74268" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="slide-next md:hidden" @click="slideNext">
          <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.5" cy="15.3071" r="14" fill="white" stroke="#4C6145" stroke-width="2"/>
            <path d="M9.25049 15.1562H20.6928" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.3433 9.42925L21.0644 15.1504L15.3433 20.8716" stroke="#4C6145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1">國際知名優質建材 <br>質感品味美學</div>
        <div class="t2">質感決定了你與別人的與眾不同。齊聚BOSCH、GROHE、TOTO、Panasonic等國際精品名牌設備，讓您的生活成為最有質感的品味美學。</div>
        <div class="slider-btns hidden md:flex">
          <div :class="{'slider-btn': true, active: img === 1}" @click="swiperRef.slideTo(1)"><img src="@/section/s9/slider/1.webp" /></div>
          <div :class="{'slider-btn': true, active: img === 2}" @click="swiperRef.slideTo(2)"><img src="@/section/s9/slider/2.webp" /></div>
          <div :class="{'slider-btn': true, active: img === 3}" @click="swiperRef.slideTo(3)"><img src="@/section/s9/slider/3.webp" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  padding: size-m(62.22) 0 size-m(102) 0;
  background-image: url(@/section/s9/bg-m.webp);
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    padding: size(134) 0 size(200) 0;
    background-image: url(@/section/s9/bg.webp);
  }

  .inner {
    @media (min-width: 768px) {
      width: size(1580);
      justify-content: space-between;
      margin: 0 auto;
    }
  }

  .slider {
    position: relative;
    width: size-m(330 + 6);
    padding: 0 size-m(6);
    margin: 0 auto;
    margin-bottom: size-m(22);
    @media (min-width: 768px) {
      width: size(1060);
      padding: 0;
      margin: 0;
    }

    .img {
      .txt {
        position: absolute;
        bottom: size-m(13);
        left: size-m(10);
        color: #FFF;
        font-size: size-m(12);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: size-m(1.2);
        @media (min-width: 768px) {
          bottom: size(13);
          left: size(15);
          font-size: size(12);
          letter-spacing: size(1.5);
        }
      }

      &.img1 {
        .logo {
          position: absolute;
          top: size-m(18);
          right: size-m(22);
          width: size-m(125);
          @media (min-width: 768px) {
            top: size(57.85);
            right: size(72);
            width: size(402.88);
          }
        }
      }

      &.img2 {
        .logo {
          position: absolute;
          top: size-m(21);
          right: size-m(29);
          width: size-m(123);
          @media (min-width: 768px) {
            top: size(67.88);
            right: size(92.17);
            width: size(398.7);
          }
        }
      }

      &.img3 {
        .logo {
          position: absolute;
          top: size-m(117);
          right: size-m(18);
          width: size-m(103);
          @media (min-width: 768px) {
            top: size(379);
            right: size(60);
            width: size(332.14);
          }
        }
      }
    }

    .slide-prev, .slide-next {
      position: absolute;
      top: size-m(83);
      left: 0;
      width: size-m(30);
      cursor: pointer;
      z-index: 11;
    }

    .slide-next {
      left: auto;
      right: 0;
    }
  }

  .content {
    width: size-m(310);
    margin: 0 auto;
    @media (min-width: 768px) {
      width: size(424);
    }

    .t1 {
      color: #302626;
      font-family: "Noto Serif TC";
      font-size: size-m(22);
      font-weight: 700;
      line-height: 150%;
      margin-bottom: size-m(21);
      padding-bottom: size-m(21);
      border-bottom: size-m(1) solid #302626;
      @media (min-width: 768px) {
        font-size: size(40);
        margin-bottom: size(27);
        padding-bottom: size(27);
        border-bottom: size(1) solid #302626;
      }
    }

    .t2 {
      color: #000;
      text-align: justify;
      font-size: size-m(14);
      line-height: 170%;
      @media (min-width: 768px) {
        font-size: size(16);
        line-height: normal;
      }
    }

    .slider-btns {
      margin-top: size(80);

      .slider-btn {
        width: size(100);
        height: size(94);
        margin-right: size(15);
        opacity: .5;
        cursor: pointer;
        transition: opacity .2s;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &:hover, &.active {
          opacity: 1;
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
import { Autoplay } from "swiper";
const modules = ref([Autoplay]);
const swiperRef = ref();
const img = ref(1);

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

const slideChange = () => {
  if (swiperRef.value) {
    img.value = swiperRef.value.realIndex + 1;
  }
}
</script>
