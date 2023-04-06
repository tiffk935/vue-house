<template>
  <section class="s3_s6 relative text-white bg-[#025d3e]">
    <div class="rect absolute"></div>
    <div class="top relative">
      <img class="title-en absolute" src="@/section/s3/title-en.svg" />
      <div class="title absolute">交織繁華交通系統<br class="md:hidden"><span class="hidden md:inline">&nbsp;</span>高速連結城市能量</div>
    </div>

    <div class="s3 relative">
      <img class="num absolute" src="@/section/s3/num.svg" />
      <div class="relative md:flex md:items-center">
        <img class="img" data-aos="fade-up" src="@/section/s3/img.jpg" />
        <div class="content">
          <img class="en" data-aos="fade-up" src="@/section/s3/en.svg" />
          <div class="t1" data-aos="fade-up">繁華交通．連結城市高能量</div>
          <div class="t2" data-aos="fade-up">永安路40米拓寬、北外環快速道路、國道8號聯通道路，三大主幹道及轉運站的擴建貫通，安南區道路交通系統更四通八達。</div>
        </div>
      </div>
    </div>

    <div class="s4 relative">
      <img class="num absolute" src="@/section/s4/num.svg" />
      <div class="relative md:flex md:items-center md:flex-row-reverse">
        <img class="img" data-aos="fade-up" src="@/section/s4/img.jpg" />
        <div class="content content2">
          <img class="en" data-aos="fade-up" src="@/section/s4/en.svg" />
          <div class="t1" data-aos="fade-up">綠心美地．國家級雋翠植感</div>
          <div class="t2" data-aos="fade-up">
            【美地莊園】台南15萬坪史博館特區<br>
            第一排。萬坪磅礡綠意，盡享自然、<br>
            優質環境，樂活健康移居。
          </div>
        </div>
      </div>
    </div>

    <div class="s5 relative">
      <img class="num absolute" src="@/section/s5/num.svg" />
      <div class="relative md:flex md:items-center">
        <img class="img" data-aos="fade-up" src="@/section/s5/img.jpg" />
        <div class="content">
          <img class="en" data-aos="fade-up" src="@/section/s5/en.svg" />
          <div class="t1" data-aos="fade-up">明星學區卡位．菁英計畫養成記</div>
          <div class="t2" data-aos="fade-up">
            生活圈內提供豐富教育資源，就讀學區為和順國<br class="md:hidden">小、和順國中，車程約6-7分鐘，家長接送便利。
          </div>
        </div>
      </div>
    </div>

    <div class="s6 relative">
      <img class="num absolute" src="@/section/s6/num.svg" />
      <div class="relative md:flex md:items-center md:flex-row-reverse">
        <img class="img" data-aos="fade-up" src="@/section/s6/img.jpg" />
        <div class="content content2">
          <img class="en" data-aos="fade-up" src="@/section/s6/en.svg" />
          <div class="t1" data-aos="fade-up">盎然機能，生活隨心購樂</div>
          <div class="t2" data-aos="fade-up"> 生活機能可至安和路商圈，或到全聯福利中心安和店、大裕生鮮超市、全國生活百貨館等，車程約5-7分鐘，採買外食或生活用品皆便利。</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3_s6 {
  background-image: url(@/section/s3/bg.jpg);
  background-size: cover;
  background-position: center center;

  .rect {
    width: size-m(375);
    height: size-m(123);
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #055C4E 0%, rgba(5, 92, 78, 0) 100%);
  }

  .top {
    width: 100%;
    height: size-m(166);
    @media screen and (min-width:768px) {
      height: size(598);
    }

    .title-en {
      width: size-m(260);
      left: size-m(57);
      top: size-m(30);
      @media screen and (min-width:768px) {
        width: size(941.65);
        left: size(489);
        top: size(255);
      }
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 500;
      font-size: size-m(24);
      line-height: size-m(34);
      text-align: center;
      letter-spacing: 0.08em;
      left: size-m(84);
      top: size-m(62);
      @media screen and (min-width:768px) {
        font-size: size(64);
        line-height: size(92);
        left: size(398);
        top: size(370);
      }
    }
  }

  .num {
    width: auto;
    height: size-m(140);
    @media screen and (min-width:768px) {
      height: size(585.6);
    }
  }

  .img {
    width: size-m(350);
    height: size-m(207);
    object-fit: cover;
    margin-bottom: size-m(29);
    @media screen and (min-width:768px) {
      width: size(1240);
      height: size(580);
      margin-bottom: size(0);
    }
  }

  .content {
    @media screen and (min-width:768px) {
      width: calc(100% - size(1240));
      padding: 0 size(130) 0 size(48);
    }

    &.content2 {
      @media screen and (min-width:768px) {
        padding: 0 size(57) 0 size(130);
      }
    }
  }

  .en {
    width: auto;
    height: size-m(21.62);
    margin: 0 auto size-m(10.38) auto;
    @media screen and (min-width:768px) {
      height: size(58.4);
      margin: 0 0 size(75.62) 0;
    }
  }

  .t1 {
    font-weight: 500;
    font-size: size-m(20);
    line-height: size-m(29);
    letter-spacing: -0.03em;
    text-align: center;
    margin-bottom: size-m(15);
    @media screen and (min-width:768px) {
      font-size: size(38);
      line-height: size(55);
      text-align: left;
      margin-bottom: size(24);
    }
  }

  .t2 {
    width: size-m(325);
    margin: 0 auto;
    font-weight: 500;
    font-size: size-m(13);
    line-height: size-m(25);
    text-align: center;
    @media screen and (min-width:768px) {
      width: auto;
      margin: 0;
      font-size: size(25);
      line-height: size(45);
      text-align: justify;
    }
  }
  
  .s3 {
    width: 100%;
    padding-bottom: size-m(68);
    @media screen and (min-width:768px) {
      padding: size(149) 0 size(97) 0;
    }

    .num {
      left: size-m(0);
      top: size-m(234);
      @media screen and (min-width:768px) {
        left: size(1715.5);
        top: size(143.5);
      }
    }
  }

  .s4 {
    width: 100%;
    padding-bottom: size-m(68);
    @media screen and (min-width:768px) {
      padding: size(132) 0 size(114) 0;
    }

    .num {
      left: size-m(278);
      top: size-m(234);
      @media screen and (min-width:768px) {
        left: size(19);
        top: size(126);
      }
    }
  }

  .s5 {
    width: 100%;
    padding-bottom: size-m(68);
    @media screen and (min-width:768px) {
      padding: size(122) 0 size(96) 0;
    }

    .num {
      left: size-m(0);
      top: size-m(234);
      @media screen and (min-width:768px) {
        left: size(1574);
        top: size(93);
      }
    }

    .content {
      padding: 0 size(68) 0 size(48);
    }
  }
  
  .s6 {
    width: 100%;
    padding-bottom: size-m(68);
    @media screen and (min-width:768px) {
      padding: size(132) 0 size(456) 0;
    }

    .num {
      left: size-m(273);
      top: size-m(234);
      @media screen and (min-width:768px) {
        left: size(35);
        top: size(121);
      }
    }
  }
}
</style>

<script setup>
</script>
