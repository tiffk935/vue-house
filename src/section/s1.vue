<template>
  <section class="s1 relative">
    <img class="md:hidden w-full" src="@/section/s1/bg-m.jpg" />
    <img class="hidden md:block w-full" src="@/section/s1/bg.jpg" />
    <img class="tree1 absolute" src="@/section/s1/backtree.png" />
    <img class="tree2 absolute" src="@/section/s1/backtree.png" />
    <img class="tree3 absolute" src="@/section/s1/backtree.png" />
    <img class="car absolute" src="@/section/s1/car.png" />
    <img class="tree4 absolute" src="@/section/s1/fronttree1.png" />
    <img class="treepc absolute hidden md:block" src="@/section/s1/fronttree2.png" />
    <img class="tree5 absolute" src="@/section/s1/fronttree3.png" />
    <img class="tree6 absolute" src="@/section/s1/fronttree2.png" />
    <img class="tree7 absolute" src="@/section/s1/fronttree3.png" />
    <img class="tree8 absolute" src="@/section/s1/fronttree2.png" />
    <img class="tree9 absolute" src="@/section/s1/fronttree3.png" />
    <img class="vec1 absolute md:hidden" src="@/section/s1/vec1-m.svg" />
    <img class="vec1 absolute hidden md:block" src="@/section/s1/vec1.svg" />
    <img class="vec2 absolute md:hidden" src="@/section/s1/vec2-m.svg" />
    <img class="vec2 absolute hidden md:block" src="@/section/s1/vec2.svg" />
    <img class="logo absolute" src="@/section/s1/logo.svg" />
    <div class="rect absolute md:hidden"></div>
    <img class="t1 absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/t1.svg" />
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">
      2萬坪明德新村綠河<br>
      左營大道轉身，輕步收藏靜地<br>
      用照顧的心意，打開家的新意
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  @media screen and (min-width:768px) {
    
  }

  .tree1 {
    top: size-m(-89);
    left: size-m(-247);
    width: size-m(464.38);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-505);
      left: size(-932);
      width: size(1925);
    }
  }

  .tree2 {
    top: size-m(99.14);
    left: size-m(-56);
    width: size-m(261.92);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-270);
      left: size(-217);
      width: size(1234);
    }
  }

  .tree3 {
    top: size-m(20);
    left: size-m(52);
    width: size-m(261.92);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(121);
      left: size(485);
      width: size(696);
    }
  }

  .car {
    top: size-m(295.2);
    left: size-m(110.22);
    width: size-m(164.845);
    transform: rotate(-15.062deg);
    @media screen and (min-width:768px) {
      top: size(711.19);
      left: size(508.84);
      width: size(622.24);
    }
  }

  .tree4 {
    top: size-m(-164);
    left: size-m(77);
    width: size-m(369);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-606);
      left: size(-534);
      width: size(1150);
    }
  }

  .tree5 {
    top: size-m(-133);
    left: size-m(106.57);
    width: size-m(443.67);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-379);
      left: size(713);
      width: size(1199);
    }
  }

  .tree6 {
    top: size-m(-60.84);
    left: size-m(118.78);
    width: size-m(443.67);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-184);
      left: size(746);
      width: size(1199);
    }
  }

  .tree7 {
    top: size-m(830);
    left: size-m(-304);
    width: size-m(565);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(2905);
      left: size(-20);
      width: size(1366);
    }
  }

  .tree8 {
    top: size-m(478);
    left: size-m(206);
    width: size-m(337.71);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(1288);
      left: size(952);
      width: size(1150);
    }
  }

  .tree9 {
    top: size-m(772);
    left: size-m(228);
    width: size-m(340.64);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(2231);
      left: size(1245);
      width: size(1160);
    }
  }

  .treepc {
    @media screen and (min-width:768px) {
      top: size(-577);
      left: size(960);
      width: size(1925);
    }
  }

  .vec1 {
    max-width: none;
    width: size-m(448);
    top: size-m(-3);
    left: size-m(-32);
    mix-blend-mode: multiply;
    @media screen and (min-width:768px) {
      width: size(1426);
      top: size(3);
      left: size(247);
    }
  }

  .vec2 {
    max-width: none;
    width: size-m(475);
    top: size-m(88);
    left: size-m(-40);
    mix-blend-mode: multiply;
    @media screen and (min-width:768px) {
      width: size(1426);
      top: size(321);
      left: size(247);
    }
  }

  .logo {
    width: size-m(228);
    top: size-m(59);
    left: size-m(72);
    filter: drop-shadow(size-m(0) size-m(0) size-m(2) #000);
    @media screen and (min-width:768px) {
      width: size(721.9);
      top: size(190);
      left: size(599);
      filter: drop-shadow(size(0) size(0) size(2) #000);
    }
  }

  .rect {
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(677);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
  }

  .t1 {
    top: size-m(732);
    left: size-m(33);
    width: size-m(39);
    filter: drop-shadow(size-m(0) size-m(0) size-m(1) #0000001c);
    @media screen and (min-width:768px) {
      top: size(2040);
      left: size(93);
      width: size(82.56);
    }
  }

  .t2 {
    top: size-m(992);
    left: size-m(33);
    color: #4D4D4D;
    font-family: 'Noto Serif TC';
    font-size: size-m(17);
    font-weight: 700;
    line-height: size-m(33);
    @media screen and (min-width:768px) {
      top: size(2637);
      left: size(91);
      font-size: size(37);
      line-height: size(93);
    }
  }
}
</style>

<script setup>
</script>