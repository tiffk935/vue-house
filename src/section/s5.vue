<template>
  <section class="s5 relative bg-[#D2D2D2] text-[#4D4D4D]">
    <img class="style absolute" data-aos="fade" data-aos-delay="0" src="@/section/s5/style.svg" />
    <div class="content">
      <div class="title md:flex" data-aos="fade-up" data-aos-delay="0">
        <div class="t1">校園排頭</div>
        <div class="t2">交織樹香</div>
      </div>
      <div class="t3 text-[#00803F]" data-aos="fade-up" data-aos-delay="0">左營大路 美味混搭</div>
      <div class="t4" data-aos="fade-up" data-aos-delay="0">
        綿延不止的樹海林蔭，為2萬坪「再見捌捌陸文化園區」打開進入時光隧道的導航；卡位明德國小第一排，有無限棟距做開場，輕盈奏起人文學風的交響。<br>
        <br>
        左營大路則為家中柴米油鹽做足準備，隨時照顧飢腸轆轆的你，從舌尖到心靈，包準心滿意足！
      </div>
    </div>
    <div class="imgs relative">
      <div class="slider relative">
        <swiper
          class="md:hidden"
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
              <img class="w-full" src="@/section/s5/1.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s5/2.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s5/3.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s5/4.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
        </swiper>
        <swiper
          class="hidden md:block"
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
              <img class="w-full" src="@/section/s5/1.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s5/2-pc.webp" />
              <img class="w-full absolute w-full top-0 left-0" src="@/section/s5/2-txt.svg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  padding-bottom: size-m(23);
  @media screen and (min-width:768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: size(115) size(84) size(115) size(91);
  }

  .style {
    top: size-m(31.89);
    left: size-m(173.48);
    width: size-m(189.593);
    @media screen and (min-width:768px) {
      top: size(94);
      left: size(1461);
      width: size(394.73);
    }
  }

  .content {
    padding: size-m(33) size-m(32.5) size-m(48.15) size-m(23);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(653);
    }
  }

  .title {
    @media screen and (min-width:768px) {
      margin-bottom: size(65);
    }
  }

  .t1 {
    font-size: size-m(30); 
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      font-size: size(71); 
      width: size(73);
      margin: 0 size(10) 0 0;
    }
  }

  .t2 {
    font-size: size-m(30);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(49);
    @media screen and (min-width:768px) {
      font-size: size(71); 
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
      font-size: size(30);
      line-height: size(33);
      letter-spacing: size(0.9);
      padding-bottom: size(29);
      margin-bottom: size(38);
      display: inline-block;
    }

    &:after {
      content: '';
      width: size-m(150);
      height: size-m(2);
      background: #00803F;
      position: absolute;
      left: 0;
      bottom: 0;
      @media screen and (min-width:768px) {
        width: size(308);
        height: size(1);
      }
    }
  }

  .t4 {
    text-align: justify;
    font-size: size-m(13);
    font-family: 'Noto Sans TC';
    line-height: 170%; 
    font-weight: 500;
    @media screen and (min-width:768px) {
      font-size: size(22);
      line-height: size(38);
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
      margin-top: size(45);
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