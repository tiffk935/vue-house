<template>
  <section class="s1 text-white bg-[#006795] relative">
    <img class="bg absolute md:hidden" src="@/section/s1/bg-m.svg" />
    <img class="bg absolute hidden md:block" src="@/section/s1/bg.svg" />
    <img class="logo absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/logo.svg" />
    <img class="title absolute" src="@/section/s1/title.svg" />
    <img class="star1 absolute" src="@/section/s1/star.png" />
    <img class="star2 absolute" src="@/section/s1/star.png" />
    <img class="text absolute" src="@/section/s1/text.svg" />
    <img class="building absolute" data-aos="fade-down" data-aos-delay="0" src="@/section/s1/building.png" />
    <div class="small absolute">南紡購物中心實景拍攝</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes star {
  to {
    transform: rotate(-360deg);
  }
}

.s1 {
  width: 100%;
  height: size-m(667);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .logo {
    top: size-m(76.04);
    left: size-m(119.78);
    width: size-m(145.44);
    @media screen and (min-width:768px) {
      top: size(115.19);
      left: size(804.43);
      width: size(311.14);
    }
  }

  .title {
    top: size-m(251.4);
    left: size-m(58);
    width: size-m(260);
    @media screen and (min-width:768px) {
      top: size(393);
      left: size(706);
      width: size(508);
    }
  }

  .star1 {
    top: size-m(307.17);
    left: size-m(142.3);
    width: size-m(43.67);
    mix-blend-mode: color-dodge;
    transform-origin: center center;
    animation: star 8s linear infinite;
    @media screen and (min-width:768px) {
      top: size(502.36);
      left: size(870.51);
      width: size(85.46);
    }
  }

  .star2 {
    top: size-m(305.79);
    left: size-m(156.84);
    width: size-m(75.91);
    mix-blend-mode: color-dodge;
    transform-origin: center center;
    animation: star 8s linear infinite;
    @media screen and (min-width:768px) {
      top: size(499.62);
      left: size(898.98);
      width: size(148.35);
    }
  }

  .text {
    top: size-m(392.5);
    left: size-m(68);
    width: size-m(238);
    @media screen and (min-width:768px) {
      top: size(661.82);
      left: size(725.93);
      width: size(476.87);
    }
  }

  .building {
    top: size-m(464.39);
    left: size-m(-67);
    width: size-m(663.5);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(652);
      left: size(448.33);
      width: size(1390.32);
    }
  }

  .small {
    bottom: size-m(6.42);
    right: size-m(17);
    font-size: size-m(12);
    line-height: size-m(20);
    color: #fff;
    @media screen and (min-width:768px) {
      bottom: size(2);
      right: size(186);
      font-size: size(15);
      line-height: size(25.5);
    }
  }
}
</style>

<script setup>
</script>
