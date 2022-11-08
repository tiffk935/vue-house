<template>
  <section class="s7 relative">
    <div class="bg absolute"></div>
    <div class="title absolute">五心建材 一屋致勝</div>
    <img data-aos="fade-in" data-aos-delay="0" class="list1 absolute" src="@/section/s7/list1.svg" alt="双和心">
    <img data-aos="fade-in" data-aos-delay="200" class="list2 absolute" src="@/section/s7/list2.svg" alt="双和心">
    <img data-aos="fade-in" data-aos-delay="400" class="list3 absolute" src="@/section/s7/list3.svg" alt="双和心">
    <img data-aos="fade-in" data-aos-delay="500" class="list4 absolute" src="@/section/s7/list4.svg" alt="双和心">
    <img data-aos="fade-in" data-aos-delay="600" class="list5 absolute" src="@/section/s7/list5.svg" alt="双和心">
    <img data-aos="fade-in" data-aos-delay="800" class="logo absolute hidden md:block" src="@/section/s7/logo.svg" alt="双和心">
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(667);
  background: #E01373;
  color: #fff;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    top: 0;
    left: size-m(375);
    width: size-m(667);
    height: size-m(375);
    background-image: url('@/section/s7/bg.jpg');
    transform: rotate(90deg);
    transform-origin: left top;
    background-size: 100% 100%;
    @media screen and (min-width:768px) {
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotate(0deg);
    }
  }

  .title {
    font-weight: 900;
    font-size: size-m(25);
    top: size-m(20);
    left: size-m(85);
    @media screen and (min-width:768px) {
      font-size: size(63);
      top: size(69);
      left: size(701);
    }
  }

  .list1 {
    width: size-m(93.22);
    top: size-m(94);
    left: size-m(30);
    @media screen and (min-width:768px) {
      width: size(273);
      top: size(221);
      left: size(180);
    }
  }

  .list2 {
    width: size-m(93.22);
    top: size-m(227);
    left: size-m(139.95);
    @media screen and (min-width:768px) {
      width: size(273);
      top: size(346);
      left: size(502);
    }
  }

  .list3 {
    width: size-m(93.22);
    top: size-m(87);
    left: size-m(249.89);
    @media screen and (min-width:768px) {
      width: size(273);
      top: size(221);
      left: size(824);
    }
  }

  .list4 {
    width: size-m(93.22);
    top: size-m(366);
    left: size-m(30);
    @media screen and (min-width:768px) {
      width: size(273);
      top: size(346);
      left: size(1146);
    }
  }

  .list5 {
    width: size-m(93.22);
    top: size-m(371);
    left: size-m(250);
    @media screen and (min-width:768px) {
      width: size(273);
      top: size(221);
      left: size(1468);
    }
  }

  .logo {
    width: size(1074);
    bottom: 0;
    left: 0;
  }
}

</style>

<script setup>
</script>
