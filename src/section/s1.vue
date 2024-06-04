<template>
  <section class="s1 text-white bg-[#00332a] relative">
    <div class="bg-wrapper relative">
      <div class="bg relative">
        <video autoplay muted loop playsinline src="https://h35.banner.tw/dali-heyun/bg.mp4"></video>
      </div>
    </div>
    <div class="img absolute">
      <img class="w-full" src="@/section/s1/img.svg" />
    </div>
    <div class="img-mask absolute"></div>
    <img class="t1 absolute" src="@/section/s1/t1.svg" />

    <div class="txt md:hidden">
      <img class="t2 absolute" src="@/section/s1/t2-m.svg" />
      <img class="order-btn absolute" src="@/section/s1/btn-m.svg" @click="scrollTo('.order')" />
    </div>

    <div class="txt hidden md:block">
      <img class="t2 absolute" src="@/section/s1/t2.svg" />
      <img class="order-btn absolute" src="@/section/s1/btn.svg" @click="scrollTo('.order')" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes mask {
  to {
    mask-position: 0 100%;
  }
}

@keyframes txtfade {
  to {
    opacity: 1;
  }
}

.s1 {
  width: 100%;
      min-height: size-m(604);
      max-height: size-m(750);
      height: calc(100vh - 16.8vw);
    @media screen and (min-width:768px) {
      min-height: size(900);
      max-height: size(1080);
      height: 100vh;
      overflow: hidden;
    }

  .bg-wrapper {
    width: calc(169vh - 10vw);
    min-width: size-m(1100);
    max-width: size-m(1340);
    @media screen and (min-width:768px) {
    min-width: 0;
    max-width:100%;
      width: 100%;
      height: 100%;
    }

    .bg {
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      padding-top: 56.22568%;
      background: #ddd;
    @media screen and (min-width:768px) {
      height: 100%;
      padding: 0;
    //  top: calc(50% + #{size(0 - 1080 * .5)});
    }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    @media screen and (min-width:768px) {
      top: auto;
      height: auto;
        bottom:calc(50% + #{size(0 - 1080 * .5)});
      }
      }
    }
  }

  .img {
    top: size-m(82.53);
    top: calc(40% + #{size-m(83 - 604 * .4)});
    left: size-m(34.5);
    width: size-m(306);
    @media screen and (min-width:768px) {
      top: size(223.34);
      top: calc(50% + #{size(223.34 - 1080 * .5)});
      left: size(521);
      width: size(874.5);
    }
    
    img {
      mask-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%);
      mask-size: 100% 130%;
      mask-repeat: no-repeat;
      mask-position: 0 -325%;
    }
  }

  &.animating {
    .img img {
      animation: mask 3s linear forwards;
      animation-delay: 1s;
    }

    .t1 {
      animation: txtfade 1s linear forwards;
      animation-delay: 2s;
    }

    .txt {
      animation: txtfade 1.5s linear forwards;
      animation-delay: 2.5s;
    }
  }

  .t1 {
    top: size-m(280.99);
    top: calc(40% + #{size-m(281 - 604 * .4)});
    left: size-m(52);
    width: size-m(271);
    opacity: 0;
    @media screen and (min-width:768px) {
      top: size(794.15);
      top: calc(55% + #{size(794.15 - 1080 * .55)});
      left: size(584.11);
      width: size(759.14);
    }
  }

  .t2 {
    top: size-m(350);
    top: calc(50% + #{size-m(350 - 604 * .5)});
    left: size-m(68.5);
    width: size-m(237.99);
    @media screen and (min-width:768px) {
      top: size(952.62);
      top: calc(75% + #{size(948 - 1080 * .75)});
      left: size(157.28);
      width: size(1264.42);
    }
  }

  .order-btn {
   // top: size-m(493);
    bottom: size-m(22);
    left: size-m(140);
    width: size-m(95);
    cursor: pointer;
    @media screen and (min-width:768px) {
      top: size(947.9);
      top: calc(75% + #{size(948 - 1080 * .75)});
      left: size(1546.52);
      width: size(230);
    }
  }

  .txt {
    opacity: 0;
  }
}
</style>

<script setup>
import { inject, onMounted, nextTick } from 'vue';
import { gsap } from "gsap";

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

onMounted(() => {
  nextTick(() => {
    console.log( document.querySelector('.s1 .img') );
    const tl = gsap.timeline({repeat: 0, defaults: {ease: "none"}});
  });
});
</script>
