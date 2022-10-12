<template>
  <section class="s1 relative">
    <img class="bg absolute hidden md:block" src="@/section/s1/bg.jpg" alt="清景麟國家公園" />
    <img class="tree1 absolute hidden md:block" src="@/section/s1/tree1.png" alt="清景麟國家公園" />
    <img class="bg absolute md:hidden" src="@/section/s1/bg-m.jpg" alt="清景麟國家公園" />
    <img class="tree1 absolute md:hidden" src="@/section/s1/tree1-m.png" alt="清景麟國家公園" />

    <img data-aos="fade-up" data-aos-delay="0" class="title absolute hidden md:block" src="@/section/s1/title.png" alt="清景麟國家公園" />
    <img data-aos="fade-up" data-aos-delay="0" class="title absolute md:hidden" src="@/section/s1/title-m.png" alt="清景麟國家公園" />
    <img data-aos="fade-up" data-aos-delay="500" class="subtitle absolute hidden md:block" src="@/section/s1/subtitle.svg" alt="清景麟國家公園" />
    <img data-aos="fade-up" data-aos-delay="500" class="subtitle absolute md:hidden" src="@/section/s1/subtitle-m.svg" alt="清景麟國家公園" />
    <!--
    <img class="bubble1 absolute" src="@/section/s1/bubble.png" alt="清景麟國家公園" />
    <img class="bubble2 absolute" src="@/section/s1/bubble.png" alt="清景麟國家公園" />
    <img class="bubble3 absolute" src="@/section/s1/bubble.png" alt="清景麟國家公園" />
    <img class="bubble4 absolute" src="@/section/s1/bubble.png" alt="清景麟國家公園" />
    <img class="bubble5 absolute hidden md:block" src="@/section/s1/bubble.png" alt="清景麟國家公園" />
    <img class="bubble6 absolute hidden md:block" src="@/section/s1/bubble.png" alt="清景麟國家公園" />
    -->
    <!--img class="light absolute" src="@/section/s1/light.png" alt="清景麟國家公園" /-->
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

  .title {
    width: size-m(310);
    top: size-m(138.98);
    left: size-m(33);
    @media screen and (min-width:768px) {
      width: size(904);
      top: size(225);
      left: size(507.42);
    }
  }

  .subtitle {
    width: size-m(300);
    top: size-m(380);
    left: size-m(35);
    @media screen and (min-width:768px) {
      width: size(750);
      top: size(900.36);
      left: size(570);
    }
  }

  .bubble1 {
    width: size-m(84);
    left: size-m(-27);
    top: size-m(317);
    animation: floatY 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(203);
      left: size(152);
      top: size(350);
    }
  }

  .bubble2 {
    width: size-m(82);
    left: size-m(141);
    top: size-m(479);
    animation: floatY2 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(135);
      left: size(1411);
      top: size(641);
    }
  }

  .bubble3 {
    width: size-m(30);
    left: size-m(328);
    top: size-m(462);
    animation: floatY 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(78);
      left: size(1479);
      top: size(379);
    }
  }

  .bubble4 {
    width: size-m(139);
    left: size-m(285);
    top: size-m(57);
    animation: floatY 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(54);
      left: size(1703);
      top: size(513);
      animation: floatY 2s alternate-reverse infinite ease-in-out;
    }
  }

  .bubble5 {
    @media screen and (min-width:768px) {
      width: size(100);
      left: size(560);
      top: size(735.31);
      transform: rotate(120deg);
      animation: floatY3 3s alternate-reverse infinite ease-in-out;
    }
  }

  .bubble6 {
    @media screen and (min-width:768px) {
      width: size(55);
      left: size(635);
      top: size(633);
      animation: floatY2 2s alternate-reverse infinite ease-in-out;
    }
  }

  .light {
    width: size-m(438);
    left: size-m(-92);
    top: size-m(-59);
    mix-blend-mode: lighten;
    transform-origin: 35% 45%;
    transform: rotate(45deg);
    animation: skew 6s linear infinite alternate;
    @media screen and (min-width:768px) {
      width: size(628);
      left: size(332);
      top: size(-108);
    }
  }
}

</style>