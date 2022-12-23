<template>
  <section class="s1 text-white relative">
    <div class="leafstyle">
      <img class="leaf1" src="@/section/s1/leaf1.png" />		
      <img class="leaf2" src="@/section/s1/leaf2.png" />		
    </div>
    <img class="train" src="@/section/s1/train.png" />
    <div class="main">
      <div class="floorstyle">
        <img class="floor" src="@/section/s1/floor.png" />	
        <img class="shadow" src="@/section/s1/shadow.png" />		
      </div>
      <img class="child" src="@/section/s1/child.png" />
    </div>
    
    <img class="logo absolute" data-aos="zoom-in" data-aos-delay="200" src="@/section/s1/logo.svg" />
    <div class="t1 absolute" data-aos="zoom-in" data-aos-delay="200">竹圍下一站 雙北3字頭</div>
    <div class="t2 absolute" data-aos="zoom-in" data-aos-delay="200">2房價換大3房 / 幸福有餘裕</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes tree1{
  to {
    transform:skew(-5deg);
  }
}
@keyframes tree2{
  to {
    transform:skew(-2deg);
  }
}
@keyframes train{
  to {
    transform:translate(0px, 0%);
  }
}

.s1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  overflow: hidden;
  background: url(@/section/s1/bg.jpg) center;
  // background-size: 100% auto;

  img {
    max-width: none;
  }

  .leaf1{
    // z-index: 1;
    position: absolute;
    width: size(1176);
    left: size(-195);
    bottom: size(-300);
    animation: tree1 5s ease-in-out alternate infinite;
    transform-origin: 0% 100%;
    transform: skew(5deg);
  }
  .leaf2{
    // z-index: 1;
    position: absolute;
    width: size(1428);
    bottom: size(-90);
    left: size(-140);
    animation: tree2 3s ease-in-out alternate infinite;
    transform-origin: 0% 100%;
    transform: skew(2deg);
  }

  .main{
    position: absolute;
    bottom: size(0);
    width: size(1920);
    .child{
      // z-index: 10;
      position: absolute;
      width: size(380);
      bottom: size(55);
      left: size(410);
    }
    .shadow{
      // z-index: 5;
      position: absolute;
      width: size(446);
      bottom: size(30);
      left: size(320);
      mix-blend-mode: multiply;
    }
    .floor{
      // z-index: 3;
      position: absolute;
      width: size(1920);
      bottom: size(0);
      left: size(0);
      right: size(0);
    }
  }
  .train{
    // z-index: 2;
    position: absolute;
    width: size(2533);
    bottom: size(140);
    right: size(-1330);
    transform: translate(100%, 0%);
    animation: train 3s ease-out forwards;
    transform-origin: 0% 100%;
  }
  .logo {
    width: size(523);
    top: size(204);
    left: size(974.73);
  }
  .t1 {
    font-family: 'Noto Serif TC';
    font-size: size(67);
    line-height: size(79);
    color: #000;
    font-weight: 700;
    letter-spacing: 0.005em;
    top: size(362);
    left: size(908);
  }
  .t2 {
    font-family: 'Noto Serif TC';
    font-size: size(48);
    line-height: size(57);
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.005em;
    top: size(970);
    left: size(1286);
  }
}

@media screen and (max-width: 767px) {
  .s1 {
    min-height: size-m(667);
    max-height: size-m(812);
    height:100vh;
    background: url(@/section/s1/bg-m.jpg) top center;
    background-size:100% ;

    .leaf1{
      width:size-m(417);
      left: size-m(-117);
      bottom: size-m(-20);
    }
    .leaf2{
      width:size-m(506);
      bottom: size-m(55);
      left: size-m(-95);
    }
    .main{
    width: size-m(375);
    .child{
      width: size-m(160);
      bottom: size-m(85);
      left: size-m(30);
    }
    .shadow{
      width: size-m(190);
      bottom: size-m(75);
      left: size-m(0);
    }
    .floor{
      width: auto;
      height: size-m(159);
      left: size-m(-150);
    }
    }
    .train{
      width: size-m(672);
      bottom: size-m(130);
      right: size-m(-280);
    }
    .logo {
      width: size-m(203.78);
      top: size-m(78);
      left: size-m(86);
    }
    .t1 {
      font-size: size-m(30);
      line-height: size-m(35.4);
      top: size-m(160);
      left: size-m(39);
    }
    .t2 {
      font-size: size-m(23);
      line-height: size-m(27);
      top: size-m(205);
      left: size-m(48);
      color: #000;
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
