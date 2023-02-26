<template>
  <section class="s3 relative">
    <img class="circle" src="@/section/s3/circle.svg" />
    <div class="text">
      <div class="t1">A19青塘園名宅特區　<br>開發近乎完善</div>
      <div class="content">世界最貴豪宅皆倚綠而無價，「豐郡京硯」坐落Ａ１９青塘園美術館名宅群中，區內住宅開發率達九成，近4.9萬坪自然森呼吸，最令人驚豔的生活！</div>
    </div>
    <div class="slider absolute">
      <div class="rect1 absolute"></div>
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
          <img class="photo" src="@/section/s3/1.jpg" />
          <div class="txt">青塘園</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s3/2.jpg" />
          <div class="txt">青埔棒球場</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s3/3.jpg" />
          <div class="txt">青埔運動公園</div>
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

.s3 {
  width: 100%;
  height: size-m(590);
  background: #F5F5F5;
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  @keyframes circle {
    to {
      transform: translateY(10%);
    }
  }

  .circle {
    position: absolute;
    top: size-m(500.21);
    left: size-m(222.71);
    width: size-m(301.79);
    animation: circle 5s linear infinite alternate forwards;
    @media screen and (min-width:768px) {
      top: size(493.21);
      left: size(1493.81);
      width: size(850);
    }
  }

  .text {
    position: absolute;
    top: size-m(0);
    left: 0;
    width: 100%;
    height: 100%;
    padding: size-m(84.5) size-m(30) 0 size-m(30);
    @media screen and (min-width:768px) {
      top: size(210);
      left: size(299);
      width: auto;
      height: auto;
      padding: size(212) size(0) 0 size(0);
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: size-m(30);
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
    top: size-m(284);
    left: size-m(0);
    width: size-m(365);
    @media screen and (min-width:768px) {
      top: size(213.5);
      left: size(700);
      width: size(895);
    }

    .rect1 {
      top: size-m(-10);
      right: size-m(-10);
      width: size-m(136.7);
      height: size-m(136.7);
      background: #DE5513;
      @media screen and (min-width:768px) {
        top: size(-25.5);
        right: size(-23.81);
        width: size(335);
        height: size(335);
      }
    }

    .name {
      bottom: size-m(0);
      left: size-m(0);
      transform: translateY(100%);
      line-height: 1;
      padding: size-m(16) size-m(16.5);
      background: #DE5513;
      color: #fff;
      font-size: size-m(12);
      font-weight: 300;
      @media screen and (min-width:768px) {
        padding: size(30.22) size(43.85);
        font-size: size(19);
      }
    }

    .control {
      position: absolute;
      bottom: 0;
      transform: translateY(calc(100% + size-m(15)));
      left: size-m(299);
      width: size-m(50);
      @media screen and (min-width:768px) {
        transform: translateY(calc(100% + size(28.56)));
        left: size(330);
        width: size(65.62);
      }

      .prev {
        position: absolute;
        width: size-m(15);
        height: size-m(15);
        background-image: url(@/section/s3/arrow-left.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left center;
        top: 0;
        left: 0;
        cursor: pointer;
        @media screen and (min-width:768px) {
          width: size(20);
          height: size(20);
        }
      }

      .next {
        position: absolute;
        width: size-m(15);
        height: size-m(15);
        background-image: url(@/section/s3/arrow-right.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right center;
        top: 0;
        right: 0;
        cursor: pointer;
        @media screen and (min-width:768px) {
          width: size(20);
          height: size(20);
        }
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