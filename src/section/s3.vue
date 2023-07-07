<template>
  <section class="s3 relative bg-[#D2D2D2] text-[#4D4D4D]">
    <img class="style absolute" data-aos="fade" data-aos-delay="0" src="@/section/s3/style.svg" />
    <div class="content">
      <div class="title md:flex" data-aos="fade-up" data-aos-delay="0">
        <div class="t1">指日可待</div>
        <div class="t2">明日高雄</div>
      </div>
      <div class="t3 text-[#00803F]" data-aos="fade-up" data-aos-delay="0">SCIENCE<br>AND TECHNOLOGY</div>
      <div class="t4" data-aos="fade-up" data-aos-delay="0">台積電至高雄建廠領首，南臺灣半導體S廊帶成形，成功打入高科技產業全球供應鏈，加上亞灣5G AloT創新園區永續發展經營，高雄變身國際科技城市，無庸置疑！</div>
    </div>
    <div class="img relative">
      <img class="w-full" src="@/section/s3/1.jpg" />
      <div class="img-txt absolute text-white">實景拍攝圖</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  padding-bottom: size-m(23);
  @media screen and (min-width:768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: size(142) size(84) size(138) size(91);
  }

  .style {
    top: size-m(33);
    left: size-m(186);
    width: size-m(158.196);
    @media screen and (min-width:768px) {
      top: size(94);
      left: size(1461);
      width: size(394.73);
    }
  }

  .content {
    padding: size-m(33) size-m(32.5) size-m(48.15) size-m(23);
    @media screen and (min-width:768px) {
      padding: 0;
      width: size(653);
    }
  }

  .title {
    @media screen and (min-width:768px) {
      margin-bottom: size(93);
    }
  }

  .t1 {
    font-size: size-m(30); 
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      font-size: size(71); 
      width: size(73);
      margin: 0 size(10) 0 0;
    }
  }

  .t2 {
    font-size: size-m(30);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(49);
    @media screen and (min-width:768px) {
      font-size: size(71); 
      width: size(73);
      margin: 0;
    }
  }

  .t3 {
    font-size: size-m(18);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 150%; 
    padding-bottom: size-m(13);
    margin-bottom: size-m(13);
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(30);
      line-height: size(33);
      letter-spacing: size(0.9);
      padding-bottom: size(29);
      margin-bottom: size(38);
      display: inline-block;
    }

    &:after {
      content: '';
      width: size-m(150);
      height: size-m(2);
      background: #00803F;
      position: absolute;
      left: 0;
      bottom: 0;
      @media screen and (min-width:768px) {
        width: size(308);
        height: size(1);
      }
    }
  }

  .t4 {
    text-align: justify;
    font-size: size-m(13);
    font-family: 'Noto Sans TC';
    line-height: 170%; 
    font-weight: 500;
    @media screen and (min-width:768px) {
      font-size: size(22);
      line-height: size(38);
    }
  }

  .img {
    @media screen and (min-width:768px) {
      width: size(1000);
    }
  }

  .img-txt {
    font-size: size-m(12);
    font-weight: 500;
    line-height: normal; 
    left: size-m(4.5);
    bottom: size-m(4);
    @media screen and (min-width:768px) {
      font-size: size(15);
      left: size(14);
      bottom: size(11);
    }
  }
}
</style>

<script setup>
</script>