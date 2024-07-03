<template>
  <section class="s6 w-full relative">
    <div class="title flex justify-center items-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div>雋品團隊</div>
      <div class="en">Professional</div>
    </div>
    <div class="md:flex md:justify-center md:items-end md:flex-row-reverse md:translate-x-[-5.885vw]">
      <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="logo" src="@/section/s6/logo.svg" />
        <div class="head">
          <div class="t1">田中建築</div>
          <div class="t2 subtitle">田中純夫 一級建築士</div>
          <div class="t3">
            40年以上營造經驗<br>
            400年歷史日本竹中工務店前所長
          </div>
          <div class="labell absolute">
            <div class="labell-en">structure Design</div>
            <div class="labell-zh">結構設計</div>
          </div>
        </div>
        <div class="t4">
          將經驗內化對建築美學的極致要求，以日系建築規範，親自監工與技術執導，著重於看不到的細節品質，打造長期恆久安心、安全、舒適的建築。<br>
          <br>
          知名業績<br>
          樸建築、璞山鄰、璞水瑟、富富話合、至仁愛
        </div>
      </div>
      <div class="imgs flex justify-between">
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <img class="w-full" src="@/section/s6/1.jpg" />
        </div>
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img class="w-full" src="@/section/s6/2.jpg" />
          <div class="txt">富富話合</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  padding-top: size-m(41);
  @media screen and (min-width:768px) {
    padding: size(83) 0 size(131) 0;
  }

  .title {
    margin-bottom: 1.9em;

    div {
      letter-spacing: .15em;
      margin-right:.3em;
    }

    .en {
      color: #BBA693;
      font-size: .8em;
      line-height: 1.7;
      letter-spacing: .08em;
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  .content {
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(414);
      margin-left: size(154);
      position: relative;
    }
  }

  .logo {
    width: size-m(44);
    margin-bottom: size-m(29);
    @media screen and (min-width:768px) {
      // display: none;
      width: size(109);
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      right: size(-65 - 110);
    }
  }

  .head {
    padding-bottom: size-m(23);
    margin-bottom: size-m(19);
    border-bottom: size-m(1) solid #000;
    position: relative;
    @media screen and (min-width:768px) {
      padding-bottom: size(32);
      margin-bottom: size(23);
      border-bottom: size(1) solid #000;
    }

    .labell {
      bottom: size-m(23 + 4);
      right: 0;
      text-align: right;
      @media screen and (min-width:768px) {
        display: flex;
        align-items: flex-start;
        top: 0;
        bottom: auto;
        right: size(-65 - 110);
      }

    }
  }


  .imgs {
    @media screen and (min-width:768px) {
      width: size(849);
    }

    .img {
      width: 48.8%;
    }

    .txt {
      position: absolute;
      bottom: size-m(5);
      right: size-m(6);
      color: #FFF;
      font-family: "Noto Sans TC";
      font-size: size-m(10);
      line-height: 133%;
      @media screen and (min-width:768px) {
        bottom: size(8);
        right: size(14);
        font-size: size(14);
      }
    }
  }
}
</style>

<script setup>
</script>