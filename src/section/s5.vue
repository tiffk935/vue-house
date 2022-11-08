<template>
  <section class="s5 relative z-10">
    <div class="bg absolute"></div>
    <img class="house absolute" data-aos="fade-up" data-aos-delay="0" src="@/section/s5/house.png" />
    <img class="style absolute md:hidden" src="@/section/s5/style-m.svg" />
    <img class="style absolute hidden md:block" src="@/section/s5/style.svg" />
    <img class="house2 absolute md:hidden" src="@/section/s5/house2-m.png" />
    <img class="house2 absolute hidden md:block" src="@/section/s5/house2.png" />
    <img class="style2 absolute hidden md:block" data-aos="fade-right" data-aos-delay="0" src="@/section/s5/style2.png" />
    
    <div class="bigtitle" data-aos="fade-up" data-aos-delay="200">新蔚營造 甲級營造</div>
    <div class="title1">
    <div class="t1" data-aos="fade-up" data-aos-delay="200">價格超值，品質卓越</div>
    <div class="content" data-aos="fade-up" data-aos-delay="300">
     威泰建築從土地開發、產品規劃、承建營造，每一環節群策群力緊密相扣，發揮最大功能，共同創作出最優質的作品。時刻追求新技術的經營理念，重視進度控制：訂立良好管控制度，使工程進度如期進行。重視品質管制：工地主任現場實地監督，以管控工地作業品質；並不定時派人員前往稽核以達到品質管制之目的。
     <br>
     每件工程都當做自已的事來施作，必求盡善盡美，以「專業、誠信、品質、效率」，創造新蔚甲級營造，值得信賴的好口碑。
      </div>
    </div>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s5 {
  width: 100%;
  height: size-m(900);
  @media screen and (min-width:768px) {
    height: size(1444);
  }

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(746);
    background-image: url(@/section/s5/bg-m.png);
    background-size: 100% 100%;
    @media screen and (min-width:768px) {
      height: size(1320);
      background-image: url(@/section/s5/bg.png);
    }
  }

  .house {
    top: size-m(0);
    left: size-m(-59);
    width: size-m(808);
    max-width: none;
    @media screen and (min-width:768px) {
      top: size(-30);
      left: size(31);
      width: size(1872);
    }
  }

  .title {
    top: size-m(202);
    left: size-m(66);
    width: size-m(247);
    @media screen and (min-width:768px) {
      top: size(462);
      left: size(591);
      width: size(741);
    }
  }

  .bigtitle{
    position: absolute;
    font-size: size(90);
    color: #fff;
    font-weight: 900;
    left:size(590);
    top: size(435);
    text-shadow: rgba(0, 0, 0, 0.3) 0.05em 0.05em 0.05em;
    @media screen and (max-width:768px) {
    font-size: size-m(30); 
    left:size-m(65);
    top: size-m(195);
    }
  }

  .title1{
    position: absolute;
    top: size(650);
    left:size(680);
    width: size(559);
    z-index: 5;
    text-align: center;

    @media screen and (max-width:768px) {
      top: size-m(310);
      left:size-m(30);
      width: size-m(315);
    }

    .t1{
      font-size: size(45);
      line-height: size(70);
      margin-bottom: size(15);
      color: #fff;
      font-weight: 900;
      text-shadow: rgba(0, 0, 0, 0.3) 0.1em 0.1em 0.1em;
      

      @media screen and (max-width:768px) {
        font-size: size-m(20);
        margin-bottom: size-m(20);
      }
    }


    .content{
      font-size: size(16);
      color: #fff;
      font-weight:300;
      margin-top: size(15);
      text-align: left;
      text-align: justify;
      text-shadow: rgba(0, 0, 0, 0.3) 0.1em 0.1em 0.1em;

      @media screen and (max-width:768px) {
        font-size: size-m(14);
        margin-top: size-m(10);
        line-height: size-m(20);
        font-weight:400;
      }
    }

  }

  .style {
    top: size-m(271);
    left: size-m(16);
    width: size-m(343);
    @media screen and (min-width:768px) {
      top: size(617);
      left: size(609);
      width: size(706);
    }
  }

  .text {
    top: size-m(301);
    left: size-m(32);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(652);
      left: size(682);
      width: size(559);
    }
  }

  .house2 {
    top: size-m(555);
    left: 0;
    width: 100%;
    @media screen and (min-width:768px) {
      top: size(702.58);
      left: size(728);
      width: size(1194);
      max-width: none;
    }
  }

  .style2 {
    @media screen and (min-width:768px) {
      top: size(1133);
      left: size(170);
      width: size(662);
    }
  }
}

</style>

<script setup>
</script>
