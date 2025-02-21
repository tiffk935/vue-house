<template>
  <article class="s6">
    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        匯綠馥大地，禮鮮氧體會
      </div>
      <img
        class="t2"
        data-aos="fade-up"
        data-aos-delay="200"
        src="@/section/s6/en.png"
        alt=""
      />
      <div class="t3" data-aos="fade-up" data-aos-delay="200">
        為您將台中七期的森林綠馥備妥安放，文心森林公園的綠意盎然、假日出遊的首選之地，<br />
        搭配禮惠公園與南屯公園的悠然鮮氧，這裡的生活時光，是一份無可取代的鮮氧森活式。
      </div>
    </div>
    <div class="swiper-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 4000,
          gap: 0,
          type: 'loop',
          autoWidth: true,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="info" v-if="!isMobile">
      <div class="c">
        為您將台中七期的森林綠馥備妥安放，文心森林公園的綠意盎然、假日出遊的首選之地，<br /><br />
        搭配禮惠公園與南屯公園的悠然鮮氧，這裡的生活時光，是一份無可取代的鮮氧森活式。
      </div>
      <div class="arrows">
        <img
          class="prev"
          @click="splide.go('<')"
          src="@/section/s6/arrow.png"
          alt=""
          srcset=""
        />
        <img
          class="next"
          @click="splide.go('>')"
          src="@/section/s6/arrow.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="mo-arrow" v-if="isMobile">
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
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  @apply w-full relative text-white;
  height: size(1080);
  padding-top: size(132);
  .t {
    @apply pointer-events-none;
    @apply relative z-10;
    @apply flex flex-col items-center justify-center;
    gap: size(33);
    .t1 {
      font-size: size(48);
      font-weight: 700;
      letter-spacing: size(2.88);
    }
    .t2 {
      width: size(717.8);
    }
  }
  .swiper-box {
    @apply w-full h-full absolute left-0 top-0;
    .slide-item {
      @apply relative bg-cover;
      width: size(1920);
      height: size(1080);
      .caption {
        @apply absolute;
        font-size: size(14);
        font-weight: 400;
        letter-spacing: size(0.84);
        right: size(30);
        bottom: size(10);
      }
    }
  }
  .info {
    @apply absolute z-10 bg-white/70;
    left: size(92);
    bottom: 0;
    width: size(344);
    height: size(350);
    padding: 0 size(50);
    padding-top: size(74);
    .c {
      color: #034150;
      text-align: justify;
      font-size: size(15);
      font-weight: 400;
      letter-spacing: size(0.9);
    }
    .arrows {
      @apply relative;
      @apply flex items-center justify-center pointer-events-none;
      gap: size(90);
      margin-top: size(43);

      .prev {
        @apply -scale-x-100;
      }

      img {
        @apply cursor-pointer pointer-events-auto;
        width: size(36);
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s6 {
    @apply w-full relative text-white;
    height: sizem(628);
    padding-top: sizem(50);
    .t {
      @apply pointer-events-none;
      @apply relative z-10;
      @apply flex flex-col items-center justify-center;
      gap: size(33);
      .t1 {
        font-size: sizem(25);
        font-weight: 700;
        letter-spacing:0.115em;
      }
      .t2 {
        width: sizem(315);
        margin-top: sizem(9);
      }
      .t3 {
        width: sizem(315);
        font-size: sizem(13);
        font-weight: 400;
        margin-top: sizem(17.32);
        letter-spacing: 0.78px;
      }
    }
    .swiper-box {
      @apply w-full h-full absolute left-0 top-0;
      .slide-item {
        @apply relative bg-cover;
        width: sizem(375);
        height: sizem(628);
        .caption {
          @apply absolute;
          font-size: sizem(12);
          font-weight: 400;
          letter-spacing: 0.78px;
          right: sizem(15);
          bottom: sizem(10);
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

const splide = ref()

const imgs = [
  {
    img: new URL("../section/s6/1.webp", import.meta.url).href,
    caption: "南屯公園",
  },
  {
    img: new URL("../section/s6/2.webp", import.meta.url).href,
    caption: "南屯公園",
  },
  {
    img: new URL("../section/s6/3.webp", import.meta.url).href,
    caption: "文心公園",
  },
  {
    img: new URL("../section/s6/4.webp", import.meta.url).href,
    caption: "文心公園",
  },
]
</script>
