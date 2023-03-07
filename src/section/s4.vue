<template>
  <section class="s4 relative">
    <img class="en" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400" src="@/section/s4/en.svg" />
    <div class="title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">世界の隈研吾</div>
    <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
      東京奧運主場館‧新國立競技場<br class="block md:hidden">設計師/國寶級建築師 隈研吾
    </p>
    <div class="slider" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000">
      <swiper 
        :effect="'coverflow'"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modulesRef"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <img src="@/section/s4/1.jpg" />
          <img src="@/section/s4/t1.png" class="name" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/2.jpg" />
          <img src="@/section/s4/t1.png" class="name" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/3.jpg" />
          <img src="@/section/s4/t1.png" class="name" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/4.jpg" />
          <img src="@/section/s4/t1.png" class="name" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/5.jpg" />
          <img src="@/section/s4/t1.png" class="name" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/6.jpg" />
          <img src="@/section/s4/t2.png" class="name" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s4 {
  padding: size-m(74) size-m(0) size-m(52) size-m(0);
  text-align: center;
  @media screen and (min-width:768px) {
    padding: size(113) size(0) size(129) size(0);
  }

  .en {
    width: size-m(328);
    margin: 0 auto size-m(56) auto;
    @media screen and (min-width:768px) {
      width: size(786.41);
      margin: 0 auto size(27.71) auto;
    }
  }

  .title {
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(25);
    line-height: size-m(36);
    margin-bottom: size-m(12);
    @media screen and (min-width:768px) {
      font-size: size(38);
      line-height: size(55);
      margin-bottom: size(52);
    }
  }

  p {
    font-weight: 400;
    font-size: size-m(15);
    line-height: size-m(22);
    margin-bottom: size-m(49);
    @media screen and (min-width:768px) {
      font-size: size(18);
      line-height: size(39);
      margin-bottom: size(72);
    }
  }

  .slider {
    @media screen and (min-width:768px) {
      padding-bottom: size(64);
    }

    .swiper {
      overflow: visible;

      .swiper-slide {
        width: size-m(327);
        margin: 0 5vw;
        .name{
          position: absolute;
          bottom: size-m(5);
          right: size-m(10);
          height:size-m(11);
          filter: drop-shadow(0px 1px 2px #0009);
        }
        &.swiper-slide-active{
          transform: translate3d(0px, 0px, 0px)rotate(0) !important;
        }
        @media screen and (min-width:768px) {
          width: size(1040);
        .name{
          bottom: size(10);
          right: size(15);
          height:size(25);
        }
        }
      }

      .swiper-pagination {
        bottom: -1vw;
        height: 0;
        display: none;
        @media screen and (min-width:768px) {
          display: block;
        }
      }

      .swiper-pagination-bullet {
        width: size(12);
        height: size(12);
        margin: 0 size(16);
        opacity: 1;
        background: #808080;
      }

      .swiper-pagination-bullet-active {
        background: #333333;
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
const modulesRef = ref([Pagination, Autoplay, EffectCoverflow]);
</script>
