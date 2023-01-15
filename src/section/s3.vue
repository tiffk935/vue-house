<template>
  <section class="s3 text-white relative">
    <div class="slider absolute">
      <swiper 
        :pagination="false"
        :navigation="true"
        :modules="modules"
        :loop="true"
        :slidesPerView="'auto'"
        :centeredSlides="true"
        :speed="600"
        :breakpoints="{
          '768': {
            centeredSlides: false,
          }
        }"
      >
      <!-- :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" -->
        <swiper-slide>
          <div class="p1 parallax">
            <div class="txt"><span>2015</span>汐止區  哲人德林</div>
            <div class="mask" @click="openSlider(1)">
              <img class="zoom-icon absolute" src="@/section/s3/zoom-icon.svg" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p2 parallax">
            <div class="txt"><span>2004</span>中正區  泰安觀止</div>
            <div class="mask" @click="openSlider(2)">
              <img class="zoom-icon absolute" src="@/section/s3/zoom-icon.svg" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p3 parallax">
            <div class="txt"><span>2004</span>士林區  圓山窗外</div>
            <div class="mask" @click="openSlider(3)">
              <img class="zoom-icon absolute" src="@/section/s3/zoom-icon.svg" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p4 parallax">
            <div class="txt"><span>2003</span>中正區  青田主人</div>
            <div class="mask" @click="openSlider(4)">
              <img class="zoom-icon absolute" src="@/section/s3/zoom-icon.svg" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p5 parallax">
            <div class="txt"><span>2002</span>中正區  林与堂</div>
            <div class="mask" @click="openSlider(5)">
              <img class="zoom-icon absolute" src="@/section/s3/zoom-icon.svg" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p6 parallax">
            <div class="txt"><span>2001</span>中正區  青田</div>
            <div class="mask" @click="openSlider(6)">
              <img class="zoom-icon absolute" src="@/section/s3/zoom-icon.svg" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="line"></div>
    </div>
    <div class="content absolute fade">
      <div class="t1">簡約層次美學構型，<br />台北都會精華見芳蹤。</div>
      <div class="txt">德林建設機構位於中正首善之地的建築作品，如「青田」、「林与堂」、「泰安觀止」體現因區段而生的人文溫度，近年落成的「河畔哲人」與「哲人德林」以細緻建築美學，賦予城市街廓精緻地貌，眼見為憑的美學形構，正等待您的親眼見證。</div>
    </div>

    <!-- <FsLightbox
      :toggler="sliderToggler"
      :slide="slide"
      :sources="sources"
    />  -->

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size-m(675);
  margin-bottom: size-m(56);
  font-family: 'Noto Serif TC';
  @media screen and (min-width:768px) {
    height: size(1080);
    margin-bottom: size(0);
    background: linear-gradient(113.99deg, #11A196 -46.13%, #0C887F -0.68%, #004B47 91.61%);
  }

  .fslightbox-toolbar-button:nth-child(1) {
    display: none;
  }

  .slider {
    width: 100%;
    top: size-m(55);
    left: 0;
    @media screen and (min-width:768px) {
      width: size(497 + 505.21);
      top: size(219);
      left: size(917.79);
      padding-bottom: size(120);
      // background: orange;
      overflow: hidden;
    }

    .line {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        width: size(979 - 38);
        position: absolute;
        right: 0;
        bottom: size(60);
        height: size(1);
        background: rgba(255, 255, 255, 0.2);
      }
    }

    .swiper {
      @media screen and (min-width:768px) {
        overflow: visible;
      }
    }

    .swiper-slide {
      width: size-m(290 + 20);
      padding: 0 size-m(10);
      @media screen and (min-width:768px) {
        width: size(497 + 56);
        padding: 0 size(28);
      }

      .parallax {
        width: 100%;
        height: size-m(341.56);
        background-size: 100% auto;
        border-radius: 48% 48% 0px 0px;
        opacity: 0.5;
        transition: opacity .7s;
        @media screen and (min-width:768px) {
          height: size(585);
        }

        .txt {
          font-weight: 500;
          font-size: size-m(13);
          line-height: size-m(18.68);
          position: absolute;
          bottom: size-m(8.92);
          left: size-m(16.5 + 10);
          text-shadow: 0px size-m(1) size-m(10) rgba(0, 0, 0, 0.7);
          @media screen and (min-width:768px) {
            font-size: size(23);
            line-height: size(33.05);
            bottom: size(22);
            left: size(28.21 + 28);
            text-shadow: 0px size(1) size(20) rgba(0, 0, 0, 0.7);
          }

          span {
            display: block;
            font-size: size-m(18);
            line-height: size-m(25.87);
            @media screen and (min-width:768px) {
              font-size: size(28);
              line-height: size(40.24);
            }
          }
        }
      }

      .mask {
        position: absolute;
        top: 0;
        left: size-m(10);
        right: size-m(10);
        height: 100%;
        border-radius: 48% 48% 0px 0px;
        cursor: pointer;
        opacity: 0;
        transition: opacity .7s;
        @media screen and (min-width:768px) {
          left: size(28);
          right: size(28);
        }

        .zoom-icon {
          width: size-m(26.52);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          @media screen and (min-width:768px) {
            width: size(26.52);
          }
        }
      }

      &.swiper-slide-active {
        .parallax, .mask {
          opacity: 1;
        }
      }

      .p1 {
        background-image: url(@/section/s3/1.jpg);
      }
      .p2 {
        background-image: url(@/section/s3/2.jpg);
      }
      .p3 {
        background-image: url(@/section/s3/3.jpg);
      }
      .p4 {
        background-image: url(@/section/s3/4.jpg);
      }
      .p5 {
        background-image: url(@/section/s3/5.jpg);
      }
      .p6 {
        background-image: url(@/section/s3/6.jpg);
      }
    }

    .swiper-button-prev, .swiper-button-next {
      // background: rgba(255,0,0,0.5);
      margin: 0;
      top: 0;
      width: size-m(42.5);
      height: 100%;
      @media screen and (min-width:768px) {
        width: size(30);
        height: size(30);
      }

      &:after {
        display: none;
        // @media screen and (min-width:768px) {
        //   display: block;
        // }
      }
    }
    .swiper-button-prev {
      left: 0;
      @media screen and (min-width:768px) {
        top: auto;
        bottom: size(-60 - 15);
        left: size(28);
        // background: red;
        background-image: url(@/section/s3/arrow-prev.svg);
        background-size: size(12.5) auto;
        background-position: left center;
        background-repeat: no-repeat;
      }
    }
    .swiper-button-next {
      right: 0;
      @media screen and (min-width:768px) {
        display: none;
      }
    }
  }

  .content {
    width: size-m(290);
    top: size-m(451.92);
    left: size-m(42.5);
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(589.1);
      top: size(428);
      left: size(245.34);
    }

    .t1 {
      font-size: size-m(19);
      line-height: size-m(25);
      font-weight: 700;
      margin-bottom: size-m(12.5);
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(40.2);
        margin-bottom: size(34.5);
      }
    }

    .txt {
      font-size: size-m(12);
      line-height: size-m(20);
      font-weight: 500;
      text-align: justify;
      @media screen and (min-width:768px) {
        font-size: size(16);
        line-height: size(27.2);
      }
    }
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
// import FsLightbox from "fslightbox-vue/v3";
// import slide1_full from '@/section/s3/1.jpg';
// import slide2_full from '@/section/s3/2.jpg';
// import slide3_full from '@/section/s3/3.jpg';
// import slide4_full from '@/section/s3/4.jpg';
// import slide5_full from '@/section/s3/5.jpg';
// import slide6_full from '@/section/s3/6.jpg';

export default {
  props: ['setFsLightbox'],
  data() {
    return {
      slide: 1,
      sliderToggler: false,
      // sources: [slide1_full, slide2_full, slide3_full, slide4_full, slide5_full, slide6_full],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    // FsLightbox,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  methods: {
    openSlider: function(slide) {
      console.log('open', slide)
      this.slide = slide;
      this.sliderToggler = !this.sliderToggler;
      this.setFsLightbox({
        slide: this.slide,
        sliderToggler: this.sliderToggler
      })
    }
  }
};
</script>
