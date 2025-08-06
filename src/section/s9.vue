<template>
  <section class="s9 user-n w-full relative z-[1]">
    <div class="ball absolute"></div>
    <div class="text">
      <div class="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">下樓即盛典 公設即宮殿</div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">挑高門廳迎光而立，水景映著綠意搖曳，在家的每一步，都是有風景相伴的奢華開場，從日常到待客、從親子到自我，25項禮遇空間，鋪展生活的所有可能，國王大道的每一天都值得款待。</div>
    </div>
    <div class="slider">
      <swiper
        :pagination="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :effect="'coverflow'"
        :coverflowEffect="{
          rotate: 0,
          stretch: '82.7%',
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }"
        :loop="true"
        :lazyPreloadPrevNext="1"
        :navigation="false"
        :breakpoints="{
          '768': {
            slidesPerView: 1,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }
          },
        }"
        :modules="modules"
        @swiper="init"
        @slideChange="slideChange"
      >
        <swiper-slide v-for="slide in slides">
          <div class="relative">
            <img :src="getImg(`./s9/${slide.img}`)" loading="lazy" />
            <div class="swiper-lazy-preloader"></div>
            <div class="info">{{slide.label}}</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="slide-prev" @click="slideToPrev"></div>
      <div class="slide-next" @click="slideToNext"></div>
    </div>
    <div class="tk-tabs">
      <div 
        class="tk-tab" 
        v-for="(slide, idx) in slides"
        :class="{ active: activeSlideIdx === idx }"
        @click="slideTo(idx)"
      >
        <img :src="getImg(`./s9/${slide.img}`)" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  padding: size-m(83) 0 size-m(40) 0;
  text-align: justify;
  font-size: size-m(14);
  line-height: 160%;
  letter-spacing: .08em;
  @media screen and (min-width:768px) {
    padding: size(218) 0 size(180) 0;
    font-size: size(16);
  }

  .ball {
    width: size-m(42);
    height: size-m(42);
    top: size-m(133);
    left: size-m(-15);
    transform: translateY(-15%);
    background-image: url(@/section/ball1.png);
    animation: ball 5s ease 0s infinite alternate;
    @media screen and (min-width:768px) {
      width: size(542);
      height: size(542);
      top: size(-180);
      left: auto;
      right: size(-200);
      opacity: .9;
      animation: ball 8s ease 0s infinite alternate;

      &:after {
        content: '';
        background-color: #00DBFF;
        mix-blend-mode: soft-light;
      }
    }
  }

  .text {
    padding: 0 size-m(37);
    margin-bottom: size-m(31);
    @media screen and (min-width:768px) {
      width: size(782);
      padding: 0;
      margin: 0 auto;
      margin-bottom: size(45);
      text-align: center;
    }
  }

  .title {
    font-size: size-m(28);
    line-height: size(34);
    margin-bottom: size-m(40);
    @media screen and (min-width:768px) {
      font-size: size(40);
      line-height: size(48);
      margin-bottom: size(13);
    }
  }

  .slider {
    position: relative;
    margin: 0 size-m(19);
    margin-bottom: size-m(44);
    /* background: green; */
    @media screen and (min-width:768px) {
      width: size(1527);
      margin: 0 auto size(56) auto;
    }

    .swiper {
      .swiper-slide {
        width: calc(300 / 346 * 100%);
        background: #2E5FE1;
        @media screen and (min-width:768px) {
          width: 100%;
        }

        & > div {
          &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, .6);
            @media screen and (min-width:768px) {
              display: none;
            }
          }
        }

        &.swiper-slide-active > div:after {
          opacity: 0;
        }
      }
    }

    .slide-prev, .slide-next {
      position: absolute;
      top: 50%;
      width: size-m(45);
      height: size-m(45);
      background: rgba(255, 255, 255, 0.90);
      border: size-m(1) solid #E4EAF8;
      transform: translate(0, -50%);
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: size-m(15.75) auto;
      box-shadow: 0 0 size-m(8) 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
      z-index: 1;
      @media screen and (min-width:768px) {
        width: size(78);
        height: size(78);
        border: size(1) solid #E4EAF8;
        background-size: size(28) auto;
        box-shadow: 0 0 size(8) 0 rgba(0, 0, 0, 0.25);
      }

      &.slide-prev {
        left: 0;
        background-image: url('data:image/svg+xml,<svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.375 5.5L1.625 5.5M1.625 5.5L5 2.125M1.625 5.5L5 8.875" stroke="%23252432" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        @media screen and (min-width:768px) {
          left: size(-39);
        }
      }

      &.slide-next {
        left: auto;
        right: 0;
        background-image: url('data:image/svg+xml,<svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.625 5.5L17.375 5.5M17.375 5.5L14 2.125M17.375 5.5L14 8.875" stroke="%23252432" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        @media screen and (min-width:768px) {
          right: size(-39);
        }
      }

      &.disabled {
        opacity: .35;
        cursor: auto;
        pointer-events: none;
      }
    }

    .info {
      position: absolute;
      bottom: size-m(6);
      right: size-m(5);
      font-size: size-m(10);
      line-height: size-m(12);
      @media screen and (min-width:768px) {
        bottom: size(12);
        right: size(11);
        font-size: size(13);
        line-height: size(16);
      }
    }
  }

  .tk-tabs {
    display: flex;
    justify-content: center;

    .tk-tab {
      width: size-m(60);
      margin: 0 size-m(2.5);
      cursor: pointer;
      position: relative;
      @media screen and (min-width:768px) {
        width: size(200);
        margin: 0 size(6);
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 244, 221, .7);
        transition: opacity .2s;
        @media screen and (min-width:768px) {
          background: rgba(0, 59, 140, 0.50);
        }
      }

      &.active:after {
        opacity: 0;
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
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
const modules = ref([Autoplay, EffectCoverflow, Navigation]);
const images = import.meta.globEager('./s9/*.*');

const getImg = path => images[path]?.default || '';
const slides = ref([
  {
    img: '1.jpg',
    label: '公設3D透視圖'
  },
  {
    img: '2.jpg',
    label: '公設3D透視圖'
  },
  {
    img: '3.jpg',
    label: '公設3D透視圖'
  },
  {
    img: '4.jpg',
    label: '公設3D透視圖'
  },
  {
    img: '5.jpg',
    label: '公設3D透視圖'
  },
]);

const sliderRef = ref();
const activeSlideIdx = ref(0);

const init = (swiper) => {
  sliderRef.value = swiper;
}

const slideChange = () => {
  if (sliderRef.value) {
    activeSlideIdx.value = sliderRef.value.realIndex;
  }
}

const slideTo = (idx) => {
  sliderRef.value.slideToLoop(idx);
}

const slideToPrev = () => {
  sliderRef.value.slidePrev();
}

const slideToNext = () => {
  sliderRef.value.slideNext();
}
</script>