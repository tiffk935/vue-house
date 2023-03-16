<template>
  <section class="s1 text-white bg-[#00332a] relative">
    <img class="bg hidden md:block" src="@/section/s1/bg.jpg" />
    <img class="bg md:hidden" src="@/section/s1/bg-m.jpg" />
    <div class="bg2"></div>
    <img class="crystal absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/crystal.png" />
    <img class="crystal1 absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/crystal.svg" />
    <div class="logo absolute" data-aos="head-up" data-aos-delay="0" data-aos-duration="1050">
      <img class="w-full" src="@/section/s1/logo.svg" />
    </div>
    <div class="text absolute md:hidden" data-aos="head-up" data-aos-delay="0" data-aos-duration="1050">
      <div class="wrapper">
        <div class="t1">國際北士科<span class="text-[#E3B15F]">｜</span>文林北路首席</div>
        <div class="t2">2-4房 25-43坪 2823-5888</div>
        <img class="t3" src="@/section/s1/t3-m.svg" />
        <div class="order-btn" @click="scrollTo('.order')"></div>
      </div>
    </div>
    <div class="text absolute hidden md:block" data-aos="head-up" data-aos-delay="0" data-aos-duration="1050">
      <div class="wrapper">
        <div class="flex justify-between items-end">
          <div>
            <div class="t1">國際北士科 文林北路首席<span class="text-[#E3B15F]">｜</span>25-43坪<span class="text-[#E3B15F]">｜</span>2-4房<span class="text-[#E3B15F]">｜</span>2823-5888</div>
            <img class="t3" src="@/section/s1/t3.svg" />
          </div>
          <div class="order-btn" @click="scrollTo('.order')"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

// @keyframes floatY {
//   from {
//     transform: translateY(0%);
//   }
//   to {
//     transform: translateY(-10%);
//   }
// }

.s1 {
  width: 100%;
  height: size-m(667);
  font-family: 'Noto Serif TC';
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .bg2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(101);
    background: linear-gradient(180deg, rgba(238, 238, 238, 0) 0%, rgba(238, 238, 238, 0.5) 100%);
    @media screen and (min-width:768px) {
      height: size(215);
    }
  }

  .crystal {
    width: size-m(111);
    top: size-m(131);
    left: size-m(132);
    @media screen and (min-width:768px) {
      width: size(187);
      top: size(254);
      left: size(867);
    }
  }
  .crystal1 {
    width: size-m(113);
    top: size-m(131);
    left: size-m(131);
    @media screen and (min-width:768px) {
      width: size(190);
      top: size(254);
      left: size(866);
    }
  }

  .logo {
    width: size-m(216.47);
    top: size-m(300);
    left: size-m(79.2);
    overflow: hidden;
    @media screen and (min-width:768px) {
      width: size(368.87);
      top: size(540);
      left: size(776);
    }

    img {
      transform: translateY(100%);
      transition: 1.5s all cubic-bezier(.32,0,.24,1.09);
    }

    &.aos-animate img {
      transform: translateY(0);
    }
  }

  .text {
    top: size-m(441);
    left: size-m(79);
    font-weight: 600;
    overflow: hidden;
    @media screen and (min-width:768px) {
      top: size(790);
      left: size(392);
      width: size(1134.77);
    }

    .wrapper {
      transform: translateY(100%);
      transition: 1.5s all cubic-bezier(.32,0,.24,1.09);
    }

    &.aos-animate .wrapper {
      transform: translateY(0);
    }

    .t1 {
      font-size: size-m(18);
      line-height: size-m(26);
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(47);
        letter-spacing: 0.05em;
      }
    }
    
    .t2 {
      font-size: size-m(17);
      line-height: size-m(29);
      letter-spacing: 0.055em;
      @media screen and (min-width:768px) {
        font-size: size(33);
        letter-spacing: 0;
      }
    }

    .t3 {
      width: size-m(216);
      margin: size-m(5) 0 size-m(16) 0;
      @media screen and (min-width:768px) {
        width: size(806.08);
        margin: size(10) 0 0 0;
      }
    }

    .order-btn {
      width: size-m(215);
      height: size-m(55.46);
      background-image: url(@/section/s1/btn-txt.svg);
      background-size: size-m(83.71);
      background-repeat: no-repeat;
      background-position: center center;
      border: size-m(1) solid #E3B15F;
      border-radius: size-m(10);
      cursor: pointer;
      transition: all .2s;
      @media screen and (min-width:768px) {
        width: size(294.27);
        height: size(75.91);
        background-size: size(114.58);
        border: size(1) solid #E3B15F;
        border-radius: size(10);
      }

      &:hover {
        background-color: rgba(0, 94, 85, 0.8);
      }
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
}
</script>
