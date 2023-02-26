<template>
  <section class="s4 relative">
    <div class="text">
      <div class="t1">商圈機捷高鐵<br>精釀生活品味</div>
      <div class="content">擁有公園綠意、商圈生活、文化藝文，休閒出門就有，青埔最精華10分鐘內將高鐵、影城、購物中心繁華全入袋，一次擁抱！</div>
    </div>
    <div class="slider absolute">
      <div class="name absolute">High society</div>
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
          <img class="photo" src="@/section/s4/1.jpg" />
          <div class="txt">IKEA</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s4/2.jpg" />
          <div class="txt">捷運A19站</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s4/3.jpg" />
          <div class="txt">國泰置地廣場</div>
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

.s4 {
  width: 100%;
  height: size-m(643);
  background: #F5F5F5;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .text {
    position: absolute;
    top: size-m(406);
    left: 0;
    width: 100%;
    height: 100%;
    padding: size-m(31.5) size-m(32) 0 size-m(32);
    @media screen and (min-width:768px) {
      top: size(110);
      left: size(1313);
      width: auto;
      height: auto;
      padding: size(200) size(0) 0 size(0);
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: size-m(276);
      width: size-m(2);
      height: size-m(100);
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

  .slider {
    top: size-m(95);
    left: size-m(30);
    width: size-m(311);
    @media screen and (min-width:768px) {
      top: size(161.68);
      left: size(299);
      width: size(827);
    }

    .name {
      top: size-m(-47);
      right: size-m(-34);
      line-height: 1;
      padding: size-m(16.45) size-m(17) size-m(290.55) size-m(17);
      background: #DE5513;
      color: #fff;
      font-size: size-m(12);
      font-weight: 300;
      white-space: nowrap;
      @media screen and (min-width:768px) {
        top: auto;
        right: auto;
        bottom: 0;
        left: size(655.28);
        padding: size(23.52) size(101.13) size(853.16) size(72.57);
        font-size: size(19);
      }
    }

    .control {
      position: absolute;
      bottom: 0;
      left: size-m(0);
      width: size-m(109);
      height: size-m(31);
      background: #F5F5F5;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      z-index: 1;
      padding: 0 size-m(30);
      @media screen and (min-width:768px) {
        width: size(350);
        height: size(35);
        padding: 0 size(44.61) 0 size(239.78);
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
        right: size-m(5);
        @media screen and (min-width:768px) {
          font-size: size(15);
          line-height: size(19);
          bottom: size(10);
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