<template>
  <article class="s1" id="s1">
    <!-- <img src="./s1/mo.jpg" class="t0"> -->
      <img src="./s1/1109-new/s1-40w.webp" alt="s1-40w" class="s1-40w">
      <img src="./s1/1109-new/s1-40w-m.webp" alt="s1-40w" class="s1-40w-m">

    <img src="./s1/1109-new/1109-s1-bg.jpg" alt="s1-bg" class="s1-bg" data-aos="fade-in"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

<div class="s1-new-h1-wp" data-aos="zoom-in"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

    <img src="./s1/1109-new/1109-s1-h1.webp" alt="logo" class="logo" data-aos="fade-in"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

    <img src="./s1/1109-new/s1-h1-m.webp" alt="logo" class="logo-m" data-aos="fade-in"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true">

</div>


<img
  src="./s1/1104-new/s1-girl.webp"
  alt="s1-girl"
  class="s1-girl"
  data-aos="fade-right"
  data-aos-offset="0"
  data-aos-duration="1200"
  data-aos-once="false"
  data-aos-mirror="true"
>

<img src="./s1/1109-new/y.svg" alt="全新落成" class="y" data-aos="fade-in" data-aos-delay="0">

<img src="./s1/1109-new/y-m.svg" alt="全新落成" class="y-m" data-aos="fade-in" data-aos-delay="0" >
  
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
.s1-th3,
.s1-40w-m,
.logo-m,
.y-m {
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


  .logo {
    position: relative;
    width: 44vw;
    margin-bottom: size(200);
    margin-left: size(160);
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
    bottom: size(-330);
    left: size(-100);
    width: 42vw;
    z-index: 2;
  }

  .y{
    position: absolute;
    top: size(-25);
    right: size(-25);
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

  .s1-40w {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: right;
  
    z-index: 2;
  }
  

  .l {
    position: absolute;
    bottom: size(-80);
    left: size(0);
    width: size(2000);}
}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {



}



@media screen and (max-width: 768px) {


.s1 {
  .s1-new-t,
  .s1-799,
  .s1-799-top,
  .s1-light,
  .s1-phone,
  .s1-arrow,
  .y,
  .s1-40w,
  .logo{  
    display: none !important;
  }
}

  .s1-new-m,
.s1-799-m,
.s1-light-m,
.s1-phone-m,
.s1-th3,
.s1-40w-m,
.logo-m,
.y-m {
  display: block;
}

  .s1 {
    justify-content: flex-start;
    height: 100vh;
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
      top:0;
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: size-m(20);
}


.logo-m{
  position: absolute;
  width: auto;
  max-height:50vh;
  top: 8vh;
  margin-left: 12vw;
}
 

  .s1-bg
  {
    margin-left: -40vw;
  }

.s1-girl {
  position: absolute;
  bottom:-58vw;

  left: size-m(-120);
  width: 95%;
  z-index: 2;
}

  .y-m {
    position: absolute;
    top: size-m(-7);
    left: size-m(-7);
    width: 15vw;
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

    .s1-40w-m {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: right;
      z-index: 2;
    }

  .l {    
    bottom: size-m(-30);
    left: size-m(-20);
    width: size-m(600);max-width:900px;}
  }


}

@media screen and (max-width: 768px) and (min-aspect-ratio: 607 / 867) {

  .s1 .logo-m {
    display: none !important;
  }

  .s1 .logo {
    display: block !important;
    position: absolute !important;
    width: auto !important;
    max-width:90vw;
    top: 11vh !important;
    margin-left: 12vw !important;
    margin-bottom: 0 !important;
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