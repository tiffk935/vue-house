<template>
  <section class="s10 w-full relative">
    <div class="md:flex md:justify-center md:items-end md:flex-row-reverse md:translate-x-[-5.885vw]">
      <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="logo" src="@/section/s10/logo.svg" />
        <div class="head">
          <div class="t2">富麗營造</div>
          <div class="labell absolute">
            <div class="labell-en">construction project</div>
            <div class="labell-zh">營造工程</div>
          </div>
        </div>
        <div class="t4">
          秉持初心，全新投入，是不變的信念，憑藉三十年經驗，擁有團隊各領域專業工藝和精益求精技術，以三級品管制度，搭配嚴謹審核制度，確保每一項工程達到標準，累積多年經驗及口碑，樹起業界標竿。<br>
          <br><br class="hidden md:block">
          代表作品<br>
          永和國光段、怡心園、勝興采悅、盛興向陽光晴、北投崇仁路、三重集美樹、環河南路住宅、中和晶悅、玖原品藏、信義THE1
        </div>
      </div>
      <div class="imgs flex justify-between">
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <img class="w-full" src="@/section/s10/1.jpg" />
          <div class="txt">雍雋品 3D示意模擬圖 僅供參考</div>
        </div>
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img class="w-full" src="@/section/s10/2.jpg" />
          <div class="txt">雍雋品 3D示意模擬圖 僅供參考</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  font-family: "Noto Serif TC";
  padding-top: size-m(44);
  @media screen and (min-width:768px) {
    padding: size(110) 0 size(90) 0;
  }

  .content {
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(445);
      margin-left: size(154);
      position: relative;
    }
  }

  .logo {
    width: size-m(39);
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      width: size(118);
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      right: size(-65 - 110);
    }
  }

  .head {
    padding-bottom: size-m(16);
    margin-bottom: size-m(18);
    border-bottom: size-m(1) solid #000;
    position: relative;
    @media screen and (min-width:768px) {
      padding-bottom: size(20);
      margin-bottom: size(23);
      border-bottom: size(1) solid #000;
    }

    .labell {
      bottom: size-m(16 + 6);
      right: 0;
      text-align: right;
      @media screen and (min-width:768px) {
        display: flex;
        align-items: flex-start;
        top: 0;
        bottom: auto;
        right: size(-65 - 110);
      }

      .labell-en {
        color: #BBA693;
        font-size: size-m(10);
        font-weight: 700;
        line-height: 132%;
        letter-spacing: .13em;
        margin-bottom: size-m(12);
        text-transform: uppercase;
        @media screen and (min-width:768px) {
          font-size: size(23);
          margin-bottom: 0;
          margin-right: size(15);
          writing-mode: vertical-lr;
        }
      }

      .labell-zh {
        font-size: size-m(20);
        font-weight: 700;
        line-height: 109%;
        padding: size-m(5) size-m(14);
        border: size-m(1) solid #000;
        display: inline-block;
        @media screen and (min-width:768px) {
          font-size: size(37);
          padding: size(15) size(15);
          border: size(1) solid #000;
          writing-mode: vertical-lr;
        }
      }
    }
  }

  .t1 {
    color: #12352A;
    font-size: size-m(15);
    font-weight: 700;
    line-height: 150%;
    letter-spacing: .01em;
    @media screen and (min-width:768px) {
      font-size: size(30);
    }
  }

  .t2 {
    font-size: size-m(19);
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.01em;
    margin-bottom: size-m(2);
    @media screen and (min-width:768px) {
      font-size: size(40);
      margin-bottom: size(0);
    }
  }

  .t3 {
    color: #12352A;
    font-size: size-m(13);
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.01em;
    @media screen and (min-width:768px) {
      font-size: size(25);
    }
  }

  .t4 {
    font-size: size-m(14);
    font-weight: 600;
    line-height: 163%;
    margin-bottom: size-m(30);
    @media screen and (min-width:768px) {
      font-size: size(23);
      margin-bottom: 0;
    }
  }

  .imgs {
    @media screen and (min-width:768px) {
      width: size(849);
    }

    .img {
      width: 48.8%;
    }

    .txt {
      position: absolute;
      bottom: size-m(5);
      right: size-m(6);
      color: #FFF;
      font-family: "Noto Sans TC";
      font-size: size-m(10);
      line-height: 133%;
      @media screen and (min-width:768px) {
        bottom: size(8);
        right: size(14);
        font-size: size(14);
      }
    }
  }
}
</style>

<script setup>
</script>