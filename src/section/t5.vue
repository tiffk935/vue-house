<template>
  <article class="st5 relative">
    <div class="bg absolute">
      <div></div>
      <div></div>
    </div>
    <div class="content relative">
      <div class="inner">
        <div>
          <img class="en block" src="@/section/t5/en-m.svg" data-aos="fade-up" data-aos-delay="0" />
          <img class="title block " src="@/section/t5/title-m.svg" data-aos="fade-up" data-aos-delay="0" />
          <div class="t1 text-[#635B54]" data-aos="fade-up" data-aos-delay="0">
            豪氣挑高、石材鋪層，以國際視野禮遇您的歸返<br>
            從迎賓大廳、律動健身、烹飪教室...<br>
            以現代而雋永的設計，在匠人手筆之中完美傳遞<br>
            日常的不凡，以及在家擁抱國際度假的悠活感。
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
                <div class="caption">{{item.caption}}</div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.st5 {
  padding: sizem(65) sizem(30) 0 sizem(30);
  background-image: url(@/section/s2/sec2-bg.webp);
  background-size: auto 100%;
  @media screen and (min-width: 767px) {
    padding: size(256) 0 size(139) 0;
    background-size: 100% auto;
  }

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div {
      &:nth-child(1) {
        position: absolute;
        top: sizem(56);
        left: 0;
        width: 100%;
        height: calc(100% - sizem(56));
        mix-blend-mode: multiply;
        background: linear-gradient(0deg, #D9C8AE 0%, rgba(217, 200, 174, 0.99) 37%, rgba(217, 200, 175, 0.96) 51%, rgba(218, 201, 177, 0.90) 61%, rgba(219, 203, 179, 0.82) 69%, rgba(220, 205, 182, 0.72) 76%, rgba(222, 207, 186, 0.59) 83%, rgba(224, 210, 191, 0.44) 88%, rgba(226, 213, 197, 0.27) 94%, rgba(229, 216, 203, 0.07) 98%, rgba(230, 218, 206, 0.00) 100%);
        @media screen and (min-width: 767px) {
          top: size(152);
          height: size(655.61);
          background: linear-gradient(90deg, #D9C8AE 0%, rgba(217, 200, 174, 0.99) 37%, rgba(217, 200, 175, 0.96) 51%, rgba(218, 201, 177, 0.90) 61%, rgba(219, 203, 179, 0.82) 69%, rgba(220, 205, 182, 0.72) 76%, rgba(222, 207, 186, 0.59) 83%, rgba(224, 210, 191, 0.44) 88%, rgba(226, 213, 197, 0.27) 94%, rgba(229, 216, 203, 0.07) 98%, rgba(230, 218, 206, 0.00) 100%);
        }
      }

      &:nth-child(2) {
        position: absolute;
        top: 0;
        left: sizem(30);
        width: calc(100% - sizem(60));
        height: 100%;
        mix-blend-mode: multiply;
        background: linear-gradient(0deg, #D9C8AE 0%, rgba(217, 200, 174, 0.99) 37%, rgba(217, 200, 175, 0.96) 51%, rgba(218, 201, 177, 0.90) 61%, rgba(219, 203, 179, 0.82) 69%, rgba(220, 205, 182, 0.72) 76%, rgba(222, 207, 186, 0.59) 83%, rgba(224, 210, 191, 0.44) 88%, rgba(226, 213, 197, 0.27) 94%, rgba(229, 216, 203, 0.07) 98%, rgba(230, 218, 206, 0.00) 100%);
        @media screen and (min-width: 767px) {
          top: size(256.44);
          left: auto;
          right: 0;
          width: size(1578.46);
          height: size(655.28);
          background: linear-gradient(90deg, #E4DACF 0%, rgba(228, 218, 206, 0.99) 36%, rgba(228, 218, 206, 0.96) 50%, rgba(228, 218, 206, 0.91) 60%, rgba(228, 218, 206, 0.83) 68%, rgba(228, 218, 206, 0.73) 75%, rgba(228, 218, 206, 0.61) 82%, rgba(229, 218, 206, 0.47) 87%, rgba(229, 218, 206, 0.30) 93%, rgba(229, 218, 206, 0.12) 97%, rgba(230, 218, 206, 0.00) 100%);
        }
      }
    }
  }

  .en {
    width: sizem(129);
    margin-bottom: sizem(3);
    margin-left: sizem(42);
    @media screen and (min-width: 767px) {
      width: size(244.8);
      margin-top: size(59);
      margin-bottom: size(25);
      margin-left: 0;
    }
  }

  .title {
    width: sizem(237.45);
    margin: 0 auto;
    margin-bottom: sizem(28);
    @media screen and (min-width: 767px) {
      width: size(500);
      margin: 0 0 size(64) 0;
    }
  }

  .t1 {
    font-size: sizem(13);
    line-height: sizem(22);
    letter-spacing: .05em;
    margin-bottom: sizem(41);
    @media screen and (min-width: 767px) {
      font-size: size(23);
      line-height: size(48);
      margin-bottom: 0;
    }
  }

  .inner {
    @media screen and (min-width: 767px) {
      padding: 0 size(182) 0 0;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  }

  .slider {
    width: calc(100% + sizem(60));
    margin: 0 sizem(-30);
    position: relative;
    @media screen and (min-width: 767px) {
      width: size(1104);
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
        @media screen and (min-width: 767px) {
          width: size(448);
        }
      }

      .caption {
        position: absolute;
        bottom: sizem(7);
        right: sizem(7);
        color: #FFF;
        font-size: sizem(12);
        letter-spacing: .06em;
        z-index: 1;
        @media screen and (min-width: 767px) {
          bottom: size(14);
          right: size(20);
          font-size: size(20);
        }
      }
    }

    img {
      display: block;
      height: sizem(222);
      @media screen and (min-width: 767px) {
        height: size(656);
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
    img: new URL("../section/t5/1.webp", import.meta.url).href,
    caption: 'Lobby務業櫃檯  3D模擬圖'
  },
  {
    img: new URL("../section/t5/2.webp", import.meta.url).href,
    caption: 'LOBBY迎賓大廳 3D模擬圖'
  },
  {
    img: new URL("../section/t5/3.webp", import.meta.url).href,
    caption: '前廣場景觀 3D模擬圖'
  },
  {
    img: new URL("../section/t5/4.webp", import.meta.url).href,
    caption: '健身房 3D模擬圖'
  },
  {
    img: new URL("../section/t5/5.webp", import.meta.url).href,
    caption: '圖書閱覽區 3D模擬圖'
  },
]
</script>