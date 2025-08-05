<template>
  <section class="s7 user-n w-full relative z-[1]">
    <div class="ball ball1 absolute hidden md:block"></div>
    <div class="ball ball2 absolute hidden md:block"></div>
    <div class="arrow arrow1"></div>
    <div class="arrow arrow2 hidden md:block"></div>
    <div class="arrow arrow3 hidden md:block"></div>
    <div class="slider slider1 md:hidden">
      <swiper
        :space-between="10"
        :pagination="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :navigation="false"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s7/1.jpg" />
            <div class="info">吉的堡幼兒園實景圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s7/2.jpg" />
            <div class="info">頭前國中實景圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slider slider2 md:hidden">
      <swiper
        :space-between="10"
        :pagination="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :navigation="false"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s7/3.jpg" />
            <div class="info">昌平國小實景圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s7/4.jpg" />
            <div class="info">新莊高中實景圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="text">
      <div class="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">16年完整教育資源<br>給孩子最輕鬆的起跑線</div>
      <div class="desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="mb-[0.7em] md:[0.5em]">2分鐘步行昌平國小、吉的堡雙語幼兒園，優質雙語環境從小扎根，銜接頭前國中、新莊高中，學習資源一脈相承，更連動丹鳳高中及輔仁大學，16年完整教育資源一應俱全。</div>
        <div>住在 KING PARK 國王大道，用省下的通勤時間，換更多的專注與精神，給孩子最輕鬆的起跑線，未來每一步都是領先。</div>
      </div>
    </div>
    <div class="imgs hidden md:flex">
      <div class="img">
        <div class="relative" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="500">
          <img src="@/section/s7/1.jpg" />
          <div class="info">吉的堡幼兒園實景圖</div>
        </div>
      </div>
      <div class="img">
        <div class="relative" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300">
          <img src="@/section/s7/3.jpg" />
          <div class="info">昌平國小實景圖</div>
        </div>
      </div>
      <div class="img">
        <div class="relative" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="700">
          <img src="@/section/s7/2.jpg" />
          <div class="info">頭前國中實景圖</div>
        </div>
      </div>
      <div class="img">
        <div class="relative" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="900">
          <img src="@/section/s7/4.jpg" />
          <div class="info">新莊高中實景圖</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  padding: size-m(26) 0 size-m(40) 0;
  text-align: justify;
  font-size: size-m(14);
  line-height: 160%;
  letter-spacing: .08em;
  z-index: 1;
  @media screen and (min-width:768px) {
    padding: size(222) 0 size(314) 0;
    font-size: size(16);
  }

  &:before {
    content: '';
    position: absolute;
    top: size-m(1);
    left: 0;
    width: 100%;
    height: 0;
    padding-top: calc(569 / 375 * 100%);
    background-image: url('data:image/svg+xml,<svg width="374" height="571" viewBox="0 0 374 571" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H42.1247C64.2161 1 82.1247 18.9086 82.1247 41V530C82.1247 552.091 100.033 570 122.125 570H374" stroke="url(%23paint0_linear_117_1397)" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_117_1397" x1="-7.38329" y1="-19.6318" x2="505.392" y2="88.9093" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.485577" stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>');
    background-size: 100% 100%;
    z-index: -1;
    @media screen and (min-width:768px) {
      top: size(356);
      padding-top: calc(502 / 1920 * 100%);
      background-image: url('data:image/svg+xml,<svg width="1920" height="504" viewBox="0 0 1920 504" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-1 1H618.748C640.839 1 658.747 18.9086 658.747 41V463C658.747 485.091 676.656 503 698.747 503H1252.89C1274.98 503 1292.89 485.091 1292.89 463V391C1292.89 368.909 1310.8 351 1332.89 351H1920" stroke="url(%23paint0_linear_114_175)" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_114_175" x1="1959.16" y1="516.412" x2="856.99" y2="-778.346" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.4" stop-color="white" stop-opacity="0.1"/><stop offset="1" stop-color="white"/></linearGradient></defs></svg>');
    }
  }

  .ball1 {
    transform: translateY(30%);
    background-image: url(@/section/ball2.png);
    animation: ball 5s linear 0s infinite alternate;
    @media screen and (min-width:768px) {
      width: size(124);
      height: size(124);
      top: size(-63);
      left: size(75);
    }

    &:after {
      content: '';
      background-color: #CE94C0;
      opacity: .86;
      mix-blend-mode: soft-light;
    }
  }

  .ball2 {
    transform: translateY(-20%);
    background-image: url(@/section/ball2.png);
    animation: ball 8s linear -3s infinite alternate;
    @media screen and (min-width:768px) {
      width: size(352);
      height: size(352);
      top: size(-37);
      right: size(-126);
    }

    &:after {
      content: '';
      background-color: #00DBFF;
      mix-blend-mode: soft-light;
    }
  }

  .arrow {
    position: absolute;
    top: calc(401 / 913 * 100%);
    left: calc(241 / 375 * 100%);
    width: size-m(99);
    height: size-m(34);
    background-image: url('data:image/svg+xml,<svg width="103" height="38" viewBox="0 0 103 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L17 18.1639L2 36M30 2L45 18.1639L30 36M58 2L73 18.1639L58 36M86 2L101 18.1639L86 36" stroke="white" stroke-opacity="0.2" stroke-width="3" stroke-linecap="round"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (min-width:768px) {
      top: calc(285 / 1080 * 100%);
      left: calc(674 / 1920 * 100%);
      width: size(99);
      height: size(34);
    }

    &.arrow2 {
      @media screen and (min-width:768px) {
        top: calc(835 / 1080 * 100%);
        left: calc(196 / 1920 * 100%);
      }
    }

    &.arrow3 {
      @media screen and (min-width:768px) {
        top: calc(774.48 / 1080 * 100%);
        left: calc(1400 / 1920 * 100%);
      }
    }
  }

  .text {
    padding: 0 size-m(32);
    @media screen and (min-width:768px) {
      padding: 0 size(208) 0 size(196);
      display: flex;
      justify-content: space-between;
      margin-bottom: size(50);
    }
  }

  .title {
    font-size: size-m(24);
    line-height: size-m(35);
    margin-bottom: size-m(40);
    padding: 0 0 0 size-m(5 + 18);
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(40);
      line-height: size(53);
      margin-bottom: 0;
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

  .desc {
    @media screen and (min-width:768px) {
      width: size(746);
    }
  }

  .slider1 {
    width: calc(350 / 375 * 100%);
    margin: 0 0 size-m(33) auto;
  }

  .slider2 {
    width: calc(250 / 375 * 100%);
    margin: 0 auto size-m(58) 0;

    img {
      height: size-m(250);
      object-fit: cover;
    }
  }

  .slider {
    .swiper {
      .swiper-slide {
        border-radius: size-m(16);
        overflow: hidden;
      }
    }

    .info {
      position: absolute;
      bottom: size-m(8);
      right: size-m(13);
      font-size: size-m(10);
      line-height: size-m(12);
      font-weight: 500;
      @media screen and (min-width:768px) {
        bottom: size(12);
        right: size(11);
        font-size: size(13);
        line-height: size(16);
      }
    }
  }

  .imgs {
    justify-content: space-between;
    width: 100%;

    .img {
      width: calc(564.52 / 1920 * 100%);

      &>div {
        width: 100%;
        height: 0;
        padding-top: calc(376.7 / 564.52 * 100%);
        background: #fff;
        border-radius: size(16);
        overflow: hidden;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &:nth-child(even) {
        width: calc(376.7 / 1920 * 100%);
        transform: translateY(size(70));

        &>div {
          padding-top: 100%;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const modules = ref([Autoplay]);
</script>