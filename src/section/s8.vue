<template>
  <section class="s8 user-n w-full relative text-white bg-[#931F1C] text-center md:text-left">
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
            <img class="block w-full" src="@/section/s8/demo.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/demo.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/demo.jpg" />
          </div>
        </swiper-slide>
      </swiper>
      <img class="en absolute" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" src="@/section/s8/en.svg" />
    </div>

    <div class="content">
      <div class="title" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1 font-['Noto_Serif_TC']">回遊式隱奢俱樂部</div>
        <div class="t2 text-[#CCB071]">THE SHAPE OF ELEGANCE</div>
      </div>
      <div class="t3 font-['Noto_Serif_TC']" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0">
        立足繁盛與靜謐的交點，沉浸光輝與影翳的共享空間，擬態日式 SHARE LOUNGE 社區客廳，回遊式休憩空間構造，精緻傢俬呼應線形公園遊逸弧線，在家的每一步都是風景。
      </div>
    </div>

    <img class="en" src="@/section/s8/en.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;

  .slider {
    position: relative;

    .swiper-slide img {
      height: size-m(437);
      object-fit: cover;
      @media (min-width: 768px) {
        height: auto;
      }
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
  }

  .content {
    padding: size-m(47) size-m(40) size-m(40) size-m(40);
    @media (min-width: 768px) {
      padding: size(57) size(132) size(67) size(128);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .t1 {
      font-size: size-m(19);
      line-height: size-m(27);
      font-weight: 600;
      letter-spacing: 0.14em;
      margin-bottom: size-m(21);
      @media (min-width: 768px) {
        font-size: size(45);
        line-height: size(65);
        margin-bottom: size(20);
        letter-spacing: .03em;
      }
    }

    .t2 {
      font-size: size-m(9.5);
      line-height: size-m(14);
      font-weight: 500;
      letter-spacing: 0.16em;
      margin-bottom: size-m(26);
      @media (min-width: 768px) {
        font-size: size(18);
        line-height: size(26);
        margin-bottom: 0;
        letter-spacing: .16em;
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
        width: size(888);
      }
    }
  }

  .en {
    position: absolute;
    top: size-m(28.76);
    right: size-m(45.8);
    width: size-m(209.92);
    z-index: 1;
    @media (min-width: 768px) {
      top: size(122);
      right: size(125);
      width: size(590);
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
