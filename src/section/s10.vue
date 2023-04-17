<template>
  <section class="s10 text-[#333333] bg-[#EAEAEA] relative">
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="title-en">DELIGHTFUL LIFE</div>
      <div class="title">豐盛公設 徜徉盎然</div>
      <div class="desc">開創豐富生活，由公設啟程！以台南深厚的文化底蘊為風格，以溫潤材質為基調，規劃有宴會廳、閱讀室、媽媽教室、健身房、運動吧等實用設施，引進自然光線和通透綠意，傳達沉穩又全齡適用的空間設計。</div>
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
        <!--swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s10/1.jpg" />
            <div class="txt">茶室3D合成示意圖</div>
          </div>
        </swiper-slide-->
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s10/2.jpg" />
            <div class="txt">閱讀休憩區3D合成示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s10/3.jpg" />
            <div class="txt">健身房3D合成示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="photo w-full block" src="@/section/s10/4.jpg" />
            <div class="txt">1F大廳3D合成示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img class="en" src="@/section/s10/en.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
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
    padding: 0 size-m(28.5);
    margin-bottom: size-m(26.54);
    @media screen and (min-width:768px) {
      width: size(1920 - 1260);
      padding: 0 size(60);
      margin-bottom: 0;
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
      line-height: size-m(20);
      text-align: justify;
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(27);
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
      text-shadow: size-m(1) size-m(1) size-m(2) rgba(0, 0, 0, 0.5);
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
    width: size-m(198.54);
    margin-top: size-m(4.79);
    margin-left: size-m(136.25);
    @media screen and (min-width:768px) {
      position: absolute;
      bottom: size(113);
      left: size(1338);
      width: size(388);
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