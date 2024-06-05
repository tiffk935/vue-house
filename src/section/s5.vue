<template>
  <section class="s5 relative">
    <!-- 
    <img src="./s5/m.jpg" class="t0 absolute"> 
 -->
    <div class="slider" data-aos="fade">
      <swiper  class="slide"
        :slidesPerView="'auto'" 
        :spaceBetween="0"
        :centeredSlides="true"
        :navigation="false"
        :loop="true"
        :speed="2000"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @swiper="onSwiper"
        @slideChangeTransitionStart="onTransitionStart"
        @slideChangeTransitionEnd="onTransitionEnd"
      ><!--
        
      -->
        <swiper-slide  class="slide-item" v-for="img in imgs" :key="img">
          <div>
            <img :src="img.img" :alt="img.st1">
            <div class="st1" v-html="img.st1"></div>
            <div class="st2" v-html="img.st2"></div>
          </div>
        </swiper-slide>
      </swiper>
    <div class="controls flex">
  <div :class="{'btn-prev': true, 'disabled': isTransitioning}" @click="slidePrev">
    <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
      <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
      <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
      <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
    </svg>
  </div>

  <div :class="{'btn-next': true, 'disabled': isTransitioning}" @click="slideNext">
    <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
      <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
      <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
      <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
    </svg>
  </div>
  </div>
    </div>
    <div class="text md:flex md:justify-between">
      <div class="t1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">國際達麗，全球視野，世界建築</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">達麗從台灣到西雅圖，從建設到營建、商場，早已邁向國際化，每一座達麗建築都以與世界各大城市新建築比肩的標準檢視，跨國際推案、跨國團隊合作，不只成就達麗建築成為世界級建築，國際視野與世界觀更讓達麗跳脫單一建築個案思維，從環境與城市發展宏觀角度定位建築。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  padding: size-m(54) 0 size-m(29.5) 0;
  font-family: 'Noto Serif TC';
  @media screen and (min-width:768px) {
    padding: size(132) 0 size(127) 0;
  }
  .t0{
    width: 100%;top: 0;left: 0;z-index: 3;opacity: .3;pointer-events: none;
  }
  .slider {
    margin: 0 0 0 0;padding:0;
    width: 100%;
    height:size-m(413);
    @media screen and (min-width:768px) {
      height:size(715);
      position: relative;
      top:0;
    }
  }
  .swiper {
    height: 100%;padding:0;
    .swiper-slide {
      width:size-m(245);margin: 0;height: 100%;
      transition:transform 1.5s;
      transform:translate(0,8%);
      font-size: size-m(12);
      color: #000;
      line-height: 1.4;
      @media screen and (min-width:768px) {
        font-size: size(16);
        transform:translate(0,10%);
        width:size(495);
        transform-origin: 50% 0%;
      }
      > div{
        width:size-m(176);height:auto;margin: auto;
        transition:width 1.5s;overflow: hidden;
        @media screen and (min-width:768px) {
          width:size(360);
        }
      }
      img{
        width:100%;height:auto;margin: auto;
        transition:filter 1.5s;
        filter: grayscale(100%);
      }
      .st1,
      .st2 {
        opacity: .4;
        transition:opacity 1.5s;
      }
      .st1 {
        font-size: size-m(15);
        margin-top:.8em;
        @media screen and (min-width:768px) {
          font-size: size(23);
          margin-top:.4em;
        }
      }
      .st2{white-space: nowrap;}
      /* 動態變化跟詭異跳動的除錯 */
      &.swiper-slide-duplicate-active,
      &.swiper-slide-active{
        color: #000;
        transform:translate(-5%,0%);
        .st1,.st2 {opacity: .7}
        > div{width:size-m(270);}
        @media screen and (min-width:768px) {
          transform:translate(-8%,0%);
      > div{width:size(570);}
        }
        
      img{
        filter: grayscale(0%);
      }
      }
      &.swiper-slide-duplicate-next,
      &.swiper-slide-next{
        @media screen and (min-width:768px) {
          transform:translate(10%,10%);
        }
      }
      &.swiper-slide-duplicate-prev,
      &.swiper-slide-prev{
        @media screen and (min-width:768px) {
          transform:translate(-10%,10%);
        }  
      }
    }
  }
  .controls {
    justify-content: space-between;
    width: size-m(270);
    margin:size-m(-63)  auto  auto;
    @media screen and (min-width:768px) {
      width: size(1626);
      margin: size(-120) auto 0 auto;
    }

    .btn-prev, .btn-next {
      cursor: pointer;
      z-index: 1;
      .arrow-icon {
        opacity: 1;
        width: size-m(35);
        transition: transform ease-in-out 0.2s,opacity .2s;
        vertical-align: middle;
        @media screen and (min-width:768px) {
          width: size(50);
        }
        .cir {
          stroke-dasharray: 162;
          stroke-dashoffset: 162;
          transition: stroke-dashoffset ease-in-out 0.5s;
          fill: rgba(255, 255, 255, .5);
        }
        .arrow {
          transform: translateX(0%);
          opacity: 1;
        }
        @media screen and (min-width:768px) {
        &:hover {
          transform: scale(1);
          .cir {
            stroke-dashoffset: 0;
          }
          .arrow {
            animation: arrow ease-in-out 0.5s;
          }
        }
        }
        @keyframes arrow {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          30% {
            transform: translateX(30%);
            opacity: 0;
          }
          31% {
            transform: translateX(-30%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
      }
      &.disabled{
        cursor: progress;
        .arrow-icon {opacity: .5;
          .cir {
            stroke-dashoffset: 162;
          }
        }
      }
    }

    .btn-prev {
      transform: rotate(180deg);
    }
  }

  .t1 {
    color: #002B69;
    font-size: size-m(18);
    line-height: size-m(26);
    letter-spacing: .07em;
    font-weight: 700;
    padding: 0 size-m(52);
    margin-bottom: size-m(11);
    @media screen and (min-width:768px) {
      font-size: size(40);
      line-height: size(57);
      padding: 0;
      margin-bottom: 0;
    }
  }

  .text {
    @media screen and (min-width:768px) {
      width: size(1626);
      margin: 0 auto;
    }
  }

  .t2 {
    font-weight: 500;
    color: #333333;
    font-size: size-m(14);
    line-height: 170%;
    padding: 0 size-m(52);
    margin-bottom: size-m(47.5);
    @media screen and (min-width:768px) {
      font-size: size(20);
      padding: 0;
      margin-bottom: 0;
      width: size(867);
    }
  }
}

</style>

<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);

const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const swiperInstance = ref(null);
const isTransitioning = ref(false);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
}

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};
const onTransitionStart = () => {
  isTransitioning.value = true;
};

const onTransitionEnd = () => {
  isTransitioning.value = false;
};

const imgs = [
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    st1: "KODA ON 5TH AVE",
    st2: "450 S Main St, Seattle, WA 98104 USA"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    st1: "世界灣",
    st2: "新北市淡水區"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    st1: "達麗天蒔",
    st2: "台北市北投區"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    st1: "陽明大苑",
    st2: "台北市士林區"
  },
  {
    img:new URL("./s5/5.jpg", import.meta.url).href ,
    st1: "達麗101",
    st2: "台北市信義區"
  },
]
</script>

