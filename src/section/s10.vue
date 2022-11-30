<template>
  <section class="s10 relative">
    <img class="bg absolute hidden md:block" src="@/section/s10/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s10/bg-m.png" />
    <div class="map relative">
      <img class="map1" src="@/section/s10/map.jpg" />
      <div class="text-white">茂德建設</div>
    </div>
    <div class="info absolute text-white">茂德建設</div>
    <img class="hand-bg absolute md:hidden" src="@/section/s10/hand-bg.svg" />
    <img class="hand absolute md:hidden" src="@/section/s10/hand.svg" />
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="t1">匠心 職人獻藝</div>
      <div class="t2">專業歷練 構築豪宅品質</div>
      <div>
        <div class="content">茂德機構-全台十大建商</div>
        <div class="content">20年經驗累積，在北台灣房地產市場佔有一席之地。2004年起擴大推案，以造鎮案大基地等系列遍地開花，更經常是重劃區的開發領頭羊。</div>
      </div>
    </div>
    <img class="tree absolute hidden md:block" src="@/section/s10/tree.svg" />
    <img class="tree absolute md:hidden" src="@/section/s10/tree-m.svg" />
    <div class="abtns">
      <div class="abtn" @click="modalOpen = true; modalType = '作品'">知名<br class="md:hidden">作品</div>
      <div class="abtn" @click="modalOpen = true; modalType = '基地開發'">萬坪<br class="md:hidden">基地開發</div>
      <div class="abtn" @click="modalOpen = true; modalType = '景觀宅'">山水<br class="md:hidden">景觀宅</div>
    </div>
  </section>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="s10-modal" class="modal-toggle" />
  <div class="s10-modal modal">
    <div class="modal-box py-12 relative">
      <label for="s10-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      
      <template v-if="modalType == '作品'">
        <div class="inner">
          <div>
            <div class="t1">知名作品</div>
            <div class="content">
              三重：繽麗、仁仁河系列<br>
              新莊：新泰暘系列<br>
              板橋：江南Star、高妍植系列<br>
              新店：波爾多系列<br>
              南港：香朵、世界心<br>
              北投：令和
            </div>
          </div>
          <div class="slider">
            <swiper 
              :spaceBetween="10"
              :pagination="false"
              :navigation="true"
              :modules="modules"
              :loop="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
            >
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </template>
      <template v-if="modalType == '基地開發'">
        <div class="inner">
          <div>
            <div class="t1">萬坪基地開發</div>
            <div class="content">
              新莊：歐洲村、超級城市<br>
              蘆洲：希望城市<br>
              土城：金城舞系列
            </div>
          </div>
          <div class="slider">
            <swiper 
              :spaceBetween="10"
              :pagination="false"
              :navigation="true"
              :modules="modules"
              :loop="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
            >
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </template>
      <template v-if="modalType == '景觀宅'">
        <div class="inner">
          <div>
            <div class="t1">山水景觀宅</div>
            <div class="content">
              中和：太陽帝國<br>
              新店：碧波白、晴山匯
            </div>
          </div>
          <div class="slider">
            <swiper 
              :spaceBetween="10"
              :pagination="false"
              :navigation="true"
              :modules="modules"
              :loop="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
            >
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
              <swiper-slide>
                <img class="w-full" src="@/section/s10/slider1/1.png" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s10 {

  @keyframes swing {
    0% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-15%);
    }
    50% {
      transform: translateX(0%);
    }
    75% {
      transform: translateX(15%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    position: absolute;
    top: size-m(667 - 312);
    @media screen and (min-width:768px) {
      overflow: hidden;
      top: size(1080 - 718);
    }

    img {
      width: auto;
      height: size-m(312);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: size(1920);
        height: auto;
      }
    }

    .text-white {
      font-size: size-m(12);
      text-shadow: 0px 0px size-m(5) rgba(0, 0, 0, 0.8);
      position: absolute;
      bottom: size-m(10);
      right: size-m(10);
      line-height: 1;
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        font-size: size(12);
        text-shadow: 0px 0px size(5) rgba(0, 0, 0, 0.8);
        bottom: size(10);
        right: size(10);
      }
    }

  }
  .hand {
    width: size-m(18.32);
    top: size-m(600);
    left: size-m(178);
    cursor: pointer;
    transition: opacity .5s;
    animation: swing 3s linear 0s infinite;
    pointer-events: none;
    @media screen and (min-width:768px) {
      display: none;
    }
  }
  .hand-bg {
    width: 100%;
    bottom: 0;
    left: 0;
    transition: opacity .5s;
    pointer-events: none;
  }
  
  .text {
    position: absolute;
    top: size-m(44);
    left: 0;
    width: 100%;
    padding: 0 size-m(30);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(70);
      left: size(562);
      width: auto;
      padding: 0;
    }

    .t1 {
      font-family: 'Noto Serif TC';
      color: #C2465A;
      font-weight: 800;
      font-size: size-m(25);
      line-height: size-m(17);
      margin-bottom: size-m(18);
      position: relative;
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(28);
        display: block;
        margin: 0 auto;
        margin-bottom: size(20);
        max-width: size(630);
      }

      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        width: size-m(62);
        height: size-m(1);
        background: #000;
        @media screen and (min-width:768px) {
          width: size(150);
          height: size(1);
        }
      }

      &:after {
        left: auto;
        right: 0;
      }
    }

    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(20);
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(30);
        margin-bottom: size(20);
      }
    }

    .content {
      letter-spacing: 0.1em;
      font-size: size-m(13);
      line-height: size-m(20);
      @media screen and (min-width:768px) {
        font-size: size(20);
        line-height: size(30);
        max-width: size(795);
      }

      &:nth-of-type(1) {
        margin-bottom: size-m(10);
        @media screen and (min-width:768px) {
          margin-bottom: size(10);
        }
      }
    }

  }

  .abtns {
    position: absolute;
    top: size-m(233);
    left: size-m(61);
    right: size-m(61);
    display: flex;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      top: size(288);
      left: size(485);
      right: size(485);
    }

    .abtn {
      cursor: pointer;
      width: size-m(68);
      height: size-m(68);
      border: size-m(1) solid #000;
      transition: all .2s;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(15);
      line-height: size-m(18);
      @media screen and (min-width:768px) {
        width: size(300);
        height: size(60);
        border: size(1) solid #000;
        font-size: size(30);
        line-height: 1;
      }

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }

  .tree {
    width: size-m(400);
    top: size-m(293);
    left: size-m(-19);
    max-width: none;
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(1998);
      top: size(146);
      left: size(-53);
    }
  }
}

.s10-modal {
  .modal-box {
    @media screen and (min-width:768px) {
      max-width: none;
      width: size(1150);
    }
  }

  .inner {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: size(935);
      margin: 0 auto;
    }
  }

  .t1 {
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    margin-bottom: 18px;
    @media screen and (min-width:768px) {
      font-size: size(30);
      line-height: size(30);
      margin-bottom: size(40);
    }
  }

  .content {
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 22px;
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: size(50);
    }
  }

  .slider {
    width: 100%;
    @media screen and (min-width:768px) {
      width: size(585);
    }

    .swiper-button-prev, .swiper-button-next {
      width: 50px;
      height: 50px;
      background-size: contain;
      @media screen and (min-width:768px) {
        width: size(46);
        height: size(46);
      }
      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 0;
      background-image: url(@/section/s4/arrow-prev.svg);
    }

    .swiper-button-next {
      right: 0;
      background-image: url(@/section/s4/arrow-next.svg);
    }
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      modules: [Pagination, Navigation, Autoplay],
      modalOpen: false,
      modalType: '',
    }
  },
};
</script>