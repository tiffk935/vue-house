<template>
  <section class="s9 user-n w-full relative">
    <img class="logo absolute" src="@/section/s2/logo.svg" />
    <div class="line absolute" data-aos="cuscus" data-aos-delay="0"></div>
    <img class="small absolute" src="@/section/s9/small.jpg" />
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">幸せはいつも自分<br class="md:hidden" />の心が決める</div>
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
        <div class="t3l">結構藝術家 築遠工程張盈智</div>
        <p class="t3s">
          美國康乃爾大學結構工程碩士。在美工作期間曾參與世貿大樓改建與補強案。國際工程師IntPE (結構/土木) ， 亞太工程師 APEC Engineer (結構/土木)，110年度傑出工程師。<br>
          作品：
        </p>
        <!-- pc -->
        <ol class="hidden md:block">
          <li><div>內湖區 碧湖畔  <span>‧</span>南港區 砳建築 <span>‧</span> 信義區 新美齊Jade12</div></li>
          <li><div>中山區 富邦九莊 <span>‧</span> 高雄總圖書館</div></li>
        </ol>
        <!-- mobile -->
        <ol class="md:hidden">
          <li><div>內湖區 碧湖畔<span>‧</span>南港區 砳建築<span>‧</span>信義區 新美齊Jade12</div></li>
          <li><div>中山區 富邦九莊<span>‧</span>高雄總圖書館</div></li>
        </ol>
      </div>
      <div
        class="img relative"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <img class="w-full" src="@/section/s9/1.jpg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
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
