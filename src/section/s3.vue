<template>
  <section class="s3 user-n w-full relative">
    <div class="wrapper">
      <img class="en block" src="@/section/s3/en.svg" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
      <div class="pic">
        <img class="txt block" src="@/section/s3/txt.svg" />
        <img class="img block" src="@/section/s3/img.webp" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
        <img class="a3 block" src="@/section/s3/A3.svg" />
        <div class="caption">實景拍攝美化圖</div>
        <div class="line hidden md:block"></div>
      </div>
      <div class="t" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1 text-[#6E4D3B] font-['Noto_Serif_TC']">A3雙捷交匯<br>一站9分鐘 直達北車</div>
        <div class="t2">桃園機場捷運A3站、環狀線Y20站，雙捷黃金交匯，進化城市動能。只要一站，抵達台北車站；同一線，抵達國門桃園機場；隨捷運三環六線到位，串連士林、內科，加上快速道路、國道系統，以及規劃中的溪北轉運站，未來雙北國際樞紐即在眼前。</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  background: #E3DCCC;
  padding: size-m(42) 0 size-m(53) 0;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .wrapper {
    @media screen and (min-width:768px) {
      width: size(1413);
      position: absolute;
      top: size(168);
      left: size(231);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row-reverse;
    }
  }

  .en {
    width: size-m(246.1);
    margin: 0 auto size-m(28);
    @media screen and (min-width:768px) {
      width: size(710);
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .pic {
    position: relative;
    width: size-m(337);
    height: size-m(277);
    background: #B8805A;
    margin: 0 0 size-m(47) auto;
    @media screen and (min-width:768px) {
      width: size(428.14);
      height: size(739.52);
      background: #B8805A;
      margin: 0;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: size(84);
        height: 100%;
        background: linear-gradient(90deg, rgba(187,131,98,0) 0%, rgba(186,130,97,0.03) 14%, rgba(185,128,96,0.11) 29%, rgba(183,125,94,0.24) 45%, rgba(180,122,92,0.42) 62%, rgba(176,117,88,0.66) 80%, rgba(171,111,84,0.95) 97%, rgba(171,110,84,1) 100%);
        mix-blend-mode: multiply;
      }
    }

    .caption{
      font-size: size-m(11);
      color: #fff;
      position: absolute;
      right:  size-m(50);
      bottom: size-m(50);
       @media screen and (min-width:768px) {
        font-size: size(12);
        right:  size(130);
      bottom: size(130);
       }
    }

    .txt {
      width: size-m(127);
      position: absolute;
      bottom: size-m(11);
      left: size-m(173);
      @media screen and (min-width:768px) {
        width: size(272.07);
        bottom: size(58);
        left: auto;
        right: size(114);
      }
    }

    .img {
      width: size-m(305.55);
      position: absolute;
      top: size-m(-5);
      left: size-m(-5);
      box-shadow: size-m(0) size-m(4) size-m(18) rgba(0,0,0,.25);
      max-width: none;
      @media screen and (min-width:768px) {
        width: size(631);
        top: size(123);
        left: auto;
        right: size(114);
        box-shadow: size(0) size(4) size(18) rgba(0,0,0,.25);
      }
    }

    .a3 {
      position: absolute;
      top: size-m(-5);
      right: 0;
      width: size-m(91.63);
      @media screen and (min-width:768px) {
        top: size(-2);
        width: size(243.75);
        right: size(8);
      }
    }

    .line {
      position: absolute;
      bottom: size(34);
      right: size(114);
      width: size(48);
      height: size(1);
      background: #fff;
    }
  }

  .t {
    @media screen and (min-width:768px) {
      width: size(565);
    }
  }

  .t1 {
    font-size: size-m(24);
    line-height: size-m(38);
    text-align: center;
    font-weight: 500;
    letter-spacing: .18em;
    margin: 0 0 size-m(10) 0;
    @media screen and (min-width:768px) {
      font-size: size(52);
      line-height: size(85);
      margin: 0 0 size(70) 0;
      letter-spacing: .2em;
    }
  }

  .t2 {
    padding: 0 size-m(36);
    font-size: size-m(13);
    line-height: size-m(26);
    letter-spacing: .03em;
    text-align: justify;
    @media screen and (min-width:768px) {
      padding: 0;
      font-size: size(23);
      line-height: size(41);
    }
  }
}
</style>

<script setup>
</script>
