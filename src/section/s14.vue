<template>
  <section class="s14 relative">
    <div class="title absolute">
      <div class="line line1 absolute"></div>
      <div class="line line2 absolute"></div>
      <div class="t1 upup">
        <div class="tt flex">
          <span>展宜常閑</span>
          <span>空間展演</span>
        </div>
      </div>
      <div class="t2 upup">
        <img class="en absolute" src="@/section/s8/en.svg" />
        <div class="tt">
        </div>
      </div>
    </div>
    <div class="slider absolute">
      <swiper
        :slidesPerView="1.15"
        :centeredSlides="true"
        :pagination="{
          clickable: true
        }"
        :navigation="false"
        :loop="true"
        :speed="1000"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '768': {
            slidesPerView: 1.2,
            centeredSlides: false,
          },
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img class="w-full" src="@/section/s14/01.webp" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="@/section/s14/02.webp" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="@/section/s14/03.webp" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="@/section/s14/04.webp" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="@/section/s14/05.webp" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="txt absolute">*樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、<br class="md:hidden">植栽畫作等為設計表現，實際依買賣合約書為準。</div>
    <div class="t3 upup absolute">
      <div class="tt">
        戶戶邊間探光3米6訂製精品<br>
        全球頂級奢華配備 客製天母高規生活
      </div>
    </div>
    <div class="t4 upup absolute">
      <div class="tt">
        規劃3米6挑高自由空間，戶戶邊間採光，陽台綠意花香<br>
        燦燦陽光可以曬進生活，在理想中的家園細細品味人生<br>
        精選日本、德、英、義、美國等高端品牌建材設備<br>
        兼具實用舒適與尊榮享受，打造天母質感的高規格生活
      </div>
    </div>
    <div class="absolute line3 md:hidden"></div>
    <div class="absolute line4 md:hidden"></div>
    <img class="style absolute hidden md:block" src="@/section/s14/style.svg" alt="27坪訂製宅" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s14 {
  width: 100%;
  height: size-m(508);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1290);
  }

  .line3 {
      width: size-m(1);
      height: size-m(132);
      top: size-m(290);
      left:size-m(28);
      background: #000;
  }
  .line4 {
      width: size-m(1);
      height: size-m(132);
      top: size-m(290);
      right:size-m(28);
      background: #000;
  }

  .title {
    width: size-m(375);
    left: size-m(0);
    top: size-m(22.43);
    @media screen and (min-width:768px) {
      width: size(1369);
      left: size(271.43);
      top: size(55);
    }

    .line {
      width: size-m(50.73);
      height: size-m(1);
      top: size-m(30);
      background: #000;
      @media screen and (min-width:768px) {
        width: size(386);
        height: size(1);
        top: size(90);
      }

      &.line1 {
        left: size-m(35);
        @media screen and (min-width:768px) {
        left: size(0);
      }
      }

      &.line2 {
        right: size-m(35);
        @media screen and (min-width:768px) {
        right: size(0);
      }
      }
    }

    .t1 {
      text-align: center;
      font-family: 'Noto Serif TC';
      font-size: size-m(19);
      font-weight: 600;
      line-height: normal;
      letter-spacing: size-m(0.75);
      text-indent: size-m(0.45);
      @media screen and (min-width:768px) {
        font-size: size(51);
        font-weight: 600;
        line-height: normal;
        letter-spacing: size(0.45);
        text-indent: size(1.53);
      }

      &:before, &:after {
        content: '';
        position: absolute;
        top: 3.6vw;
        left: 48.2vw;
        width: 4vw;
        height: size-m(1);
        background: #000;
        transform: rotate(45deg);
        @media screen and (min-width:768px) {
          top: 2.1vw;
          left: 34.5vw;
          width: 2.5vw;
          height: size(1);
        }
      }

      &:after {
        transform: rotate(-45deg);
      }
      
      .tt {
        justify-content: space-between;
        width: size-m(181);
        margin: 0 auto;
        @media screen and (min-width:768px) {
          width: size(477);
        }
      }
    }

    .t2 {
      text-align: center;
      font-family: 'Noto Serif TC';
      font-size: size-m(5);
      font-weight: 600;
      line-height: 140%;
      @media screen and (min-width:768px) {
        font-size: size(11);
        margin-top: size(7);
      }

      .en{
        width: size-m(182);
        left: size-m(96);
         @media screen and (min-width:768px) {
        width: size(470);
        left: size(450);
         }
      }
    }
  }

  .slider {
    left: size-m(0);
    top: size-m(81);
    width: size-m(375);
    @media screen and (min-width:768px) {
      left: size(74.64);
      top: size(240);
      width: size(1762);
    }

    .swiper-pagination {
      display: none;
    }

    .swiper-slide {
      padding: 0 1vw;
      @media screen and (min-width:768px) {
        padding: 0 2vw 0 0vw;
      }
      
    }

    .swiper-slide img {
      height: size-m(155);
      @media screen and (min-width:768px) {
        height: size(730);
      }
    }
  }

  .t3 {
    left: size-m(46.62);
    top: size-m(290);
    color: #39684F;
    font-family: 'Noto Serif TC';
    font-size: size-m(16);
    font-weight: 600;
    line-height: 140%;
    letter-spacing: size-m(0.51);
    @media screen and (min-width:768px) {
      left: size(75.95);
      top: size(1045.56);
      width: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-left: size(1) solid #000;
      font-size: size(34);
      line-height: normal;
      letter-spacing: 0;
      padding-left: size(80.05);
    }
  }

  .t4 {
    left: size-m(46.62);
    top: size-m(350);
    // width: size-m(294);
    font-family: 'Noto Serif TC';
    font-size: size-m(12);
    font-weight: 600;
    line-height: 160%;
    letter-spacing: size-m(0);
    @media screen and (min-width:768px) {
      left: size(947.64);
      top: size(1041.5);
      // width: size(498);
      color: #39684F;
      font-size: size(20);
      font-weight: 600;
      line-height: 180%;
      letter-spacing: size(0.6);
    }
  }
  .txt {
    width: size-m(239);
    left: size-m(28);
    top: size-m(240);
    font-size: size-m(9);
    text-align: left;
    color: #666666;
    z-index: 10;
    @media screen and (min-width:768px) {
      width: auto;
      left: size(90);
      top: size(940);
      font-weight: 700;
      font-size: size(14);
      line-height: size(20);
      letter-spacing: 0.03em;
      color: #FFFFFF;
    }
  }

  .style {
    left: size-m(300.66);
    top: size-m(246);
    width: size-m(51.72);
    @media screen and (min-width:768px) {
      left: size(1547.36);
      top: size(1045);
      width: size(288.91);
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