<template>
  <section class="s5 relative">
    <img class="circle" src="@/section/s3/circle.svg" />
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="t1" data-aos="fade-down" data-aos-delay="100">雙語教學接軌<br>學習搶占先機</div>
      <div class="content" data-aos="fade-down" data-aos-delay="200">青園國小、青埔國中、大園國際高中，完整12年雙語國際菁英教育，接軌國際零障礙，好學氛圍，為下一代開啟學習之鑰！</div>
    </div>
    <div class="slider absolute">
      <div class="name absolute" data-aos="fade-down" data-aos-delay="300">International <br>Education</div>
      <swiper  data-aos="fade-down" data-aos-delay="500"
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
          <img class="photo" src="@/section/s5/1.jpg" />
          <div class="txt">大園國際高中</div>
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s5/2.jpg" />
          <div class="txt">青埔國中</div>
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

.s5 {
  width: 100%;
  height: size-m(588);
  background: #F5F5F5;
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(1080);
  }
  @keyframes circle {
    to {
      transform: translateY(0%);
    }
  }

  .circle {
    display: none;
    animation: circle 5s linear infinite alternate forwards;
      transform: translateY(20%);
   
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      top: size(672.29);
      left: size(76);
      width: size(850);
    }
  }

  .text {
    position: absolute;
    top: size-m(47.65);
    left: size-m(151);
    width: size-m(193);
    padding: size-m(30) 0 0 0;
    @media screen and (min-width:768px) {
      top: size(139);
      left: size(789);
      width: size(832);
      padding: size(31) 0 0 size(30);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: size-m(0);
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
      padding-left: size-m(14);
      @media screen and (min-width:768px) {
        font-size: size(44);
        line-height: size(62);
        margin-bottom: size(0);
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
        flex: 1;
        padding-left: size(36.5);
      }
    }
  }

  .slider {
    top: size-m(320.55);
    left: size-m(25);
    width: size-m(350);
    @media screen and (min-width:768px) {
      top: size(340);
      left: size(521);
      width: size(1100);
    }

    .name {
      top: size-m(-270.55);
      left: size-m(-25);
      padding: size-m(21.85) size-m(32) size-m(362.35) size-m(30);
      background: #DE5513;
      color: #fff;
      font-size: size-m(12);
      line-height: size-m(13);
      font-weight: 300;
      white-space: nowrap;
      @media screen and (min-width:768px) {
        top: size(-199);
        right: size(1100);
        left: auto;
       // transform: translateX(-100%);
        padding: size(44.65) size(50.15) size(643.35) size(53.85);
        font-size: size(19);
        line-height: size(21);
      }
    }

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
        flex-direction: column-reverse;
        width: size(35);
        height: size(250.79);
        padding: size(49.16) 0 size(130.61) size(20.12);
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