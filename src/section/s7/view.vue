<template>
  <div class="viewbox" ref="viewbox">
    <img
      class="view1 select-none"
      ref="viewImg"
      src="@/section/s7/view.jpg"
      alt=""
      srcset=""
    />

    <!-- <div class="mask" v-bind:class="{ hide: swiped }">
        <img src="@/components/fullview/finger.svg" alt="" srcset="" />
      </div> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox {
  position: relative;
  width: 100%;
  height: 100%;
  // background-color: #0F2F58;

  .view1 {
    position: absolute;
    left: 0;
    top: 0;
    background-image: url("@/section/s7/view.jpg");
    background-size: cover;

    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img {
    min-width: 100%;
    max-width: unset;
    width: 100%;
    height: auto;
  }
  .mask {
    @apply hidden;
  }
}

@media screen and (max-width: 767px) {
  .viewbox {
    @apply relative;
    height: 100%;
    overflow: hidden;

    img {
      height: 100% !important;
      width: auto !important;
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

      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 102, 153, 0.9) 10%,
        rgba(0, 102, 153, 0) 100%
      );

      img {
        min-width: unset;
        width: size-m(290);
        height: size-m(55.2);
      }

      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>
<script setup>
import BScroll from "@better-scroll/core"
import { onMounted, ref } from "vue"

const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 1.9 //調整此值設定X軸位置偏移參數

onMounted(() => {
  viewImg.value.addEventListener("load", () => {
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

    scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500)
    setTimeout(() => {
      scroll.on("scroll", () => {
        swiped.value = true
      })
    }, 1000)
  })
})
</script>
