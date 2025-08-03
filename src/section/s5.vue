<template>
  <section class="s5 user-n w-full relative">
    <div class="line1 md:hidden"></div>
    <div class="line2 md:hidden"></div>
    <div class="line3 hidden md:block"></div>
    <div class="text text1">
      <div class="title">國家級重劃之王<br>三大科技園區眾星拱月</div>
      <div>副都心從中央行政院合署辦公室到七大部會進駐，完美再現信義計畫區的成功方程式，再以800公頃溪北計畫三大科技新創園區，從通訊、製造到創新技術串接，預估創造逾20萬就業機會，讓人流與金流同步到位，偕同新北CBD副都心面向全球經濟市場，20家金融總部雲集，資本能量全面發動，這場經濟奇蹟，早已從建設期跨入收成期，KING PARK國王大道穩坐國家級佈局的產業核心，讓城市的成長到榮景，主角始終是你。</div>
    </div>
    <div class="tk-tabs">
      <div class="tk-tab" :class="{ active: activeSlideIdx === 0 }" @click="slideTo(0)">中央合署辦公大樓</div>
      <div class="tk-tab" :class="{ active: activeSlideIdx === 1 }" @click="slideTo(1)">電影文化中心</div>
      <div class="tk-tab" :class="{ active: activeSlideIdx === 2 }" @click="slideTo(2)">塭仔圳溼地公園</div>
      <div class="tk-tab" :class="{ active: activeSlideIdx === 3 }" @click="slideTo(3)">中港綠堤</div>
      <div class="tk-tab" :class="{ active: activeSlideIdx === 4 }" @click="slideTo(4)">凱悅嘉軒飯店</div>
      <div class="tk-tab" :class="{ active: activeSlideIdx === 5 }" @click="slideTo(5)">宏匯百貨廣場</div>
    </div>

    <div class="slider">
      <swiper
        :pagination="{
          clickable: true
        }"
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
          slideShadows: true,
        }"
        :loop="false"
        :navigation="true"
        :breakpoints="{
          '768': {
            coverflowEffect: {
              rotate: 0,
              stretch: '47.4%',
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }
          },
        }"
        :modules="modules"
        @swiper="init"
        @slideChange="slideChange"
      >
        <swiper-slide v-for="slide in slides">
          <div class="relative">
            <img :src="getImg(`./s5/${slide.img}`)" />
            <div class="info">{{slide.label}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="text text2">
      <div class="title">影城、百貨全到位<br>舉步間盡是繁華</div>
      <div>在副都心最核心的位置，日常生活輕鬆接軌國際繁華，漫步宏匯百貨廣場，相伴國賓、美麗新雙影城，休閒娛樂隨時上映，凱悅嘉軒飯店進駐，日常即是尊榮場域，同享昌平、福壽、中原生活商圈，日常採買應有盡有，舉步間，城市最豐富的能量一次全到位。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  padding: size-m(70) 0 size-m(9) 0;
  text-align: justify;
  font-size: size-m(14);
  line-height: 160%;
  letter-spacing: .08em;
  z-index: 1;
  @media screen and (min-width:768px) {
    padding: 0;
    font-size: size(16);
    height: size(1558);
  }

  .line1 {
    position: absolute;
    top: calc(157 / 1089 * 100%);
    left: 0;
    width: calc(347.5 / 375 * 100%);
    height: calc(404.5 / 1089 * 100%);
    background-image: url('data:image/svg+xml,<svg width="348" height="406" viewBox="0 0 348 406" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.5 1H307C329.091 1 347 18.9086 347 41V405.5" stroke="url(%23paint0_linear_117_1303)" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_117_1303" x1="-643.001" y1="-411.999" x2="1345" y2="702.001" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.485577" stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>');
    background-size: 100% 100%;
    z-index: -1;
  }

  .line2 {
    position: absolute;
    bottom: calc(5.5 / 1089 * 100%);
    right: 0;
    width: calc(347.5 / 375 * 100%);
    height: calc(404.5 / 1089 * 100%);
    background-image: url('data:image/svg+xml,<svg width="348" height="405" viewBox="0 0 348 405" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M348.5 404.5L41 404.5C18.9086 404.5 1 386.591 1 364.5L1 0" stroke="url(%23paint0_linear_117_1305)" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_117_1305" x1="991.001" y1="817.499" x2="-997.001" y2="-296.501" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.485577" stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>');
    background-size: 100% 100%;
    z-index: -1;
  }

  .line3 {
    position: absolute;
    top: size(314);
    left: 0;
    width: 100%;
    height: calc(1048 / 1558 * 100%);
    background-image: url('data:image/svg+xml,<svg width="1919" height="1050" viewBox="0 0 1919 1050" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-1 1H887C909.091 1 927 18.9086 927 41V1009C927 1031.09 944.909 1049 967 1049H1919" stroke="url(%23paint0_linear_114_244)" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_114_244" x1="-37" y1="-37" x2="1951" y2="1077" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.485577" stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>');
    background-size: 100% 100%;
    z-index: -1;
  }

  .text {
    padding: 0 size-m(37);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(676);
    }
  }

  .text1 {
    margin-bottom: size-m(40);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
      position: absolute;
      top: size(191);
      left: size(196);
    }
  }

  .text2 {
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(1245);
      left: size(1048);
    }

    .title {
      text-align: right;
      padding: 0 size-m(5 + 18) 0 0;
      @media screen and (min-width:768px) {
        text-align: left;
        padding: 0 0 0 size(7 + 18);
      }

      &:after {
        left: auto;
        right: 0;
        @media screen and (min-width:768px) {
          left: 0;
          right: auto;
        }
      }
    }
  }
  
  .title {
    font-size: size-m(24);
    line-height: 145.833%;
    margin-bottom: size-m(40);
    padding: 0 0 0 size-m(5 + 18);
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(40);
      line-height: size(48);
      margin-bottom: size(41);
      padding: 0 0 0 size(7 + 18);
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: size-m(5);
      height: size-m(57);
      background: #fff;
      @media screen and (min-width:768px) {
        width: size(7);
        height: size(88);
      }
    }
  }

  .tk-tabs {
    padding: 0 size-m(17);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: size-m(35 - 10 - 16);
    @media screen and (min-width:768px) {
      padding: 0;
      margin-bottom: 0;
      position: absolute;
      top: size(378);
      right: size(196);
      width: size(504);
    }

    .tk-tab {
      font-size: size-m(12);
      line-height: 1;
      letter-spacing: .04em;
      width: calc(110 / 340 * 100%);
      height: size-m(24);
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: size-m(1) solid #fff;
      border-radius: size-m(4);
      margin-bottom: size-m(10);
      @media screen and (min-width:768px) {
        font-size: size(16);
        width: calc(160 / 504 * 100%);
        height: size(35);
        border: size(1) solid #fff;
        border-radius: size(4);
        margin-bottom: size(12);
      }

      &.active {
        background: #fff;
        color: #003B8C;
      }
    }
  }

  .slider {
    padding-top: size-m(16);
    margin: 0 size-m(14);
    margin-bottom: size-m(26);
    padding-bottom: size-m(49);
    overflow: hidden;
    /* background: green; */
    @media screen and (min-width:768px) {
      padding-top: size(16);
      margin: 0;
      padding-bottom: 0;
      position: absolute;
      top: size(524);
      left: size(196);
      right: size(196);
    }

    .swiper {
      overflow: visible;

      .swiper-pagination {
        bottom: -23%;
        line-height: 1;
        margin: 0;

        .swiper-pagination-bullet {
          width: size-m(10);
          height: size-m(10);
          border: size-m(1) solid #fff;
          border-radius: 50%;
          opacity: 1;
          background: none;
          margin: 0 size-m(4);
          @media screen and (min-width:768px) {
            display: none;
          }

          &.swiper-pagination-bullet-active {
            background: #fff;
          }
        }
      }

      .swiper-button-prev, .swiper-button-next {
        width: size-m(45);
        height: size-m(45);
        background: rgba(255, 255, 255, 0.90);
        border: size-m(1) solid #E4EAF8;
        margin: 0;
        transform: translate(0, -50%);
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: size-m(15.75) auto;
        @media screen and (min-width:768px) {
          width: size(78);
          height: size(78);
          border: size(1) solid #E4EAF8;
          background-size: size(28) auto;
        }

        &:after {
          display: none;
        }

        &.swiper-button-prev {
          left: 0;
          background-image: url('data:image/svg+xml,<svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.375 5.5L1.625 5.5M1.625 5.5L5 2.125M1.625 5.5L5 8.875" stroke="%23252432" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
          @media screen and (min-width:768px) {
            left: size(190);
          }
        }

        &.swiper-button-next {
          left: auto;
          right: 0;
          background-image: url('data:image/svg+xml,<svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.625 5.5L17.375 5.5M17.375 5.5L14 2.125M17.375 5.5L14 8.875" stroke="%23252432" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
          @media screen and (min-width:768px) {
            right: size(190);
          }
        }
      }
      
      .swiper-slide {
        width: calc(300 / 346 * 100%);
        border-radius: size-m(8);
        overflow: hidden;
        box-shadow: 0 0 size-m(16) 0 rgba(0, 0, 0, 0.4);
        background: #2E5FE1;
        @media screen and (min-width:768px) {
          width: calc(899 / 1528.2 * 100%);
          border-radius: size(8);
          box-shadow: 0 0 size(16) 0 rgba(0, 0, 0, 0.4);
        }

        & > div {
          opacity: 0.6;
          @media screen and (min-width:768px) {
            opacity: 0.75;
          }
        }

        &.swiper-slide-active > div {
          opacity: 1;
        }
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      background: rgba(255, 255, 255, 0.80);
      backdrop-filter: blur(size-m(2));
      padding: size-m(8);
      color: #003B8C;
      font-size: size-m(14);
      line-height: size-m(17);
      @media screen and (min-width:768px) {
        backdrop-filter: blur(size(4));
        padding: size(18);
        font-size: size(20);
        line-height: size(24);
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
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
const modules = ref([Autoplay, EffectCoverflow, Navigation, Pagination]);
const images = import.meta.globEager('./s5/*.*');

const getImg = path => images[path]?.default || '';
const slides = ref([
  {
    img: '1.jpg',
    label: '中央合署辦公大樓實景圖'
  },
  {
    img: '2.jpg',
    label: '電影文化中心實景圖'
  },
  {
    img: '3.jpg',
    label: '塭仔圳溼地公園實景圖'
  },
  {
    img: '4.jpg',
    label: '中港綠堤實景圖'
  },
  {
    img: '5.jpg',
    label: '凱悅嘉軒飯店實景圖'
  },
  {
    img: '6.jpg',
    label: '宏匯百貨廣場實景圖'
  },
]);

const sliderRef = ref();
const activeSlideIdx = ref(0);

const init = (swiper) => {
  sliderRef.value = swiper;
}

const slideChange = (swiper) => {
  activeSlideIdx.value = swiper.realIndex;
}

const slideTo = (idx) => {
  sliderRef.value.slideTo(idx);
}
</script>