<template>
  <section class="s7 relative text-white">
    <!--   <div class="viewbox" ref="viewbox" v-if="$isMobile()"> -->
    <div class="viewbox" ref="viewbox">
      <img ref="viewImg" src="@/section/s7/view.jpg" alt="" srcset="">
      <div class="mask" v-bind:class="{ hide: swiped }">
        左右滑動看全景
        <img src="@/section/s7/finger.png" alt="" srcset="">
      </div>
      <div class="content absolute">
        <div class="fade w-full md:flex">
          <div class="t1">轉身明日聚落，<br class="md:hidden" />大北方計劃中央點。</div>
          <div class="txt">台北市的開發大未來，焦點將轉向為大北區，生態社子島位居核心位置，吸納北士科園區、西區門戶雙子星與銀河灣計劃，未來前景可期。</div>
        </div>
      </div>
    </div>
    <!-- 
    <div class="viewbox" v-else>
      <img src="@/section/s7/view.jpg" alt="" srcset="">
      <div class="content absolute">
        <div class="fade w-full md:flex">
          <div class="t1">轉身明日聚落，<br class="md:hidden" />大北方計劃中央點。</div>
          <div class="txt">台北市的開發大未來，焦點將轉向為大北區，生態社子島位居核心位置，吸納北士科園區、西區門戶雙子星與銀河灣計劃，未來前景可期。</div>
        </div>
      </div>
    </div> -->
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
    .mask {
      display: none;
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
    flex-direction:column;
        align-items: center;
        pointer-events: none;
        opacity: 1;
        transition: all 1s;
        background: rgba(0, 114, 130, 0.5);
        
        img {
          height: 11vw;
          position: relative;
          z-index: 2;
          margin: 3vw 0 0 15.5vw;
          transform: translate(-13vw,-5%)rotate(-28deg);
    animation: img 2s linear infinite alternate;
        }
@keyframes img {
  to {
    transform:translateX(0);
  }
}
        &::before{
          content: "";
          display: block;
          position: absolute;
          background: #FFF9;
          top: 49.5%;
          width: 76%;
          height: 1px;
        }
        &::after{
          content: "";
          display: block;
          position: absolute;
          background: #FFF;
          top: calc(49.6% - 1.9vw);
          margin: 0 0 0 16vw;
          width: 3.8vw;
          height: 3.8vw;
          border-radius: 50%;
          transform:translateX(-15.5vw);
          animation: img 2s linear infinite alternate;
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
    text-align: justify;
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
      line-height:1.34;
      font-weight: 700;
      margin-bottom: size-m(9.5);
    letter-spacing: .03em;
      @media screen and (min-width:768px) {
        font-size: size(30);
        margin-bottom: size(0);
      }
    }

    .txt {
      font-size: size-m(12);
      line-height:1.7;
      font-weight: 300;
    letter-spacing: .1em;
      margin-bottom: size-m(24.5);
      @media screen and (min-width:768px) {
        width: size(589.06);
        font-size: size(16);
      font-weight: 200;
        margin-bottom: size(0);
      }
    }
  }
}

</style>

<script setup>
import BScroll from '@better-scroll/core'
import { getCurrentInstance, onMounted, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 1.705; //調整此值設定X軸位置偏移參數
onMounted(() => {
  if(globals.$isMobile()){
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
      scroll.scrollTo(scroll.maxScrollX / offsetRatio, 0);
      setTimeout(() => {
        scroll.on("scroll", () => {
          swiped.value = true
        });
      }, 1000);
    })
  }
})
</script>

<script>
// export default {
//   mounted() {
//     // Use in js
//     console.log(this.$isMobile());
//   }
// };
</script>