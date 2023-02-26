<template>
  <section class="s9 relative">
    <div class="text">
      <img class="logo" src="@/section/s9/logo.svg" />
      <div class="t1">豐郡建築擘造<br>用心絕不將就</div>
      <div class="content">把房子蓋好，是身為建設產業重不能妥協的原則。時刻以購屋者的角度，用自己居住的心情，從環境、機能、安全、生活到情感5大需求面向，用心而築！</div>
    </div>
    <div class="slider relative">
      <div class="name absolute">Past Case</div>
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
          <img class="photo" src="@/section/s9/1.jpg" />
          <div class="txt">2009城市綠洲</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s9/2.jpg" />
          <div class="txt">2011杭州麗緻</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s9/3.jpg" />
          <div class="txt">2012璞石山匯</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s9/4.jpg" />
          <div class="txt">2013水綠方</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s9/5.jpg" />
          <div class="txt">2014豐郡海德公園</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s9/6.jpg" />
          <div class="txt">2018悠遊郡</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s9/7.jpg" />
          <div class="txt">2020豐郡大景</div>
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

.s9 {
  width: 100%;
  background: #F5F5F5;
  padding-top: size-m(40);
  @media screen and (min-width:768px) {
    height: size(1080);
    padding-top: size(100);
  }

  .text {
    width: size-m(350);
    margin: 0 auto;
    padding: size-m(66) size-m(37) size-m(60) size-m(37);
    position: relative;
    background-image: url(@/section/s9/bg.jpg);
    background-size: cover;
    background-position: center center;
    @media screen and (min-width:768px) {
      width: size(1320);
      height: size(980);
      padding: 0;
    }

    &:after {
      @media screen and (min-width:768px) {
        content: "";
        position: absolute;
        top: size(232);
        background: linear-gradient(0.72deg, #896532 0%, #A27C47 11%, #B8915B 24%, #C09962 32%, #C39E68 39%, #CEAD7B 48%, #DFC59A 58%, #EFDCB6 66%, #DABC8D 74%, #C9A36B 81.01%, #BD9152 88.01%, #B58544 94.01%, #B3823F 99.01%);
        left: size(118);
        width: size(2.5);
        height: size(200);
      }
    }

    .logo {
      width: size-m(110);
      display: block;
      margin: 0 auto size-m(54.68) auto;
      @media screen and (min-width:768px) {
        width: size(178);
        position: absolute;
        top: size(149);
        left: size(571.05);
      }
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 600;
      font-size: size-m(25);
      line-height: size-m(35);
      margin-bottom: size-m(11);
      text-align: center;
      @media screen and (min-width:768px) {
        font-size: size(44);
        line-height: size(62);
        margin-bottom: size(0);
        padding-left: size(0);
        position: absolute;
        top: size(443);
        left: size(117.25);
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
        flex: 1;
        position: absolute;
        top: size(592.5);
        left: size(117.25);
        width: size(314);
      }
    }
  }

  .slider {
    padding: size-m(13);
    background: #fff;
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(547);
      left: size(826);
      width: size(747.44);
      padding: size(6.5) size(5.72);
    }

    .name {
      top: 0;
      right: 0;
      transform: translateY(-100%);
      padding: size-m(16) size-m(28.5);
      background: #DE5513;
      color: #fff;
      font-size: size-m(12);
      line-height: size-m(13);
      font-weight: 300;
      white-space: nowrap;
      @media screen and (min-width:768px) {
        padding: size(29) size(19);
        font-size: size(19);
        line-height: size(21);
      }
    }

    .control {
      position: absolute;
      bottom: size-m(13);
      left: 0;
      width: size-m(109);
      height: size-m(31);
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      z-index: 1;
      padding: 0 size-m(30);
      @media screen and (min-width:768px) {
        width: size(209.66);
        height: size(35);
        padding: size(0) size(44) size(0) size(99);
        bottom: 0;
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