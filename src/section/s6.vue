<template>
  <section class="s6 w-full relative text-white">
    <img class="line absolute top-0 left-0 w-full md:hidden" src="@/section/s6/line.svg">
    <img class="line absolute top-0 right-0 hidden md:block" src="@/section/s6/line2.svg">
    <div class="ccontainer">
      <div class="md:flex md:items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1">千坪陽光花園 奢華散步</div>
        <div class="t2 md:hidden">收藏一座奢華花園！蝶飛鳥鳴、花樹雲影，彷彿漫步大自然中，感受陽光綠意美好風景。</div>
        <div class="t2 hidden md:block">奢華就是在家收藏一座大花園！蝶飛鳥鳴、花樹雲影，漫步在精心植栽的大自然裡，感受陽光綠意帶來的美好風景。</div>
      </div>
      <div class="img relative">
        <img class="block w-full" src="@/section/s6/img.webp">
        <div class="txt absolute">建築外觀3D情境示意圖</div>
      </div>
      <div class="md:flex md:items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1">幸福時光 每天來點正能量</div>
        <div class="t2 p2 md:hidden">生活需要儀式感！精心規劃藝術門廳、閱覽區、健身房、童話館，下班放學生活超紓壓！</div>
        <div class="t2 p2 hidden md:block">生活需要儀式感！精心規劃的藝術門廳、閱覽區、健身房、童話館、戶外遊戲區，讓下班放學後的生活超紓壓，全家大小各擁一片天地，享受專屬你的休閒樂趣！</div>
      </div>
    </div>
    <div class="slider">
      <swiper
        :loop="true"
        :navigation="false"
        :pagination="{
          clickable: true,
        }"
        :slidesPerView="'auto'"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @init="init"
        @click="clickSlide"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s6/slider/1.webp" />
            <div class="txt">雅石迎賓門廳示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s6/slider/2.webp" />
            <div class="txt">澄心交誼空間示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s6/slider/3.webp" />
            <div class="txt">維尼童話館示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s6/slider/4.webp" />
            <div class="txt">原創會議室示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s6/slider/5.webp" />
            <div class="txt">柏克健身房示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="slide-prev" @click="slidePrev">
        <svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15.5" r="15.5" transform="matrix(-1 0 0 1 31 0)" fill="white"/>
          <path d="M18.7295 24.5416L8.39616 14.8541" stroke="#E5005C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.7295 5.8124L8.39616 14.8541" stroke="#E5005C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="slide-next" @click="slideNext">
        <svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15.5" r="15.5" fill="white"/>
          <path d="M12.2705 24.5416L22.6038 14.8541" stroke="#E5005C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.2705 5.8124L22.6038 14.8541" stroke="#E5005C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <img class="mask md:hidden pointer-events-none absolute w-full bottom-0 left-0" src="@/section/s6/mask.svg" />
      <div class="mask hidden md:block pointer-events-none"></div>
    </div>
    <div class="ccontainer">
      <div class="en text-[#EBA492]">Enjoying the greenery and leisurely pleasures right at home.</div>
    </div>
  </section>

  <div v-if="showPop" id="s6-popup" class="bg-[#E5005C] text-white">
    <svg @click="showPop = false" class="popup-close" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2.70711" y1="1.29289" x2="28.7071" y2="27.2929" stroke="white" stroke-width="2"/>
      <line y1="-1" x2="36.7696" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 28 2)" stroke="white" stroke-width="2"/>
    </svg>
    <div class="txt">左右滑動可看全圖</div>
    <div class="img">
      <img v-if="clickedIndex === 0" src="@/section/s6/slider/1.webp" @load="onImgLoad($event)" />
      <img v-if="clickedIndex === 1" src="@/section/s6/slider/2.webp" @load="onImgLoad($event)" />
      <img v-if="clickedIndex === 2" src="@/section/s6/slider/3.webp" @load="onImgLoad($event)" />
      <img v-if="clickedIndex === 3" src="@/section/s6/slider/4.webp" @load="onImgLoad($event)" />
      <img v-if="clickedIndex === 4" src="@/section/s6/slider/5.webp" @load="onImgLoad($event)" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  padding: size-m(59) 0 size-m(48);
  text-align: center;
  @media screen and (min-width:768px) {
    padding: size(193) 0 size(125);
    text-align: left;
  }

  .line {
    @media screen and (min-width:768px) {
      width: size(1390);
    }
  }

  .ccontainer {
    @media screen and (min-width:768px) {
      padding: 0 size(236);
    }
  }

  .t1 {
    padding: 0 size-m(30);
    font-size: size-m(25);
    line-height: size-m(34);
    margin-bottom: size-m(13);
    font-weight: 700;
    @media screen and (min-width:768px) {
      padding: 0;
      font-size: size(58);
      line-height: size(79);
      margin-bottom: 0;
      margin-right: size(53);
    }
  }

  .t2 {
    padding: 0 size-m(30);
    font-size: size-m(14);
    line-height: 178%;
    margin-bottom: size-m(28);
    @media screen and (min-width:768px) {
      width: size(634);
      padding: 0;
      font-size: size(18);
      margin-bottom: 0;

      &.p2 {
        width: size(688);
      }
    }
  }

  .img {
    margin-bottom: size-m(41);
    @media screen and (min-width:768px) {
      margin: size(32) 0 size(61);
    }

    .txt {
      bottom: size-m(6);
      left: size-m(11);
      font-size: size-m(12);
      @media screen and (min-width:768px) {
        bottom: size(17);
        left: size(25);
        font-size: size(16);
      }
    }
  }

  .slider {
    position: relative;
    height: size-m(212);
    margin-bottom: size-m(23);
    @media screen and (min-width:768px) {
      height: size(559 + 47);
      margin: size(29) 0 size(68);
      padding-bottom: size(47);;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        top: 0;
        right: 0;
        width: size(60);
        height: 100%;
        background: #E5005C;
      }
    }

    .swiper {
      overflow: visible;
    }

    .swiper-slide {
      width: 100%;
      @media screen and (min-width:768px) {
        width: size(992);
        margin-right: size(33);
      }

      img {
        display: block;
        width: 100%;
        height: size-m(212);
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: size(559);
        }
      }

      .txt {
        position: absolute;
        top: size-m(6);
        left: size-m(11);
        font-size: size-m(12);
        @media screen and (min-width:768px) {
          top: auto;
          bottom: size(17);
          left: size(25);
          font-size: size(16);
        }
      }
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        line-height: 1;
        bottom: -2vw;
      }

      .swiper-pagination-bullet {
        background: #fff;
        opacity: 0.5;
        width: size(8);
        height: size(8);
        margin: 0 size(5) !important;

        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }

    .slide-prev, .slide-next {
      width: size-m(31);
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: size-m(14);
      transform: translate(0, -50%);
      z-index: 1;
      @media (min-width: 768px) {
        width: size(31);
        top: auto;
        bottom: 0;
        left: 50%;
        transform: translate(calc(-50% - 3.7vw), 0);
      }
      
      svg {
        display: block;
        width: 100%;
      }
    }

    .slide-next {
      left: auto;
      right: size-m(14);
      @media (min-width: 768px) {
        left: 50%;
        right: auto;
        transform: translate(calc(-50% + 3.7vw), 0);
      }
    }

    .mask {
      width: 100%;
      z-index: 1;
      @media (min-width: 768px) {
        position: absolute;
        top: 0;
        right: 0;
        width: size(836);
        height: 100%;
        background: linear-gradient(270deg, #DB0058 0%, rgba(219, 0, 88, 0.00) 100%);
      }
    }
  }

  .en {
    padding: 0 size-m(35);
    font-size: size-m(17);
    line-height: size-m(23);
    letter-spacing: 0.04em;
    text-align: left;
    @media screen and (min-width:768px) {
      padding: 0;
      font-size: size(26);
      line-height: size(35);
      letter-spacing: 0.28em;
    }
  }
}

#s6-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  padding: size-m(76) 0 size-m(84);

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(306);
    background: linear-gradient(180deg, #9C003F 0%, #E5005C 100%);
    transform: rotate(180deg);
  }

  .popup-close {
    position: absolute;
    top: size-m(32);
    right: size-m(27);
    width: size-m(26);
    cursor: pointer;
  }

  .txt {
    position: absolute;
    bottom: size-m(27);
    left: 0;
    width: 100%;
    text-align: center;
    font-size: size-m(20);
    font-weight: 700;
  }

  .img {
    position: relative;
    width: 100%;
    height: 100%;
    background: gray;
    overflow-y: auto;

    img {
      max-width: none;
      width: auto;
      height: 100%;
    }
  }
}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper";
const modules = ref([Autoplay, Navigation, Pagination]);
const swiperRef = ref(null);
const showPop = ref(false);
const clickedIndex = ref(0);
const globals = getCurrentInstance().appContext.config.globalProperties;

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

const clickSlide = (swiper, event) => {
  if ( globals.$isMobile() ) {
    const idx = swiper.realIndex;
    clickedIndex.value = idx;
    showPop.value = true;
  }
}

function onImgLoad(e) {
  const img = e.target;
  const wrapper = img.parentNode;
  if (img) {
    wrapper.scrollLeft = img.clientWidth * 0.5 - wrapper.clientWidth/2;
  }
}
</script>