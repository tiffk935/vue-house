<template>
  <section class="s12 w-full relative text-[#173868] bg-[#C8D1D5]">
    <div class="txt text-center md:text-left">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title">定格國際 對味大器</div>
        <div class="subtitle">外觀語彙 和世界品味齊頭</div>
        <div class="content md:hidden">
          平實路交織裕永路的軸線氣度，極淬15層天際之藝<br>
          獨步時尚與綠海一線的寬懷，私藏世界美學內涵<br>
          玩藝語彙、從容曲線，致敬跨時空的傳世格調
        </div>
      </div>
    </div>
    <div class="content hidden md:block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      平實路交織裕永路的軸線氣度，極淬15層天際之藝<br>
      獨步時尚與綠海一線的寬懷，私藏世界美學內涵<br>
      玩藝語彙、從容曲線，致敬跨時空的傳世格調
    </div>
    <div class="imgs hidden md:block">
      <div class="img absolute">
        <img class="block" src="@/section/s12/1.jpg" />
        <div class="info absolute">3D外觀合成示意圖</div>
      </div>
      <div class="img absolute">
        <img class="block" src="@/section/s12/2.jpg" />
        <div class="info absolute">3D外觀合成示意圖</div>
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
          <div class="img relative">
            <img class="block" src="@/section/s12/1.jpg" />
            <div class="info absolute">3D外觀合成示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img relative">
            <img class="block" src="@/section/s12/2.jpg" />
            <div class="info absolute">3D外觀合成示意圖</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  font-size: size-m(13);
  font-weight: 500;
  line-height: size-m(20);
  @media (min-width: 768px) {
    text-align: justify;
    font-size: size(19);
    line-height: size(33);
    height: size(1080);
  }

  .txt {
    padding: size-m(50) size-m(30);
    z-index: 1;
    @media (min-width: 768px) {
      position: absolute;
      top: size(236);
      left: size(185);
      width: size(540);
      text-align: right;
      padding: 0;
    }

    .title {
      font-family: "Noto Serif TC";
      font-size: size-m(30);
      font-weight: 700;
      letter-spacing: size-m(6.9);
      margin-bottom: size-m(5);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(48);
        letter-spacing: size(15.84);
        margin-bottom: size(3);
        padding-bottom: 0;
        transform: translateX(size(15.84))
      }
    }

    .subtitle {
      font-family: "Noto Serif TC";
      font-size: size-m(15);
      font-weight: 700;
      letter-spacing: size-m(4.95);
      margin-bottom: size-m(17);
      line-height: normal;
      @media (min-width: 768px) {
        font-size: size(24);
        letter-spacing: size(7.92);
        margin-bottom: size(0);
      }
    }
  }

  .content {
    @media (min-width: 768px) {
      position: absolute;
      top: size(868);
      left: size(795 - 25);
      width: size(430);
      z-index: 1;
    }
  }

  .img {
    width: 100%;
    height: size-m(446);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .imgs .img {
    &:nth-child(1) {
      width: size(732);
      height: auto;
      left: 0;
      top: size(478);
    }

    &:nth-child(2) {
      width: size(1125);
      height: auto;
      // left: size(795);
      left: auto;
      right: 0;
      top: size(133);
    }

    img {
      height: auto;
    }
  }

  .info {
    bottom: size-m(4);
    right: size-m(4);
    color: #fff;
    font-size: size-m(12);
    line-height: normal;
    @media (min-width: 768px) {
      bottom: size(10);
      right: size(10);
      font-size: size(12);
    }
  }

  .slider {
    .swiper-button-next, .swiper-button-prev {
      width: size-m(40);
      height: size-m(40);
      color: #fff;
      justify-content: flex-start;
      text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.60);

      &:after {
        font-size: 7vw;
        @media (min-width: 768px) {
          font-size: 1.4vw;
        }
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