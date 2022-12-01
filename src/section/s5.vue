<template>
  <section class="s5 relative">
    <img class="bg absolute hidden md:block" src="@/section/s5/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s5/bg-m.png" />
    <img class="tree absolute" src="@/section/s5/tree.png" />
    <img class="man absolute" data-aos="fade-left" data-aos-delay="0" src="@/section/s5/man.png" />
    <img class="bird absolute hidden md:block"  data-aos="fade-left" data-aos-delay="0" src="@/section/s5/bird.svg" />
    <div class="pic1 absolute">
      <img src="@/section/s5/pic1.jpg" />
      <div class="text-white">頂埔科技園區實景</div>
    </div>
    <div class="pic2 absolute">
      <img src="@/section/s5/pic2.jpg" />
      <div class="text-white">遠東通訊園區實景</div>
    </div>
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#C2465A]">科技 新門戶</div>
      <div class="t2">擁抱智慧浪潮 千億產值</div>
      <div class="content">擁抱3大科技產業園區，中和軟體、遠東通訊及頂埔科技，進駐產業人口將近4萬人，預估產值將突破兆元，土城新矽谷準備好了。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(667);
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
    width: size-m(123.49);
    top: size-m(-63);
    right: size-m(-10.37);
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(246);
      top: size(-149.4);
      right: size(397);
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
    top: size-m(24);
    left: size-m(61);
    @media screen and (min-width:768px) {
      width: size(602);
      top: size(154);
      left: size(1063);
    }
  }

  .pic2 {
    width: size-m(375);
    height: size-m(272.88);
    bottom: 0;
    left: 0;
    @media screen and (min-width:768px) {
      width: size(960);
      height: 100%;
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
    top: size-m(225);
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
      @media screen and (min-width:768px) {
        font-size: size(20);
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