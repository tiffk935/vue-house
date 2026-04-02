<template>
  <section class="s5 user-n w-full relative bg-[#F3DCC5]">
    <img class="title block" src="@/section/s5/title.png" data-aos="zoom-in" data-aos-duration="1000"
      data-aos-delay="0" />

    <div class="slider relative">
      <div class="slides">
        <div class="slide">
          <img src="@/section/s5/img.webp" @load="onImgLoad()" />
        </div>
        <div class="slide">
          <img src="@/section/s5/img.webp" />
        </div>
      </div>
    </div>

    <img class="title2 block" src="@/section/s5/title2.png" data-aos="zoom-in" data-aos-duration="1000"
      data-aos-delay="0" />

    <div class="txt">
      從亞果遊艇會，15分鐘到北外環快速道路，<br class="md:hidden">
      連結安平區與國道一號，交通新動脈。
    </div>

    <img class="map block" src="@/section/s5/map.webp" />
    <img class="info block md:hidden" src="@/section/s5/info-m.png" />
    <img class="info hidden md:block" src="@/section/s5/info.png" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  padding: size-m(60) 0;
  font-weight: 300;
  font-size: size-m(14);
  line-height: size-m(24);

  @media screen and (min-width:768px) {
    padding: size(146) 0 size(126) 0;
    font-size: size(24);
    line-height: size(40);
  }

  .title {
    width: size-m(311);
    margin: 0 auto size-m(50) auto;

    @media screen and (min-width:768px) {
      width: size(495);
      margin: 0 auto size(115) auto;
    }
  }

  .slider {
    height: size-m(200);
    margin: 0 0 size-m(60) 0;

    @media screen and (min-width:768px) {
      height: size(528);
      margin: 0 0 size(174) 0;
    }

    .slides {
      display: inline-flex;
      position: relative;
      height: 100%;

      img {
        display: block;
        height: 100%;
        max-width: none;
      }
    }
  }

  .title2 {
    width: size-m(311);
    margin: 0 auto size-m(20) auto;

    @media screen and (min-width:768px) {
      width: size(390);
      margin: 0 auto size(30) auto;
    }
  }

  .txt {
    text-align: center;
    margin: 0 auto size-m(30) auto;

    @media screen and (min-width:768px) {
      margin: 0 auto size(30) auto;
    }
  }

  .map {
    width: calc(100% - size-m(22));
    margin: 0 auto size-m(30) auto;

    @media screen and (min-width:768px) {
      width: calc(100% - size(39));
      margin: 0 auto size(67) auto;
    }
  }

  .info {
    width: calc(100% - size-m(10));
    margin: 0 auto;

    @media screen and (min-width:768px) {
      width: calc(100% - size(500));
    }
  }
}
</style>

<script setup>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

let startX = 0;
const v = 40; // 速率
let tl;
let imgLoaded = false;
let slideWidth = 0;

function createAnimation() {
  if (!imgLoaded) return;

  if (tl) {
    tl.kill();
    tl = null;
  }

  startX = 0;

  tl = gsap.timeline({
    // paused: true,
    onComplete: () => {
      tl.restart();
    },
    onReverseComplete: () => {
      tl.seek(tl.duration());
    }
  });

  setTimeout(() => {
    const duration = document.querySelector('.s5 .slides img').clientWidth / v;

    tl
      .set('.s5 .slides', { xPercent: 0 })
      .to('.s5 .slides', {
        xPercent: -50,
        duration: duration,
        ease: 'none'
      });

    // .set('.s5 .slides', { left: 0 })
    // .to('.s5 .slides', {
    //   left: () => {
    //     const w = document.querySelector('.s5 .slides img').clientWidth;
    //     return -w + 'px';
    //   },
    //   duration: duration,
    //   ease: 'none'
    // });
  }, 0);
}

window.addEventListener('resize', () => {
  if (!imgLoaded) return;
  if (parseInt(document.querySelector('.s5 .slides img').clientWidth) === parseInt(slideWidth)) return;

  createAnimation();
});

function onImgLoad() {
  imgLoaded = true;
  slideWidth = document.querySelector('.s5 .slides img').clientWidth;

  createAnimation();

  Draggable.create(".s5 .slider", {
    type: "x",
    liveSnap: { x: () => 0 }, // 鎖住位置
    onPress: function () {
      tl.pause();
      startX = this.pointerX;
    },
    onRelease: function () {
      if (tl.reversed()) {
        tl.reverse();
      } else {
        tl.play();
      }
    },
    onDrag: function () {
      const deltaX = this.pointerX - startX;

      if (Math.abs(deltaX) > 1) {
        if (deltaX > 0) { // right
          // console.log('right');

          tl.reverse();
        } else { // left
          // console.log('left');
          tl.play();
        }
      }
    }
  });
}
</script>