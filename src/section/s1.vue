<template>
  <article class="s1 relative">
    <div class="wave">
      <div class="shadow1"><img src="./s1/1.png" srcset="" /><img src="./s1/1.png" srcset="" /></div>
      <div class="shadow2"><img src="./s1/2.png" srcset="" /><img src="./s1/2.png" srcset="" /></div>
      <div class="shadow3"><img src="./s1/2.png" srcset="" /><img src="./s1/2.png" srcset="" /></div>
      <div class="l1"><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /></div>
      <div class="l2"><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /></div>
      <div class="l3"><img src="./s1/l2.svg" srcset="" /><img src="./s1/l2.svg" srcset="" /><img src="./s1/l2.svg" srcset="" /></div>
      <img src="./s1/light.png" class="light1" srcset="" />
    </div>
  <!--   <img class="title absolute hidden md:block" src="./s1/title.svg" />
    <img class="title absolute md:hidden" src="./s1/title-m.svg" /> -->
    <img class="logo1 absolute" src="./s1/logo1.svg" />
    <img class="logo2 absolute" src="./s1/logo2.svg" />
    <img class="t1 absolute" src="./s1/t1.svg" />
    <img class="t2 absolute" src="./s1/t2.svg" />
    <img class="img absolute" src="./s1/img.svg" />
    <img class="btn-order absolute hidden md:block" @click="scrollTo('.order')" src="@/section/s1/btn.svg" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  @apply relative w-full h-screen;// overflow-hidden;
  // height: size(980);
  height:calc(100vh - #{size(100)});
  background: #E8E3DC;
  min-height: size(800);
  max-height: size(1080);

  .wave {
    position: absolute;
    bottom:size(0);
    left:size(0);
    right:size(0);
    top: size(0);
    overflow: hidden;

    .shadow1 {
      white-space: nowrap;
      position: absolute;
      left: 0;
      bottom: size(-300);
      transform: rotate(5deg);
      img {
        height: size(390);
        animation: wave 9s linear infinite;
        transform: translateX(-100%);
      }
    }

    .shadow2 {
      white-space: nowrap;
      position: absolute;
      left: 0;
      bottom: size(60);
      transform: rotate(-3deg);
      img {
        height: size(161);
        animation: wave 7s linear infinite reverse;
        transform: translateX(-100%);
      }
    }

    .shadow3 {
      white-space: nowrap;
      position: absolute;
      left: 0;
      bottom: size(50);
      transform: rotate(3deg);
      img {
        height: size(161);
        animation: wave 5s linear infinite;
        transform: translateX(-100%);
      }
    }

    .l1 {  
      white-space: nowrap;
      position: absolute;
      left: 0;
      bottom: size(-40);
      transform: rotate(3deg);
      img {
        height: size(161);
        animation: wave 6s linear infinite reverse;
        transform: translateX(-100%);
      }
    }

    .l2 {
      white-space: nowrap;
      position: absolute;
      left: 0;
      bottom: size(70);
      transform: rotate(-3deg);
      img {
        height: size(161);
        animation: wave 8s linear infinite;
        transform: translateX(-100%);
      }
    }

    .l3 {
      white-space: nowrap;
      position: absolute;
      left: 0;
      bottom:  size(-100);
      transform: rotate(1deg);
      img {
        height: size(233);
        animation: wave 10s linear infinite reverse;
        transform: translateX(-100%);
      }
    }

    @keyframes wave {
      to {
        transform:translateX(0%);
      }
    }

    .light1 {
      position: absolute;
      width: size(2296);
      opacity: .7;
      left: size(0);
      bottom: size(-100);
    }
  }

  .title {
    width: size(1747.08);
    // top: size(169);
    top:calc(80% + (165 - 980 * .8) * 100vw / 1920);
    left: size(86.46);
  }

  .logo1 {
    width: size(130);
    // top: size(169);
    top:calc(70% + (165 - 980 * .7) * 100vw / 1920);
    left:calc(50% - #{size(130 * .5)});
  }
  .logo2 {
    width: size(259);
    // top: size(169);
    top:calc(70% + (250 - 980 * .7) * 100vw / 1920);
    left:calc(50% - #{size(259 * .5)});
  }

  .t1 {
    width: size(500);
    // top: size(169);
    top:calc(75% + (420 - 980 * .75) * 100vw / 1920);
    left:calc(50% - #{size(500 * .5)});
  }

  .t2 {
    width: size(235);
    // top: size(169);
    top:calc(75% + (475 - 980 * .75) * 100vw / 1920);
    left:calc(50% - #{size(235 * .5)});
  }

  .img {
    width: size(1748);
    // top: size(169);
    top:calc(90% + (552 - 980 * .9) * 100vw / 1920);
    left:calc(50% - #{size(1748 * .5)});
  }

  .btn-order {
    width: size(81.5);
   // top: size(859.62);
    top:calc(100% + (875 - 980 * 1) * 100vw / 1920);
    left: size(919.86);
    cursor: pointer;
    background: #fff0;
    border-radius: 50%;
    transition: background .5s;
    &:hover{
    background: #fff;}
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s1 {
    height: calc(100vh - 63px);
    min-height: size-m(604);
    max-height: size-m(750);

    .wave{
    bottom:calc(50% + (0 - 750 * .5) * 100vw / 375);
      .shadow1 {
        bottom: size-m(-40);
        img {
          height: size-m(182);
        }
      }

      .shadow2 {
        bottom: size-m(128);
        img {
          height: size-m(75);
        }
      }

      .shadow3 {
        bottom: size-m(123);
        img {
          height: size-m(75);
        }
      }

      .l1 {
        bottom: size-m(81);
        img {
          height: size-m(75);
        }
      }

      .l2 {
        bottom: size-m(133);
        img {
          height: size-m(75);
        }
      }

      .l3 {
        bottom: size-m(53);
        img {
          height: size-m(109);
        }
      }

      .light1 {
        width:size-m(1071);
        bottom:size-m(53);
      }
    }

    .title {
      width: size-m(375);
      top: size-m(119);
      left: size-m(0);
    }
  .logo1 {
    width: size-m(120);
    // top: size(169);
    top:calc(30% + (119 - 750 * .3) * 100vw / 375);
    left:calc(50% - #{size-m(120 * .5)});
  }
  .logo2 {
    width: size-m(145);
    // top: size(169);
    top:calc(30% + (190 - 750 * .3) * 100vw / 375);
    left:calc(50% - #{size-m(145 * .5)});
  }

  .t1 {
    width: size-m(285);
    // top: size(169);
    top:calc(30% + (298 - 750 * .30) * 100vw / 375);
    left:calc(50% - #{size-m(285 * .5)});
  }
  .t2{
    width: size-m(190);
    // top: size(169);
    top:calc(30% + (336 - 750 * .30) * 100vw / 375);
    left:calc(50% - #{size-m(190 * .5)});
  }

  .img {
    width: size-m(900);
    // top: size(169);
    top:calc(50% + (460 - 750 * .5) * 100vw / 375);
    left:calc(50% - #{size-m(900 * .5)});
  }
  }
}
</style>
<script setup>
import { inject } from 'vue';
const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
  menuOpen.value = false;
}
</script>
