<template>
  <section class="s9 user-n w-full relative">
    <div class="cir1 absolute"></div>
    <div class="cir2 absolute"></div>
    <div class="cir3 absolute hidden md:block"></div>
    <div class="cir4 absolute hidden md:block"></div>
    <div class="t1">日系精工輕豪宅<br class="md:hidden"><span class="hidden md:inline">　</span>超完美千坪基地</div>
    <div class="t2 font-['Noto_Sans_TC']">預算有限，空間無限！「日進學」讓你買得更大、住得更好！出門就是雙語校園，蘆洲捷運只要5分鐘，日系精工美學建築，27項全齡化優質公設，生活中所有美好想像，「日進學」通通幫你實現，晉級有房人生，圓夢趁現在！</div>
    <div class="info absolute">建物3D透視</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  background: #2A3257;
  height: size-m(667);
  color: #FFF;
  padding: size-m(60) size-m(32) 0 size-m(32);
  background-image: url(@/section/s9/bg.jpg);
  background-size: size-m(841) auto;
  background-position: size-m(-232) bottom;
  background-repeat: no-repeat;
  @media screen and (min-width:768px) {
    height: size(1080);
    padding: size(118) size(367) 0 size(367);
    background-size: cover;
    background-position: left bottom;
  }

  .t1 {
    text-align: center;
    font-size: size-m(28);
    font-weight: 700;
    line-height: 123%;
    letter-spacing: .05em;
    margin-bottom: size-m(23);
    @media screen and (min-width:768px) {
      font-size: size(62);
      margin-bottom: size(27);
    }
  }

  .t2 {
    text-align: justify;
    font-size: size-m(14);
    line-height: 180%;
    letter-spacing: .05em;
    @media screen and (min-width:768px) {
      font-size: size(20);
    }
  }

  .info {
    bottom: size-m(1);
    left: size-m(10);
    color: #FFF;
    text-shadow: 0px 0px size-m(3) rgba(0, 0, 0, 0.50);
    font-family: "Noto Sans TC";
    font-size: size-m(12);
    line-height: 180%;
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .cir1 {
    top: size-m(-10);
    right: size-m(61.5);
    width: size-m(36);
    height: size-m(36);
    border-radius: 50%;
    background: linear-gradient(135deg, #F65337 28.79%, #D12353 85.35%);
    transform: translateY(-5vw);
    animation: ball 7s ease-in-out 0s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(-14);
      right: size(573);
      width: size(57);
      height: size(57);
      transform: translateY(3vw);
    }
  }

  .cir2 {
    top: size-m(280);
    right: size-m(-11);
    width: size-m(72);
    height: size-m(72);
    border-radius: 50%;
    background: linear-gradient(135deg, #F65337 28.79%, #D12353 85.35%);
    opacity: 0.5;
    transform: translateY(5vw);
    animation: ball 7s ease-in-out -1s infinite alternate-reverse;
    @media screen and (min-width:768px) {
      top: size(88);
      right: size(154);
      width: size(94);
      height: size(94);
      transform: translateY(5vw);
    }
  }

  .cir3 {
    top: size(76);
    left: size(43);
    width: size(87);
    height: size(87);
    border-radius: 50%;
    background: linear-gradient(135deg, #E50012 14.65%, #7E151A 85.36%);
    transform: translateY(5vw);
    animation: ball 7s ease-in-out -2s infinite alternate-reverse;
  }

  .cir4 {
    top: size(132);
    left: size(370);
    width: size(43);
    height: size(43);
    border-radius: 50%;
    background: linear-gradient(135deg, #E50012 14.65%, #7E151A 85.36%);
    transform: translateY(2vw);
    animation: ball 7s ease-in-out -3s infinite alternate-reverse;
  }
}
</style>

<script setup>
</script>