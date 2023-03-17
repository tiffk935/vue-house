<template>
  <section class="s4 relative bg-[#EEEEEE]">
    <div class="img1 absolute" data-aos="fade-up" data-aos-delay="0">
      <img src="@/section/s4/img1.jpg" /><img class="absolute" src="@/section/s4/img1.png" />
    </div>    
    <div class="img2 absolute" data-aos="fade-up" data-aos-delay="0">
    <img src="./s4/img2.jpg" />
    <!--img class="absolute" src="./s4/img22.png" /-->
    <!--img class="absolute" src="./s4/img23.png" /-->
    </div>    
    <div class="text absolute">
      <div class="title" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">文林北路綠樹園道<br>國際北士科首席</div>
      <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        從信義計劃、內科到南軟，與經濟脈動並肩的重劃區增值潛力之大早已驗證。台北市最後一塊重劃區北士科彌足珍貴，純住宅區比例僅占約14％，更是珍稀。<br>
        <br>
        文林北路第一排，領航盛世燙金門牌，與便捷機能咫尺相連，與綠樹街廓優雅共生，鳳毛麟角般的存在，擁有一席即是贏家。
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s4 {
  width: 100%;
  height: size-m(742);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .img1 {
    width: size-m(315);
    top: size-m(162);
    left: size-m(30);
    img{width: 100%;
    &:last-child{top: 0;left: 0;}
    }
    @media screen and (min-width:768px) {
      width: size(933);
      top: size(120);
      left: size(109);
    }
  }

  .img2 {
    width: size-m(148);
    top: size-m(52);
    left: size-m(197);
    overflow: hidden;
    img{width: 100%;top: 0;left: 0;
    &:nth-child(2){
      animation: an 3s linear infinite;
    }
    }
    @media screen and (min-width:768px) {
      width: size(445);
      top: size(119);
      left: size(1256);
    }
    @keyframes an{
    from{transform: translate(35%,100%);
    }
    to{transform: translate(-30%,-100%);
    }
}
  }

  .text {
    top: size-m(485);
    left: 0;
    padding: 0 size-m(31);
    font-size: size-m(13);
    line-height: size-m(20);
    text-align: justify;
    color: #4D4D4D;
    @media screen and (min-width:768px) {
      top: size(524);
      left: size(1256);
      width: size(445);
      padding: 0 size(0);
      font-size: size(22);
      line-height: size(34);
    }

    .title {
      font-weight: 700;
      font-size: size-m(20);
      line-height: size-m(29);
      letter-spacing: 0.06em;
      color: #0A534C;
      font-family: 'Noto Serif TC';
      margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(39);
        line-height: size(56);
        margin-bottom: size(38);
      }
    }
  }
}

</style>

<script setup>
</script>
