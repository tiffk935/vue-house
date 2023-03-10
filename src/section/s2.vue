<template>
  <section class="s2 relative bg-[#00332a]">
    <!-- pc -->
    <div class="gallary g1 absolute hidden md:block">
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
    </div>
    <!-- mobile -->
    <div class="gallary g2 absolute md:hidden">
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
      <div class="item"></div><div class="item"></div>
    </div>
    <div class="text absolute md:flex md:justify-between md:items-end">
      <div class="title" data-aos="fade-up" data-aos-delay="0">後發先至<br>盛世之約</div>
      <div>
        <ul data-aos="fade-up" data-aos-delay="0">
          <li>1980年代信義計劃橫空出世，今日TAIPEI 101早已是台灣世界印象。</li>
          <li>1992年南港軟體園區肇始，東區門戶計劃推波助瀾，房價飛越百萬。</li>
          <li>2001年內湖科學園區應勢崛起，今時年產值5.2兆。</li>
        </ul>
        <p data-aos="fade-up" data-aos-delay="0">科技聚落、大型重劃，北士科壓軸，後發先至。盛世之約，珍貴更甚，不能再錯過。</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  width: 100%;
  height: size-m(688);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(238, 238, 238, 0.5) 0%, #EEEEEE 22.4%, #EEEEEE 100%);
  }

  .gallary {
    width: 100%;
    height: size-m(310);
    top: size-m(29);
    // background: #fff;
    @media screen and (min-width:768px) {
      height: size(590);
      top: size(98);
    }

    &.g1 .item {
      position: absolute;
      background-size: auto 100%;

      &:nth-child(1) {
        width: size(253);
        height: size(249);
        left: size(0);
        top: size(0);
        background-image: url(@/section/s2/08.png);
      }

      &:nth-child(2) {
        width: size(563);
        height: size(372);
        left: size(170);
        top: size(218);
        background-image: url(@/section/s2/07.png);
      }

      &:nth-child(3) {
        width: size(450);
        height: size(333);
        left: size(634);
        top: size(63);
        background-image: url(@/section/s2/06.png);
      }

      &:nth-child(4) {
        width: size(343);
        height: size(337);
        left: size(1002);
        top: size(228);
        background-image: url(@/section/s2/05.png);
      }

      &:nth-child(5) {
        width: size(304);
        height: size(159);
        left: size(1286);
        top: size(0);
        background-image: url(@/section/s2/04.png);
      }

      &:nth-child(6) {
        width: size(570);
        height: size(323);
        left: size(1432);
        top: size(228);
        background-image: url(@/section/s2/03.png);
      }

      &:nth-child(7) {
        width: size(323);
        height: size(250);
        left: size(1902);
        top: size(64);
        background-image: url(@/section/s2/02.png);
      }

      &:nth-child(8) {
        width: size(199);
        height: size(213);
        left: size(2225);
        top: size(367);
        background-image: url(@/section/s2/01.png);
      }

      &:nth-child(9) {
        width: size(253);
        height: size(249);
        left: size(2424 + 0);
        top: size(0);
        background-image: url(@/section/s2/08.png);
      }

      &:nth-child(10) {
        width: size(563);
        height: size(372);
        left: size(2424 + 170);
        top: size(218);
        background-image: url(@/section/s2/07.png);
      }

      &:nth-child(11) {
        width: size(450);
        height: size(333);
        left: size(2424 + 634);
        top: size(63);
        background-image: url(@/section/s2/06.png);
      }

      &:nth-child(12) {
        width: size(343);
        height: size(337);
        left: size(2424 + 1002);
        top: size(228);
        background-image: url(@/section/s2/05.png);
      }

      &:nth-child(13) {
        width: size(304);
        height: size(159);
        left: size(2424 + 1286);
        top: size(0);
        background-image: url(@/section/s2/04.png);
      }

      &:nth-child(14) {
        width: size(570);
        height: size(323);
        left: size(2424 + 1432);
        top: size(228);
        background-image: url(@/section/s2/03.png);
      }

      &:nth-child(15) {
        width: size(323);
        height: size(250);
        left: size(2424 + 1902);
        top: size(64);
        background-image: url(@/section/s2/02.png);
      }

      &:nth-child(16) {
        width: size(199);
        height: size(213);
        left: size(2424 + 2225);
        top: size(367);
        background-image: url(@/section/s2/01.png);
      }
    }

    &.g2 .item {
      position: absolute;
      background-size: auto 100%;

      &:nth-child(1) {
        width: size-m(132.57);
        height: size-m(130.48);
        top: size-m(0);
        left: size-m(0);
        background-image: url(@/section/s2/08.png);
      }

      &:nth-child(2) {
        width: size-m(295.02);
        height: size-m(194.93);
        top: size-m(114.23);
        left: size-m(89.08);
        background-image: url(@/section/s2/07.png);
      }

      &:nth-child(3) {
        width: size-m(235.8);
        height: size-m(174.49);
        left: size-m(332.22);
        top: size-m(33.01);
        background-image: url(@/section/s2/06.png);
      }

      &:nth-child(4) {
        width: size-m(179.73);
        height: size-m(176.59);
        left: size-m(525.05);
        top: size-m(119.47);
        background-image: url(@/section/s2/05.png);
      }

      &:nth-child(5) {
        width: size-m(159.31);
        height: size-m(83.54);
        left: size-m(673.92);
        top: size-m(0);
        background-image: url(@/section/s2/04.png);
      }

      &:nth-child(6) {
        width: size-m(298.71);
        height: size-m(169.71);
        left: size-m(750.43);
        top: size-m(119.8);
        background-image: url(@/section/s2/03.png);
      }

      &:nth-child(7) {
        width: size-m(169.27);
        height: size-m(131.36);
        left: size-m(996.73);
        top: size-m(33.63);
        background-image: url(@/section/s2/02.png);
      }

      &:nth-child(8) {
        width: size-m(132.57);
        height: size-m(130.48);
        top: size-m(0);
        left: size-m(1166 + 0);
        background-image: url(@/section/s2/08.png);
      }

      &:nth-child(9) {
        width: size-m(295.02);
        height: size-m(194.93);
        top: size-m(114.23);
        left: size-m(1166 + 89.08);
        background-image: url(@/section/s2/07.png);
      }

      &:nth-child(10) {
        width: size-m(235.8);
        height: size-m(174.49);
        left: size-m(1166 + 332.22);
        top: size-m(33.01);
        background-image: url(@/section/s2/06.png);
      }

      &:nth-child(11) {
        width: size-m(179.73);
        height: size-m(176.59);
        left: size-m(1166 + 525.05);
        top: size-m(119.47);
        background-image: url(@/section/s2/05.png);
      }

      &:nth-child(12) {
        width: size-m(159.31);
        height: size-m(83.54);
        left: size-m(1166 + 673.92);
        top: size-m(0);
        background-image: url(@/section/s2/04.png);
      }

      &:nth-child(13) {
        width: size-m(298.71);
        height: size-m(169.71);
        left: size-m(1166 + 750.43);
        top: size-m(119.8);
        background-image: url(@/section/s2/03.png);
      }

      &:nth-child(14) {
        width: size-m(169.27);
        height: size-m(131.36);
        left: size-m(1166 + 996.73);
        top: size-m(33.63);
        background-image: url(@/section/s2/02.png);
      }
    }
  }

  .text {
    width: 100%;
    top: size-m(374);
    left: 0;
    padding: 0 size-m(20) 0 size-m(32);
    font-size: size-m(13);
    line-height: size-m(19);
    color: #4D4D4D;
    @media screen and (min-width:768px) {
      width: size(1190);
      top: size(786);
      left: size(417);
      padding: 0;
      font-size: size(22);
      line-height: size(32);  
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size-m(33);
      line-height: size-m(46);
      letter-spacing: 0.06em;
      color: #0A534C;
      margin-bottom: size-m(21);
      @media screen and (min-width:768px) {
        font-size: size(62);
        line-height: size(98);
        margin-bottom: 0;
      }
    }

    ul {
      margin-bottom: size-m(21);
      @media screen and (min-width:768px) {
        margin-bottom: size(27);
      }
    }

    li {
      padding-left: size-m(25);
      position: relative;
      padding-bottom: size-m(8);
      @media screen and (min-width:768px) {
        padding-left: size(57);
        padding-bottom: size(9);
      }

      &:before {
        content: "";
        position: absolute;
        top: 0.4em;
        left: size-m(5);
        width: size-m(1);
        height: 100%;
        background: #E3B15F;
        @media screen and (min-width:768px) {
          left: size(8);
          width: size(1);
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 0.4em;
        left: 0;
        width: size-m(10.66);
        height: size-m(10.66);
        border-radius: 50%;
        background: #E3B15F;
        @media screen and (min-width:768px) {
          width: size(16);
          height: size(16);
        }
      }

      &:last-child {
        padding-bottom: size-m(0);

        &:before {
          display: none;
        }
      }
    }
  }
}
</style>

<script setup>
import { gsap } from "gsap";
import { onMounted, nextTick } from 'vue';

onMounted(() => {
  nextTick(() => {
    const g1W = -100 * 2424 / 1920;
    for(let i=0; i<14; i++) {
      const item = document.querySelectorAll('.s2 .g1 .item')[i];
      gsap.to(item, { 
        x: g1W + 'vw', 
        ease: "none", 
        duration: 30, 
        repeat: -1,
      });
    }

    const g2W = -100 * 1166 / 375;
    for(let i=0; i<14; i++) {
      const item = document.querySelectorAll('.s2 .g2 .item')[i];
      gsap.to(item, { 
        x: g2W + 'vw', 
        ease: "none", 
        duration: 20, 
        repeat: -1
      });
    }
  })
})
</script>