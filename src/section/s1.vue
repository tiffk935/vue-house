<template>
  <section class="s1 text-white bg-[#D7282F] relative">
    <img class="house absolute" src="@/section/s1/house.svg" />
    <img class="logo2 absolute" data-aos="zoom-in" data-aos-delay="0" src="@/section/s1/logo2.svg" />
    <img class="logo1 absolute" data-aos="zoom-in" data-aos-delay="0" src="@/section/s1/logo1.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s1 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .house {
    width: size-m(375);
    top: size-m(283.44);
    left: size-m(0);
    @media screen and (min-width:768px) {
      width: size(1033.81);
      top: size(180);
      left: size(102);
    }
  }

  .logo2 {
    width: size-m(288.83);
    top: size-m(143);
    left: size-m(43);
    @media screen and (min-width:768px) {
      width: size(578.84);
      top: size(448);
      left: size(1074);
    }
  }

  .logo1 {
    width: size-m(173.4);
    top: size-m(346);
    left: size-m(101);
    @media screen and (min-width:768px) {
      width: size(406.15);
      top: size(449);
      left: size(460);
    }
  }
}
</style>

<script setup>
</script>
