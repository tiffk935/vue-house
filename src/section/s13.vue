<template>
  <section class="s13 relative">
    <div class="slider absolute">
      <swiper
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="item">
            <img class="bg absolute md:hidden" src="@/section/s13/bg1-m.png" />
            <img class="bg absolute hidden md:block" src="@/section/s13/bg1.png" />
            <div class="title absolute">承諾工程品質 地質改良樁</div>
            <div class="content absolute">
              <div class="t1">【結構基礎】</div>
              <div class="t2">採用獨立基腳+地改樁，加強建築穩固耐震！降低房子地基因地震被撕裂而倒塌的危險。</div>
              <div class="t1">【鋼筋工法】</div>
              <div class="t2">使用摩擦熔接型SA級鋼筋續接器，柱筋結合跳接式施工，加強抗震！</div>
            </div>
            <img class="img absolute" src="@/section/s13/img1.jpg" />
            <img class="en absolute" src="@/section/s13/en1.svg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <img class="bg absolute md:hidden" src="@/section/s13/bg2-m.png" />
            <img class="bg absolute hidden md:block" src="@/section/s13/bg2.png" />
            <div class="title absolute">防水工法獨到 防水保固三年</div>
            <div class="content absolute">
              <div class="t1">【外牆層縫防水工法】</div>
              <div class="t2">補強樓層與樓層間施工縫之防水,避免雨水從地板面滲入。</div>
              <div class="t1">【外牆窗框防水工法】</div>
              <div class="t2">結構體面做物理性抗裂/防水材料做化學性防水/裝修材做外斜工法排水</div>
            </div>
            <img class="img absolute" src="@/section/s13/img2.jpg" />
            <img class="en absolute" src="@/section/s13/en2.svg" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s13 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .slider {
    width: 100%;
    left: 0;
    top: 0;

    .swiper-button-prev, .swiper-button-next {
      width: size-m(26);
      height: size-m(26);
      background-repeat: no-repeat;
      background-size: size-m(13.58) auto;
      opacity: 1;
      @media screen and (min-width:768px) {
        width: size(60);
        height: size(60);
        background-size: size(31) auto;
        display: none;
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: size-m(9);
      background-image: url(@/section/s8/arrow-prev.svg);
      background-position: left center;
      @media screen and (min-width:768px) {
        left: size(18);
      }
    }

    .swiper-button-next {
      right: size-m(9);
      background-image: url(@/section/s8/arrow-next.svg);
      background-position: right center;
      @media screen and (min-width:768px) {
        right: size(18);
      }
    }

    .item {
      width: 100%;
      height: size-m(667);
      position: relative;
      @media screen and (min-width:768px) {
        height: size(1080);
      }

      .bg {
        width: 100%;
        bottom: 0;
        left: 0;
        @media screen and (min-width:768px) {
          width: size(1048);
        }
      }

      .title {
        left: size-m(28);
        top: size-m(29);
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size-m(24);
        line-height: size-m(34);
        text-align: center;
        letter-spacing: 0.08em;
        color: #231815;
        @media screen and (min-width:768px) {
          left: size(1079);
          top: size(245);
          font-size: size(57);
          line-height: size(82);
          letter-spacing: 0.1em;
        }
      }

      .content {
        width: size-m(337);
        top: size-m(84);
        left: size-m(13);
        z-index: 1;
        @media screen and (min-width:768px) {
          width: size(350);
          top: size(400);
          left: size(1079);
        }
      }

      .t1 {
        font-weight: 500;
        font-size: size-m(16);
        line-height: size-m(23);
        text-align: justify;
        letter-spacing: -0.03em;
        color: #897347;
        margin-bottom: size-m(2);
        @media screen and (min-width:768px) {
          font-size: size(34);
          line-height: size(49);
          margin-bottom: size(8);
        }
      }

      .t2 {
        font-weight: 500;
        font-size: size-m(13);
        line-height: size-m(25);
        text-align: justify;
        letter-spacing: -0.03em;
        padding-left: size-m(17);
        margin-bottom: size-m(16);
        @media screen and (min-width:768px) {
          font-size: size(25);
          line-height: size(55);
          padding-left: size(17);
          margin-bottom: size(28);
        }
      }

      .img {
        width: size-m(213);
        left: size-m(81);
        top: size-m(266);
        @media screen and (min-width:768px) {
          width: size(327);
          left: size(1460);
          top: size(410);
        }
      }

      .en {
        width: auto;
        height: size-m(36.8);
        left: size-m(83);
        top: size-m(586);
        @media screen and (min-width:768px) {
          height: size(89.73);
          left: size(228);
          top: size(439);
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay } from "swiper";
const modules = ref([Navigation, Autoplay]);
</script>