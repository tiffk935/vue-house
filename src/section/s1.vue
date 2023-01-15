<template>
  <section class="s1 relative text-white bg-[#5CBD9E]">
    <img class="bg absolute md:hidden" src="@/section/s1/bg-m.jpg" />
    <img class="bg absolute hidden md:block" src="@/section/s1/bg.jpg" />
    <img class="logo absolute" src="@/section/s1/logo.svg" />
    <div class="t1 absolute fade">生<br />有<br />熱<br />烈<br />，<br />藏<br />於<br />俗<br />常</div>
    <div class="t2 absolute fade">公<br />園<br />建<br />築<br />為<br />您<br />而<br />來<br />。</div>
    <div class="order-btn absolute" @click="scrollTo('.order')">立即預約</div>
    <div class="t3 absolute md:hidden fade">德林哲人之里<br />戶戶公園首席</div>
    <div class="t4 absolute md:hidden fade"><span>23~39坪｜2~3房</span><br />8787-8888</div>
    <div class="t5 absolute hidden md:block fade">德林哲人之里  戶戶公園首席  23~39 坪 ｜ 2~3 房  8787-8888</div>
    <img class="group absolute md:hidden" src="@/section/s1/group-m.svg" />
    <img class="group absolute hidden md:block" src="@/section/s1/group.svg" />
    <div class="light">
      <img class="absolute" src="@/section/s1/sun.png" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes sun {
  to {
    transform: skewX(0deg);
  }
}

.s1 {
  width: 100%;
  height: size-m(812);
  font-family: 'Noto Serif TC';
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .logo {
    width: size-m(86);
    top: size-m(99);
    left: size-m(144.5);
    @media screen and (min-width:768px) {
      width: size(140.74);
      top: size(105);
      left: size(896);
    }
  }

  .t1, .t2 {
    width: size-m(20);
    top: size-m(251);
    left: size-m(188.62);
    font-size: size-m(16);
    line-height: 1.187;
    font-weight: 500;
    @media screen and (min-width:768px) {
      width: size(36);
      top: size(382);
      left: size(963);
      font-size: size(30);
    }
  }

  .t2 {
    top: size-m(267);
    left: size-m(166.38);
    @media screen and (min-width:768px) {
      top: size(409);
      left: size(920.14);
    }
  }

  .order-btn {
    width: size-m(149.47);
    height: size-m(33);
    top: size-m(526);
    left: size-m(113.26);
    font-size: size-m(19);
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.2em;
    font-weight: 700;
    border-radius: 999px;
    border: size-m(1) solid #fff;
    background: #fff;
    color: #004B47;
    cursor: pointer;
    transition: all .2s;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(209.5);
      height: size(45.91);
      top: size(809);
      left: size(855.25);
      font-size: size(27);
      border: size(1) solid #fff;
    }

    &:hover {
      background: rgba(0, 80, 75, 0.56);
      color: #fff;
    }
  }

  .t3 {
    top: size-m(593.73);
    left: size-m(62.85);
    font-size: size-m(19);
    line-height: size-m(24);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .t4 {
    top: size-m(586.73);
    left: size-m(185.15);
    font-size: size-m(25);
    line-height: size-m(27);
    font-weight: 500;
    letter-spacing: 0.02em;

    span {
      font-size: size-m(16);
      line-height: size-m(19.2);
    }
  }

  .t5 {
    @media screen and (min-width:768px) {
      top: size(904.41);
      left: size(565);
      font-size: size(29);
      line-height: size(34.8);
      font-weight: 500;
      letter-spacing: 0.02em;
    }
  }

  .group {
    width: size-m(247.83);
    top: size-m(649.9);
    left: size-m(63.11);
    @media screen and (min-width:768px) {
      width: size(792.55);
      top: size(953);
      left: size(563.72);
    }
  }

  .light img {
    mix-blend-mode: screen;
    transform: rotate(41.31deg);
    transform-origin: 35% 45%;
    width: size-m(832.67);
    top: size-m(-341.42);
    left: size-m(-368.06);
    opacity: 0.8;
    max-width: none;
    animation: sun 6s linear infinite alternate;
    @media screen and (min-width:768px) {
      transform: rotate(22.47deg);
      width: size(1607.19);
      top: size(-657.43);
      left: size(-367.86);
    }
  }

  // .title{
  //   position: absolute;
  //   top: size(550);
  //   right:size(280);

  //   @media screen and (max-width:768px) {
  //     text-align: center;
  //     top: size-m(240);
  //     right:size-m(70);
  //   }

  //   .t1{
  //     font-size: size(46);
  //     color: #fff;
  //     font-weight: 900;
  //     margin-bottom:size(-20);

  //     @media screen and (max-width:768px) {
  //       font-size: size-m(29);
  //       margin-bottom:size-m(-15);
  //     }
  //   }

  //   .t2{
  //     font-size: size(40);
  //     color: #fff;
  //     font-weight:500;

  //     @media screen and (max-width:768px) {
  //       font-size: size-m(25);
  //     }

  //     span{
  //       color: #FFF100;
  //       font-size: size(61);

  //       @media screen and (max-width:768px) {
  //       font-size: size-m(34);
  //     }
  //     }
  //   }

  // }



  // .cloud {
  //   top: size-m(346);
  //   left: size-m(136);
  //   width: size-m(158);
  //   animation: floatY 6s alternate-reverse infinite ease-in-out;
  //   @media screen and (min-width:768px) {
  //     top: size(126);
  //     left: size(389);
  //     width: size(402);
  //   }
  // }



  // .house {
  //   top: size-m(488);
  //   left: size-m(35);
  //   width: size-m(304);
  //   @media screen and (min-width:768px) {
  //     top: size(759);
  //     left: size(1232);
  //     width: size(575);
  //   }
  // }

  // .logo {
  //   top: size-m(62);
  //   left: size-m(64);
  //   width: size-m(246);
  //   @media screen and (min-width:768px) {
  //     top: size(382);
  //     left: size(722.85);
  //     width: size(448.81);
  //   }
  // }

  // .text {
  //   top: size-m(243);
  //   left: size-m(68);
  //   width: size-m(238);
  //   @media screen and (min-width:768px) {
  //     top: size(557);
  //     left: size(1230);
  //     width: size(410);
  //   }
  // }
}
</style>

<script setup>
import { inject } from 'vue';
const props = defineProps({
  smallScrollBar: {
    type: Object
  }
});
const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  props.smallScrollBar.scrollTo(0, document.querySelector('.order').getBoundingClientRect().top, 1000);
}
</script>
