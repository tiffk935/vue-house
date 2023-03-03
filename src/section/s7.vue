<template>
  <section class="s7 relative">
    <div class="text" data-aos="fade-down" data-aos-delay="0">
      <div class="t1" data-aos="fade-down" data-aos-delay="100">上億豪宅配備<br>日本東和林中空樓板</div>
      <div class="content" data-aos="fade-down" data-aos-delay="200">「豐郡京硯」以精品建築為定位，不以成本為考量，堅持日本東和林專利中空樓板，確保寧靜舒適的居住環境。</div>
    </div>
    <img class="img absolute md:hidden" src="@/section/s7/img-m.png" alt="" data-aos="fade-down" data-aos-delay="300">
    <img class="img absolute hidden md:block" src="@/section/s7/img.jpg" alt="" data-aos="fade-down" data-aos-delay="300">
    <div class="slider absolute" data-aos="fade-down" data-aos-delay="500">
      <div class="name absolute">A Tranquil Life</div>
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
          <img class="photo" src="@/section/s7/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="photo" src="@/section/s7/2.jpg" />
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

.s7 {
  width: 100%;
  height: size-m(885);
  background: #40210F;
  color: #fff;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .text {
    position: absolute;
    top: size-m(18);
    left: size-m(32);
    width: size-m(312);
    height: 100%;
    padding: size-m(85.5) size-m(0) 0 size-m(0);
    @media screen and (min-width:768px) {
      top: size(96);
      left: size(1214);
      width: auto;
      height: auto;
      padding: size(209) size(0) 0 size(0);
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
        left: size(5);
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

  .img {
    top: size-m(333);
    left: size-m(32);
    width: size-m(343);z-index: 2;
    @media screen and (min-width:768px) {
      top: size(178);
      left: size(354);
      width: size(863);
    }
  }

  .slider {
    top: size-m(652);
    left: size-m(32);
    width: size-m(273);
    @media screen and (min-width:768px) {
      top: size(668);
      left: size(1216);
      width: size(403);
    }

    .name {
      top: size-m(-319);
      left: size-m(-32);
      transform: translateY(-100%);
      line-height: 1;
      padding: size-m(16) size-m(38.5);
      background: #DE5513;
      color: #fff;
      font-size: size-m(12);
      font-weight: 300;
      white-space: nowrap;
      @media screen and (min-width:768px) {
        top: size(-490);
        left: size(-863 - 54);
        // transform: translateY(0);
        padding: size(30.5) size(114.5);
        font-size: size(19);
      }
    }

    .control {
      position: absolute;
      top: 0;
      right: size-m(-41);
      width: size-m(41);
      height: size-m(91);
      background: #F5F5F5;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
      padding: size-m(18) 0;
      @media screen and (min-width:768px) {
        right: 0;
        top: auto;
        bottom: size(-35);
        width: size(175);
        height: size(35);
        padding: 0 size(54.6);
        flex-direction: row;
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

      // .txt {
      //   color: #fff;
      //   font-size: size-m(12);
      //   line-height: size-m(16);
      //   position: absolute;
      //   bottom: size-m(5);
      //   right: size-m(5);
      //   @media screen and (min-width:768px) {
      //     font-size: size(15);
      //     line-height: size(19);
      //     bottom: size(10);
      //     right: size(10);
      //   }
      // }
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