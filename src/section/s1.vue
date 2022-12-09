<template>
  <section class="s1 relative">

    <img data-aos="fade-up" data-aos-delay="0" class="logo absolute" src="@/section/s1/logo.svg" alt="巴克禮OnePark" />
    <img data-aos="fade-up" data-aos-delay="500" class="title absolute" src="@/section/s1/title.svg" alt="巴克禮OnePark" />
    <img  class="t2 absolute" src="@/section/s1/t2.svg" alt="巴克禮OnePark" />
    <img  class="mask absolute" src="@/section/s1/mask.svg" alt="巴克禮OnePark" />
    <img  class="style1 absolute hidden md:block" src="@/section/s1/style.svg" alt="巴克禮OnePark" />
    <img  class="style2 absolute hidden md:block" src="@/section/s1/style.svg" alt="巴克禮OnePark" />

    <img  class="style1 absolute md:hidden" src="@/section/s1/style_m.svg" alt="巴克禮OnePark" />
    <img  class="style2 absolute md:hidden" src="@/section/s1/style_m.svg" alt="巴克禮OnePark" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes floatY {
  to {
    transform: translateY(-13%);
  }
}
@keyframes floatY2 {
  to {
    transform: translateY(13%);
  }
}
@keyframes floatY3 {
  to {
    transform: translateY(13%) rotate(120deg) ;
  }
}
@keyframes skew {
  to {
    transform: skewX(0deg);
  }
}

.s1 {
  width: 100%;
  height: size-m(667);
  background: #E60012;
  overflow: hidden;
  //background: url(@/section/s1/01.png);
  @media screen and (min-width:768px) {
    height: size(1080);
    
  }

  .bg, .tree1, .tree2, .tree3 {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: 50% 100%;
    animation: skew 6s linear infinite alternate;
  }

  .tree1 {
    transform: skewX(6deg);
    min-width: 115%;

    @media screen and (min-width:768px) {
    min-width: 115%;
  }

  }

  .tree2 {
    transform: skewX(6deg);
  }
  
  .tree3 {
    transform: skewX(15deg);
  }

  .logo {
    width: size-m(260);
    top: size-m(227);
    left: size-m(57);
    z-index: 10;
    @media screen and (min-width:768px) {
      width: size(845);
      top: size(250);
      left: size(540);
    }
  }

  .title {
    width: size-m(260);
    top: size-m(369);
    left: size-m(58);
    z-index: 10;
    @media screen and (min-width:768px) {
      width: size(572);
      top: size(675);
      left: size(675);
    }
  }

  .t2 {
    width: size-m(213);
    bottom: size-m(25);
    right: size-m(81);
    z-index: 10;
    @media screen and (min-width:768px) {
      width: size(213);
      bottom: size(20);
      right: size(11);
    }
  }

  .mask {
    width: size-m(375);
    bottom: size-m(69);
    right: size-m(0);
    z-index: 2;
    display: none;
    @media screen and (min-width:768px) {
      width: size(1373);
      bottom: size(0);
      right: size(249);
    }
  }

  .style1,
  .style2 {
    width: size-m(375);
    bottom: size-m(0);
    right: size-m(0);
    z-index: 1;
    transform-origin: 50% 100%;
    animation: sty 6s linear infinite;
    transform: translate(0, -100%);
    @media screen and (min-width:768px) {
      width: size(1920);
      bottom: size(0);
      right: size(0);
      transform-origin: 50% 100%;
      animation: sty 6s linear infinite;
      transform: translate(0, -100%);
    }
  }
  .style2{
    animation: sty 6s -3s linear infinite;}

  @keyframes sty {
  to {
    transform: translate(0, 100%);
  }
}

}

</style>