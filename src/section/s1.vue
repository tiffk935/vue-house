<template>
  <section class="s1 relative text-white bg-[#5CBD9E]">
    <div class="bg absolute parallax"></div>
    <img class="bg bg01 absolute" src="@/section/s1/01.gif" />
    <img class="bg bg02 absolute" src="@/section/s1/02.gif" />
    <img class="logo absolute" src="@/section/s1/logo.svg" />
    <div class="t1 absolute fade">生<br />有<br />熱<br />烈<br />，<br />藏<br />於<br />俗<br />常</div>
    <div class="t2 absolute fade">公<br />園<br />建<br />築<br />為<br />您<br />而<br />來<br />。</div>
    <div class="order-btn absolute" @click="scrollTo('.order')">立即預約</div>
    <div class="t3 absolute md:hidden fade">德林哲人之里 戶戶社子公園首席</div>
    <div class="t4 absolute md:hidden fade">23~39坪 ｜ 2~3房 ｜ 8787-8888</div>
    <div class="t5 absolute hidden md:block fade">德林哲人之里 戶戶社子公園首席 23~39 坪 ｜ 2~3 房  8787-8888</div>
    <img class="group absolute md:hidden" src="@/section/s1/group-m.svg" />
    <img class="group absolute hidden md:block" src="@/section/s1/group.svg" />
    <div class="light">
      <img class="absolute" src="@/section/s1/sun.jpg" />
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

.bg{
  top:0;
  width:100%;
  height: 100%;
  object-fit: cover;
  background-image:url("@/section/s1/bg-m.jpg");
    background-size: 100% auto;
  @media screen and (min-width:768px) {
  background-image:url("@/section/s1/bg.jpg");
  }
}
.bg01{
  mix-blend-mode: overlay;
  opacity: 0.6;
}
.bg02{  
  mix-blend-mode: screen;
  opacity: 0.5;
  filter: blur(7.5px);
}  
.s1 {
  width: 100%;
  height: 100vh;
  min-height:size-m(667);
  max-height:size-m(812);
  font-family: 'Noto Serif TC';
  overflow: hidden;
  @media screen and (min-width:768px) {
    min-height:size(800);
    max-height:size(1080);
  }

  .logo {
    width: size-m(86);
    top:calc(30% + (99 - 812 * .30) * 100vw / 375);
    left: size-m(148.5);
    filter: drop-shadow(0 0 size-m(10) #1A2E37);
    @media screen and (min-width:768px) {
      width: size(140.74);
      top:calc(27% + (105 - 1080 * .25) * 100vw / 1920);
      left: size(896);
    filter: drop-shadow(0 0 size(20) #1A2E37);
    }
  }

  .t1, .t2 {
    width: size-m(20);
    top:calc(40% + (251 - 812 * .40) * 100vw / 375);
    left: size-m(188.62);
    font-size: size-m(16);
    line-height: 1.187;
    font-weight: 500;
    filter: drop-shadow(0 0 size-m(10) #1A2E37);
    @media screen and (min-width:768px) {
      width: size(36);
      top:calc(45% + (382 - 1080 * .45) * 100vw / 1920);
      left: size(963);
      font-size: size(28);
    filter: drop-shadow(0 0 size(20) #204252);
    }
  }

  .t2 {
    top: size-m(267);
    top:calc(40% + (267 - 812 * .4) * 100vw / 375);
    left: size-m(166.38);
    @media screen and (min-width:768px) {
      top:calc(45% + (409 - 1080 * .45) * 100vw / 1920);
      left: size(920.14);
    }
  }

  .order-btn {
    width: size-m(149.47);
    height: size-m(33);
    top:calc(70% + (526 - 812 * .70) * 100vw / 375);
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
      top:calc(60% + (809 - 1080 * .6) * 100vw /1920);
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
    top:calc(80% + (593.73 - 812 * .80) * 100vw / 375);
    left: size-m(48.85);
    font-size: size-m(19);
    line-height: size-m(24);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .t4 {
    top: size-m(620.73);
    top:calc(80% + (615.73 - 812 * .80) * 100vw / 375);
    left: size-m(48.85);
    font-size: size-m(18);
    line-height: size-m(27);
    font-weight: 500;
    letter-spacing: 0.04em;

    span {
      font-size: size-m(19);
      line-height: size-m(19.2);
      margin-right: size-m(30);
    }
  }

  .t5 {
    @media screen and (min-width:768px) {
      top:calc(70% + (905 - 1080 * .7) * 100vw / 1920);
      left: size(530);
      font-size: size(29);
      line-height: size(34.8);
      font-weight: 500;
      letter-spacing: 0.02em;
    filter: drop-shadow(0 0 size(20) #1A2E37);
    }
  }

  .group {
    width: size-m(270.83);
    top: size-m(652.9);
    top:calc(80% + (645.9 - 812 * .80) * 100vw / 375);
    left: size-m(48.85);
    filter: drop-shadow(0 0 size-m(10) #1A2E37);
    @media screen and (min-width:768px) {
      width: size(833);
      top:calc(70% + (953 - 1080 * .7) * 100vw / 1920);
      left: size(530);
    filter: drop-shadow(0 0 size(20) #1A2E37);
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

    //animation: sun 6s linear infinite alternate;
    @media screen and (min-width:768px) {
      transform: rotate(22.47deg);
      width: size(1307.19);
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
