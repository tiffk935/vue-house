<template>
  <section class="s1 user-n w-full relative">
    <div class="rect absolute w-full left-0 bottom-0 bg-[#931F1C]"></div>

    <img class="logo absolute md:hidden" src="@/assets/nav-logo.svg" />
    <img class="logo2 absolute md:hidden" src="@/section/s1/logo2.svg" />

    <img class="img absolute md:hidden" src="@/section/s1/img-m.jpg" />
    <img class="img absolute hidden md:block" src="@/section/s1/img.jpg" />
    

    <img class="title absolute md:hidden" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="100" src="@/section/s1/title-m.svg" />
    <img class="title absolute hidden md:block" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="100" src="@/section/s1/title.svg" />
    
    <div class="scroll absolute md:hidden" @click="scrollTo('.s2')">
      <img class="w-full block" src="@/section/s1/scroll-m.svg" />
      <img class="arrow block absolute" src="@/section/s1/arrow-m.svg" />
    </div>
    <div class="scroll absolute hidden md:block" @click="scrollTo('.s2')">
      <img class="w-full block" src="@/section/s1/scroll.svg" />
      <img class="arrow block absolute" src="@/section/s1/arrow.svg" />
    </div>
    <img class="en absolute hidden md:block" src="@/section/s1/en.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes scrollattention {
  0% {
    transform: translateY(calc(var(--scrollY) * -1));
    opacity: 0
  }

  30% {
    opacity: 1;
    transform: translateY(0)
  }

  100% {
    transform: translateY(var(--scrollY));
    opacity: 0
  }
}

[data-aos=cuscus] {
  opacity: 0;
  transform: translateY(2vw);
  transition-property: opacity, transform;
  @media (min-width: 768px) {
    transform: translateY(0.8vw);
  }

  &.aos-animate {
    opacity: 1;
    transform: translateY(0);
  }
}

.s1 {
  width: 100%;
  height: size-m(667);
  @media (min-width: 768px) {
    height: size(1080);
  }

  .rect {
    height: size-m(198);
    @media (min-width: 768px) {
      height: size(219);
    }
  }

  .logo {
    top: size-m(26);
    left: size-m(40);
    width: size-m(146);
  }

  .logo2 {
    top: size-m(119);
    left: size-m(40);
    width: size-m(295);
  }

  .img {
    top: size-m(166);
    right: 0;
    width: size-m(335);
    height: size-m(432);
    object-fit: cover;
    object-position: 32% 50%;
    @media (min-width: 768px) {
      top: size(160);
      width: size(1735);
      height: auto;
    }
  }

  .title {
    top: size-m(210);
    left: size-m(256);
    width: size-m(71);
    filter: drop-shadow(2px 2px 5px #000);
    @media (min-width: 768px) {
      top: size(342 + 160);
      left: size(1182);
      width: size(582.3);
      filter: drop-shadow(2px 2px 5px #000);
    }
  }

  .scroll {
    top: size-m(510);
    left: size-m(56);
    width: size-m(60);
    cursor: pointer;
    @media (min-width: 768px) {
      top: size(910.35);
      left: size(60.35);
      width: size(60.46);
    }

    .arrow {
      top: size-m(42);
      left: size-m(23);
      width: size-m(15.75);
      animation: scrollattention 2.6s ease-in-out infinite;
      --scrollY: 1.5vw;
      @media (min-width: 768px) {
        top: size(24.65);
        left: size(16.42);
        width: size(26.25);
        --scrollY: 0.7vw;
      }
    }
  }

  .en {
    top: size(485);
    left: size(83);
    width: size(14);
  }
}
</style>

<script setup>
import { inject } from 'vue';
const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>
