<template>
  <section class="s12 text-[#333333] bg-[#EAEAEA] relative">
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div>
        <div class="title-en">FOREST GARDEN</div>
        <div class="title">森林花園 景深造境</div>
      </div>
      <div class="desc">千坪壯闊基地，連結戶外林蔭步道、泳池、弧形吧檯區、林間平台以及遊戲空間，搭配律動感的座椅配置，與植栽景觀相應互動，讓自然元素和公設相輔成層次遞進，實現蜿蜒有致，玲瓏生動的花園大院。</div>
    </div>
    <div class="slider">
      <swiper 
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s12/1.jpg" />
            <div class="txt">宴會廳3D合成示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s12/2.jpg" />
            <div class="txt">夜景3D合成示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="en">Listen, my heart, to the whispers of the world with which it makes love to you.</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  width: 100%;
  padding: size-m(38.59) 0 size-m(23.6) 0;
  @media screen and (min-width:768px) {
    padding: size(46) 0 size(55) 0;
    display: flex;
    flex-direction: column-reverse;
  }

  .text {
    padding: 0 size-m(55.5) 0 size-m(28.5);
    margin-bottom: size-m(26.54);
    @media screen and (min-width:768px) {
      padding: 0 size(161) 0 size(108);
      margin-bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .title-en {
      font-family: 'Cormorant Garamond';
      font-size: size-m(33);
      line-height: size-m(30);
      color: #A98162;
      margin-bottom: size-m(3.5);
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(52);
        line-height: size(57);
        margin-bottom: size(0);
      }
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(24);
      line-height: size-m(41);
      letter-spacing: 0.14em;
      margin-bottom: size-m(4.36);
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(50);
        margin-bottom: size(0);
      }
    }

    .desc {
      font-size: size-m(12);
      line-height: size-m(18);
      text-align: justify;
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(27);
        width: size(1080);
      }
    }
  }

  .img {
    img {
      height: size-m(218);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    .txt {
      color: #fff;
      font-size: size-m(12);
      line-height: size-m(20);
      position: absolute;
      bottom: size-m(1);
      right: size-m(4.5);
      text-shadow: size-m(0) size-m(2) size-m(3) rgba(0, 0, 0, 0.5);
      @media screen and (min-width:768px) {
        font-size: size(15);
        line-height: size(12);
        bottom: size(9.5);
        right: size(11.4);
        text-shadow: size(1) size(1) size(2) rgba(0, 0, 0, 0.5);
      }
    }
  }

  .en {
    margin-top: size-m(9.5);
    padding: 0 size-m(62.5) 0 size-m(42.5);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(8);
    line-height: size-m(15);
    color: #18618D;
    @media screen and (min-width:768px) {
      position: absolute;
      bottom: size(264);
      left: size(20);
      width: auto;
      margin-top: 0;
      padding: 0;
      font-size: size(22);
      line-height: size(42);
      color: #fff;
      z-index: 1;
    }
  }

  .slider {
    @media screen and (min-width:768px) {
      margin-bottom: size(47);
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        line-height: 1;
        bottom: size(13);
      }
    }

    .swiper-pagination-bullet {
      opacity: 1;
      width: size(14);
      height: size(14);
      border: size(1) solid #fff;
      margin: 0 size(9);
      background: none;
      border-radius: 0;

      &.swiper-pagination-bullet-active {
        background: #fff;
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(41);
      height: size-m(41);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      @media screen and (min-width:768px) {
        width: size(41);
        height: size(41);
        display: none;
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 0;
      background-image: url(@/section/s5/prev.svg);
    }

    .swiper-button-next {
      right: 0;
      background-image: url(@/section/s5/next.svg);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, Autoplay } from "swiper";
const modules = ref([Navigation, Pagination, Autoplay]);
</script>