<template>
  <section class="s9 relative text-white">
    <img class="logo absolute" src="@/section/s9/logo.svg" />
    <div class="t1 absolute">戶戶社子公園首席 北方未來正核心</div>
    <div class="t2 absolute">24~39 坪 ｜ 2~3 房 ｜ 8787-8888</div>
    <div class="t3 absolute">2023初春  即將公開</div>
    <img class="logo2 absolute" src="@/section/s9/logo2.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  width: 100%;
  height: size-m(640);
  font-family: 'Noto Serif TC';
  background: #004B47;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .logo {
    width: size-m(280.27);
    top: size-m(108.84);
    left: size-m(45.86);
    @media screen and (min-width:768px) {
      width: size(561.83);
      top: size(150.84);
      left: size(667);
    }
  }

  .t1 {
    top: size-m(364);
    left: size-m(45.86);
    font-size: size-m(16);
    line-height: size-m(19);
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.14em;
    @media screen and (min-width:768px) {
      top: size(690);
      left: size(672);
      font-size: size(32);
      line-height: size(43);
    }
  }

  .t2 {
    top: size-m(387);
    left: size-m(45.86);
    font-size: size-m(16);
    line-height: size-m(20);
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.1em;
    @media screen and (min-width:768px) {
      top: size(735);
      left: size(672);
      font-size: size(32);
      line-height: size(46);
      letter-spacing: 0.1em;
    }
  }

  .t3 {
    top: size-m(452);
    left: size-m(80.5);
    font-size: size-m(23);
    line-height: size-m(29);
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.08em;
    @media screen and (min-width:768px) {
      top: size(877);
      left: size(500);
      font-size: size(40);
      line-height: size(54);
    }
  }

  .logo2 {
    width: size-m(213);
    top: size-m(490.91);
    left: size-m(80.5);
    @media screen and (min-width:768px) {
      width: size(422);
      top: size(888);
      left: size(943);
    }
  }
}

</style>

<script setup>
</script>