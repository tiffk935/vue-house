<template>
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
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
let tl;
const duration = 0.6;
let timer = null;

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

  goNext();
});

let showSlide1 = true;
let animating = false;

function goNext() {
  if (animating) return;

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  showSlide1 = !showSlide1;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;

      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        goNext();
      }, 2000);
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

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  showSlide1 = !showSlide1;
  const subTimeline = gsap.timeline({
    onComplete: function() {
      animating = false;

      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        goNext();
      }, 2000);
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