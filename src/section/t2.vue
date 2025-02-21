<template>
  <article class="st2 relative">
    <div class="t1 text-[#78572E] md:hidden" data-aos="fade-up" data-aos-delay="0">豐生活深耕社區<br>營造生活美學</div>
    <div class="inner">
      <div>
        <img class="en hidden md:block" src="@/section/t2/en.svg" />
        <div class="t1 text-[#78572E] hidden md:block" data-aos="fade-up" data-aos-delay="0">豐生活深耕社區<br>營造生活美學</div>
        <img class="life w-full block md:hidden" src="@/section/t2/life-m.svg" />
        <img class="line hidden md:block" src="@/section/t2/line.svg" />
        <div class="t2 text-[#86807B]" data-aos="fade-up" data-aos-delay="0">
          豐生活團隊以「永續經營」為目標<br class="hidden md:block">
          舉辦各式社區活動、親子互動、藝文手作回饋已購客<br class="hidden md:block">
          為住戶帶來不同的生活體驗，提升情感的連結<br class="hidden md:block">
          致力打造和諧社區，讓我們相遇在豐邑，美好過生活！
        </div>
      </div>
      
      <div class="slider">
        <Splide
          ref="splide"
          class="slide"
          :options="{
            arrows: true,
            autoplay: true,
            pagination: false,
            interval: 4000,
            gap: 10,
            type: 'loop',
          }"
        >
          <SplideSlide
            class="slide-item"
            v-for="(item, idx) in imgs"
            :key="idx"
          >
            <div class="slider-item">
              <img :src="item.img" />
            </div>
          </SplideSlide>
        </Splide>
      </div>

    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.st2 {
  padding: sizem(78) 0 0 0;
  background-image: url(@/section/s2/sec2-bg.jpg);
  background-size: auto 100%;
  @media screen and (min-width: 767px) {
    padding: size(60) calc(size(145) - 16px) 0 0;
    background-size: 100% auto;
  }

  .en {
    @media screen and (min-width: 767px) {
      width: size(161);
      margin: size(58) 0 size(63) auto;
    }
  }

  .t1 {
    text-align: center;
    font-size: sizem(25);
    font-weight: 700;
    line-height: sizem(35);
    letter-spacing: .06em;
    margin-bottom: sizem(20);
    white-space: nowrap;
    @media screen and (min-width: 767px) {
      text-align: right;
      font-size: size(60);
      line-height: size(97);
      margin-bottom: size(70);
    }
  }

  .inner {
    padding: 0 sizem(30);
    @media screen and (min-width: 767px) {
      padding: 0;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  }

  .life {
    margin-bottom: sizem(35);
    @media screen and (min-width: 767px) {
      margin-bottom: size(63);
    }
  }

  .line {
    @media screen and (min-width: 767px) {
      width: size(738);
      margin: 0 0 size(71) auto;
    }
  }

  .t2 {
    font-size: sizem(13);
    line-height: sizem(22);
    letter-spacing: .06em;
    margin-bottom: sizem(36);
    @media screen and (min-width: 767px) {
      font-size: size(23);
      line-height: size(49);
      margin-bottom: 0;
      text-align: right;
    }
  }

  .slider {
    width: calc(100% + sizem(60));
    margin: 0 sizem(-30);
    position: relative;
    @media screen and (min-width: 767px) {
      width: size(1002);
      margin: 0;
    }

    .slider-item {
      position: relative;

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

    img {
      display: block;
      height: sizem(344);
      @media screen and (min-width: 767px) {
        height: size(918);
      }
    }

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
}
</style>

<script setup>
const imgs = [
  {
    img: new URL("../section/t2/1.jpg", import.meta.url).href,
  },
  {
    img: new URL("../section/t2/2.jpg", import.meta.url).href,
  },
  {
    img: new URL("../section/t2/3.jpg", import.meta.url).href,
  },
  {
    img: new URL("../section/t2/4.jpg", import.meta.url).href,
  },
  {
    img: new URL("../section/t2/5.jpg", import.meta.url).href,
  },
]
</script>