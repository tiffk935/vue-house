<template>
  <section class="s7 relative text-white">
    <div class="viewbox" ref="viewbox">
      <img ref="viewImg" src="@/section/s7/view.jpg" alt="" srcset="">
      <div class="mask" v-bind:class="{ hide: swiped }" v-if="$isMobile()">
        <img src="@/section/s7/finger.png" alt="" srcset="">
      </div>
      <div class="content absolute">
        <div class="fade w-full md:flex">
          <div class="t1">轉身明日聚落，<br class="md:hidden" />大北方計劃中央點。</div>
          <div class="txt">台北市的開發大未來，焦點將轉向為大北區，生態社子島位居核心位置，吸納北士科園區、西區門戶雙子星與銀河灣計劃，未來前景可期。</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(817);
  font-family: 'Noto Serif TC';
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(953);
    background: linear-gradient(247deg, #004B47 -32.2%, #11A196 102.54%);
  }

  .viewbox {
    position: relative;
    width: 100%;
    height: 100%;
    background: #eee;
    img {
      height: 100%;
      max-width: unset;
    }
  }
  @media screen and (max-width: 767px) {
    .viewbox {
      height: 100%;
      overflow: hidden;
      img {
        height: 100%;
      }
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        // z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        opacity: 1;
        transition: all 1s;
        background: rgba(0, 114, 130, 0.5);
        img {
          height: 47px;
        }
        &.hide {
          opacity: 0;
        }
      }
    }
  }

  .content {
    width: size-m(290);
    top: size-m(61.79);
    left: size-m(42.5);
    pointer-events: none;
    @media screen and (min-width:768px) {
      width: size(1171.06);
      top: size(116);
      left: size(374);
      display: flex;
    }

    .fade {
      @media screen and (min-width:768px) {
        justify-content: space-between;
        align-items: center;
      }
    }

    .t1 {
      font-size: size-m(19);
      line-height: size-m(25);
      font-weight: 700;
      margin-bottom: size-m(9.5);
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(40);
        margin-bottom: size(0);
      }
    }

    .txt {
      font-size: size-m(12);
      line-height: size-m(20);
      font-weight: 500;
      margin-bottom: size-m(24.5);
      @media screen and (min-width:768px) {
        width: size(589.06);
        font-size: size(16);
        line-height: size(27);
        margin-bottom: size(0);
      }
    }
  }
}

</style>

<script setup>
import BScroll from '@better-scroll/core'
import { onMounted, ref } from 'vue';
const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 1.705; //調整此值設定X軸位置偏移參數
onMounted(() => {
  viewImg.value.addEventListener('load', () => {
    let scroll = new BScroll(viewbox.value, {
      probeType: 2,
      scrollX: true,
      scrollY: true,
      disableTouch: false,
      disableMouse: false,
      bindToWrapper: true,
      eventPassthrough: "vertical",
      bounce: false,
    })
    // console.log('aaa', scroll.maxScrollX, scroll.maxScrollX / offsetRatio)
    scroll.scrollTo(scroll.maxScrollX / offsetRatio, 0);
    setTimeout(() => {
      scroll.on("scroll", () => {
        swiped.value = true
      });
    }, 1000);
  })
})
</script>