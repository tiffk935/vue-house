<template>
  <section class="s3 text-white bg-[#D9374B] relative">
    <img class="text1 absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/text1-m.svg" />
    <img class="text1 absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/text1.svg" />
    <div class="slider slider1 absolute">
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
          <img src="@/section/s3/slide1-1.jpg" />
          <div class="text-white">埤塘代圖，實際以現場為準</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide1-2.jpg" />
          <div class="text-white md:text-[#727171]">埤塘代圖，實際以現場為準</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-bg bg-white absolute"></div>
    <img class="map absolute" src="@/section/s3/map.png" />
    <img class="text2 absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/text2-m.svg" />
    <img class="text2 absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/text2.svg" />
    <div class="slider slider2 absolute">
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
          <img src="@/section/s3/slide2-1.jpg" />
          <div class="text-white">大園國中現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-2.jpg" />
          <div class="text-white">國道二號現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-3.jpg" />
          <div class="text-white">台61現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-4.jpg" />
          <div class="text-white md:text-[#727171]">捷運A15大園站現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-5.jpg" />
          <div class="text-white">高鐵桃園站現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-6.jpg" />
          <div class="text-white">月桃路拓寬現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-7.jpg" />
          <div class="text-white">桃園機場現場實景</div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/section/s3/slide2-8.jpg" />
          <div class="text-white">桃園喜來登酒店現場實景</div>
        </swiper-slide>
      </swiper>
    </div>
    <img class="tree1 absolute hidden md:block" src="@/section/s3/tree1.png" />
    <img class="tree2 absolute hidden md:block" src="@/section/s3/tree2.png" />
    <img class="tree3 absolute hidden md:block" src="@/section/s3/tree3.png" />
    <img class="style1 absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/style1.png" />
    <img class="style2 absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s3/style2.png" />
    <img class="style3 absolute" data-aos="fade-right" data-aos-delay="0" src="@/section/s3/style3.png" />
    <img class="style4 absolute hidden md:block" src="@/section/s3/style4.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  
  @keyframes skew {
    to {
      transform: skewX(0deg);
    }
  }

  width: 100%;
  height: size-m(1484);
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(2155);
  }

  .text1 {
    top: size-m(36);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(280);
      left: size(155);
      width: size(604);
    }
  }

  .slider {
    width: 100%;
    height: size-m(200.07 + 34);
    padding-bottom: size-m(34);
    top: size-m(316);
    left: 0;
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
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
        font-weight: 500;
        position: absolute;
        bottom: size-m(10);
        right: size-m(10);
        @media screen and (min-width:768px) {
          font-size: size(19);
          text-shadow: none;
          bottom: size(10);
          right: auto;
          left: size(10);
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
        background: #d9d9d9;
        opacity: 1;
        margin: 0 size-m(6.445);
        @media screen and (min-width:768px) {
          width: size(10);
          height: size(10);
          margin: 0 size(10);
        }

        &.swiper-pagination-bullet-active {
          background: #D9374B;
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
      display: block;
    }
  }

  .slider2 {
    height: size-m(234 + 34);
    top: size-m(1156);
    left: 0;
    @media screen and (min-width:768px) {
      width: size(706.93);
      height: size(442.33 + 55);
      top: size(1601);
      left: size(162);
    }

    .swiper {

      .swiper-button-next {
        transform: translate(30vw, size-m(29 + 5));
        @media screen and (min-width:768px) {
          transform: translate(9vw, size(45 + 10));
        }
      }

      .swiper-button-prev {
        transform: translate(-30vw, size-m(29 + 5));
        @media screen and (min-width:768px) {
          transform: translate(-9vw, size(45 + 10));
        }
      }

    }
  }

  .w-bg {
    width: 100%;
    height: size-m(932);
    top: size-m(516);
    left: 0;
    @media screen and (min-width:768px) {
      width: size(1818);
      height: size(1314);
      top: size(794);
      left: size(51);
    }
  }

  .map {
    width: 100%;
    top: size-m(578);
    left: 0;
    @media screen and (min-width:768px) {
      top: size(874);
      left: size(311);
      width: size(1196);
    }
  }

  .text2 {
    top: size-m(828);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(1655);
      left: size(971);
      width: size(807);
    }
  }

  .tree1 {
    @media screen and (min-width:768px) {
      top: size(-180);
      left: size(13);
      width: size(182);
      transform: skewX(6deg);
      transform-origin: 50% 100%;
      animation: skew 6s linear infinite alternate;
    }
  }

  .tree2 {
    @media screen and (min-width:768px) {
      top: size(-87);
      left: size(202);
      width: size(101.22);
      transform: skewX(4deg);
      transform-origin: 50% 100%;
      animation: skew 6s linear infinite alternate;
    }
  }

  .tree3 {
    @media screen and (min-width:768px) {
      top: size(-37);
      left: size(253);
      width: size(189);
      transform: skewX(5deg);
      transform-origin: 50% 100%;
      animation: skew 6s linear infinite alternate;
    }
  }

  .style1 {
    @media screen and (min-width:768px) {
      top: size(-180);
      left: size(1399);
      width: size(323);
      z-index: 2;
    }
  }

  .style2 {
    top: size-m(461);
    left: size-m(2);
    width: size-m(113);
    z-index: 2;
    @media screen and (min-width:768px) {
      top: size(626.16);
      left: size(579.16);
      width: size(323.49);
    }
  }

  .style3 {
    top: size-m(814);
    left: size-m(259);
    width: size-m(108);
    @media screen and (min-width:768px) {
      top: size(1326);
      left: size(155);
      width: size(311);
    }
  }
  
  .style4 {
    @media screen and (min-width:768px) {
      top: size(1833);
      left: size(1534);
      width: size(344);
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>
