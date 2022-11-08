<template>
  <section class="s4 relative">
    <img class="bg absolute" src="@/section/s4/bg.png" />
    <img class="deco absolute md:hidden" src="@/section/s4/deco-m.svg" />
    <img class="deco absolute hidden md:block" src="@/section/s4/deco.png" />
    <img class="logo absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/logo-m.svg" />
    <img class="logo absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/logo.svg" />
    <img class="title absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/title-m.svg" />
    <img class="title absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s4/title.svg" />

    <div class="title1">
    <div class="t1 hidden md:block" data-aos="fade-up" data-aos-delay="200">溫慶玄董事長：「自己敢住的房子，我才敢蓋；</div>
    <div class="t1 md:hidden" data-aos="fade-up" data-aos-delay="200">溫慶玄董事長：<br>「自己敢住的房子，我才敢蓋；</div>
    <div class="t1 br" data-aos="fade-up" data-aos-delay="200">自己願意住的房子，我才願意蓋。」</div>
    <div class="content" data-aos="fade-up" data-aos-delay="300">
     董事長創辦理念：低總價、高空間效率、好建材的商品，是持續以來不變的精神也是初衷。因為對於成家的夢想，我們緊緊守護，並真誠地了解：真正的好房，是買得起的好房子！<br><br>
     在規劃之初，為建築琢磨高坪效的實用價值，以及耐震安全性的考量，我們捨棄填滿容積率而拔高建築物的經營態度，以守護家園價值為本心，致力建築符合居住需求的作品。
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s4 {
  width: 100%;
  height: size-m(923);
  background: linear-gradient(180deg, #D9D9D9 76.04%, rgb(212 212 212) 100%);
  @media screen and (min-width:768px) {
    height: size(1090);
    background: linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%);
  }

  .bg {
    bottom: size-m(0);
    left: size-m(-187);
    width: size-m(562);
    opacity: 0.5;
    max-width: none;
    @media screen and (min-width:768px) {
      bottom: auto;
      top: size(-38);
      left: size(0);
      width: size(1920);
    }
  }

    .title1{
    position: absolute;
    top: size(643);
    left:size(865);
    width: size(481);

    @media screen and (max-width:768px) {
      text-align: center;
      top: size-m(330);
      left:size-m(30);
      width: size-m(315);
    }

    .t1{
      font-size: size(20);
      color: #727171;
      font-weight: 700;
      text-align: left;

      &.br{
       margin-left: size(160);

       @media screen and (max-width:768px) {
        margin-left: size-m(16);
      }
      }


      @media screen and (max-width:768px) {
        font-size: size-m(16);
      }
    }


    .content{
      font-size: size(16);
      color: #727171;
      font-weight:300;
      margin-top: size(20);
      text-align: left;
      text-align: justify;
      @media screen and (max-width:768px) {
        font-size: size-m(14);
        margin-top: size-m(10);
        font-weight:500;
      }
    }

  }


  .deco {
    top: size-m(222);
    left: size-m(14);
    width: size-m(343);
    @media screen and (min-width:768px) {
      top: size(437);
      left: size(476);
      width: size(967);
    }
  }

  .logo {
    top: size-m(47);
    left: size-m(81);
    width: size-m(213);
    @media screen and (min-width:768px) {
      top: size(180);
      left: size(807);
      width: size(306);
    }
  }

  .title {
    top: size-m(249);
    left: size-m(41);
    width: size-m(292);
    @media screen and (min-width:768px) {
      top: size(453);
      left: size(643);
      width: size(633);
    }
  }

  .text {
    top: size-m(342);
    left: size-m(30);
    width: size-m(315);
    @media screen and (min-width:768px) {
      top: size(643);
      left: size(867);
      width: size(504);
    }
  }
}

</style>

<script setup>
</script>
