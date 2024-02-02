<template>
  <section class="s8 w-full relative text-[#173868] bg-[#C8D1D5] md:flex md:items-stretch md:flex-row-reverse">
    <div class="txt text-center md:flex md:justify-center md:items-center">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">渴望速度</div>
        <div class="subtitle">無以複製的趨動速度</div>
        <div class="content text-left">
          <p>國道1號／ 速度馳騁大灣交流道、仁德交流道，轉高鐵、接南科，南來北往、東西駕馭，無往不利</p>
          <p>平實轉運站／ 台南首座整合交通運輸、百貨休閒、都市景觀的轉運中心，台南新生活風格地標誕生</p>
          <p>藍綠雙捷／ 未來捷運藍線、綠線將交會於平實轉運站，坐擁軌道經濟的交叉雙倍動力</p>
          <p>台南高鐵／ 悠遊速度，接軌全台一日生活圈，暢達三井OUTLET、綠能智慧科技場域</p>
        </div>
      </div>
    </div>
    <div class="pic hidden md:flex md:flex-wrap md:flex-1">
      <div class="img relative w-full">
        <img class="w-full block" src="@/section/s8/1.webp" />
        <div class="info absolute">台南高鐵站實景拍攝</div>
      </div>
      <div class="img relative w-1/2">
        <img class="w-full block" src="@/section/s8/2.webp" />
        <div class="info absolute">情境示意圖</div>
      </div>
      <div class="img relative w-1/2">
        <img class="w-full block" src="@/section/s8/3.webp" />
        <div class="info absolute">情境示意圖</div>
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
          <div class="img">
            <img class="block w-full" src="@/section/s8/1.webp" />
            <div class="info">台南高鐵站實景拍攝</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s8/2.webp" />
            <div class="info">情境示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img class="block w-full" src="@/section/s8/3.webp" />
            <div class="info">情境示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  font-size: size-m(12);
  font-weight: 500;
  line-height: size-m(20);
  @media (min-width: 768px) {
    font-size: size(19);
    line-height: size(33);
  }

  .txt {
    padding: size-m(50) size-m(33);
    @media (min-width: 768px) {
      width: calc(size(1920 - 1215));
      padding: 0 size(132);
    }

    p {
      line-height: size-m(20);
      margin-bottom: size-m(10);
      @media (min-width: 768px) {
        line-height: size(33);
        margin-bottom: size(0);
      }
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(9);
      text-indent: size-m(9);
      margin-bottom: size-m(13);
      padding-bottom: size-m(13);
      position: relative;
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(58);
        letter-spacing: size(19.14);
        text-indent: size(19.14);
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
        background: #173868;
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
      letter-spacing: size-m(5);
      text-indent: size-m(5);
      margin-bottom: size-m(26);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
        text-indent: size(7.92);
        margin-bottom: size(43);
      }
    }
  }

  .info {
    color: #fff;
    @media (min-width: 768px) {
      bottom: size(6);
      right: size(9);
      font-size: size(12);
    }
  }

  .img {
    @media (min-width: 768px) {
      &:nth-child(2) {
        width: calc(50% - size(5));
        margin-top: size(10);
        margin-right: size(5);
      }

      &:nth-child(3) {
        width: calc(50% - size(5));
        margin-top: size(10);
        margin-left: size(5);
      }
    }

    img {
      @media (min-width: 768px) {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .slider {
    .img {
      height: size-m(250);

      .info {
        position: absolute;
        bottom: size-m(10);
        right: size-m(10);
        font-size: size-m(12);
        line-height: normal;
      }
    }

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