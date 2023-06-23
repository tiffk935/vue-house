<template>
  <section class="s12 relative">
    <img class="grid absolute md:hidden" src="@/section/s12/grid-m.jpg" />
    <img class="grid absolute hidden md:block" src="@/section/s12/grid.jpg" />
    <div class="grid-t1 upup absolute">
      <div class="tt">展宜建築的職人手工好房子<br>天母磺溪聚落稀有靜獻</div>
    </div>
    <div class="grid-t2 upup absolute">
      <div class="tt">即將靜好公開 敬請期待</div>
    </div>
    <div class="grid-t3 upup absolute">
      <div class="tt">歡迎預約優先品賞</div>
    </div>

    <img class="lines absolute md:hidden" src="@/section/s12/lines-m.svg" />
    <img class="lines absolute hidden md:block" src="@/section/s12/lines.svg" />

    <div class="logo upup absolute">
      <div class="tt"></div>
    </div>
    <div class="t1 upup absolute">
      <div class="tt"></div>
    </div>
    <div class="t2 upup absolute">
      <div class="tt"></div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  width: 100%;
  height: size-m(734);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
    // background-image: url(@/section/s1/bg.jpg);
  }

  .grid {
    width: size-m(297);
    left: size-m(38);
    top: size-m(59);
    @media screen and (min-width:768px) {
      width: size(1112);
      left: size(404);
      top: size(99);
    }
  }

  .grid-t1, .grid-t2 {
    height: size-m(36);
    width: size-m(161);
    left: size-m(106);
    top: size-m(140);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(13);
    line-height: size-m(18);
    text-align: center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    @media screen and (min-width:768px) {
      height: size(65);
      width: size(688);
      left: size(616);
      top: size(243);
      font-size: size(30);
      line-height: size(65);
    }
  }

  .grid-t2 {
    height: size-m(18);
    width: size-m(138);
    left: size-m(118);
    top: size-m(203);
    @media screen and (min-width:768px) {
      height: size(65);
      width: size(317);
      left: size(802);
      top: size(308);
    }
  }

  .grid-t3 {
    height: size-m(18);
    width: size-m(136);
    left: size-m(119);
    top: size-m(255);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(16);
    line-height: size-m(18);
    text-align: center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    @media screen and (min-width:768px) {
      height: size(43);
      width: size(247);
      left: size(837);
      top: size(420);
      font-weight: 600;
      font-size: size(30);
      line-height: size(43);
    }
  }

  .lines {
    width: size-m(297.14);
    left: size-m(38);
    top: size-m(477.89);
    @media screen and (min-width:768px) {
      width: size(1733);
      left: size(91);
      top: size(96);
    }
  }

  .logo {
    height: size-m(72.15576934814453);
    width: size-m(297.1393737792969);
    left: size-m(38);
    top: size-m(386.16748046875);
    @media screen and (min-width:768px) {
      height: size(110.21810913085938);
      width: size(454.3362121582031);
      left: size(404.32904052734375);
      top: size(761.1279296875);
    }

    .tt {
      background-image: url(@/section/s12/logo.svg);
    }
  }

  .t1 {
    height: size-m(120.90211486816406);
    width: size-m(296.1858825683594);
    left: size-m(38.476318359375);
    top: size-m(498.06591796875);
    @media screen and (min-width:768px) {
      height: size(109.74950408935547);
      width: size(609.314697265625);
      left: size(906.685302734375);
      top: size(757.990234375);
    }

    .tt {
      background-image: url(@/section/s12/t1-m.svg);
      @media screen and (min-width:768px) {
        background-image: url(@/section/s12/t1.svg);
      }
    }
  }

  .t2 {
    height: size-m(11.3754301071167);
    width: size-m(296.0140075683594);
    left: size-m(39.125244140625);
    top: size-m(646.40283203125);
    @media screen and (min-width:768px) {
      height: size(72.21359252929688);
      width: size(1111.989990234375);
      left: size(404);
      top: size(894.7861328125);
    }

    .tt {
      background-image: url(@/section/s12/t2-m.svg);
      @media screen and (min-width:768px) {
        background-image: url(@/section/s12/t2.svg);
      }
    }
  }
}
</style>

<script setup>
</script>