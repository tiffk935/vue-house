<template>
  <section class="s4 user-n w-full relative bg-[#E5005C] text-white">
    <img class="ball-orange1 absolute" src="@/section/balls/orange.png" />
    <img class="ball-orange2 absolute" src="@/section/balls/orange.png" />
    <img class="ball-orange3 absolute hidden md:block" src="@/section/balls/orange.png" />
    <img class="ball-orange4 absolute hidden md:block" src="@/section/balls/orange.png" />
    <img class="ball-purple1 absolute" src="@/section/balls/purple.png" />
    <img class="ball-purple2 absolute md:hidden" src="@/section/balls/purple.png" />
    <img class="ball-green1 absolute" src="@/section/balls/green.png" />
    <img class="ball-green2 absolute hidden md:block" src="@/section/balls/green.png" />
    <img class="ball-green3 absolute hidden md:block" src="@/section/balls/green.png" />
    <img class="ball-blue1 absolute" src="@/section/balls/blue.png" />
    <img class="ball-blue2 absolute" src="@/section/balls/blue.png" />
    <img class="ball-yellow1 absolute" src="@/section/balls/yellow.png" />

    <div class="md:flex md:justify-between md:items-end">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1"><span>10</span> 分鐘 商圈生活一把抓</div>
        <div class="t2 md:hidden">
          沙鹿⾞站核⼼商圈，⽣活採買、醫療、學區、運動公園樣樣⿑全，完美機能超便利。
        </div>
        <div class="t2 hidden md:block">
          從麥當勞到星巴克，全聯到家樂福，金融銀行到行政機關，以沙鹿車站為核心的市區商圈，樣樣齊全。<br>
          醫療、學區、運動公園，全機能超便利。中正國小、梧棲中學九年國教優質校園，父母就近接送最安心。
        </div>
      </div>
      <div class="slider1-wrapper relative">
        <img class="slider-btn absolute md:hidden" src="@/section/s4/btn.svg" @click="clickMap(1)" />
        <div class="slider1 relative">
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
            @init="init1"
          >
            <swiper-slide>
              <div class="relative">
                <img src="@/section/s4/slider1/1.webp" />
                <div class="txt">⾞站商圈實景</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative">
                <img src="@/section/s4/slider1/2.webp" />
                <div class="txt">星巴克</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative">
                <img src="@/section/s4/slider1/3.webp" />
                <div class="txt">家樂福</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative">
                <img src="@/section/s4/slider1/4.webp" />
                <div class="txt">三井Outlet</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative">
                <img src="@/section/s4/slider1/5.webp" />
                <div class="txt">沙鹿運動公園</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative">
                <img src="@/section/s4/slider1/6.webp" />
                <div class="txt">梧棲童綜合醫院</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="slide-prev" @click="slidePrev1">
          <svg viewBox="0 0 8 8" fill="#FFF" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#E5005C" stroke-linecap="round" stroke-linejoin="round" d="M4.8,1.5L2.2,3.8l2.7,2.5"/></svg>
        </div>
        <div class="slide-next" @click="slideNext1">
          <svg viewBox="0 0 8 8" fill="#FFF" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#E5005C" stroke-linecap="round" stroke-linejoin="round" d="M3.2,6.5l2.7-2.3L3.2,1.7"/></svg>
        </div>
      </div>
    </div>
    <div class="main-map hidden md:block">
      <img class="block w-full" src="@/section/s4/map1.png" />
    </div>
    <div class="slider2">
      <swiper
        :loop="true"
        :navigation="false"
        :pagination="false"
        :slidesPerView="'auto'"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @init="init2"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/1.webp" />
            <div class="txt">捷運藍線示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/2.webp" />
            <div class="txt">沙鹿車站示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/3.webp" />
            <div class="txt">雙大道交匯暢快動線</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/4.webp" />
            <div class="txt">台灣大道</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/5.webp" />
            <div class="txt">台中機場</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/6.webp" />
            <div class="txt">台中港</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/7.webp" />
            <div class="txt">台中科學園區</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s4/slider2/8.webp" />
            <div class="txt">精密科技園區</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="slide-prev" @click="slidePrev2">
          <svg viewBox="0 0 8 8" fill="#FFF" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#E5005C" stroke-linecap="round" stroke-linejoin="round" d="M4.8,1.5L2.2,3.8l2.7,2.5"/></svg>
      </div>
      <div class="slide-next" @click="slideNext2">
          <svg viewBox="0 0 8 8" fill="#FFF" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4"/><path stroke="#E5005C" stroke-linecap="round" stroke-linejoin="round" d="M3.2,6.5l2.7-2.3L3.2,1.7"/></svg>
      </div>
    </div>
    <div class="md:flex md:justify-end md:items-center md:flex-row-reverse">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1">一快雙軌三高 動能大利多</div>
        <div class="t2 bt2  md:hidden">距藍線B4站僅約1km，收納⼤台中⽣活版圖。快速銜接台61快、三國道，往返全台好便捷！</div>
        <div class="t2 bt2 hidden md:block">【大境】距離藍線B4站僅約1Km，東西悠遊，接軌綠線，收納大台中精華生活。開車出門暢行台灣大道、中華路，銜接台61快、串連三國道，往返全台、通勤中科產業鍊，條條大路快意馳騁。</div>
      </div>
      <div class="map-preview" @click="clickMap(2)">
        <img class="block w-full" src="@/section/s4/map-preview.jpg" />
      </div>
    </div>
  </section>

  <div v-if="showPop" id="s4-popup" class="bg-[#E5005C] text-white">
    <svg @click="showPop = false" class="popup-close md:hidden" viewBox="0 0 28 28" fill="none" stroke="#FFF" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M1,1l26,26 M27,1L1,27"/></svg>
    <svg @click="showPop = false" class="popup-close hidden md:block" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="23.7109" cy="24.0303" r="23.2109" fill="white"/>
      <path d="M12.9683 34.904L34.2587 13.6136" stroke="#E5005C" stroke-width="2" stroke-linecap="round"/>
      <path d="M12.9683 13.6136L34.2587 34.904" stroke="#E5005C" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div class="txt">左右滑動可看全圖</div>
    <div class="img">
      <img v-if="map === 1" src="@/section/s4/map1.png" @load="onImgLoad($event)" />
      <img v-if="map === 2" src="@/section/s4/map2.png" @load="onImgLoad($event)" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  padding: size-m(70) 0 size-m(50);
  @media (min-width: 768px) {
    padding: size(63) size(210) size(280);
  }

  .ball-orange1 {
    top: size-m(53);
    left: size-m(219);
    width: size-m(33);
    transform: translateY(size-m(10));
    animation: ball 2s ease-in-out 0s infinite alternate;
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(119);
      left: size(679);
      width: size(107);
      opacity: .7;
      transform: translateY(size(20));
    }
  }

  .ball-orange2 {
    top: size-m(258);
    left: size-m(-25);
    width: size-m(102);
    opacity: .65;
    z-index: 12;
    transform: translateY(size-m(-20));
    animation: ball 3s ease-in-out 0s infinite alternate;
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(471);
      left: size(-278);
      width: size(471);
      transform: translateY(size(40));
    }
  }

  .ball-orange3 {
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(2475);
      left: size(1155);
      width: size(59);
      opacity: .62;
      transform: translateY(size(-30));
      animation: ball 3s ease-in-out 1s infinite alternate;
    }
  }

  .ball-orange4 {
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(2589);
      left: size(1469);
      width: size(236);
      opacity: .65;
      z-index: 1;
      transform: translateY(size(-40));
      animation: ball 3s ease-in-out 0s infinite alternate;
    }
  }

  .ball-purple1 {
    top: size-m(-58);
    left: size-m(232);
    width: size-m(151);
    transform: translateY(size-m(30));
    animation: ball 5s ease-in-out 1s infinite alternate;
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(2486);
      left: size(1002);
      width: size(75);
      opacity: .53;
      transform: translateY(size(20));
      animation: ball 3s ease-in-out 0s infinite alternate;
    }
  }

  .ball-purple2 {
    top: size-m(585);
    left: size-m(96);
    width: size-m(29);
    z-index: 12;
    opacity: .53;
  }

  .ball-green1 {
    top: size-m(30);
    left: size-m(332);
    width: size-m(71);
    opacity: .68;
    transform: translateY(size-m(30));
    pointer-events: none;
    animation: ball 3s ease-in-out 1s infinite alternate;
    @media (min-width: 768px) {
      top: size(0);
      left: size(886);
      width: size(191);
      opacity: .68;
      transform: translateY(size(40));
      animation: ball 3.5s ease-in-out 1s infinite alternate;
    }
  }

  .ball-green2 {
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(2397);
      left: size(955);
      width: size(47);
      opacity: .68;
      transform: translateY(size(40));
      animation: ball 3.5s ease-in-out 1s infinite alternate;
    }
  }

  .ball-green3 {
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(2098);
      left: size(1646);
      width: size(475);
      opacity: .68;
      transform: translateY(size(-40));
      animation: ball 3.5s ease-in-out 0s infinite alternate;
    }
  }

  .ball-blue1 {
    top: size-m(495);
    left: size-m(4);
    width: size-m(96);
    z-index: 12;
    opacity: .7;
    transform: translateY(size-m(30));
    animation: ball 3.5s ease-in-out 1s infinite alternate;
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(2382);
      left: size(647);
      width: size(308);
      opacity: .62;
      transform: translateY(size(-20));
      animation: ball 3s ease-in-out 0s infinite alternate;
    }
  }

  .ball-blue2 {
    bottom: size-m(-90);
    left: size-m(-67);
    width: size-m(180);
    z-index: 12;
    opacity: .95;
    transform: translateY(size-m(-30));
    animation: ball 4s ease-in-out 1s infinite alternate;
    pointer-events: none;
    @media (min-width: 768px) {
      bottom: auto;
      top: size(2421);
      left: size(-308);
      width: size(810);
      opacity: .95;
      z-index: 12;
      transform: translateY(size(20));
      animation: ball 2s ease-in-out 0s infinite alternate;
    }
  }

  .ball-yellow1 {
    top: size-m(814);
    left: size-m(334);
    width: size-m(44);
    opacity: .62;
    transform: translateY(size-m(30));
    animation: ball 3.5s ease-in-out 1s infinite alternate;
    pointer-events: none;
    @media (min-width: 768px) {
      top: size(2082);
      left: size(1396);
      width: size(146);
      opacity: .62;
      transform: translateY(size(30));
      animation: ball 2.5s ease-in-out 0s infinite alternate;
    }
  }
  
  .t1 {
    text-align: center;
    font-size: size-m(25);
    line-height: size-m(34);
    font-weight: 700;
    margin-bottom: size-m(13);
    @media (min-width: 768px) {
      text-align: left;
      font-size: size(58);
      line-height: size(79);
      margin-bottom: size(24);
    }
    
    span {
      font-size: size-m(77);
      line-height: 1;
      letter-spacing: -0.07em;
      @media (min-width: 768px) {
        font-size: size(179);
      }
    }
  }

  .t2 {
    padding: 0 size-m(25);
    text-align: center;
    font-size: size-m(14);
    line-height: 178%;
    @media (min-width: 768px) {
      padding: 0;
      text-align: left;
      font-size: size(18);
      line-height: 178%;
      letter-spacing: 0.04em;
      width: size(864);

      &.bt2 {
        width: size(653);
      }
    }
  }

  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    img {
      display: block;
      height: 100%;width: 100%;
      object-fit: cover;
    }

    .txt {
      position: absolute;
      bottom: size-m(4);
      right: size-m(6);
      font-size: size-m(12);
      text-shadow: size-m(0) size-m(4) size-m(4) rgba(0, 0, 0, 0.80);
      @media (min-width: 768px) {
        bottom: size(11);
        right: size(16);
        font-size: size(16);
        text-shadow: size(0) size(4) size(4) rgba(0, 0, 0, 0.80);
      }
    }
  }

  .swiper-pagination {
    display: none;
    @media (min-width: 768px) {
      display: block;
      line-height: 1;
      top: -2vw;
      left: 2.2vw !important;
      bottom: auto !important;
      width: auto !important;
    }

    .swiper-pagination-bullet {
      background: #fff;
      opacity: .6;
      width: size(8);
      height: size(8);
      margin: 0 size(5) !important;

      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }

  .slide-prev, .slide-next {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: size-m(31);
    cursor: pointer;
    z-index: 11;
    @media (min-width: 768px) {
      top: 0;
      left: 0;
      transform: translate(0, 0);
      width: size(31);
    }
  }

  .slide-next {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
    @media (min-width: 768px) {
      left: 8.5vw;
      right: auto;
      transform: translate(0, 0);
    }
  }

  .slider1-wrapper {
    width: size-m(315);
    margin: size-m(53) auto size-m(50);
    @media (min-width: 768px) {
      width: size(597);
      margin: 0;
    }

    .slider-btn {
      position: absolute;
      top: size-m(-36);
      right: size-m(10);
      width: size-m(128);
      cursor: pointer;
      z-index: 11;
    }

    .slider1 {
      position: relative;
      overflow: hidden;
      width: size-m(315);
      height: size-m(230);
      margin: size-m(53) auto size-m(50);
      @media (min-width: 768px) {
        width: size(597);
        height: size(436 + 42);
        margin: 0;
        padding-top: size(42);
      }
    }
  }
  
  .main-map {
    @media (min-width: 768px) {
      width: 100%;
      margin: size(30) auto;
    }
  }

  .slider2 {
    width: 100%;
    margin: 0 auto size-m(29);
    position: relative;
    @media (min-width: 768px) {
      margin: 0 auto size(58);
    }

    .swiper {
      overflow: hidden;
    }

    .swiper-slide {
      @media (min-width: 768px) {
        width: 50%;
      }
    }

    .slide-prev, .slide-next {
      display: none;
      @media (min-width: 768px) {
        display: block;
        top: 50%;
        transform: translate(-2.5vw, -50%);
      }
    }

    .slide-next {
      @media (min-width: 768px) {
        left: auto;
        right: 0;
        transform: translate(2.5vw, -50%);
      }
    }
  }

  .map-preview {
    position: relative;
    z-index: 13;
    width: size-m(315);
    margin: size-m(29) auto 0;
    cursor: pointer;
    @media (min-width: 768px) {
      width: size(395.03);
      margin: 0 size(41) 0 0;
    }
  }
}

#s4-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  padding: size-m(76) 0 size-m(84);
  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: size(1500);
    height: size(938);
    background: rgba(4, 0, 0, 0.8);
    padding: 0;
    max-width: 100%;
    max-height: calc(100% - size(60));
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(306);
    background: linear-gradient(180deg, #9C003F 0%, #E5005C 100%);
    transform: rotate(180deg);
    @media (min-width: 768px) {
      display: none;
    }
  }

  .popup-close {
    position: absolute;
    top: size-m(32);
    right: size-m(27);
    width: size-m(26);
    cursor: pointer;
    z-index: 1;
    @media (min-width: 768px) {
      top: size(34);
      right: size(34);
      width: size(46);
    }
  }

  .txt {
    position: absolute;
    bottom: size-m(27);
    left: 0;
    width: 100%;
    text-align: center;
    font-size: size-m(20);
    font-weight: 700;
    @media (min-width: 768px) {
      display: none
    }
  }

  .img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    @media (min-width: 768px) {
      padding: size(33);
    }

    img {
      max-width: none;
      width: auto;
      height: 100%;
      @media (min-width: 768px) {
        width: 100%;
        object-fit: contain;
      }
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
const swiperRef1 = ref(null);
const swiperRef2 = ref(null);
const showPop = ref(false);
const map = ref(1);
const globals = getCurrentInstance().appContext.config.globalProperties;

const init1 = swiper => {
  swiperRef1.value = swiper;
}

const slidePrev1 = () => {
  if(swiperRef1.value){
    swiperRef1.value.slidePrev();
  }
}

const slideNext1 = () => {
  if(swiperRef1.value){
    swiperRef1.value.slideNext();
  }
}

const init2 = swiper => {
  swiperRef2.value = swiper;
}

const slidePrev2 = () => {
  if(swiperRef2.value){
    swiperRef2.value.slidePrev();
  }
}

const slideNext2 = () => {
  if(swiperRef2.value){
    swiperRef2.value.slideNext();
  }
}

const clickMap = (num) => {
  map.value = num;
  showPop.value = true;
}

function onImgLoad(e) {
  const img = e.target;
  const wrapper = img.parentNode;
  if (img) {
    wrapper.scrollLeft = img.clientWidth * 0.5 - wrapper.clientWidth/2;
  }
}
</script>