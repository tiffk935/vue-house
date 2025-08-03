<template>
  <section class="s2 user-n w-full relative">
    <div class="slider">
      <div class="slides">
        <div class="slide">
          <img src="@/section/s2/img.jpg" />
        </div>
        <div class="slide">
          <img src="@/section/s2/img.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  height: size-m(520);
  @media screen and (min-width:768px) {
    height: size(520);
  }

  .slider {
    height: 100%;
  }

  .slides {
    display: inline-flex;
    position: relative;
    height: 100%;
  }

  img {
    display: block;
    height: 100%;
    max-width: none;
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";    
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

let startX = 0;
const v = 40; // 速率
let tl;

function createAnimation() {
  if (tl) {
    tl.kill();
    tl = null;
  }

  startX = 0;

  tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      tl.restart();
    },
    onReverseComplete: () => {
      tl.seek(tl.duration());
    }
  });

  setTimeout(() => {
    const duration = document.querySelector('.s2 .slides img').clientWidth / v;

    tl
      .set('.s2 .slides', { left: 0 })
      .to('.s2 .slides', {
        left: () => {
          const w = document.querySelector('.s2 .slides img').clientWidth;
          return -w + 'px';
        },
        duration: duration,
        ease: 'none'
      });

    window.tl = tl;
  }, 0);
}

onMounted(() => {
  createAnimation();
  window.addEventListener('resize', () => {
    console.log('resize');
    
    createAnimation();
  });

  
  Draggable.create(".s2 .slider", {
    type: "x",
    liveSnap: { x: () => 0 }, // 鎖住位置
    onPress: function () {
      tl.pause();
      startX = this.pointerX;
    },
    onRelease: function() {
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
          console.log('right');
          
          tl.reverse();
          // isReverse = true;
        } else { // left
          console.log('left');
          tl.play();
          // isReverse = false;
        }
      }
    }
  });
});
</script>