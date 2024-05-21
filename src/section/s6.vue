<template>
  <section class="s6 relative">
    <div class="content absolute z-10">
      <div class="t1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">浮光鑠金，凝鍊水岸時代經典</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">陳傳宗建築師認為建築決定都市風貌，必須隨著時光歷久彌新，具有時代性與現代感。達麗河藴建築呼應水岸，銀色金屬水平線條，層層流動，呈現浮光鑠金般的柔軟動感。1500坪大基地，全街廓開發，賦予達麗河藴在城市中被注目的尺度，簡潔大器，自有風格。</div>
    </div>

    <div class="md:hidden">
      <div class="slider-m">
        <img class="img1" src="https://placehold.jp/200/D99B4C/ffffff/925x730.png?text=DAY" />
        <img class="img2" src="https://placehold.jp/200/dd6699/ffffff/925x730.png?text=NIGHT" />
        <img class="img3" src="https://placehold.jp/200/D99B4C/ffffff/925x730.png?text=DAY" />
        <img class="img4" src="https://placehold.jp/200/dd6699/ffffff/925x730.png?text=NIGHT" />
      </div>

      <div class="btn-next" @click="goNextM">
        <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
          <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
          <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
          <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
        </svg>
      </div>

      <div class="btn-next-txt absolute">{{ showSlide1 ? 'NIGHT VIEW' : 'DAY VIEW' }}</div>
    </div>

    <div class="hidden md:block">
      <div class="slider">
        <img class="img1" src="https://placehold.jp/200/D99B4C/ffffff/925x730.png?text=DAY" />
        <img class="img2" src="https://placehold.jp/200/dd6699/ffffff/925x730.png?text=NIGHT" />
        <img class="img3" src="https://placehold.jp/200/D99B4C/ffffff/925x730.png?text=DAY" />
        <img class="img4" src="https://placehold.jp/200/dd6699/ffffff/925x730.png?text=NIGHT" />
      </div>

      <div class="btn-next" @click="goNext">
        <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
          <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
          <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
          <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
        </svg>
      </div>

      <div class="btn-next-txt absolute">{{ showSlide1 ? 'NIGHT VIEW' : 'DAY VIEW' }}</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size-m(721);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .slider-m {
    // background: #ddd;
    position: absolute;
    top: size-m(81.17);
    left: 0;
    width: 100%;
    height: size-m(375.91);
    overflow: hidden;

    img {
      width: size-m(167);
      position: absolute;
      top: 0;
      left: 100%;

      &.img2 {
        left: size-m(52.5);
      }

      &.img3 {
        width: size-m(270);
        top: size-m(132 + 30.91);
        left: size-m(52.5);
      }

      &.img4 {
        width: 100%;
        top: size-m(132 + 30.91);
        left: size-m(-375);
      }
    }
  }

  .slider {
    position: absolute;
    width: 100%;
    top: size(101);
    left: 0;

    img {
      width: size-m(185);
      position: absolute;
      top: 0;
      left: 100%;
      @media screen and (min-width:768px) {
        width: size(556);
      }

      &.img2 {
        @media screen and (min-width:768px) {
          left: size(1220);
        }
      }

      &.img3 {
        @media screen and (min-width:768px) {
          width: size(925);
          left: size(148);
        }
      }

      &.img4 {
        @media screen and (min-width:768px) {
          width: size(556);
          left: size(-556);
        }
      }
    }
  }

  .btn-prev, .btn-next {
    position: absolute;
    top: size-m(81.25);
    left: size-m(257);
    cursor: pointer;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(895.25);
      left: size(148);
    }

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

  .btn-next-txt {
    top: size-m(122);
    left: size-m(257);
    font-size: size-m(12);
    color: #000;
    font-family: 'Noto Serif TC';
    @media screen and (min-width:768px) {
      top: size(904.97);
      left: size(231);
      font-size: size(18);
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: size-m(36.27) size-m(52.5) size-m(38);
    background-size: cover;
    font-weight: 700;
    @media screen and (min-width:768px) {
      width: 100%;
      height: size(640);
      padding: 0;
      padding: 0;
      bottom: auto;
      top: 0;
    }

    .t1 {
      color: #002B69;
      font-size: size-m(18);
      line-height: 1.44;
      letter-spacing: .07em;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(2);
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(695);
        left: size(1222);
        font-size: size(40);
      }
    }

    .t2 {
      color: #000;
      font-size: size-m(14);
      line-height: 170%;
      font-family: 'Noto Serif TC';
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(783.97);
        left: size(1220);
        width: size(554);
        font-size: size(20);
      }
    }
  }
}

</style>

<script setup>
import { ref } from 'vue';
import { gsap } from "gsap";
import { onMounted } from "vue";
const showSlide1 = ref(true);

let tl, tl_m;
const duration = 0.6;
onMounted(() => {
  tl = gsap.timeline({ paused: true, defaults: {ease: "none", duration: duration} });
  tl.addLabel('slide1', 0);
  tl.to('.s6 .slider .img1', { left: '63.5416666667vw' }, 0);
  tl.to('.s6 .slider .img2', { width: '48.1770833333vw', left: '7.7083333333vw' }, 0);
  tl.to('.s6 .slider .img3', { width: '28.9583333333vw', left: '-28.9583333333vw' }, 0);
  tl.addLabel('slide2', duration);
  tl.set('.s6 .slider .img4', { width: '28.9583333333vw', left: '100%' }, duration);
  tl.to('.s6 .slider .img4', { left: '63.5417vw' }, duration);
  tl.to('.s6 .slider .img1', { width: '48.1771vw', left: '7.7083vw' }, duration);
  tl.to('.s6 .slider .img2', { width: '28.9583vw', left: '-28.9583vw' }, duration);
  
  tl_m = gsap.timeline({ paused: true, defaults: {ease: "none", duration: duration} });
  tl_m.addLabel('slide1', 0);
  tl_m.set('.s6 .slider-m .img2', { zIndex: 1 }, 0);
  tl_m.to('.s6 .slider-m .img1', { left: '14vw', top: 0 }, 0);
  tl_m.to('.s6 .slider-m .img2', { width: '72vw', left: '14vw', top: '43.4426666667vw' }, 0);
  tl_m.to('.s6 .slider-m .img3', { width: '14vw', left: '-100vw', top: '43.4426666667vw' }, 0);
  tl_m.addLabel('slide2', duration);
  tl_m.set('.s6 .slider-m .img2', { zIndex: 0 }, duration);
  tl_m.set('.s6 .slider-m .img1', { zIndex: 1 }, duration);
  tl_m.set('.s6 .slider-m .img4', { width: '44.5333333333vw', left: '100%', top: 0 }, duration);
  tl_m.to('.s6 .slider-m .img4', { left: '14vw', top: 0 }, duration);
  tl_m.to('.s6 .slider-m .img1', { width: '72vw', left: '14vw', top: '43.4426666667vw' }, duration);
  tl_m.to('.s6 .slider-m .img2', { width: '14vw', left: '-100vw', top: '43.4426666667vw' }, duration);
});

let animating = false;

function goNextM() {
  if (animating) return;

  showSlide1.value = !showSlide1.value;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;
    }
  });

  if (showSlide1.value) {
    subTimeline.add( tl_m.tweenFromTo('slide2', tl_m.duration()) );
  } else {
    subTimeline.add( tl_m.tweenFromTo('slide1', 'slide2') );
  }
  subTimeline.play();

  animating = true;
}

function goNext() {
  if (animating) return;

  showSlide1.value = !showSlide1.value;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;
    }
  });

  if (showSlide1.value) {
    subTimeline.add( tl.tweenFromTo('slide2', tl.duration()) );
  } else {
    subTimeline.add( tl.tweenFromTo('slide1', 'slide2') );
  }
  subTimeline.play();

  animating = true;
}
</script>