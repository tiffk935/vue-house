<template>
  <section class="s8 relative">
    <div class="bg absolute parallax"></div>
    <div class="txt absolute">*此為廣告效果示意，為單一建物腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size-m(506);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
    // background: none;
  }

  .bg {
    width: 100%;
    height: size-m(400);
    top: size-m(48);
    left: 0;
    background-image: url(@/section/s8/img.jpg);
    background-repeat: no-repeat;
    background-size: auto 100%;
    @media screen and (min-width:768px) {
      top: 0;
      height: 100%;
      background-size: 100% auto;
    }
  }

  .txt {
    width: size-m(239);
    left: size-m(68);
    top: size-m(455);
    font-size: size-m(9);
    line-height: size-m(13);
    text-align: center;
    color: #666666;
    @media screen and (min-width:768px) {
      width: auto;
      left: size(10);
      top: size(1050);
      font-weight: 700;
      font-size: size(14);
      line-height: size(20);
      letter-spacing: 0.03em;
      color: #FFFFFF;
    }
  }
}
</style>

<script setup>
</script>
