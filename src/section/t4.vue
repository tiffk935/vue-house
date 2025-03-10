<template>
  <article class="st4 relative text-white">
    <div class="bg w-full absolute">
      <div class="info absolute">3D外觀模擬圖</div>
    </div>
    <div class="rect w-full absolute md:hidden"></div>
    <div class="content relative">
      <div class="t1">綠幕森地標，城市新封面</div>
      <img class="en block md:hidden" src="@/section/t4/en-m.svg" />
      <img class="en hidden md:block" src="@/section/t4/en.svg" />
      <div class="t2">
        將七期綠覆最高的綠藝，融入建築繆思<br>
        在過程中向上延展，<br>
        賦予感官視聽一份嶄新維度的體驗<br>
        並以跳層綠幕的建築語彙，<br>
        讓日常時光充滿生命力與森活力<br>
        隨即您會發現，身心的嚮往、家園的想望，正是如此
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.st4 {
  width: 100%;
  height: sizem(702);
  text-align: center;
  @media screen and (min-width:768px) {
    height: size(2155);
  }

  .bg {
    bottom: 0;
    left: 0;
    height: sizem(598);
    background-image: url(@/section/t4/pic.webp);
    background-size: cover;
    background-position: bottom center;
    @media screen and (min-width:768px) {
      height: size(2155);
    }

    .info {
      bottom: sizem(11);
      left: sizem(14);
      font-size: sizem(12);
      letter-spacing: .06em;
      @media screen and (min-width:768px) {
        //display: none;
      font-size: size(16);
      left: size(20);
      bottom: size(20);
      }
    }
  }

  .rect {
    top: 0;
    left: 0;
    height: sizem(251);
    background: linear-gradient(180deg, #4176B6 48%, rgba(65, 118, 182, 0.10) 100%);
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .content {
    padding: sizem(38) sizem(30);
    @media screen and (min-width:768px) {
      padding: size(110) 0 0 0;
    }

    .t1 {
      font-size: sizem(25);
      line-height: sizem(30);
      font-weight: 700;
      letter-spacing: .06em;
      margin-bottom: sizem(23);
      @media screen and (min-width:768px) {
        font-size: size(91);
        line-height: size(109);
        margin-bottom: size(53);
      }
    }

    .en {
      width: sizem(286);
      margin: 0 auto;
      margin-bottom: sizem(20);
      mix-blend-mode: screen;
      @media screen and (min-width:768px) {
        width: size(1468.27);
        margin-bottom: size(60);
      }
    }

    .t2 {
      font-size: sizem(13);
      line-height: sizem(22);
      letter-spacing: .05em;
      @media screen and (min-width:768px) {
        font-size: size(23);
        line-height: size(40);
      }
    }
  }
}
</style>