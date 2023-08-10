<template>
  <section class="s8 relative bg-[#EEEEEE]">
    <img class="img absolute" src="@/section/s8/img.png" data-aos="fade-up" data-aos-delay="0" />
    <div class="slider absolute" data-aos="fade-up" data-aos-delay="0">
      <swiper 
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img class="hidden md:block" src="@/section/s8/01.jpg" />
          <img class="md:hidden" src="@/section/s8/01m.jpg" />
          <div class="text-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="hidden md:block" src="@/section/s8/02.jpg" />
          <img class="md:hidden" src="@/section/s8/02m.jpg" />
          <div class="text-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="hidden md:block" src="@/section/s8/03.jpg" />
          <img class="md:hidden" src="@/section/s8/03m.jpg" />
          <div class="text-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="hidden md:block" src="@/section/s8/04.jpg" />
          <img class="md:hidden" src="@/section/s8/04m.jpg" />
          <div class="text-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img class="hidden md:block" src="@/section/s8/05.jpg" />
          <img class="md:hidden" src="@/section/s8/05m.jpg" />
          <div class="text-white"></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="text absolute">
      <div class="title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">大樹寓邸，森態花園</div>
      <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        建築致敬自然，設計結合環境裡珍貴的自然生態和北士科數位城市概念，以城市森林為主題，宛如大樹卓立文林北路大道。詩意雲山水譜寫達麗天蒔森林庭園風景，臨路退縮園道，層層綠意包覆森態花園。
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s8 {
  width: 100%;
  height: size-m(868);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .img {
    width: size-m(285);
    top: size-m(42);
    left: size-m(45);
    mix-blend-mode: multiply;
    @media screen and (min-width:768px) {
      width: size(477);
      top: size(131);
      left: size(1360);
    }
  }

  .slider {
    width: size-m(330);
    top: size-m(347);
    left: size-m(20);
    @media screen and (min-width:768px) {
      width: size(1270);
      top: size(134);
      left: size(0);
    }

    .text-white {
      position: absolute;
      top: size-m(10);
      right: size-m(10);
      font-size: size-m(12);
      line-height: size-m(17);
      text-shadow: size-m(0) size-m(2) size-m(2) rgba(0, 0, 0, 0.8);
      @media screen and (min-width:768px) {
        top: size(10);
        right: size(10);
        font-size: size(22);
        line-height: size(34);
        text-shadow: size(0) size(2) size(2) rgba(0, 0, 0, 0.8);
      }
    }

    .swiper-slide {
      height: size-m(330);
      @media screen and (min-width:768px) {
        height: auto;
      }

      img {
        height: 100%;
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: auto;
          width: 100%;
        }
      }
    }

    .swiper-pagination {
      bottom: 0;
      text-align: right;
      padding: size-m(10);
      line-height: 1;
      @media screen and (min-width:768px) {
        padding: size(30) size(20);
        text-align: left;
      }
    }

    .swiper-pagination-bullet {
      opacity: 1;
      background: none;
      border: size-m(1) solid #fff;
      width: size-m(10);
      height: size-m(10);
      margin: 0 size-m(4);
      @media screen and (min-width:768px) {
        border: size(1) solid #fff;
        width: size(14);
        height: size(14);
        margin: 0 size(7.5);
      }
    }

    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }

  .text {
    top: size-m(689);
    left: 0;
    padding: 0 size-m(31);
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    color: #4D4D4D;
    @media screen and (min-width:768px) {
      top: size(666);
      left: size(1360);
      width: size(469);
      padding: 0 size(0);
      font-size: size(22);
      line-height: size(34);
    }

    .title {
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(29);
      letter-spacing: 0.06em;
      color: #0A534C;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(39);
        line-height: size(56);
        margin-bottom: size(33);
      }
    }
  }
}

</style>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const modules = ref([Pagination, Navigation, Autoplay]);
</script>
