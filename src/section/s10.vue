<template>
  <section class="s10 w-full relative text-white">
    <img class="tree hidden md:block" src="@/section/s10/tree.jpg" loading="lazy" />
    <img class="tree md:hidden" src="@/section/s10/tree-m.png" loading="lazy" />
    <div class="t1" data-aos="fade-up" data-aos-delay="0">綠意盎然、藏風納光<br>會呼吸的友善建築</div>
    
    <div class="imgs hidden md:flex md:justify-between">
      <div class="relative" data-aos="zoom-in" data-aos-delay="0">
        <img src="@/section/s10/1.jpg" loading="lazy" />
        <div class="txt">玻璃帷幕透景陽台，延請自然風光入室，<br class="md:hidden">讓生活時時都有美好感受。</div>
      </div>
      <div class="relative" data-aos="zoom-in" data-aos-delay="200">
        <img src="@/section/s10/2.jpg" loading="lazy" />
        <div class="txt">大尺度落地深窗，避免太陽西曬，為室內降溫，<br class="md:hidden">減少開電扇、電燈、冷暖氣的時間。</div>
      </div>
      <div class="relative" data-aos="zoom-in" data-aos-delay="400">
        <img src="@/section/s10/3.jpg" loading="lazy" />
        <div class="txt">大尺度落地深窗，避免太陽西曬，為室內降溫，<br class="md:hidden">減少開電扇、電燈、冷暖氣的時間。</div>
      </div>
    </div>
    
    <div class="slider">
      <swiper
        :loop="true"
        :navigation="false"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @init="init"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/1.jpg" loading="lazy" />
            <div class="txt">玻璃帷幕透景陽台，延請自然風光入室，<br>讓生活時時都有美好感受。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/2.jpg" loading="lazy" />
            <div class="txt">大尺度落地深窗，避免太陽西曬，為室內降溫，<br>減少開電扇、電燈、冷暖氣的時間。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/3.jpg" loading="lazy" />
            <div class="txt">大尺度落地深窗，避免太陽西曬，為室內降溫，<br>減少開電扇、電燈、冷暖氣的時間。</div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="slide-prev" @click="slidePrev"></div>
      <div class="slide-next" @click="slideNext"></div>
    </div>

    <div class="t2 block md:hidden " data-aos="fade-up" data-aos-delay="0">東泥建設從選地開始，即為住戶考量到生活需求，「東泥大賦」結合自然、人文、便捷的優質環境，是燕巢市中心首屈一指的優生美地。</div>
    <div class="t2 hidden md:block " data-aos="fade-up" data-aos-delay="0">東泥建設以人為本，精雕自然和諧的親綠空間，由於基地緊鄰公園綠樹，特別規劃玻璃帷幕及節能深窗，讓室內不受到太陽光直接照射，避免炙熱，於夏天時感受陣陣徐風吹來，每一口呼吸都是涼涼的清新好空氣、靜謐的空間裡，處處充滿著宜人的舒適感受。</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  width: 100%;
  height: size-m(620);
  background-image: url(@/section/s10/bg.jpg);
  background-size: cover;
  padding-top: size-m(129);
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(1121);
    padding: size(271) size(170);
  }

  .tree {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  .t1 {
    text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.45);
    font-size: size-m(25);
    font-weight: 700;
    letter-spacing: .02em;
    margin-bottom: size-m(88);
    padding: 0 size-m(24);
    text-align: right;
    @media screen and (min-width:768px) {
      text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.45);
      font-size: size(54);
      letter-spacing: .04em;
      margin-bottom: size(150);
      padding: 0;
    }
  }

  .slider {
    position: relative;
    padding: 0 size-m(30);
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      display: none;
    }

    .swiper-slide {
      img {
        width: 100%;
        height: size-m(203);
        object-fit: cover;
      }

      .txt {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: size-m(92);
        padding: size-m(8) size-m(11);
        display: flex;
        align-items: flex-end;
        background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
        font-family: "Noto Sans TC";
        font-size: size-m(12);
        font-weight: 500;
        line-height: 133.333%;
        letter-spacing: .08em;
      }
    }

    .swiper-pagination {
      display: none;
    }

    .slide-prev, .slide-next {
      width: size-m(30);
      height: size-m(30);
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background-position: center;
      background-repeat: no-repeat;

      &.slide-prev {
        left: 0;
        background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4594 23.1383C10.9963 23.6753 11.8669 23.6753 12.4039 23.1383C12.9409 22.6013 12.9409 21.7307 12.4039 21.1937L3.32256 12.1124L12.4039 3.03105C12.9409 2.49408 12.9409 1.62348 12.4039 1.08651C11.8669 0.549536 10.9963 0.549536 10.4594 1.08651L0.40575 11.1401C-0.131221 11.6771 -0.131221 12.5477 0.40575 13.0847L10.4594 23.1383Z" fill="%23868686"/></svg>');
      }

      &.slide-next {
        right: 0;
        background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54063 1.08681C2.00366 0.549839 1.13306 0.549839 0.596088 1.08681C0.0591166 1.62378 0.0591166 2.49438 0.596088 3.03135L9.67743 12.1127L0.596088 21.194C0.0591166 21.731 0.0591166 22.6016 0.596088 23.1386C1.13306 23.6756 2.00366 23.6756 2.54063 23.1386L12.5943 13.085C13.1312 12.548 13.1312 11.6774 12.5943 11.1404L2.54063 1.08681Z" fill="%23868686"/></svg>');
      }
    }
  }

  .imgs {
    margin: 0 0 size(63) 0;

    img {
      width: size(508);
    }

    .txt {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: size(102);
      background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
      padding: size(5) size(13);
      font-family: "Noto Sans TC";
      font-size: size(12);
      font-weight: 500;
      line-height: 208.333%;
      letter-spacing: .08em;
      display: flex;
      align-items: flex-end;
    }
  }

  .t2 {
    color: #2C4C37;
    text-align: center;
    font-size: size-m(12);
    font-weight: 500;
    line-height: 175%;
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: 190%;
      padding: 0;
      width: size(1306);
      margin: 0 auto;
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
</script>