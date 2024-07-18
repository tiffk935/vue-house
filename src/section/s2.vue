<template>
  <section class="s2 user-n w-full relative">
    <div class="rect relative top-0 left-0 w-full bg-[#931F1C] text-white text-center font-['Noto_Serif_JP']">
      <img class="style1 absolute left-0 bottom-0" src="@/section/s2/style1.svg" />
      <img class="style2 absolute right-0 bottom-0" src="@/section/s2/style2.svg" />
      <img class="circle absolute" src="@/section/s2/circle.png" />
      <div class="text absolute top-0 left-0 w-full" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0">時代の進化と呼応する</div>
    </div>
    <div class="content">
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
              <img class="block w-full" src="@/section/s2/slider/1.webp" />
              <div class="txt">和苑三井花園飯店 台北忠孝</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s2/slider/2.webp" />
              <div class="txt">MITSUI OUTLET PARK 林口</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s2/slider/3.webp" />
              <div class="txt">Mitsui Shopping Park LaLaport 台中</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s2/slider/4.webp" />
              <div class="txt">宏普陽明（台北市 北士科）</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s2/slider/5.webp" />
              <div class="txt">宏普頤和（台北市 中山區）</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img class="block w-full" src="@/section/s2/slider/6.webp" />
              <div class="txt">宏普PARK（台北市 ⼤安區）</div>
            </div>
          </swiper-slide>
        </swiper>
        <img class="circle absolute md:hidden" src="@/section/s2/circle.png" />
        <img class="en absolute md:hidden" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" src="@/section/s2/en-m.svg" />
        <img class="en absolute hidden md:block" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" src="@/section/s2/en.svg" />
      </div>
      <div class="content-inner" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1 text-center md:text-left text-[#931F1C] font-['Noto_Serif_TC']">台日雙強北市首發<br class="md:hidden"> 全方位都心資產</div>
        <div class="t2 text-center md:text-left text-[#959595]">GATHERING GOOD AND HONOR</div>
        <div class="t3 text-justify text-[#000000] font-['Noto_Serif_TC'] md:hidden">
          和苑飯店是合作起點，中山南西是年度亮點！<br>
          宏普建設(2536.TW)與三井不動產集團台日雙強品牌，合計逾百年經驗，以都市再造眼界，回應新時代變革，在中山站130米微距離精雕細琢，邀您邂逅城市新未來。
        </div>

        <div class="t3 text-justify text-[#000000] font-['Noto_Serif_TC'] hidden md:block">
          和苑飯店是合作起點，中山南西是年度亮點！<br>
          <br>
          宏普建設(2536.TW)與三井不動產集團台日雙強品牌，合計逾百年經驗，以都市再造眼界，回應新時代變革，在中山站130米微距離精雕細琢，邀您邂逅城市新未來。
        </div>
        <img class="logo" src="@/section/s2/logo.svg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  width: 100%;

  .rect {
    height: size-m(198);
    @media (min-width: 768px) {
      height: size(386);
    }
  }
  
  .style1 {
    width: size-m(110);
    filter: brightness(0.45);
    @media (min-width: 768px) {
      width: size(473);
    }
  }

  .style2 {
    width: size-m(106.7);
    @media (min-width: 768px) {
      width: size(386);
    }
  }

  .circle {
    width: size-m(47);
    bottom: size-m(19);
    right: size-m(75);
    @media (min-width: 768px) {
      width: size(115.5);
      bottom: size(194);
      right: size(232.5);
    }
  }

  .text {
    top: size-m(31);
    font-size: size-m(16);
    letter-spacing: .54em;
    font-weight: 500;
    @media (min-width: 768px) {
      top: size(88);
      font-size: size(45);
    }
  }

  .content {
    padding: size-m(40) size-m(40) size-m(53) size-m(40);
    @media (min-width: 768px) {
      padding: size(0) size(159) size(138) size(184);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: size(-107);
    }

    .slider {
      position: relative;
      margin-bottom: size-m(34);
      @media (min-width: 768px) {
        width: size(698);
        margin-bottom: 0;
      }

      .swiper-pagination {
        line-height: 1;
        width: auto;
        left: size-m(15);
        bottom: size-m(42.88);
        @media (min-width: 768px) {
          left: size(35);
          bottom: size(27);
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

      .swiper-slide {
        .txt {
          position: absolute;
          bottom: size-m(17);
          left: size-m(20);
          color: #fff;
          font-size: size-m(11);
          line-height: size-m(16);
          letter-spacing: -0.04em;
          font-weight: 500;
          @media (min-width: 768px) {
            bottom: size(22);
            left: auto;
            right: size(25);
            font-size: size(17);
            line-height: size(25);
          }
        }
      }

      .circle {
        position: absolute;
        bottom: size-m(-21);
        right: size-m(-14);
        width: size-m(63);
        z-index: 1;
      }

      .en {
        position: absolute;
        top: size-m(21.55);
        left: size-m(23.5);
        width: size-m(222);
        z-index: 1;
        filter: drop-shadow(2px 2px 5px #000);
        @media (min-width: 768px) {
          top: size(34);
          left: size(-92);
          width: size(184.64);
          filter: drop-shadow(2px 2px 5px #00000000);
        }
      }
    }

    .content-inner {
      @media (min-width: 768px) {
        width: size(655);
      }
    }

    .t1 {
      font-size: size-m(19);
      line-height: size-m(27);
      font-weight: 600;
      letter-spacing: 0.03em;
      margin-bottom: size-m(9);
      @media (min-width: 768px) {
        font-size: size(41);
        line-height: size(59);
        margin-bottom: size(20);
      }
    }

    .t2 {
      font-size: size-m(9.5);
      line-height: size-m(14);
      font-weight: 500;
      letter-spacing: 0.16em;
      margin-bottom: size-m(24);
      @media (min-width: 768px) {
        font-size: size(18);
        line-height: size(26);
        margin-bottom: size(73);
      }
    }

    .t3 {
      font-size: size-m(11);
      line-height: 201.1%;
      font-weight: 600;
      letter-spacing: -0.01em;
      margin-bottom: size-m(32);
      @media (min-width: 768px) {
        font-size: size(20);
        letter-spacing: 0.11em;
        margin-bottom: size(125);
      }
    }

    .logo {
      width: size-m(295);
      margin: 0 auto;
      display: block;
      @media (min-width: 768px) {
        width: size(608);
        margin: 0;
      }
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
