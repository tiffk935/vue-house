<template>
  <article class="s7">
    <div class="t">
      <div class="t1 text-[#78572E]">匯名匠之作 禮大地風範</div>
      <svg class="line block md:hidden" viewBox="0 0 317 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.487 0H0V3.35862H59.487V0Z" fill="#FF6002"/>
        <line x1="317" y1="1.5" x2="59" y2="1.5" stroke="#FF6002"/>
      </svg>
      <svg class="line hidden md:block" viewBox="0 0 647 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M189 0H0V5H189V0Z" fill="#FF6002"/>
        <line x1="647" y1="2.5" x2="189" y2="2.5" stroke="#FF6002"/>
      </svg>
    </div>
    <div class="swiper-box relative">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          drag: isMobile,
          arrows: false,
          autoplay: isMobile,
          pagination: false,
          interval: 4000,
          gap: 0,
          type: 'loop',
          autoWidth: true,
        }"
        @splide:move="onMove"
      >
        <template v-if="!isMobile">
          <SplideSlide
            class="slide-item"
            :class="{ active: i === activeIdx }"
            :key="i"
            v-for="(item, i) in imgs"
          >
            <div
              class="avatar"
              :style="{ 'background-image': `url(${item.img})` }"
              @click="activeIdx = i"
              @mouseover="activeIdx = i"
              @mouseleave="activeIdx = -1"
            ></div>
            <div class="c1" v-html="item.c1"></div>
            <div class="c2" v-html="item.c2"></div>
            <div class="c3" v-html="item.c3"></div>
          </SplideSlide>
        </template>
        <template v-else>
          <SplideSlide class="slide-item" :key="i" v-for="(item, i) in imgs">
            <div
              class="avatar"
              :style="{ 'background-image': `url(${item.img})` }"
              @click="activeIdx = i"
            ></div>
            <div class="c1" v-html="item.c1"></div>
            <div class="c2" v-html="item.c2"></div>
            <div class="c3" v-html="item.c3"></div>
          </SplideSlide>
        </template>
      </Splide>
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
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  @apply w-full relative text-white bg-cover flex flex-col justify-start items-center;
  padding: size(132) 0 size(190 + 100) 0;
  background-image: url(@/section/s2/sec2-bg.webp);
  background-size: 100% auto;
  .t {
    @apply pointer-events-none relative z-10;
    .t1 {
      font-size: size(60);
      line-height: size(72);
      font-weight: 700;
      letter-spacing: .05em;
      margin-bottom: size(46);
    }
    .line {
      width: size(647);
      margin: 0 auto size(52) auto;
    }
    .t2 {
      width: size(717.8);
    }
  }
  .swiper-box {
    width: size(1127);
    height: size(428.08);
    .slide-item {
      @apply relative;
      width: size(333.15);
      height: auto;
      margin-right: size(63.85);
      .avatar {
        @apply w-full brightness-[0.3] transition-all;
        @apply cursor-pointer;
        height: size(428.08);
        background-size: 101%;
        margin-bottom: size(46);
        &:hover {
          @apply brightness-100;
        }
      }
      .c1 {
        @apply absolute whitespace-nowrap select-none pointer-events-none;
        right: size(16);
        top: size(22);
        writing-mode: vertical-lr;
        color: #ceaf73;
        font-size: size(17);
        font-weight: 700;
        letter-spacing: size(1.445);
        span {
          @apply relative;
          margin-top: size(20);

          &::after {
            @apply bg-[#ceaf73] absolute rotate-[139.76deg];
            content: "";
            width: size(17);
            height: 1px;
            bottom: 115%;
            left: 10%;
          }
        }
      }
      .c2 {
        @apply absolute whitespace-nowrap select-none pointer-events-none;
        right: size(42);
        top: size(22);
        writing-mode: vertical-lr;
        color: #fff;
        font-size: size(30.33);
        font-weight: 400;
        letter-spacing: size(5);
      }
      .c3 {
        @apply relative select-none opacity-0 transition-all pointer-events-none;
        color: #86807B;
        text-align: justify;
        font-size: size(19);
        line-height: size(29);
        font-weight: 500;
        letter-spacing: .06em;
        &::after {
          @apply absolute;
          @apply bg-cover bg-no-repeat;
          @apply left-1/2 -translate-x-1/2;
          bottom: 120%;
          content: "";
          width: size(31);
          height: size(15);
          background-image: url("@/section/s7/arror.png");
        }
      }

      &.active {
        .avatar {
          @apply brightness-100;
        }
        .c3 {
          @apply opacity-100;
        }
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s7 {
    @apply w-full relative text-white bg-cover;
    @apply flex flex-col justify-start items-center;
    padding: sizem(66) 0 sizem(120) 0;
    background-size: 100% auto;
    .t {
      @apply pointer-events-none;
      @apply relative z-10;
      .t1 {
        font-size: sizem(25);
        line-height: sizem(35);
        font-weight: 700;
        letter-spacing:0.115em;
        margin-bottom: sizem(27);
      }
      .line {
        width: sizem(317);
        margin-bottom: sizem(45);
      }
      .t2 {
        width: sizem(315);
      }
    }
    .swiper-box {
      width: sizem(316);
      height: sizem(404.75);
      .slide-item {
        @apply relative;
        width: sizem(316);
        height: auto;
        margin-right: sizem(20);
        .avatar {
          @apply w-full brightness-100 transition-all;
          @apply cursor-pointer;
          height: sizem(404);
          background-size: 101%;
          margin-bottom: sizem(15);
          &:hover {
            @apply brightness-100;
          }
        }
        .c1 {
          @apply absolute whitespace-nowrap select-none;
          right: sizem(8);
          top: sizem(15);
          writing-mode: vertical-lr;
          color: #ceaf73;
          font-size: sizem(15);
          font-weight: 700;
          letter-spacing: 1.5px;
          span {
            @apply relative;
            margin-top: sizem(20);

            &::after {
              @apply bg-[#ceaf73] absolute rotate-[139.76deg];
              content: "";
              width: sizem(17);
              height: 1px;
              bottom: 116%;
              left: 10%;
            }
          }
        }
        .c2 {
          @apply absolute whitespace-nowrap select-none;
          right: sizem(32);
          top: sizem(15);
          writing-mode: vertical-lr;
          color: #fff;
          font-size: sizem(20);
          font-weight: 400;
          letter-spacing: 7px;
        }
        .c3 {
          @apply relative select-none opacity-100 transition-all;
          font-size: sizem(13);
          font-weight: 350;
          line-height: 155.928%;
          letter-spacing: 0.78px;
          &::after {
            @apply hidden;
          }
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
const activeIdx = ref(0)

const onMove = (val, val2) => {
  activeIdx.value = val2
}

const imgs = [
  {
    img: new URL("../section/s7/1.webp", import.meta.url).href,
    c1: `上境設計 G-Design<span>許富居</span>`,
    c2: `豪宅欽定，自然詩人`,
    c3: `力求景觀與環境互相融合為「以綠入景，由景入心」的境界，以人與人互動模式為基礎，以空間詮釋生活的變化表現。`,
  },
  {
    img: new URL("../section/s7/2.webp", import.meta.url).href,
    c1: `天坊室內設計<span>張清平</span>`,
    c2: `台灣首位紅點設計獎得主`,
    c3: `堅持將本土特色融入設計中，實現古代智能現代化，西方設計中國化，中西合併國際化的目標，以當代設計，開創不一樣的心奢華。`,
  },
  {
    img: new URL("../section/s7/3.webp", import.meta.url).href,
    c1: `永豐建築師事務所<span>呂永豐</span>`,
    c2: `大師手筆，建築巨擘`,
    c3: `好的居宅，除了擁有建築華麗的外觀，更重要的是讓居住者開始懂得享受人生，讓建築以柔韌的力量歷經歲月，成為優雅的經典之作。`,
  },
]
</script>
