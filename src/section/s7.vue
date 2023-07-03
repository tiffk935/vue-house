<template>
  <section class="s7 relative">
    <div class="slider absolute">
      <swiper 
        :spaceBetween="10"
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
          <img src="@/section/s7/slide1.jpg" />
          <div class="text-white">大清水運動公園</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s7/slide2.jpg" />
          <div class="text-white">青山公園</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s7/slide3.jpg" />
          <div class="text-white">清和公園</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s7/slide4.jpg" />
          <div class="text-white">土城棒壘球場</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s7/slide5.jpg" />
          <div class="text-white">土城國民運動中心</div>
        </swiper-slide>
         <swiper-slide>
          <img src="@/section/s7/slide6.jpg" />
          <div class="text-white">土城綜合體育場</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="atabs hidden md:flex">
      <div class="atab" @click="slideTo(1)">
        <img src="@/section/s7/slide1.jpg" />
        <div class="mask"></div>
      </div>
      <div class="atab" @click="slideTo(2)">
        <img src="@/section/s7/slide2.jpg" />
        <div class="mask"></div>
      </div>
      <div class="atab" @click="slideTo(3)">
        <img src="@/section/s7/slide3.jpg" />
        <div class="mask"></div>
      </div>
      <div class="atab" @click="slideTo(4)">
        <img src="@/section/s7/slide4.jpg" />
        <div class="mask"></div>
      </div>
      <div class="atab" @click="slideTo(5)">
        <img src="@/section/s7/slide5.jpg" />
        <div class="mask"></div>
      </div>
      <div class="atab" @click="slideTo(6)">
        <img src="@/section/s7/slide6.jpg" />
        <div class="mask"></div>
      </div>
    </div>
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      <div class="t1 text-[#E2C46C]">生活 紅不讓</div>
      <div class="t2">宜居定居首選 有感慢活</div>
      <div class="content">坐藏山水，同時享受綠意環繞，最舒適的生活環境；沒有重劃區的發展黑暗期，直接給您最成熟的機能，從日常生活到周末樂活，一次搞定。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(667);
  background:#005d43  url("@/section/s8/bg.png");
  background-size: auto;
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
    width: 100%;
    top: size-m(214);
    left: size-m(0);
    @media screen and (min-width:768px) {
      top: size(263);
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: size-m(391);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(820);
      }
    }

    .swiper-slide .text-white {
      font-size: size-m(12);
      position: absolute;
      bottom: size-m(10);
      right: size-m(10);
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
      letter-spacing: 0.2em;
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

  .atabs {
    width: 100%;
    display: none;
    justify-content: center;
    position: absolute;
    top: size(922);

    .atab {
      width: size(150);
      height: size(100);
      margin: 0 10px;
      cursor: pointer;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.4;
        transition: opacity .2s;
      }

      &:hover {
        .mask {
          opacity: 0;
        }
      }
    }
  }

  .text {
    color: #fff;
    width: 100%;
    top: size-m(50);
    left: 0;
    padding: 0 size-m(30);
    text-align: center;
    @media screen and (min-width:768px) {
      top: size(43);
      padding: 0 size(661);
    }

    .t1 {
      font-size: size-m(25);
      font-weight: 800;
      line-height: 1;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(13);
      @media screen and (min-width:768px) {
        font-size: size(40);
        margin-bottom: size(10);
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
        margin-bottom: size(10);
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
    opacity: .6;
    @media screen and (min-width:768px) {
      width: size(1920);
      bottom: size(-60);
      left: size(0);
    }
  }

  .man {
    width: size-m(96);
    top: size-m(495);
    left: size-m(0);
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(206);
      top: size(40);
      left: size(201);
      z-index: 0;
    }
  }

  .bird {
    width: size(400);
    top: size(21);
    left: size(1477);
  }
}

</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      modules: [Navigation, Autoplay],
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