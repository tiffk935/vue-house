<template>
  <section class="s11 text-[#333333] bg-[#EAEAEA] relative">
    <img class="img absolute" src="@/section/s11/img.jpg" />
    <div class="rect absolute hidden md:block"></div>
    <div class="text absolute" data-aos="fade-down" data-aos-delay="0">
      A Troupe of little vagrants of the world, leave your<br>
      footprints in my words.
    </div>
    <div class="txt absolute">外景3D合成示意圖</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size-m(447.89);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1010);
  }

  .img {
    width: size-m(593.59);
    left: size-m(-109.29);
    top: size-m(-107.71);
    max-width: none;
    @media screen and (min-width:768px) {
      width: size(1734);
      left: size(186);
      top: size(-603);
    }
  }

  .rect {
    width: size(496);
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, #090C1D 47.58%, rgba(9, 12, 29, 0) 100%);
  }

  .text {
    top: size-m(50.29);
    left: size-m(42.5);
    color: #fff;
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(8);
    line-height: size-m(15);
    @media screen and (min-width:768px) {
      top: size(100);
      left: size(108);
      font-size: size(22);
      line-height: size(42);
    }
  }

  .txt {
    bottom: size-m(12.1);
    right: size-m(11.4);
    color: #fff;
    font-size: size-m(12);
    line-height: size-m(12);
    text-shadow: size-m(1) size-m(1) size-m(2) rgba(0, 0, 0, 0.5);
    @media screen and (min-width:768px) {
      bottom: size(10);
      right: size(11.4);
      font-size: size(15);
      line-height: size(12);
      text-shadow: size(1) size(1) size(2) rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

<script setup>
</script>