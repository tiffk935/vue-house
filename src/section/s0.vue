<template>
  <section class="s0 text-[#595757] bg-[#D9374B] relative">
    <div class="bg-white relative h-full">
      <h2 data-aos="fade-up" data-aos-delay="0" class="absolute font-black text-[#D9374B]">早鳥有禮<br class="block md:hidden">圓夢時機</h2>
      <h3 data-aos="fade-up" data-aos-delay="200" class="absolute">航空客運園區 超低公設 甲級營造</h3>
      <div data-aos="fade-up" data-aos-delay="400" class="info absolute">
        <img class="block md:hidden" src="@/section/s0/info-m.svg" alt="498萬起 2房2衛 車位需另購">
        <img class="hidden md:block" src="@/section/s0/info.svg" alt="498萬起 2房2衛 車位需另購">
      </div>
      <img class="bird absolute" src="@/section/s0/bird.png" alt="戀JIA">
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s0 {

  @keyframes floatY {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(-10%);
    }
  }

  width: 100%;
  height: size-m(736);
  font-weight: 400;
  padding: size-m(15) size-m(17);
  @media screen and (min-width:768px) {
    height: size(1080);
    padding: size(31)
  }
  
  h2 {
    top: size-m(69);
    left: size-m(55);
    font-size: 14.6vw;
    line-height: 1.2;
    @media screen and (min-width:768px) {
      top: size(210);
      left: size(142);
      font-size: 7.17vw;
      line-height: size(194);
    }
  }

  h3 {
    top: size-m(216);
    left: size-m(23);
    font-size: 5.44vw;
    line-height: size-m(29);
    @media screen and (min-width:768px) {
      top: size(397);
      left: size(142);
      font-size: 3.99vw;
      line-height: size(109);
    }
  }

  .info {
    top: size-m(248);
    left: size-m(44);
    width: size-m(251);
    height: size-m(117);
    @media screen and (min-width:768px) {
      top: size(480);
      left: size(137);
      width: size(1102);
      height: size(311);
    }

    img {
      width: 100%;
    }
  }

  .bird {
    top: size-m(399);
    left: size-m(44);
    width: size-m(260);
    animation: floatY 6s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      top: size(225);
      left: size(1253);
      width: size(552);
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
