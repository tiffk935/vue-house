<template>
  <section class="s1 relative">

    <img class="logo absolute hidden md:block" src="@/section/s1/logo.svg" alt="艾美新時代" />
    <img class="logo absolute md:hidden" src="@/section/s1/logo_m.svg" alt="艾美新時代" />
    <img class="light1 absolute" src="@/section/s1/light1.png" alt="艾美新時代" />
    <img class="light2 absolute" src="@/section/s1/light2.png" alt="艾美新時代" />
    <img data-aos="fade-up" data-aos-delay="500" class="title absolute" src="@/section/s1/title.svg" alt="艾美新時代" />
    <img  class="t2 absolute" src="@/section/s1/t2.svg" alt="艾美新時代" />
    <img  class="style1 absolute hidden md:block" src="@/section/s1/style1.png" alt="艾美新時代" />
    <img  class="style2 absolute hidden md:block" src="@/section/s1/style2.png" alt="艾美新時代" />

    <img  class="style1 absolute md:hidden" src="@/section/s1/style1.png" alt="艾美新時代" />
    <img  class="style2 absolute md:hidden" src="@/section/s1/style2.png" alt="艾美新時代" />
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
  //background: #E60012;
  overflow: hidden;
  background: url(@/section/s1/bg_m.webp);
      background-size: cover;
  @media screen and (min-width:768px) {
    height: size(1080);
    background: url(@/section/s1/bg.webp);
    
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
    width: size-m(170);
    top: size-m(125);
    left: size-m(100);
    z-index: 10;
    @media screen and (min-width:768px) {
      width: size(1195);
      top: size(147);
      left: size(362);
    }
  }
  .light1 {
    width: size-m(110);
    top: size-m(225);
    left: size-m(153);
    z-index: 11;
    mix-blend-mode: screen;
    @media screen and (min-width:768px) {
      width: size(168);
      top: size(417);
      left: size(765);
    }
  }
  .light2 {
    width: size-m(160);
    top: size-m(265);
    left: size-m(173);
    z-index: 11;
    mix-blend-mode: screen;
    @media screen and (min-width:768px) {
      width: size(289);
      top: size(427);
      left: size(855);
    }
  }

  .light1,.light2{
    transform: rotate(1turn);
    transform-origin: 50% 50%;
    animation: c1 8s linear infinite;
  }
  
  @keyframes c1 {
    to {
    transform: rotate(-1turn);
    }
  }


  .title {
    width: size-m(260);
    top: size-m(540);
    left: size-m(58);
    z-index: 10;
    @media screen and (min-width:768px) {
      width: size(872);
      top: size(823);
      left: size(524);
    }
  }

  .t2 {
    width: size-m(203);
    top: size-m(25);
    right: size-m(95);
    left: 10;
    @media screen and (min-width:768px) {
      width: size(324);
      top: size(36);
      left: size(37);
    }
  }

  .mask {
    width: size-m(400);
    bottom: size-m(69);
    right: size-m(0);
    z-index: 2;
    @media screen and (min-width:768px) {
      width: size(1373);
      bottom: size(0);
      right: size(249);
    }
  }

  .style1,
  .style2 {
    width: size-m(375);
    bottom: size-m(300);
    right: size-m(0);
    z-index: 1;
    transform-origin: 50% 100%;
    transform: translateX(size-m(-667));  
    animation: sty 10s linear infinite;
    opacity: .8;
    @media screen and (min-width:768px) {
      width: size(1920);
      bottom: size(0);
      right: size(0);
      transform: translateX(-100%);
      animation: stypc 20s linear infinite;
    }
    
  }

  .style2{ 
    animation-delay: 5s;

    @media screen and (min-width:768px) {
      animation-delay: 10s;
    }
    }

  @keyframes sty {
  to {
    transform: translateX(size-m(667));
  }
}

@keyframes stypc {
  to {
    transform: translateX(100%);
  }
}



}

</style>