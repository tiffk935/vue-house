<template>
  <section class="s9 relative text-white">
    <img class="logo absolute" src="@/section/s9/logo.svg" />
    <div class="t1 absolute">社子公園首排 原鄉翠庭棲居</div>
    <div class="t2 absolute">23~39 坪｜2~3 房 8787-8888</div>
    <div class="t3 absolute">2023初春  即將公開</div>
    <img class="logo2 absolute" src="@/section/s9/logo2.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  width: 100%;
  height: size-m(600);
  font-family: 'Noto Serif TC';
  background: #004B47;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .logo {
    width: size-m(200.27);
    top: size-m(128.84);
    left: size-m(85.86);
    @media screen and (min-width:768px) {
      width: size(417.83);
      top: size(181.84);
      left: size(761);
    }
  }

  .t1 {
    top: size-m(334);
    left: size-m(89.5);
    font-size: size-m(14);
    line-height: size-m(19);
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.14em;
    @media screen and (min-width:768px) {
      top: size(620);
      left: size(760);
      font-size: size(30);
      line-height: size(43);
    }
  }

  .t2 {
    top: size-m(357);
    left: size-m(89.5);
    font-size: size-m(14);
    line-height: size-m(20);
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.04em;
    @media screen and (min-width:768px) {
      top: size(665);
      left: size(760);
      font-size: size(30);
      line-height: size(46);
    }
  }

  .t3 {
    top: size-m(408);
    left: size-m(89.5);
    font-size: size-m(21);
    line-height: size-m(29);
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.08em;
    @media screen and (min-width:768px) {
      top: size(807);
      left: size(570);
      font-size: size(38);
      line-height: size(54);
    }
  }

  .logo2 {
    width: size-m(193);
    top: size-m(440.91);
    left: size-m(89.5);
    @media screen and (min-width:768px) {
      width: size(392);
      top: size(818);
      left: size(973);
    }
  }
}

</style>

<script setup>
</script>