<template>
  <section class="s10 w-full relative text-white">
    <div class="bg absolute"></div>
    <img class="cloud absolute" src="@/section/s10/cloud.png" />
    <img class="moon absolute" src="@/section/s10/moon.png" />
    <div class="txt absolute" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">當渴望的夢想<br>有了家的想像</div>
    <div class="bubbles">
      <img class="bubble absolute" src="@/section/s10/bubble.png" />
      <img class="bubble absolute" src="@/section/s10/bubble.png" />
      <img class="bubble absolute" src="@/section/s10/bubble.png" />
      <img class="bubble absolute" src="@/section/s10/bubble.png" />
      <img class="bubble absolute" src="@/section/s10/bubble.png" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  height: size-m(517);
  overflow: hidden;
  @media (min-width: 768px) {
    height: size(1080);
  }

  img {
    max-width: unset;
  }

  .bg {
    width: 100%;
    height: size-m(667);
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #002672 0%, #00489B 30.73%, #0082D0 59.37%, #00B5FF 74.48%, #8FDEFF 100%);
    transform: rotate(180deg);
    @media (min-width: 768px) {
      height: size(1110);
      top: size(-30);
    }
  }

  .cloud {
    width: size-m(884);
    top: size-m(-45);
    left: size-m(-379);
    @media (min-width: 768px) {
      width: size(1920);
      top: size(-140);
      left: size(0);
    }
  }

  .moon {
    width: size-m(764.38);
    top: size-m(38);
    left: size-m(-203);
    @media (min-width: 768px) {
      width: size(2197.33);
      top: size(1080 - 1236);
      left: size(-139);
    }
  }

  .txt {
    top: size-m(216);
    left: size-m(72);
    font-family: "Noto Serif TC";
    font-size: size-m(30);
    font-weight: 700;
    line-height: normal;
    letter-spacing: size-m(9.9);
    @media (min-width: 768px) {
      top: size(454);
      left: size(730);
      font-size: size(60);
      letter-spacing: size(19.8);
    }
  }

  .bubbles {
    .bubble {
      mix-blend-mode: screen;
      animation:an 16s linear infinite reverse;
      transform: translateY(size(1080));

      &:nth-child(1) {
        top: size-m(80);
        left: size-m(32);
        width: size-m(42);
        animation-duration: 19s;
        animation-delay: -4s;
        @media (min-width: 768px) {
          // top: size(229 - 1080);
          top: 0;
          left: size(280);
          width: size(68);
        }
      }

      &:nth-child(2) {
        top: size-m(412);
        left: size-m(264);
        width: size-m(23);
        animation-duration: 27s;
        animation-delay: -2s;
        @media (min-width: 768px) {
          // top: size(187 - 1080);
          top: 0;
          left: size(382);
          width: size(40);
        }
      }

      &:nth-child(3) {
        top: size-m(438);
        left: size-m(207);
        width: size-m(41);
        animation-duration:26s;
        animation-delay:-7s;
        @media (min-width: 768px) {
          // top: size(902 - 1080);
          top: 0;
          left: size(422);
          width: size(73);
        }
      }

      &:nth-child(4) {
        top: size-m(178);
        left: size-m(306);
        width: size-m(19);
        animation-duration:25s;
        animation-delay:0s;
        @media (min-width: 768px) {
          // top: size(732 - 1080);
          top: 0;
          left: size(1144);
          width: size(42);
        }
      }

      &:nth-child(5) {
        display: none;
        animation-duration:30s;
        animation-delay:-1s;
        @media (min-width: 768px) {
          display: block;
          // top: size(324 - 1080);
          top: 0;
          left: size(1586);
          width: size(95);
        }
      }
    }
  }
}
</style>

<script setup>
</script>