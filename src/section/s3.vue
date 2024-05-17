<template>
  <section class="s3 relative">
    
    <div class="content absolute">
      <div class="t1">富人水岸，科技新創，價值未來</div>
      <div class="t2">台北市第一個真正回歸水岸生活、融合自然的國際濱水城區</div>
      <div class="t3">北士科94.38公頃，規劃為城市生活區、主要產業核心區及水岸融合區。新洲美水岸融合區，親水超級堤防、水岸步道、公園綠地、自行車道、遊艇碼頭…，引入水岸商業步行街區，成為台北市第一個真正回歸水岸生活、融合自然的國際化濱水城區。將以國際水岸特區為台北未來城市生活樹立嶄新典範。</div>
    </div>

    <div class="md:hidden">
      <div class="slider-m">
        <img class="img1" src="@/section/s3/2.jpg" />
        <img class="img2" src="@/section/s3/1.jpg" />
        <img class="img3" src="@/section/s3/2.jpg" />
        <img class="img4" src="@/section/s3/1.jpg" />
      </div>

      <div class="btn-prev" @click="goPrevM">
        <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
          <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
          <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
          <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
        </svg>
      </div>

      <div class="btn-next" @click="goNextM">
        <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
          <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
          <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
          <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
        </svg>
      </div>
    </div>

    <div class="hidden md:block">
      <div class="slider">
        <img class="img1" src="@/section/s3/2.jpg" />
        <img class="img2" src="@/section/s3/1.jpg" />
        <img class="img3" src="@/section/s3/2.jpg" />
        <img class="img4" src="@/section/s3/1.jpg" />
      </div>

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
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size-m(867);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .slider-m {
    // background: #ddd;
    position: absolute;
    top: size-m(51);
    left: 0;
    width: 100%;
    height: size-m(469.73);
    overflow: hidden;

    img {
      width: size-m(185);
      position: absolute;
      top: 0;
      left: 100%;

      &.img2 {
        left: size-m(52.5);
      }

      &.img3 {
        width: 100%;
        top: size-m(190);
        left: size-m(0);
      }

      &.img4 {
        width: 100%;
        top: size-m(190);
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
    top: size-m(160);
    left: size-m(287);
    cursor: pointer;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(606.25);
      left: size(1725.08);
    }

    .arrow-icon {
      width: size-m(35);
      transition: transform ease-in-out 0.2s;
      vertical-align: middle;
      @media screen and (min-width:768px) {
        width: size(59.02);
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
    top: size-m(51);
    transform: rotate(180deg);
    @media screen and (min-width:768px) {
      top: size(606.25);
      left: size(1220);
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: size-m(36.27) size-m(52.5) size-m(38);
    background-image: url(@/section/s3/bg-m.png);
    background-size: cover;
    font-weight: 700;
    @media screen and (min-width:768px) {
      width: 100%;
      height: size(640);
      background-image: url(@/section/s3/bg-m.png);

      &:after {
        content: '';
        position: absolute;
        top: size(402.97);
        left: size(148);
        width: size(1626);
        height: size(0.5);
        background: #666666;
      }
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
        top: size(441);
        left: size(148);
        font-size: size(40);
      }
    }

    .t2 {
      color: #000;
      font-size: size-m(13);
      line-height: 170%;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(8);
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(504.5);
        left: size(148);
        font-size: size(23);
      }
    }

    .t3 {
      color: #000;
      font-size: size-m(14);
      line-height: 170%;
      font-family: 'Noto Serif TC';
      @media screen and (min-width:768px) {
        position: absolute;
        top: size(444);
        left: size(869);
        width: size(905);
        font-size: size(20);
      }
    }
  }
}

</style>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

let tl, tl_m;
const duration = 0.6;
onMounted(() => {
  tl = gsap.timeline({ paused: true, defaults: {ease: "none", duration: duration} });
  tl.addLabel('slide1', 0);
  tl.to('.s3 .slider .img1', { left: '63.5416666667vw' }, 0);
  tl.to('.s3 .slider .img2', { width: '48.1770833333vw', left: '7.7083333333vw' }, 0);
  tl.to('.s3 .slider .img3', { width: '28.9583333333vw', left: '-28.9583333333vw' }, 0);
  tl.addLabel('slide2', duration);
  tl.set('.s3 .slider .img4', { width: '28.9583333333vw', left: '100%' }, duration);
  tl.to('.s3 .slider .img4', { left: '63.5417vw' }, duration);
  tl.to('.s3 .slider .img1', { width: '48.1771vw', left: '7.7083vw' }, duration);
  tl.to('.s3 .slider .img2', { width: '28.9583vw', left: '-28.9583vw' }, duration);
  
  tl_m = gsap.timeline({ paused: true, defaults: {ease: "none", duration: duration} });
  tl_m.addLabel('slide1', 0);
  tl_m.set('.s3 .slider-m .img2', { zIndex: 1 }, 0);
  tl_m.to('.s3 .slider-m .img1', { left: '14vw', top: 0 }, 0);
  tl_m.to('.s3 .slider-m .img2', { width: '100%', left: 0, top: '50.6666666667vw' }, 0);
  tl_m.to('.s3 .slider-m .img3', { width: '14vw', left: '-100vw', top: '70vw' }, 0);
  tl_m.addLabel('slide2', duration);
  tl_m.set('.s3 .slider-m .img2', { zIndex: 0 }, duration);
  tl_m.set('.s3 .slider-m .img1', { zIndex: 1 }, duration);
  tl_m.set('.s3 .slider-m .img4', { width: '49.3333333333vw', left: '100%', top: 0 }, duration);
  tl_m.to('.s3 .slider-m .img4', { left: '14vw', top: 0 }, duration);
  tl_m.to('.s3 .slider-m .img1', { width: '100%', left: 0, top: '50.6666666667vw' }, duration);
  tl_m.to('.s3 .slider-m .img2', { width: '14vw', left: '-100vw', top: '70vw' }, duration);
});

let showSlide1 = true;
let animating = false;

function goNextM() {
  if (animating) return;

  showSlide1 = !showSlide1;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;
    }
  });

  if (showSlide1) {
    subTimeline.add( tl_m.tweenFromTo('slide2', tl_m.duration()) );
  } else {
    subTimeline.add( tl_m.tweenFromTo('slide1', 'slide2') );
  }
  subTimeline.play();

  animating = true;
}

function goPrevM() {
  if (animating) return;

  showSlide1 = !showSlide1;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;
    }
  });

  if (showSlide1) {
    subTimeline.add( tl_m.tweenFromTo('slide2', 0) );
  } else {
    subTimeline.add( tl_m.tweenFromTo(tl_m.duration(), 'slide2') );
  }

  subTimeline.play();
  
  animating = true;
}

function goNext() {
  if (animating) return;

  showSlide1 = !showSlide1;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;
    }
  });

  if (showSlide1) {
    subTimeline.add( tl.tweenFromTo('slide2', tl.duration()) );
  } else {
    subTimeline.add( tl.tweenFromTo('slide1', 'slide2') );
  }
  subTimeline.play();

  animating = true;
}

function goPrev() {
  if (animating) return;

  showSlide1 = !showSlide1;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;
    }
  });

  if (showSlide1) {
    subTimeline.add( tl.tweenFromTo('slide2', 0) );
  } else {
    subTimeline.add( tl.tweenFromTo(tl.duration(), 'slide2') );
  }

  subTimeline.play();
  
  animating = true;
}
</script>