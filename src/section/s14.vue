<template>
  <section class="s14 relative">
    <img class="bg absolute md:hidden" src="@/section/s14/bg-m.png" />
    <img class="bg absolute hidden md:block" src="@/section/s14/bg.png" />
    <img class="bird absolute" data-aos="fade-right" data-aos-delay="0" src="@/section/s14/bird.svg" />
    <img class="tree absolute" src="@/section/s14/tree.png" />
    <img class="girl absolute" data-aos="fade-left" data-aos-delay="0" src="@/section/s14/girl.png" />
    <div class="title absolute" data-aos="fade-down" data-aos-delay="0">購屋10大保證</div>
    <div class="list absolute" data-aos="fade-down" data-aos-delay="0">
      <div>
        <div class="item">銷售契約公平公開化</div>
        <div class="item">不動產開發信託</div>
        <div class="item">房地產權絕對清楚</div>
        <div class="item">使用台灣最佳品牌-國產水泥</div>
        <div class="item">協助社區成立管委會並研擬社區管理規章<br>依法提撥社區管理基金</div>
      </div>
      <div>
        <div class="item">結構體保固15年，防水保固3年、<br class="md:hidden">固定設備保固1年</div>
        <div class="item">貸款銀行利率諮詢及對保服務</div>
        <div class="item">絕不使用輻射鋼筋、電弧爐渣、海砂</div>
        <div class="item">交屋確實點交、保證買賣清楚</div>
        <div class="item">成立售後部門，保證售後服務<br>售後服務(從成交開始)一對一LINE＠</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s14 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .title {
    font-size: size-m(25);
    font-weight: 800;
    font-family: 'Noto Serif TC';
    position: absolute;
    top: size-m(54);
    left: size-m(30);
    line-height: 1;
    @media screen and (min-width:768px) {
      font-size: size(40);
      top: size(181);
      left: size(253);
    }

    &:after {
      content: '';
      width: size-m(100);
      height: size-m(2);
      background: #CA485D;
      position: absolute;
      bottom: size-m(-21);
      left: 0;
      @media screen and (min-width:768px) {
        width: size(100);
        height: size(2);
        bottom: size(-38);
      }
    }
  }

  .list {
    top: size-m(122);
    left: size-m(30);
    right: size-m(30);
    @media screen and (min-width:768px) {
      top: size(315);
      left: size(250);
      right: size(166);
      display: flex;

      &>div {
        width: 50%;
      }
    }

    .item {
      font-size: size-m(13);
      line-height: size-m(25);
      padding-left: size-m(30);
      position: relative;
      background-image: url(@/section/s14/icon.svg);
      background-size: size-m(25) size-m(25);
      background-repeat: no-repeat;
      margin-bottom: size-m(12);
      @media screen and (min-width:768px) {
        font-size: size(24);
        line-height: size(50);
        padding-left: size(60);
        background-size: size(50) size(50);
        margin-bottom: size(50);
      }
    }
  }

  .bird {
    width: size-m(188.99);
    top: size-m(11);
    left: size-m(156);
    @media screen and (min-width:768px) {
      width: size(353);
      top: size(58);
      left: size(-138);
    }
  }

  .tree {
    width: size-m(680);
    bottom: size-m(-14);
    left: size-m(-153);
    max-width: none;
    transform-origin: bottom;
    animation: tree 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(1920);
      bottom: size(-2);
      left: size(0);
    }
  }

  .girl {
    width: size-m(242);
    top: size-m(356);
    left: size-m(212);
    @media screen and (min-width:768px) {
      width: size(475);
      top: size(426);
      left: size(1532);
    }
  }
}

</style>

<script setup>
</script>