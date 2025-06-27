<template>
  <section class="area">
    <div class="container pic">
      <div class="parallax"></div>
    </div>
    <div class="container txt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1"><span>平實公園特區，<br>台南最好的都在這裡。</span></div>
      <div class="t2">要說府城最好的人文居住環境在哪？非東區莫屬。<br class="mob">而台南東區裡最美好的未來，在平實公園特區！</div>
    </div>
  </section>

  <section class="s1 tem-slider">
    <div class="slider">
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slideChange="s1OnSlideChange"
      >
        <swiper-slide><img src="@/assets/pinshi/s1/1.webp" /> <div class="photo-desc">台南科學園區</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s1/2.webp" /> <div class="photo-desc">台南科學園區</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s1/3.webp" /> <div class="photo-desc">台南科學園區</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s1/4.webp" /> <div class="photo-desc">沙崙智慧綠能園區</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s1/5.webp" /> <div class="photo-desc">沙崙智慧綠能園區</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s1/6.webp" /> <div class="photo-desc">沙崙智慧綠能園區</div></swiper-slide>
      </swiper>
      <div class="pagi">
        <div class="dot" :class="{active: num === s1SliderActiveIdx + 1}" v-for="num in Object.keys(s1Images).length"></div>
      </div>
    </div>
    <div class="tem-txt">
      <div class="t1">
        <div>台南雙核</div>
        工作在南科，生活在平實
      </div>
      <div class="t2">2023年，南科產值正式超越竹科，今日是台灣經濟發展引擎，明日未來也是；在南科展現前端科技工作，生活在東區最核心的平實公園特區，用台南最好的豐饒款待您與您的家人。</div>
    </div>
  </section>

  <section class="s2 tem-slider">
    <div class="slider">
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slideChange="s2OnSlideChange"
      >
        <swiper-slide><img src="@/assets/pinshi/s2/1.webp" /> <div class="photo-desc">平實公園</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s2/2.webp" /> <div class="photo-desc">平實公園</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s2/3.webp" /> <div class="photo-desc">平實公園</div></swiper-slide>
      </swiper>
      <div class="pagi">
        <div class="dot" :class="{active: num === s2SliderActiveIdx + 1}" v-for="num in Object.keys(s2Images).length"></div>
      </div>
    </div>
    <div class="tem-txt">
      <div class="t1">
        <div>平實特區</div>
        政府助益，韌性永續宜居
      </div>
      <div class="t2">平實公園特區歷經多年整合與公部門的全心全意，時至如今終於成型；在這裏，面向未來城市發展的法規與設施，讓平實公園特區成為結合綠能減碳、韌性防災的未來宜居都市。</div>
    </div>
  </section>

  <section class="s3 tem-1">
    <img class="style" src="@/assets/pinshi/s3.webp" />
    <div class="tem-txt">
      <div class="t1">
        <div>基地特性</div>
        平實最大<br>8600坪全街廓開發
      </div>
      <div class="t2">國城建設延伸高雄亞洲新灣區的開發經驗，與擘劃國際建築的心意，來到平實公園特區裡最大的土地，用整體開發、全面思考的眼光看待土地，讓8600坪基地綻放屬於台南的色彩。</div>
    </div>
  </section>



  <section class="s2 tem-slider">
    <div class="slider">
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slideChange="s2OnSlideChange"
      >
        <swiper-slide><img src="@/assets/pinshi/s4/1.webp" /> <div class="photo-desc">平實公園</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s4/2.webp" /> <div class="photo-desc">平實公園</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s4/3.webp" /> <div class="photo-desc">平實公園</div></swiper-slide>
      </swiper>
      <div class="pagi">
        <div class="dot" :class="{active: num === s2SliderActiveIdx + 1}" v-for="num in Object.keys(s2Images).length"></div>
      </div>
    </div>
    <div class="tem-txt">
      <div class="t1">
        <div>公園綠地</div>
        高綠覆七公頃<br>平實森林公園
      </div>
      <div class="t2">平實公園南北延伸近百米，分流商業與住宅區動線；園內保留平實營區原生樹種，都會廣場、綠色森林、鄰里綠廊、環境藝術、陽光草坪等五大主題，打造台南東區都市之肺。</div>
    </div>
  </section>


  <section class="s5 tem-1">
    <div class="img-group">
      <img class="style" src="@/assets/pinshi/s5.webp" />
    <div class="photo-desc1">十字軸線</div>
    </div>
    
    <div class="tem-txt">
      <div class="t1">
        <div>十字軸線</div>
        台南命脈<br>小東路與中華東路
      </div>
      <div class="t2">小東路串連台南火車站、成大校區、對接大灣交流道直上國道；中華東路與中華西路、中華南北構成台南外環道，由此串連台南舊城區各大生活圈，往來皆便捷。</div>
    </div>
  </section>



  <section class="s2 tem-slider">
    <div class="slider">
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slideChange="s2OnSlideChange"
      >
        <swiper-slide><img src="@/assets/pinshi/s6/1.webp" /> <div class="photo-desc">平實捷運轉運站 透視示意圖</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s6/2.webp" /> <div class="photo-desc">平實捷運轉運站 透視示意圖</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s6/3.webp" /> <div class="photo-desc">平實捷運轉運站 透視示意圖</div></swiper-slide>
      </swiper>
      <div class="pagi">
        <div class="dot" :class="{active: num === s2SliderActiveIdx + 1}" v-for="num in Object.keys(s2Images).length"></div>
      </div>
    </div>
    <div class="tem-txt">
      <div class="t1">
        <div>捷運轉運</div>
        平實轉運站<br>藍綠雙線預定
      </div>
      <div class="t2">約1.4公頃BOT平實森林轉運站於2023年動工，未來將集結市區客運、捷運、商場等功能；台南捷運藍線預計2026年動工，與綠線捷運交會平實轉運站，台南捷運未來即將成形。</div>
    </div>
  </section>




    <section class="s7 tem-slider">
    <div class="slider">
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slideChange="s2OnSlideChange"
      >
        <swiper-slide><img src="@/assets/pinshi/s7/1.webp" /> <div class="photo-desc">南紡購物中心</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s7/2.webp" /> <div class="photo-desc">南紡購物中心</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s7/3.webp" /> <div class="photo-desc">南紡購物中心</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s7/4.webp" /> <div class="photo-desc">南紡購物中心</div></swiper-slide>
      </swiper>
      <div class="pagi">
        <div class="dot" :class="{active: num === s2SliderActiveIdx + 1}" v-for="num in Object.keys(s2Images).length"></div>
      </div>
    </div>
    <div class="tem-txt">
      <div class="t1">
        <div>時尚購物</div>
        南紡時尚進行式，<br class="pc">國賓影城娛樂
      </div>
      <div class="t2">南紡購物中心一、二期商場面積達7.5萬坪，誠品生活、老爺行旅、保時捷概念店…演繹台南時尚最前沿，國際脈動零時差，與國賓影城、平實重劃商業區緊密相連。</div>
    </div>
  </section>


      <section class="s8 tem-slider">
    <div class="slider">
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slideChange="s2OnSlideChange"
      >
        <swiper-slide><img src="@/assets/pinshi/s8/1.webp" /> <div class="photo-desc">成功大學</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s8/2.webp" /> <div class="photo-desc">東光國小</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s8/3.webp" /> <div class="photo-desc">復興國中小</div></swiper-slide>
      </swiper>
      <div class="pagi">
        <div class="dot" :class="{active: num === s2SliderActiveIdx + 1}" v-for="num in Object.keys(s2Images).length"></div>
      </div>
    </div>
    <div class="tem-txt">
      <div class="t1">
        <div>優質學區</div>
        成大校區、東光國小、<br class="pc">復興國中小
      </div>
      <div class="t2">車程5分鐘抵達東光國小、8分鐘復興中小學，擁有台南最優質少年養成環境；鄰近台南文教核心成大、一中校區車程約10分鐘，鋪排孩子最好的教育環境，就在此地。</div>
    </div>
  </section>



  <section class="s9 tem-slider">
    <div class="slider">
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slideChange="s2OnSlideChange"
      >
        <swiper-slide><img src="@/assets/pinshi/s9/1.webp" /> <div class="photo-desc">成大醫院</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s9/2.webp" /> <div class="photo-desc">榮總台南分院</div></swiper-slide>
        <swiper-slide><img src="@/assets/pinshi/s9/3.webp" /> <div class="photo-desc">成大醫院</div></swiper-slide>
      </swiper>
      <div class="pagi">
        <div class="dot" :class="{active: num === s2SliderActiveIdx + 1}" v-for="num in Object.keys(s2Images).length"></div>
      </div>
    </div>
    <div class="tem-txt">
      <div class="t1">
        <div>醫療資源</div>
        榮總、奇美、成大醫院
      </div>
      <div class="t2">榮總台南分院就在身旁近近照護；台南唯二「醫學中心」等級，奇美醫院亦近在咫尺，國立成大醫院就在不遠處。台南密度最高的高端醫療院所，為您與家人的健康提供全面支援。</div>
    </div>
  </section>


</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

@mixin bg-contain {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  padding: 0 func.size-m(30);
  @media screen and (min-width:768px) {
    padding: 0 func.size(160);
  }
}

img {
  max-width: 100%;
}

.pc {
  display: none;
  @media screen and (min-width:768px) {
    display: block;
  }
}

.t1 {
  font-size: func.size-m(17);
  font-weight: 700;
  line-height: func.size-m(20);
  margin-bottom: func.size-m(15);
  @media screen and (min-width:768px) {
    font-size: func.size(47);
    line-height: func.size(56);
    margin-bottom: func.size(49);
  }

  div {
    font-size: func.size-m(14);
    line-height: func.size-m(17);
    @media screen and (min-width:768px) {
      font-size: func.size(38);
      line-height: func.size(46);
    }
  }
}

.t2 {
  font-size: func.size-m(12);
  line-height: func.size-m(20);
  text-align: justify;
  @media screen and (min-width:768px) {
    font-size: func.size(20);
    line-height: func.size(36);
    letter-spacing: .05em;
  }
}

.swiper, .swiper * {
  z-index: initial;
}

.tem-slider {
  padding: func.size-m(31) 0 func.size-m(58) 0;
  @media screen and (min-width:768px) {
    padding: func.size(97) func.size(170);
    display: flex;
    flex-direction: row-reverse;
    
  }

  .slider {
    width: 100%;
    height: func.size-m(228);
    position: relative;
    @media screen and (min-width:768px) {
      width: func.size(903);
      height: func.size(430);
    }

    .swiper {
      height: 100%;

      .swiper-slide {
        width: calc(100% - func.size-m(30));
        margin-right: func.size-m(10);
        @media screen and (min-width:768px) {
          width: func.size(651);
          margin-right: func.size(25);
        }
      }

      .photo-desc{
      position: absolute;
      top: func.size-m(14);
      left: func.size-m(20);
      color: #FFF;
      text-shadow: 0px func.size-m(2) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(12);
      font-weight: 700;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        left: auto;
        bottom: func.size(10);
        right: func.size(10);
        text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(15);
        font-weight: 400;
        letter-spacing: .05em;
      }
      }
    }
    

    img  {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .pagi {
      position: absolute;
      bottom: func.size-m(-28);
      right: func.size-m(46);
      display: flex;
      @media screen and (min-width:768px) {
        display: none;
      }

      .dot {
        width: func.size-m(7);
        height: func.size-m(7);
        background: transparent;
        margin: 0 func.size-m(3);
        border-radius: 50%;
        border: func.size-m(1) solid #1D9C67;

        &.active {
          background: #1D9C67;
        }
      }
    }
  }

  .tem-txt {
    width: calc(100% - func.size-m(30));
    padding: func.size-m(23) func.size-m(22) func.size-m(26) func.size-m(48);
    background: #fff;
    @media screen and (min-width:768px) {
      display: flex;
      width: calc(100% - func.size(903));
      margin: 0;
      padding: func.size-m(10) func.size-m(10);
      flex-direction: column;
      justify-content: center;
    }
  }

  .t1 {
    line-height: func.size-m(20);
    @media screen and (min-width:768px) {
      line-height: func.size(56);
    }

    div {
      margin-bottom: func.size-m(5);
      @media screen and (min-width:768px) {
        line-height: func.size(46);
        margin-bottom: func.size(13);
      }
    }
  }
}

.tem-1 {
  padding: func.size-m(31) 0 func.size-m(58) 0;
  @media screen and (min-width:768px) {
    padding: func.size(96) func.size(170) func.size(96) 0;
    display: flex;
  }

    .img-group{
    position: relative;

      .photo-desc1{
      position: absolute;
      top: func.size-m(14);
      left: func.size-m(20);
      color: #FFF;
      text-shadow: 0px func.size-m(2) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(12);
      font-weight: 700;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        left: auto;
        bottom: func.size(10);
        right: func.size(10);
        text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(15);
        font-weight: 400;
        letter-spacing: .05em;
      }
      }
  }

  img  {
    display: block;
    width: 100%;
    @media screen and (min-width:768px) {
      width: func.size(1053);
    }
  }

  .tem-txt {
    width: calc(100% - func.size-m(60));
    margin: 0 auto;
    padding: func.size-m(30) func.size-m(20) func.size-m(24) func.size-m(20);
    background: #fff;
    @media screen and (min-width:768px) {
      width: calc(100% - func.size(1053));
      margin: 0;
      padding: func.size(106) func.size(65) 0 func.size(65);
    }
  }

  .t1 {
    text-align: center;
    line-height: func.size-m(24);
    padding-bottom: func.size-m(28);
    border-bottom: func.size-m(1) solid #000;
    @media screen and (min-width:768px) {
      line-height: func.size(62);
      padding-bottom: func.size(114);
      border-bottom: func.size(1) solid #000;
    }

    div {
      margin-bottom: func.size-m(12);
      @media screen and (min-width:768px) {
        line-height: func.size(46);
        margin-bottom: func.size(69);
      }
    }
  }
}

.tem-2 {
  padding: func.size-m(31) 0 func.size-m(63) 0;
  @media screen and (min-width:768px) {
    padding: func.size(96) func.size(170);
    display: flex;
    flex-direction: row-reverse;
  }

  .img-group{
    position: relative;

      .photo-desc1{
      position: absolute;
      top: func.size-m(14);
      left: func.size-m(20);
      color: #FFF;
      text-shadow: 0px func.size-m(2) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(12);
      font-weight: 700;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        left: auto;
        bottom: func.size(10);
        right: func.size(10);
        text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(15);
        font-weight: 400;
        letter-spacing: .05em;
      }
      }
  }


  img  {
    display: block;
    width: calc(100% - func.size-m(30));
    margin: 0 auto 0 0;
    @media screen and (min-width:768px) {
      width: func.size(898);
      margin: 0;
    }
  }

  .tem-txt {
    width: calc(100% - func.size-m(30));
    padding: func.size-m(23) func.size-m(22) func.size-m(26) func.size-m(48);
    background: #fff;
    @media screen and (min-width:768px) {
      width: calc(100% - func.size(898));
      padding: func.size(137) func.size(37) 0 func.size(37);
    }

    
  }

  .t1 {
    line-height: func.size-m(20);
    @media screen and (min-width:768px) {
      line-height: func.size(56);
    }

    div {
      margin-bottom: func.size-m(5);
      @media screen and (min-width:768px) {
        line-height: func.size(46);
        margin-bottom: func.size(13);
      }
    }
  }

  .t2 {
    @media screen and (min-width:768px) {
      width: func.size(555);
    }
  }

  &.s6, &.s7 {

    .photo-desc1{
      position: absolute;
      top: func.size-m(14);
      right: func.size-m(20);
      left: auto;
      color: #FFF;
      text-shadow: 0px func.size-m(2) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(12);
      font-weight: 700;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        left: auto;
        bottom: func.size(10);
        right: func.size(10);
        text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(15);
        font-weight: 400;
        letter-spacing: .05em;
      }
      }

    img {
      margin: 0 0 0 auto;
      @media screen and (min-width:768px) {
        margin: 0;
      }
    }

    .tem-txt {
      margin: 0 0 0 auto;
      padding: func.size-m(23) func.size-m(35) func.size-m(26) func.size-m(35);
      @media screen and (min-width:768px) {
        margin: 0;
        padding: func.size(137) func.size(37) 0 func.size(37);
      }
    }
  }
}

.pc {
  display: none;
  @media screen and (min-width:768px) {
    display: block;
  }
}

.mob {
  display: block;
  @media screen and (min-width:768px) {
    display: none;
  }
}

.area {
  @media screen and (min-width:768px) {
    padding: func.size(142) 0 func.size(67) 0;
  }

  .pic {
    margin: 0 0 func.size-m(26) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: 0 0 0 0;
      padding: 0 func.size(160);
    }

    .parallax {
      width: 100%;
      height: func.size-m(273);
      background: #ddd;
      overflow: hidden;
      background-image: url(@/assets/home/area/pic.webp);
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: 0 80%;
      @media screen and (min-width:768px) {
        height: func.size(600);
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 58% 100%, 58% 72%, 0% 72%);
      }
    }
  }

  .txt {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .t1 {
    font-size: func.size-m(20);
    font-weight: 700;
    line-height: func.size-m(26);
    margin-bottom: func.size-m(25);
    @media screen and (min-width:768px) {
      font-size: func.size(78);
      line-height: func.size(94);
      margin-bottom: 0;
      margin-top: calc(-7vw - func.size(22));
    }
  }

  .t2 {
    padding-bottom: func.size-m(26);
    margin-bottom: 0;
    border-bottom: func.size-m(1) solid #000;
    @media screen and (min-width:768px) {
      font-size: func.size(30);
      line-height: func.size(42);
      letter-spacing: 0;
      width: func.size(666);
      margin-top: func.size(22);
      padding-bottom: 0;
      border: none;
    }
  }
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const modules = ref([Autoplay]);
const s1SliderActiveIdx = ref(0);
const s2SliderActiveIdx = ref(0);

gsap.registerPlugin(ScrollTrigger);

const s1Images = import.meta.glob('../assets/pinshi/s1/*.*', { eager: true });
const s2Images = import.meta.glob('../assets/pinshi/s2/*.*', { eager: true });

const getImg = (dir, path) => {
  if ( dir === 's1' ) return s1Images[path]?.default || '';
  else if ( dir === 's2' ) return s2Images[path]?.default || '';
  else return '';
}

onMounted(() => {
  setTimeout(() => {
    gsap.to('.area .parallax', {
      backgroundPositionY: '30%',
      scrollTrigger: {
        trigger: '.area .parallax',
        start: 'top bottom',
        scrub: 0.2,
        end: 'top top',
      }
    });
  }, 50);
});

const s1OnSlideChange = (swiper) => {
  s1SliderActiveIdx.value = swiper.realIndex;
};

const s2OnSlideChange = (swiper) => {
  s2SliderActiveIdx.value = swiper.realIndex;
};
</script>