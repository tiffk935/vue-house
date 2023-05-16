<template>
  <section class="s6 relative text-white">
    <div class="p1 absolute parallax"></div>
    <div class="p2 absolute parallax"></div>
    <div class="title absolute fade">THE INTERSECTION<br />OF FUTURE LIFE</div>
    <div class="content absolute">
      <div class="fade">
        <div class="t1">定格雙北正核心，<br class="md:hidden">四通八達暢意快遊。</div>
        <div class="txt">本案位居雙北核心地帶，往北跨社子大橋連接石牌商圈、洲美快速道路對銜北士科園區，往南經延平北路、環河快速道路串連西區雙子星計畫；百齡橋直接士林商圈、重陽大橋接壤銀河灣計劃，國道一號兩端串連新莊副都心與大直重劃區…核心位置不言可諭。</div>
      </div>
      <div class="fade">
        <div class="t1">北環捷運輕軌計畫，<br class="md:hidden">四方對銜前瞻發展。</div>
        <div class="txt">捷運北環段以新北產業園區站為起始點，循重陽橋經社子、士林至大直劍南站交會文湖線，「德林哲里」近距社正公園捷運站約750公尺，為捷運北環段與社子輕軌南北線預計交匯處，往南連接轉乘捷運蘆洲線進入民權西路站，往北接壤北士科園區福國路與八里淡水方向。</div>
      </div>
    </div>
    <div class="leaf absolute">
      <img class="w-full block" src="@/section/s2/frame.svg" />
      <img class="window absolute" src="@/section/s2/leaf.gif" />
      <img class="bird1 absolute" src="@/section/s6/bird1.svg" />
      <img class="bird2 absolute" src="@/section/s6/bird2.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size-m(970);
  font-family: 'Noto Serif TC';
  z-index: 1;
  background: linear-gradient(192.13deg, #09665E 2.4%, #20968A 89.24%);
  @media screen and (min-width:768px) {
    height: size(1080);
    background: linear-gradient(180deg, #0B6F65 0%, #11A196 100%, #178A7F 100%);
  }

  .p1 {
    width: size-m(210);
    height: size-m(247.34);
    top: size-m(55);
    left: size-m(123);
    background-image: url(@/section/s6/1.jpg);
    background-size: 100% auto;
    // background-position: 0 100%;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(497);
      height: size(585);
      top: size(145);
      left: size(933);
    }
  }

  .p2 {
    width: size-m(147);
    height: size-m(168.6);
    top: size-m(189);
    left: size-m(43);
    background-image: url(@/section/s6/2.jpg);
    background-size: 100% auto;
    // background-position: 0 0;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(383);
      height: size(439);
      top: size(438.75);
      left: size(1321);
    }
  }

  .title {
    top: size-m(350.26);
    left: size-m(140.15);
    font-size: size-m(13);
    line-height: size-m(18);
    color: #5CBD9E;
    font-weight: 600;
    letter-spacing: 0.1em;
    @media screen and (min-width:768px) {
      top: size(855.5);
      left: size(1015);
      font-size: size(34);
      line-height: size(48);
    }
  }

  .content {
    width: size-m(290);
    top: size-m(441.27);
    left: size-m(43);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(620);
      top: size(281.5);
      left: size(189);
    }

    .t1 {
      font-size: size-m(21);
      line-height:1.34;
      font-weight: 700;
      margin-bottom: size-m(9.5);
      letter-spacing: .03em;
      @media screen and (min-width:768px) {
        font-size: size(33);
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
    width: size-m(88.25);
    top: size-m(-53.22);
    left: size-m(75.37);
    @media screen and (min-width:768px) {
      width: size(248.17);
      top: size(-122);
      left: size(1536.9);
    }
    .w-full{position: relative;z-index: 2;}

    .window {
      width: 23vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(2px);
      @media screen and (min-width:768px) {
        width: 12.7vw;
      }
    }

    .bird1 {
      width: size-m(51.79);
      top: size-m(70.94);
      left: size-m(-8.14);
      @media screen and (min-width:768px) {
        width: size(145.63);
        top: size(200.19);
        left: size(34.58);
      }
    }

    .bird2 {
      width: size-m(65.26);
      top: size-m(23.8);
      left: size-m(42.13);
      @media screen and (min-width:768px) {
        width: size(183.5);
        top: size(68);
        left: size(118.92);
      }
    }
  }
}

</style>

<script setup>
</script>