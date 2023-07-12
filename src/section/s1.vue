<template>
  <section class="s1 relative">
    <img class="w-full bg" src="@/section/s1/bg.svg" >  
    <tree class="tree3"/>
    <tree class="tree2"/>
    <tree class="tree1"/>
    <tree class="tree4"/>
    <img class="car absolute" src="@/section/s1/car.png" />
    <tree class="tree5"/>
    <tree class="tree6"/>
    <tree class="treepc hidden md:block" />
    <tree class="tree7"/>
    <tree class="tree8"/>
    <tree class="tree9"/>
    <img class="vec1 absolute" src="@/section/s1/vec1.svg" />
    <img class="vec2 absolute" src="@/section/s1/vec1.svg" />
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
  background: url("@/section/s1/bg.jpg");
    background-size:size-m(450) auto;
  @media screen and (min-width:768px) {
    background-size:size(900) auto;
  }
.bg{height:size-m(1124);max-width: unset;width: auto;margin-left: -17%;

  @media screen and (min-width:768px) {
    height:auto;margin-left:0;
    width: 100%;
  }
}
.tree1{
    top: size-m(220);
    left: size-m(-129);
    width: size-m(252);
    @media screen and (min-width:768px) {
      top: size(790);
      left: size(-432);
      width: size(1030);
    }
}
.tree2{
    top: size-m(275);
    left: size-m(12);
    width: size-m(140);
    @media screen and (min-width:768px) {
    top: 29vw;
    left: 3.3vw;
    width: 34vw;
    }
}
  .tree3 {
    top: size-m(197);
    left: size-m(120);
    width: size-m(140);
    @media screen and (min-width:768px) {
      top: size(585);
      left: size(660);
      width: size(385);
    }
  }

  .car {
    top: 23%;
    left: 86%;
    width: size-m(160);
   // transform: rotate(-40deg);
    transform-origin: 50% 50%;
  //transform:  rotate(-52deg) translate(-202%, -130%) scale(-1.25, 1.25);
    animation: car_m 5s linear infinite;
    @media screen and (min-width:768px) {
    top: 10%;
    left: 86%;
    width: size(600);
    animation: car 7s linear infinite;
    
    }
  }

@keyframes car_m {
  0%{
  transform: rotate(0deg)translate(0%, 0%) scale(1);
  }
  30%{
  transform:rotate(-31deg) translate(-160%, -66%) scale(1.2);
  }
  44%{
    transform: rotate(-52deg) translate(-222%, -130%) scale(1.25);
  }
44.1%{
  transform:rotate(52deg) translate(-12%, 290%) scale(-1.25, 1.25);
  }
 100%{
  transform: rotate(52deg) translate(448%, 330%) scale(-1.8, 1.8);
  }
}

@keyframes car {
  0%{
  transform: rotate(-40deg)translate(0%, 0%) scale(1);
  }
  20%{
  transform:rotate(-9deg) translate(-115%, 36%) scale(1.1);
  }
  30%{
  transform: rotate(-20deg) translate(-210%, -1%) scale(1.1);
  }
  44%{
  transform: rotate(-40deg) translate(-265%, -97%) scale(1.12);
  }
44.1%{
  transform:rotate(50deg) translate(-25%, 353%) scale(-1.12, 1.12);
  }
 100%{
  transform:rotate(34deg) translate(287%, 448%) scale(-1.6, 1.6)
  }
}
  .tree4 {
    top: size-m(-143);
    left: size-m(185);
    width: size-m(190);
    transform: scaleY(-1);
    @media screen and (min-width:768px) {
    top: -27vw;
    left: 45vw;
    width: 32vw;
    }
  }


.tree5 {
  top: size-m(167);
  left: size-m(222);
  width: size-m(237);
  @media screen and (min-width:768px) {
    top: 26vw;
    left: 54vw;
    width: 30vw;
  }
}

.tree6 {
  top: size-m(236);
  left: size-m(210);
  width: size-m(240);
    transform: scaleX(-1);
  @media screen and (min-width:768px) {
    top: 33vw;
    left: 49vw;
    width: 32vw;
  }
}


.tree7 {
    top: 322vw;
    left: -42vw;
    width: 80.3vw;
  @media screen and (min-width:768px) {
    top: 199.2vw;
    left: 17.3vw;
    width: 38.3vw;
  }
}


.tree8 {
    top: 188vw;
    left: 73.5vw;
    width: 48vw;
    transform: scaleX(-1);
  @media screen and (min-width:768px) {
    top: 107.2vw;
    left: 61.9vw;
    width: 32.3vw;
  }
}

.tree9 {
    top: 267vw;
    left: 84vw;
    width: 48.5vw;
  @media screen and (min-width:768px) {
    top: 156.6vw;
    left: 80.4vw;
    width: 32.5vw;
  }
}

.treepc {
    @media screen and (min-width:768px) {
    top: 36.7vw;
    left: 70.5vw;
    width: 53vw;
    transform: scaleX(-1);
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
      top: size(-20);
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
      top: size(300);
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
import tree from './tree.vue';

</script>