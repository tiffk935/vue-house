<template>
  <section class="s5 relative text-white">
    <div class="p1 absolute parallax"></div>
    <div class="p2 absolute parallax"></div>
    <div class="title absolute fade">GREEN LIGH OF<br />THE PARK</div>
    <div class="content absolute">
      <div class="fade">
        <div class="t1">戶戶獨享三千坪社子公園，<br  />生活品質等同綠金價值。</div>
        <div class="txt">社子地區以26平方公尺人均綠地比，居台北市所有行政區之冠，環島型河濱公園圍塑兩河文化之美， 9公里河岸綠意造就生態宜居住所。社子公園更為住戶帶來朗闊棟距視野，城市綠洲饒富興味，不僅引人入勝更陪伴家人的童年與老年</div>
      </div>
    </div>
    <div class="leaf absolute">
      <img class="w-full block" src="@/section/s2/frame.svg" />
      <img class="window absolute" src="@/section/s2/leaf.gif" />
      <img class="bird absolute" src="@/section/s5/bird.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size-m(675);
  font-family: 'Noto Serif TC';
  margin-bottom: size-m(126);
  z-index: 1;
  @media screen and (min-width:768px) {
    height: size(1080);
    margin-bottom: size(0);
    background: linear-gradient(250deg, #004B47 5.42%, #11A196 127.44%);
  }

  .p1 {
    width: size-m(210);
    height: size-m(247.34);
    top: size-m(100.07);
    left: size-m(42.5);
    background-image: url(@/section/s5/1.jpg);
    background-size: 100% auto;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(497);
      height: size(585);
      top: size(217.12);
      left: size(972.79);
    }
  }

  .p2 {
    width: size-m(147);
    height: size-m(168.6);
    top: size-m(248.64);
    left: size-m(185.5);
    background-image: url(@/section/s5/2.jpg);
    background-size: 100% auto;
    // background-position: 0 0;
    border-radius: 48% 48% 0px 0px;
    @media screen and (min-width:768px) {
      width: size(383);
      height: size(439);
      top: size(510.87);
      left: size(1378.69);
    }
  }

  .title {
    top: size-m(407.66);
    left: size-m(100.18);
    font-size: size-m(13);
    line-height: size-m(18);
    color: #5CBD9E;
    font-weight: 600;
    letter-spacing: 0.1em;
    @media screen and (min-width:768px) {
      top: size(922.89);
      left: size(1110);
      font-size: size(34);
      line-height: size(48);
    }
  }

  .content {
    width: size-m(290);
    top: size-m(478.66);
    left: size-m(42.5);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: size(589.06);
      top: size(494);
      left: size(240);
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
    top: size-m(-20.88);
    left: size-m(223.29);
    @media screen and (min-width:768px) {
      width: size(248.17);
      top: size(-47.98);
      left: size(1509.81);
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

    .bird {
      width: size-m(51.79);
      top: size-m(40.69);
      left: size-m(29.54);
      @media screen and (min-width:768px) {
        width: size(173.05);
        top: size(115.51);
        left: size(83.53);
      }
    }
  }
}
</style>

<script setup>
</script>