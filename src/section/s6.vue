<template>
  <section class="s6 bg-[#CA485D] relative">
    <img class="bg absolute hidden md:block" src="@/section/s6/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s6/bg-m.png" />
    <img class="tree absolute" src="@/section/s6/tree.png" />
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#E2C46C]">便利 全集中</div>
      <div class="t2">土城人的主場 就是這裡</div>
      <div class="content">10分鐘內吃喝玩樂，延吉、裕民與家樂福三大商圈；15分鐘內享受21,000坪綠意；清水國小、中正國中和裕德雙語高中，人文教育自小養成。</div>
    </div>
    <img class="tree2 absolute" src="@/section/s6/tree2.png" />
    <img class="bird absolute" src="@/section/s6/bird.svg" />

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
          <img src="@/section/s6/1.jpg" />
          <!-- <div class="text-white">清和公園</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/2.jpg" />
          <!-- <div class="text-white">青山公園</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/3.jpg" />
          <!-- <div class="text-white">土城國民運動中心</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/4.jpg" />
          <!-- <div class="text-white">土城棒壘球場</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/5.jpg" />
          <!-- <div class="text-white">土城綜合體育場</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/6.jpg" />
          <!-- <div class="text-white">土城綜合體育場</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/7.jpg" />
          <!-- <div class="text-white">土城綜合體育場</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/8.jpg" />
          <!-- <div class="text-white">土城綜合體育場</div> -->
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s6/9.jpg" />
          <!-- <div class="text-white">土城綜合體育場</div> -->
        </swiper-slide>
      </swiper>
    </div>
    <div class="grids absolute">
      <div class="item">
        <img src="@/section/s6/1.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/2.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/3.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/4.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/5.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/6.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/7.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/8.jpg" />
        <div class="mask"></div>
      </div>
      <div class="item">
        <img src="@/section/s6/9.jpg" />
        <div class="mask"></div>
      </div>
    </div>
    
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
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
    mix-blend-mode: multiply;
  }

  .slider {
    top: size-m(266);
    left: size-m(30);
    right: size-m(30);
    overflow: hidden;
    padding-top: size-m(36);
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
      top: -7vw;

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
      top: -9vw;
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
      left: 0;
      background-image: url(@/section/s4/arrow-prev.svg);
    }

    .swiper-button-next {
      right: 0;
      background-image: url(@/section/s4/arrow-next.svg);
    }
  }

  .grids {
    display: none;
    @media screen and (min-width:768px) {
      // width: size(961);
      display: flex;
      flex-wrap: wrap;
      gap: size(11);
      top: size(60);
      left: size(901);

      .item {
        width: size(313);
        position: relative;

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
          background: rgba(109, 0, 33, 0.7);
          transition: opacity .2s;
        }

        &:hover {
          .mask {
            opacity: 0;
          }
        }
      }
    }
  }

  .text {
    color: #fff;
    width: 100%;
    top: size-m(96);
    left: 0;
    padding: 0 size-m(30);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(395);
      padding: 0 size(1283) 0 size(272);
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
      }
    }
  }

  .tree {
    width: size-m(897);
    bottom: size-m(-14);
    left: size-m(-339);
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    max-width: none;
    @media screen and (min-width:768px) {
      width: size(1920);
      bottom: size(-60);
      left: size(0);
    }
  }

  .tree2 {
    width: size-m(124);
    top: size-m(10);
    left: size-m(-35);
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    max-width: none;
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .bird {
    width: size-m(236.83);
    top: size-m(16.46);
    left: size-m(203);
    @media screen and (min-width:768px) {
      display: none;
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