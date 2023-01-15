<template>
  <section class="s8 relative text-white">
    <div class="bg absolute"></div>
    <div class="p1 absolute parallax"></div>
    <div class="p2 absolute parallax"></div>
    <div class="title absolute">NATURE OF<br />GREEN ISLAND</div>
    <div class="content absolute">
      <div class="fade">
        <div class="t1">生態社子島輕取地利，<br class="md:hidden" />台北的未來在您手中。</div>
        <div class="txt">台北未科技產業廊帶，包含南港生技聚落、內科2.0計劃、北投士林科技園區、生態社子島及圓山新創聚落，其中生態社子島與北士科園區，成為台北市未來發展的核心命題；可開發面積約118公頃的社子島即將轉身人文永續、親水共生的明日聚落，並於2022年底完成公告徵收，台北未來50年就看這裡。</div>
      </div>
    </div>
    
    <div class="grid">
      <div class="fade_s8">
        <div class="t1">︳生態社子島計劃</div>
        <div class="txt">親水生態綠軸貫穿全島，輕軌與捷運北環段交通格局展開</div>
      </div>
      <div class="fade_s8">
        <div class="t1">︳士林再生計畫</div>
        <div class="txt">士電、新紡、士紙與捷運TOD開發案，翻轉北區計劃大未來</div>
      </div>
      <div class="fade_s8">
        <div class="t1">︳北投士林科技園區</div>
        <div class="txt">結合頂尖智慧醫療與科技資源，目標年產值10兆元</div>
      </div>
      <div class="fade_s8">
        <div class="t1">︳銀河灣計劃</div>
        <div class="txt">蘆社大橋串連北士科園區、生態社子島，成為北方開發大型腹地</div>
      </div>
    </div>

    <div class="leaf absolute">
      <img class="w-full block" src="@/section/s2/frame.svg" />
      <img class="window absolute" src="@/section/s2/leaf.gif" />
      <img class="bird1 absolute" src="@/section/s8/bird1.svg" />
      <img class="bird2 absolute" src="@/section/s8/bird2.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size-m(886);
  font-family: 'Noto Serif TC';
  z-index: 1;
  background: #078177;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 75, 71, 0) 0%, #004B47 100%);
    @media screen and (min-width:768px) {
      background: linear-gradient(129.02deg, #11A196 -39.64%, #004B47 95.77%);
    }
  }

  .p1 {
    width: size-m(210);
    height: size-m(247.34);
    top: size-m(55);
    left: size-m(42.5);
    background-image: url(@/section/s8/1.jpg);
    background-size: 100% auto;
    // background-position: 0 100%;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(497);
      height: size(585);
      top: size(203);
      left: size(973);
    }
  }

  .p2 {
    width: size-m(147);
    height: size-m(168.49);
    top: size-m(202.94);
    left: size-m(185.5);
    background-image: url(@/section/s8/2.jpg);
    background-size: 100% auto;
    // background-position: 0 0;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(383);
      height: size(439);
      top: size(478);
      left: size(1381 );
    }
  }

  .title {
    top: size-m(350.8);
    left: size-m(110.18);
    font-size: size-m(13);
    line-height: size-m(18);
    color: #5CBD9E;
    font-weight: 600;
    letter-spacing: 0.1em;
    @media screen and (min-width:768px) {
      top: size(900);
      left: size(1167);
      font-size: size(34);
      line-height: size(48);
    }
  }

  .content {
    width: size-m(290);
    top: size-m(440.09);
    left: size-m(42.5);
    @media screen and (min-width:768px) {
      width: size(630);
      top: size(334);
      left: size(202);
    }

    .t1 {
      font-size: size-m(19);
      line-height: size-m(25);
      font-weight: 700;
      margin-bottom: size-m(12.5);
      @media screen and (min-width:768px) {
        font-size: size(30);
        line-height: size(40);
        margin-bottom: size(26.5);
      }
    }

    .txt {
      font-size: size-m(12);
      line-height: size-m(20);
      font-weight: 500;
      margin-bottom: size-m(49.74);
      @media screen and (min-width:768px) {
        font-size: size(16);
        line-height: size(27);
        margin-bottom: size(0);
        padding-right: size(40);
      }
    }
  }

  .grid {
    .fade_s8 {
      position: absolute;
      width: size-m(130);
      top: size-m(672.33);
      left: size-m(42.5);
      @media screen and (min-width:768px) {
        width: size(251);
        top: size(645);
        left: size(202);
      }

      .t1 {
        font-size: size-m(14);
        line-height: size-m(19);
        font-weight: 700;
        margin-bottom: size-m(3);
        @media screen and (min-width:768px) {
          font-size: size(25);
          line-height: size(34);
          margin-bottom: size(10);
        }
      }

      .txt {
        font-size: size-m(12);
        line-height: size-m(20);
        font-weight: 500;
        text-align: justify;
        @media screen and (min-width:768px) {
          font-size: size(14);
          line-height: size(24);
        }
      }

      &:nth-child(2) {
        top: size-m(672.33);
        left: size-m(202.5);
        @media screen and (min-width:768px) {
          top: size(645);
          left: size(536);
        }
      }

      &:nth-child(3) {
        top: size-m(769.33);
        left: size-m(42.5);
        @media screen and (min-width:768px) {
          top: size(802);
          left: size(202);
        }
      }

      &:nth-child(4) {
        top: size-m(769.33);
        left: size-m(202.5);
        @media screen and (min-width:768px) {
          top: size(802);
          left: size(536);
        }
      }
    }
  }

  .leaf {
    width: size-m(88.25);
    top: size-m(-71.68);
    left: size-m(221.06);
    @media screen and (min-width:768px) {
      width: size(248.17);
      top: size(-37.96);
      left: size(1536);
    }

    .window {
      width: 22.47vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (min-width:768px) {
        width: 12.36vw;
      }
    }

    .bird1 {
      width: size-m(51.79);
      top: size-m(71.65);
      left: size-m(-11.64);
      @media screen and (min-width:768px) {
        width: size(145.63);
        top: size(199.75);
        left: size(-32.27);
      }
    }

    .bird2 {
      width: size-m(51.79);
      top: size-m(71.65);
      left: size-m(50.09);
      @media screen and (min-width:768px) {
        width: size(145.63);
        top: size(199.75);
        left: size(141.3);
      }
    }
  }
}

</style>

<script setup>
</script>