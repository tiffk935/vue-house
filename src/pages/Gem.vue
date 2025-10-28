<template>
    <img src="@/assets/pc.jpg" class="t0" />
  <section class="banner">
    <div class="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"></div>
    <div class="txt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"></div>
    <RouterLink class="onder-btn" to="/order">立即預約</RouterLink>
  </section>

  <section class="about">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>關於國城</h2>
    </div>
    <!-- Marquee /  -->
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">不只是住得好，更要活得講究</div>
      <div class="t2">做建築，要做到國際級；做美食，要拿到米其林</div>
      <div class="t3">｜<RouterLink to="/team">閱讀更多</RouterLink></div>
    </div>
  </section>

  <section class="work">
    <div class="container pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="pc" src="@/assets/home/work/pic.webp" />
      <img class="mob" src="@/assets/home/work/pic-m.jpg" />
      <h2>國城作品</h2>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">走在前，讓後面跟上來</div>
      <div class="t2">把最好的留在台灣</div>
      <div class="t3">｜<RouterLink to="/work">閱讀更多</RouterLink></div>
    </div>
  </section>

  <section class="area">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>平實特區</h2>
    </div>
    <div class="container pic">
      <div class="parallax"></div>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1"><span>平實公園特區，<br>台南最好的都在這裡。</span></div>
      <div class="t2">府城最好的人文居住環境在哪？非東區莫屬。<br class="mob">而台南東區裡最美好的未來，在平實。</div>
      <div class="t3">｜<RouterLink to="/pinshi">閱讀更多</RouterLink></div>
    </div>
  </section>

  <section class="team">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>寳實團隊</h2>
    </div>
    <div class="container pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="pc" src="@/assets/pinshi-team/home.webp" />
      <img class="mob" src="@/assets/pinshi-team/main-m.webp" />
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">國際級大師 世界級美感</div>
      <div class="t2">跨域整合  與世界對話的美學實踐</div>
      <div class="t3">｜<RouterLink to="/pinshi-team">閱讀更多</RouterLink></div>
    </div>
  </section>

  <section class="archi">
    <div class="container pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="pc" src="@/assets/pinshi-architecture/main.webp" />
      <img class="mob" src="@/assets/pinshi-architecture/1/1m.webp" />
      <div class="photo-desc">國城寳實 北向建築立面透視圖</div>
      <div class="photo-desc1">此為建物外觀3D效果參考示意圖，<br class="mob">周遭環境係電腦合成示意表現。</div>
      <h2>寳實建築</h2>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">國際建築語彙 <br class="mob">演繹優雅生活尺度</div>
      <div class="t2">讓空間為人而生  生活，共好即是更好</div>
      <div class="t3">｜<RouterLink to="/pinshi-architecture">閱讀更多</RouterLink></div>
    </div>
  </section>

  <section class="news">
    <div class="container">
      <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">最新消息</h2>
      <div class="type" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">最新消息</div>
      <div class="list">

        <article v-for="item in list" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" :key="item">
          <RouterLink :to="item.link">
            <div class="photo">
              <img :src="getImg(item.thumbnail)" />
            </div>
            <div class="post-title">{{ item.title }}</div>
            <div class="meta">
              <div class="date">{{ item.date }}</div>
              <div class="line"></div>
              <div class="more">READ MORE+</div>
            </div>
          </RouterLink>
        </article>

      </div>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t3">｜<RouterLink to="/news">閱讀更多</RouterLink></div>
    </div>
  </section>

  <section class="ad">
    <div class="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"></div>
    <div class="txt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"></div>
  </section>

  <section class="order">
    <div class="sec-title">預約表單</div>
    <Order />
  </section>

  <section class="information">
    <div class="container">
      <img class="logo mob" src="@/assets/logo.png" />
      <img class="logo pc" src="@/assets/logo2.png" />
      <div class="sec-title mob">建案資訊</div>
      <div>
        <div class="sec-title pc">建案資訊</div>
        <div class="flex">
          <div class="list">
            <div class="item"><span>投資興建</span> ｜ <span>國城建設股份有限公司</span></div>
            <div class="item"><span>營造工程</span> ｜ <span>盈舜營造股份有限公司</span></div>
            <div class="item"><span>建築代銷</span> ｜ <span>聯碩地產行銷團隊</span></div>
            <div class="item"><span>平面設計</span> ｜ <span>陳俊廷建築師事務所<br>林澤森建築師事務所<br>賈書恆建築師事務所</span> <span class="mark">＊按姓氏筆畫排列</span></div>
            <div class="item"><span>立面設計</span> ｜ <span>張瑪龍陳玉霖聯合建築師事務所</span></div>
            <div class="item"><span>公設設計</span> ｜ <span>芦沢啓治 建築師事務所</span></div>
            <div class="item"><span>景觀設計</span> ｜ <span>橋內庭園設計 橋内智也</span></div>
          </div>
          <div class="list">
            <div class="item"><span>燈光設計</span> ｜ <span>AURORA Inc 市川善幾<br>偶得設計 陳怡彰</span></div>
            <div class="item"><span>結構工程</span> ｜ <span>科建聯合工程顧問有限公司</span></div>
            <div class="item"><span>建照號碼</span> ｜ <span>（114）南工造字第00976號</span></div>
            <div class="item"><span>經 紀 人</span> ｜ <span>李聆榕 (107)南市字第00668號</span></div>
            <div class="item"><span>建案位置</span> ｜ <span>台南市東區平實段2、3、3-1等三筆地號</span></div>
            <div class="item"><span>接待中心</span> ｜ <span>台南市東區平實路／後甲一路口</span></div>
            <div class="item"><span>貴賓專線</span> ｜ <span>06 273-8888</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

.t0{position: absolute;top: 0;left: 0;width: 100%;pointer-events: none;z-index: 9;opacity: .0;}
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

h2 {
  font-size: func.size-m(17);
  line-height: func.size-m(19);
  border-top: func.size-m(1) solid #000;
  border-bottom: func.size-m(1) solid #000;
  padding: func.size-m(9) 0;
  @media screen and (min-width:768px) {
    font-size: func.size(40);
    line-height: func.size(48);
    border-top: func.size(1) solid #000;
    border-bottom: func.size(1) solid #000;
    padding: func.size(22) 0;
  }
}

.t1 {
  font-size: func.size-m(24);
  font-weight: 700;
  line-height: func.size-m(29);
  margin-bottom: func.size-m(19);
  @media screen and (min-width:768px) {
    font-size: func.size(78);
    line-height: func.size(113);
    margin-bottom: func.size(38);
  }
}

.t2 {
  font-size: func.size-m(12);
  line-height: func.size-m(14);
  margin-bottom: func.size-m(2);
  @media screen and (min-width:768px) {
    font-size: func.size(34);
    line-height: func.size(41);
    margin-bottom: 0;
    letter-spacing: .05em;
  }
}

.t3 {
  font-size: func.size-m(14);
  line-height: func.size-m(38);
  text-align: right;
  padding-bottom: func.size-m(9);
  border-bottom: func.size-m(1) solid #000;
  letter-spacing: .04em;
  @media screen and (min-width:768px) {
    font-size: func.size(37);
    line-height: func.size(44);
    text-align: right;
    padding-bottom: func.size(19);
    border-bottom: func.size(1) solid #000;
    letter-spacing: .12em;
    margin-top: -2.2vw;
  }
  
  a {
    color: inherit;
    text-decoration: none;
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

.banner {
  position: relative;
  width: 100%;
  height: func.size-m(667 - 74);
  background-image:url(@/assets/home/banner/bgm.jpg);
  background-size: cover;
  @media screen and (min-width:768px) {
    height: func.size(1080);
    background-image:url(@/assets/home/banner/bg.jpg);
  }
  
  .logo {
    position: absolute;
    top: func.size-m(37);
    left: 0;
    right: 0;
    margin: auto;
    width: func.size-m(200);
    height: func.size-m(293);
    background-image: url(@/assets/s1logo-m.png);
    @include bg-contain;
    @media screen and (min-width:768px) {
      top: func.size(255);
      width: func.size(500);
      height: func.size(335);
      background-image: url(@/assets/logo.svg);
    }
  }

  .txt {
    position: absolute;
    top: func.size-m(364);
    left: 0;
    right: 0;
    margin: auto;
    width: func.size-m(217);
    height: func.size-m(119);
    background-image: url(@/assets/home/banner/txt-m.svg);
    @include bg-contain;
    @media screen and (min-width:768px) {
      top: func.size(750);
      width: func.size(1090);
      height: func.size(200);
      background-image: url(@/assets/home/banner/txt.svg);
    }
  }

  .onder-btn {
    position: absolute;
    top: func.size-m(455);
    left: func.size-m(230);
    border: func.size-m(1) solid #219664;
    background: #219664;
    text-decoration: none;
    color: #fff;
    font-size: func.size-m(12);
    font-weight: 500;
    letter-spacing: .1em;
    text-indent: .1em;
    width: func.size-m(65);
    height: func.size-m(22);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    @media screen and (min-width:768px) {
      display: none;
      top: func.size(575);
      left: func.size(1513);
      border: func.size(1) solid #219664;
      font-size: func.size(24);
      width: func.size(175.05);
      height: func.size(55.31);
    }

    &:hover{
      background: none;
      color: #219664;
    }
  }
}

.about {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(98) 0;
  }

  .marquee-wrapper {
    margin: func.size-m(48) 0;
    @media screen and (min-width:768px) {
      margin: func.size(80) 0 func.size(59) 0;
    }
  }
}

.work {
  padding: 0 0 func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: 0 0 func.size(98) 0;
  }

  .pic {
    position: relative;
    margin: 0 0 func.size-m(29) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: 0 0 func.size(80) 0;
    }

    img {
      width: 100%;
    }

    h2 {
      position: absolute;
      top: 0;
      left: func.size-m(30);
      color: #fff;
      width: calc(100% - func.size-m(60));
      border-color: #fff;
      margin: func.size-m(25) 0 0 0;
      @media screen and (min-width:768px) {
        left: func.size(160);
        width: calc(100% - func.size(320));
        margin: func.size(76) 0 0 0;
      }
    }
  }
}

.area {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(98) 0;
  }

  .pic {
    margin: func.size-m(38) 0 func.size-m(29) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: func.size(67) 0 0 0;
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

  .t1 {
    @media screen and (min-width:768px) {
      margin-top: -7vw;
    }
  }

  .t2 {
    @media screen and (min-width:768px) {
      font-size: func.size(30);
      letter-spacing: 0;
    }
  }
}

.team {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(98) 0;
  }

  .pic {
    margin: func.size-m(36) 0 func.size-m(40) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: func.size(60) 0 func.size(33) 0;
      padding: 0 func.size(160);
    }

    img {
      width: 100%;
      height: func.size-m(262);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }
  }
}

.archi {
  position: relative;
  padding: 0 0 func.size-m(47) 0;
  @media screen and (min-width:768px) {
    padding: 0 0 func.size(98) 0;
  }

  .pic {
    margin: 0 0 func.size-m(27) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: 0 0 func.size(34) 0;
    }

    .photo-desc {
      position: absolute;
      bottom: func.size-m(13);
      right: func.size-m(10);
      color: #FFF;
      //text-shadow: 0px func.size-m(2) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(11);
      font-weight: 700;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        left: auto;
        bottom: func.size(58);
        right: func.size(151);
        text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(22);
        font-weight: 400;
        letter-spacing: .05em;
      }
    }
    .photo-desc1 {
      position: absolute;
      bottom: func.size-m(14);
      left: func.size-m(30);
      color: #FFF;
      //text-shadow: 0px func.size-m(2) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(9);
      font-weight: 500;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        right: auto;
        bottom: func.size(58);
        left: func.size(151);
        text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(22);
        font-weight: 400;
        letter-spacing: .05em;
      }
    }

    img {
      width: 100%;
      height: func.size-m(373);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    h2 {
      position: absolute;
      top: 0;
      left: func.size-m(30);
      color: #fff;
      width: calc(100% - func.size-m(60));
      border-color: #fff;
      margin: func.size-m(15) 0 0 0;
      @media screen and (min-width:768px) {
        left: func.size(160);
        width: calc(100% - func.size(320));
        margin: func.size(76) 0 0 0;
      }
    }
  }
}

.news {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(73) 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .type {
    text-align: center;
    font-size: func.size-m(16);
    font-weight: 700;
    margin: func.size-m(23) 0 func.size-m(27) 0;
    @media screen and (min-width:768px) {
      text-align: right;
      font-size: func.size(27);
      margin: func.size(102) 0 func.size(95) 0;
    }
  }

  .list {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      margin: 0 func.size(-52.5);
    }

    article {
      margin-bottom: func.size-m(34);
      @media screen and (min-width:768px) {
        width: 33.3333%;
        padding: 0 func.size(52.5);
        margin-bottom: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }

      .photo {
        width: 100%;
        height: 0;
        padding-top: 68.615%;
        position: relative;
        margin-bottom: func.size-m(7);
        @media screen and (min-width:768px) {
          margin-bottom: func.size(23);
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .post-title {
        font-size: func.size-m(18);
        font-weight: 500;
        line-height: func.size-m(26);
        letter-spacing: .01em;
        margin-bottom: func.size-m(5);
        @media screen and (min-width:768px) {
          font-size: func.size(27);
          line-height: func.size(45);
          margin-bottom: func.size(10);
        }
      }

      .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;

        .date {
          font-size: func.size-m(12);
          font-weight: 100;
          letter-spacing: .06em;
          @media screen and (min-width:768px) {
            font-size: func.size(14);
          }
        }

        .line {
          flex: 1;
          height: func.size-m(1);
          background: #000;
          margin: 0 func.size-m(10);
          @media screen and (min-width:768px) {
            height: func.size(1);
            margin: 0 func.size(20);
          }
        }

        .more {
          color: #898989;
          font-size: func.size-m(12);
          font-weight: 300;
          letter-spacing: .03em;
          @media screen and (min-width:768px) {
            font-size: func.size(12);
          }
        }
      }
    }
  }

  .t3 {
    margin-top: func.size-m(34);
    @media screen and (min-width:768px) {
      margin-top: func.size(95);
    }
  }
}

.ad {
  position: relative;
  width: 100%;
  height: func.size-m(667);
  background-image: url(@/assets/home/ad/bg-m.jpg);
  @include bg-contain;
  background-size: cover;
  @media screen and (min-width:768px) {
    height: func.size(1080);
    background-image: url(@/assets/home/ad/bg.jpg);
  }
  
  .logo {
    position: absolute;
    top: func.size-m(134);
    left: func.size-m(65);
    width: func.size-m(264);
    height: func.size-m(228);
    background-image: url(@/assets/logo-m.png);
    @include bg-contain;
    @media screen and (min-width:768px) {
      top: func.size(163);
      left: func.size(503);
      width: func.size(843);
      height: func.size(472);
      background-image: url(@/assets/logo.png);
    }
  }

  .txt {
    position: absolute;
    top: func.size-m(417);
    left: func.size-m(62);
    width: func.size-m(250);
    height: func.size-m(136);
    background-image: url(@/assets/home/ad/txt-m.svg);
    @include bg-contain;
    @media screen and (min-width:768px) {
      top: func.size(747);
      left: func.size(359);
      width: func.size(1201.56);
      height: func.size(183.42);
      background-image: url(@/assets/home/ad/txt.svg);
    }
  }
}

.order {
  padding: func.size-m(28) 0 func.size-m(57) 0;
  @media screen and (min-width:768px) {
    padding: func.size(100) 0 func.size(100) 0;
  }

  .sec-title {
    font-size: func.size-m(16);
    font-weight: 500;
    padding: 0 func.size-m(49);
    margin-bottom: func.size-m(43);
    @media screen and (min-width:768px) {
      font-size: func.size(35);
      padding: 0 func.size(304);
      margin-bottom: func.size(100);
    }
  }
}

.information {
  padding: func.size-m(31) 0 func.size-m(46) 0;
  @media screen and (min-width:768px) {
    padding: func.size(120) 0;
  }

  .container {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 func.size(193) 0 func.size(242);
    }
  }

  .sec-title {
    font-size: func.size-m(20);
    font-weight: 700;
    margin-bottom: func.size-m(32 - 13);
    @media screen and (min-width:768px) {
      font-size: func.size(48);
      margin-bottom: func.size(77 - 20);
    }
  }

  .logo {
    width: func.size-m(290);
    margin-bottom: func.size-m(23);
    @media screen and (min-width:768px) {
      width: func.size(326);
      margin-bottom: 0;
    }
  }

  .flex {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      width: func.size(953);
    }
  }

  .list {
    @media screen and (min-width:768px) {
      width: func.size(425);
    }

    .item {
      position: relative;
      display: flex;
      font-size: func.size-m(12);
      font-weight: 500;
      letter-spacing: .05em;
      padding: func.size-m(13) 0;
      border-bottom: func.size-m(1) solid #000;
      @media screen and (min-width:768px) {
        font-size: func.size(16);
        padding: func.size(20) 0;
        border-bottom: func.size(1) solid #000;


        span{
          display: inline;
        }
      }

      .mark{
          position: absolute;
          color: #999999 !important;
          font-size: func.size-m(10);
          bottom: func.size-m(15);
          right: func.size-m(0);

          @media screen and (min-width:768px) {
           font-size: func.size(12);
           bottom: func.size(25);
           right: func.size(10);
          }
        }
    }
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "@/components/Marquee.vue";
import Order from '@/components/Order.vue'
import news from '@/info/news';

const typeList = news.filter(item => item.type === '消息新聞');
const list = typeList.filter((item, idx) => idx < 3);
const images = import.meta.glob('../assets/news/**/*.*', { eager: true });
const getImg = path => images[path]?.default || '';

gsap.registerPlugin(ScrollTrigger);

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
</script>