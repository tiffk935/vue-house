<template>
  <section class="s8 text-[#333333] bg-[#C4C3C0] relative">
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="title-en">TRANSPORTATION</div>
      <div class="title">交通主脈</div>
      <div class="desc">平實轉運站│複製台北京站，整合百貨商圈、公園，台南首座捷運站</div>
      <div class="desc">成功大學│南台灣第一學府，漫步萬坪質感學風綠地</div>
      <div class="desc">醫院機能│榮總台南分院、成大醫院等醫療機能在側</div>
    </div>
    <div class="slider">
      <swiper 
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s8/1.jpg" />
            <div class="txt">平實轉運站3D合成示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s8/2.jpg" />
            <div class="txt">平實公園實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s8/3.jpg" />
            <div class="txt">平實公園實景拍攝</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img class="en" src="@/section/s8/en.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  padding: size-m(37.59) 0 size-m(21.5) 0;
  @media screen and (min-width:768px) {
    padding: size(114) 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }

  .text {
    padding: 0 size-m(30);
    margin-bottom: size-m(24.54);
    @media screen and (min-width:768px) {
      width: size(1920 - 1260);
      padding: 0 size(40) 0 size(60);
      margin-bottom: 0;
    }

    .title-en {
      font-family: 'Cormorant Garamond';
      font-size: size-m(33);
      line-height: size-m(30);
      color: #A98162;
      margin-bottom: size-m(5.5);
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(52);
        line-height: size(57);
        margin-bottom: size(13.87);
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
        line-height: size(68);
        margin-bottom: size(6.62);
      }
    }

    .desc {
      font-size: size-m(12);
      line-height: size-m(18);
      text-align: justify;
      margin-bottom: size-m(10);
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(27);
        margin-bottom: size(10);
      }
    }
  }

  .img {
    .txt {
      color: #fff;
      font-size: size-m(12);
      line-height: size-m(20);
      position: absolute;
      bottom: size-m(1);
      right: size-m(4.5);
      text-shadow: size-m(0) size-m(2) size-m(3) rgba(0, 0, 0, 0.7);
      @media screen and (min-width:768px) {
        font-size: size(15);
        line-height: size(12);
        bottom: size(9.5);
        right: size(11);
        text-shadow: size(1) size(1) size(2) rgba(0, 0, 0, 0.5);
      }
    }
  }

  .en {
    width: size-m(252);
    margin-top: size-m(6);
    margin-left: size-m(103.23);
    @media screen and (min-width:768px) {
      position: absolute;
      bottom: size(113);
      left: size(1316);
      width: size(546);
      margin: 0;
      padding-left: 0;
    }
  }

  .slider {
    @media screen and (min-width:768px) {
      width: size(1260);
      margin: 0;
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
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay } from "swiper";
const modules = ref([Navigation, Autoplay]);
</script>