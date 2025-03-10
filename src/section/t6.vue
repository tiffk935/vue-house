<template>
  <article class="st6 relative">
    <div class="bg absolute">
      <div></div>
      <div></div>
    </div>
    <div class="content relative">
      <div class="inner">
        <div>
          <img class="title block" src="@/section/t6/title.svg" data-aos="fade-up" data-aos-delay="0" />
          <div class="t1 text-[#635B54]" data-aos="fade-up" data-aos-delay="0">
            七期超稀有千坪面積、大街廓開發！<br>
            南屯少見完整基地，單層規劃4戶雙電梯，<br>
            全棟純住優質居，戶戶邊間，標配3面採光更適居<br>
            社區延續文心森林、禮惠公園、南屯公園<br>
            將森活感完美移植，新家園就從這裡開始！
          </div>
        </div>

        <img class="pic block" src="@/section/t6/pic.webp" />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.st6 {
  padding: sizem(86) sizem(30) sizem(35) sizem(30);
  background-image: url(@/section/s2/sec2-bg.webp);
  background-size: auto 100%;
  @media screen and (min-width: 767px) {
    padding: size(64) 0 size(74) 0;
    background-size: 100% auto;
  }

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div {
      &:nth-child(1) {
        position: absolute;
        top: sizem(56);
        left: 0;
        width: 100%;
        height: sizem(632.53);
        mix-blend-mode: multiply;
        background: linear-gradient(0deg, #D9C8AE 0%, rgba(217, 200, 174, 0.99) 37%, rgba(217, 200, 175, 0.96) 51%, rgba(218, 201, 177, 0.90) 61%, rgba(219, 203, 179, 0.82) 69%, rgba(220, 205, 182, 0.72) 76%, rgba(222, 207, 186, 0.59) 83%, rgba(224, 210, 191, 0.44) 88%, rgba(226, 213, 197, 0.27) 94%, rgba(229, 216, 203, 0.07) 98%, rgba(230, 218, 206, 0.00) 100%);
        @media screen and (min-width: 767px) {
          top: size(152);
          height: size(655.61);
          background: linear-gradient(90deg, #D9C8AE 0%, rgba(217, 200, 174, 0.99) 37%, rgba(217, 200, 175, 0.96) 51%, rgba(218, 201, 177, 0.90) 61%, rgba(219, 203, 179, 0.82) 69%, rgba(220, 205, 182, 0.72) 76%, rgba(222, 207, 186, 0.59) 83%, rgba(224, 210, 191, 0.44) 88%, rgba(226, 213, 197, 0.27) 94%, rgba(229, 216, 203, 0.07) 98%, rgba(230, 218, 206, 0.00) 100%);
        }
      }

      &:nth-child(2) {
        position: absolute;
        top: 0;
        left: sizem(30);
        width: calc(100% - sizem(60));
        height: sizem(689);
        mix-blend-mode: multiply;
        background: linear-gradient(0deg, #D9C8AE 0%, rgba(217, 200, 174, 0.99) 37%, rgba(217, 200, 175, 0.96) 51%, rgba(218, 201, 177, 0.90) 61%, rgba(219, 203, 179, 0.82) 69%, rgba(220, 205, 182, 0.72) 76%, rgba(222, 207, 186, 0.59) 83%, rgba(224, 210, 191, 0.44) 88%, rgba(226, 213, 197, 0.27) 94%, rgba(229, 216, 203, 0.07) 98%, rgba(230, 218, 206, 0.00) 100%);
        @media screen and (min-width: 767px) {
          top: size(256.44);
          left: auto;
          right: 0;
          width: size(1578.46);
          height: size(655.28);
          background: linear-gradient(90deg, #E4DACF 0%, rgba(228, 218, 206, 0.99) 36%, rgba(228, 218, 206, 0.96) 50%, rgba(228, 218, 206, 0.91) 60%, rgba(228, 218, 206, 0.83) 68%, rgba(228, 218, 206, 0.73) 75%, rgba(228, 218, 206, 0.61) 82%, rgba(229, 218, 206, 0.47) 87%, rgba(229, 218, 206, 0.30) 93%, rgba(229, 218, 206, 0.12) 97%, rgba(230, 218, 206, 0.00) 100%);
        }
      }
    }
  }

  .title {
    width: sizem(289.34);
    margin: 0 auto;
    margin-bottom: sizem(30);
    @media screen and (min-width: 767px) {
      width: size(630.66);
      margin: size(288) 0 size(62) 0;
    }
  }

  .t1 {
    font-size: sizem(13);
    line-height: sizem(22);
    letter-spacing: .05em;
    margin-bottom: sizem(20);
    @media screen and (min-width: 767px) {
      font-size: size(23);
      line-height: size(48);
      margin-bottom: 0;
    }
  }

  .inner {
    @media screen and (min-width: 767px) {
      padding: 0 size(162) 0 size(211);
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  }

  .pic {
    width: sizem(340.22);
    margin: 0 0 0 sizem(-17);
    @media screen and (min-width: 767px) {
      width: size(796);
      margin: 0;
    }
  }
}
</style>