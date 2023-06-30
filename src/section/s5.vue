<template>
  <section class="s5 relative">
    <img class="bg absolute hidden md:block" src="@/section/s5/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s5/bg-m.png" />
    <img class="tree absolute" src="@/section/s5/tree.png" />
    <div class="pic1 absolute">
      <img src="@/section/s5/pic1.jpg" />
      <div class="text-white">情境示意圖</div>
    </div>
    <div class="pic2 absolute">
      <img src="@/section/s5/pic2.jpg" />
      <div class="text-white"></div>
    </div>
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#005d43]">大學城進行式</div>
      <div class="t2">土城核心2.0 純住文教特區</div>
      <div class="content">大學城藝文氛圍令人嚮往，更是房價保證班。『土城核心2.0』集政府單位、萬坪公園校園、捷運商圈、大型醫院等機能於一身，增值未來無可限量。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(667);
  z-index: 2;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .tree {
    width: size-m(113.49);
    top: size-m(123);
    right: size-m(-50.37);
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(246);
      top: size(89.4);
      right: size(97);
      z-index: 0;
    }
  }

  .man {
    width: size-m(215.4);
    top: size-m(-240);
    left: size-m(170);
    @media screen and (min-width:768px) {
      width: size(463);
      top: size(-411);
      left: size(1444);
    }
  }

  .bird {
    width: size(355);
    top: size(829);
    left: size(1565);
  }

  .pic1 {
    width: size-m(256);
    top: size-m(4);
    left: size-m(61);
    @media screen and (min-width:768px) {
      width: size(602);
      top: size(247);
      left: size(1063);
    }
  }

  .pic2 {
    width: size-m(375);
    height: size-m(326);
    bottom: 0;
    left: 0;
    @media screen and (min-width:768px) {
      width: size(960);
      height: size(835);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .pic1, .pic2 {
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

  .text {
    width: 100%;
    top: size-m(185);
    left: 0;
    padding: 0 size-m(30);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(669);
      padding: 0 size(344) 0 size(1063);
      text-align: left;
    }

    .t1 {
      font-size: size-m(25);
      font-weight: 800;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(12);
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
      margin-bottom: size-m(12);
      @media screen and (min-width:768px) {
        font-size: size(30);
        margin-bottom: size(60);
      }
    }

    .content {
      font-size: size-m(13);
      line-height: 1.7;
      text-align: justify;
      @media screen and (min-width:768px) {
        font-size: size(20);
        width: size(515);
        
      }
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
// import slide2_1_full from '@/section/s5/slide2-1-full.jpg';
// import slide2_2_full from '@/section/s5/slide2-2-full.jpg';
// import slide2_3_full from '@/section/s5/slide2-3-full.jpg';
// import slide3_1_full from '@/section/s5/slide3-1-full.jpg';
// import slide3_2_full from '@/section/s5/slide3-2-full.jpg';
// import slide3_3_full from '@/section/s5/slide3-3-full.jpg';

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