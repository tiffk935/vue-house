<template>
  <section class="s1 relative">
    <div class="w01"></div>
    <div class="w02"></div>
    <img src="@/section/s1/w3.webp" class="w03" alt="w3">
    <img src="@/section/s1/logo.svg" class="logo" alt="雲禾月logo" data-aos="zoom-in">
    <div class="txt font-['Noto_Serif_TC',serif]">
      <div class="t1" data-aos="zoom-in-right" data-aos-delay="300">幸福從禾來</div>
      <div class="t2" data-aos="zoom-in-right" data-aos-delay="400">城市與自然<span>左右逢源</span>康健宜居</div>
      <div class="t3 font-['EB_Garamond']" data-aos="zoom-in-right" data-aos-delay="600">EMBRACING THE VIBRANT LIFE<br>OF CITY AND NATURE.</div>
    </div>
    <div class="title font-['Noto_Serif_TC']">2026合展汐止最新力作<br>汐東線．綠河濱 ｜ 27-37坪</div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.t0{
  position: absolute;
  width: 100%;
  top:0px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .2;
}

@keyframes an {
  20% {
    transform: scale(2,.3);opacity: .3;
  }
  30% {
    transform: scale(6,.5);opacity: 0;
  }
  40% {
    transform: scale(.03,.01);opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.s1 {
  height: calc(100vh - 63px);
  min-height: size-m(604);
  max-height: size-m(750);
  color: #3E3A39;
  font-size: size-m(12);
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
    padding: 0;
    font-size: size(24);
  }
  
  .logo {
    position: absolute;
    width: size-m(281);
    left: size-m(41);
    top: 11%;
    @media screen and (min-width: 768px) {
      width: size(730);
      left: size(280);
      top:calc(50% + #{size(200 - 1080 * .5)});
    }
  }

  .txt {
    position: absolute;
    left: size-m(176);
    top: 40%;
    @media screen and (min-width: 768px) {   
      left: size(1413);
      top:calc(50% + #{size(470 - 1080 * .5)});
    }
  }

  .title {
    position: absolute;
    top: 69%;
    left: 0;
    width: 100%;
    color: #000;
    text-align: center;
    font-weight: 700;
    font-size: size-m(20);
    line-height: size-m(28);
    @media screen and (min-width: 768px) {
      top: 85%;
      font-size: size(28);
      line-height: size(50);
    }
  }

  .t1 {
    font-weight: 900;
    font-size: 1.67em;
    letter-spacing: 0.06em;
    margin-bottom: 1.05em;
  }

  .t2 {
    font-weight: 900;
    letter-spacing: 0.01em;
    font-size: 1em;
    margin: 0 0 .4em .2em;

    span {
      margin: 0 .1em;
      vertical-align: -.7em;
    }
  }
  
  .t3 {
    font-size: 0.73em;
    font-weight: 500;
  }
}

.w01 {
  position: absolute;
  background: linear-gradient(90deg, #FFFc 20%, #57b997cc 100%);
  border-radius: 50%;
  transform: scale(1,.24);
  width:size-m(180);
  height:size-m(180);
  left: size-m(235);
  top:calc(50% + #{size-m(140 - 604 * .5)});
  filter: blur(size-m(6));
  animation: an 7s linear infinite;
  @media screen and (min-width: 768px) {  
    width:size(480);
    height:size(480);
    left: size(790);
    top:calc(50% + #{size(250 - 1080 * .5)});
    filter: blur(size(20));
  }
}
.w02 {
  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #009ce4 10% , #1cbee2 , #52c59d );
  border-radius: 50%;
  transform: scale(1,.24);
  width:size-m(230) ;height:size-m(230);
  left: size-m(-50);
  top:calc(50% + #{size-m(350 - 604 * .5)});
  filter: blur(size-m(10));
  animation: an 7s -2s linear infinite;
  @media screen and (min-width: 768px) {  
    width:size(650) ;height:size(650);
    left: size(470);
    top: calc(57% + #{size(350 - 1080 * .5)});
    filter: blur(size(20));
  }
}
 
.w03 {
  position: absolute;
  transform: scale(1,.24);
  width: size-m(408);
  left: size-m(54);
  top:calc(77% + #{size-m(300 - 604 * .7)});
  animation: an 7s -4s linear infinite;
  @media screen and (min-width: 768px) {  
    width: size(1018);
    left: size(795);
    top:calc(50% + #{size(320 - 1080 * .5)});
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>