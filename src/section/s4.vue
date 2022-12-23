<template>
  <section class="s4 relative">
    <img class="bg absolute hidden md:block" src="@/section/s4/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s4/bg-m.png" />
    <div class="text">
      <div class="t1 absolute">三十年甲級營造職人</div>
      <div class="t2">專業建築品牌</div>
      <div class="content">以專業為職志打造建築－鐵冠建設、昌譽營造，卓越的工程實力與設計品質，榮獲多項國家大獎肯定，成就建築最完美的價值</div>
    </div>
    <div class="tabs-title absolute">業 績</div>

    <div class="tk-tabs absolute flex md:hidden">
      <div :class="{'tk-tab': true, active: activeTab === 1}" @click="slideTo(1)">Hi 台北</div>
      <div :class="{'tk-tab': true, active: activeTab === 2}" @click="slideTo(2)">中山直美</div>
      <div :class="{'tk-tab': true, active: activeTab === 3}" @click="slideTo(3)">翠松園</div>
      <div :class="{'tk-tab': true, active: activeTab === 4}" @click="slideTo(4)">墨清院</div>
      <div :class="{'tk-tab': true, active: activeTab === 5}" @click="slideTo(5)">景上汀</div>
    </div>
    <div class="tk-tabs absolute hidden md:flex">
      <div :class="{'tk-tab': true, active: activeTab === 1}" @click="activeTab = 1">Hi 台北</div>
      <div :class="{'tk-tab': true, active: activeTab === 2}" @click="activeTab = 2">中山直美</div>
      <div :class="{'tk-tab': true, active: activeTab === 3}" @click="activeTab = 3">翠松園</div>
      <div :class="{'tk-tab': true, active: activeTab === 4}" @click="activeTab = 4">墨清院</div>
      <div :class="{'tk-tab': true, active: activeTab === 5}" @click="activeTab = 5">景上汀</div>
    </div>

    <img class="leaf absolute" src="@/section/s4/leaf.png" />
    <img class="bird absolute" src="@/section/s4/bird.png" />
    <div class="gallary absolute">
      <div :class="{item: true, active: activeTab === 1}" @click="activeTab = 1">
        <img src="@/section/s4/slide1.jpg" />
      </div>
      <div :class="{item: true, active: activeTab === 2}" @click="activeTab = 2">
        <img src="@/section/s4/slide2.jpg" />
      </div>
      <div :class="{item: true, active: activeTab === 3}" @click="activeTab = 3">
        <img src="@/section/s4/slide3.jpg" />
      </div>
      <div :class="{item: true, active: activeTab === 4}" @click="activeTab = 4">
        <img src="@/section/s4/slide4.jpg" />
      </div>
      <div :class="{item: true, active: activeTab === 5}" @click="activeTab = 5">
        <img src="@/section/s4/slide5.jpg" />
      </div>
    </div>
    <div class="slider absolute">
      <swiper 
        :spaceBetween="10"
        :pagination="false"
        :navigation="true"
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @swiper="setSwiper"
        @slideChange="slideChange"
      >
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s4/slide1-m.jpg" />
          <img class="photo hidden md:block" src="@/section/s4/slide1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s4/slide2-m.jpg" />
          <img class="photo hidden md:block" src="@/section/s4/slide2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s4/slide3-m.jpg" />
          <img class="photo hidden md:block" src="@/section/s4/slide3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s4/slide4-m.jpg" />
          <img class="photo hidden md:block" src="@/section/s4/slide4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="photo md:hidden" src="@/section/s4/slide5-m.jpg" />
          <img class="photo hidden md:block" src="@/section/s4/slide5.jpg" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  height: size-m(667);
  color: #000;
  @media screen and (min-width:768px) {
    height: size(980);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .text {
    position: absolute;
    top: size-m(43);
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 size-m(30);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(216);
      left: size(990);
      width: auto;
      height: auto;
      padding: 0;
      text-align: left;
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 800;
      font-size: size-m(25);
      line-height: size-m(17);
      margin-bottom: size-m(18);
      position: relative;
      @media screen and (min-width:768px) {
        font-size: size(48);
        line-height: size(56.64);
        margin-bottom: size(9);
      }
    }

    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(20);
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(36);
        line-height: size(42.48);
        margin-bottom: size(28);
      }
    }

    .content {
      letter-spacing: 0.1em;
      font-size: size-m(13);
      line-height: size-m(20);
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(28.62);
        max-width: size(650);
      }
    }
  }

  .tabs-title {
    top: size-m(204);
    left: 0;
    width: 100%;
    text-align: center;
    font-size: size-m(20);
    line-height: size-m(24);
    color: #fff;
    font-family: 'Noto Serif TC';
    font-weight: 900;
    // letter-spacing: 0.295em;
    @media screen and (min-width:768px) {
      top: size(459);
      left: size(905);
      width: auto;
      font-size: size(24);
      line-height: size(28.32);
    }

    &:before, &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: size-m(144);
      height: size-m(2);
      background: #fff;
      @media screen and (min-width:768px) {
        height: size(2);
      }
    }

    &:before {
      left: 0;
      @media screen and (min-width:768px) {
        width: size(144);
        left: size(-144 - 15);
      }
    }

    &:after {
      right: 0;
      @media screen and (min-width:768px) {
        transform: translateX(100%);
        right: size(-15);
        width: size(944);
      }
    }
  }

  .tk-tabs {
    top: size-m(251);
    left: 0;
    width: 100%;
    text-align: center;
    font-size: size-m(14);
    padding: 0 size-m(15);
    // display: flex;
    justify-content: space-between;
    color: #fff;
    @media screen and (min-width:768px) {
      top: size(510);
      left: size(992);
      width: size(500);
      font-size: size(18);
      padding: 0 size(28.62);
    }

    .tk-tab {
      cursor: pointer;
      position: relative;
      line-height: 1;
      transition: all .2s;

      &.active {
        color: #000;
        font-weight: 700;
        transform: translateY(size-m(6.5));
        @media screen and (min-width:768px) {
          transform: translateY(size(6.5));
        }

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -100%);
          // background: rgba(255,0,0,0.3);
          width: size-m(49.5);
          height: size-m(10.5);
          background-image: url(@/section/s4/tab-arrow.svg);
          background-position: center center;
          background-size: contain;
          background-repeat: no-repeat;
          @media screen and (min-width:768px) {
            top: size(-5);
            width: size(49.5);
            height: size(13);
          }
        }
      }
    }
  }

  .leaf {
    width: size-m(179.81);
    top: size-m(289);
    left: size-m(-21);
    animation: tree1 5s ease-in-out alternate infinite;
    transform-origin: 0% 100%;
    transform: skew(5deg);
    @media screen and (min-width:768px) {
      width: size(807);
      top: size(34);
      left: size(-89);
    }
  }

  .bird {
    width: size-m(151);
    top: size-m(297);
    left: size-m(66);
    @media screen and (min-width:768px) {
      width: size(565);
      top: size(282);
      left: size(263);
    }
  }

  .gallary {
    display: none;
    @media screen and (min-width:768px) {
      display: flex;
      width: 100%;
      height: size(330.24);
      top: size(571.76);
      left: 0;
    }

    .item {
      position: relative;
      cursor: pointer;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.6;
        transition: opacity .3s;
      }

      &:hover:after, &.active:after {
        opacity: 0;
      }
    }
  }

  .slider {
    bottom: size-m(0);
    left: size-m(0);
    width: 100%;
    @media screen and (min-width:768px) {
      display: none;
    }

    .swiper-slide {
      width: 100%;

      img {
        width: 100%;
      }
    }
    
    .swiper-pagination {
      width: auto;
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(30);
      height: size-m(30);
      background-size: contain;
      margin: 0;
      z-index: 11;
      background-repeat: no-repeat;
      // background-color: red;
      @media screen and (min-width:768px) {
        width: size(60);
        height: size(60);
        bottom: 37.4vw;
      }
      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: size-m(12);
      background-image: url(@/section/s4/arrow-prev.svg);
      background-position: left;
      // @media screen and (min-width:768px) {
      //   left: 85vw;
      // }
    }

    .swiper-button-next {
      right: size-m(12);
      background-image: url(@/section/s4/arrow-next.svg);
      background-position: right;
      // @media screen and (min-width:768px) {
      //   left: 95vw;
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
      activeTab: 1,
      modules: [Pagination, Navigation, Autoplay],
    }
  },
  methods: {
    setSwiper(swiper) {
      this.swiper = swiper;
    },
    slideChange() {
      if(this.swiper){
        if( document.querySelector('.s4 .slider') && document.querySelector('.s4 .slider').clientWidth > 0 ) {
          this.activeTab = this.swiper.realIndex + 1;
        }
      }
    },
    slideTo(num) {
      console.log('slideTo', num)
      this.swiper.update();
      this.swiper.slideTo(num);
    },
  }
};

// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       modules: [Navigation, Autoplay],
//     };
//   },
  
// };
</script>