<template>
  <section class="s5 relative">

    <div class="mob">
      <div class="slider slider1">
        <div class="slide">
          <img src="@/section/s5/4.jpg" />
          <div class="st1">世界灣</div>
          <div class="st2">新北市淡水區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/5.jpg" />
          <div class="st1">達麗天蒔</div>
          <div class="st2">台北市北投區</div>
        </div>
        <div class="slide active">
          <img src="@/section/s5/1.jpg" />
          <div class="st1">陽明大苑</div>
          <div class="st2">台北市士林區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/2.jpg" />
          <div class="st1">達麗101</div>
          <div class="st2">台北市信義區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/3.jpg" />
          <div class="st1">KODA ON 5TH AVE</div>
          <div class="st2">450 S Main St, Seattle, WA 98104 USA</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/4.jpg" />
          <div class="st1">世界灣</div>
          <div class="st2">新北市淡水區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/5.jpg" />
          <div class="st1">達麗天蒔</div>
          <div class="st2">台北市北投區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/1.jpg" />
          <div class="st1">陽明大苑</div>
          <div class="st2">台北市士林區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/2.jpg" />
          <div class="st1">達麗101</div>
          <div class="st2">台北市信義區</div>
        </div>
      </div>
    </div>

    <div class="pc">
      <div class="slider slider2">
        <div class="slide">
          <img src="@/section/s5/4.jpg" />
          <div class="st1">世界灣</div>
          <div class="st2">新北市淡水區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/5.jpg" />
          <div class="st1">達麗天蒔</div>
          <div class="st2">台北市北投區</div>
        </div>
        <div class="slide active">
          <img src="@/section/s5/1.jpg" />
          <div class="st1">陽明大苑</div>
          <div class="st2">台北市士林區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/2.jpg" />
          <div class="st1">達麗101</div>
          <div class="st2">台北市信義區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/3.jpg" />
          <div class="st1">KODA ON 5TH AVE</div>
          <div class="st2">450 S Main St, Seattle, WA 98104 USA</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/4.jpg" />
          <div class="st1">世界灣</div>
          <div class="st2">新北市淡水區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/5.jpg" />
          <div class="st1">達麗天蒔</div>
          <div class="st2">台北市北投區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/1.jpg" />
          <div class="st1">陽明大苑</div>
          <div class="st2">台北市士林區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/2.jpg" />
          <div class="st1">達麗101</div>
          <div class="st2">台北市信義區</div>
        </div>
        <div class="slide">
          <img src="@/section/s5/3.jpg" />
          <div class="st1">KODA ON 5TH AVE</div>
          <div class="st2">450 S Main St, Seattle, WA 98104 USA</div>
        </div>
      </div>
    </div>
    
    <div class="controls flex">
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

    <div class="text md:flex md:justify-between">
      <div class="t1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">成為台灣最全球化的地產開發商</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">達麗從台灣到西雅圖，從建設到營建、商場，早已邁向國際化，每一座達麗建築都以與世界各大城市新建築比肩的標準檢視，跨國際推案、跨國團隊合作，不只成就達麗建築成為世界級建築，國際視野與世界觀更讓達麗跳脫單一建築個案思維，從環境與城市發展宏觀角度定位建築。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  padding: size-m(54) 0 size-m(29.5) 0;
  font-family: 'Noto Serif TC';
  @media screen and (min-width:768px) {
    padding: size(132) 0 size(127) 0;
  }

  .mob {
    overflow: hidden;
    @media screen and (min-width:768px) {
      height: 0;
    }
  }

  .pc {
    overflow: hidden;
    height: 0;
    @media screen and (min-width:768px) {
      height: auto;
    }
  }
  
  .slider {
    height: size-m(329.1);
    margin-bottom: size-m(21.4);
    display: inline-flex;
    align-items: center;
    @media screen and (min-width:768px) {
      height: size(655);
      margin-bottom: size(61);
    }

    .slide {
      width: size-m(172);
      margin-right: size-m(21);
      filter: grayscale(1);
      @media screen and (min-width:768px) {
        width: size(360);
        margin-right: size(85);
      }
      
      &:last-child {
        margin: 0;
      }

      &.active {
        filter: grayscale(0);
        width: size-m(270);
        @media screen and (min-width:768px) {
          width: size(570);
        }
      }
    }

    .st1 {
      font-size: size-m(15);
      line-height: size-m(22);
      @media screen and (min-width:768px) {
        font-size: size(23);
        line-height: size(33);
      }
    }

    .st2 {
      color: #444444;
      font-size: size-m(12);
      line-height: 170%;
      white-space: nowrap;
      @media screen and (min-width:768px) {
        font-size: size(16);
      }
    }
  }

  .controls {
    justify-content: space-between;
    width: size-m(270);
    margin: 0 auto size-m(27) auto;
    @media screen and (min-width:768px) {
      width: size(1626);
      margin: size(-50) auto size(65) auto;
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

  .t1 {
    color: #002B69;
    font-size: size-m(18);
    line-height: size-m(26);
    letter-spacing: .07em;
    font-weight: 700;
    padding: 0 size-m(52);
    margin-bottom: size-m(11);
    @media screen and (min-width:768px) {
      font-size: size(40);
      line-height: size(57);
      padding: 0;
      margin-bottom: 0;
    }
  }

  .text {
    @media screen and (min-width:768px) {
      width: size(1626);
      margin: 0 auto;
    }
  }

  .t2 {
    color: #000;
    font-size: size-m(14);
    line-height: 170%;
    font-weight: 700;
    padding: 0 size-m(52);
    margin-bottom: size-m(47.5);
    @media screen and (min-width:768px) {
      font-size: size(20);
      padding: 0;
      margin-bottom: 0;
      width: size(867);
    }
  }
}

</style>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
const currSlideIdx = ref(0);
let tlM, tl;
let animating = false;
let timer = null;

onMounted(() => {
  initTLM();
  initTL();
  goNext();
});

function initTLM() {
  const slidesM = document.querySelectorAll('.s5 .slider1 .slide');
  const slideMW = 172 / 375 * 100;
  const slideActiveMW = 270 / 375 * 100;
  const gapM = 21 / 375 * 100;
  const windowMW = 100;

  // set init position
  let x = -(slideMW * 2 + gapM * 2 + slideActiveMW / 2 - windowMW / 2);
  gsap.set('.s5 .slider1', { x: x + 'vw' });
  gsap.set('.s5 .slider1 .slide.active', { width: slideActiveMW + 'vw', filter: 'grayscale(0)' });
  document.querySelector('.s5 .slider1 .slide.active').classList.remove('active');

  tlM = gsap.timeline({ paused: true, defaults: {ease: "none", duration: 1} });

  for (let i = 2; i <= 6; i++) {
    const start = i-2;
    tlM.addLabel('slideTo' + i, start);
    tlM.to(slidesM[i], { width: slideMW + 'vw', filter: 'grayscale(1)' }, start);
    tlM.to(slidesM[i+1], { width: slideActiveMW + 'vw', filter: 'grayscale(0)' }, start);
    x = x - (slideMW + gapM);
    tlM.to('.s5 .slider1', { x: x + 'vw' }, start);
  }
}

function initTL() {
  const slides = document.querySelectorAll('.s5 .slider2 .slide');
  const slideW = 360 / 1920 * 100;
  const slideActiveW = 570 / 1920 * 100;
  const gap = 85 / 1920 * 100;
  const windowW = 100;

  // set init position
  let x = -(slideW * 2 + gap * 2 + slideActiveW / 2 - windowW / 2);
  gsap.set('.s5 .slider2', { x: x + 'vw' });
  gsap.set('.s5 .slider2 .slide.active', { width: slideActiveW + 'vw', filter: 'grayscale(0)' });
  document.querySelector('.s5 .slider2 .slide.active').classList.remove('active');

  tl = gsap.timeline({ paused: true, defaults: {ease: "none", duration: 1} });

  for (let i = 2; i <= 6; i++) {
    const start = i - 2;
    tl.addLabel('slideTo' + i, start);
    tl.to(slides[i], { width: slideW + 'vw', filter: 'grayscale(1)' }, start);
    tl.to(slides[i+1], { width: slideActiveW + 'vw', filter: 'grayscale(0)' }, start);
    x = x - (slideW + gap);
    tl.to('.s5 .slider2', { x: x + 'vw' }, start);
  }
}

function goNext() {
  if ( animating ) return;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  currSlideIdx.value++;
  
  if ( currSlideIdx.value > 5 ) {
    currSlideIdx.value = 1;
  }

  const subTimelineM = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;

      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        goNext();
      }, 2000);
    }
  }, 0);
  subTimelineM.add( tlM.tweenFromTo(currSlideIdx.value-1, currSlideIdx.value) );
  subTimelineM.play();

  const subTimeline = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;
    }
  }, 0);
  subTimeline.add( tl.tweenFromTo(currSlideIdx.value-1, currSlideIdx.value) );
  subTimeline.play();

  animating = true;
}

function goPrev() {
  if ( animating ) return;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  currSlideIdx.value--;

  if ( currSlideIdx.value === -1 ) {
    currSlideIdx.value = 4;
  }

  const subTimelineM = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;

      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        goNext();
      }, 2000);
    }
  }, 0);
  subTimelineM.add( tlM.tweenFromTo(currSlideIdx.value+1, currSlideIdx.value) ); // 1, 0
  subTimelineM.play();
  
  const subTimeline = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;
    }
  }, 0);
  subTimeline.add( tl.tweenFromTo(currSlideIdx.value+1, currSlideIdx.value) ); // 1, 0
  subTimeline.play();

  animating = true;
}
</script>