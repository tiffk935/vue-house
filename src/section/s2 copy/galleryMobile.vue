<template>
  <div class="galleryM md:hidden">
    <div class="grid grid1"></div>
    <div class="grid grid2"></div>
    <div class="grid grid3"></div>
    <div class="grid grid4"></div>
    <div class="grid grid5"></div>
    <div class="grid grid6"></div>
    <div class="grid grid7"></div>
    
    <div class="grid grid1"></div>
    <div class="grid grid2"></div>
    <div class="grid grid3"></div>
    <div class="grid grid4"></div>
    <div class="grid grid5"></div>
    <div class="grid grid6"></div>
    <div class="grid grid7"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.galleryM {
  // background: #eee;
  width: size-m(375);
  height: size-m(310);
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
    width: size-m(132.58);
    height: size-m(130.83);
    top: size-m(0);
    background-image: url(@/section/s2/08.jpg);
  }

  .grid2 {
    width: size-m(295.04);
    height: size-m(195.46);
    top: size-m(114.54);
    background-image: url(@/section/s2/07.jpg);
  }

  .grid3 {
    width: size-m(235.82);
    height: size-m(174.97);
    top: size-m(33.1);
    background-image: url(@/section/s2/06.jpg);
  }

  .grid4 {
    width: size-m(179.75);
    height: size-m(177.07);
    top: size-m(119.8);
    background-image: url(@/section/s2/05.jpg);
  }

  .grid5 {
    width: size-m(159.31);
    height: size-m(83.54);
    top: size-m(0);
    background-image: url(@/section/s2/04.jpg);
  }

  .grid6 {
    width: size-m(298.71);
    height: size-m(169.71);
    top: size-m(119.8);
    background-image: url(@/section/s2/03.jpg);
  }
  
  .grid7 {
    width: size-m(169.27);
    height: size-m(131.36);
    top: size-m(33.63);
    background-image: url(@/section/s2/02.jpg);
  }
}
</style>

<script setup>
import { gsap } from "gsap";
import { onMounted, nextTick } from 'vue';

onMounted(() => {
  nextTick(() => {
    const gridsInfo = [
      {w: 132.58, x: 0},
      {w: 295.04, x: 89.09},
      {w: 235.82, x: 332.24},
      {w: 179.75, x: 525.09},
      {w: 159.31, x: 673.92},
      {w: 298.71, x: 750.43},
      {w: 169.27, x: 996.73},
    ];
    const x = 100 * 132.58 / 375 + 100;
    const s = 15;
    const v = x/s;
    let g7Enter = false;
    let g14Enter = false;

    const tl = gsap.timeline({repeat: 0, defaults: {ease: "none"}});
    for(let i=0; i<7; i++){
      const grid = document.querySelectorAll('.galleryM .grid')[i];
      const x = (100 * gridsInfo[i].w / 375) + 100;
      const d = x/v;
      const s = (100 * gridsInfo[i].x / 375) / v;
      tl.to(grid, {
        x: -x + 'vw', 
        duration: d,
        onUpdate: function() {
          const per = 100 - this.progress() * 100;
          const grid = document.querySelectorAll('.galleryM .grid')[i];
          gsap.set(grid, {'backgroundPosition': per + '% 50%'})

          if(i == 6) {
            const grid7EnterTime = (100 * 169.27 / 375) / v;
            const du = this.progress() * d;
            if(du >= grid7EnterTime && !g7Enter) {
              g7Enter = true;
              tl2.restart();
            }
          }
        },
        onComplete: function() {
          if(i == 6) {
            g7Enter = false;
          }
        },
      }, s);
    }

    const tl2 = gsap.timeline({repeat: 0, defaults: {ease: "none"}, paused: true});
    for(let i=7; i<14; i++){
      const grid = document.querySelectorAll('.galleryM .grid')[i];
      const x = (100 * gridsInfo[i-7].w / 375) + 100;
      const d = x/v;
      const s = (100 * gridsInfo[i-7].x / 375) / v;
      tl2.to(grid, {
        x: -x + 'vw', 
        duration: d,
        onUpdate: function() {
          const per = 100 - this.progress() * 100;
          const grid = document.querySelectorAll('.galleryM .grid')[i];
          gsap.set(grid, {'backgroundPosition': per + '% 50%'})

          if(i == 13) {
            const grid14EnterTime = (100 * 169.27 / 375) / v;
            const du = this.progress() * d;
            if(du >= grid14EnterTime && !g14Enter) {
              g14Enter = true;
              tl.restart();
            }
          }
        },
        onComplete: function() {
          if(i == 13) {
            g14Enter = false;
          }
        },
      }, s);
    }

    tl.seek(11);
  })
})
</script>