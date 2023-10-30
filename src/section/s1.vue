<template>
  <section class="s1 text-white bg-[#a4867e] relative">
    <img class="style2 absolute" data-aos="zoom-in" data-aos-duration="3000" src="@/section/s1/style1.png" />
    <img class="style1 absolute" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="3000" src="@/section/s1/style1.png" />
    <img class="en absolute" data-aos="zoom-in" data-aos-delay="800" data-aos-offset="-300" data-aos-duration="1000" src="@/section/s1/en.png" />
    <img class="logo absolute" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" src="@/section/s1/logo.svg" />
    <div class="t1 absolute" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">隈の日本絕美藝術</div>
    <div class="caption">建築代銷：<img src="@/section/s1/slogo.svg" alt="清揚">國際實業(股)　研森大廳公設藝術品　3D示意圖｜版權所有© 清景麟建築團隊．隈研吾建築都市設計事務所 作成．提供</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  width: 100%;
  height: 100vh;
  min-height:size-m(570);
  max-height:size-m(667);
  overflow: hidden;
  @media screen and (min-width:768px) {
    min-height:size(900);
    max-height:size(1080);
  }

  .style1 {
    max-width: 200%;
    left: -31vw;
    bottom: -18vw;
    width: 124vw;
    transform-origin: bottom left;
    @media screen and (min-width:768px) {
    left: -10vw;
    bottom: calc(70% + #{size(-55-1080 * .7)});
    width: 58vw;
    }
  }

  .style2 {
    left: -10vw;
    bottom: -41vw;
    width: 98vw;
    transform-origin: bottom left;
    mix-blend-mode: soft-light;
    opacity: .3;
    @media screen and (min-width:768px) {
    left: -1vw;
    bottom: calc(50% + #{size(-270-1080 * .5)});
    width: 47vw;
    }
  }

  .en {
    width: size-m(144);
    left: size-m(205);
    bottom: size-m(60);
    @media screen and (min-width:768px) {
      width: size(340);
      left: size(515);
      bottom: size(60);
    }
  }

  .logo {
    width: size-m(200);
    left: size-m(88);
    top: size-m(125);
      top: calc(60% + #{size-m(125-667*.6)});
    @media screen and (min-width:768px) {
      width: size(500);
      left: size(1030);
      top: calc(50% + #{size(450-540)});
    }
  }
    .t1 {
    left: size-m(87);
      top: calc(60% + #{size-m(190-667*.6)});
      font-size: size-m(15);
      line-height: size-m(30);
      font-weight: 300;
        letter-spacing: 0.77em;
      @media screen and (min-width:768px) {
      left: size(1054);
      top:calc(50% + #{size(609-540)});;
        font-size: size(36);
        line-height: size(58);
      }
    }
    
.caption{
      left:auto;
      right: .5em;text-shadow: 0 0 0 #0000;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
      img{height: 1.5em;vertical-align:-.3em;}
}
}
</style>

<script setup>
</script>
