<template>
  <section class="s1 w-full relative">
    <div class="bg"></div>
    <img class="logo absolute" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0" src="@/section/s1/logo.svg" />
    <div class="gold absolute" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="100">
    <img src="@/section/s1/gold.png" /></div>
    <div class="stars">
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
      <img class="star absolute" src="@/section/s1/star.svg" />
    </div>
    <div class="butterfly1 absolute"><img src="@/section/s1/butterfly1.svg" /></div>
    <div class="butterfly2 absolute"><img src="@/section/s1/butterfly2.svg" /></div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes twinkle {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes twinkle1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

.s1 {
  overflow: hidden;
  height: 100vh;
  min-height: size-m(667);
  max-height: size-m(667);
  background-image: url(@/section/s1/bg.jpg);
  background-size: auto 100%;
  background-position: size-m(-204) 0;
  @media (min-width: 768px) {
  min-height:size(900);
    max-height: size(1080);
    background-position: center center;
  }

  .logo {
    width: size-m(263);
    top: size-m(147);
    left: size-m(56);
    @media (min-width: 768px) {
      width: size(506);
      top:calc(50% + #{size(370 - 1080 * .5)});
      left: size(707);
    }
  }
@keyframes gold {
  to {
    width: 0;
  }
}
.gold {
  width: size-m(991);
  bottom:size-m(-20);
  right: size-m(-80);
  max-width: none;
  mix-blend-mode: color-dodge;
  overflow: hidden;
  //animation:  gold  5s 3s reverse both ;
  animation: 5s ease-in-out 1s infinite alternate twinkle1;

  @media (min-width: 768px) {
    width: size(1820);
    bottom:0;
  right:size(-20);
  }
    img{
    width: size-m(991);
    max-width: none;
    float: right;
    @media (min-width: 768px) {
      width: size(1820);
    }
  }
  }

  .stars {
    .star {
      &:nth-child(1) {
        width: size-m(34.53);
        top: size-m(177.31);
        left: size-m(326.73);
        animation: 3s linear 1s infinite alternate twinkle;
        @media (min-width: 768px) {
          width: size(57);
          top: size(433);
          left: size(368);
        }
      }

      &:nth-child(2) {
        width: size-m(17.79);
        top: size-m(362.4);
        left: size-m(104.11);
        animation: 4s linear 0s infinite alternate twinkle;
        @media (min-width: 768px) {
          width: size(104.12);
          top: size(70);
          left: size(793.5);
        }
      }

      &:nth-child(3) {
        width: size-m(38.71);
        top: size-m(118.28);
        left: size-m(47.64);
        animation: 2.5s linear 0.5s infinite alternate twinkle;
        @media (min-width: 768px) {
          width: size(45.5);
          top: size(822.5);
          left: size(1805.75);
        }
      }

      &:nth-child(4) {
        width: size-m(34);
        top: size-m(408);
        left: size-m(212.5);
        animation: 1.25s linear 1.5s infinite alternate twinkle;
        @media (min-width: 768px) {
          width: size(60);
          top: size(102.43);
          left: size(1434.42);
        }
      }

      &:nth-child(5) {
        width: size-m(35);
        top: size-m(35.56);
        left: size-m(314);
        animation: 3.5s linear 0.5s infinite alternate twinkle;
        @media (min-width: 768px) {
          width: size(47.61);
          top: size(990.5);
          left: size(484.7);
        }
      }

      &:nth-child(6) {
        display: none;
        animation: 3s linear 1s infinite alternate twinkle;
        @media (min-width: 768px) {
          display: block;
          width: size(60.17);
          top: size(503.43);
          left: size(27.42);
        }
      }

      &:nth-child(7) {
        display: none;
        animation: 4s linear 0s infinite alternate twinkle;
        @media (min-width: 768px) {
          display: block;
          width: size(42.39);
          top: size(491);
          left: size(1679.32);
        }
      }

      &:nth-child(8) {
        display: none;
        animation: 1.8s linear 0.5s infinite alternate twinkle;
        @media (min-width: 768px) {
          display: block;
          width: size(65.4);
          top: size(768);
          left: size(778.8);
        }
      }

      &:nth-child(9) {
        display: none;
        animation: 2s linear 1.5s infinite alternate twinkle;
        @media (min-width: 768px) {
          display: block;
          width: size(90.38);
          top: size(607.4);
          left: size(1159.82);
        }
      }
    }
  }

  .butterfly1 {
    width: size-m(25);
    bottom: size-m(220);
    left: size-m(287);
    transform: translateY(50%);
    animation: an 5s ease-in infinite alternate;
    img{width: 100%;
    transform:rotate(-55deg);}
    @media (min-width: 768px) {
      width: size(45);
      bottom: size(330);
      left: size(1643);
    }
  }

  .butterfly2 {
    width: size-m(26.47);
    bottom: size-m(120);
    left: size-m(56);
    transform: translate(-90%, 50%);
    animation: an 3s ease-in-out infinite alternate;
    img{width: 100%;
    transform:rotate(-45deg);}
    @media (min-width: 768px) {
      width: size(46.47);
      bottom: size(70);
      left: size(1330);
    }
  }
}
</style>

<script setup>
// import { inject } from 'vue';
// const smoothScroll = inject('smoothScroll')
// const scrollTo = (el) => {
//   smoothScroll({
//     scrollTo: document.querySelector(el)
//   })
// }
</script>
