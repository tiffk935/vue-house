<template>
  <section class="s9 relative">
    <div class="imgs">
      <img class="img1 object-cover" src="@/section/s9/1.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
      <img class="img2 object-cover" src="@/section/s9/2.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="200" />
      <img class="img3 object-cover" src="@/section/s9/3.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="400" />
      <img class="img4 object-cover" src="@/section/s9/4.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="600" />
      <img class="img5 object-cover" src="@/section/s9/5.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="800" />
      <img class="img6 object-cover" src="@/section/s9/6.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="1000" />
      <img class="img7 object-cover" src="@/section/s9/7.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="1200" />
      <img class="img8 object-cover" src="@/section/s9/8.jpg" data-aos="fade" data-aos-duration="1000" data-aos-delay="1400" />
    </div>

    <div class="content">
      <div>
        <div class="t1">是金磚，必發光</div>
        <div class="t2">
          信義計劃區國際金融中心<br>
          內湖科學園區、南港軟體園區高科技產業聚落<br>
          大直重劃區則定義為流行、娛樂、商業、住宅兼俱的副都心<br>
          產業先行積蓄能量，已經是金磚重劃區閃閃發光的核心價值<br>
          <br>
          北投士林科技園區擁有金磚重劃發光特質<br>
          新洲美段更是大直水岸之後，台北市最具潛質的水岸富人區
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s9 {
  width: 100%;
  height: size-m(810);
  font-family: 'Noto Serif TC';
  padding: 0 0 size-m(53) 0;
  @media screen and (min-width:768px) {
    height: size(1080);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0;
  }

  .imgs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: size-m(52.64);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
      width: size(991);
    }
  }

  .img1, .img2, .img3 {
    height: size-m(94.95);
    margin-bottom: size-m(3.5);
    @media screen and (min-width:768px) {
      height: size(251);
      margin-bottom: size(8);
    }
  }

  .img1 {
    width: 96.41 / 375 * 100%;
  }

  .img2 {
    width: 143.76 / 375 * 100%;
  }

  .img3 {
    width: 127.87 / 375 * 100%;
  }
  
  .img4, .img5 {
    height: size-m(133.59);
    margin-bottom: size-m(3.5);
    @media screen and (min-width:768px) {
      height: size(353.03);
      margin-bottom: size(8);
    }
  }

  .img4 {
    width: 135.64 / 375 * 100%;
  }

  .img5 {
    width: 236.3 / 375 * 100%;
  }

  .img6, .img7, .img8 {
    height: size-m(88.86);
    @media screen and (min-width:768px) {
      height: size(234.82);
    }
  }

  .img6 {
    width: 170.14 / 375 * 100%;
  }

  .img7 {
    width: 115.25 / 375 * 100%;
  }

  .img8 {
    width: 83.03 / 375 * 100%;
  }

  .content {
    margin: 0 0 0 auto;
    width: size-m(342);
    height: size-m(380);
    background-image: url(@/section/s9/bg.png);
    background-size: cover;
    background-position: center;
    font-family: 'Noto Serif TC';
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 size-m(25);
    font-weight: 700;
    @media screen and (min-width:768px) {
      margin: 0;
      width: size(825.9);
      height: size(660.35);
      padding: 0 size(123) 0 size(148);
    }

    .t1 {
      color: #002B69;
      font-size: size-m(18);
      line-height: size-m(26);
      letter-spacing: .06em;
      margin-bottom: size-m(19);
      @media screen and (min-width:768px) {
        font-size: size(40);
        line-height: size(57);
        letter-spacing: .07em;
        margin-bottom: size(18);
      }
    }

    .t2 {
      color: #000;
      font-size: size-m(14);
      line-height: 170%;
      @media screen and (min-width:768px) {
        font-size: size(20);
      }
    }
  }
}

</style>

<script setup>
</script>
