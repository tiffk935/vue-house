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
import { onMounted, ref, getCurrentInstance } from 'vue'

const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 1.9

// ✅ 取得全域方法（若有在 main.js 設定）
const { appContext } = getCurrentInstance()
const isMobile = appContext.config.globalProperties.$isMobile
  ? appContext.config.globalProperties.$isMobile()
  : window.innerWidth <= 768 // 備用判斷，防止未定義

onMounted(() => {
  viewImg.value.addEventListener('load', () => {
    if (isMobile) {
      const scroll = new BScroll(viewbox.value, {
        probeType: 2,
        scrollX: true,
        scrollY: true,
        disableTouch: false,
        disableMouse: false,
        bindToWrapper: true,
        eventPassthrough: 'vertical',
        bounce: false,
      })

      scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500)
      setTimeout(() => {
        scroll.on('scroll', () => {
          swiped.value = true
        })
      }, 1000)
    }
  })
})
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
        background: url("@/assets/home/area/map.jpg");
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
