<template>
  <section class="s9 user-n w-full relative">
    <div class="t1">日系精工輕豪宅<br class="md:hidden"><span class="hidden md:inline">　</span>超完美千坪基地</div>
    <div class="t2 font-['Noto_Sans_TC']">預算有限，空間無限！「日進學」讓你買得更大、住得更好！出門就是雙語校園，蘆洲捷運只要5分鐘，日系精工美學建築，27項全齡化優質公設，生活中所有美好想像，「日進學」通通幫你實現，晉級有房人生，圓夢趁現在！</div>
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
}
</style>

<script setup>
</script>