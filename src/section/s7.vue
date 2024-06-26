<template>
  <section class="s7 w-full relative">
    <div class="md:flex md:justify-center md:items-end md:translate-x-[5.885vw]">
      <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="logo" src="@/section/s7/logo.svg" />
        <div class="head">
          <div class="t1">築遠工程</div>
          <div class="t2">張盈智 結構技師</div>
          <div class="labell absolute">
            <div class="labell-en">Lighting Design</div>
            <div class="labell-zh">燈光設計</div>
          </div>
        </div>
        <div class="t4">
          以藝術看待結構，創造建築新視角，在安全利基點上，解構重組力與美學。洞悉技法，完美展現穠纖合度平衡，至高標準嚴格把關。<br>
          <br>
          知名業績<br>
          璞真碧湖畔、晴空樹、至仁愛、富富話合、巨大集團全球營運總部合
        </div>
      </div>
      <div class="imgs flex justify-between">
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <img class="w-full" src="@/section/s7/1.jpg" />
          <div class="txt">巨大集團全球營運總部合</div>
        </div>
        <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img class="w-full" src="@/section/s7/2.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  font-family: "Noto Serif TC";
  padding-top: size-m(44);
  @media screen and (min-width:768px) {
    padding: size(110) 0 size(90) 0;
  }

  .content {
    padding: 0 size-m(30);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(414);
      margin-right: size(154);
      position: relative;
    }
  }

  .logo {
    width: size-m(74);
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      width: size(149);
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      left: size(-149 - 55);
    }
  }

  .head {
    padding-bottom: size-m(16);
    margin-bottom: size-m(18);
    border-bottom: size-m(1) solid #000;
    position: relative;
    @media screen and (min-width:768px) {
      padding-bottom: size(20);
      margin-bottom: size(23);
      border-bottom: size(1) solid #000;
    }

    .labell {
      bottom: size-m(16 + 6);
      right: 0;
      @media screen and (min-width:768px) {
        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;
        top: size(-90);
        bottom: auto;
        left: size(-65 - 110);
        right: auto;
      }

      .labell-en {
        color: #BBA693;
        font-size: size-m(9);
        font-weight: 700;
        line-height: 132%;
        letter-spacing: .13em;
        margin-bottom: size-m(12);
        text-transform: uppercase;
        @media screen and (min-width:768px) {
          font-size: size(23);
          margin-bottom: 0;
          margin-left: size(15);
          writing-mode: vertical-lr;
        }
      }

      .labell-zh {
        font-size: size-m(20);
        font-weight: 700;
        line-height: 109%;
        padding: size-m(5) size-m(14);
        border: size-m(1) solid #000;
        display: inline-block;
        @media screen and (min-width:768px) {
          font-size: size(37);
          padding: size(15) size(15);
          border: size(1) solid #000;
          writing-mode: vertical-lr;
        }
      }
    }
  }

  .t1 {
    color: #12352A;
    font-size: size-m(15);
    font-weight: 700;
    line-height: 150%;
    letter-spacing: .01em;
    @media screen and (min-width:768px) {
      font-size: size(30);
    }
  }

  .t2 {
    font-size: size-m(19);
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.01em;
    margin-bottom: size-m(2);
    @media screen and (min-width:768px) {
      font-size: size(40);
      margin-bottom: size(0);
    }
  }

  .t3 {
    color: #12352A;
    font-size: size-m(13);
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.01em;
    @media screen and (min-width:768px) {
      font-size: size(25);
    }
  }

  .t4 {
    font-size: size-m(14);
    font-weight: 600;
    line-height: 163%;
    margin-bottom: size-m(30);
    @media screen and (min-width:768px) {
      font-size: size(23);
      margin-bottom: 0;
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