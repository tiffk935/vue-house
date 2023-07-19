<template>
  <section class="s11 relative">
    <div class="t1 upup absolute">
      <div class="tt">專挑市中心好地段精鑄作品<br>都會中一座座高抬頭率的展宜建築<br>您也許曾在街巷中駐足過</div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt">展宜建築深度研究每一塊土地紋理，精挑最好的地段<br>把蓋房子當成是一種藝術創作，拒絕規格化和複製品<br>一棟棟有個性的展宜建築，在市中心地表陸續誕生</div>
    </div>
    <div class="viewbox relative" v-if="$isMobile()" ref="viewbox">
      <div class="inner">
        <img src="@/section/s11/timeline.png" ref="viewImg1" />
        <img src="@/section/s11/timeline-text.svg" ref="viewImg2" />
      </div>
    </div>
    <img class="img absolute hidden md:block" v-if="!$isMobile()" src="@/section/s11/img1.png" />
    <img class="img-text absolute hidden md:block" v-if="!$isMobile()" src="@/section/s11/img-text.svg" />
    <img class="swipe absolute"  v-if="$isMobile()" src="@/section/s11/swipe.svg" />
    <div class="logos absolute">
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
      <div class="logo upup11">
        <div class="tt"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size-m(518);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .t1 {
    height: size-m(84);
    width: size-m(298);
    left: size-m(40);
    top: size-m(9);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(19);
    line-height: size-m(27);
    text-align: center;
    letter-spacing: 0.03em;
    @media screen and (min-width:768px) {
      height: size(154);
      width: size(566);
      left: size(677);
      top: size(87);
      font-size: size(36);
      line-height: size(52);
    }
  }

  .t2 {
    height: size-m(57);
    width: size-m(283);
    left: size-m(47);
    top: size-m(108);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(12);
    line-height: size-m(19);
    text-align: center;
    color: #39684F;
    @media screen and (min-width:768px) {
      height: size(78);
      width: size(437);
      left: size(742);
      top: size(281);
      font-size: size(18);
      line-height: size(26);
    }
  }

  .viewbox {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: size-m(162);

    .inner {
      width: size-m(708);
      height: size-m(177);
      position: relative;
      overflow: hidden;
      //background: rgba(255, 255, 255, 0.4);
      mix-blend-mode: multiply;
    }

    img {
      width: 100%;
      height: 100%;
      max-width: none;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: contain;
    }
  }

  .swipe {
    width: size-m(96);
    left: size-m(140);
    top: size-m(349);
  }

  .img {
    width: size(1719);
    height: size(456);
    left: size(100);
    top: size(282);
    mix-blend-mode: multiply;
  }

  .img-text {
    width: size(1621.68);
    left: size(161);
    top: size(729);
  }

  .logos {
    width: size-m(299.72);
    height: size-m(98);
    left: size-m(38);
    top: size-m(390);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      width: size(1434);
      height: size(144);
      left: size(241);
      top: size(845);
      justify-content: flex-start;
    }
    
    .logo {
      width: 42.13%;
      height: 25%;
      @media screen and (min-width:768px) {
        width: 25%;
        height: 50%;
      }

      .tt {
        background-size: contain;
        background-position: left center;
      }

      &:nth-child(1) {
        @media screen and (min-width:768px) {
          width: calc(100% * 267.26 / 1434);
          margin-right: calc(100% * 65.74 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/01.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/01.svg);
          }
        }
      }
      &:nth-child(2) {
        @media screen and (min-width:768px) {
          width: calc(100% * 262.1 / 1434);
          margin-right: calc(100% * 133.9 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/02.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/02.svg);
          }
        }
      }
      &:nth-child(3) {
        @media screen and (min-width:768px) {
          width: calc(100% * 254.37 / 1434);
          margin-right: calc(100% * 86.63 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/03.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/03.svg);
          }
        }
      }
      &:nth-child(4) {
        @media screen and (min-width:768px) {
          width: calc(100% * 295.63 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/04.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/04.svg);
          }
        }
      }
      &:nth-child(5) {
        @media screen and (min-width:768px) {
          width: calc(100% * 281.85 / 1434);
          margin-right: calc(100% * 51.15 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/05.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/05.svg);
          }
        }
      }
      &:nth-child(6) {
        @media screen and (min-width:768px) {
          width: calc(100% * 343.98 / 1434);
          margin-right: calc(100% * 52.02 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/06.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/06.svg);
          }
        }
      }
      &:nth-child(7) {
        @media screen and (min-width:768px) {
          width: calc(100% * 282.1 / 1434);
          margin-right: calc(100% * 58.9 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/07.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/07.svg);
          }
        }
      }
      &:nth-child(8) {
        @media screen and (min-width:768px) {
          width: calc(100% * 364 / 1434);
        }
        .tt {
          background-image: url(@/section/s11/logos-m/08.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s11/logos/08.svg);
          }
        }
      }
    }

    // img {
    //   width: 100%;
    //   height: 100%;
    //   object-fit: contain;
    //   // height: size-m(17.5);
    // }
  }
}
</style>
<script setup>

import BScroll from '@better-scroll/core'
import { onMounted, ref, nextTick,computed,getCurrentInstance, } from 'vue';

const viewbox = ref()
const viewImg1 = ref()
const viewImg2 = ref()
const swiped = ref(false)
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
const offsetRatio = 1;
let img1loaded = false;
let img2loaded = false;


onMounted(() => {
  nextTick(() => {
    viewImg1.value.addEventListener('load', () => {
      img1loaded = true;
      setViewbox()
    });
    viewImg2.value.addEventListener('load', () => {
      img2loaded = true;
      setViewbox()
    });
  })
});

function setViewbox() {
  if(img1loaded && img2loaded) {
    let scroll = new BScroll(viewbox.value, {
      probeType: 1,
      scrollX: true,
      scrollY: true,
      disableTouch: false,
      disableMouse: false,
      bindToWrapper: true,
      eventPassthrough: "vertical",
      bounce: false,
    });

    scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);
    setTimeout(() => {
      scroll.on("scroll", () => {
        swiped.value = true
      });
    }, 1000);
  }
}
</script>