<template>
  <section class="s4 user-n w-full relative bg-[#931F1C]">
    <div class="content">
      <div class="slider">
        <swiper
          :effect="'fade'"
          :speed="1000"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
        >
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s4/slider/1.jpg" />
              <div class="txt">捷運中山站</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s4/slider/2.jpg" />
              <div class="txt">捷運中山站</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s4/slider/3.jpg" />
              <div class="txt">捷運中山站</div>
            </div>
          </swiper-slide>
        </swiper>
        <img class="en absolute md:hidden" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" src="@/section/s4/en-m.svg" />
        <img class="en absolute hidden md:block" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" src="@/section/s4/en.svg" />
      </div>
      <div class="content-inner" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0">
        <img class="circle" src="@/section/s4/circle.png" />
        <div class="t1 text-center md:text-left text-white font-['Noto_Serif_TC']">雙捷運中山站130米 <br>繁華以您為中心</div>
        <div class="t2 text-center md:text-left text-[#E9C468]">EVERYTHING START FROM HERE</div>
        <div class="t3 text-justify text-white font-['Noto_Serif_TC']">若說住近捷運是夢寐以求，雙捷運必定是僅存碩果。位居都心核心圈十字交點，坐擁雙捷運保值絕佳利基點，微距離130米進站捷運，成就代代相傳的永恆資產價值。</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;

  .swiper-slide {
    .txt {
      position: absolute;
      top: size-m(13);
      right: size-m(23);
      color: #fff;
      font-size: size-m(11);
      line-height: size-m(16);
      letter-spacing: -0.04em;
      font-weight: 500;
      @media (min-width: 768px) {
        top: auto;
        bottom: size(21);
        left: size(30);
        right: auto;
        font-size: size(17);
        line-height: size(25);
      }
    }
  }

  .content {
    padding: 0 0 size-m(65) 0;
    @media (min-width: 768px) {
      padding: size(121) size(180) size(137) size(185);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row-reverse;
    }

    .slider {
      position: relative;
      margin-bottom: size-m(57);
      @media (min-width: 768px) {
        width: size(935);
        margin-bottom: 0;
      }

      .swiper-pagination {
        line-height: 1;
        width: auto;
        left: auto;
        right: size-m(39);
        bottom: size-m(23.75);
        @media (min-width: 768px) {
          left: auto;
          right: size(30);
          bottom: size(21);
        }

        .swiper-pagination-bullet {
          background: none;
          border: size-m(1) solid #fff;
          opacity: 1;
          width: size-m(11.25);
          height: size-m(11.25);
          margin: 0 size-m(5);
          @media (min-width: 768px) {
            border-width: size(1);
            width: size(13);
            height: size(13);
            margin: 0 size(6);
          }

          &.swiper-pagination-bullet-active {
            background: #fff;
          }
        }
      }

      .en {
        position: absolute;
        bottom: size-m(18.9);
        left: size-m(29.8);
        width: size-m(148);
        z-index: 1;
        @media (min-width: 768px) {
          top: size(-30);
          left: auto;
          right: size(-45.57);
          width: size(73.57);
          filter: drop-shadow(2px 2px 5px #00000041);
        }
      }
    }

    .content-inner {
      @media (min-width: 768px) {
        position: relative;
        width: size(533);
      }

      .circle {
        display: none;
        @media (min-width: 768px) {
          display: block;
          position: absolute;
          top: size(12);
          left: size(-140);
          width: size(115.5);
        }
      }
    }

    .t1 {
      font-size: size-m(19);
      line-height: size-m(27);
      font-weight: 600;
      letter-spacing: 0.08em;
      margin-bottom: size-m(21);
      @media (min-width: 768px) {
        // width: size(388);
        //padding-left: size(135);
        font-size: size(41);
        line-height: size(59);
        margin-bottom: size(20);
      }
    }

    .t2 {
      font-size: size-m(9.5);
      line-height: size-m(14);
      font-weight: 500;
      letter-spacing: 0.16em;
      margin-bottom: size-m(24);
      @media (min-width: 768px) {
        //padding-left: size(135);
        font-size: size(18);
        line-height: size(26);
        margin-bottom: size(73);
      }
    }

    .t3 {
      font-size: size-m(11);
      line-height: 232.1%;
      font-weight: 600;
      letter-spacing: -0.01em;
      width: size-m(295);
      margin: 0 auto;
      @media (min-width: 768px) {
        font-size: size(20);
        letter-spacing: 0.11em;
        margin: 0;
        width: size(455);
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from "swiper";
const modules = ref([Autoplay, Pagination, EffectFade]);
</script>
