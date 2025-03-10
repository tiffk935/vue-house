<template>
  <article class="s5">
    <div class="swiper-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: true,
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
          :style="{ 'background-image': `url(${i.img}) !important` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="t">
      <div class="t1 text-[#78572E]" data-aos="fade-up" data-aos-delay="0">匯繁華精彩·禮日常身段</div>

      <img class="en hidden md:block" src="@/section/s5/en.svg" />
      <img class="en md:hidden" src="@/section/s5/en-m.svg" />
      
      <div class="tlist">
        <div
          class="tl"
          v-for="(t, i) in tlist"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 200"
        >
          <div class="tt1 text-[#78572E]" v-html="t.a"></div>
          <div class="tt2 text-[#86807B]" v-html="t.b"></div>
        </div>
      </div>
      <!-- <div class="arrows">
        <img
          class="prev"
          @click="splide.go('<')"
          src="@/section/s3/arrow.png"
          alt=""
          srcset=""
        />
        <img
          class="next"
          @click="splide.go('>')"
          src="@/section/s3/arrow.png"
          alt=""
          srcset=""
        />
      </div> -->
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 .swiper-box {
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

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @apply w-full relative;
  @apply flex items-center justify-between;
  background-image: url(@/section/s2/sec2-bg.webp);
  background-size: 100% auto;
  padding: size(106) size(145) size(91) 0;

  .swiper-box {
    width: size(1002);
    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: size(783);
      .caption {
        @apply absolute text-white;
        font-size: size(14);
        font-weight: 400;
        letter-spacing: size(0.84);
        right: size(20);
        bottom: size(20);
        z-index: 1;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: size(448);
        height: 100%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 44.99%, #000 100.75%);
      }
    }
  }
  .t {
    .t1 {
      font-size: size(60);
      font-weight: 700;
      line-height: size(97);
      letter-spacing: .05em;
      margin-bottom: size(19);
    }
    .en {
      width: size(685);
      margin-bottom: size(84);
    }
    .tlist {

      .tl {
        margin-bottom: size(58);

        &:last-child {
          margin-bottom: 0
        }

        .tt1 {
          @apply relative;
          font-size: size(30);
          line-height: size(36);
          font-weight: 700;
          letter-spacing: .02em;
          margin-bottom: size(14);
        }
        .tt2 {
          width: size(685);
          font-size: size(23);
          line-height: size(49);
          letter-spacing: .06em;
        }
      }
    }
    .arrows {
      @apply relative;
      @apply flex items-center justify-start pointer-events-none;
      margin-top: size(90);
      gap: size(90);
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
  .s5 {
    @apply w-full relative;
    @apply flex flex-col-reverse items-center justify-center;
    background-size: auto 100%;
    padding: sizem(78) sizem(30) 0 sizem(30);

    .swiper-box {
      width: calc(100% + sizem(60));
      .slide-item {
        height: sizem(293);
        .caption {
          @apply absolute text-white;
          font-size: sizem(12);
          font-weight: 400;
          letter-spacing: 1.5px;
          right: sizem(10);
          bottom: sizem(5);
        }
        &:after {
          width: sizem(178);
        }
      }
    }
    .t {
      @apply text-[#034150] text-center;
      .t1 {
        font-size: sizem(25);
        line-height: sizem(35);
      }
      .en {
        width: sizem(317);
        margin-bottom: sizem(47);
      }
      .tlist {
        margin-bottom: sizem(39);
        .tl {
          @apply text-left;
          .tt1 {
            @apply relative;
            font-size: sizem(17);
            line-height: sizem(20);
            margin-bottom: sizem(12);
          }
          .tt2 {
            width: 100%;
            font-size: sizem(13);
            line-height: sizem(22);
          }
        }
      }
      .arrows {
        @apply absolute;
        @apply flex items-center justify-between pointer-events-none;
        margin-top: size(90);
        gap: 0;
        left: 0;
        width: sizem(375);
        bottom: sizem(170);
        padding: 0 sizem(10);
        img {
          @apply cursor-pointer pointer-events-auto;
          width: sizem(35.5);
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
    img: new URL("../section/s5/1.webp", import.meta.url).href,
    caption: "國家歌劇院",
  },
  {
    img: new URL("../section/s5/2.webp", import.meta.url).href,
    caption: "台中市政府",
  },
  {
    img: new URL("../section/s5/3.webp", import.meta.url).href,
    caption: "誠品",
  },
  {
    img: new URL("../section/s5/4.webp", import.meta.url).href,
    caption: "秀泰生活",
  },
  {
    img: new URL("../section/s5/5.webp", import.meta.url).href,
    caption: "大遠百",
  },
  {
    img: new URL("../section/s5/6.webp", import.meta.url).href,
    caption: "新光三越",
  },
  {
    img: new URL("../section/s5/7.webp", import.meta.url).href,
    caption: "TIGER CITY",
  },
  {
    img: new URL("../section/s5/8.webp", import.meta.url).href,
    caption: "星巴克",
  },
  {
    img: new URL("../section/s5/9.webp", import.meta.url).href,
    caption: "IKEA",
  },
  {
    img: new URL("../section/s5/10.webp", import.meta.url).href,
    caption: "COSTCO",
  },
  {
    img: new URL("../section/s5/11.webp", import.meta.url).href,
    caption: "台中第二市場",
  },
]

const tlist = [
  {
    a: "七期市政都心 被知識優雅環繞之地",
    b: "台中市政府、國家歌劇院、台中市議會、台中警察總局..等，匯聚文教領袖、名流菁英，以最藝文的區段，禮遇您的日常身段",
  },
  {
    a: "七期百貨核心，國際百貨零時差串接",
    b: "家樂福、好市多、IKEA，從百貨購物到日常生活購物，隨時隨地擁有，以富人的角度為您準備好您所需要的頂級生活感",
  },
  {
    a: "公益路商圈 奢華名店料理環伺",
    b: "輕井澤、屋馬、森森燒肉、不葷主義…等，即刻享受台中一級戰區的美食好料，以最好的區段，款待您的每一個夜晚日常",
  },
]
</script>
