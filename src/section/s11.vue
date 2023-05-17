<template>
  <section class="s11 relative text-white">
    <div class="slider absolute">
      <swiper
        :pagination="{
          clickable: true
        }"
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img class="w-full block" src="@/section/s11/1.jpg" />
          <div class="txt">3D透視參考表現，其中之傢俱、飾品、畫作與植栽<br class="md:hidden">為情境表現，建設公司保有修正之權利。</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s11/2.jpg" />
          <div class="txt">3D透視參考表現，其中之傢俱、飾品、畫作與植栽<br class="md:hidden">為情境表現，建設公司保有修正之權利。</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s11/3.jpg" />
          <div class="txt">3D透視參考表現，其中之傢俱、飾品、畫作與植栽<br class="md:hidden">為情境表現，建設公司保有修正之權利。</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s11/4.jpg" />
          <div class="txt">3D透視參考表現，其中之傢俱、飾品、畫作與植栽<br class="md:hidden">為情境表現，建設公司保有修正之權利。</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s11/5.jpg" />
          <div class="txt">3D透視參考表現，其中之傢俱、飾品、畫作與植栽<br class="md:hidden">為情境表現，建設公司保有修正之權利。</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s11/6.jpg" />
          <div class="txt">3D透視參考表現，其中之傢俱、飾品、畫作與植栽<br class="md:hidden">為情境表現，建設公司保有修正之權利。</div>
        </swiper-slide>
        <swiper-slide>
          <img class="w-full block" src="@/section/s11/7.jpg" />
          <div class="txt">3D透視參考表現，其中之傢俱、飾品、畫作與植栽<br class="md:hidden">為情境表現，建設公司保有修正之權利。</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="content absolute">
      <div class="t1 fade">質樸優雅從容以對，<br class="md:hidden">綠光湛庭歡迎回家。</div>
      <div class="txt fade">如榆設計陳昫吟總監擅長融入地貌紋理與空間構型，將社子的田園生態、歷史記憶連結建築、景觀與公共空間，帶入花磚與質樸的石材紋理，象徵大地的暖灰藝術塗料，以金屬點綴其中加深整體價值感；於景觀圍牆延續建築使用紅磚材，橫向由密到疏的孔隙，營造光影變化律動效果並保有隱私性，局部透空設計將公園的綠意迎接入室，後院同樣層次錯落的花台植栽，由內而外將建築包裹在綠意之中。</div>
    </div>
    <div class="leaf absolute">
      <img class="w-full block" src="@/section/s2/frame.svg" />
      <img class="window absolute" src="@/section/s2/leaf.gif" />
      <img class="bird absolute" src="@/section/s2/bird.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size-m(780);
  background: linear-gradient(179.66deg, #1E887C 53.92%, #09665E 97.46%);
  @media screen and (min-width:768px) {
    height: size(1080);
    background: linear-gradient(254.12deg, #004B47 0%, #11A196 95.22%);
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: size-m(375);
    @media screen and (min-width:768px) {
      top: size(124);
      width: size(1091);
    }

    img {
      height: size-m(328);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(833);
      }
    }

    .txt {
      position: absolute;
      bottom: size-m(7);
      left: size-m(5);
      font-family: 'Noto Sans TC';
      font-weight: 500;
      font-size: size-m(10);
      line-height: size-m(12);
      @media screen and (min-width:768px) {
        bottom: size(13);
        left: size(29);
        font-size: size(13);
        line-height: size(15);
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(17);
      height: size-m(17);
      background-size: contain;
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        width: size(56);
        height: size(56);
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      background-position: left;
      background-image: url(@/section/s11/arrow-left-m.svg);
      left: size-m(6);
      @media screen and (min-width:768px) {
        left: size(27);
        background-image: url(@/section/s11/arrow-left.svg);
      }
    }

    .swiper-button-next {
      background-position: right;
      background-image: url(@/section/s11/arrow-right-m.svg);
      right: size-m(6);
      @media screen and (min-width:768px) {
        right: size(27);
        background-image: url(@/section/s11/arrow-right.svg);
      }
    }

    .swiper-pagination {
      line-height: 1;
      top: size-m(10);
      bottom: auto;
      right: size-m(10);
      left: auto;
      width: auto;
      @media screen and (min-width:768px) {
        right: size(27);
      }

      .swiper-pagination-bullet {
        width: size-m(8);
        height: size-m(8);
        margin: 0 size-m(3.6);
        background: none;
        border: size-m(1) solid #fff;
        opacity: 1;
        @media screen and (min-width:768px) {
          width: size(16);
          height: size(16);
          margin: 0 size(7);
          border: size(1) solid #fff;
        }

        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }
  }

  .content {
    width: size-m(290);
    top: size-m(392);
    left: size-m(42.5);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(620);
      top: size(442);
      left: size(1213);
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-size: size-m(21);
      line-height:1.34;
      font-weight: 700;
      margin-bottom: size-m(9.5);
      letter-spacing: .03em;
      @media screen and (min-width:768px) {
        font-size: size(33);
        margin-bottom: size(26.5);
      }
    }

    .txt {
      font-size: size-m(15);
      line-height:1.5;
      margin-bottom: size-m(24.5);
      font-weight: 300;
      letter-spacing: 0em;
      font-family: 'Noto sans TC';
      @media screen and (min-width:768px) {
        font-size: size(19);
        margin-bottom: size(70);
        font-weight: 200;
        letter-spacing: .1em;
          line-height:1.7;
      }
    }
  }

  .leaf {
    width: size-m(90.95);
    top: size-m(-141);
    left: size-m(248);
    @media screen and (min-width:768px) {
      width: size(255);
      top: size(-76);
      left: size(1514);
    }
    .w-full{position: relative;z-index: 2;}

    .window {
      width: 23vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(2px);
      @media screen and (min-width:768px) {
        width: 12.7vw;
      }
    }

    .bird {
      width: size-m(51.79);
      top: size-m(40.69);
      left: size-m(29.54);
      @media screen and (min-width:768px) {
        width: size(173.05);
        top: size(113.51);
        left: size(83.53);
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);
</script>