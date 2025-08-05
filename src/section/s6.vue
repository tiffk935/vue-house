<template>
  <section class="s6 user-n w-full relative z-[1]">
    <div class="bg"></div>
    <div class="text text1">
      <div class="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">掌握雙北動脈<br>國王大道馳騁未來</div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">站在新北市的交通戰略樞紐，掌握三捷運、三國道、四特快優勢，左右連結雙北台一線忠孝國王大道，直通國門與信義核心，地段決定時間價值，交通定義未來身價，每一次出發，都是時間與財富的領先。</div>
    </div>
    <div class="slider md:hidden">
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
      >
        <swiper-slide v-for="slide in slides">
          <div class="relative">
            <img :src="getImg(`./s6/${slide.img}`)" />
            <div class="info">{{slide.label}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="imgs hidden md:flex f-full">
      <div 
        class="img hidden md:block" 
        v-for="(item, idx) in slides"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        :data-aos-delay="idx * 200"
      >
        <img class="block" :src="getImg(`./s6/${item.img}`)" />
        <div class="info">{{ item.label }}</div>
      </div>
    </div>
    <div class="content">
      <div
        class="item"
        v-for="(item, idx) in slides"
      >
        <div class="item-info">
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            :data-aos-delay="idx * 200"
          >
            <div class="item-title">{{ item.title }}</div>
            <div class="item-desc">{{ item.desc }}</div>
          </div>
          
        </div>
      </div>
    </div>
    <img class="mrt" src="@/section/s6/mrt.png" alt=""> 
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  padding: size-m(56) 0 size-m(85) 0;
  text-align: justify;
  font-size: size-m(14);
  line-height: 160%;
  letter-spacing: .08em;
  z-index: 1;
  @media screen and (min-width:768px) {
    padding: size(187) size(196) size(185) size(196);
    font-size: size(16);
  }

  .bg {
    position: absolute;
    top: size-m(71);
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: url(@/section/s6/speed.png);
    background-position: 100% 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: -1;
    @media screen and (min-width:768px) {
      top: 0;
    }
  }

  .text {
    padding: 0 size-m(37);
    margin-bottom: size-m(35);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(714);
      margin-bottom: size(57);
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

  .slider {
    padding-top: size-m(16);
    margin: 0 size-m(14);
    margin-bottom: size-m(26);
    overflow: hidden;
    // background: green;
    @media screen and (min-width:768px) {
      display: none;
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
        box-shadow: 0 0 size-m(8) 0 rgba(0, 0, 0, 0.25);
        @media screen and (min-width:768px) {
          width: size(78);
          height: size(78);
          border: size(1) solid #E4EAF8;
          background-size: size(28) auto;
          box-shadow: 0 0 size(8) 0 rgba(0, 0, 0, 0.25);
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
        @media screen and (min-width:768px) {
          width: calc(899 / 1528.2 * 100%);
          border-radius: size(8);
          box-shadow: 0 0 size(16) 0 rgba(0, 0, 0, 0.4);
        }

        & > div:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, .6);
        }

        &.swiper-slide-active > div:after {
          opacity: 0;
        }
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

  .imgs {
    margin-bottom: size(40);
    justify-content: space-between;
  }

  .img {
    width: calc(33.333% - size(10));
    position: relative;
    border-radius: size(8);
    overflow: hidden;
    box-shadow: 0 0 size(4) 0 rgba(255, 255, 255, 0.25), 0 size(-2.662) size(2.662) 0 rgba(0, 0, 0, 0.25) inset;

    img {
      width: 100%;
      height: size(281);
      display: block;
      object-fit: cover;
    }

    .info {
      color: #fff;
      position: absolute;
      bottom: size(12);
      right: size(11);
      font-size: size(13);
      line-height: size(16);
      font-weight: 500;
    }
  }

  .content {
    background: rgba(255, 255, 255, .85);
    padding: size-m(38) size-m(32) size-m(38) size-m(18);
    margin: 0 size-m(13);
    @media screen and (min-width:768px) {
      background: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    .item {
      margin-bottom: size-m(20);
      color: #000;
      font-size: size-m(13);
      line-height: 140%;
      letter-spacing: .08em;
      @media screen and (min-width:768px) {
        width: 33.333%;
        margin-bottom: 0;
        font-size: size(13);
      }

      &:last-child {
        margin-bottom: 0;
      }

      .item-info {
        @media screen and (min-width:768px) {
          background: rgba(255, 255, 255, .85);
          padding: size(16) size(46);
          height: size(133);
          position: relative;
        }

        &:after {
          @media screen and (min-width:768px) {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            width: size(1);
            height: size(32);
            transform: translate(0, -50%);
            background: #000;
          }
        }
      }

      &:last-child .item-info:after {
        display: none;
      }

      .item-title {
        color: #003B8C;
        font-size: size-m(15);
        font-weight: 700;
        padding-left: size-m(7 + 6);
        margin-bottom: size-m(10);
        background-image: url('data:image/svg+xml,<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.02576 6.04081L1 0.5L2.3292 6.04081L1 12.1357L8.02576 6.04081Z" fill="%23003B8C" stroke="%23003B8C" stroke-linejoin="round"/></svg>');
        background-size: size-m(7) auto;
        background-position: 0 50%;
        background-repeat: no-repeat;
        @media screen and (min-width:768px) {
          font-size: size(15);
          font-weight: 500;
          padding-left: size(10 + 8);
          margin-bottom: size(8);
          background-size: size(10) auto;
        }
      }
    }
  }

  .mrt {
    width: size-m(235);
    position: absolute;
    bottom: 0;
    right: size-m(-54);
    @media screen and (min-width:768px) {
      width: size(640);
      bottom: auto;
      top: size(17);
      right: size(-4);
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
const images = import.meta.globEager('./s6/*.*');

const getImg = path => images[path]?.default || '';
const slides = ref([
  {
    img: '1.jpg',
    label: '64號快速道路實景圖',
    title: '四快共構地段  掌握每一條都會動脈',
    desc: '台64線、台65線、台1線、新北環快齊聚門前，新北市區唯一同時享有四大特快速道路的VIP特權，日常通勤更省時，假日出遊更靈活，不論串聯商圈、進出市心、轉進南北幹道，讓從容成為日常節奏，快人一步，也更優雅一步。'
  },
  {
    img: '2.jpg',
    label: '機捷新北產業園區站實景圖',
    title: '三線國道在握  彈指掌控生活經緯界',
    desc: '立足台灣交通網絡最發達的城市，迅速銜接國道一號、國道三號與五楊高架，直上南北主軸、無縫接軌全台交通核心，在時間就是金錢的年代，從容掌控事業與生活的完美節奏，「KING PARK 國王大道」以國道為起點，替您搶下每一段更迅速的人生旅程。'
  },
  {
    img: '3.jpg',
    label: '環狀線幸福站實景圖',
    title: '三捷通道交匯 王者從這裡走進世界',
    desc: '機場線、環狀線、新蘆線，三線捷運交會，一線通國門、一站到北車，從這裡出發，生活不需等待、通勤不設限，機捷接軌桃園國際機場，新蘆、環狀線迅速串聯雙北，日常出勤、假日出遊、國際出差，每一趟旅程都快人一步。'
  }
]);

const sliderRef = ref();

const init = (swiper) => {
  sliderRef.value = swiper;
}
</script>