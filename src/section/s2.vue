<template>
  <section class="s2 user-n w-full relative">
    <div class="slider" ref="sliderRef" @pointerenter="onEnter" @pointerleave="onLeave">
      <div class="slides" ref="slidesRef">
        <div class="slide" ref="slideRef">
          <img src="@/section/s2/img.svg" draggable="false" @load="onImgLoad()" />
        </div>
        <div class="slide">
          <img src="@/section/s2/img.svg" draggable="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  height: size-m(520);
  @media screen and (min-width:768px) {
    height: size(520);
  }

  .slider {
    height: 100%;
  }

  .slides {
    display: inline-flex;
    position: relative;
    height: 100%;
    background: #666;
    img{background: url("./s2/img.jpg") center center; background-size: cover;}
  }

  img {
    display: block;
    height: 100%;
    max-width: none;
  }
}
</style>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const v = 40; // 速率（px / 秒）

const sliderRef = ref(null);
const slidesRef = ref(null);
const slideRef = ref(null);

let x = 0;           // 目前位置（px）
let w = 0;           // 一張圖的寬度，跑到 -w 就接回 0（兩張相同的圖無縫接）
let ready = false;
let hovering = false; // 滑鼠在上面 → 停
let dragging = false; // 正在拖 → 由手控制
let dragFromX = 0;
let setX = null;
let draggable = null;
let proxy = null;

const wrap = (val) => (w ? gsap.utils.wrap(-w, 0, val) : 0);
const render = () => setX && setX(wrap(x));

function measure() {
  const oldW = w;
  w = slideRef.value ? slideRef.value.offsetWidth : 0;
  // 尺寸變了，位置等比例換算，避免跳格
  if (oldW && w && oldW !== w) x = (x / oldW) * w;
  x = wrap(x);
  render();
}

// 每一幀固定速度往左跑；滑入或拖動中就不動
function tick(time, deltaTime) {
  if (!ready || hovering || dragging || !w) return;
  x = wrap(x - (v * deltaTime) / 1000);
  render();
}

// 只認滑鼠，避免手機點一下就被當成「滑入」而一直停住
function onEnter(e) {
  if (e.pointerType === "mouse") hovering = true;
}
function onLeave(e) {
  if (e.pointerType === "mouse") hovering = false;
}

function onImgLoad() {
  if (ready) return;
  ready = true;

  setX = gsap.quickSetter(slidesRef.value, "x", "px");
  measure();

  // 用一個看不見的 proxy 接拖曳距離，實際位置由上面的 x 控制，拖到哪放開就從哪繼續跑
  proxy = document.createElement("div");
  draggable = Draggable.create(proxy, {
    type: "x",
    trigger: sliderRef.value,
    onPress() {
      dragging = true;
      dragFromX = x;
    },
    onDrag() {
      x = wrap(dragFromX + (this.x - this.startX));
      render();
    },
    onRelease() {
      dragging = false;
    },
  })[0];

  gsap.ticker.add(tick);
  window.addEventListener("resize", measure);
}

onBeforeUnmount(() => {
  gsap.ticker.remove(tick);
  window.removeEventListener("resize", measure);
  if (draggable) draggable.kill();
});
</script>
