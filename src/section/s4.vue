<template>
  <section class="s4 relative">
    
    <div class="t1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">寬裕，隨心所欲</div>
    <div class="t2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">基隆河從大直蜿蜒而來，與外雙溪交會出新洲美水岸綠洲，河濱公園、濕地、遊艇碼頭…，依水而生，因水而美。北士科產業聚落、天母商圈、士林商圈、國際名校、優生醫療養護環境…，產業、交通、生活，心所想全部就位。</div>

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
        <img src="@/section/s4/1.jpg">
        <div class="txt">洲美蜆仔港公園</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/2.jpg">
        <div class="txt">雙溪濕地公園</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/3.jpg">
        <div class="txt">歐洲學校</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/4.jpg">
        <div class="txt">日僑學校</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/5.jpg">
        <div class="txt">榮民總醫院</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/6.jpg">
        <div class="txt">新光吳火獅醫院</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/7.jpg">
        <div class="txt">洲美快速道路</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/8.jpg">
        <div class="txt">中山北路、林蔭大道</div>
      </div>
    </div>

    <div class="slider slider2" :style="{ 'z-index': 2 }">
      <div class="slide" :style="{ 'z-index': 2 }">
        <img src="@/section/s4/1.jpg">
        <div class="txt">洲美蜆仔港公園</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/2.jpg">
        <div class="txt">雙溪濕地公園</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/3.jpg">
        <div class="txt">歐洲學校</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/4.jpg">
        <div class="txt">日僑學校</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/5.jpg">
        <div class="txt">榮民總醫院</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/6.jpg">
        <div class="txt">新光吳火獅醫院</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/7.jpg">
        <div class="txt">洲美快速道路</div>
      </div>
      <div class="slide">
        <img src="@/section/s4/8.jpg">
        <div class="txt">中山北路、林蔭大道</div>
      </div>
    </div>
    <ul class="t2 t3 z-10">
      <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0"><span class="subtitle">二萬多坪河岸綠地</span><span class="hr"></span><span class="desc">洲美公園、蜆仔港公園、雙溪濕地公園，共譜水岸城市綠洲。</span></li>
      <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"><span class="subtitle">三座國際學校、二所名校</span><span class="hr"></span><span class="desc">美國學校、日僑學校、歐洲學校、奎山中學、薇閣中學。</span></li>
      <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"><span class="subtitle">五大醫療院所，二大醫學院校</span><span class="hr"></span><span class="desc">榮民總醫院、振興醫院、臺北護理健康大學、新光醫學中心、和信醫院、陽明醫院、陽明交通大學與衛福部國家中醫藥研究所。</span></li>
      <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600"><span class="subtitle">出行條條大道</span><span class="hr"></span><span class="desc">1分鐘福國路，2分鐘洲美快速道路，8分鐘中山北路。</span></li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s4 {
  width: 100%;
  padding: size-m(30) 0 size-m(56) 0;
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
      top: size(221);
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
      top: size(296);
      left: size(148);
      font-size: size(20);
      padding: 0;
      margin-bottom: 0;
      width: size(784);
    }
  }

  .t3 {
    li{
      display: flex;align-items:center;gap: .3em;
      text-align: justify;flex-wrap: wrap;
    line-height: 1.5;margin-top:1.3em;

      .subtitle{color: #002B69; white-space: nowrap;}
      .hr{flex: 1;height: 1px;background:#002B6999;}
      .desc{width:100%;text-align: justify;}
      @media screen and (min-width:768px) {
        flex-wrap:nowrap;margin-top:.3em;
      .desc{width:auto;}
        &:nth-child(3){
          display: block;
        .hr{width: 2em;display: inline-block;vertical-align: middle; margin: auto .3em;}
        .desc{width: auto;}
        }

      }
    }
    @media screen and (min-width:768px) {
      top: size(775);
      left: size(990);
    }
  }
  .t4 {
    @media screen and (min-width:768px) {
      top: size(985);
      left: size(990);
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
    width: size-m(270);
    margin: 0 auto size-m(34.5) auto;
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(130);
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
    margin-bottom: size-m(35.22);
    @media screen and (min-width:768px) {
      position: absolute;
      top: size(491);
      left: size(148);
      width: size(784);
      height: size(456);
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

      .txt {
        position: absolute;
        top: size-m(2);
        right: size-m(8);
        color: #fff;
        font-size: size-m(10);
        font-weight: 700;
        line-height: 170%;
        @media screen and (min-width:768px) {
          top: size(5);
          right: size(10);
          font-size: size(12);
        }
      }
    }
  }

  .slider2 {
    margin-bottom: size-m(47.89);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
      position: absolute;
      top: size(236);
      left: size(990);
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

  if ( currentSlide.value === document.querySelectorAll('.s4 .slider1 .slide').length ) {
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
    currentSlide.value = document.querySelectorAll('.s4 .slider1 .slide').length - 1;
  }

  nextIdx = currentSlide.value;

  const tl = setTimeline2(currIdx, nextIdx);
  tl.play();
}

function setTimeline(currIdx, nextIdx) {
  animating = true;
  const nextEL1 = document.querySelectorAll('.s4 .slider1 .slide')[nextIdx];
  const currEL1 = document.querySelectorAll('.s4 .slider1 .slide')[currIdx];
  const nextEL2 = document.querySelectorAll('.s4 .slider2 .slide')[nextIdx];
  const currEL2 = document.querySelectorAll('.s4 .slider2 .slide')[currIdx];
  const tl = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;
    }
  }, 0);

  tl.set('.s4 .slider1 .slide', { zIndex: 0 }, 0);
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
  const nextEL1 = document.querySelectorAll('.s4 .slider1 .slide')[nextIdx];
  const currEL1 = document.querySelectorAll('.s4 .slider1 .slide')[currIdx];
  const nextEL2 = document.querySelectorAll('.s4 .slider2 .slide')[nextIdx];
  const currEL2 = document.querySelectorAll('.s4 .slider2 .slide')[currIdx];
  const tl = gsap.timeline({
    paused: true,
    onComplete: function() {
      animating = false;
    }
  }, 0);

  tl.set('.s4 .slider1 .slide', { zIndex: 0 }, 0);
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
