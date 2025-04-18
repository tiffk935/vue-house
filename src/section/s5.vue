<template>
  <section class="s5 user-n w-full relative">
    <div class="bg absolute"></div>
    <div class="train absolute"></div>
    <img class="line absolute md:hidden" src="@/section/s5/line-m.svg" />
    <img class="line absolute hidden md:block" src="@/section/s5/line.svg" />
    <div class="cir1 absolute"></div>
    <div class="cir2 absolute"></div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">蘆洲捷運站5分鐘<br>輕軌F06站散步圈</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">擁3高4捷4特快交通路網</div>
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">「日進學」車行約5分鐘一橋就到蘆洲捷運站，散步3分鐘抵輕軌F06站，未來一站就到蘆洲。享強大交通動能鄰近中和新蘆線、環狀線、機場線、五泰輕軌4捷串聯大台北。出門轉彎直上台64，快接國道1號、汐五高、五楊高，配合台65、新北環快，台1甲快速道路，南來北往東西暢行通勤首選。</div>
    <div class="t4 absolute">交通が便利</div>
    <div class="t5 absolute">CONVNEIENT TRANSPORT</div>
    <div class="slider absolute">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="0"
        :centeredSlides="true"
        :loop="true"
        :navigation="false"
        :pagination="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @swiper="setSwiper"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/1.jpg" />
            <div class="txt">五泰輕軌示意圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/2.jpg" />
            <div class="txt">國道一號實景圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/3.jpg" />
            <div class="txt">捷運蘆洲站實景圖</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="btn-prev" @click="slidePrev"></div>
      <div class="btn-next" @click="slideNext"></div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes train {
  30% {
    transform: translateX(calc(var(--trainX, 200%) * 0.2));
  }
  35% {
    transform: translateX(calc(var(--trainX, 200%) * 0.2));
  }
  100% {
    transform: translateX(var(--trainX, 200%));
  }
}

.s5 {
  height: size-m(945);
  @media screen and (min-width:768px) {
    height: size(1081);
  }

  .bg {
    width: size-m(519.77);
    height: size-m(261);
    top: size-m(656);
    left: size-m(-47);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    background-image: url(@/section/s5/bg.png);
    @media screen and (min-width:768px) {
      width: size(932);
      height: size(468);
      top: size(510);
      left: size(847);
    }
  }

  .train {
    width: size-m(820.76);
    height: size-m(81);
    top: size-m(840);
    // left: size-m(-520);
    left: size-m(-820.76);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    background-image: url(@/section/s5/train.png);
    animation: train 5s ease-in-out infinite;
    --trainX: 150%;
    @media screen and (min-width:768px) {
      width: size(1297);
      height: size(128);
      top: size(867);
      // left: size(115);
      left: size(-515);
      animation-duration: 6s;
      --trainX: 200%;
    }
  }

  .line {
    top: size-m(150);
    left: size-m(-44);
    width: size-m(468);
    max-width: none;
    /* display: none; */
    @media screen and (min-width:768px) {
      top: size(430.5);
      left: size(-1);
      width: size(1863.98);
    }
  }

  .t1 {
    top: size-m(60);
    left: size-m(82);
    font-size: size-m(28);
    font-weight: 700;
    line-height: 123%;
    letter-spacing: .05em;
    text-align: justify;
    @media screen and (min-width:768px) {
      top: size(240);
      left: size(192);
      font-size: size(62);
    }
  }

  .t2 {
    width: size-m(250);
    top: size-m(168);
    left: size-m(82);
    font-size: size-m(18);
    color: #7E151A;
    font-family: "Noto Sans TC";
    font-weight: 700;
    line-height: 160%;
    @media screen and (min-width:768px) {
      width: size(555);
      top: size(494);
      left: size(192);
      font-size: size(38);
    }
  }

  .t3 {
    width: size-m(250);
    top: size-m(207);
    left: size-m(82);
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: size-m(14);
    line-height: 180%;
    letter-spacing: .05em;
    @media screen and (min-width:768px) {
      width: size(555);
      top: size(583);
      left: size(192);
      font-size: size(16);
    }
  }

  .t4 {
    top: size-m(524);
    left: size-m(40);
    color: #999;
    font-size: size-m(28);
    font-weight: 200;
    line-height: 160%;
    letter-spacing: .12em;
    @media screen and (min-width:768px) {
      top: size(120);
      left: size(962);
      font-size: size(60);
    }
  }

  .t5 {
    top: size-m(559);
    left: size-m(40);
    color: #999;
    font-size: size-m(16);
    font-weight: 300;
    line-height: 160%;
    letter-spacing: .12em;
    @media screen and (min-width:768px) {
      top: size(186);
      left: size(962);
      font-size: size(50);
    }
  }

  .slider {
    width: size-m(310);
    top: size-m(578);
    left: size-m(32);
    @media screen and (min-width:768px) {
      width: size(880);
      top: size(248);
      left: size(907);
    }

    .swiper, .swiper * {
      z-index: initial;
    }
    .swiper{
      border-radius: size-m(20);overflow: hidden;
      @media screen and (min-width:768px) {
        border-radius: size(60);
      }
    }
    .swiper-slide {
      border-radius: size-m(20);
      overflow: hidden;
      @media screen and (min-width:768px) {
        border-radius: size(60);
      }

      img {
        width: 100%;
        height: size-m(203);
        display: block;
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: size(575);
        }
      }

      .txt {
        position: absolute;
        bottom: size-m(3);
        left: size-m(12);
        color: #FFF;
        text-shadow: 0px 0px size-m(3) rgba(0, 0, 0, 0.50);
        font-family: "Noto Sans TC";
        font-size: size-m(12);
        line-height: 180%;
        @media screen and (min-width:768px) {
          bottom:.5em;
          left: 3em;
          text-shadow: 0px 0px size(3) rgba(0, 0, 0, 0.50);
          font-size: size(15);
        }
      }
    }

    .btn-prev, .btn-next {
      width: size-m(29);
      height: size-m(29);
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background-repeat: no-repeat;
      background-size: size-m(6.22) auto;
      background-position: center;
      cursor: pointer;
      @media screen and (min-width:768px) {
        width: size(82);
        height: size(82);
        background-size: size(17.5) auto;
      }
    }

    .btn-prev {
      left: size-m(-29);
      background-image: url('data:image/svg+xml,<svg width="10" height="34" viewBox="0 0 10 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.21588 2.44922L2.43987 14.8508C1.85338 16.1126 1.85338 17.9574 2.43987 19.2192L8.21588 31.6208" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      @media screen and (min-width:768px) {
        left: size(-82);
        background-image: url('data:image/svg+xml,<svg width="21" height="86" viewBox="0 0 21 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4875 2L3.2375 36.89C1.5875 40.44 1.5875 45.63 3.2375 49.18L19.4875 84.07" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }
    }

    .btn-next {
      right: size-m(-29);
      background-image: url('data:image/svg+xml,<svg width="10" height="34" viewBox="0 0 10 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.78406 2.44922L7.56007 14.8508C8.14656 16.1126 8.14656 17.9574 7.56007 19.2192L1.78406 31.6208" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      @media screen and (min-width:768px) {
        right: size(-82);
        background-image: url('data:image/svg+xml,<svg width="22" height="86" viewBox="0 0 22 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30756 2L18.5576 36.89C20.2076 40.44 20.2076 45.63 18.5576 49.18L2.30756 84.07" stroke="%23514E4E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }
    }
  }

  .cir1 {
    top: size-m(-110);
    right: size-m(-59);
    width: size-m(148);
    height: size-m(148);
    border-radius: 50%;
    background: linear-gradient(135deg, #F65337 28.79%, #D12353 85.35%);
    transform: translateY(15vw);
    animation: ball 5s ease-in-out -4s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(-148);
      right: size(225);
      width: size(264);
      height: size(264);
      transform: translateY(5vw);
    }
  }

  .cir2 {
    top: size-m(46);
    left: size-m(-205);
    width: size-m(268);
    height: size-m(268);
    border-radius: 50%;
    background: linear-gradient(135deg, #E50012 14.65%, #7E151A 85.36%);
    transform: translateY(20vw);
    animation: ball 5s ease-in-out 0s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(160);
      left: size(-375);
      width: size(540);
      height: size(540);
      transform: translateY(8vw);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper";
const modules = ref([Autoplay, Navigation, Pagination]);
const swiperRef = ref();

const setSwiper = swiper => {
  swiperRef.value = swiper;
}

const slidePrev = () => {
  swiperRef.value.slidePrev();
}

const slideNext = () => {
  swiperRef.value.slideNext();
}
</script>