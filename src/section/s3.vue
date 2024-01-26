<template>
  <section class="s3 w-full relative text-white bg-[#173868] md:flex md:items-stretch md:flex-row-reverse">
    <div class="txt text-center md:flex md:justify-center md:items-center">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">渴望時尚</div>
        <div class="subtitle">完美的顛覆 <br class="md:hidden">總和你所有的渴望</div>
        <div class="content">
          台北信義計畫區<br>
          台中七期計畫區<br>
          台南平實重劃區
        </div>
      </div>
    </div>
    <div class="pic hidden md:flex md:flex-wrap md:flex-1">
      <div class="img relative w-full">
        <img class="w-full block" src="@/section/s3/1.jpg" />
        <div class="city absolute">TAINAN</div>
        <div class="name absolute">台南平實重劃區</div>
        <div class="en absolute">LANDMARK OF TAINAN</div>
        <div class="info absolute">平實重劃區實景拍攝</div>
      </div>
      <div class="img relative w-1/2">
        <img class="w-full h-full block" src="@/section/s3/2.jpg" />
        <div class="city absolute">TAINAN</div>
        <div class="name absolute">台南平實重劃區</div>
        <div class="info absolute">台北信義計畫區示意圖</div>
      </div>
      <div class="img relative w-1/2">
        <img class="w-full h-full block" src="@/section/s3/3.jpg" />
        <div class="city absolute">TAINAN</div>
        <div class="name absolute">台南平實重劃區</div>
        <div class="info absolute">台中七期計畫區示意圖</div>
      </div>
    </div>
    <div class="slider md:hidden">
      <swiper
        :loop="true"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="img relative h-full">
            <img class="w-full block" src="@/section/s3/1.jpg" />
            <div class="city absolute">TAINAN</div>
            <div class="name absolute">台南平實重劃區</div>
            <div class="en absolute">LANDMARK OF TAINAN</div>
            <div class="info absolute">平實重劃區實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img relative h-full">
            <img class="w-full block" src="@/section/s3/2.jpg" />
            <div class="city absolute">TAINAN</div>
            <div class="name absolute">台南平實重劃區</div>
            <div class="info absolute">台北信義計畫區示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img relative h-full">
            <img class="w-full block" src="@/section/s3/3.jpg" />
            <div class="city absolute">TAINAN</div>
            <div class="name absolute">台南平實重劃區</div>
            <div class="info absolute">台中七期計畫區示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  font-size: size-m(14);
  font-weight: 500;
  line-height: 200%;
  @media (min-width: 768px) {
    font-size: size(19);
    line-height: size(33);
  }

  .txt {
    padding: size-m(50) size-m(33);
    @media (min-width: 768px) {
      width: calc(size(1920 - 1215));
      padding: 0;
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(9.9);
      margin-bottom: size-m(13);
      padding-bottom: size-m(13);
      position: relative;
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(58);
        letter-spacing: size(19.14);
        margin-bottom: size(24);
        padding-bottom: size(19);
      }
  
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: size-m(115);
        height: size-m(1);
        background: #fff;
        @media (min-width: 768px) {
          width: size(215);
          height: size(1);
        }
      }
    }

    .subtitle {
      font-family: "Noto Serif TC";
      font-size: size-m(15);
      font-weight: 700;
      letter-spacing: size-m(4.95);
      margin-bottom: size-m(26);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
        margin-bottom: size(43);
      }
    }
  }

  .city {
    font-family: "Noto Serif TC";
    color: rgba(255, 255, 255, 0.30);
    font-weight: 700;
    line-height: normal;
    top: size-m(-17.16);
    right: size-m(-3.92);
    font-size: size-m(42);
    letter-spacing: size-m(9.66);
    @media (min-width: 768px) {
      top: size(-24);
      right: size(-2 - 13.57);
      font-size: size(59);
      letter-spacing: size(13.57);
    }
  }

  .name {
    font-family: "Noto Serif TC";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    top: size-m(12.84);
    right: size-m(32);
    font-size: size-m(20);
    letter-spacing: size-m(4.2);
    @media (min-width: 768px) {
      top: size(23);
      right: size(27 - 9.18);
      font-size: size(18);
      letter-spacing: size(9.18);
    }
  }

  .info {
    bottom: size-m(4);
    right: size-m(7);
    font-size: size-m(12);
    @media (min-width: 768px) {
      bottom: size(6);
      right: size(9);
      font-size: size(12);
    }
  }

  .img {
    margin-top: size(12);

    &:nth-child(2) {
      width: calc(50% - size(6));
      margin-right: size(6);
    }

    &:nth-child(3) {
      width: calc(50% - size(6));
      margin-left: size(6);
    }
  }

  .img:nth-child(1) {
    margin-top: size(0);

    .city {
      @media (min-width: 768px) {
        top: size(-33);
        right: size(-3 - 18.86);
        font-size: size(82);
        letter-spacing: size(18.86);
      }
    }

    .name {
      @media (min-width: 768px) {
        top: size(26);
        right: size(35 - 19.38);
        font-size: size(38);
        letter-spacing: size(19.38);
      }
    }

    .en {
      font-family: "Noto Serif TC";
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      top: size-m(40);
      right: size-m(32);
      font-size: size-m(10);
      letter-spacing: size-m(2.3);
      @media (min-width: 768px) {
        top: size(87);
        right: size(67 - 7.95);
        font-size: size(15);
        letter-spacing: size(7.95);
      }
    }
  }

  .slider {
    .swiper-wrapper {
      align-items: stretch;

      .swiper-slide {
        height: auto;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .swiper-button-next, .swiper-button-prev {
      width: size-m(40);
      height: size-m(40);
      color: #fff;
      justify-content: flex-start;

      &:after {
        font-size: 7vw;
      }
    }

    .swiper-button-next {
      justify-content: flex-end;
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";
const modules = ref([Autoplay, Navigation]);
</script>