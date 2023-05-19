<template>
  <section class="s7 relative text-white">
    <!-- <div class="bg234 absolute w-full"></div> -->
    <div class="p1 absolute parallax"></div>
    <div class="p2 absolute parallax"></div>
    <div class="title absolute fade">CONCENTRATE ON<br />ARCHITECTURE</div>
    <div class="content absolute">
      <img class="logo" src="@/section/s7/logo.svg" />
      <div class="fade">
        <div class="t1">北市精品規格全面移植。</div>
        <div class="txt">德林建設機構創立於1985年，建築作品以高滿意度、高指名度聞名；以誠信專業與客戶交陪，精砌雕琢建築品味，以自訂高標準規格落籍社子公園首席。</div>
      </div>
      <div class="fade">
        <div class="t1">質純精粹立地都會精華。</div>
        <div class="txt">德林建設機構1999年「國家藝術賞」引領都市建築美學，此後開展台北都會精華區域建築美學，如中正區「青田」、「林与堂」等皆為人文質精的都市地標。</div>
      </div>
      <div class="fade">
        <div class="t1">一條龍全方位整合服務。</div>
        <div class="txt">德林建設機構認為「不需要服務，才是最好的售後服務」。從開發、營造、售服等整合性系統，一制性的高品質服務也為客戶的資產創造恆久永續的價值。</div>
      </div>
    </div>
    <div class="leaf absolute">
      <img class="w-full block" src="@/section/s7/frame.svg" />
      <img class="window absolute" src="@/section/s7/leaf.gif" />
      <img class="bird absolute" src="@/section/s7/bird.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size-m(1102);
  font-family: 'Noto Serif TC';
  z-index: 1;
  background: linear-gradient(191.29deg, #209589 22.21%, #096960 86.69%);
  @media screen and (min-width:768px) {
    height: size(1080);
    background: linear-gradient(180deg, #11A196 0%, #11A196 100%, #17867C 100%);
  }

  .bg234 {
    top: 0;
    left: 0;
    height: size-m(4824);
    background: linear-gradient(113.99deg, #11A196 -15.34%, #0C887F 30.12%, #004B47 122.41%);
    @media screen and (min-width:768px) {
      // background: #078177;
      display: none;
    }
  }

  .p1 {
    width: size-m(210);
    height: size-m(247.34);
    top: size-m(55);
    left: size-m(123);
    background-image: url(@/section/s7/1.jpg);
    background-size: 100% auto;
    // background-position: 0 100%;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(497);
      height: size(585);
      top: size(145);
      left: size(467.79);
    }
  }

  .p2 {
    width: size-m(147);
    height: size-m(168.6);
    top: size-m(189);
    left: size-m(43);
    background-image: url(@/section/s7/img.jpg);
    background-size: 100% auto;
    // background-position: 0 0;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(381);
      height: size(436.71);
      top: size(439.9);
      left: size(189);
    }
  }

  .title {
    top: size-m(340.26);
    left: size-m(175.15);
    font-size: size-m(13);
    line-height: size-m(18);
    color: #5CBD9E;
    font-weight: 600;
    letter-spacing: 0.1em;
    @media screen and (min-width:768px) {
      top: size(826.5);
      left: size(484);
      font-size: size(34);
      line-height: size(48);
    }
  }

  .content {
    width: size-m(290);
    top: size-m(393.91);
    left: size-m(43);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(589.06);
      top: size(166);
      left: size(1120);
    }

    .logo {
      width: size-m(114);
      margin-bottom: size-m(24.02);
      @media screen and (min-width:768px) {
        width: size(240);
        margin-bottom: size(73.84);
      }
    }

    .t1 {
      font-size: size-m(21);
      line-height:1.34;
      font-weight: 700;
      margin-bottom: size-m(9.5);
    letter-spacing: .03em;
      @media screen and (min-width:768px) {
        font-size: size(32);
        margin-bottom: size(26.5);
      }
    }

    .txt {
      font-size: size-m(15);
      line-height:1.5;
      margin-bottom: size-m(24.5);
      font-weight: 300;
    letter-spacing: 0em;
    font-family: 'Noto sans TC';
      @media screen and (min-width:768px) {
        font-size: size(19);
        margin-bottom: size(70);
      font-weight: 200;
      letter-spacing: .1em;
        line-height:1.7;
      }
    }
  }

  .leaf {
    width: size-m(85.25);
    top: size-m(984.67);
    left: size-m(73.87);
    @media screen and (min-width:768px) {
      width: size(248.17);
      top: size(1034);
      left: size(484);
    }
    .w-full{position: relative;z-index: 2;}
    .window {
      width: 23vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);filter: blur(2px);

      @media screen and (min-width:768px) {
        width: 12.7vw;
      }
    }

    .bird {
      width: size-m(51.79);
      top: size-m(70.94);
      left: size-m(12.3);
      @media screen and (min-width:768px) {
        width: size(145.63);
        top: size(200.19);
        left: size(34.58);
      }
    }
  }
}

</style>

<script setup>
</script>