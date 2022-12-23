<template>
  <section class="s5 relative">
    <img class="bg absolute hidden md:block" src="@/section/s4/bg.png" />
    <img class="bg absolute md:hidden" src="@/section/s4/bg-m.png" />
    <img class="leaf absolute" src="@/section/s5/leaf.png">
    <div class="text" data-aos="fade-up" data-aos-delay="0">
      <div class="t1 absolute">安心售後服務</div>
      <div class="t2">十年防水保固</div>
      <div class="content">用心的建築來自對細節的要求，漏水、隔熱問題，一次完善到位，與台北101 同級的SA級鋼筋續接器、當層排氣工法等，負責到底的售後服務精神，給家人最好的穩固生活！</div>
    </div>
    <div class="gallary">
      <div class="item">
        <div class="title absolute">耐震SA 級續接器</div>
        <img src="@/section/s5/slide1.jpg" />
      </div>
      <div class="item">
        <div class="title absolute">當層排氣工法</div>
        <img src="@/section/s5/slide2.jpg" />
      </div>
      <div class="item">
        <div class="title absolute">櫻花三機廚具</div>
        <img src="@/section/s5/slide3.jpg" />
      </div>
      <div class="item">
        <div class="title absolute">愛惠浦濾水器</div>
        <img src="@/section/s5/slide4.jpg" />
      </div>
      <div class="item">
        <div class="title absolute">台達暖風機</div>
        <img src="@/section/s5/slide5.jpg" />
      </div>
      <div class="item">
        <div class="title absolute">耶魯電子鎖</div>
        <img src="@/section/s5/slide6.jpg" />
      </div>
      <div class="item">
        <div class="title absolute">HCG 馬桶</div>
        <img src="@/section/s5/slide7.jpg" />
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
      >
        <swiper-slide>
          <div class="item">
            <div class="title absolute">耐震SA 級續接器</div>
            <img src="@/section/s5/slide1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="title absolute">當層排氣工法</div>
            <img src="@/section/s5/slide2.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="title absolute">櫻花三機廚具</div>
            <img src="@/section/s5/slide3.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="title absolute">愛惠浦濾水器</div>
            <img src="@/section/s5/slide4.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="title absolute">台達暖風機</div>
            <img src="@/section/s5/slide5.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="title absolute">耶魯電子鎖</div>
            <img src="@/section/s5/slide6.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <div class="title absolute">HCG 馬桶</div>
            <img src="@/section/s5/slide7.jpg" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(604);
  color: #000;
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(900);
  }

  .bg {
    width: 100%;
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
      top: size(180);
      left: size(1007);
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
        line-height: size(63.6);
        margin-bottom: size(0);
      }
    }

    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(20);
      margin-bottom: size-m(18);
      @media screen and (min-width:768px) {
        font-size: size(48);
        line-height: size(63.6);
        margin-bottom: size(30);
      }
    }

    .content {
      letter-spacing: 0.1em;
      font-size: size-m(13);
      line-height: size-m(20);
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(28.62);
        max-width: size(545);
      }
    }
  }

  .leaf {
    width: size-m(384);
    top: size-m(156);
    left: size-m(65);
    animation: tree1 5s ease-in-out alternate infinite;
    transform-origin: 0% 100%;
    transform: skew(5deg);
    max-width: none;
    @media screen and (min-width:768px) {
      width: size(820);
      top: size(-100);
      left: size(1216);
    }
  }

  .gallary {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
    }

    .item {
      position: absolute;
      width: size(239);
      height: size(239);

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .title {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: size(20);
        font-weight: 500;
        background: #D2630C;
        opacity: 0.92;
        transition: opacity .3s;
        z-index: 1;
      }

      &:hover .title {
        opacity: 0;
      }

      &:nth-child(1) {
        top: size(188);
        left: size(159);
      }

      &:nth-child(2) {
        top: size(188);
        left: size(430);
      }

      &:nth-child(3) {
        top: size(188);
        left: size(700);
      }

      &:nth-child(4) {
        top: size(459);
        left: size(430);
      }

      &:nth-child(5) {
        top: size(459);
        left: size(700);
      }

      &:nth-child(6) {
        top: size(459);
        left: size(971);
      }

      &:nth-child(7) {
        top: size(459);
        left: size(1248);
      }
    }
  }

  .slider {
    top: size-m(276);
    left: size-m(0);
    width: 100%;
    @media screen and (min-width:768px) {
      display: none;
    }

    .item {
      max-width: size-m(239);
      margin: 0 auto;
      position: relative;

      .title {
        font-weight: 500;
        color: #fff;
        font-size: size-m(18);
        line-height: size-m(44);
        text-align: center;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(210, 99, 12, 0.92);
      }
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
      modules: [Pagination, Navigation, Autoplay],
    }
  },
  methods: {
    setSwiper(swiper) {
      this.swiper = swiper;
    },
    slideTo(num) {
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