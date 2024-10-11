<template>
  <section class="s8 relative">
    <div class="slider-tabs absolute">
      <div :class="{'slider-tab': true, 'active': currentTab == 25}" @click="clickTab(25)">
        <div><span>25</span>坪</div>
      </div>
      <div :class="{'slider-tab': true, 'active': currentTab == 37}" @click="clickTab(37)">
        <div><span>37</span>坪</div>
      </div>
      <!--div :class="{'slider-tab': true, 'active': currentTab == 43}" @click="clickTab(43)">
        <div><span>43</span>坪</div>
      </div-->
    </div>

    <transition>
      <div class="content content25 absolute" v-if="currentTab == 25">
        <div class="slider" :style="{ 'z-index': 2 }">
          <div class="slide">
            <img src="@/section/s8/25/01.jpg">
          </div>
          <div class="slide">
            <img src="@/section/s8/25/02.jpg">
          </div>
          <div class="slide">
            <img src="@/section/s8/25/03.jpg">
          </div>
        </div>

        <div class="controls">
          <div class="btn-prev md:hidden" @click="goPrev">
            <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
              <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
              <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
              <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
            </svg>
          </div>

          <div class="btn-next md:hidden" @click="goNext">
            <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
              <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
              <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
              <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
            </svg>
          </div>

          <div class="dots">
            <template v-for="num in 3" :key="num">
              <div :class="{ dot: true, active: currentSlide === (num - 1) }" @click="jumpTo(num - 1)" ></div>
            </template>
          </div>
        </div>

        <div class="text">
          <div class="t1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">理想型住宅，永遠比你想的更好</div>
          <div class="t2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">達麗河藴25坪2房是驚喜的兩大雙人房、雙衛浴，主人房雙人大套房極致奢華尺度。33-38坪3房，面寬型格局，每一席都是漂亮邊間，不只全室無暗房、通風採光好，更做到雙衛浴都開窗，大宅獨立封閉式廚房配置。高坪效規劃，達麗河藴每一席都有剛剛好的舒適感，比想像中的更好。</div>
        </div>
      </div>
    </transition>

    <transition>
      <div class="content content37 absolute" v-if="currentTab == 37">

        <div class="slider" :style="{ 'z-index': 2 }">
          <div class="slide">
            <img src="@/section/s8/37/01.jpg">
          </div>
          <div class="slide">
            <img src="@/section/s8/37/02.jpg">
          </div>
          <div class="slide">
            <img src="@/section/s8/37/03.jpg">
          </div>
        </div>


        <div class="controls">
          <div class="btn-prev md:hidden" @click="goPrev">
            <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
              <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
              <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
              <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
            </svg>
          </div>

          <div class="btn-next md:hidden" @click="goNext">
            <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
              <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
              <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
              <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
            </svg>
          </div>

          <div class="dots">
            <template v-for="num in 3" :key="num">
              <div :class="{ dot: true, active: currentSlide === (num - 1) }" @click="jumpTo(num - 1)"></div>
            </template>
          </div>
        </div>
        
        <div class="text">
          <div class="t1">理想型住宅，永遠比你想的更好</div>
          <div class="t2">達麗河藴25坪2房是驚喜的兩大雙人房、雙衛浴，主人房雙人大套房極致奢華尺度。33-38坪3房，面寬型格局，每一席都是漂亮邊間，不只全室無暗房、通風採光好，更做到雙衛浴都開窗，大宅獨立封閉式廚房配置。高坪效規劃，達麗河藴每一席都有剛剛好的舒適感，比想像中的更好。</div>
        </div>
      </div>
    </transition>

    <!--
    <transition>
      <div class="content content43 absolute" v-if="currentTab == 43">
        <div class="slider" :style="{ 'z-index': 2 }">    
          <div class="slide">
            <img src="https://placehold.jp/200/D99B4C/ffffff/1920x1080.png?text=pic2">
          </div>
          <div class="slide">
            <img src="https://placehold.jp/200/42b5a6/ffffff/1920x1080.png?text=pic3">
          </div>
        </div>

        <div class="controls">
          <div class="btn-prev md:hidden" @click="goPrev">
            <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
              <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
              <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
              <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
            </svg>
          </div>

          <div class="btn-next md:hidden" @click="goNext">
            <svg class="arrow-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666">
              <circle stroke-width=".5" cx="26" cy="26" r="25.5" />
              <circle class="cir" stroke="#002B69" cx="26" cy="26" r="25.5" />
              <path class="arrow" d="M18.9,26h13.5 M27.6,30.8l4.8-4.8l-4.8-4.8" />
            </svg>
          </div>

          <div class="dots">
            <template v-for="num in 3" :key="num">
              <div :class="{ dot: true, active: currentSlide === (num - 1) }" @click="jumpTo(num - 1)"></div>
            </template>
          </div>
        </div>

        <div class="text">
          <div class="t1">3文字待更換</div>
          <div class="t2">3文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換文字待更換</div>
        </div>
      </div>
    </transition>
    -->
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s8 {
  width: 100%;
  height: size-m(666);
  font-family: 'Noto Serif TC';
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .slider-tabs {
    width: size-m(271);
    top: size-m(62.17);
    left: size-m(52);
    display: flex;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      width: size(80.36);
      top: size(90);
      left: size(1693.39);
      display: block;
    }

    .slider-tab {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      position: relative;
      width: size-m(55);
      height: size-m(55);
      border: size-m(1) solid #666666;
      color: #002B69;
      font-weight: 700;
      font-size: size-m(10);
      // letter-spacing: 0.06em;
      border-radius: 50%;
      cursor: pointer;
      transition: color .35s cubic-bezier(.25,.46,.45,.94) 0s,border-color .35s cubic-bezier(.25,.46,.45,.94) 0s;
      @media screen and (min-width:768px) {
        width: size(80.36);
        height: size(80.36);
        border: size(1) solid #666666;
        font-size: size(14);
        line-height: size(20);
        margin-bottom: size(47.12);
      }

      &>div {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: flex-end;
        line-height: 1;

        span {
          font-size: size-m(20);
          @media screen and (min-width:768px) {
            font-size: size(30);
          }
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #002B69;
        transform: scale(0);
        transition: transform .35s cubic-bezier(.25,.46,.45,.94) 0s;
      }

      &:hover {
        color: #fff;
        border-color: #0A534C;

        &:after {
          transform: scale(1);
        }
      }

      &.active {
        background: #002B69;
        color: #fff;;
      }
    }
  }

  .content {
    top: size-m(146);
    width: 100%;
    @media screen and (min-width:768px) {
      width: size(1626);
      top: size(90);
      left: size(148);
    }

    .slider {
      position: relative;
      width: 100%;
      height: size-m(240);
      margin-bottom: size-m(11.81);
      background: #ddd;
      overflow: hidden;
      @media screen and (min-width:768px) {
        width: size(1477);
        height: size(716);
        margin-bottom: size(56);
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

    .controls {
      display: flex;
      justify-content: space-between;
      width: size-m(270);
      margin: 0 auto size-m(42.98) auto;
      @media screen and (min-width:768px) {
        margin: 0;
      }

      .btn-prev, .btn-next {
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

      .dots {
        position: absolute;
        top: size(624.98);
        right: size(31.85);

        .dot {
          width: size(16.66);
          height: size(16.66);
          border: size(1) solid #666666;
          cursor: pointer;
          border-radius: 50%;
          margin-bottom: size(20);

          &.active {
            background: #666666;
          }
        }
      }
    }

    .text {
      width: size-m(270);
      margin: 0 auto;
      @media screen and (min-width:768px) {
        width: 100%;
        border-top: size(1) solid #666666;
        padding-top: size(43);
        display: flex;
        justify-content: space-between;
      }

      .t1 {
        font-size: size-m(18);
        font-weight: 700;
        color: #002B69;
        letter-spacing: .07em;
        line-height: 130%;
        margin-bottom: size-m(9.48);
        @media screen and (min-width:768px) {
          font-size: size(40);
          margin-bottom: 0;
        }
      }

      .t2 {
        font-size: size-m(14);
        font-weight: 500;
        color: #333333;
        line-height: 170%;
        @media screen and (min-width:768px) {
          font-size: size(20);
          width: size(1000);
        }
      }
    }
  }
}

</style>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
const currentTab = ref(25);
const currentSlide = ref(0);
let animating = false;
let timer = null;

onMounted(() => {
  goNext();
});

function clickTab(tab) {
  console.log('clickTab', tab);
  currentTab.value = tab;
  currentSlide.value = 0;

  if (timer) {
    clearTimeout(timer);
    timer = null;

    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      goNext();
    }, 2000);
  }
}

function goNext() {
  if ( animating ) return;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  let currIdx = currentSlide.value;
  let nextIdx;
  
  currentSlide.value++;

  if ( currentSlide.value === document.querySelectorAll('.s8 .content' + currentTab.value + ' .slide').length ) {
    currentSlide.value = 0;
  }

  nextIdx = currentSlide.value;

  const tl = setTimeline(currIdx, nextIdx);
  tl.play();
}

function goPrev() {
  if ( animating ) return;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  let currIdx = currentSlide.value;
  let nextIdx;
  
  currentSlide.value--;

  if ( currentSlide.value === -1 ) {
    currentSlide.value = document.querySelectorAll('.s8 .content' + currentTab.value + ' .slide').length - 1;
  }

  nextIdx = currentSlide.value;

  const tl = setTimeline2(currIdx, nextIdx);
  tl.play();
}

function jumpTo(idx) {
  let currIdx = currentSlide.value;
  let nextIdx;

  currentSlide.value = idx;
  nextIdx = currentSlide.value;

  const tl = setTimeline(currIdx, nextIdx);
  tl.play();
}

function setTimeline(currIdx, nextIdx) {
  animating = true;
  const nextEL = document.querySelectorAll('.s8 .content' + currentTab.value + ' .slide')[nextIdx];
  const currEL = document.querySelectorAll('.s8 .content' + currentTab.value + ' .slide')[currIdx];
  const tl = gsap.timeline({
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

  tl.set('.s8 .content' + currentTab.value + ' .slide', { zIndex: 0 }, 0);
  tl.set(currEL, { zIndex: 1 }, 0);
  tl.set(nextEL, { clipPath: 'polygon(160% 0, 100% 0, 100% 100%, 100% 100%)', scale: 1.1, rotation: 1, zIndex: 2 }, 0);
  tl.to(nextEL, { clipPath: 'polygon(-30% 0, 100% 0, 100% 100%, -30% 100%)', duration: 1, ease: "power3.out" }, 0);
  tl.to(nextEL, { scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }, 0);

  return tl;
}

function setTimeline2(currIdx, nextIdx) {
  animating = true;
  const nextEL = document.querySelectorAll('.s8 .content' + currentTab.value + ' .slide')[nextIdx];
  const currEL = document.querySelectorAll('.s8 .content' + currentTab.value + ' .slide')[currIdx];
  console.log('nextEL', nextEL)
  console.log('currEL', currEL)
  const tl = gsap.timeline({
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

  tl.set('.s8 .content' + currentTab.value + ' .slide', { zIndex: 0 }, 0);
  tl.set(currEL, { zIndex: 1 }, 0);
  tl.set(nextEL, { clipPath: 'polygon(0 0, 0% 0, 0% 100%, -30% 100%)', scale: 1.1, rotation: 1, zIndex: 2 }, 0);
  tl.to(nextEL, { clipPath: 'polygon(0 0, 160% 0%, 100% 100%, 0% 100%)', duration: 1, ease: "power3.out" }, 0);
  tl.to(nextEL, { scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }, 0);

  return tl;
}
</script>
