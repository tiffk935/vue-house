<template>
  <section class="s5 relative z-10">
    <div class="bg absolute"></div>
    <img class="house absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s5/house.png" />
    <img class="title absolute" src="@/section/s5/title.svg" />
    <img class="style absolute md:hidden" src="@/section/s5/style-m.svg" />
    <img class="style absolute hidden md:block" src="@/section/s5/style.svg" />
    <img class="text absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s5/text-m.svg" />
    <img class="text absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s5/text.svg" />
    <img class="house2 absolute md:hidden" src="@/section/s5/house2-m.png" />
    <img class="house2 absolute hidden md:block" src="@/section/s5/house2.png" />
    <img class="style2 absolute hidden md:block" data-aos="fade-right" data-aos-delay="0" src="@/section/s5/style2.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  height: size-m(900);
  @media screen and (min-width:768px) {
    height: size(1444);
  }

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(746);
    background-image: url(@/section/s5/bg-m.png);
    background-size: 100% 100%;
    @media screen and (min-width:768px) {
      height: size(1320);
      background-image: url(@/section/s5/bg.png);
    }
  }

  .house {
    top: size-m(0);
    left: size-m(-59);
    width: size-m(808);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-30);
      left: size(31);
      width: size(1872);
    }
  }

  .title {
    top: size-m(202);
    left: size-m(66);
    width: size-m(247);
    @media screen and (min-width:768px) {
      top: size(462);
      left: size(591);
      width: size(741);
    }
  }

  .style {
    top: size-m(271);
    left: size-m(16);
    width: size-m(343);
    @media screen and (min-width:768px) {
      top: size(617);
      left: size(609);
      width: size(706);
    }
  }

  .text {
    top: size-m(301);
    left: size-m(32);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(652);
      left: size(682);
      width: size(559);
    }
  }

  .house2 {
    top: size-m(555);
    left: 0;
    width: 100%;
    @media screen and (min-width:768px) {
      top: size(702.58);
      left: size(728);
      width: size(1194);
      max-width: none;
    }
  }

  .style2 {
    @media screen and (min-width:768px) {
      top: size(1133);
      left: size(170);
      width: size(662);
    }
  }
}

</style>

<script setup>
</script>
