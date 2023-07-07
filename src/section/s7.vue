<template>
  <section class="s7 relative bg-[#00803F] text-white">
    <div class="content">
      <div class="title md:flex" data-aos="fade-up" data-aos-delay="0">
        <div class="t1">漫漫從容的</div>
        <div class="t2">奢感之旅</div>
      </div>
      <div class="t3" data-aos="fade-up" data-aos-delay="0">沁然風光 動靜蘊美</div>
      <div class="t4" data-aos="fade-up" data-aos-delay="0">空間以明亮為主色調，窗外濃綠走進公設，簡化的家具配飾塑造沈穩質感，平衡了公共與私密的界線，構築成靜奢雅致、開放清爽的美感旅行。</div>
    </div>
    <div class="imgs relative">
      <div class="slider relative">
        <swiper
          :pagination="{
            clickable: true
          }"
          :navigation="true"
          :loop="true"
          :speed="1000"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
        >
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s7/1.webp" />
              <div class="img-txt absolute">公設3D示意圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s7/2.webp" />
              <div class="img-txt absolute">公設3D示意圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s7/3.webp" />
              <div class="img-txt absolute">公設3D示意圖</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  @media screen and (min-width:768px) {
    display: flex;
    align-items: stretch;
    flex-direction: row-reverse;
  }

  .content {
    padding: size-m(55.37) size-m(32.6) size-m(53.26) size-m(32.6);
    @media screen and (min-width:768px) {
      padding: size(160) size(92) size(160) size(92);
      width: calc(100% - size(1170));
    }
  }

  .title {
    @media screen and (min-width:768px) {
      margin-bottom: size(63);
    }
  }

  .t1 {
    font-size: size-m(24); 
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      font-size: size(71); 
      width: size(73);
      margin: 0 size(32) 0 0;
    }
  }

  .t2 {
    font-size: size-m(30);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(49);
    @media screen and (min-width:768px) {
      font-size: size(82); 
      width: size(73);
      margin: 0;
    }
  }

  .t3 {
    font-size: size-m(18);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 150%; 
    padding-bottom: size-m(13);
    margin-bottom: size-m(13);
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(32);
      padding-bottom: size(30.31);
      margin-bottom: size(36.32);
      display: inline-block;
    }

    &:after {
      content: '';
      width: size-m(150);
      height: size-m(2);
      background: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      @media screen and (min-width:768px) {
        width: size(260);
        height: size(2);
      }
    }
  }

  .t4 {
    text-align: justify;
    font-size: size-m(13);
    font-family: 'Noto Sans TC';
    line-height: 170%; 
    @media screen and (min-width:768px) {
      font-size: size(22);
    }
  }

  .imgs {
    @media screen and (min-width:768px) {
      width: size(1170);
      background: #D2D2D2;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 size(85);
    }
  }

  .slider {
    overflow: hidden;
    @media screen and (min-width:768px) {
      padding-bottom: size(24);
      transform: translateY(size(-24));
    }

    .swiper {
      width: 100%;
      overflow: visible;
    }

    .swiper-button-next, .swiper-button-prev {
      &:after {
        font-size: 7vw;
        color: #fff;
        @media screen and (min-width:768px) {
          font-size: 3vw;
        }
      }
    }

    .swiper-button-prev {
      left: size-m(12);
      @media screen and (min-width:768px) {
        left: size(32);
      }
    }

    .swiper-button-next {
      right: size-m(12);
      @media screen and (min-width:768px) {
        right: size(32);
      }
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        bottom: size(-25);
        line-height: 1;
      }

      .swiper-pagination-bullet {
        opacity: 1;
        width: size(12);
        height: size(12);
        background: #808080;
        margin: 0 size(6.5);

        &.swiper-pagination-bullet-active {
          background: #000;
        }
      }
    }
  }

  .img {
    @media screen and (min-width:768px) {
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .img-txt {
    font-size: size-m(12);
    font-weight: 500;
    line-height: normal; 
    left: size-m(4.5);
    bottom: size-m(4);
    @media screen and (min-width:768px) {
      font-size: size(15);
      left: size(14);
      bottom: size(11);
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