<template>
  <section class="s1 user-n w-full relative z-[1]">
    <div class="ball ball1 absolute"></div>
    <div class="ball ball2 absolute"></div>
    <div class="ball ball3 absolute"></div>
    <div class="ball ball4 absolute hidden md:block"></div>
    <img class="logo absolute" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000"
      data-aos-delay="0" />
    <img class="text absolute" src="@/section/s1/text.svg" data-aos="fade-up" data-aos-duration="1000"
      data-aos-delay="200" data-aos-offset="-600" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.ball,
.ball:after {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  z-index: -1;
}

.ball:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@keyframes ball {
  to {
    transform: translate(0);
  }
}

.s1 {
  height: size-m(800);

  @media screen and (min-width:768px) {
    height: size(1200);
  }

  .logo {
    top: size-m(228);
    left: size-m(31);
    width: size-m(312);

    @media screen and (min-width:768px) {
      top: size(300);
      left: size(688);
      width: size(544);
    }
  }

  .text {
    top: size-m(513);
    left: size-m(38);
    width: size-m(299);

    @media screen and (min-width:768px) {
      top: size(844);
      left: size(774);
      width: size(370);
    }
  }

  .ball1 {
    width: size-m(438);
    height: size-m(438);
    top: size-m(-302);
    left: size-m(-246);
    transform: translateY(20%);
    background-image: url(@/section/ball1.png);
    animation: ball 10s ease 0s infinite alternate;

    @media screen and (min-width:768px) {
      width: size(440);
      height: size(440);
      top: size(-270);
      left: size(243);
    }
  }

  .ball2 {
    opacity: 0.5;
    width: size-m(69);
    height: size-m(69);
    top: size-m(136);
    left: size-m(281);
    transform: translateY(-30%);
    background-image: url(@/section/ball2.png);
    animation: ball 7s linear -5s infinite alternate;

    @media screen and (min-width:768px) {
      width: size(169.5);
      height: size(169.5);
      top: size(165);
      left: size(1363);
    }
  }

  .ball3 {
    width: size-m(158);
    height: size-m(158);
    top: size-m(601);
    right: size-m(-81);
    transform: translateY(-20%);
    background-image: url(@/section/ball1.png);
    animation: ball 6s linear -2s infinite alternate;

    @media screen and (min-width:768px) {
      width: size(545);
      height: size(545);
      top: size(700);
      right: size(-278);
    }
  }

  .ball4 {
    transform: translateY(40%);
    background-image: url(@/section/ball1.png);
    animation: ball 8s linear -4s infinite alternate;

    @media screen and (min-width:768px) {
      width: size(355);
      height: size(355);
      top: size(690);
      left: size(71);
    }
  }
}
</style>

<script setup>
// import { inject } from 'vue';
// const smoothScroll = inject('smoothScroll')
// const scrollTo = (el) => {
//   smoothScroll({
//     scrollTo: document.querySelector(el)
//   })
// }
</script>
