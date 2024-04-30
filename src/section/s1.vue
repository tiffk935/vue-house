<template>
  <section class="s1 user-n w-full relative">
    <div class="bg">
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
    </div>
    <img class="logo absolute md:hidden" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" src="@/section/s1/logo-m.svg" />
    <img class="logo absolute hidden md:block" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" src="@/section/s1/logo.svg" />
    <img class="txt absolute md:hidden" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" src="@/section/s1/txt-m.svg" />
    <img class="txt absolute hidden md:block" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" src="@/section/s1/txt.svg" />
    <img class="logo2 absolute" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" src="@/section/s1/logo2.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes an1 {
  100% {transform: translateX(0);}
}

.s1 {
  overflow: hidden;
  height: size-m(667);
  @media (min-width: 768px) {
    height: size(1080);
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 300%;
    height: 100%;
    transform: translateX(-66.66%);
    animation: an1 10s linear infinite reverse;
    display: flex;
    @media (min-width: 768px) {
      animation: an1 30s linear infinite reverse;
    }

    img {
      width: 33.3333%;
      height: 100%;
      object-fit: cover;

      &:nth-child(2) {
        transform: scaleX(-1);
      }
    }
  }

  .logo {
    top: size-m(136.64);
    left: size-m(47);
    width: size-m(280);
    @media (min-width: 768px) {
      top: size(221);
      left: size(678.83);
      width: size(562.69);
    }
  }

  .txt {
    top: size-m(309.48);
    left: size-m(45);
    width: size-m(284);
    @media (min-width: 768px) {
      top: size(565.71);
      left: size(509.04);
      width: size(901.94);
    }
  }

  .logo2 {
    top: size-m(498.04);
    left: size-m(72.29);
    width: size-m(230.54);
    @media (min-width: 768px) {
      top: size(768.31);
      left: size(727.52);
      width: size(465.2);
    }
  }
}
</style>

<script setup>
// import { inject } from 'vue';
// const smoothScroll = inject('smoothScroll')
// const scrollTo = (el) => {
//   smoothScroll({
//     scrollTo: document.querySelector(el)
//   })
// }
</script>
