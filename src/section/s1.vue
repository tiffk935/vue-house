<template>
  <section class="s1 user-n w-full relative">
    <div class="logo logo1 absolute" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="0">
      <img class="block w-full" src="@/section/s1/logo1.png" />
    </div>
    <div class="logo logo2 absolute">
      <img class="block w-full" src="@/section/s1/logo2.png" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  height: size-m(800);
  background-image: url(@/section/s1/bg.png);
  background-size: auto 100%;
  background-position: 32.5% 0;
  background-repeat: no-repeat;
  @media screen and (min-width:768px) {
    height: size(900);
    background-size: cover;
    background-position: 50% 50%;
  }

  .logo1 {
    top: size-m(320);
    left: size-m(38);
    width: size-m(300);
    @media screen and (min-width:768px) {
      top: size(360);
      left: size(657);
      width: size(606);
    }
  }

  .logo2 {
    top: size-m(277);
    left: size-m(55);
    width: size-m(266);
    @media screen and (min-width:768px) {
      top: size(314);
      left: size(754);
      width: size(412);
    }

    img {
      opacity: 0;
    }
  }
}
</style>

<script setup>
</script>
