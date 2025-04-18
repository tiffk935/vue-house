<template>
  <section class="s10 w-full relative">
    <div class="cir1 absolute"></div>
    <div class="cir2 absolute"></div>
    <div class="cir3 absolute"></div>
    <div class="cir4 absolute hidden md:block"></div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">近400坪全齡會所<br>渡假飯店生活享受</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">回家就像在度假！</div>
    <div class="t3 absolute" data-aos="fade-up" data-aos-delay="0">一樣公設比「日進學」就是要給你更棒更頂級的尊榮享受！洲子洋唯一，近400坪全齡會所，接待大廳、健身房、閱讀區、會議室、閱覽室、桌球室、KTV、瑜伽教室、廚藝教室、信箱區、宴會廳…日系美學質感生活，坐擁星級飯店規劃，體驗全家人幸福親子時光，一次擁有最完美的生活享受「日進學」！</div>
    <div class="t4 absolute">LIKE A VACATION</div>
    <div class="slider absolute">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="0"
        :centeredSlides="true"
        :loop="true"
        :navigation="false"
        :pagination="{
          clickable: true
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        @swiper="setSwiper"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/1.jpg" />
            <div class="txt">公園情境圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/2.jpg" />
            <div class="txt">公設3D透視圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/3.jpg" />
            <div class="txt">公設3D透視圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/4.jpg" />
            <div class="txt">公設3D透視圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/5.jpg" />
            <div class="txt">公設3D透視圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/6.jpg" />
            <div class="txt">公設3D透視圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s10/7.jpg" />
            <div class="txt">公設3D透視圖</div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="btn-prev md:hidden" @click="slidePrev"></div>
      <div class="btn-next md:hidden" @click="slideNext"></div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  width: 100%;
  height: size-m(737);
  @media screen and (min-width:768px) {
    height: size(1181);
  }

  .t1 {
    top: size-m(59);
    left: size-m(30);
    font-size: size-m(28);
    font-weight: 700;
    line-height: 123%;
    letter-spacing: .05em;
    text-align: justify;
    @media screen and (min-width:768px) {
      top: size(367);
      left: size(1298);
      font-size: size(62);
    }
  }

  .t2 {
    width: size-m(310);
    top: size-m(157);
    left: size-m(30);
    font-size: size-m(18);
    color: #7E151A;
    font-family: "Noto Sans TC";
    font-weight: 700;
    line-height: 160%;
    @media screen and (min-width:768px) {
      width: size(515);
      top: size(571);
      left: size(1298);
      font-size: size(38);
    }
  }

  .t3 {
    width: size-m(310);
    top: size-m(196);
    left: size-m(30);
    text-align: justify;
    font-family: "Noto Sans TC";
    font-size: size-m(14);
    line-height: 180%;
    letter-spacing: .05em;
    @media screen and (min-width:768px) {
      width: size(515);
      top: size(660);
      left: size(1298);
      font-size: size(16);
    }
  }

  .t4 {
    top: size-m(433);
    left: size-m(0);
    color: #999;
    font-size: size-m(30);
    font-style: normal;
    font-weight: 300;
    line-height: 180%;
    letter-spacing: .17em;
    @media screen and (min-width:768px) {
      top: size(141);
      left: size(243);
      font-size: size(84);
    }
  }

  .slider {
    width: size-m(353);
    top: size-m(472);
    left: 0;
    @media screen and (min-width:768px) {
      width: size(1220);
      top: size(253);
      z-index: 1;
      padding-bottom: size(60);
      overflow: hidden;
    }

    .swiper {
      z-index: initial;
      @media screen and (min-width:768px) {
        overflow: visible;
      }

      * {
        z-index: initial;
      }
    }

    .swiper-pagination {
      display: none;
      @media screen and (min-width:768px) {
        display: flex;
        margin: 0;
        line-height: 1;
        bottom: size(-40);
        justify-content: flex-end;
      }

      .swiper-pagination-bullet {
        width: size(50);
        height: size(7);
        background: #B3B3B3;
        border-radius: size(10);
        opacity: .5;

        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }

    .swiper-slide {
      border-top-right-radius: size-m(20);
      border-bottom-right-radius: size-m(20);
      overflow: hidden;
      @media screen and (min-width:768px) {
        border-top-right-radius: size(60);
        border-bottom-right-radius: size(60);
      }

      img {
        width: 100%;
        height: size-m(205);
        display: block;
        object-fit: cover;
        @media screen and (min-width:768px) {
          height: size(705);
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
          bottom: size(27);
          left: size(41);
          text-shadow: 0px 0px size(3) rgba(0, 0, 0, 0.50);
          font-size: size(12);
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
    top: size-m(18);
    right: size-m(-10);
    width: size-m(99);
    height: size-m(99);
    border-radius: 50%;
    background: linear-gradient(135deg, #F65337 28.79%, #D12353 85.35%);
    opacity: 0.4;
    transform: translateY(-10vw);
    animation: ball 7s ease-in-out 0s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(187);
      right: size(-40);
      width: size(200);
      height: size(200);
      transform: translateY(-5vw);
    }
  }

  .cir2 {
    top: size-m(363);
    left: size-m(-88);
    width: size-m(139);
    height: size-m(139);
    border-radius: 50%;
    background: linear-gradient(135deg, #E50012 14.65%, #7E151A 85.36%);
    transform: translateY(10vw);
    animation: ball 7s ease-in-out -3s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(55);
      left: size(-48);
      width: size(280);
      height: size(280);
      transform: translateY(5vw);
    }
  }

  .cir3 {
    top: size-m(651);
    right: size-m(59);
    width: size-m(48);
    height: size-m(48);
    border-radius: 50%;
    background: linear-gradient(135deg, #F65337 28.79%, #D12353 85.35%);
    transform: translateY(10vw);
    animation: ball 7s ease-in-out -6s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(1100);
      right: size(504);
      width: size(98);
      height: size(98);
      transform: translateY(-5vw);
    }
  }

  .cir4 {
    top: size(787);
    left: size(360);
    width: size(245);
    height: size(245);
    border-radius: 50%;
    background: linear-gradient(135deg, #F65337 28.79%, #D12353 85.35%);
    opacity: 0.7;
    transform: translateY(3vw);
    animation: ball 7s ease-in-out -2s infinite alternate-reverse;
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