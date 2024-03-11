<template>
  <section class="s4 relative">
    <!--div class="slider absolute">
      <swiper 
        :spaceBetween="10"
        :navigation="true"
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
          },
        }"
      >
        <swiper-slide>
          <img src="@/section/s4/slide1.jpg" />
          <div class="text-white">情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/slide2.jpg" />
          <div class="text-white">情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/slide3.jpg" />
          <div class="text-white">情境示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s4/slide4.jpg" />
          <div class="text-white">情境示意圖</div>
        </swiper-slide>
      </swiper>
    </div-->
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#BC9151]">城市 新榮景</div>
      <div class="t2">國道北土城交流道2027完工</div>
      <div class="content">以國道三號為分界，北區鄰近土城醫院、文教特區，南區預計遷入新北地方法院與地檢署等機關，預估2027年完工，2030年全面啟用，帶領土城發展更上一層樓。</div>
    </div>
    <div class="newimg absolute">
      <img src="@/section/s4/pic1.jpg" />
      <div class="text-white">情境示意圖</div>
    </div>
    <img class="tree absolute" src="@/section/s4/tree.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  z-index: 3;
  //height: size-m(667);
  height: size-m(387);
  background: url("@/section/s12/bg.jpg");
  background-size: auto;
  @media screen and (min-width:768px) {
    //height: size(1080);
    height: size(300);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .slider {
    width: 100%;
    top: size-m(76);
    left: size-m(0);
    @media screen and (min-width:768px) {
      top: size(109);
    }

    .swiper-slide .text-white {
      font-size: size-m(12);
      position: absolute;
      bottom: size-m(10);
      right: size-m(10);
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
      @media screen and (min-width:768px) {
        font-size: size(12);
        bottom: size(10);
        right: size(10);
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(30.84);
      height: size-m(30.84);
      background-size: contain;
      @media screen and (min-width:768px) {
        width: size(60);
        height: size(60);
      }
      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 0;
      background-image: url(@/section/s4/arrow-prev.svg);
    }

    .swiper-button-next {
      right: 0;
      background-image: url(@/section/s4/arrow-next.svg);
    }
  }

  .text {
    width: 100%;
    //top: size-m(319);
    top: size-m(29);
    left: 0;
    padding: 0 size-m(20);
    text-align: center;
    @media screen and (min-width:768px) {
      //top: size(730);
      top: size(140);
      padding: 0 size(100) 0 size(109);
      text-align: left;
      width: size(950);
    }

    .t1 {
      font-size: size-m(25);
      font-weight: 800;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(15);
      @media screen and (min-width:768px) {
        font-size: size(40);
        margin-bottom: size(20);
      }
    }

    .t2 {
      font-size: size-m(20);
      font-weight: 700;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(15);
      @media screen and (min-width:768px) {
        font-size: size(30);
        margin-bottom: size(50);
      }
    }

    .content {
      font-size: size-m(13);
      line-height: 1.7;
      @media screen and (min-width:768px) {
        font-size: size(20);
      }
    }
  }

  .newimg  {z-index: 2;
    .text-white {
      font-size: size-m(12);
      text-shadow: 0px 0px size-m(5) rgba(0, 0, 0, 0.8);
      position: absolute;
      bottom: size-m(10);
      right: size-m(10);
      line-height: 1;
      @media screen and (min-width:768px) {
        font-size: size(12);
        text-shadow: 0px 0px size(5) rgba(0, 0, 0, 0.8);
        bottom: size(10);
        right: size(10);
      }
    }
  }

  .tree {
    width: size-m(140);
    //top: size-m(518);
    top: size-m(280);
    left: size-m(-40);
    transform-origin:0 80%;
    transform: rotate(6deg);
    animation: tree 5s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(245);
      //top: size(742);
      top: size(382);
      left: size(-50);
    }
  }

  .newimg {
    width: size-m(256);
    //top: size-m(518);
    top: size-m(190);
    height: size-m(170);
    right: size-m(58);
    @media screen and (min-width:768px) {
      width: size(602);
      top: size(82);
      right: size(237);
      height: size(387);

    }
  }
}

</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
// // import FsLightbox from "fslightbox-vue/v3";
// import slide2_1_full from '@/section/s4/slide2-1-full.jpg';
// import slide2_2_full from '@/section/s4/slide2-2-full.jpg';
// import slide2_3_full from '@/section/s4/slide2-3-full.jpg';
// import slide3_1_full from '@/section/s4/slide3-1-full.jpg';
// import slide3_2_full from '@/section/s4/slide3-2-full.jpg';
// import slide3_3_full from '@/section/s4/slide3-3-full.jpg';

export default {
  components: {
    Swiper,
    SwiperSlide,
    // FsLightbox,
  },
  setup() {
    // let swiperRef = null;

    // const setSwiperRef = (swiper) => {
    //   swiperRef = swiper;
    // };

    // const slideToPrev = () => {
    //   swiperRef.slidePrev();
    // };

    // const slideToNext = () => {
    //   swiperRef.slideNext();
    // };
    
    return {
      // swiperRef: null,
      // setSwiperRef,
      // slideToPrev,
      // slideToNext,
      modules: [Navigation, Autoplay],
    };
  },
  // data() {
  //   return {
  //     currentSlider: 2,
  //     slider2Toggler: false,
  //     slider2Slide: 1,
  //     slider3Toggler: false,
  //     slider3Slide: 1,
  //     sources2: [slide2_1_full, slide2_2_full, slide2_3_full],
  //     sources3: [slide3_1_full, slide3_2_full, slide3_3_full],
  //   }
  // },
  // methods: {
  //   openSlider: function(slider, slide) {
  //     console.log('open', slide)
  //     if(slider === 2) {
  //       this.slider2Slide = slide;
  //       this.slider2Toggler = !this.slider2Toggler;
  //     }
  //     else if(slider === 3) {
  //       this.slider3Slide = slide;
  //       this.slider3Toggler = !this.slider3Toggler;
  //     }
  //   }
  // } 
};
</script>