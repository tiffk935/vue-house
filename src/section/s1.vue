<template>
  <article class="s1 relative w-full h-screen bg-[#CFD9D0]">
    <!-- <img class="i0" src="./s1/mo.jpg" alt=""> -->
    <div class="sakura absolute">
    <div class="sakura3 absolute">
    <img src="./s1/sakura3.png" alt="">
</div>
    <img class="sakura2 absolute" src="./s1/sakura2.png" alt="">
    <img class="sakura1 relative" src="./s1/sakura1.png" alt="">
</div>
    <div class="txt absolute">
      <img class="logo" data-aos="zoom-in" data-aos-duration="800" src="@/section/s1/logo.svg" alt="" srcset="">
    <div class="t1">十足天地  綠健社區
</div>
    <div class="t2">｜5MINS梅花湖｜60-67坪｜太陽能電梯別墅｜</div>
    <div class="t3" @click="scrollTo('.order')">立即預約</div>
</div>


  </article>
</template>

<style lang="scss">  
@import '@/assets/style/function.scss';

@keyframes sakura {
  to {
    transform:translateY(0);
  }
}

@keyframes sakura3 {
  75% {
    width: 100%;
    border-radius: 0 0 0 0%;
    opacity: 1;
  }
  80% {
    width: 100%;
    opacity: 0;
    border-radius: 0 100% 0 0%;
  }
  100% {
    width: 100%;
    opacity: 0;
    border-radius: 0 100% 0 0%;
  }
}

.s1 {
  // @apply relative w-full h-screen bg-[#CFD9D0];
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image:url("./s1/bg.png");
  background-size: cover;
  background-position: 50% 50%;
  .i0{position: absolute;top: 0;left: 0;width: 100%;
  opacity: .5;z-index: 3;
  }
  .sakura {
    // 動態寫在 order.vue 裡了
    // @apply absolute;
    top: 0;
    right: 0;
    width: size(605);
    height: 100%;
    .sakura1{
    // @apply relative;
    width:100%;
    right: 37%;
    top: 0%;
    transform:skewX(-6deg);
    transform-origin: 50% 0;
    animation: sakura 2s ease-in-out infinite alternate; 
  }
    .sakura2{
    // @apply absolute;
    width: 48%;
    right: 0%;
    top:calc(40% + (80 - 1080 * .4) * 100vw / 1920 );
    transform:rotate(3deg)skewY(3deg);
    transform-origin: 100% 100%;
    animation: sakura 2s ease-in-out infinite alternate-reverse; 
  }
    .sakura3{
    // @apply absolute;
    width: 0%;
    height: auto;
    right: 9.5%;
    top:calc(50% + (180 - 1080 * .5) * 100vw / 1920 );
    border-radius: 0 0 0 100%;
    animation: sakura3 8s  infinite; 
        opacity: 1;
    overflow: hidden;
    img{float: right;
    width: size(417);
    max-width: unset;}
  }
  }
  .txt {
    // @apply absolute;
    right:size(100);
    top:calc(70% + (480 - 1080 * .7) * 100vw / 1920 );
font-weight: 700;
font-size:size(26);
text-align: center;
  }

  .logo {
    width: size(229);
    margin: 0 auto;
    margin-bottom: .7em;
  }
  .t1 {
color: #4B6730;
font-weight: 900;
font-size:2em;
letter-spacing: 0.165em;
  }
  .t3 {
color: #4B6730;
font-size:1.85em;
font-weight: 500;
letter-spacing: 0.66em;
    margin-top: 1.5em;
      margin-right: -.66em;
      cursor: pointer;
      transition: all .5s;
    &::after,&::before{
      content: "";
      width: 2em;
      height: 2px;
      margin: 0 0.33em 0 -0.33em;
      background: currentColor;
      display: inline-block;
      vertical-align: middle;
    }
    &:hover{
color: #294211;

transform:scale(1.2);
   // opacity: 1;
   // transform-origin: 50% 50%;
   // animation: hover 1s linear infinite ; 

    }
  } 
   @keyframes hover {
      to {
    transform:scaleY(2);
    opacity: 0;filter: blur(5px);

      }
    }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: size-m(692);
    max-height: size-m(812);
  background-image:url("./s1/bgm.png");
  background-size: 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  .sakura {
    width: size-m(275);
    height: 100%;
    .sakura2{
    top: calc(20% - #{size-m(150)});
  }
    .sakura3{
    top: calc(30% - #{size-m(150)});
    right: 10%;
    img{
    width: size-m(220);}
  }
  }
  .txt {
    @apply relative;
    right:0;
    top:0;
    margin: auto;
font-size:size-m(15);
  }

  .logo {
    width: size-m(160);
    margin-bottom: 1.9em;
    margin-top: 1.1em;
  }
  .t1 {
font-size:2.1em;
  }
  .t3 {
font-size:1.5em;text-align: right;
letter-spacing: 0.5em;
      margin-right: -.3em;
    margin-top: 1.7em;
    &::after,&::before{
      width: 1.3em;
      margin: 0 .5em 0 0em;
    }
  }
  }
}
</style>
<script setup>
import { inject, computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>
