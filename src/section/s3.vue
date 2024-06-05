<template>
  <section class="s3 relative">
    <div class="content absolute">
      <div class="t1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">富人水岸，科技新創，價值未來</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">台北市第一個真正回歸水岸生活、融合自然的國際濱水城區</div>
      <div class="t3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">北士科94.38公頃，規劃為城市生活區、主要產業核心區及水岸融合區。新洲美水岸融合區，親水超級堤防、水岸步道、公園綠地、自行車道、遊艇碼頭…，引入水岸商業步行街區，成為台北市第一個真正回歸水岸生活、融合自然的國際化濱水城區。將以國際水岸特區為台北未來城市生活樹立嶄新典範。</div>
    </div>
    <div class="slider" data-aos="fade">
      <swiper  class="slide"
        :slidesPerView="'auto'" 
        :spaceBetween="0"
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
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </swiper-slide>
      </swiper>
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


  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size-m(867);
  @media screen and (min-width:768px) {
    height: size(1080);
  }
  .slider {
    margin: 0 0 0 0;padding:0;
    width: 100%;
      height:size-m(520);
  @media screen and (min-width:768px) {
      height:size(700);
      position: relative;
      top: size(100);
  }
.swiper {height: 100%;padding:0;

      .swiper-slide {
          width:size-m(375);margin: 0;height: 100%;
          transition:transform 1.5s,opacity 1s .2s;
  @media screen and (min-width:768px) {
    width:size(910);
    transform-origin: 50% 0%;
  }
  img{width: 100%;height:auto;}
  .caption{position: absolute;top: .5em;right: 1em;color:#fff;font-size:size-m(12);
  @media screen and (min-width:768px) {
    font-size:size(15);
  }
  
  }
  /* 動態變化跟詭異跳動的除錯 */
  opacity: 0;
  &.swiper-slide-duplicate-active,
  &.swiper-slide-active{
    transform: translateY(47%);opacity: 1;
    @media screen and (min-width:768px) {
      transform: translate(16%,0%);
    }
  }
  &.swiper-slide-duplicate-next,
  &.swiper-slide-duplicate-next + .swiper-slide,
  &.swiper-slide-next,
  &.swiper-slide-next  + .swiper-slide{opacity: 1;
    transform:translate(-114%,-15%)scale(.51);
    @media screen and (min-width:768px) {
      transform:translate(12%,0%)scale(.65);
    }
  }
  &.swiper-slide-duplicate-next + .swiper-slide,
  &.swiper-slide-next  + .swiper-slide{
    opacity: 0;
  }
  &.swiper-slide-duplicate-prev,
  &.swiper-slide-prev{
    transform:translate(0,47%);opacity: 0;
    @media screen and (min-width:768px) {
      transform: translate(-16%,0%);
    }  
  }
  }
  }
  }
  

  .btn-prev, .btn-next {
    position: absolute;
    top: size-m(160);
    left: size-m(287);
    cursor: pointer;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(606.25);
      left: size(1725.08);
    }

    .arrow-icon {
      opacity: 1;
      width: size-m(35);
      transition: transform ease-in-out 0.2s,opacity .2s;
      vertical-align: middle;
      @media screen and (min-width:768px) {
        width: size(59.02);
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
    top: size-m(51);
    transform: rotate(180deg);
    @media screen and (min-width:768px) {
      top: size(606.25);
      left: size(1220);
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: size-m(36.27) size-m(52.5) size-m(38);
    background-image: url(@/section/s3/bg-m.webp);
    background-size: 100% 100%;
    font-weight: 700;
    @media screen and (min-width:768px) {
      width: 100%;
      height: size(640);
      background-image: url(@/section/s3/bg.webp);
      padding: 0;

      &:after {
        content: '';
        position: absolute;
        top: size(402.97);
        left: size(148);
        width: size(1626);
        height: size(0.5);
        background: #666666;
      }
    }

    .t1 {
      color: #002B69;
      font-size: size-m(18);
      line-height: 1.44;
      letter-spacing: .07em;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(2);
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(441);
        left: size(148);
        font-size: size(40);
      }
    }

    .t2 {
      color: #000;
      font-size: size-m(13);
      line-height: 170%;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(8);
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(504.5);
        left: size(148);
        font-size: size(23);
      }
    }

    .t3 {
      font-weight: 500;
      color: #333333;
      font-size: size-m(14);
      line-height: 170%;
      font-family: 'Noto Serif TC';
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(444);
        left: size(869);
        width: size(905);
        font-size: size(20);
      }
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
    img:new URL("./s3/01.webp", import.meta.url).href ,
    caption: "雙溪遊艇碼頭"
  },
  {
    img:new URL("./s3/02.webp", import.meta.url).href ,
    caption: "雙溪遊艇碼頭"
  },
  {
    img:new URL("./s3/03.webp", import.meta.url).href ,
    caption: "河雙21號河濱公園"
  },
  {
    img:new URL("./s3/04.webp", import.meta.url).href ,
    caption: "河雙21號河濱公園"
  },
  {
    img:new URL("./s3/05.webp", import.meta.url).href ,
    caption: "台北科學藝術園區-童新樂園"
  },
  {
    img:new URL("./s3/06.webp", import.meta.url).href ,
    caption: "台北科學藝術園區-科學教育館"
  },
]
</script>

