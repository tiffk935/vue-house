<template>
  <section class="s8 relative">
    <swiper 
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
          <div class="title absolute">
            <div class="text text-white">Alive 健身房</div>
          </div>
          <img src="@/section/s8/1.jpg" alt="雙和心">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative">
          <div class="title absolute">
            <div class="text text-white">Alive 健身房</div>
          </div>
          <img src="@/section/s8/1.jpg" alt="雙和心">
        </div>
      </swiper-slide>
    </swiper>
    <img class="logo absolute" src="@/section/s8/logo.svg" alt="雙和心">
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {

  .swiper-button-next, .swiper-button-prev {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: size-m(12.8 * 1.5);
    height: size-m(22.86 * 1.5);
    // top: 36vw;
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

  .swiper img {
    width: 100%;
    height: size-m(441);
    object-fit: cover;
    @media screen and (min-width:768px) {
      height: auto;
    }
  }

  .title {
    background: linear-gradient(90deg, rgba(221, 19, 115, 0) 0%, rgba(221, 19, 115, 0.08) 2%, rgba(221, 19, 115, 0.32) 9%, rgba(221, 19, 115, 0.53) 16%, rgba(221, 19, 115, 0.7) 23%, rgba(221, 19, 115, 0.83) 30%, rgba(221, 19, 115, 0.92) 37%, rgba(221, 19, 115, 0.98) 44%, #DD1373 50%, rgba(221, 19, 115, 0.98) 56%, rgba(221, 19, 115, 0.91) 62%, rgba(221, 19, 115, 0.8) 70%, rgba(221, 19, 115, 0.64) 77%, rgba(221, 19, 115, 0.45) 85%, rgba(221, 19, 115, 0.21) 94%, rgba(221, 19, 115, 0) 100%);
    opacity: 0.7;
    width: 100%;
    height: size-m(42);
    top: 0;
    left: 0;
    z-index: 1;
    @media screen and (min-width:768px) {
      height: size(97);
    }

    .text {
      text-align: center;
      font-weight: 500;
      font-size: size-m(20);
      line-height: size-m(42);
      @media screen and (min-width:768px) {
        font-size: size(49);
        line-height: size(97);
      }
    }

    img {
      width: size-m(116);
      top: size-m(10);
      left: size-m(130);
      @media screen and (min-width:768px) {
        width: size(284);
        top: size(25);
        left: size(818);
      }
    }
  }

  .logo {
    width: size-m(170);
    left: size-m(175);
    top: size-m(55);
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(505);
      left: size(1191);
      top: size(252);
    }
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
