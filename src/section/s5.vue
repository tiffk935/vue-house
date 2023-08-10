<template>
  <section class="s5 relative bg-[#EEEEEE]">
    <div class="slider absolute" data-aos="fade-up" data-aos-delay="0">
      <swiper 
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img src="@/section/s5/1.jpg" />
          <div class="text-white">捷運明德站</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s5/2.jpg" />
          <div class="text-white">捷運路線圖</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="text absolute">
      <div class="title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">立足北區核心樞紐<br>600米捷運明德站</div>
      <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        北士科躍升北區核心樞紐，散步600米捷運明德站。淡水信義線，一端追淡江夕照、一端牽起信義計劃，中山、大安、信義時尚與繁華盛景。<br>
        <br>
        環狀線北環段預計118年完工，快速銜接大直、內科園區廊帶。<br>
        <br>
        福國路交流道延伸線直上洲美快速道路。
      </p>
    </div>
    <img class="line" data-aos="fade-up-right" data-aos-delay="400" src="@/section/s5/line.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  height: size-m(708);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .slider {
    width: size-m(315);
    top: size-m(52);
    left: size-m(30);
    @media screen and (min-width:768px) {
      width: size(931);
      top: size(142);
      left: size(885);
    }

    .text-white {
      position: absolute;
      top: size-m(10);
      right: size-m(10);
      font-size: size-m(12);
      line-height: size-m(17);
      text-shadow: size-m(0) size-m(2) size-m(2) rgba(0, 0, 0, 0.8);
      @media screen and (min-width:768px) {
        top: size(10);
        right: size(10);
        font-size: size(22);
        line-height: size(34);
        text-shadow: size(0) size(2) size(2) rgba(0, 0, 0, 0.8);
      }
    }

    .swiper-slide {
      height: size-m(330);
      @media screen and (min-width:768px) {
        height: auto;
      }

      img {
        height: 100%;
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: auto;
          width: 100%;
        }
      }
    }

    .swiper-pagination {
      bottom: 0;
      text-align: left;
      padding: size-m(10);
      line-height: 1;
      @media screen and (min-width:768px) {
        padding: size(30) size(20);
      }
    }

    .swiper-pagination-bullet {
      opacity: 1;
      background: none;
      border: size-m(1) solid #fff;
      width: size-m(10);
      height: size-m(10);
      margin: 0 size-m(4);
      @media screen and (min-width:768px) {
        border: size(1) solid #fff;
        width: size(14);
        height: size(14);
        margin: 0 size(7.5);
      }
    }

    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }

  .text {
    top: size-m(417);
    left: 0;
    padding: 0 size-m(31);
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    color: #4D4D4D;
    @media screen and (min-width:768px) {
      top: size(327);
      left: size(218);
      width: size(464);
      padding: 0 size(0);
      font-size: size(22);
      line-height: size(34);
    }

    .title {
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(29);
      letter-spacing: 0.06em;
      color: #0A534C;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(39);
        line-height: size(56);
        margin-bottom: size(38);
      }
    }
  }

  .line {
    position: absolute;
    width: size-m(83);
    right:2vw;
    top: 106vw;
    @media screen and (min-width:768px) {
      width: size(180);
      left: 32vw;
      top: 13vw;
    }
  }
}

</style>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const modules = ref([Pagination, Navigation, Autoplay]);
</script>
