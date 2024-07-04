<template>
  <section class="s11 w-full relative">
    <div class="title">
      <div class="en">A decade of cultivated refinement</div>
      <div class="t1">藴育十年雋刻品味<br>雍雋品</div>
    </div>
    <div class="desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      從室內設計源起，深入建築規劃，<br>
      因懂生活的意義才能築起乘載幸福的家，<br>
      <br>
      選址於中正南海特區，<br>
      人文歷史、豐饒綠意、精英匯聚之地。<br>
      百年風情之間，<br>
      細品摹寫雋永傳承的溫潤建築......
    </div>
    <div class="t3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      Inspired by interior design, we delve into architectural planning, understanding life's essence to craft homes that nurture happiness. Nestled in the Zhongzheng Nanhai Special Zone, where culture, history, and nature converge, our spaces embody timeless elegance, weaving together tradition and modernity seamlessly.
    </div>
    <div class="slider">
      <swiper
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s11/1.jpg" />
            <div class="txt">雍雋品 3D示意模擬圖 僅供參考</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s11/2.jpg" />
            <div class="txt">雍雋品 3D示意模擬圖 僅供參考</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  background: #fff;
  @media screen and (min-width:768px) {
    padding-bottom: size(156);
  }

  .title {
    width: 100%;
    height: size-m(170);
    background-image: url(@/section/s11/bg-m.png);
    background-size: 100% 100%;
    padding-top: size-m(35);
    padding-left: size-m(30);
    margin-bottom: size-m(27);
    @media screen and (min-width:768px) {
      height: size(896);
      background-image: url(@/section/s11/bg.png);
      padding-top: size(167);
      padding-left: size(160);
      margin-bottom: size(88);
      display: flex;
    }

    .en {
        color: #BBA693;
        font-size: .5em;
        line-height: 1.32;
        letter-spacing: .13em;
        margin-right:0.43em;
        margin-bottom: .5em;
        text-transform: uppercase;
      @media screen and (min-width:768px) {
        font-size: size(23);
        writing-mode: vertical-lr;
      }
    }

    .t1 {
      font-weight: 700;
      line-height: 150%;
      letter-spacing: .13em;
      @media screen and (min-width:768px) {
        writing-mode: vertical-lr;
      }
    }
  }

  .desc {
    padding: 0 size-m(30);
    margin-bottom: size-m(30);
    @media screen and (min-width:768px) {
      padding: 0 0 0 size(163);
      width: size(420 + 163);
      margin-bottom: size(40);
    }
  }

  .t3 {
    padding: 0 size-m(30);
    font-size: size-m(11);
    font-weight: 700;
    line-height: 241%;
    margin-bottom: size-m(18);
    text-transform: uppercase;
    @media screen and (min-width:768px) {
      padding: 0 0 0 size(163);
      width: size(394 + 163);
      font-size: size(14);
      margin-bottom: 0;
    }
  }

  .slider {
    width: 100%;
    @media screen and (min-width:768px) {
      width: size(1036);
      position: absolute;
      left: size(722);
      bottom: size(156);
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        line-height: 1;
        bottom: size(27);

        .swiper-pagination-bullet {
          opacity: 1;
          background: none;
          width: size(20);
          height: size(20);
          border: size(1) solid #fff;
          margin: 0 size(12);

          &.swiper-pagination-bullet-active {
            background: #fff;
          }
        }
      }
    }

    .swiper-button-next, .swiper-button-prev {
      width: size-m(45);
      height: size-m(45);
      background-size: size-m(12.8) auto;
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        display: none;
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 0;
      background-image: url(@/section/s11/arrow-prev.svg);
      background-position: size-m(7) center;
    }

    .swiper-button-next {
      right: 0;
      background-image: url(@/section/s11/arrow-next.svg);
      background-position: right size-m(7) center;
    }

    .txt {
      position: absolute;
      bottom: size-m(6);
      right: size-m(6);
      color: #FFF;
      font-family: "Noto Sans TC";
      font-size: size-m(12);
      line-height: 133%;
      @media screen and (min-width:768px) {
        bottom: size(12);
        right: size(16);
        font-size: size(14);
      }
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
</script>