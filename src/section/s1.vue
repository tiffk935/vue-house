<template>
  <section class="s1 user-n w-full relative">
    <!-- 
    <img src="./s1/mo.jpg" class="t0">
     <img src="./s1/pc1.jpg" class="t0">  -->
    <img src="./s1/fo.webp" class="fo"
  :class="{ alt: currentFo === 1 }"
  >
<transition name="fade" mode="out-in" class="txt hidden md:block">
  <div :key="current" class="txt-item">
    <template v-if="current === 0">
      <img class="txt1" src="@/section/s1/txt1.svg" />
      <img class="en" src="@/section/s1/en.svg" />
    </template>

    <template v-else >
      <img class="txt2" src="@/section/s1/txt2.svg" />
      <img class="en2" src="@/section/s1/en.svg" />
    </template>
  </div>
</transition>
    <div class="txt md:hidden" data-aos="fade-up">
      <div>
        <img class="txt1" src="@/section/s1/txtm.svg" />
      </div>
    </div>


    
    <!--  <div class="bg"></div>
      <img class="logo block" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-delay="0" alt="日進學 快樂王國3" />
      <img class="txt block" src="@/section/s1/txt.svg" data-aos="fade-up" data-aos-delay="200" alt="震撼讓利 全新完工 買3房 含裝潢+全室冷氣+車位" />
    <div class="relative">  -->
    <!-- 
      <div class="name" data-aos="fade-up" data-aos-delay="200">洲子洋全能住宅王</div>
      <div class="sub-title" data-aos="fade-up" data-aos-delay="400">一站蘆洲，校園首排</div>
     
    </div> -->
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: 1;
  opacity: .7;
}
/*
  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.s1 {
  height: calc(100vh - 63px);
    min-height: size-m(604);
    max-height: size-m(750);
  //height: size-m(667);
  padding: 0;    overflow: hidden;
 // padding-top: size-m(67);
  text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  background: linear-gradient(0deg, #B90000 13.4%, #571A1E 92.56%);

  @media screen and (min-width:768px) {
    height: 100vh;
    max-height: size(1080);
    min-height: size(900);
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-top: size(110);
  }

  .fo {
    position: absolute;
    height: auto;
    width: size-m(495);
    max-width: initial;
    top: size-m(0);
    top: calc(32% + #{size-m(-28-667 * 0.32)});
    left: size-m(-60);
    right: 0;
    margin: auto;
    pointer-events: none;
    z-index: 3;
    // opacity: .6;
    @media screen and (min-width:768px) {
    width: size(1380);
    //top: size(-143);
    top: calc(50% + #{size(-143-1080 * 0.5)});
    //transform: scale(0.8333) translateY(size(13));
    transform: scale(1);
    transition:transform 1.5s ease;
    transform-origin: center top;
    left: 0;
    right: 0;
    &.alt {
    transform: scale(0.8333) translateY(size(13));
  }  /*  */
    /* 
    width: size(1380);
    top: size(-143);
    
    */
  }
  }

  .txt {
    position: relative;
    z-index: 4;
    text-align: center;
   /* */position: absolute;
   // top: size-m(72);
    top: calc(80% + #{size-m(110-667 * 0.80)});
    left: 0;right: 0;
      margin: 0 auto 0;
    @media screen and (min-width:768px) {

    position: relative;
    top: 0;
    left: 0;right: 0;
    }
    .txt1 {
      width: size-m(180);
      margin: size-m(0) auto 0;
    @media screen and (min-width:768px) {

      width: size(964);
      margin: size(80) auto size(43);

    }
    }

    .en {
      width: size(410);
      margin: 0 auto;
    }

    .txt2 {
      width: size(890);
      margin: size(100) auto size(43);
    }

    .en2 {
      width: size(366);
      margin: 0 auto;
    }

  }


}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const current = ref(0)
const currentFo = ref(0) // ✨給 fo 用

let timer = null

onMounted(() => {
  if (window.innerWidth >= 768) {
    timer = setInterval(() => {
      current.value = (current.value + 1) % 2

      // 👉 延遲切換 fo（跟 fade 對齊）
      setTimeout(() => {
        currentFo.value = current.value
      }, 100) // 這裡看你的 fade 時間（0.6s → 建議 300~400）
    }, 4500)
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>
