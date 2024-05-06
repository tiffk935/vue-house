<template>
  <section class="s11 user-n w-full relative">
    <img class="logo" src="@/section/s11/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <div class="content">
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1">Aesthetics</div>
        <div class="t2">訂製人文建築 <br>締造天際美學</div>
        <div class="t3">恆合機構認為建築是幸福產業，因此認真講究每個層面，從美學到實用性，從安全到細緻度，期許引領建築風潮及改變城市天際線的實踐理念。 </div>
      </div>
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1">Philosophy</div>
        <div class="t2">建築永恆價值 <br>取決於選地哲學</div>
        <div class="t3">以精耕土地的態度，通過專業規劃，考量在地人文、日向、風向、新觀念、新美學，才將建築落款於最合適的地紋之上，形塑台灣國際城市新風貌。</div>
      </div>
    </div>
    <div class="text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">鍛造美學印記   挹注永恆之作</div>
      <div class="line"></div>
      <div class="t2">恆合機構以建築職人思考，打造建築美學之作。從恆合江山、大安MONEY、恆合瑋石南京復興案到恆合中山，在在均是收藏人生時光的美學建築印記。</div>
    </div>
    <div class="slider">
      <swiper
        :slidesPerView="'auto'"
        :centeredSlides="false"
        :loop="true"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s11/slider/1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s11/slider/2.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s11/slider/3.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s11/slider/4.jpg" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  padding: size-m(90.59) 0 size-m(131) 0;
  background-image: url(@/section/s11/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    padding: size(207) 0 size(270) 0;
    background-image: url(@/section/s11/bg.jpg);
  }

  .logo {
    width: size-m(190.11);
    margin: 0 auto size-m(34.53);
    @media (min-width: 768px) {
      width: size(472.77);
      margin: 0 auto size(166.63);
    }
  }

  .content {
    margin-bottom: size-m(90);
    @media (min-width: 768px) {
      width: size(1378);
      margin: 0 auto size(188) auto;
      display: flex;
      justify-content: space-between;
    }

    .item {
      width: size-m(310);
      padding: size-m(21.5) size-m(29.79) size-m(46.16) size-m(39.25);
      margin: 0 auto size-m(42) auto;
      background-image: url(@/section/s11/bg2.jpg);
      background-size: cover;
      background-position: center center;
      border-top-right-radius: size-m(80);
      position: relative;
      @media (min-width: 768px) {
        width: size(647);
        padding: size(53.63) size(87) size(75) size(97);
        margin: 0;
        border-top-right-radius: size(80);
      }

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: size-m(10);
        background-image: url(@/section/s11/gold-m.jpg);
        background-size: 100% 100%;
        @media (min-width: 768px) {
          height: size(18);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      .t1 {
        color: rgba(211, 173, 98, 0.50);
        font-family: "Noto Serif TC";
        font-size: size-m(14);
        font-weight: 700;
        line-height: normal;
        margin-bottom: size-m(7.79);
        @media (min-width: 768px) {
          font-size: size(40);
          margin-bottom: size(32);
        }
      }

      .t2 {
        color: #123872;
        font-family: "Noto Serif TC";
        font-size: size-m(22);
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        padding-bottom: size-m(15.55);
        border-bottom: size-m(2) solid #123872;
        margin-bottom: size-m(13.85);
        @media (min-width: 768px) {
          font-size: size(34);
          padding-bottom: size(22);
          border-bottom: size(2) solid #123872;
          margin-bottom: size(22);
        }
      }

      .t3 {
        color: #123872;
        text-align: justify;
        font-size: size-m(14);
        line-height: 170%; /* 23.8px */
        @media (min-width: 768px) {
          font-size: size(16);
        }
      }
    }
  }

  .text {
    margin-bottom: size-m(48.74);
    @media (min-width: 768px) {
      margin-bottom: size(122);
    }

    .t1 {
      color: #FFF;
      text-align: center;
      font-family: "Noto Serif TC";
      font-size: size-m(25);
      font-weight: 700;
      line-height: normal;
      margin-bottom: size-m(18.63);
      @media (min-width: 768px) {
        font-size: size(40);
        margin-bottom: size(22);
      }
    }

    .line {
      width: size-m(340);
      height: size-m(2);
      background: linear-gradient(90deg, rgba(235, 191, 85, 0.00) 0.5%, #EBBF55 28%, #EBBF55 71.5%, rgba(235, 191, 85, 0.00) 100%);
      margin: 0 auto size-m(18.63) auto;
      @media (min-width: 768px) {
        width: size(991);
        height: size(2);
        margin: 0 auto size(29) auto;
      }
    }

    .t2 {
      color: #FFF;
      text-align: justify;
      font-size: size-m(14);
      line-height: 170%;
      padding: 0 size-m(27);
      @media (min-width: 768px) {
        font-size: size(18);
        padding: 0;
        width: size(509);
        margin: 0 auto;
      }
    }
  }

  .slider {
    .swiper {
      overflow: visible;
      width: size-m(317);
      @media (min-width: 768px) {
        width: size(1258);
      }

      .swiper-slide {
        width: 100%;
        margin-right: size-m(10) !important;
        @media (min-width: 768px) {
          margin-right: size(60) !important;
        }
      }

      .swiper-button-prev, .swiper-button-next {
        width: size-m(30);
        height: size-m(30);
        margin: 0;
        transform: translateY(-50%);
        background-size: contain;
        background-position: center;
        @media (min-width: 768px) {
          width: size(52);
          height: size(52);
        }

        &:after {
          display: none;
        }
      }

      .swiper-button-prev {
        background-image: url(@/section/s11/arrow-prev.svg);
        left: size-m(-8.8);
        @media (min-width: 768px) {
          left: -15vw;
        }
      }

      .swiper-button-next {
        background-image: url(@/section/s11/arrow-next.svg);
        right: size-m(-8.8);
        @media (min-width: 768px) {
          right: -15vw;
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
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";
const modules = ref([Autoplay, Navigation]);
</script>
