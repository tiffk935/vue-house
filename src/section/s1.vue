<template>
  <article class="s1" id="s1">
    <!-- <img src="./s1/mo.jpg" class="t0"> -->
    <div class="train absolute">
      <img src="./s1/train.svg" alt="train" class="trainbg" v-if="!$isMobile()">
      <img src="./s1/trainm.svg" alt="train" class="trainbg" v-else>
      <img src="./s1/train.png" alt="train" class="train1 absolute">
    </div>


    <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
    
    <div class="ribbon" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/2.png" alt="ribbon">
  </div>
    <div class="bubble" data-aos="zoom-in" data-aos-delay="0">
      <img src="./s1/bubble.svg" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubblem.svg" alt="bubble" v-else>
    </div>
    <img src="./s1/l.png" alt="logo" class="l">

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
    opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translate(0);
  }
}

.s1 {
  @apply relative w-full h-screen;
  min-height: size(1070);
  max-height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: size(36);
  background-size: cover;

  .t0 {
    position: absolute;
    width: 100%;
    top: 0vw;
    left: 0;
    pointer-events: none;
    z-index: 10;
    opacity: .3;
  }

  .logo {
    position: relative;
    width: size(705);
    margin-bottom: size(75);
  }

  .ribbon {
    position: absolute;
    top: size(195);
    left: size(-175);
    width: size(986);
    img {
      width: 100%;
      transform: rotate(-37deg);
    }
}
  .bubble {
    position: absolute;
    bottom: size(308);
    right: size(250);
    width: size(350);
    img {
      width: 100%;
      animation: an 2s infinite ease-in-out alternate;
      transform: rotate(-5deg);
      transform-origin: 0% 100%;
    }
  }


  @keyframes train {
    0% {
      transform: translate(-50vw);
    }

    55% {
      transform: translate(60vw);
    }

    65% {
      transform: translate(60vw);
    }

    100% {
      transform: translate(250vw);
    }
  }

  .train {
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: right;
    border-bottom: size(22) solid #462E86;

    .trainbg {
      width: size(1650);
      margin: auto auto auto 0;
    }

    .train1 {
      bottom: size(-5);
      right: 100%;
      height: size(91);
      animation: train 10s infinite;
      max-width: none;
    }
  }
  

  .l {
    position: absolute;
    bottom: size(-80);
    left: size(0);
    width: size(2000);}
}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height: calc(100vh - 63px);
    min-height: size-m(604);
    max-height: size-m(750);
    font-size: size-m(15);
    
  .logo {
    width: size-m(304);
    margin-bottom: size-m(50);
  }
  .ribbon {
    top: size-m(80);
    left: size-m(-130);
    width: size-m(390);
    img {
      transform: rotate(-37deg);
    }
}
  .bubble {
    bottom: size-m(45);
    right: size-m(15);
    width: size-m(160);
    img {
      transform-origin: 0% 0%;
    }
  }



    @keyframes train {
      0% {
        transform: translate(-50vw);
      }

      55% {
        transform: translate(35%);
      }

      65% {
        transform: translate(35%);
      }
      100%{
        transform: translate(calc(100% + 150vw));
      }

    }

    .train {
      .trainbg {
        width: 100%;
      }

      .train1 {
        bottom: size-m(2);
        height: size-m(40);
        transform: translate(100%);
      }
    }
  .l {    
    bottom: size-m(-30);
    left: size-m(-20);
    width: size-m(600);max-width:900px;}
  }


}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>