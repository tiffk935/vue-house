<template>
  <section class="s6 relative">
    <div class="text">
      <div class="name absolute md:hidden">Art Deco</div>
      <div class="t1">三面大氣開展<br>城市心靈座標</div>
      <div class="content">俐落線條重新詮釋Art Deco建築美學，框景式立面語彙，構成豐富的表情與詩意氛圍，展現氣質與氣勢兼具，品味與生活交響的經典盛宴！</div>
    </div>
    <div class="slider absolute">
      <div class="name absolute hidden md:block">Art Deco</div>
      <swiper 
        :spaceBetween="0"
        :pagination="false"
        :navigation="false"
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @swiper="setSwiper"
      >
        <swiper-slide>
          <img class="photo" src="@/section/s6/tmp.jpg" />
          <div class="txt">外觀3D模擬圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s6/tmp.jpg" />
          <div class="txt">外觀3D模擬圖</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s6/tmp.jpg" />
          <div class="txt">外觀3D模擬圖</div>
        </swiper-slide>
      </swiper>
      <div class="control">
        <div class="prev" @click="slideTo('prev')"></div>
        <div class="next" @click="slideTo('next')"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size-m(635 + 99);
  background: #F5F5F5;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .text {
    position: absolute;
    top: size-m(63);
    left: 0;
    width: 100%;
    height: size-m(261.5);
    padding: size-m(40.5) size-m(51) 0 size-m(32 + 28);
    background: #BDBEBF;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(243.11);
      left: size(300);
      width: auto;
      height: size(680);
      padding: size(128.89) size(86) 0 size(98.5);
    }

    &:after {
      content: "";
      position: absolute;
      top: size-m(-45);
      left: size-m(32);
      width: size-m(2);
      height: size-m(260);
      background: linear-gradient(0.72deg, #896532 0%, #A27C47 11%, #B8915B 24%, #C09962 32%, #C39E68 39%, #CEAD7B 48%, #DFC59A 58%, #EFDCB6 66%, #DABC8D 74%, #C9A36B 81.01%, #BD9152 88.01%, #B58544 94.01%, #B3823F 99.01%);
      @media screen and (min-width:768px) {
        top: size(-81);
        left: size(96);
        width: size(2.5);
        height: size(200);
      }
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 600;
      font-size: size-m(25);
      line-height: size-m(35);
      margin-bottom: size-m(11);
      @media screen and (min-width:768px) {
        font-size: size(44);
        line-height: size(62);
        margin-bottom: size(25.5);
      }
    }

    .content {
      letter-spacing: 0.1em;
      font-size: size-m(14);
      line-height: size-m(25);
      text-align: justify;
      letter-spacing: 0.01em;
      @media screen and (min-width:768px) {
        font-size: size(20);
        line-height: size(36);
        width: size(314);
      }
    }
  }

  .name {
    top: size-m(0);
    right: size-m(0);
    transform: translateY(-100%);
    line-height: 1;
    padding: size-m(16) size-m(54);
    background: #DE5513;
    color: #fff;
    font-size: size-m(12);
    font-weight: 300;
    white-space: nowrap;
    @media screen and (min-width:768px) {
      right: size(350);
      padding: size(30) size(139);
      font-size: size(19);
    }
  }

  .slider {
    top: size-m(324.5);
    left: size-m(0);
    width: size-m(375);
    @media screen and (min-width:768px) {
      top: size(243.11);
      left: size(789.08);
      width: size(821.92);
    }

    // .name {
    //   top: size-m(0);
    //   right: size-m(0);
    //   transform: translateY(-100%);
    //   line-height: 1;
    //   padding: size-m(16) size-m(54);
    //   background: #DE5513;
    //   color: #fff;
    //   font-size: size-m(12);
    //   font-weight: 300;
    //   white-space: nowrap;
    //   @media screen and (min-width:768px) {
    //     top: auto;
    //     right: auto;
    //     bottom: 0;
    //     left: size(655.28);
    //     padding: size(23.52) size(101.13) size(853.16) size(72.57);
    //     font-size: size(19);
    //   }
    // }

    .control {
      position: absolute;
      bottom: 0;
      right: size-m(0);
      width: size-m(109);
      height: size-m(31);
      background: #F5F5F5;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      z-index: 1;
      padding: 0 size-m(30);
      @media screen and (min-width:768px) {
        top: 0;
        bottom: auto;
        width: size(350);
        height: size(35);
        padding: 0 size(234.5) 0 size(49.88);
        align-items: flex-start;
      }

      .prev, .next {
        width: size-m(15);
        height: size-m(15);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left center;
        cursor: pointer;
        @media screen and (min-width:768px) {
          width: size(20);
          height: size(20);
        }
      }

      .prev {
        background-image: url(@/section/s3/arrow-left.svg);
      }

      .next {
        background-image: url(@/section/s3/arrow-right.svg);
      }
    }

    .swiper-slide {
      width: 100%;

      img {
        width: 100%;
      }

      .txt {
        color: #fff;
        font-size: size-m(12);
        line-height: size-m(16);
        position: absolute;
        bottom: size-m(5);
        left: size-m(5);
        @media screen and (min-width:768px) {
          font-size: size(15);
          line-height: size(19);
          bottom: size(10);
          left: auto;
          right: size(10);
        }
      }
    }
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      modules: [Pagination, Navigation, Autoplay],
    }
  },
  methods: {
    setSwiper(swiper) {
      this.swiper = swiper;
    },
    slideTo(to) {
      if(to == 'prev') {
        this.swiper.slidePrev();
      } else if(to == 'next') {
        this.swiper.slideNext();
      }
    },
  }
};
</script>