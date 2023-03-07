<template>
  <section class="s7 relative">
    <img class="logo" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" src="@/section/s7/logo.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s7 {
  padding: size-m(73) 0;
  text-align: center;
  @media screen and (min-width:768px) {
    padding: size(100) 0;
  }

  .logo {
    width: size-m(342);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: size(720);
    }
  }
}
</style>

<script setup>
</script>
