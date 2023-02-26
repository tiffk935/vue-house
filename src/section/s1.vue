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
    <img class="title absolute hidden md:block" src="@/section/s1/title.svg" />
    <img class="title absolute md:hidden" src="@/section/s1/title-m.svg" />
    <img class="btn-order absolute hidden md:block" @click="scrollTo('.order')" src="@/section/s1/btn.svg" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  @apply relative w-full h-screen;// overflow-hidden;
  // min-height: size(900);
  // max-height: size(1080);
  height: size(980);
  $mar: size(0);

  &::before {
    content: "";
    background: #E8E3DC;
    position: absolute;
    top: $mar;
    bottom: $mar;
    left: $mar;
    right: $mar;
  }

  .wave {
    position: absolute;
    bottom: $mar;
    left: $mar;
    right: $mar;
    top: $mar;
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
    top: size(169);
    left: size(86.46);
  }

  .btn-order {
    width: size(81.5);
    top: size(859.62);
    left: size(919.86);
    cursor: pointer;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s1 {
    height: 100vh;
    min-height: size-m(667);
    max-height: size-m(750);
    $mar: size-m(0);

    &::before{
      top: $mar;
      bottom: $mar;
      left: $mar;
      right: $mar;
    }

    .wave{
      bottom: $mar;
      left: $mar;
      right: $mar;
      top: $mar;

      .shadow1 {
        bottom: size-m(-140);
        img {
          height: size-m(182);
        }
      }

      .shadow2 {
        bottom: size-m(28);
        img {
          height: size-m(75);
        }
      }

      .shadow3 {
        bottom: size-m(23);
        img {
          height: size-m(75);
        }
      }

      .l1 {
        bottom: size-m(-19);
        img {
          height: size-m(75);
        }
      }

      .l2 {
        bottom: size-m(33);
        img {
          height: size-m(75);
        }
      }

      .l3 {
        bottom: size-m(-47);
        img {
          height: size-m(109);
        }
      }

      .light1 {
        width:size-m(1071);
        bottom:size-m(-47);
      }
    }

    .title {
      width: size-m(375);
      top: size-m(119);
      left: size-m(0);
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
