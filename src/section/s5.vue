<template>
  <section class="s5 relative md:flex">
    <div class="bg absolute"></div>
    <div class="slider relative">
      <swiper 
        :spaceBetween="10"
        :navigation="true" 
        :pagination="{
          clickable: true
        }"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules" 
        class="mySwiper"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/1.jpg" alt="雙和心">
            <div class="name absolute">3分鐘進北市 華中橋&64快速道路</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/2.jpg" alt="雙和心">
            <div class="name absolute">64快速道路</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/3.jpg" alt="雙和心">
            <div class="name absolute">雙捷運情境示意</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/4.jpg" alt="雙和心">
            <div class="name absolute">國道3號</div>
          </div>
        </swiper-slide>
      </swiper>
      <img class="logo absolute md:hidden" src="@/section/s5/logo.svg" alt="雙和心">
    </div>

    <img class="logo absolute hidden md:block" src="@/section/s5/logo.svg" alt="雙和心">

    <div data-aos="fade-in" data-aos-delay="100" class="content text-white">
      <div class="title text-center">1橋北市　2快聯外<br>3線快捷<br>4大商圈　5橋馳騁</div>
      <div class="subtitle">最近北市區位，夢想一步到位！</div>
      <div class="text nowrap">
        <span class="bold">•1橋：</span>華中橋，4分鐘進北市<br>
        <span class="bold">•2快：</span>64快道，環河快速道路<br>
        <span class="bold">•3線：</span>中和新蘆線，環狀線，萬大線<br>
        <span class="bold">•4商：</span>大潤發,南山威力,COSTCO,比漾廣場<br>
        <span class="bold">•5橋：</span>華中橋，中正橋，永福橋，福和橋，秀朗橋<br><br>

        外機能強勁，內機能完善，相較板橋新店高房價<br>是新世代最理想住宅，更是小資翻身最佳投資
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  
img{
    width: 100%;
  }

  background: #E01373;
  color: #fff;
  width: 100%;
  height: size-m(720);
  @media screen and (min-width:768px) {
    height: auto;
    padding: size(187) 0;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .bg {
    top: 0;
    left: size-m(375);
    width: size-m(720);
    height: size-m(375);
    background-image: url('@/section/s5/bg.jpg');
    transform: rotate(90deg);
    transform-origin: left top;
    background-size: 100% 100%;
    @media screen and (min-width:768px) {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotate(0deg);
    }
  }

  .swiper {
    @media screen and (min-width:768px) {
      // width: size(1067);
      // margin: 0;
      overflow: visible;
    }
  }

  .slider {
    @media screen and (min-width:768px) {
      overflow: hidden;
      width: size(1067);
      margin: 0;
      padding-bottom: 2.4vw;
    }
  }

  .swiper-button-next, .swiper-button-prev {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: size-m(12.8 * 1.5);
    height: size-m(22.86 * 1.5);
    top: 36vw;
    @media screen and (min-width:768px) {
      display: none;
    }

    &:after {
      display: none;
    }
  }

  .swiper-button-next {
    background-image: url('@/section/s4/arrow-right.svg');
    right: size-m(7);
  }

  .swiper-button-prev {
    background-image: url('@/section/s4/arrow-left.svg');
    left: size-m(7);
  }

  .swiper-pagination {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      bottom: -2.4vw;
      text-align: left;
    }
  }

  .swiper-pagination-bullet {
    background: rgba(255,255,255,0);
    opacity: 1;
    border: 1px solid #fff;
    width: size(15);
    height: size(15);

    &.swiper-pagination-bullet-active {
      background: #DD1373;
      border-color: #DD1373;
    }
  }

  .name {
    font-weight: 700;
    font-size: size-m(12);
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    right: size-m(10);
    bottom: size-m(5);
    color: #fff;
    @media screen and (min-width:768px) {
      font-size: size(15);
      right: size(20);
      bottom: size(10);
    }
  }

  .logo {
    width: size-m(364);
    top: size-m(0);
    left: size-m(6);
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(1071);
      top: size(128);
      left: size(849);
    }
  }

  .content {
    padding: size-m(20) size-m(32) size-m(69) size-m(32);
    text-align: justify;
    position: relative;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(519+180);
      padding: 0 0 0 size(180);
    }
  }

  .title {
    width: size-m(206);
    font-size: size-m(25);
    line-height: size-m(35);
    font-weight: 900;
    margin: 0 auto;
    margin-bottom: size-m(22);
    position: relative;
    @media screen and (min-width:768px) {
      width: 100%;
      font-size: size(63);
      line-height: size(75);
      margin-bottom: size(42);
    }

    &:before, &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: size-m(38);
      height: size-m(3);
      background: #fff;
      @media screen and (min-width:768px) {
        width: size(96);
        height: size(6);
      }
    }

    &:after {
      left: auto;
      right: 0;
    }
  }

  .subtitle {
    font-size: size-m(20);
    line-height: size-m(28);
    font-weight: 500;
    margin-bottom: size-m(26);
    letter-spacing: size(10);
    @media screen and (min-width:768px) {
      font-size: size(24);
      line-height: size(35);
      margin-bottom: size(10);
    }
  }

  .text {
    font-size: size-m(14);
    line-height: size-m(24);
    font-weight: 300;

      .bold{
        font-weight: 700;
      }

    @media screen and (min-width:768px) {
      font-size: size(21);
      line-height: size(40);
    }
  }
  .nowrap{
     white-space:nowrap; 
    }

}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
