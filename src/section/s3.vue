<template>
  <section class="s3 relative bg-[#EEEEEE]">
    <div class="map absolute">
      <img class="map1 text" src="@/section/s3/text.png" />
      <img class="map1" src="@/section/s3/view.jpg" />
    </div>
    <!-- <img class="hand-bg absolute md:hidden" src="@/section/s3/hand-bg.svg" /> -->
    <!-- <img class="hand absolute md:hidden" src="@/section/s3/hand.svg" /> -->
    <div class="info1 absolute">台北的未來已經啟動，</div>
    <div class="info2 absolute">你必須立即行動</div>
    <div class="text absolute md:flex md:justify-between md:items-start" data-aos="fade-up" data-aos-delay="0">
      <div class="title">盛世台北，就看國際北士科</div>
      <p>
        台北科技廊帶最後拼圖-北士科，串連內科2.0計劃、南港生技聚落計劃，台北立足國際最重要的城市戰略，下一輪繁榮盛世就看北士科。<br>
        <br>
        金仁寶集團55層全球總部，新光集團摩天雙塔，台灣工程龍頭-中鼎集團企業總部，友華生技集團、叡揚資訊、正大集團、味丹集團…，數十家上市櫃企業佈局逐鹿，十兆產值蓄勢待發。
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @keyframes swing {
    0% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-15%);
    }
    50% {
      transform: translateX(0%);
    }
    75% {
      transform: translateX(15%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  width: 100%;
  height: size-m(688);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .map {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    top: size-m(53);
    @media screen and (min-width:768px) {
      overflow: hidden;
      width: size(1475);
      top: size(73);
      left: size(222);
    }

    img {
      width: auto;
      height: size-m(355);
      max-width: none;
      display: block;
      @media screen and (min-width:768px) {
        overflow: hidden;
        width: 100%;
        height: auto;
        margin-top: 0;
      }
    }
    .text{
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        padding: 0;
      }
  }

  // .hand {
  //   width: size-m(18.32);
  //   top: size-m(717);
  //   left: size-m(178);
  //   cursor: pointer;
  //   transition: opacity .5s;
  //   animation: swing 3s linear 0s infinite;
  //   pointer-events: none;
  //   @media screen and (min-width:768px) {
  //     display: none;
  //   }
  // }

  // .hand-bg {
  //   width: 100%;
  //   bottom: 0;
  //   left: 0;
  //   transition: opacity .5s;
  //   pointer-events: none;
  // }

  .info1 {
    top: size-m(324);
    left: size-m(122);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(20);
    line-height: size-m(29);
    letter-spacing: 0.06em;
    color: #fff;
    background: #06332FD9;
    padding: 0 size-m(12);
    pointer-events: none;
    @media screen and (min-width:768px) {
      top: size(564);
      left: size(1301);
      font-size: size(29);
      line-height: size(56);
      padding: 0 0 0 size(10);
    }
  }

  .info2 {
    top: size-m(359);
    left: size-m(187);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size-m(20);
    line-height: size-m(29);
    letter-spacing: 0.06em;
    color: #fff;
    background: #06332FD9;
    padding: 0 size-m(12);
    pointer-events: none;
    @media screen and (min-width:768px) {
      top: size(639);
      left: size(1430);
      font-size: size(29);
      line-height: size(56);
      padding: 0 size(10);
    }
  }

  .text {
    top: size-m(440);
    left: 0;
    padding: 0 size-m(31);
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    color: #4D4D4D;
    @media screen and (min-width:768px) {
      top: size(826);
      left: size(222);
      width: size(1482);
      padding: 0 size(0);
      font-size: size(22);
      line-height: size(34);
    }

    .title {
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(29);
      letter-spacing: 0.06em;
      color: #0A534C;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(39);
        line-height: size(56);
        margin-bottom: size(0);
      }
    }

    p {
      @media screen and (min-width:768px) {
        width: size(903);
      }
    }
  }
}

</style>

<script setup>
</script>