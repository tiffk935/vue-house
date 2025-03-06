<template>
  <section class="s2 user-n w-full relative">
    <div class="wrapper">
      <img class="en block" src="@/section/s2/en.svg" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
      <div class="pic">
        <img class="txt block" src="@/section/s2/txt.svg" />
        <img class="img block" src="@/section/s2/img.png" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
        <div class="line hidden md:block"></div>
      </div>
      <div class="t" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1 text-[#6E4D3B] font-['Noto_Serif_TC']">新北富域<br>職人領域 隱形冠軍</div>
        <div class="t2">匯集龐大產業動能，「新北產業園區」多元蓬勃高達1,400間廠商，就業人口達4萬人，年度產值高達約4,000億，成就新北第一產能區；加乘「新北知識產業園區」群聚效益，進駐多家大型企業總部，包含貝斯美德、科定企業、台通光電、夏姿、中悅、雙鴻等等，傳統 與新創企業力量匯聚，帶動週邊住宅及商辦價值。</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  width: 100%;
  background: #E3DCCC;
  padding: size-m(27) 0 size-m(47) 0;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .wrapper {
    @media screen and (min-width:768px) {
      width: size(1410);
      position: absolute;
      top: size(169);
      left: size(234);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .en {
    width: size-m(305);
    margin: 0 auto size-m(32);
    @media screen and (min-width:768px) {
      width: size(871.47);
      position: absolute;
      top: 0;
      right: size(9);
    }
  }

  .pic {
    position: relative;
    width: size-m(337);
    height: size-m(277);
    background: #B8805A;
    margin: 0 0 size-m(47) 0;
    @media screen and (min-width:768px) {
      width: size(428.14);
      height: size(739.52);
      background: #B8805A;
      margin: 0;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: size(84);
        height: 100%;
        background: linear-gradient(270deg, rgba(187,131,98,0) 0%, rgba(186,130,97,0.03) 14%, rgba(185,128,96,0.11) 29%, rgba(183,125,94,0.24) 45%, rgba(180,122,92,0.42) 62%, rgba(176,117,88,0.66) 80%, rgba(171,111,84,0.95) 97%, rgba(171,110,84,1) 100%);
        mix-blend-mode: multiply;
      }
    }

    .txt {
      width: size-m(126);
      position: absolute;
      bottom: size-m(11);
      right: size-m(176);
      @media screen and (min-width:768px) {
        width: size(265.62);
        bottom: size(50);
        right: auto;
        left: size(104);
      }
    }

    .img {
      width: size-m(305.55);
      position: absolute;
      top: size-m(-5);
      right: 0;
      box-shadow: size-m(0) size-m(4) size-m(18) rgba(0,0,0,.25);
      max-width: none;
      @media screen and (min-width:768px) {
        width: size(629);
        top: size(124);
        right: auto;
        left: size(104);
        box-shadow: size(0) size(4) size(18) rgba(0,0,0,.25);
      }
    }

    .line {
      position: absolute;
      bottom: size(32);
      left: size(104);
      width: size(48);
      height: size(1);
      background: #fff;
    }
  }

  .t {
    @media screen and (min-width:768px) {
      width: size(529);
    }
  }

  .t1 {
    font-size: size-m(24);
    line-height: size-m(38);
    text-align: center;
    font-weight: 600;
    letter-spacing: .18em;
    margin: 0 0 size-m(10) 0;
    @media screen and (min-width:768px) {
      font-size: size(52);
      line-height: size(85);
      margin: 0 0 size(70) 0;
      letter-spacing: .2em;
    }
  }

  .t2 {
    padding: 0 size-m(36);
    font-size: size-m(13);
    line-height: size-m(26);
    letter-spacing: .03em;
    text-align: justify;
    @media screen and (min-width:768px) {
      padding: 0;
      font-size: size(23);
      line-height: size(41);
    }
  }
}
</style>

<script setup>
</script>
