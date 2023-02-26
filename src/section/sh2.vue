<template>
  <section class="sh2 relative">
    <div class="text">
      <div class="t1">樣品屋預留</div>
      <div class="content">樣品屋預留樣品屋預留樣品屋預留樣品屋預留樣品屋預留樣品屋預留樣品屋預留樣品屋預留樣品屋預留</div>
    </div>
    <div class="slider absolute">
      <div class="name absolute">Green Gold Homeland</div>
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
          <img class="photo" src="@/section/sh2/tmp.png" />
          <div class="txt">大園國際高中</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/sh2/tmp.png" />
          <div class="txt">大園國際高中</div>
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

.sh2 {
  width: 100%;
  height: size-m(590);
  background: #F5F5F5;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .text {
    position: absolute;
    top: size-m(0);
    left: size-m(32);
    width: size-m(193);
    padding: size-m(84.5) 0 0 0;
    @media screen and (min-width:768px) {
      top: size(60);
      left: size(299);
      width: size(1343.07);
      padding: size(69) 0 0 size(27);
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: size-m(0);
      width: size-m(2);
      height: size-m(80);
      background: linear-gradient(0.72deg, #896532 0%, #A27C47 11%, #B8915B 24%, #C09962 32%, #C39E68 39%, #CEAD7B 48%, #DFC59A 58%, #EFDCB6 66%, #DABC8D 74%, #C9A36B 81.01%, #BD9152 88.01%, #B58544 94.01%, #B3823F 99.01%);
      @media screen and (min-width:768px) {
        left: size(0);
        width: size(2.5);
        height: size(200);
      }
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 600;
      font-size: size-m(25);
      line-height: size-m(35);
      margin-bottom: size-m(16);
      padding-left: size-m(0);
      @media screen and (min-width:768px) {
        font-size: size(44);
        line-height: size(62);
        margin-bottom: size(5);
        padding-left: size(0);
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
      }
    }
  }

  .slider {
    top: size-m(245.08);
    left: size-m(0);
    width: size-m(375);
    @media screen and (min-width:768px) {
      top: size(260.08);
      left: size(150);
      width: size(1620);
    }

    .name {
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      padding: size-m(16) size-m(20) size-m(16) size-m(20);
      background: #DE5513;
      color: #fff;
      font-size: size-m(12);
      line-height: size-m(13);
      font-weight: 300;
      white-space: nowrap;
      @media screen and (min-width:768px) {
        transform: translateY(0);
        padding: size(30.22) size(43.85);
        font-size: size(19);
        line-height: size(21);
        width: size(278.7);
        height: size(81.44);
        z-index: 2;
      }
    }

    .control {
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
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
        width: size(182);
        height: size(81.44);
        padding: 0 size(58);
        right: size(278.7);
        transform: translateY(0);
        background: #F1F0EF;
        align-items: center;
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
          left: size(10);
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