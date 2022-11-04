<template>
  <section class="s4 relative">
    <img class="bg absolute" src="@/section/s4/bg.png" />
    <img class="deco absolute md:hidden" src="@/section/s4/deco-m.svg" />
    <img class="deco absolute hidden md:block" src="@/section/s4/deco.png" />
    <img class="logo absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/logo-m.svg" />
    <img class="logo absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/logo.svg" />
    <img class="title absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/title-m.svg" />
    <img class="title absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/title.svg" />
    <img class="text absolute md:hidden" src="@/section/s4/text-m.svg" />
    <img class="text absolute hidden md:block" src="@/section/s4/text.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s4 {
  width: 100%;
  height: size-m(923);
  background: linear-gradient(180deg, #D9D9D9 76.04%, rgba(217, 217, 217, 0) 100%);
  @media screen and (min-width:768px) {
    height: size(1090);
    background: linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%);
  }

  .bg {
    bottom: size-m(0);
    left: size-m(-187);
    width: size-m(562);
    opacity: 0.5;
    max-width: none;
    @media screen and (min-width:768px) {
      bottom: auto;
      top: size(-38);
      left: size(0);
      width: size(1920);
    }
  }

  .deco {
    top: size-m(222);
    left: size-m(14);
    width: size-m(343);
    @media screen and (min-width:768px) {
      top: size(437);
      left: size(476);
      width: size(967);
    }
  }

  .logo {
    top: size-m(47);
    left: size-m(81);
    width: size-m(213);
    @media screen and (min-width:768px) {
      top: size(180);
      left: size(807);
      width: size(306);
    }
  }

  .title {
    top: size-m(249);
    left: size-m(41);
    width: size-m(292);
    @media screen and (min-width:768px) {
      top: size(453);
      left: size(643);
      width: size(633);
    }
  }

  .text {
    top: size-m(342);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(643);
      left: size(867);
      width: size(504);
    }
  }
}

</style>

<script setup>
</script>
