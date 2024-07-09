<template>
  <section class="s14 w-full relative bg-[#000000] text-[#FBF1CA]">
    <div class="rect md:hidden"></div>
    <img class="t1" src="@/section/s14/t1.svg" loading="lazy" />
    <div class="t2">
      創立於1956年，股票上市公司－東南水泥集團，是高鐵、捷運、南二高及各重大建設<br>
      所採用水泥品牌之一。為實現台灣建築新理想，特創建 「東泥建設」，期許為新世代淬鍊出富貴三代的榮耀家園。
    </div>
    <div class="t3">
      《 東南水泥集團．榮耀記事 》<br>
      ◆  榮獲中央標準局正字標記。<br>
      ◆  榮獲台灣省政府財政廳頒獎為納稅楷模。<br>
      ◆  榮獲全國工業總會頒『工業污染防治獎』。<br>
      ◆  高雄廠獲全國工業總會頒『工業污染防制績優廠礦獎』<br>
      ◆  通過ISO－9001國際品質保證。<br>
      ◆  通過ISO－14001認證，榮獲「示範工廠」之美譽。<br>
      ◆  獲經濟部標準檢驗局頒發使用正字標記逾50年榮譽狀。<br>
      ◆  榮獲高雄市國稅局頒發2010年度開立統一發票績優營業人獎。
    </div>
    <img class="logo" src="@/section/s14/logo.svg" loading="lazy" />
    <div class="rect2"></div>
    <img class="light" src="@/section/s7/light.svg" loading="lazy" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s14 {
  width: 100%;
  height: size-m(756);
  background-image: url(@/section/s14/bg.jpg);
  background-size: auto size-m(401);
  background-position: right -28vw bottom;
  background-repeat: no-repeat;
  z-index: 1;
  padding-top: size-m(46);
  @media screen and (min-width:768px) {
    height: size(1001);
    background-size: cover;
    background-position: right bottom;
    padding-top: size(99);
    padding-left: size(170);
  }

  .rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(521);
    background: linear-gradient(180deg, #000 69.5%, rgba(0, 0, 0, 0.00) 100%);
    z-index: -1;
  }

  .t1 {
    width: size-m(315);
    margin: 0 auto size-m(20);
    @media screen and (min-width:768px) {
      width: size(609.32);
      margin: 0 0 size(38);
    }
  }

  .t2 {
    width: size-m(315);
    margin: 0 auto size-m(24);
    font-size: size-m(12);
    font-weight: 500;
    line-height: 150%;
    @media screen and (min-width:768px) {
      width: size(832);
      margin: 0 0 size(75);
      font-size: size(22);
    }
  }

  .t3 {
    width: size-m(349);
    margin: 0 auto;
    font-size: size-m(12);
    font-weight: 500;
    line-height: 216.667%;
    @media screen and (min-width:768px) {
      width: size(632);
      margin: 0;
      font-size: size(22);
      line-height: 181.8%;
    }
  }

  .logo {
    position: absolute;
    top: size-m(647);
    left: size-m(30);
    width: size-m(123);
    @media screen and (min-width:768px) {
      top: size(848);
      left: size(896);
      width: size(127.63);
    }
  }

  .rect2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(42);
    background: linear-gradient(0deg, #00635D 0%, rgba(0, 99, 93, 0.00) 100%);
    @media screen and (min-width:768px) {
      height: size(42);
    }
  }

  .light {
    position: absolute;
    mix-blend-mode: screen;
      top: size-m(450);
      right: size-m(-60);
      width: size-m(170);
    @media screen and (min-width:768px) {
      top: size(348);
      right: size(170);
      width: size(210);
    }
  }
}
</style>

<script setup>
</script>