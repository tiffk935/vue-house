<template>
  <article class="s1" id="s1">
    <!-- <img src="./s1/mo.jpg" class="t0"> -->
    <div class="train absolute">
      <img src="./s1/train.png" alt="train" class="train1 absolute">
    </div>

    <img src="./s1/1104-new/bg.jpg" alt="s1-bg" class="s1-bg" data-aos="fade-in"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

<div class="s1-new-h1-wp" data-aos="zoom-in"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

    <img src="./s1/1104-new/MO/s1-new-m.svg" alt="s1-new-m" class="s1-new-m" data-aos="fade-in">

    <img src="./s1/1104-new/s1-logo.svg" alt="logo" class="logo" data-aos="fade-in"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

      <div class="s1-799">
        <img src="./s1/1104-new/s1-799.svg" alt="799" class="s1-799-top">
        <img src="./s1/1104-new/s1-new-light.png" alt="light" class="s1-light">
        <img src="./s1/1104-new/s1-phone.svg" alt="phone" class="s1-phone">
      </div>

</div>

<div class="s1-799-m">
        <img src="./s1/1104-new/MO/s1-799-m.svg" alt="799-m-top" class="s1-799-m-top">
        <img src="./s1/1104-new/s1-new-light.png" alt="light-m" class="s1-light-m">
        <p class="s1-phone-m">2663-0999</p>
      </div>

<img src="./s1/1104-new/s1-arrow.svg" alt="s1-arrow" class="s1-arrow" data-aos="fade-in" data-aos-delay="0">

<img src="./s1/1104-new/s1-girl.webp" alt="s1-girl" class="s1-girl" data-aos="fade-right" data-aos-delay="0">

<img src="./s1/1104-new/s1-new-t.svg" alt="s1-new" class="s1-new-t" data-aos="fade-in" data-aos-delay="0">

<img src="./s1/1104-new/s1-th3.svg" alt="s1-th3" class="s1-th3" data-aos="fade-in" data-aos-delay="0" data-aos-offset="-300">
  
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

.s1-new-m,
.s1-799-m,
.s1-light-m,
.s1-phone-m,
.s1-th3 {
  display: none;
}

.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: size(36);
  background-size: cover;
  overflow: hidden;

.s1-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .s1-new-h1-wp {
  position: relative;
  width: 46vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.s1-799 {
  width: 36vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: size(100);
  gap: size(15);
}

  .s1-799-top {
    width: 80%;
    position: relative;
    margin-left: 4vw;
  }

  .s1-light {
  position: relative;
  margin-left: 4vw;
  mix-blend-mode: screen;
  pointer-events: none;
}

  .s1-phone {
    position: relative;
    margin-left: 4vw;
  }

  .logo {
    position: relative;
    width: 30vw;
    margin-bottom: size(80);
  }

  .s1-arrow {
    width: 12vw;
    position: absolute;
    top: size(50);
    right:size(100);
    z-index: 1;
  }

  .s1-girl {
    position: absolute;
    bottom: size(-500);
    left: size(-50);
    width: 42vw;
    z-index: 1;
  }

  .s1-new-t{
    position: absolute;
    top: size(0);
    left: size(0);
    width: 14vw;
    z-index: 1;
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
  
    z-index: 2;

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
  .s1-new-t,
  .s1-799,
  .s1-799-top,
  .s1-light,
  .s1-phone,
  .s1-arrow {
    display: none !important;
  }
}

  .s1-new-m,
.s1-799-m,
.s1-light-m,
.s1-phone-m,
.s1-th3 {
  display: block;
}

  .s1 {
    height: calc(100vh - 63px);
    min-height: size-m(604);
    max-height: size-m(750);
    font-size: size-m(15);
    
    .s1-bg {
      width: auto;
      height: 100%;
      max-width: none;
      object-fit: contain;
      object-position: left center;
      left: 0;
    }

    .s1-new-h1-wp {
      margin-top: size-m(40);
  position: relative;
  width: 74vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: size-m(20);
}

.s1-new-m{
  
  position: relative;
  width: 80%;
      margin-left: 2vw;
}

.logo{
  position: relative;
  width: 100%;
}
 
  .s1-799-m {
width: 192vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: size(100);
  margin-bottom: 10vh;
  gap: size(0);
}

.s1-799-m-top {
    width: 45vw;
    position: relative;
    margin-left: 20vw;
  }

  .s1-light-m {
    width: 109vw;
  position: relative;
  margin-left: 0;
  mix-blend-mode: screen;
  pointer-events: none;
      margin-left: 30vw;
}

  .s1-phone-m {
    position: relative;
    margin-left: 0;
    font-size: size-m(20);
    color: #fff;
    font-weight: bold;
    margin-left: 18vw;
    letter-spacing: size-m(2);
    text-shadow: 0 0 6px #610A23;
    z-index: 2;
  }

  .s1-bg
  {
    margin-left: -40vw;
  }

.s1-girl {
  position: absolute;
  top: 52%;

  left: size-m(-120);
  width: 120%;
  z-index: 1;
}

  .s1-th3 {
    position: absolute;
    top: size-m(0);
    left: size-m(0);
    width: 23vw;
    z-index: 1;}

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