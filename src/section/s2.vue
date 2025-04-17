<template>
  <section class="s2 user-n w-full relative">
    <div class="bg"></div>
    <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">青年成家の晉級！</div>
    <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">捷運╳水岸╳雙語校園宅！</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  height: size-m(155);
  text-align: center;
  padding-top: size-m(43);
  @media screen and (min-width:768px) {
    height: size(270);
    padding-top: size(51);
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(181);
    background-size: auto 100%;
    background-position: size-m(-74.54) 0;
    background-image: url(@/section/s1/bg.png);
    transform: scaleY(-1);
    opacity: .4;
    @media screen and (min-width:768px) {
      height: size(390);
      background-position: 0 0;
    }
  }

  .t1 {
    font-size: size-m(28);
    font-weight: 700;
    line-height: 160%;
    letter-spacing: .44em;
    @media screen and (min-width:768px) {
      font-size: size(78);
    }
  }

  .t2 {
    font-size: size-m(15);
    font-weight: 700;
    line-height: 160%;
    letter-spacing: .76em;
    @media screen and (min-width:768px) {
      font-size: size(40);
      margin-top: size(-10);
    }
  }
}
</style>

<script setup>
</script>
