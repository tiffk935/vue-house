<template>
  <section class="s7 w-full relative text-center text-white">
    <img class="bg" src="@/section/s7/bg.webp" />
    <div class="mask"></div>
    <div class="title absolute w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">東區正核心 <br class="md:hidden">馳騁大台南</div>
      <div class="t2">INTERNATIONAL LOCATION</div>
    </div>
    <div class="info absolute">3D外觀合成示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  height: size-m(567);
  @media (min-width: 768px) {
    height: size(1308);
  }

  .bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(393);
    object-fit: cover;
    @media (min-width: 768px) {
      height: 100%;
    }
  }

  .mask {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: size-m(301);
    background: linear-gradient(180deg, #297BC6 61.99%, rgba(40, 118, 187, 0.00) 98.59%);
    @media (min-width: 768px) {
      height: size(503);
    }
  }

  .title {
    top: size-m(65);
    left: 0;
    font-family: "Noto Serif TC";
    font-weight: 700;
    @media (min-width: 768px) {
      top: size(191);
    }

    .t1 {
      font-size: size-m(30);
      line-height: normal;
      letter-spacing: size-m(9);
      text-indent: size-m(9);
      margin-bottom: size-m(6);
      @media (min-width: 768px) {
        font-size: size(60);
        letter-spacing: size(19.8);
        text-indent: size(19.8);
        margin-bottom: size(0);
      }
    }

    .t2 {
      font-size: size-m(12);
      line-height: normal;
      letter-spacing: size-m(4.8);
      @media (min-width: 768px) {
        font-size: size(20);
        letter-spacing: size(10.6);
      }
    }
  }

  .info {
    bottom: size-m(10);
    right: size-m(10);
    font-size: size-m(12);
    line-height: normal;
    @media (min-width: 768px) {
      bottom: size(10);
      right: size(10);
      font-size: size(12);
      text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.50);
    }
  }
}
</style>

<script setup>
</script>
