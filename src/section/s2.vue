<template>
  <section class="s2 relative">
    <div class="absolute rect"></div>
    <img data-aos="zoom-in" data-aos-delay="0" class="absolute legend" src="@/section/s2/legend.svg" alt="雙和心">
    <img data-aos="zoom-in" data-aos-delay="0" class="absolute text" src="@/section/s2/text.svg" alt="雙和心">
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  overflow: hidden;
  width: 100%;
  height: size-m(604);
  background-image: url('@/section/s2/bg.png');
  background-repeat: no-repeat;
  background-position: 55.768% center;
  background-size: size-m(1210) auto;
  @media screen and (min-width:768px) {
    height: size(1080);
    background-position: center center;
    background-size: size(2773) auto;
  }

  .rect {
    width: size-m(295);
    height: size-m(667);
    top: size-m(-32);
    left: size-m(40);
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    @media screen and (min-width:768px) {
      width: size(1477);
      height: size(1089);
      top: size(-5);
      left: size(221);
    }
  }

  .legend {
    width: size-m(323);
    top: size-m(132);
    left: size-m(26);
    @media screen and (min-width:768px) {
      width: size(801);
      top: size(215);
      left: size(555);
    }
  }
  
  .text {
    width: size-m(294);
    top: size-m(218);
    left: size-m(41);
    @media screen and (min-width:768px) {
      width: size(538);
      top: size(430);
      left: size(691);
    }
  }
}

</style>

<script setup>
</script>
