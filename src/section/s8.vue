<template>
  <section class="s8 user-n w-full relative">
    <img class="logo absolute" src="@/section/s2/logo.svg" />
    <div class="line absolute" data-aos="cuscus" data-aos-delay="0"></div>
    <img class="small absolute" src="@/section/s8/small.jpg" />
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">すのものにべて<br class="md:hidden" />美しさはあるが</div>
      <div class="t2">五星飯店、頂級名宅<br />指定團隊</div>
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
        <div class="t3l">建築女詩人 林秀芬建築師</div>
        <p class="t3s">
          美國賓州大學建築碩士，美國加州及中華民國註冊建築師，在舊金山和台北均有多年執業經歷，曾獲國家卓越建築獎、國家建築金質獎、MACAEL<br />
          AWARD。 作品：
        </p>
        <ol>
          <li>
            <div>中山區 宏普頤和 <span>‧</span>中正區 達欣東門馥寓</div>
          </li>
          <li><div>南港區 達欣東匯</div></li>
        </ol>
      </div>
      <div
        class="img relative"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <img class="w-full" src="@/section/s8/1.jpg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
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
    margin-bottom: size-m(33);
    padding-left: size-m(55);
    @media (min-width: 768px) {
      font-size: size(51);
      letter-spacing: size(3.57);
      margin-bottom: size(40);
      padding-left: size(398);
    }
  }

  .t2 {
    font-size: size-m(23);
    font-weight: 500;
    line-height: normal;
    letter-spacing: size-m(1.38);
    margin-bottom: size-m(30);
    padding-left: size-m(55);
    @media (min-width: 768px) {
      font-size: size(67);
      letter-spacing: size(0);
      margin-bottom: size(143);
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
      width: size(680);
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
