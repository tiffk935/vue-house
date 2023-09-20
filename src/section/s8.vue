<template>
  <section class="s8 relative">
    <div class="title absolute">
      <div class="line line1 absolute"></div>
      <div class="line line2 absolute"></div>
      <div class="t1 upup">
        <div class="tt flex">
          <span>展宜常閑</span>
          <span>建築規劃</span>
        </div>
      </div>
      <div class="t2 upup">
        <div class="tt">
          It symbolizes the humanistic environment of life and an open-minded state of mind,<br>
          laughing and talking about the beauty of daily life.</div>
      </div>
    </div>
    <div class="bg absolute parallax"></div>
    <div class="txt absolute">*此為廣告效果示意，為單一建物電腦3D透視表現，<br class="md:hidden">周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size-m(546);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1380);
    // background: none;
  }

  .title {
    width: size-m(375);
    left: size-m(0);
    top: size-m(22.43);
    @media screen and (min-width:768px) {
      width: size(1369);
      left: size(271.43);
      top: size(55);
    }

    .line {
      width: size-m(70.73);
      height: size-m(1);
      top: size-m(30);
      background: #000;
      @media screen and (min-width:768px) {
        width: size(386);
        height: size(1);
        top: size(50);
      }

      &.line1 {
        left: 0;
      }

      &.line2 {
        right: 0;
      }
    }

    .t1 {
      text-align: center;
      font-family: 'Noto Serif TC';
      font-size: size-m(19);
      font-weight: 600;
      line-height: normal;
      letter-spacing: size-m(0.75);
      text-indent: size-m(0.45);
      @media screen and (min-width:768px) {
        font-size: size(51);
        font-weight: 600;
        line-height: normal;
        letter-spacing: size(0.45);
        text-indent: size(1.53);
      }

      &:before, &:after {
        content: '';
        position: absolute;
        top: 3.6vw;
        left: 48.2vw;
        width: 4vw;
        height: size-m(1);
        background: #000;
        transform: rotate(45deg);
        @media screen and (min-width:768px) {
          top: 2.1vw;
          left: 34.5vw;
          width: 2.5vw;
          height: size(1);
        }
      }

      &:after {
        transform: rotate(-45deg);
      }
      
      .tt {
        justify-content: space-between;
        width: size-m(181);
        margin: 0 auto;
        @media screen and (min-width:768px) {
          width: size(477);
        }
      }
    }

    .t2 {
      text-align: center;
      font-family: 'Noto Serif TC';
      font-size: size-m(5);
      font-weight: 600;
      line-height: 140%;
      @media screen and (min-width:768px) {
        font-size: size(11);
        margin-top: size(7);
      }
    }
  }

  .bg {
    width: 100%;
    height: size-m(400);
    top: size-m(88);
    left: 0;
    background-image: url(@/section/s8/img.webp);
    background-repeat: no-repeat;
    background-size: auto 100%;
    @media screen and (min-width:768px) {

      top: size(250);
      height: size(1080);
      background-size: 100% auto;
    }
  }

  .txt {
    width: size-m(239);
    left: size-m(68);
    top: size-m(495);
    font-size: size-m(9);
    line-height: size-m(13);
    text-align: center;
    color: #666666;
    @media screen and (min-width:768px) {
      width: auto;
      left: size(10);
      top: size(1300);
      font-weight: 700;
      font-size: size(14);
      line-height: size(20);
      letter-spacing: 0.03em;
      color: #FFFFFF;
    }
  }
}
</style>

<script setup>
</script>
