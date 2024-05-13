<template>
  <section class="s10 user-n relative">
    <img class="bg absolute" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" src="@/section/s10/bg.webp" />
    <img class="logo absolute" src="@/section/s10/logo.webp" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

[data-aos=cuscus] {
  transform: rotate(-28deg) scale(1.8);
  transition-property: transform;
  @media (min-width: 768px) {
    transform: rotate(-28deg) scale(1.8);
  }

  &.aos-animate {
    transform: rotate(0deg) scale(1);
  }
}

.s10 {
  width: 100%;
  height: size-m(600);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
  }
  
  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo {
    top: size-m(44);
    left: size-m(121.16);
    width: size-m(221.34);
    @media screen and (min-width:768px) {
      top: size(320.25);
      left: size(1302.95);
      width: size(453.94);
    }
  }
}

</style>

<script setup>
</script>