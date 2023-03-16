<template>
  <div class="gallery hidden md:block">
    <div class="grid grid1"></div>
    <div class="grid grid2"></div>
    <div class="grid grid3"></div>
    <div class="grid grid4"></div>
    <div class="grid grid5"></div>
    <div class="grid grid6"></div>
    <div class="grid grid7"></div>
    <div class="grid grid8"></div>
    
    <div class="grid grid1"></div>
    <div class="grid grid2"></div>
    <div class="grid grid3"></div>
    <div class="grid grid4"></div>
    <div class="grid grid5"></div>
    <div class="grid grid6"></div>
    <div class="grid grid7"></div>
    <div class="grid grid8"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.gallery {
  // background: #eee;
  width: size(1920);
  height: size(590);
  position: relative;
  overflow: hidden;

  .grid {
    position: absolute;
    left: 100vw;
    background-color: #9F6262;
    background-size: auto 100%;
    background-position: 100% 50%;
    
    &:nth-child(odd) {
      background-color: #CC8787;
    }
  }

  .grid1 {
    width: size(253);
    height: size(249);
    top: size(0);
    background-image: url(@/section/s2/08.jpg);
  }

  .grid2 {
    width: size(563);
    height: size(372);
    top: size(218);
    background-image: url(@/section/s2/07.jpg);
  }

  .grid3 {
    width: size(450);
    height: size(333);
    top: size(63);
    background-image: url(@/section/s2/06.jpg);
  }

  .grid4 {
    width: size(343);
    height: size(337);
    top: size(228);
    background-image: url(@/section/s2/05.jpg);
  }

  .grid5 {
    width: size(304);
    height: size(159);
    top: size(0);
    background-image: url(@/section/s2/04.jpg);
  }

  .grid6 {
    width: size(570);
    height: size(323);
    top: size(228);
    background-image: url(@/section/s2/03.jpg);
  }
  
  .grid7 {
    width: size(323);
    height: size(250);
    top: size(64);
    background-image: url(@/section/s2/02.jpg);
  }
  
  .grid8 {
    width: size(199);
    height: size(213);
    top: size(367);
    background-image: url(@/section/s2/01.jpg);
  }
}
</style>

<script setup>
import { gsap } from "gsap";
import { onMounted, nextTick } from 'vue';

onMounted(() => {
  nextTick(() => {
    const gridsInfo = [
      {w: 253, x: 0},
      {w: 563, x: 170},
      {w: 450, x: 634},
      {w: 343, x: 1002},
      {w: 304, x: 1286},
      {w: 570, x: 1432},
      {w: 323, x: 1902},
      {w: 199, x: 2225},
    ];
    const x = 100 * 253 / 1920 + 100;
    const s = 30;
    const v = x/s;
    let g8Enter = false;
    let g16Enter = false;

    const tl = gsap.timeline({repeat: 0, defaults: {ease: "none"}});
    for(let i=0; i<8; i++){
      const grid = document.querySelectorAll('.gallery .grid')[i];
      const x = (100 * gridsInfo[i].w / 1920) + 100;
      const d = x/v;
      const s = (100 * gridsInfo[i].x / 1920) / v;
      tl.to(grid, {
        x: -x + 'vw', 
        duration: d,
        onUpdate: function() {
          const per = 100 - this.progress() * 100;
          const grid = document.querySelectorAll('.gallery .grid')[i];
          gsap.set(grid, {'backgroundPosition': per + '% 50%'})

          if(i == 7) {
            const grid8EnterTime = (100 * 199 / 1920) / v;
            const du = this.progress() * d;
            if(du >= grid8EnterTime && !g8Enter) {
              g8Enter = true;
              tl2.restart();
            }
          }
        },
        onComplete: function() {
          if(i == 7) {
            g8Enter = false;
          }
        },
      }, s);
    }

    const tl2 = gsap.timeline({repeat: 0, defaults: {ease: "none"}, paused: true});
    for(let i=8; i<16; i++){
      const grid = document.querySelectorAll('.gallery .grid')[i];
      const x = (100 * gridsInfo[i-8].w / 1920) + 100;
      const d = x/v;
      const s = (100 * gridsInfo[i-8].x / 1920) / v;
      tl2.to(grid, {
        x: -x + 'vw', 
        duration: d,
        onUpdate: function() {
          const per = 100 - this.progress() * 100;
          const grid = document.querySelectorAll('.gallery .grid')[i];
          gsap.set(grid, {'backgroundPosition': per + '% 50%'})

          if(i == 15) {
            const grid16EnterTime = (100 * 199 / 1920) / v;
            const du = this.progress() * d;
            if(du >= grid16EnterTime && !g16Enter) {
              g16Enter = true;
              tl.restart();
            }
          }
        },
        onComplete: function() {
          if(i == 15) {
            g16Enter = false;
          }
        },
      }, s);
    }

    tl.seek(27);
  })
})
</script>