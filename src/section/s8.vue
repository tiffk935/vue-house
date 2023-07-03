<template>
  <section class="s8 relative">
    <img class="tree2 absolute absolute md:hidden" src="@/section/s8/tree2.png" />
    <div class="text absolute md:hidden" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#E2C46C]">移動 快捷有感</div>
      <div class="t2">1高2快3捷運 說走就走</div>
      <div class="content">驅車國道3號或經由台65線接軌國道1號，南來北往超順暢；板南線海山站、土城站以及萬大線二期LG10站，4分鐘就到，輕鬆遊走雙北。</div>
    </div>
    <img class="tree1 absolute md:hidden" src="@/section/s8/tree1.png" />
    <div class="slider absolute">
      <swiper 
        :spaceBetween="10"
        :pagination="{
          clickable: true
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
          <img class="slide_img" src="@/section/s8/1.jpg" />
          <div class="text-white">國道三號</div>
        </swiper-slide>
        <swiper-slide>
          <img class="slide_img" src="@/section/s8/2.jpg" />
          <div class="text-white">板南線土城海山站</div>
        </swiper-slide>
        <swiper-slide>
          <img class="slide_img" src="@/section/s8/3.jpg" />
          <div class="text-white">板南線土城捷運站</div>
        </swiper-slide>
        <swiper-slide>
          <img class="slide_img" src="@/section/s8/4.jpg" />
          <div class="text-white">65號快速道路</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="grids absolute">
      <div class="item">
        <img class="slide_img" src="@/section/s8/1.jpg" />
        <div class="text-white">國道三號</div>
        <div class="mask"></div>
      </div>
      <div class="item flex items-center relative">
        <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
          <div class="t1 text-[#E2C46C]">移動 快捷有感</div>
          <div class="t2">1高2快3捷運 說走就走</div>
        </div>
        <img class="tree1 absolute" src="@/section/s8/tree1.png" />
      </div>
      <div class="item">
        <img class="slide_img" src="@/section/s8/2.jpg" />
        <div class="text-white">板南線土城海山站</div>
        <div class="mask"></div>
      </div>
      <div class="item">
        <img class="tree3 absolute" src="@/section/s8/tree3.png" />
      </div>
      <div class="item">
        <img class="tree2 absolute" src="@/section/s8/tree2.png" />
      </div>
      <div class="item">
        <img class="slide_img" src="@/section/s8/3.jpg" />
        <div class="text-white">板南線土城捷運站</div>
        <div class="mask"></div>
      </div>
      <div class="item flex items-center">
        <div class="text absolute text-center" data-aos="fade-down" data-aos-delay="0">
          <div class="content">驅車國道3號或經由台65線接軌國道1號，南來北往超順暢；板南線海山站、土城站以及萬大線二期LG10站，4分鐘就到，輕鬆遊走雙北。</div>
        </div>
      </div>
      <div class="item">
        <img class="slide_img" src="@/section/s8/4.jpg" />
        <div class="text-white">65號快速道路</div>
        <div class="mask"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size-m(667);
  background:#005d43  url("@/section/s8/bg.png");
  background-size: auto;
  @media screen and (min-width:768px) {
    height: size(960);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
  }

  .text-white {
    font-size: size-m(12);
    position: absolute;
    bottom: size-m(10);
    right: size-m(10);
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
    letter-spacing: 0.2em;
    @media screen and (min-width:768px) {
      font-size: size(20);
      bottom: size(10);
      right: size(10);
      opacity: 0;
      transition: opacity .2s;
    }
  }

  .slider {
    top: size-m(301);
    left: size-m(30);
    right: size-m(30);
    overflow: hidden;
    padding-bottom: size-m(36);
    @media screen and (min-width:768px) {
      display: none;
    }

    .swiper {
      overflow: visible;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
    }

    .swiper-pagination-bullets {
      bottom: auto;
      bottom: -7.5vw;

      .swiper-pagination-bullet {
        width: size-m(10);
        height: size-m(10);
        background: #fff;
        opacity: 0.1;

        &.swiper-pagination-bullet-active {
          background: #fff;
          opacity: 1;
        }
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(30.84);
      height: size-m(30.84);
      background-size: contain;
      bottom: -9vw;
      top: auto;
      margin: 0;
      z-index: 11;
      @media screen and (min-width:768px) {
        width: size(60);
        height: size(60);
      }
      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      left: 22vw;
      background-image: url(@/section/s4/arrow-prev.svg);
    }

    .swiper-button-next {
      right: 22vw;
      background-image: url(@/section/s4/arrow-next.svg);
    }
  }

  .grids {
    display: none;
    @media screen and (min-width:768px) {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      top: size(0);
      left: size(0);

      .item {
        width: 25%;
        position: relative;
        overflow: hidden;

        // &>div {
        //   width: 100%;
        //   height: 0;
        //   padding-top: 100%;
        // }

        .slide_img{
          height: 100%;
        }

        img {
          width: 100%;
          display: block;
        }

        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          transition: opacity .2s;
        }

        &:hover {
          .mask {
            opacity: 0;
          }
          .text-white {
            opacity: 1;
          }
        }
      }
    }
  }

  .text {
    color: #fff;
    width: 100%;
    top: size-m(52);
    left: 0;
    padding: 0 size-m(30);
    text-align: center;
    @media screen and (min-width:768px) {
      position: static;
      top: size(395);
      padding: 0 size(66);
      text-align: left;
    }

    .t1 {
      font-size: size-m(25);
      font-weight: 800;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(13);
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
      margin-bottom: size-m(13);
      @media screen and (min-width:768px) {
        font-size: size(30);
        margin-bottom: size(63);
      }
    }

    .content {
      font-size: size-m(13);
      line-height: 1.7;
      @media screen and (min-width:768px) {
        font-size: size(20);
        letter-spacing: 0.2em;
        text-align: center;
      }
    }
  }

  .tree1 {
    width: size-m(154);
    top: size-m(214);
    left: size-m(-55);
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    max-width: none;
    @media screen and (min-width:768px) {
      width: size(312) !important;
      top: size(338);
      left: size(-5);
    }
  }

  .tree2 {
    width: size-m(125);
    top: size-m(234);
    right: size-m(-50);
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    max-width: none;
    @media screen and (min-width:768px) {
      width: size(246) !important;
      top: size(303);
      left: size(-50);
    }
  }

  .tree3 {
    display: none;
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    max-width: none;
    @media screen and (min-width:768px) {
      display: block;
      width: size(345) !important;
      top: size(272);
      left: size(223);
    }
  }

  .girl {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      width: size(434) !important;
      top: size(-6);
      left: size(18);
    }
  }

  .man {
    width: size-m(202);
    top: size-m(135);
    left: size-m(211);
    @media screen and (min-width:768px) {
      width: size(517);
      top: size(-15);
      left: size(-2);
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
  // methods: {
  //   setSwiper(swiper) {
  //     this.swiper = swiper;
  //   },
  //   slideTo(num) {
  //     this.swiper.update();
  //     this.swiper.slideTo(num);
  //   },
  // }
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