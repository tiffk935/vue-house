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

  .bg-wrapper {
    width: 290%;
    @media screen and (min-width:768px) {
      width: 100%;
    }

    .bg {
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      padding-top: 56.22568%;
      background: #ddd;

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
      }
    }
  }

  .img {
    top: size-m(82.53);
    left: size-m(34.5);
    width: size-m(306);
    @media screen and (min-width:768px) {
      top: size(223.34);
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
    left: size-m(52);
    width: size-m(271);
    opacity: 0;
    @media screen and (min-width:768px) {
      top: size(794.15);
      left: size(584.11);
      width: size(759.14);
    }
  }

  .t2 {
    top: size-m(350);
    left: size-m(68.5);
    width: size-m(237.99);
    @media screen and (min-width:768px) {
      top: size(952.62);
      left: size(157.28);
      width: size(1264.42);
    }
  }

  .order-btn {
    top: size-m(493);
    left: size-m(140);
    width: size-m(95);
    cursor: pointer;
    @media screen and (min-width:768px) {
      top: size(947.9);
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
