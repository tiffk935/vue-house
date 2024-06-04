<template>
  <section class="s10 relative">
    <div class="list">
      <div class="content">
          <div class="title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">是金磚，必發光</div>
          <div class="desc" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            信義計劃區國際金融中心<br>
            內湖科學園區、南港軟體園區高科技產業聚落<br>
            大直重劃區則定義為流行、娛樂、商業、住宅兼俱的副都心<br>
            產業先行積蓄能量，已經是金磚重劃區閃閃發光的核心價值
          </div>
      </div>
      <div class="img1" data-aos="fade" data-aos-duration="1500" data-aos-delay="200">
        <img class="hidden md:block" src="./s10/11.jpg" alt="">
        <img class="md:hidden" src="./s10/11m.jpg" alt="">
      </div>
      <div class="img2">
        <div class="img bg-[#5c99b9]">
          <img src="./s10/12.jpg" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="400">
          <span data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600"><img src="./s10/y1.svg" alt="">信義計劃</span>
        </div>
        <div class="img bg-[#71aac9]">
          <img src="./s10/13.jpg" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="600">
          <span class="text-right" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">南港軟體園區<img src="./s10/y2.svg" alt=""></span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="content">
        <div class="title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0"><img src="./s10/now.svg" alt=""></div>
        <div class="subtitle" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">北士科新洲美，<br class="md:hidden">金磚水岸，橫空出世</div>
          <div class="desc" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            北投士林科技園區擁有金磚重劃發光特質<br>
新洲美段更是大直水岸之後，台北市最具潛質的水岸富人區
          </div>
      </div>
      <div class="img1" data-aos="fade" data-aos-duration="1500" data-aos-delay="200">
        <img class="hidden md:block" src="./s10/21.jpg" alt="">
        <img class="md:hidden" src="./s10/21m.jpg" alt="">
      </div>
      <div class="img2">
        <div class="img bg-[#5c99b9]">
          <img src="./s10/22.jpg" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="400">
          <span class="text-right" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">大直重劃<img src="./s10/y3.svg" alt=""></span>
        </div>
        <div class="img bg-[#71aac9]">
          <img src="./s10/23.jpg" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="600">
          <span data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800"><img src="./s10/y4.svg" alt="">年內湖科學園區</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s10 {
  width: 100%;
 // height: size-m(810);
  font-family: 'Noto Serif TC';
  padding: 0;
  background: #125781;
 // background-image: url("./s10/mo.jpg");
  background-size: cover;
  color: #fff;
  line-height:1.7;
    font-family: 'Noto Serif TC';
    font-weight: 400;
      font-size: size-m(12);
  @media screen and (min-width:768px) {
   // background-image: url("./s10/pc.jpg");
    background-image: none;
    background-size: cover;
    height: size(1080);
        font-size: size(20);
  }
  .list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    // flex-direction:column;
    flex-wrap: wrap;
      flex-direction: row-reverse;
  @media screen and (min-width:768px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
  &:last-child{
    flex-direction: row;
  .img2{ order:-1;}
    @media screen and (min-width:768px) {
      flex-direction: row-reverse;
  .img2{ order:1;}
    }
  }
  }
  .content {
    padding: 0 size-m(30);
    flex: 1 size-m(150);
   // max-width: size-m(150);
    @media screen and (min-width:768px) {
      margin: 0;
      flex: 1 auto;
      padding: 0 0 0 size(125);
    }

    .title {
      font-size: size-m(18);
      margin-bottom: size-m(19);font-weight:700;
      margin-top: 0em;
      margin-bottom: 1em;
      img{height: 1.39em;margin-top: 0em;}
      @media screen and (min-width:768px) {
        font-size: size(40);
        margin-top: 1.3em;
      img{margin-top: -1em;}
      }
    }
    .subtitle{
        font-size:1.2em;
      font-weight: 700;
      letter-spacing: 0.14em;
        margin-bottom: 0.5em;
      @media screen and (min-width:768px) {
        padding-top: 1.1em;
        margin-bottom: 1.1em;
      }
    }
  }
  .img1{
    height:size-m(262);
    flex: 0 size-m(150);
    object-fit: cover;
    max-width: size-m(150);
    overflow: hidden;
    background: #84BDDC;
    @media screen and (min-width:768px) {
    height:size(540);
    max-width: 100%;
    flex: 0 auto;
    }
    img{height: 100%;max-width:none;}
  }
  .img2{
      flex: 1 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction:column;
      align-self:stretch;
      margin: 0;height:auto;
    @media screen and (min-width:768px) {
      flex: 0 size(650);
      height:size(540);
    }
      .img{
        flex:1 1 50%;
        max-height: 50%;
        position: relative;
        overflow: hidden;
        > img{height: 100%; }
        span{
          position: absolute;top:3em;left:0;padding:0 1.9em;width: 100%;
          font-size: size-m(11);
    @media screen and (min-width:768px) {
      padding:0 2.3em;
          font-size: size(19);
    }
          img{
            height: 2.95em;
            margin:0 .4em .3em;
            display: inline-block;vertical-align: bottom;
          }
        }
      }
   }
}

</style>

<script setup>
</script>
