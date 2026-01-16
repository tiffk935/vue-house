<template>
  <section class="s7 user-n w-full relative bg-white">
    <div class="banner relative text-white">
      <img class="w-full block md:hidden" src="@/section/s7/banner-m.jpg" />
      <img class="w-full hidden md:block" src="@/section/s7/banner.jpg" />

      <div class="banner-content w-full absolute">
        <div class="subtitle text-[#FFFCB2]">
          <div class="en">Where City Life</div>
          <div class="zh">禾處尋覓</div>
          <div class="en">Comes Alive</div>
        </div>
        <div class="title">文教美地</div>
        <div class="en1">The Essence of Education and Grace</div>
        <div class="en2">An Inspired Place to Learn and Grow</div>
      </div>

      <div class="info hidden md:block">情境示意圖</div>
    </div>

    <div class="content">
      <div class="t1 text-[#5ACBBD]">樟樹國小<br class="md:hidden">樟樹實驗高中</div>
      <div class="desc">
        樟樹國小鄰近本案，慢步行走只要十餘分鐘的距離，<br class="hidden md:block">
        上下學對父母來說實在是一個很方便的優點。<br class="hidden md:block">
        可以快速抵達北市上班，小朋友又能在鄰家不遠處上下學。<br class="hidden md:block">
        國小對面是樟樹實驗高中，以結合「實驗教育」和「技職教育」的理念，<br class="hidden md:block">
        結合國際教育、創新實踐、跨科技能及美學倫理等課程設計，<br class="hidden md:block">
        培養跨群科、符合21世紀職業發展所需之人才。
      </div>
    </div>

    <div class="b1 absolute">
      <img src="@/section/s7/b1.png" alt="">
      <div class="info text-white">樟樹公托中心實景拍攝</div>
    </div>

    <div class="b2 absolute">
      <img src="@/section/s7/b2.png" alt="">
      <div class="info text-white">樟樹高中實景拍攝</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes bubble {
  to {
    transform: translateY(0);
  }
}

.s7 {
  font-size: size-m(12);
  line-height: size-m(24);
  overflow: hidden;
  @media screen and (min-width:768px) {
    font-size: size(18);
    line-height: size(35);
  }

  .banner {
    .banner-content {
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      @media screen and (min-width:768px) {
        top: calc(207 / 492) * 100%;
        transform: translate(0, 0);
      }
    }

    .subtitle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 size-m(3) 0;
      @media screen and (min-width:768px) {
        margin: 0 0 size(30) 0;
      }

      .en {
        font-size: size-m(6);
        letter-spacing: .1em;
        text-indent: .1em;
        text-transform: uppercase;
        @media screen and (min-width:768px) {
          font-size: size(10);
        }
      }

      .zh {
        font-size: size-m(16);
        font-weight: 600;
        letter-spacing: .25em;
        text-indent: .25em;
        margin: 0 size-m(6);
        @media screen and (min-width:768px) {
          font-size: size(22);
          margin: 0 size(6);
        }
      }
    }

    .title {
      font-size: size-m(34);
      line-height: size-m(49);
      text-align: center;
      font-weight: 900;
      letter-spacing: .25em;
      text-indent: .25em;
      margin: 0 0 size-m(10) 0;
      @media screen and (min-width:768px) {
        font-size: size(42);
        line-height: size(60);
        margin: 0 0 size(16) 0;
      }
    }

    .en1 {
      font-size: size-m(10);
      line-height: size-m(11);
      text-align: center;
      text-transform: uppercase;
      margin: 0 0 size-m(10) 0;
      @media screen and (min-width:768px) {
        font-size: size(24);
        line-height: size(28);
        margin: 0 0 size(16) 0;
      }
    }

    .en2 {
      font-size: size-m(8);
      line-height: size-m(9);
      text-align: center;
      @media screen and (min-width:768px) {
        font-size: size(20);
        line-height: size(23);
      }
    }

    .info {
      position: absolute;
      right: size(17);
      bottom: size(10);
      font-size: size(14);
      line-height: size(22);
      font-weight: 700;
      filter: drop-shadow(0 0 size(5) #000);
    }
  }

  .content {
    padding: size-m(138) 0 size-m(233) 0;
    @media screen and (min-width:768px) {
      padding: size(106) 0 size(552) size(181);
    }

    .t1 {
      font-size: size-m(28);
      line-height: size-m(34);
      text-align: center;
      font-weight: 700;
      margin-bottom: size-m(12);
      @media screen and (min-width:768px) {
        font-size: size(28);
        line-height: size(34);
        text-align: left;
        margin-bottom: size(31);
      }
    }

    .desc {
      width: size-m(210);
      margin: 0 auto;
      @media screen and (min-width:768px) {
        width: auto;
        margin: 0;
      }
    }
  }

  .b1, .b2 {
    img {
      display: block;
      width: 100%;
    }

    .info {
      position: absolute;
      left: size-m(39);
      bottom: size-m(11);
      font-size: size-m(8);
      line-height: size-m(12);
      font-weight: 700;
      filter: drop-shadow(0 0 size-m(5) #000);
      @media screen and (min-width:768px) {
        width: 100%;
        text-align: center;
        left: 0;
        bottom: size(29);
        font-size: size(14);
        line-height: size(22);
        filter: drop-shadow(0 0 size(5) #000);
      }
    }
  }

  .b1 {
    width: size-m(161);
    top: size-m(139.67);
    right: size-m(-29.11);
    transform: translateY(-10%);
    animation: bubble 5s ease infinite alternate;
    @media screen and (min-width:768px) {
      width: size(562);
      top: size(389 - 30);
      right: size(131);
    }
  }

  .b2 {
    width: size-m(252);
    top: size-m(604);
    left: size-m(-44);
    transform: translateY(15%);
    animation: bubble 7s ease infinite alternate;
    @media screen and (min-width:768px) {
      width: size(668);
      top: size(319 + 492);
      left: size(702);
      transform: translateY(-8%);
    }

    .info {
      left: size-m(52);
      bottom: size-m(48);
      @media screen and (min-width:768px) {
        left: 0;
        bottom: size(66);
      }
    }
  }
}
</style>

<script setup>
</script>