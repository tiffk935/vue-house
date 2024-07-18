<template>
  <section class="s11 w-full relative text-[#3E3A39]">
    <div class="md:flex md:justify-between md:items-end">
      <div class="slider text-white">
        <swiper
          :loop="true"
          :navigation="false"
          :pagination="false"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          @init="init"
          @slideChange="slideChange"
        >
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s11/1.jpg" loading="lazy" />
              <div class="txt1">3D透視裝潢參考圖</div>
             <!-- <div class="txt2">氣派大面寬，迎賓客餐廳。</div> --> 
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s11/2.jpg" loading="lazy" />
              <div class="txt1">3D透視裝潢參考圖</div>
              <!-- <div class="txt2">美饌饗宴，風機能廚房。</div> -->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s11/3.jpg" loading="lazy" />
              <div class="txt1">3D透視裝潢參考圖</div>
              <!-- <div class="txt2">靜謐隱私，整層大主臥。</div> -->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s11/4.jpg" loading="lazy" />
              <div class="txt1">3D透視裝潢參考圖</div>
              <!-- <div class="txt2">靜謐隱私，整層大主臥。</div> -->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s11/5.jpg" loading="lazy" />
              <div class="txt1">3D透視裝潢參考圖</div>
              <!-- <div class="txt2">靜謐隱私，整層大主臥。</div> -->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img src="@/section/s11/6.jpg" loading="lazy" />
              <div class="txt1">3D透視裝潢參考圖</div>
              <!-- <div class="txt2">靜謐隱私，整層大主臥。</div> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text">
        <div class="t1" data-aos="fade-up" data-aos-delay="0">多元規劃、上質空間<br>砌築生活的無限可能</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">為全面進化燕巢地區的建築品質，「東泥大賦」以市中心前所未見的大案氣勢，落實社區整體開發，全區採臨路透天別墅、車庫別墅社區、雙車電梯豪墅等多元規劃，融合友善空間設計、三代空間格局、名品建材配置，為您精雕深具品味的上質藝墅之美。</div>
        <div class="dots">
          <div :class="{ active: activeIdx === 0 }" @click="slideTo(0)"></div>
          <div :class="{ active: activeIdx === 1 }" @click="slideTo(1)"></div>
          <div :class="{ active: activeIdx === 2 }" @click="slideTo(2)"></div>
          <div :class="{ active: activeIdx === 3 }" @click="slideTo(3)"></div>
          <div :class="{ active: activeIdx === 4 }" @click="slideTo(4)"></div>
          <div :class="{ active: activeIdx === 5 }" @click="slideTo(5)"></div>
        </div>
      </div>
    </div>
    <div class="rect"></div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size-m(562);
  background-image: url(@/section/s10/bg.jpg);
  background-size: cover;
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(801);
    padding: size(106) size(150) size(119) size(140);
  }

  .text {
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(520);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .t1 {
    font-size: size-m(25);
    font-weight: 700;
    letter-spacing: .02em;
    padding-bottom: size-m(18);
    margin-bottom: size-m(13);
    border-bottom: size-m(1) solid #3E3A39;
    @media screen and (min-width:768px) {
      font-size: size(54);
      letter-spacing: .04em;
      padding-bottom: size(38);
      margin-bottom: size(38);
      border-bottom: size(1) solid #3E3A39;
    }
  }

  .t2 {
    text-align: justify;
    font-size: size-m(12);
    font-style: normal;
    font-weight: 500;
    line-height: 175%;
    @media screen and (min-width:768px) {
      font-size: size(22);
      line-height: 190%;
      margin-bottom: size(96);
    }
  }

  .slider {
    position: relative;
    margin-bottom: size-m(23);
    @media screen and (min-width:768px) {
      width: size(1024);
      margin: 0;
    }

    .swiper-slide {
      img {
        width: 100%;
        height: size-m(277);
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: auto;
        }
      }

      .txt1 {
        position: absolute;
        top: size-m(10);
        right: size-m(10);
        text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.55);
        font-size: size-m(12);
        font-weight: 600;
        @media screen and (min-width:768px) {
          top: size(13);
          right: size(25);
          text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.55);
          font-size: size(15);
          letter-spacing: .08em;
        }
      }

      .txt2 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: size-m(4) size-m(9);
        background: linear-gradient(90deg, #231815 0%, rgba(0, 0, 0, 0.00) 100%);
        font-family: "Noto Sans TC";
        font-size: size-m(12);
        font-weight: 500;
        line-height: 208.333%;
        letter-spacing: .08em;
        @media screen and (min-width:768px) {
          padding: size(15) size(28);
          font-size: size(20);
        }
      }
    }
  }

  .dots {
    display: none;
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: flex-end;

      div {
        width: size(15);
        height: size(15);
        border: size(1) solid #595757;
        border-radius: 50%;
        margin-right: size(10);
        cursor: pointer;

        &.active {
          background: #595757;
        }
      }
    }
  }

  .rect {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(101);
    background: linear-gradient(0deg, #EFEFEF 0%, rgba(239, 239, 239, 0.00) 100%);
    z-index: -1;
    @media screen and (min-width:768px) {
      height: size(217);
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
import { Autoplay, Navigation, Pagination } from "swiper";
const modules = ref([Autoplay, Navigation, Pagination]);
const swiperRef = ref(null);
const activeIdx = ref(0);

const init = swiper => {
  swiperRef.value = swiper;
}

const slideChange = swiper => {
  if(swiperRef.value){
    activeIdx.value = swiper.realIndex;
  }
}

const slideTo = idx => {
  swiperRef.value.slideTo(idx + 1);
}
</script>