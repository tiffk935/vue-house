<template>
  <section class="s1 relative">
    <img class="bg absolute t-0 l-0 w-full h-full object-cover" src="@/section/s1/bg.jpg" />
    <img class="horse absolute hidden md:block" src="@/section/s1/horse.png" />
    <img class="horse absolute md:hidden" src="@/section/s1/horse-m.png" />
    <img class="logo absolute" data-aos="zoom-in" data-aos-duration="800" src="@/section/s1/logo.svg" />
    <div class="t1 absolute text-white" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">雙會館 雙車位 森態莊園電梯別墅</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes horse {
  to {
    transform: translate(0);
  }
}

.s1 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .horse {
    top: size-m(346);
    // left: size-m(0);
    left: 4vw;
    width: size-m(375);
    transform: skew(2deg) translate(-3%);
    transform-origin: 100% 100%;
    animation: horse 5s infinite alternate;
    @media screen and (min-width:768px) {
      top: size(290);
      // left: size(1334);
      left: 71.2vw;
      width: size(1920 - 1334);
    }
  }

  .logo {
    top: size-m(139);
    left: size-m(59);
    width: size-m(256.46);
    // animation: floatY 6s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      top: size(271);
      left: size(587);
      width: size(753.45);
    }
  }

  .t1 {
    left: size-m(50);
    top: size-m(271);
    font-weight: 500;
    font-size: size-m(16);
    line-height: size-m(23);
    letter-spacing: 0.18em;
    @media screen and (min-width:768px) {
      left: size(548);
      top: size(728);
      font-size: size(48);
      line-height: size(70);
    }
  }
}

</style>

<script setup>
</script>
