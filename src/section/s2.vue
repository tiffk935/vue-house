<template>
  <section class="s2 w-full relative text-white">
    <div class="title absolute text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">完美的顛覆 <br class="md:hidden">總和你所渴望</div>
      <div class="t2">INTERNATIONAL LOCATION</div>
    </div>
    <div class="info absolute">實景拍攝合成示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  height: size-m(667);
  background-image: url(@/section/s2/bg.webp);
  background-size: auto 100%;
  background-position: size-m(-360) 0;
  @media (min-width: 768px) {
    height: size(1308);
    background-position: size(-0) 0;
  }

  .title {
    top: size-m(65);
    left: size-m(46);
    font-family: 'Noto Serif TC', serif;
    @media (min-width: 768px) {
      top: size(191);
      left: size(513);
    }

    .t1 {
      font-size: size-m(30);
      font-weight: 700;
      line-height: normal;
      letter-spacing: size-m(9.9);
      margin-bottom: size-m(6);
      @media (min-width: 768px) {
        font-size: size(60);
        letter-spacing: size(19.8);
        margin-bottom: size(2);
      }
    }

    .t2 {
      font-size: size-m(12);
      font-style: normal;
      font-weight: 700;
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
    @media (min-width: 768px) {
      bottom: size(10);
      right: size(10);
      font-size: size(12);
    }
  }
}
</style>

<script setup>
</script>