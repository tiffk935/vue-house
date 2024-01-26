<template>
  <section class="s9 w-full relative">
    <img class="cloud absolute" src="@/section/s9/cloud.png" />
    <img class="moon absolute" src="@/section/s9/moon.png" />
    <img class="img1 absolute" src="@/section/s9/img1.png" />
    <img class="img2 absolute" src="@/section/s9/img2.png" />
    <img class="butterfly1 absolute" src="@/section/s9/butterfly1.svg" />
    <img class="butterfly2 absolute" src="@/section/s9/butterfly2.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  height: size-m(667);
  background: linear-gradient(180deg, #002672 0%, #00489B 30.73%, #0082D0 59.37%, #00B5FF 74.48%, #8FDEFF 100%);
  @media (min-width: 768px) {
    height: size(1080);
  }

  img {
    max-width: unset;
  }

  .cloud {
    bottom: 0;
    left: size-m(-129);
    width: size-m(884);
    @media (min-width: 768px) {
      bottom: size(-130);
      left: size(0);
      width: size(1920);
    }
  }

  .moon {
    top: size-m(52.25);
    left: size-m(-194.38);
    width: size-m(764.38);
    @media (min-width: 768px) {
      top: size(-10);
      left: size(-139);
      width: size(2197.33);
    }
  }

  .img1 {
    top: size-m(157);
    left: size-m(33);
    width: size-m(309);
    transform: translateY(-10%);
    animation: an 8s ease-in-out alternate infinite;
    @media (min-width: 768px) {
      top: size(114);
      left: size(605);
      width: size(781);
    }
  }

  .img2 {
    bottom: size-m(-18);
    left: size-m(-41);
    width: size-m(268);
    @media (min-width: 768px) {
      bottom: size(0);
      left: size(0);
      width: size(660);
    }
  }

  .butterfly1 {
    top: size-m(202);
    left: size-m(285.37);
    width: size-m(43.63);
    transform: translateY(60%);
    animation: an 4s ease-in-out alternate infinite;
    @media (min-width: 768px) {
      top: size(352);
      left: size(1268);
      width: size(63.56);
    }
  }

  .butterfly2 {
    top: size-m(493);
    left: size-m(40);
    width: size-m(53.34);
    transform: translateY(-40%);
    animation: an 3s ease-in-out alternate infinite;
    @media (min-width: 768px) {
      top: size(708);
      left: size(373);
      width: size(89);
    }
  }
}
</style>

<script setup>
</script>