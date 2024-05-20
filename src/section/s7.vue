<template>
  <section class="s7 relative">
    
    <div class="controls">
      <div class="btn-prev" @click="goPrev">
        <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
          <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
          <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
          <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
        </svg>
      </div>

      <div class="btn-next" @click="goNext">
        <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
          <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
          <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
          <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
        </svg>
      </div>
    </div>

    <div class="slider slider1" :style="{ 'z-index': 2 }">
      <div class="slide" :style="{ 'z-index': 2 }">
        <img src="https://placehold.jp/200/dd6699/ffffff/1920x1080.png?text=pic1">
      </div>
      <div class="slide">
        <img src="https://placehold.jp/200/D99B4C/ffffff/1920x1080.png?text=pic2">
      </div>
    </div>

    <div class="slider slider2" :style="{ 'z-index': 2 }">
      <div class="slide" :style="{ 'z-index': 2 }">
        <img src="https://placehold.jp/200/D99B4C/ffffff/1920x1080.png?text=pic2">
      </div>
      <div class="slide">
        <img src="https://placehold.jp/200/dd6699/ffffff/1920x1080.png?text=pic1">
      </div>
    </div>

    <div class="t1">仰山、謐水、綠層次 <br>水岸森林莊園</div>
    <div class="t2">達麗河藴凝鍊山、水、平原自然環境，成為景觀靈感元素。基地以樹列圍抱，形成森林莊園，留設內庭私院，摹寫山巒層疊、水波清流，陽明山裡的杜鵑、山櫻花、楓香…隨著季節變換色彩，散步林間小徑、閒坐花間，都市中難覓的森林自然逸趣渾然天成。</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s7 {
  width: 100%;
  padding: size-m(87) 0 size-m(49) 0;
  font-family: 'Noto Serif TC';
  @media screen and (min-width:768px) {
    height: size(1080);
    padding: 0;
  }

  .t1 {
    color: #002B69;
    font-size: size-m(18);
    line-height: size-m(26);
    letter-spacing: .07em;
    font-weight: 700;
    padding: 0 size-m(52.5);
    margin-bottom: size-m(11);
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(580.48);
      left: size(148);
      font-size: size(40);
      line-height: size(57);
      padding: 0;
      margin-bottom: 0;
    }
  }

  .t2 {
    color: #000;
    font-size: size-m(14);
    line-height: 170%;
    font-weight: 700;
    padding: 0 size-m(52.5);
    margin-bottom: size-m(47.5);
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(723.97);
      left: size(148);
      font-size: size(20);
      padding: 0;
      margin-bottom: 0;
      width: size(513);
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
    width: size-m(270);
    margin: 0 auto size-m(23.5) auto;
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(154);
      left: size(148);
      width: size(1626);
      margin: 0;
    }

    .btn-prev, .btn-next {
      cursor: pointer;
      z-index: 1;

      .arrow-icon {
        width: size-m(35);
        transition: transform ease-in-out 0.2s;
        vertical-align: middle;
        @media screen and (min-width:768px) {
          width: size(50);
        }
        .cir {
          stroke-dasharray: 162;
          stroke-dashoffset: 162;
          transition: stroke-dashoffset ease-in-out 0.5s;
          fill: rgba(255, 255, 255, .5);
        }
        .arrow {
          transform: translateX(0%);
          opacity: 1;
        }
        &:hover {
          transform: scale(1);
          .cir {
            stroke-dashoffset: 0;
          }
          .arrow {
            animation: arrow ease-in-out 0.5s;
          }
        }
        @keyframes arrow {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          30% {
            transform: translateX(30%);
            opacity: 0;
          }
          31% {
            transform: translateX(-30%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
      }
    }

    .btn-prev {
      transform: rotate(180deg);
    }
  }

  .slider {
    position: relative;
    width: 100%;
    height: size-m(218.11);
    background: #ddd;
    overflow: hidden;
    margin-bottom: size-m(28.31);
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(260);
      left: size(806);
      width: size(970);
      height: size(620);
      margin-bottom: 0;
    }

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    }
  }

  .slider2 {
    width: size-m(136);
    height: size-m(86.65);
    margin-bottom: size-m(39.83);
    margin-left: size-m(52.5);
    @media screen and (min-width:768px) {
      width: size(350);
      height: size(233);
      margin-bottom: 0;
      margin-left: 0;
      position: absolute;
      top: size(260);
      left: size(148);
    }

    .slide .txt {
      top: auto;
      right: auto;
      bottom: size-m(2);
      left: size-m(8);
      @media screen and (min-width:768px) {
        bottom: size(5);
        left: size(10);
      }
    }
  }
}

</style>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";
const currentSlide = ref(0);
let animating = false;

function goNext() {
  let currIdx = currentSlide.value;
  let nextIdx;
  
  currentSlide.value++;

  if ( currentSlide.value === document.querySelectorAll('.s7 .slider1 .slide').length ) {
    currentSlide.value = 0;
  }

  nextIdx = currentSlide.value;

  const tl = setTimeline(currIdx, nextIdx);
  tl.play();
}

function goPrev() {
  let currIdx = currentSlide.value;
  let nextIdx;
  
  currentSlide.value--;

  if ( currentSlide.value === -1 ) {
    currentSlide.value = document.querySelectorAll('.s7 .slider1 .slide').length - 1;
  }

  nextIdx = currentSlide.value;

  const tl = setTimeline2(currIdx, nextIdx);
  tl.play();
}

function setTimeline(currIdx, nextIdx) {
  animating = true;
  const nextEL1 = document.querySelectorAll('.s7 .slider1 .slide')[nextIdx];
  const currEL1 = document.querySelectorAll('.s7 .slider1 .slide')[currIdx];
  const nextEL2 = document.querySelectorAll('.s7 .slider2 .slide')[nextIdx];
  const currEL2 = document.querySelectorAll('.s7 .slider2 .slide')[currIdx];
  const tl = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;
    }
  }, 0);

  tl.set('.s7 .slider1 .slide', { zIndex: 0 }, 0);
  tl.set(currEL1, { zIndex: 1 }, 0);
  tl.set(nextEL1, { clipPath: 'polygon(160% 0, 100% 0, 100% 100%, 100% 100%)', scale: 1.1, rotation: 1, zIndex: 2 }, 0);
  tl.to(nextEL1, { clipPath: 'polygon(-30% 0, 100% 0, 100% 100%, -30% 100%)', duration: 1, ease: "power3.out" }, 0);
  tl.to(nextEL1, { scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }, 0);
  tl.set(currEL2, { zIndex: 1 }, 0);
  tl.set(nextEL2, { clipPath: 'polygon(160% 0, 100% 0, 100% 100%, 100% 100%)', scale: 1.1, rotation: 1, zIndex: 2 }, 0);
  tl.to(nextEL2, { clipPath: 'polygon(-30% 0, 100% 0, 100% 100%, -30% 100%)', duration: 1, ease: "power3.out" }, 0);
  tl.to(nextEL2, { scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }, 0);

  return tl;
}

function setTimeline2(currIdx, nextIdx) {
  animating = true;
  const nextEL1 = document.querySelectorAll('.s7 .slider1 .slide')[nextIdx];
  const currEL1 = document.querySelectorAll('.s7 .slider1 .slide')[currIdx];
  const nextEL2 = document.querySelectorAll('.s7 .slider2 .slide')[nextIdx];
  const currEL2 = document.querySelectorAll('.s7 .slider2 .slide')[currIdx];
  const tl = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;
    }
  }, 0);

  tl.set('.s7 .slider1 .slide', { zIndex: 0 }, 0);
  tl.set(currEL1, { zIndex: 1 }, 0);
  tl.set(nextEL1, { clipPath: 'polygon(0 0, 0% 0, 0% 100%, -30% 100%)', scale: 1.1, rotation: 1, zIndex: 2 }, 0);
  tl.to(nextEL1, { clipPath: 'polygon(0 0, 160% 0%, 100% 100%, 0% 100%)', duration: 1, ease: "power3.out" }, 0);
  tl.to(nextEL1, { scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }, 0);
  tl.set(currEL2, { zIndex: 1 }, 0);
  tl.set(nextEL2, { clipPath: 'polygon(0 0, 0% 0, 0% 100%, -30% 100%)', scale: 1.1, rotation: 1, zIndex: 2 }, 0);
  tl.to(nextEL2, { clipPath: 'polygon(0 0, 160% 0%, 100% 100%, 0% 100%)', duration: 1, ease: "power3.out" }, 0);
  tl.to(nextEL2, { scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }, 0);

  return tl;
}
</script>