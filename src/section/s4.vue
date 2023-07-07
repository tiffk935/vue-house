<template>
  <section class="s4 relative bg-white text-[#4D4D4D]">
    <img class="style absolute" data-aos="fade" data-aos-delay="0" src="@/section/s4/style.svg" />
    <div class="content">
      <div class="title md:flex" data-aos="fade-up" data-aos-delay="0">
        <div class="t1">高鐵流域</div>
        <div class="t2">速度共構</div>
      </div>
      <div class="t3 text-[#00803F]" data-aos="fade-up" data-aos-delay="0">鮮豔新光 繁華出演</div>
      <div class="t4" data-aos="fade-up" data-aos-delay="0">
        坐落左營高鐵流域，運籌台鐵新左營、捷運紅線R16站共構三鐵便捷之心；出走城市輕連國10、國1；未來新台17線，拉近各大科學園區。<br>
        <br class="md:hidden">
        輕巧跨步左營大路商圈，轉身新光三越、彩虹市集、環球購物中心、漢神巨蛋在側，流行繁華貫通日常韶華，成真完美時區！
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
              <img class="w-full" src="@/section/s4/1.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s4/2.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s4/3.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s4/4.webp" />
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
              <img class="w-full" src="@/section/s4/1.webp" />
              <div class="img-txt absolute text-white">實景拍攝圖</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img relative">
              <img class="w-full" src="@/section/s4/2-pc.webp" />
              <img class="w-full absolute w-full top-0 left-0" src="@/section/s4/2-txt.svg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  padding-bottom: size-m(23);
  @media screen and (min-width:768px) {
    display: flex;
    justify-content: space-between;
    padding: size(115) size(84) size(115) size(91);
  }

  .style {
    top: size-m(16.87);
    left: size-m(193.5);
    width: size-m(149);
    @media screen and (min-width:768px) {
      top: size(106);
      left: size(335);
      width: size(337.44);
    }
  }

  .content {
    padding: size-m(50.48) size-m(32.5) size-m(21.15) size-m(23);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(622);
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