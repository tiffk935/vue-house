<template>
  <section class="s10 user-n w-full relative">
    <img class="logo absolute" src="@/section/s2/logo.svg" />
    <div class="line absolute" data-aos="cuscus" data-aos-delay="0"></div>
    <img class="small absolute" src="@/section/s10/small.jpg" />
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">すのものにべて<br class="md:hidden" />美しさはあるが</div>
    </div>
    <div
      class="relative md:flex md:items-center md:justify-end md:flex-row-reverse"
    >
      <img
        class="bg absolute hidden md:block top-0 left-0 w-full"
        src="@/section/s2/bg.jpg"
      />
      <div
        class="t3 relative"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <div class="t3l">奢雅美學家 EPS境業設計孫佩修</div>
        <p class="t3s">
          東海建築研究所。境業設計早期作品以北投頂級溫泉會所三二行館，獨創的東方禪意美學驚艷當代，為北台灣的溫泉休閒場域立下新標準。<br>
          作品：
        </p>
        <ol class="hidden md:block">
          <li><div>信義區 太子信義  <span>‧</span>士林區 天母紘琚 <span>‧</span> 北投區 三二行館</div></li>
          <li><div>士林區 新美齊AIT天美大樓（員工宿舍）</div></li>
        </ol>
        <ol class="md:hidden">
          <li><div>信義區 太子信義<span>‧</span>士林區 天母紘琚<span>‧</span>北投區 三二行館</div></li>
          <li><div>士林區 新美齊AIT天美大樓（員工宿舍）</div></li>
        </ol>
      </div>
      <div
        class="img relative"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <img class="w-full" src="@/section/s10/1.jpg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  padding-top: size-m(124);
  @media (min-width: 768px) {
    background-image: url(@/section/s8/bg.jpg);
    background-size: auto size(716);
    background-repeat: no-repeat;
    background-position: right bottom;
    padding-top: size(278);
  }

  .logo {
    top: size-m(22);
    left: size-m(25);
    width: size-m(48.24);
    @media (min-width: 768px) {
      top: size(82);
      left: size(79);
      width: size(85.38);
    }
  }

  .line {
    top: size-m(106);
    left: size-m(31);
    width: 1px;
    height: calc(100% - size-m(106) - size-m(304));
    background: #c9a063;
    transform-origin: 0 0;
    transition-duration: 2s !important;
    @media (min-width: 768px) {
      top: size(82);
      left: size(242);
      width: size(1);
      height: calc(100% - size(82) - size(716));
    }
  }

  .small {
    top: size-m(29);
    right: 0;
    width: size-m(80);
    @media (min-width: 768px) {
      top: size(82);
      right: 0;
      width: size(273);
    }
  }

  .t1 {
    color: #981f23;
    font-family: "Noto Sans JP";
    font-size: size-m(19);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: size-m(3.61);
    margin-bottom: size-m(119);
    padding-left: size-m(55);
    @media (min-width: 768px) {
      font-size: size(51);
      letter-spacing: size(3.57);
      margin-bottom: size(377);
      padding-left: size(398);
    }
  }


  .t3 {
    font-family: "Noto Sans JP";
    font-size: size-m(12);
    font-weight: 500;
    line-height: 200%;
    letter-spacing: size-m(0.48);
    margin-bottom: size-m(24);
    padding-left: size-m(55);
    width: size-m(278 + 55);

    .t3l {
      font-size: size-m(16);
      font-weight: 500;
      line-height: 173.6%;
      letter-spacing: size-m(0.64);
      @media (min-width: 768px) {
        font-size: size(32);
        font-weight: 700;
        line-height: 163.6%;
        letter-spacing: size(0.64);
      }
    }

    .t3s {
      font-size: size-m(12);
      letter-spacing: size-m(0.48);
      @media (min-width: 768px) {
        font-size: size(24);
        font-weight: 500;
        line-height: 163.6%;
        letter-spacing: size(0.64);
      }
    }

    @media (min-width: 768px) {
      font-size: size(26);
      font-weight: 500;
      line-height: 230%;
      letter-spacing: size(0.52);
      margin-bottom: size(0);
      padding-left: size(112);
      width: size(723);
    }

    ol {
      margin: 0 0 0 0;
      padding-left: size-m(19);
      color: #981f23;
      font-family: "Noto Sans JP";
      font-size: size-m(11);
      font-style: normal;
      letter-spacing: size-m(0.22);
      list-style: outside;
      white-space: nowrap;
      @media (min-width: 768px) {
        margin: size(19) 0 0 0;
        padding-left: size(24);
        font-size: size(18);
        letter-spacing: size(0.46);
      }

      div {
        color: #000;
        font-size: size-m(11);
        line-height: 163.6%;
        font-weight: 500;
        
        span {
          color: #981f23;
        }

        @media (min-width: 768px) {
          font-size: size(23);
        }
      }
    }
  }

  .img {
    img {
      width: 100%;
      height: size-m(304);
      object-fit: cover;
      @media (min-width: 768px) {
        width: size(1017);
        height: auto;
      }
    }

    .txt {
      bottom: size-m(14);
      right: size-m(16);
      color: #fff;
      font-family: "Noto Sans JP";
      font-size: size-m(11);
      font-weight: 500;
      line-height: 163.6%;
      letter-spacing: size-m(0.22);
      @media (min-width: 768px) {
        bottom: size(33);
        right: size(49);
        font-size: size(24);
        letter-spacing: size(0.48);
      }
    }
  }
}
</style>

<script setup></script>
