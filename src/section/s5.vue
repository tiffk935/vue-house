<template>
  <section class="s5 relative">
    <img class="bg absolute" src="@/section/s5/bg.jpg" />
    <div class="rect absolute"></div>
    <div class="content absolute">
      <div class="item" data-aos="fade-down" data-aos-delay="0">
        <span class="text-white">第一期</span>
        <span>礁溪四城吳沙村</span>
      </div>
      <div class="item" data-aos="fade-down" data-aos-delay="200">
        <span class="text-white">第二期</span>
        <span>冬山河岸景觀農舍</span>
      </div>
      <div class="item" data-aos="fade-down" data-aos-delay="400">
        <span class="text-white">第三期</span>
        <span>小城故事河岸別<span class="sub">墅系列</span></span>
      </div>
      <div class="item" data-aos="fade-down" data-aos-delay="600">
        <span class="text-white">第五期</span>
        <span>二結首耀別墅</span>
      </div>
      <div class="item" data-aos="fade-down" data-aos-delay="800">
        <span class="text-white">第六期</span>
        <span>二結鄰靜別墅</span>
      </div>
      <div class="item" data-aos="fade-down" data-aos-delay="1000">
        <span class="text-white">第七期</span>
        <span>傳藝路小城故事</span>
      </div>
    </div>
    <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0">築‧自慢</div>
    <div class="t2 absolute" data-aos="fade-up" data-aos-delay="0">宜蘭在地口碑建商，自有營造上下一條龍，從土地開發到設計施作，處處細節精雕琢磨，「長勝開發」在土地與人與建築之間，獻上一體舒適大苑。</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  height: size-m(667);
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .bg {
    width: size-m(1124);
    left: size-m(-508);
    top: size-m(-18);
    max-width: none;
    @media screen and (min-width:768px) {
      width: size(2001);
      left: size(-41);
      top: size(-12);
    }
  }

  .rect {
    width: size-m(375);
    height: size-m(257);
    left: size-m(0);
    top: size-m(410);
    background: linear-gradient(180deg, rgba(73, 54, 48, 0) 0%, #493630 65.62%);
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .content {
    height: size-m(222);
    left: size-m(30);
    top: size-m(120);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: size-m(12);
    @media screen and (min-width:768px) {
      width: size(660);
      left: size(490);
      top: size(231);
      flex-direction: row;
      gap: normal;
      justify-content: space-between;
    }

    .item {
      position: relative;
      font-weight: 400;
      font-size: size-m(13);
      line-height: size-m(26);
      letter-spacing: 0.1em;
      @media screen and (min-width:768px) {
        writing-mode: vertical-lr;
        font-size: size(23.6541);
        line-height: size(26);

        &:nth-child(2) {
          top: size(52);
        }

        &:nth-child(3) {
          top: size(75);
        }

        &:nth-child(4), &:nth-child(6) {
          top: size(59);
        }

        &:nth-child(5) {
          top: size(69);
        }
      }

      &:before {
        content: "";
        position: absolute;
        width: size-m(69);
        height: size-m(23);
        left: size-m(-4);
        top: size-m(2);
        background: linear-gradient(90deg, #869D61 48.44%, rgba(134, 157, 97, 0) 100%);
        border-radius: size-m(5) size-m(0) size-m(0) size-m(5);
        @media screen and (min-width:768px) {
          width: size(34.97);
          height: size(137.25);
          left: size(-4);
          top: size(-9.62);
          background: linear-gradient(180deg, #869D61 48.44%, rgba(134, 157, 97, 0) 100%);
          border-radius: size(8.74172) size(8.74172) 0 0;
        }
      }

      &:after {
        content: '';
        position: absolute;
        width: size-m(14.14);
        height: 0;
        left: size-m(45);
        top: size-m(13);
        border: size-m(0.874172) solid #000000;
        transform: rotate(135deg);
        @media screen and (min-width:768px) {
          width: size(30);
          left: size(0);
          top: size(91);
          border: size(0.874172) solid #000000;
        }
      }

      span {
        position: relative;

        &.text-white {
          margin: 0 size-m(21) 0 0;
          @media screen and (min-width:768px) {
            margin: 0 0 size(30) 0;
          }
        }

        &.sub {
          @media screen and (min-width:768px) {
            color: #C1CD9A;
          }
        }
      }
    }
  }

  .t1 {
    left: size-m(46);
    top: size-m(487);
    font-weight: 500;
    font-size: size-m(30);
    line-height: size-m(56);
    letter-spacing: 0.1em;
    color: #fff;
    @media screen and (min-width:768px) {
      left: size(517);
      top: size(719);
      font-size: size(48);
      line-height: size(56);
    }

    &:before, &:after {
      content: '';
      position: absolute;
      width: size-m(3);
      height: size-m(27);
      background: #7EAA46;
      top: size-m(17);
      @media screen and (min-width:768px) {
        width: size(3);
        height: size(45);
        top: size(8);
      }
    }

    &:before {
      left: size-m(-16);
      @media screen and (min-width:768px) {
        left: size(-21);
      }
    }

    &:after {
      right: size-m(-16);
      @media screen and (min-width:768px) {
        right: size(-21);
      }
    }
  }

  .t2 {
    width: size-m(314);
    left: size-m(30);
    top: size-m(560);
    font-weight: 400;
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    letter-spacing: 0.15em;
    color: #fff;
    @media screen and (min-width:768px) {
      width: size(725);
      left: size(495);
      top: size(798);
      font-size: size(16);
      line-height: size(27);
    }
  }
}

</style>

<script setup>
</script>
