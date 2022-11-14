<template>
  <section class="s3 bg-[#e4e3db] relative">
    <img class="title absolute md:hidden" src="@/section/s3/title-m.svg" />
    <img class="title absolute hidden md:block" src="@/section/s3/title.svg" />
    <div class="slider absolute">
      <swiper 
        :allowTouchMove="true"
        slidesPerView="auto"
        :centeredSlides="true"
        :loop="true"
        @init="tkinit"
        @transitionStart="tktransitionStart"
        @transitionEnd="tktransitionEnd"
        @swiper="setSwiperRef"
        :modules="modules"
      >
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide1/logo.svg" />
            <div class="line"></div>
            <div class="text">
              <span class="year">1991</span>「宗大建設」成立
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide2/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">1996</span>東方紐約
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide3/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">1999</span>雙橡園
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide4/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2003</span>歐薇花園
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide5/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2011</span>湖美霞觀
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide6/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2012</span>陽光靚巷
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide7/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2013</span>崇德青硯
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide8/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2017</span>陶裡原
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide9/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2018</span>凌波揚
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide10/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2019</span>台南國際城
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide11/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2020</span>天下南隅
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide12/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">2022</span>出雲居
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide13/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">Processing</span>遇州南
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide14/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">Processing</span>小陶砌
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item w-full h-full relative">
            <img class="logo" src="@/section/s3/slide15/logo.png" />
            <div class="line"></div>
            <div class="text">
              <span class="year">Processing</span>小日子
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="wline md:hidden"></div>

      <div class="slideToPrev absolute cursor-pointer" @click="slideToPrev">
        <img class="w-full md:hidden" src="@/section/s3/arrow-prev-m.svg" />
        <img class="w-full hidden md:block" src="@/section/s3/arrow-prev.svg" />
      </div>
      <div class="slideToNext absolute cursor-pointer" @click="slideToNext">
        <img class="w-full md:hidden" src="@/section/s3/arrow-next-m.svg" />
        <img class="w-full hidden md:block" src="@/section/s3/arrow-next.svg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size-m(579);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .title {
    top: size-m(36);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(30);
      left: size(180);
      width: size(365.18);
    }
  }

  .slider {
    width: 100%;
    height: size-m(327);
    top: size-m(179);
    left: 0;
    @media screen and (min-width:768px) {
      height: size(752.67);
      top: size(141.33);
    }

    // .arrow-wapper {
    //   background: rgba(255,0,0,0.2);
    //   @media screen and (min-width:768px) {
    //     width: size(539);
    //     height: size(581);
    //     position: absolute;
    //     top: size(313);
    //     left: 0;
    //   }
    // }

    .slideToPrev, .slideToNext {
      // background: rgba(255,0,0,0.2);
      top: size-m(276);
      width: size-m(14);
      // cursor: pointer;
      z-index: 10;
      transform: translate(0, -50%);
      @media screen and (min-width:768px) {
        width: size(539);
        height: size(581);
        top: 24vw;

        &:hover {
          img {
            opacity: 1;
          }
        }
      }
      
      img {
        width: 100%;
        cursor: pointer;
        @media screen and (min-width:768px) {
          position: absolute;
          width: size(231.92);
          top: 22.7vw;
          opacity: 0;
          transition: opacity .4s;
        }
      }

    }

    .slideToPrev {
      
      left: size-m(10);
      @media screen and (min-width:768px) {
        left: 0;
      }

      img {
        @media screen and (min-width:768px) {
          left: size(42);
        }
      }

    }

    .slideToNext {
      
      right: size-m(10);
      @media screen and (min-width:768px) {
        right: 0;
      }

      img {
        @media screen and (min-width:768px) {
          right: size(42);
        }
      }

    }

    .swiper {
      width: size-m(295);
      height: 100%;
      @media screen and (min-width:768px) {
        width: 100%;
      }
    }

    .swiper-slide {
      width: 100%;
      display: flex;
      align-items: flex-end;
      @media screen and (min-width:768px) {
        width: size(836);
      }

      .item {
        @media screen and (min-width:768px) {
          transition: all .4s;
          width: size(539);
          height: size(581);
          opacity: 0.2;

          // .logo, .text {
          //   opacity: 0.2;
          // }
        }
      }

    }

    .logo {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0) scale(0.8);
      transform-origin: bottom center;
      width: 100%;
      height: size-m(232.67);
      object-fit: contain;
      transition: all .4s linear;
      @media screen and (min-width:768px) {
        top: auto;
        bottom: size(189.38);
        transform: translate(-50%, 0) scale(1);
        // height: size(534.6);
        height: 20.4vw;
        object-position: bottom;
      }
    }

    .line {
      width: 100%;
      position: absolute;
      top: size-m(276);
      left: 0;
      height: 1px;
      background: #fff;
      transition: all .4s linear;
      @media screen and (min-width:768px) {
        top: auto;
        bottom: size(84);
      }
    }

    .swiper-slide-active {
      // @media screen and (min-width:768px) {
      //   width: size(836);
      //   // width: size(539);
      //   background: red;
      // }

      .logo {
        transform: translate(-50%, 0) scale(1);
        object-position: center;
        @media screen and (min-width:768px) {
          height: size(534.6);
        }
      }

      .line {
        height: 2px;
        background: #D08421;
      }

      .item {
        @media screen and (min-width:768px) {
          width: 100%;
          height: 100%;
          transition: all .4s;
          opacity: 1;

          // .logo, .text {
          //   opacity: 1;
          // }
        }
      }

    }

    .text {
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: size-m(16);
      top: size-m(297);
      @media screen and (min-width:768px) {
        top: auto;
        bottom: 0;
        font-size: size(27);
      }

      .year {
        color: #D08421;
        margin-right: size-m(12);
        font-size: size-m(21);
        @media screen and (min-width:768px) {
          margin-right: size(16);
          font-size: size(37);
        }
      }
    }

    // @media screen and (min-width:768px) {
    //   width: size(1134);
    //   height: size(605 + 55);
    //   top: size(223);
    //   left: size(786);
    // }

    .wline {
      width: 100%;
      position: absolute;
      top: size-m(276);
      left: 0;
      height: 1px;
      background: #fff;
    }
    
  }

}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let swiperRef = null;

    function prevAll(element) {
      var result = [];
      while (element = element.previousElementSibling)
        result.push(element);
      return result;
    }

    function nextAll(element) {
      var result = [];
      while (element = element.nextElementSibling)
        result.push(element);
      return result;
    }

    function resetSlide(){
      console.log('resetSlide')
      const prev = prevAll(document.querySelector('.s3 .swiper-slide-active'));
      prev.forEach(el => {
        el.querySelector('.item').style.margin = '0 0 0 auto';
      })
      const next = nextAll(document.querySelector('.s3 .swiper-slide-active'));
      next.forEach(el => {
        el.querySelector('.item').style.margin = '0 auto 0 0';
      })
    }

    const tkinit = () => {
      resetSlide();
    }

    const tktransitionStart = () => {
      if(swiperRef){
        resetSlide();
      }
    }

    const tktransitionEnd = () => {
      if(swiperRef){
        resetSlide();
      }
    }

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
      tkinit,
      tktransitionStart,
      tktransitionEnd,
      setSwiperRef,
      slideToPrev,
      slideToNext,
      // modules: [Pagination, Navigation, Autoplay],
      modules: []
    };
  },
};
</script>
