<template>
  <article class="st1 relative">
    <div class="t1 text-[#78572E] md:hidden" data-aos="fade-up" data-aos-delay="0">豐藝館X社區關懷X藝術生活</div>
    <div class="inner">
      <div>
        <div class="t1 text-[#78572E] hidden md:block" data-aos="fade-up" data-aos-delay="0">豐藝館X社區關懷X藝術生活</div>

        <img class="art w-full block md:hidden" src="@/section/t1/art-m.svg" />
        <img class="art w-full hidden md:block" src="@/section/t1/art.svg" />

        <div class="t2 text-[#86807B]" data-aos="fade-up" data-aos-delay="0">
          豐邑集團豐藝館自2008年創立以來<br>
          長期秉持著「愛與分享」的精神<br>
          致力建構台灣本土藝術美學展示平台<br>
          創造「藝術生活化、生活藝術化」的優質環境<br>
          積極推廣藝術、文化、公益美學與教育活動。
        </div>
        <div class="pics">
          <img src="@/section/t1/pic1.webp" data-aos="fade-up" data-aos-delay="0" />
          <img src="@/section/t1/pic2.webp" data-aos="fade-up" data-aos-delay="100" />
        </div>
      </div>
      <img class="main-pic" src="@/section/t1/main-pic.webp" />
      <div class="small absolute text-white">漢宇花開_青春芳華 楊鼎獻個展</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.st1 {
  padding: sizem(75) 0 0 0;
  background-image: url(@/section/s2/sec2-bg.webp);
  background-size: auto 100%;
  @media screen and (min-width: 767px) {
    padding: size(38) 0 size(63) size(145);
    background-size: 100% auto;
  }

  .t1 {
    text-align: center;
    font-size: sizem(25);
    font-weight: 700;
    line-height: sizem(35);
    letter-spacing: .06em;
    margin-bottom: sizem(31);
    white-space: nowrap;
    @media screen and (min-width: 767px) {
      font-size: size(60);
      line-height: size(72);
      margin-bottom: size(80);
    }
  }

  .inner {
    padding: 0 sizem(30);
    @media screen and (min-width: 767px) {
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      & > div {
        width: size(772);
      }
    }
  }

  .art {
    margin-bottom: sizem(24);
    @media screen and (min-width: 767px) {
      margin-bottom: size(63);
    }
  }

  .t2 {
    font-size: sizem(13);
    line-height: sizem(22);
    letter-spacing: .06em;
    margin-bottom: sizem(32);
    @media screen and (min-width: 767px) {
      font-size: size(23);
      line-height: size(45);
      margin-bottom: size(105);
    }
  }

  .pics {
    display: flex;
    justify-content: space-between;
    margin-bottom: sizem(24);
    @media screen and (min-width: 767px) {
      margin-bottom: 0;
    }

    img {
      display: block;
      width: 48.5%;
    }
  }

  .main-pic {
    width: calc(100% + sizem(60));
    margin: 0 sizem(-30);
    display: block;
    border-radius: sizem(50) sizem(50) 0 0;
    @media screen and (min-width: 767px) {
      width: size(919);
      height: size(955);
      object-fit: cover;
      margin: 0;
      border-radius: size(150) 0 0 0;
    }
  }

  .small {
    width: auto !important;
    font-size: sizem(12);
    font-weight: 700;
    letter-spacing: .06em;
    bottom: sizem(7);
    right: sizem(11);
    @media screen and (min-width: 767px) {
      font-size: size(23);
      bottom: size(76);
      right: size(28);
    }
  }
}
</style>