<template>
  <section class="s1 text-white bg-[#AB8E77] relative">
    <img class="style3 absolute hidden md:block" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="0" src="@/section/s1/style3.png" />
    <img class="style2 absolute" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="3000" src="@/section/s1/style2.png" />
    <img class="style1 absolute" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="3000" src="@/section/s1/style1.png" />
    <img class="en absolute" src="@/section/s1/en.png" />
    <img class="logo absolute" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000" src="@/section/s1/logo.svg" />
    <div class="tt absolute hidden md:block" data-aos="zoom-in" data-aos-delay="800">
      <div class="t1">隈の日本絕美藝術</div>
      <div class="t2">22-41 坪｜06-2899-777</div>
    </div>
    <div class="tt absolute md:hidden" data-aos="zoom-in" data-aos-delay="800">
      <div class="t1">隈の日本絕美藝術 22-41 坪</div>
      <div class="t2">06-2899-777</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

// @keyframes floatY {
//   from {
//     transform: translateY(0%);
//   }
//   to {
//     transform: translateY(-10%);
//   }
// }

.s1 {
  width: 100%;
  height: size-m(667);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .style1 {
    left: 0;
    bottom: 0;
    width: size-m(286);
    transform-origin: bottom left;
    @media screen and (min-width:768px) {
      width: size(697);
    }
  }

  .style2 {
    left: 0;
    bottom: 0;
    width: size-m(268);
    transform-origin: bottom left;
    mix-blend-mode: soft-light;
    @media screen and (min-width:768px) {
      width: size(653);
    }
  }

  .style3 {
    @media screen and (min-width:768px) {
      right: 0;
      bottom: 0;
      width: size(1161 - 224);
      transform-origin: bottom right;
      mix-blend-mode: soft-light;
    }
  }

  .en {
    width: size-m(144);
    left: size-m(62);
    top: size-m(572);
    @media screen and (min-width:768px) {
      width: size(294);
      left: size(156);
      top: size(878);
    }
  }

  .logo {
    width: size-m(228.45);
    left: size-m(73);
    top: size-m(96.23);
    @media screen and (min-width:768px) {
      width: size(406.58);
      left: size(764);
      top: size(456);
    }
  }

  .tt {
    left: size-m(59);
    top: size-m(236);
    text-align: right;
    @media screen and (min-width:768px) {
      left: size(1222);
      top: size(517);
    }

    .t1 {
      font-weight: 700;
      font-size: size-m(21);
      line-height: size-m(30);
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(58);
        letter-spacing: 0.3em;
      }
    }

    .t2 {
      font-weight: 500;
      font-size: size-m(27);
      line-height: size-m(39);
      letter-spacing: 0.04em;
      text-align: left;
      @media screen and (min-width:768px) {
        font-weight: 700;
        font-size: size(34);
        line-height: size(51);
      }
    }
  }

  // .t1 {
  //   left: size-m(59);
  //   top: size-m(236);
  //   font-weight: 700;
  //   font-size: size-m(21);
  //   line-height: size-m(30);
  //   @media screen and (min-width:768px) {
  //     left: size(1222);
  //     top: size(517);
  //     font-size: size(40);
  //     line-height: size(58);
  //     letter-spacing: 0.3em;
  //   }
  // }

  // .t2 {
  //   left: size-m(146);
  //   top: size-m(262);
  //   font-weight: 500;
  //   font-size: size-m(27);
  //   line-height: size-m(39);
  //   letter-spacing: 0.04em;
  //   @media screen and (min-width:768px) {
  //     left: size(1224);
  //     top: size(585);
  //     font-weight: 700;
  //     font-size: size(35);
  //     line-height: size(51);
  //   }
  // }
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
