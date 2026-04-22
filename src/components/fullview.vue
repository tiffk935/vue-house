<template>
  <div class="viewbox" ref="viewbox">
    <img ref="viewImg" src="@/assets/home/area/map.svg" alt="">
    <div class="mask" v-bind:class="{ hide: swiped }" v-if="isMobile">
      <img src="@/components/fullview/finger.svg" alt="">
    </div>
  </div>
</template>

<script setup>
import BScroll from '@better-scroll/core'
import { onMounted, ref, getCurrentInstance, onBeforeUnmount } from 'vue'

const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 1.9
let bs = null // 儲存實例以便銷毀

const { appContext } = getCurrentInstance()
const isMobile = appContext.config.globalProperties.$isMobile
  ? appContext.config.globalProperties.$isMobile()
  : window.innerWidth <= 768

onMounted(() => {
  if (!isMobile) return;

  const initScroll = () => {
    // ✅ 策略 1：使用 rAF 確保在 DOM 穩定後才計算，減少 Forced Reflow
    requestAnimationFrame(() => {
      if (!viewbox.value) return;
      
      bs = new BScroll(viewbox.value, {
        probeType: 2,
        scrollX: true,
        scrollY: true,
        disableTouch: false,
        disableMouse: false,
        bindToWrapper: true,
        eventPassthrough: 'vertical',
        bounce: false,
        // ✅ 增加效能優化參數
        HWCompositing: true, 
        useTransition: true 
      });

      // ✅ 策略 2：延遲滾動動作，不要在初始化後立刻強行重排
      setTimeout(() => {
        if (bs) {
          bs.scrollTo(bs.maxScrollX / offsetRatio, 500);
          
          // 滾動監聽
          bs.on('scroll', () => {
            if (!swiped.value) swiped.value = true;
          });
        }
      }, 300);
    });
  };

  // 判斷圖片是否已加載完成
  if (viewImg.value.complete) {
    initScroll();
  } else {
    viewImg.value.addEventListener('load', initScroll, { once: true });
  }
});

// ✅ 策略 3：組件銷毀時回收記憶體，防止記憶體洩漏
onBeforeUnmount(() => {
  if (bs) {
    bs.destroy();
  }
});
</script>


<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox {
    position: relative;
    width: 100%;
    height: 100%;
    background: #00B1FF;

    > img {
        height:auto;
        width: 100%;
        max-width: 100%;vertical-align: middle;
        background: url("@/assets/home/area/map.webp");
        background-size: cover;
    }

}

@media screen and (max-width: 767px) {
    .viewbox {
        height: 100%;
        overflow: hidden;
        padding-top: 1em;
        img {
            height: 100%;
            vertical-align: middle;
        }
    > img {
        height: 100%;
        width: auto;
        max-width: unset;
    }


        .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            opacity: 1;
            transition: all 1s;
            background-color: rgba($color: #008DD5, $alpha: 0.5);

            img {
                height: 47px;
            }

            &.hide {
                opacity: 0;
            }
        }
    }
}
</style>
