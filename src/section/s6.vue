<template>
  <section class="s6 relative">
    <div class="rect w-full absolute bg-[#D9374B]"></div>
    <img class="bg absolute block md:hidden" src="@/section/s6/bg-m.svg" />
    <img class="bg absolute hidden md:block" src="@/section/s6/bg.svg" />
    
    <div class="title">
    <div class="t2" data-aos="fade-up" data-aos-delay="100">錢都20期：大樓 & 別墅</div>
    <div class="t1" data-aos="fade-up" data-aos-delay="200">威泰好宅 自有風華</div>
    <div class="content" data-aos="fade-up" data-aos-delay="300">
      威泰選地擇優，<br>
      以經典時尚語彙成就建築詩篇，<br>
      建築城市的風景，團隊堅信─<br>
      有使命感的建築將會改造一座城市。<br>
      城市一靜 水綠靚界；實踐夢想 幸福造鎮<br>
      在桃園客運園區，寓見未來！<br>
      生活FUN輕鬆，與最好的自己相遇。

    </div>
    </div>

    <div class="slider slider1 absolute md:hidden">
      <swiper 
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <img src="@/section/s6/slide1-1.jpg" />
          <div class="text-white">戀JIA公寓區3D示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/slide1-2.jpg" />
          <div class="text-white">戀JIA一樓3D示意圖</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/slide1-3.jpg" />
          <div class="text-white">戀JIA一樓3D示意圖</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pics absolute hidden md:flex">
      <div class="pic">
        <img src="@/section/s6/slide1-1.jpg" alt="">
        <div class="text-[#727171]">戀JIA公寓區3D示意圖</div>
      </div>
      <div class="pic">
        <img src="@/section/s6/slide1-2.jpg" alt="">
        <div class="text-white">戀JIA一樓3D示意圖</div>
      </div>
      <div class="pic">
        <img src="@/section/s6/slide1-3.jpg" alt="">
        <div class="text-white">戀JIA一樓3D示意圖</div>
      </div>
    </div>

    <div class="tk-tabs absolute">
      <div :class="{'tk-tab': true, active: currentSlider === 2}" @click="currentSlider = 2">全區配置</div>
      <div :class="{'tk-tab': true, active: currentSlider === 3}" @click="currentSlider = 3">百變戶型</div>
    </div>

    <div v-if="currentSlider === 2" class="slider slider2 absolute">
      <swiper 
        :allowTouchMove="false"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @swiper="setSwiperRef"
        :navigation="false"
        :modules="modules"
      >
        <swiper-slide>
          <figure class="cursor-pointer" @click="openSlider(2, 1)">
            <img class="hidden md:block" src="@/section/s6/slide2-1.jpg" />
            <img class="md:hidden" src="@/section/s6/slide2-1-m.jpg" />
          </figure>
        </swiper-slide>
        <swiper-slide>
          <figure class="cursor-pointer" @click="openSlider(2, 2)">
            <img class="hidden md:block" src="@/section/s6/slide2-2.jpg" />
            <img class="md:hidden" src="@/section/s6/slide2-2-m.jpg" />
          </figure>
        </swiper-slide>
        <swiper-slide>
          <figure class="cursor-pointer" @click="openSlider(2, 3)">
            <img class="hidden md:block" src="@/section/s6/slide2-3.jpg" />
            <img class="md:hidden" src="@/section/s6/slide2-3-m.jpg" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>

    <div v-if="currentSlider === 3" class="slider slider3 absolute">
      <swiper 
        :allowTouchMove="false"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @swiper="setSwiperRef"
        :navigation="false"
        :modules="modules"
      >
        <swiper-slide>
          <figure class="cursor-pointer" @click="openSlider(3, 1)">
            <img class="hidden md:block" src="@/section/s6/slide3-1.jpg" />
            <img class="md:hidden" src="@/section/s6/slide3-1-m.jpg" />
          </figure>
        </swiper-slide>
        <swiper-slide>
          <figure class="cursor-pointer" @click="openSlider(3, 2)">
            <img class="hidden md:block" src="@/section/s6/slide3-2.jpg" />
            <img class="md:hidden" src="@/section/s6/slide3-2-m.jpg" />
          </figure>
        </swiper-slide>
        <swiper-slide>
          <figure class="cursor-pointer" @click="openSlider(3, 3)">
            <img class="hidden md:block" src="@/section/s6/slide3-3.jpg" />
            <img class="md:hidden" src="@/section/s6/slide3-3-m.jpg" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>

    <img class="note absolute" src="@/section/s6/note.svg" />

    <button @click="slideToNext" class="slideToNext">
      <img class="w-full" src="@/section/s3/arrow-right-circle.svg" />
    </button>

    <button @click="slideToPrev" class="slideToPrev">
      <img class="w-full" src="@/section/s3/arrow-left-circle.svg" />
    </button>

    <FsLightbox
      :toggler="slider2Toggler"
      :slide="slider2Slide"
      :sources="sources2"
    /> 

    <FsLightbox
      :toggler="slider3Toggler"
      :slide="slider3Slide"
      :sources="sources3"
    /> 

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size-m(1154);
  @media screen and (min-width:768px) {
    height: size(1444);
  }

  .fslightbox-toolbar-button:nth-child(1) {
    display: none;
  }

  .rect {
    height: 10px;
    bottom: 0;
    left: 0;
  }

  .bg {
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .text {
    top: size-m(36);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(42);
      left: size(218);
      width: size(807);
    }
  }

  .title{
    position: absolute;
    top: size(40);
    left:size(220);
    width: size(559);
    z-index: 5;
    text-align: left;

    @media screen and (max-width:768px) {
      text-align: left;
      top: size-m(35);
      left:size-m(30);
      width: size-m(315);
    }

    .t1{
      font-size: size(58);
      line-height: size(70);
      margin-bottom: size(5);
      color: #D9374B;
      font-weight: 900;

      @media screen and (max-width:768px) {
        font-size: size-m(25);
        margin-top: size-m(10);
        margin-bottom: size-m(25);
      }
    }

    .t2{
      font-size: size(30);
      color: #727171;
      font-weight:500;
      line-height: size(40);

      @media screen and (max-width:768px) {
        font-size: size-m(16);
        line-height: size-m(25);
      }
    }

    .content{
      font-size: size(16);
      color: #727171;
      font-weight:300;
      margin-top: size(35);
      text-align: left;
      text-align: justify;
      @media screen and (max-width:768px) {
        font-size: size-m(14);
        margin-top: size-m(10);
        line-height: size-m(20);
        font-weight:400;
      }
    }

  }

  .tk-tabs {
    top: size-m(607);
    left: size-m(31);
    width: size-m(312.73);
    display: flex;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      top: size(1240);
      left: size(155);
      width: size(139);
      display: block;
    }

    .tk-tab {
      font-size: size-m(18);
      font-weight: 500;
      color: #fff;
      width: size-m(138);
      border: 1px solid #FFFFFF;
      text-align: center;
      line-height: size-m(42);
      cursor: pointer;
      position: relative;
      @media screen and (min-width:768px) {
        font-size: size(18);
        width: 100%;
        line-height: size(42);
        margin-bottom: size(25.91);
      }

      &.active {
        font-size: size-m(20);
        font-weight: 700;
        border: none;
        border-color: rgba(255,255,255,0);
        @media screen and (min-width:768px) {
          font-size: size(20);
        }

        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: size-m(4);
          background: #fff;
          @media screen and (min-width:768px) {
            height: size(4);
          }
        }
      }
    }
  }

  .slider {
    width: size-m(314.34);
    height: size-m(197.02 + 34);
    padding-bottom: size-m(34);
    top: size-m(281);
    left: size-m(30);
    overflow: hidden;
    // background: yellow;
    box-sizing: content-box;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(1134);
      height: size(605 + 55);
      padding-bottom: size(55);
      top: size(223);
      left: size(786);
    }

    .swiper {
      overflow: visible;

      .swiper-slide div {
        font-size: size-m(14);
        // text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
        font-weight: 500;
        position: absolute;
        bottom: size-m(10);
        right: size-m(10);
        @media screen and (min-width:768px) {
          font-size: size(19);
          text-shadow: none;
          bottom: size(10);
          right: size(10);
        }
      }

      .swiper-pagination {
        bottom: -7vw;
        z-index: 0;
        @media screen and (min-width:768px) {
          bottom: -2.38vw;
        }
      }

      .swiper-pagination-bullet {
        width: size-m(6.44);
        height: size-m(6.44);
        background: #BFBFBF;
        opacity: 1;
        margin: 0 size-m(6.445);
        @media screen and (min-width:768px) {
          width: size(10);
          height: size(10);
          margin: 0 size(10);
        }

        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }

      .swiper-button-next, .swiper-button-prev {
        width: size-m(29);
        height: size-m(29);
        top: auto;
        bottom: 0;
        margin: 0;
        background-size: contain;
        background-position: center center;
        z-index: 1;
        @media screen and (min-width:768px) {
          width: size(45);
          height: size(45);
        }

        &:after {
          display: none;
        }
      }

      .swiper-button-next {
        right: 50%;
        transform: translate(19vw, size-m(29 + 5));
        background-image: url(@/section/s3/arrow-right-circle.svg);
        @media screen and (min-width:768px) {
          transform: translate(5vw, size(45 + 10));
        }
      }

      .swiper-button-prev {
        left: 50%;
        transform: translate(-19vw, size-m(29 + 5));
        background-image: url(@/section/s3/arrow-left-circle.svg);
        @media screen and (min-width:768px) {
          transform: translate(-5vw, size(45 + 10));
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // display: block;
    }
  }

  .slider1 .swiper, .slider2 .swiper, .slider3 .swiper {

    .swiper-slide div {
      font-size: size-m(12);
      bottom: size-m(-5);
      right: size-m(10);
      right: 50%;
      transform: translate(50%, 100%);
    }
    
    .swiper-button-next {
      transform: translate(19vw, size-m(29 + 30));
    }

    .swiper-button-prev {
      transform: translate(-19vw, size-m(29 + 30));
    }

    .swiper-pagination {
      bottom: -13.5vw;
    }
    
  }

  .slideToPrev, .slideToNext {
    width: size-m(29);
    height: size-m(29);
    position: absolute;
    top: size-m(1094);
    cursor: pointer;
    @media screen and (min-width:768px) {
      width: size(45);
      height: size(45);
      top: size(954);
    }
  }

  .slideToPrev {
    left: size-m(119);
    z-index: 10;
    @media screen and (min-width:768px) {
      left: size(332);
    }
  }

  .slideToNext {
    left: size-m(226);
    z-index: 10;
    @media screen and (min-width:768px) {
      left: size(1689);
    }
  }

  .slider2, .slider3 {
    width: size-m(313);
    height: size-m(380 + 34);
    top: size-m(681);
    left: size-m(31);
    @media screen and (min-width:768px) {
      width: size(1272);
      height: size(740 + 55);
      top: size(613);
      left: size(397);
    }

    .swiper {

      .swiper-pagination {
        bottom: -14vw;
        @media screen and (min-width:768px) {
          bottom: -2vw;
        }
      }
    }
  }

  .pics {
    top: size(225);
    left: size(618);

    .pic {
      width: size(351);
      margin-right: size(24);

      img {
        display: block;
        width: 100%;
      }

      div {
        font-size: size(16);
        line-height: size(18);
        margin-top: size(6);
      }
    }

  }

  .note {
    top: size-m(1072);
    left: size-m(52);
    width: size-m(270);
    @media screen and (min-width:768px) {
      top: size(1366);
      left: size(1439);
      width: size(226.59);
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
import FsLightbox from "fslightbox-vue/v3";
import slide2_1_full from '@/section/s6/slide2-1-full.jpg';
import slide2_2_full from '@/section/s6/slide2-2-full.jpg';
import slide2_3_full from '@/section/s6/slide2-3-full.jpg';
import slide3_1_full from '@/section/s6/slide3-1-full.jpg';
import slide3_2_full from '@/section/s6/slide3-2-full.jpg';
import slide3_3_full from '@/section/s6/slide3-3-full.jpg';

export default {
  components: {
    Swiper,
    SwiperSlide,
    FsLightbox,
  },
  setup() {
    let swiperRef = null;

    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };

    const slideToPrev = () => {
      swiperRef.slidePrev();
    };

    const slideToNext = () => {
      swiperRef.slideNext();
    };
    
    return {
      swiperRef: null,
      setSwiperRef,
      slideToPrev,
      slideToNext,
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  data() {
    return {
      currentSlider: 2,
      slider2Toggler: false,
      slider2Slide: 1,
      slider3Toggler: false,
      slider3Slide: 1,
      sources2: [slide2_1_full, slide2_2_full, slide2_3_full],
      sources3: [slide3_1_full, slide3_2_full, slide3_3_full],
    }
  },
  methods: {
    openSlider: function(slider, slide) {
      console.log('open', slide)
      if(slider === 2) {
        this.slider2Slide = slide;
        this.slider2Toggler = !this.slider2Toggler;
      }
      else if(slider === 3) {
        this.slider3Slide = slide;
        this.slider3Toggler = !this.slider3Toggler;
      }
    }
  } 
};
</script>