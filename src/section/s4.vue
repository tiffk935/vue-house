<template>
  <article class="s4">
    <div class="up">
      <div class="map">
        <Fullview v-if="isMobile" />
        <div class="caption" v-if="!isMobile">環境空拍參考示意圖</div>
      </div>
      <div class="r" v-if="!isMobile">
        <div class="t">
          <div class="t1 text-[#78572E]" data-aos="fade-up" data-aos-delay="0">匯七期豐華</div>
          <div class="t1 text-[#78572E]" data-aos="fade-up" data-aos-delay="0">禮名人胸襟</div>
          <img class="en" data-aos="fade-up" data-aos-delay="100" src="@/section/s4/en.svg" alt="" srcset="" />
        </div>
        <div class="i" data-aos="fade-up" data-aos-delay="0">
          <div class="caption">南屯捷運站</div>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="t">
        <img class="t3 pc" data-aos="fade-up" data-aos-delay="200" src="@/section/s4/transport.svg" alt="" srcset="" />
        <div class="t1 text-[#78572E]" data-aos="fade-up" data-aos-delay="0">匯快捷樞紐，禮城心之點</div>
        <img class="t3 mob" data-aos="fade-up" data-aos-delay="200" src="@/section/s4/transport.svg" alt="" srcset="" />
        <div class="t2 text-[#86807B]" data-aos="fade-up" data-aos-delay="100">
          捷運綠線南屯站x捷運綠線文心森林公園站<br />
          雙捷站點環伺在旁，日常通勤、出遊，一卡瞬連<br />
          聰明掌握捷運經濟，如同您對於生活的講究
        </div>
      </div>

      <div class="swiper-box relative" data-aos="fade-up" data-aos-delay="0">
        <Splide
          ref="splide"
          class="slide"
          :options="{
            drag: isMobile,
            arrows: isMobile,
            autoplay: isMobile,
            pagination: false,
            interval: 4000,
            gap: 0,
            type: 'loop',
            autoWidth: true,
          }"
        >
          <SplideSlide
            class="slide-item i"
            :key="i"
            v-for="i in imgs"
            :style="{ 'background-image': `url(${i.img}) !important` }"
          >
            <div class="caption">
              {{ i.caption }}
            </div>
          </SplideSlide>
        </Splide>
        <!-- <div class="mo-arrow" v-if="isMobile">
          <img
            class="prev"
            @click="splide.go('<')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
          <img
            class="next"
            @click="splide.go('>')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
        </div> -->
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  @apply w-full relative z-10;
  height: size(1706);
  padding-right: size(60);
  padding-top: size(48);
  background-image: url(@/section/s2/sec2-bg.jpg);
  background-size: 100% auto;

  .i {
    @apply relative bg-cover;
    width: size(472);
    height: size(376);
    &:nth-child(2) {
      background-image: url("@/section/s4/1.webp");
    }
  }

  .caption {
    @apply absolute text-white;
    font-size: size(14);
    font-weight: 400;
    letter-spacing: size(0.84);
    right: size(20);
    bottom: size(20);
  }

  .up {
    @apply flex items-end justify-end;
    gap: size(22);
    margin-bottom: size(15);
    .map {
      @apply relative;
      width: size(1309);
      height: size(1170);
      background-image: url("@/section/s4/map.webp");
      background-size: cover;
    }
    .r {
      .t {
        margin-bottom: size(314);
        padding-left: size(10);
        .t1 {
          font-size: size(60);
          line-height: size(84);
          font-weight: 700;
          letter-spacing: .05em;
        }
        .en {
          width: size(247);
        }
      }
    }
  }

  .down {
    @apply flex items-end justify-end;
    gap: size(72);
    .t {
      .t1 {
        font-size: size(60);
        line-height: size(72);
        font-weight: 700;
        letter-spacing: .05em;
        margin-bottom: size(35);
      }
      .t2 {
        font-size: size(23);
        line-height: size(45);
        font-weight: 500;
        letter-spacing: .06em;
      }
      .t3 {
        width: size(689.69);
        display: block;
        margin: 0 auto size(32) auto;

        &.mob {
          display: none;
        }
      }
    }

    .swiper-box {
      width: size(966);
      .slide-item {
        @apply relative;
        width: size(472);
        height: size(376);
        margin-right: size(22);
        position: relative;
        
        @media screen and (max-width: 767px) {
          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: sizem(178);
            height: 100%;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 44.99%, #000 100.75%);
          }
        }
      }
    }
  }

  .train {
    @apply bg-cover;
    @apply absolute;
    width: size(898);
    height: size(598);
    background-image: url("@/section/s4/train.webp");
    bottom: size(280);
    left: -#{size(163)};
    ////// 動畫位置調整 assets/style/custom-aos.css > TRAININ
  }

  .leaf {
    @apply absolute w-full h-full top-0 left-0 pointer-events-none;
    .leaf1 {
      left: 0;
      bottom: 0;
      width: size(245);
    }
    .leaf2 {
      left: size(232);
      bottom: -#{size(100)};
      width: size(286);
    }
    .leaf3 {
      left: size(1381);
      bottom: -#{size(70)};
      width: size(185);
    }
    .leaf4 {
      left: size(1625);
      bottom: -#{size(250)};
      width: size(182);
    }
    img {
      @apply absolute;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    @apply w-full relative text-[#034150];
    // height: sizem(1376);
    height: auto;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    background-size: auto 100%;
    .i {
      @apply relative bg-cover;
      width: size(472);
      height: size(376);
      &:nth-child(2) {
        background-image: url("@/section/s4/1.webp");
      }
    }

    .caption {
      @apply absolute text-white;
      font-size: sizem(12);
      font-weight: 400;
      letter-spacing: 1.5px;
      right: sizem(10);
      bottom: sizem(10);
      z-index: 1;
    }

    .up {
      @apply flex flex-col items-center justify-center;
      gap: sizem(25.82);
      margin-bottom: sizem(37);
      .mo-t {
        @apply flex flex-col items-center justify-center;
        gap: sizem(10);
        .t1 {
          color: #034150;
          font-size: sizem(25);
          font-weight: 700;
          letter-spacing: 1.5px;
        }
        .en {
          width: sizem(271);
        }
      }
      .map {
        @apply relative;
        width: sizem(375);
        height: sizem(667);
      //  background-image: url("@/section/s4/map.webp");
      }
    }

    .down {
      @apply flex flex-col items-center justify-center;
      @apply text-center;
      gap: sizem(9.6);
      .t {
        .t1 {
          font-size: sizem(25);
          line-height: sizem(35);
          margin-bottom: sizem(13);
        }
        .t2 {
          font-size: sizem(13);
          line-height: sizem(22);
          margin-bottom: sizem(35);
          text-align: left;
          font-weight: 400;
        }
        .t3 {
          width: sizem(314);
          margin: 0 auto sizem(39) auto;
          
          &.mob {
            display: block;
          }

          &.pc {
            display: none;
          }
        }
      }

      .swiper-box {
        // width: sizem(315);
        width: 100%;
        .slide-item {
          @apply relative;
          // width: sizem(315);
          width: 100%;
          height: sizem(237.23);
          margin-right: sizem(22);
        }
      }
    }

    .train {
      @apply bg-cover pointer-events-none;
      @apply absolute;
      width: sizem(371);
      height: sizem(247);
      background-image: url("@/section/s4/train.webp");
      bottom: sizem(15);
      left: -#{sizem(138)};
      ////// 動畫位置調整 assets/style/custom-aos.css > TRAININ
    }
    .mo-leaf {
      @apply absolute w-full h-full top-0 left-0 pointer-events-none;
      .leaf1 {
        left: sizem(155);
        bottom: sizem(100);
        width: sizem(69.5);
      }
      .leaf2 {
        left: sizem(225);
        bottom: sizem(50);
        width: sizem(51);
      }
      .leaf3 {
        left: sizem(12);
        bottom: -#{sizem(20)};
        width: sizem(50.5);
      }
      img {
        @apply absolute;
      }
    }
  }
}
</style>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 .down .swiper-box {
  .splide__arrow {
    position: absolute;
    top: 0;
    width: sizem(47);
    height: sizem(47);
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;
    @media screen and (min-width: 767px) {
      width: size(84);
      height: size(84);
    }

    img, svg {
      display: none;
    }

    &.splide__arrow--prev {
      display: none;
    }

    &.splide__arrow--next {
      right: sizem(12);
      background-image: url('data:image/svg+xml,<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 46.9944C10.5425 46.9944 0 36.4575 0 23.5C0 10.5425 10.5425 0 23.5 0C36.4575 0 47 10.5425 47 23.5C47 36.4575 36.4575 47 23.5 47V46.9944ZM23.5 0.555162C10.8479 0.555162 0.555162 10.8479 0.555162 23.5C0.555162 36.1521 10.8479 46.4448 23.5 46.4448C36.1521 46.4448 46.4448 36.1521 46.4448 23.5C46.4448 10.8479 36.1466 0.555162 23.5 0.555162Z" fill="white"/><path d="M38.467 25.7317H9.19336V25.1765H37.1291L30.023 18.0704L30.4172 17.6763L38.467 25.7317Z" fill="white"/></svg>');
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: auto;
      @media screen and (min-width: 767px) {
        right: size(42);
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
import Fullview from "../components/fullview.vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const imgs = globals.$isMobile()
  ? [
      {
        img: new URL("../section/s4/1.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
      {
        img: new URL("../section/s4/2.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
      {
        img: new URL("../section/s4/3.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
    ]
  : [
      {
        img: new URL("../section/s4/2.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
      {
        img: new URL("../section/s4/3.webp", import.meta.url).href,
        caption: "南屯捷運站",
      },
    ]
</script>
