<template>
  <section id="main">
    <div class="bg"></div>
    <div class="content">
      <div class="t1">國際級大師 世界級美感</div>
      <div class="t2">跨域整合  與世界對話的美學實踐</div>
    </div>
  </section>

  <div>
    <section id="architecture" class="team">
      <div class="slider">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="false"
          @slideChange="(swiper) => slideChange(swiper, 1)"
          @swiper="(swiper) => onSwiper(swiper, 1)"
        >
          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">建築規劃</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/1/1.jpg" />
                  <div class="photo-desc">張瑪龍 建築師</div>
                </div>
                <div class="content">
                  <div class="company">MAYU architects+</div>
                  <div class="name">張瑪龍陳玉霖聯合建築師事務所</div>
                  <div class="desc">重視建築實踐中的團隊合作能量與個別建築作品的獨特與藝術性，在建築實踐中揉和跨領域專業合作與實驗性創作啟發，同時關注都市規劃設計領域，張瑪龍建築師曾實際參與或主持高雄與台南多項都市景觀規劃，包括愛河綜合發展計畫、台南孔廟周邊都市更新等。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■2025大阪世界博覽會玉山館 ■高雄衛武營都會公園<br>
                    ■高雄海洋及流行音樂中心 ■台南市立圖書館總館<br>
                    ■嘉義故宮博物院南院新館 ■台南火車站新建工程
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/1/1.jpg" />
                <div class="photo-desc">張瑪龍 建築師</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">建築規劃</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/1/2.jpg" />
                  <div class="photo-desc">林澤森 建築師</div>
                </div>
                <div class="content">
                  <div class="company">CD HOUSE</div>
                  <div class="name">林澤森建築師事務所</div>
                  <div class="desc">林澤森建築師畢業於成功大學建築系碩士，以 CD HOUSE 揪團起厝為名，認為 Construction（營造）與 Design（設計）應完美融合，建築設計必須考慮施工性，而營造也必須有設計美感，兩相輝映才能充分體現建築的真實價值。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 高雄小城 ■ 台南煙波飯店 <br>
                    ■ 台南煙波PARK ■ 台南漾煙波
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/1/2.jpg" />
                <div class="photo-desc">林澤森 建築師</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">建築規劃</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/1/3.jpg" />
                  <div class="photo-desc">賈書恆 建築師</div>
                </div>
                <div class="content">
                  <div class="company">賈書恆建築師事務所</div>
                  <div class="name">賈書恆</div>
                  <div class="desc">賈書恆建築師事務所於台北、高雄、中壢均設有辦公室，為具備綜合性專長之建築事務所，曾榮獲 2009年、2011年金獅首獎及第三屆景觀設計評選大獎等殊榮；20 年來秉持高度創意、優良造型、完善機能等全方位理念，作品橫跨軍事營區、超高層建築、集合式住宅、都市更新等多樣面向。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 國城賦格 ■ 國城UFO<br>
                    ■ 高雄科技園區 ■ 義大天悅飯店
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/1/3.jpg" />
                <div class="photo-desc">賈書恆 建築師</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">建築規劃</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/1/4.jpg" />
                  <div class="photo-desc">陳俊廷 建築師</div>
                </div>
                <div class="content">
                  <div class="company">陳俊廷建築師事務所</div>
                  <div class="name">陳俊廷</div>
                  <div class="desc">賈書恆建築師事務所於台北、高雄、中壢均設有辦公室，為具備綜合性專長之建築事務所，曾榮獲 2009年、2011年金獅首獎及第三屆景觀設計評選大獎等殊榮；20 年來秉持高度創意、優良造型、完善機能等全方位理念，作品橫跨軍事營區、超高層建築、集合式住宅、都市更新等多樣面向。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 國城賦格 ■ 國城UFO<br>
                    ■ 高雄科技園區 ■ 義大天悅飯店
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/1/4.jpg" />
                <div class="photo-desc">陳俊廷 建築師</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">建築規劃</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/1/5.jpg" />
                  <div class="photo-desc">劉紹魁 總經理</div>
                </div>
                <div class="content">
                  <div class="company">科建聯合工程顧問</div>
                  <div class="name">劉紹魁 <span>總經理</span></div>
                  <div class="desc">科建聯合工程顧問成立於 1989 年，承攬國內多家知名建設公司業務，並與李祖源、李天鐸、郭旭原等建築師事務所有著深厚的合作關係；提供最新工法及價值工程等設計服務，並擁有如複合式二元建築結構等多項台灣結構設計專利。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 高雄海洋及流行音樂中心 ■ 台中NTC國家商貿中心<br>
                    ■ 台北藍海 ■ 台北豐盈海
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/1/5.jpg" />
                <div class="photo-desc">劉紹魁 <span>總經理</span></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="control">
        <div class="item" :class="{active: slider1CurrIdx === 0}" @click="slider1Ref.slideTo(0)">張瑪龍陳玉霖聯合建築師事務所</div>
        <div class="item" :class="{active: slider1CurrIdx === 1}" @click="slider1Ref.slideTo(1)">CD HOUSE 林澤森 建築師事務所</div>
        <div class="item" :class="{active: slider1CurrIdx === 2}" @click="slider1Ref.slideTo(2)">賈書恆 建築師事務所</div>
        <div class="item" :class="{active: slider1CurrIdx === 3}" @click="slider1Ref.slideTo(3)">陳俊廷 建築師事務所</div>
        <div class="item" :class="{active: slider1CurrIdx === 4}" @click="slider1Ref.slideTo(4)">科建聯合工程顧問</div>
      </div>
    </section>

    <section id="public" class="team">
      <div class="slider">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="false"
          @slideChange="(swiper) => slideChange(swiper, 2)"
          @swiper="(swiper) => onSwiper(swiper, 2)"
        >
          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">公設美學</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/2/1.jpg" />
                  <div class="photo-desc">芦沢啓治 建築師</div>
                </div>
                <div class="content">
                  <div class="company">Keiji Ashizawa Design</div>
                  <div class="name">芦沢啓治 建築設計事務所</div>
                  <div class="desc">芦沢啓治建跨足建築、室內、傢俱、產品四大領域，主張忠於本質的「誠實設計」，讓設計發揮其本質的價值，成為人們實現更理想生活的工具，先後成立 KEIJ IASHIZAWA DESIGN、石卷工房、與日本傢俱大廠KARIMOKU 推出全新品牌 Karimoku Case，從建築到產品，實踐他對使用者的細膩思考。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■東京Trunk Hotel yoyogi park ■上海Blue Bottle<br>
                    ■東京Bellustar Hotel Penthouse ■東京澀谷Blue Bottle<br>
                    ■名古屋Blue Bottle ■東京Azabu Hills Residence
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/2/1.jpg" />
                <div class="photo-desc">芦沢啓治 建築師</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">公設美學</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/2/2.jpg" />
                  <div class="photo-desc">林新峰 總監</div>
                </div>
                <div class="content">
                  <div class="company">擊壤設計</div>
                  <div class="name">林新峰總監</div>
                  <div class="desc">好的建築必須在精神向度上觸動人心，建構出具有場所精神的空間經驗，是實現建築精神最有力量的途徑。其建築與室內作品，源自對台灣城市空間的觀察，以「連續性」與「場所感」與都市空間積極對話，其作品涵蓋公共建築、商業餐飲空間、集合住宅與藝術地景等多個面向。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 嘉義市立美術館 ■ 國家圖書館南部分館暨聯合典藏中心<br>
                    ■ 台豐玉嘉會館高球俱樂部 ■ 高雄雋Gen
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/2/2.jpg" />
                <div class="photo-desc">林新峰 總監</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="control">
        <div class="item" :class="{active: slider2CurrIdx === 0}" @click="slider2Ref.slideTo(0)">Keiji Ashizawa Design芦沢啓治建築設計事務所</div>
        <div class="item" :class="{active: slider2CurrIdx === 1}" @click="slider2Ref.slideTo(1)">擊壤設計</div>
      </div>
    </section>

    <section id="view" class="team">
      <div class="slider">
        <swiper
          :modules="modules"
          :pagination="{
            clickable: true
          }"
          :autoplay="false"
          @slideChange="(swiper) => slideChange(swiper, 3)"
          @swiper="(swiper) => onSwiper(swiper, 3)"
        >
          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">景觀設計</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/3/1.jpg" />
                  <div class="photo-desc">橋內智也 景觀設計師</div>
                </div>
                <div class="content">
                  <div class="company">HLD 橋內庭園設計</div>
                  <div class="name">橋內智也</div>
                  <div class="desc">擁有號稱歐洲麻省理工的荷蘭 Delft University of Technology 取得城市設計系碩士學位，以及荷蘭公共工程制定總體景觀規劃之國際經驗，作品以特定場域、地形為導向、增強人類活動的設計手法為特色，跨越自然與城市環境，設計領域包括商業設施、度假設施、公共設施及私人住宅等景觀設計工作。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■上海Blue Bottle ■ 千葉縣立山花園<br>
                    ■輕井澤千瀧花園 ■ 群馬縣桐生市新川公園
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/3/1.jpg" />
                <div class="photo-desc">橋內智也 景觀設計師</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="control">
        <div class="item" :class="{active: slider3CurrIdx === 0}" @click="slider3Ref.slideTo(0)">HLD 橋內庭園設計</div>
      </div>
    </section>

    <section id="light" class="team">
      <div class="slider">
        <swiper
          :modules="modules"
          loop
          :pagination="{
            clickable: true
          }"
          :autoplay="false"
          @slideChange="(swiper) => slideChange(swiper, 4)"
          @swiper="(swiper) => onSwiper(swiper, 4)"
        >
          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">燈光設計</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/4/1.jpg" />
                  <div class="photo-desc">市川 善幾 燈光設計師</div>
                </div>
                <div class="content">
                  <div class="company">AURORA 照明設計</div>
                  <div class="name">市川善幾</div>
                  <div class="desc">市川善幾畢業於日本最早也最先進的設計學校-桑澤設計學院，深受包浩斯風格影響的他，重視的是渴望更接近有序的大自然所創造的美麗景色和現象，極簡的照明專注真正需要的光，而不是盲目照亮空間，目標是更邏輯與有機的照明設計，而非只依賴主觀意識。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■上海Blue Bottle ■日本兵庫縣Blue Bottle<br>
                    ■東京新宿9h Nine Hours ■東京Better Bodies Hi
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/4/1.jpg" />
                <div class="photo-desc">市川 善幾 燈光設計師</div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="flex">
              <div>
                <div class="team-title">燈光設計</div>
                <div class="photo mob">
                  <img src="@/assets/pinshi-team/4/2.jpg" />
                  <div class="photo-desc">陳怡彰燈光設計師</div>
                </div>
                <div class="content">
                  <div class="company">偶得設計</div>
                  <div class="name">陳怡彰</div>
                  <div class="desc">偶得設計陳怡彰主持設計畢業於紐約Parsons設計學院碩士，作品囊括美國、英國、義大利、台灣等各大獎項，陳怡彰認為，照明設計是利用光線的鋪排重新詮釋空間層次、材料紋理與設計細節，將美好帶入使用者的心之中，而住宅照明設計的核心在與周邊環境、住民的溫柔相處，同時表現出建築本身的自明性。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 泰安產險大樓 ■ 新竹市美術館<br>
                    ■ 台南歷史文化園區 孔廟周邊 ■ 台中花博竹跡
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <img src="@/assets/pinshi-team/4/2.jpg" />
                <div class="photo-desc">陳怡彰燈光設計師</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="control">
        <div class="item" :class="{active: slider4CurrIdx === 0}" @click="slider4Ref.slideTo(0)">空間景觀燈光／AURORA 照明設計</div>
        <div class="item" :class="{active: slider4CurrIdx === 1}" @click="slider4Ref.slideTo(1)">建築燈光／偶得設計</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

#page-pinshiTeam .swiper-pagination {
  bottom: auto;
  top: func.size-m(278 + 23);
  line-height: 1;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width:768px) {
    top: func.size(689 + 10);
    left: func.size(940);
    width: auto;
  }

  .swiper-pagination-bullet {
    width: func.size-m(43);
    height: func.size-m(7);
    opacity: 1;
    background: none;
    border: func.size-m(1) solid #fff;
    margin: 0 func.size-m(11) 0 0;
    border-radius: func.size-m(50);
    @media screen and (min-width:768px) {
      width: func.size(43);
      height: func.size(7);
      border-width: func.size(1);
      margin: 0 func.size(11) 0 0;
      border-radius: func.size(50);
    }

    &.swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}

#page-pinshiTeam .team:nth-child(even) .swiper-pagination {
  @media screen and (min-width:768px) {
    left: func.size(98);
  }
}
</style>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

.mob {
  display: block;
  @media screen and (min-width:768px) {
    display: none;
  }
}

.pc {
  display: none;
  @media screen and (min-width:768px) {
    display: block;
  }
}

#main {
  position: relative;

  .bg {
    display: block;
    width: 100%;
    height: func.size-m(392);
    background-image: url(@/assets/pinshi-team/main-m.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (min-width:768px) {
      height: func.size(915);
      background-image: url(@/assets/pinshi-team/main.jpg);
    }
  }

  .content {
    padding: func.size-m(36) 0 func.size-m(29) 0;
    margin: 0 func.size-m(48);
    border-bottom: func.size-m(1) solid #000;
    text-align: center;
    font-weight: 700;
    @media screen and (min-width:768px) {
      position: absolute;
      bottom: func.size(74);
      left: func.size(163);
      width: calc(100% - func.size(163 * 2));
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      color: #FFF;
      filter: drop-shadow(0px func.size(4) func.size(9) rgba(0, 0, 0, 0.55));
      padding: 0 0 func.size(50) 0;
      margin: 0;
      border-bottom: func.size(1) solid #fff;
    }

    .t1 {
      font-size: func.size-m(27);
      margin-bottom: func.size-m(47);
      @media screen and (min-width:768px) {
        font-size: func.size(78);
        margin-bottom: 0;
        line-height: 1;
      }
    }

    .t2 {
      font-size: func.size-m(14);
      @media screen and (min-width:768px) {
        font-size: func.size(35);
        line-height: 1;
      }
    }
  }
}

.team {
  padding: func.size-m(40) 0 0 0;
  font-size: func.size-m(12);
  line-height: func.size-m(20);
  border-bottom: func.size-m(1) solid #000;
  @media screen and (min-width:768px) {
    padding: func.size(97) 0 0 0;
    font-size: func.size(22);
    line-height: func.size(45);
    border-width: func.size(1);
  }

  .flex {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .team-title {
    text-align: center;
    font-size: func.size-m(19);
    font-weight: 700;
    margin-bottom: func.size-m(17);
    @media screen and (min-width:768px) {
      padding: 0 func.size(100) 0 func.size(163);
      font-size: func.size(23);
      margin-bottom: func.size(120);
      letter-spacing: .02em;
      text-align: left;
    }
  }

  .photo {
    position: relative;
    margin-bottom: func.size-m(22);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
      width: func.size(1047);
    }

    img {
      display: block;
      width: 100%;
      height: func.size-m(280);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    .photo-desc {
      position: absolute;
      top: func.size-m(14);
      left: func.size-m(30);
      color: #FFF;
      text-shadow: 0px func.size-m(4) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(12);
      font-weight: 700;
      letter-spacing: .05em;
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
  }

  .content {
    padding: 0 func.size-m(30);
    @media screen and (min-width:768px) {
      padding: 0 func.size(100) 0 func.size(163);
    }
  }

  .company {
    font-size: func.size-m(17);
    font-weight: 350;
    letter-spacing: .02em;
    margin-bottom: func.size-m(4);
    @media screen and (min-width:768px) {
      font-size: func.size(42);
      margin-bottom: func.size(11);
    }
  }

  .name {
    font-size: func.size-m(17);
    font-weight: 700;
    letter-spacing: .02em;
    margin-bottom: func.size-m(23);
    @media screen and (min-width:768px) {
      font-size: func.size(42);
      margin-bottom: func.size(111);
    }

    span {
      font-size: func.size-m(13);
      @media screen and (min-width:768px) {
        font-size: func.size(28);
      }
    }
  }

  .desc {
    margin-bottom: func.size-m(12);
    @media screen and (min-width:768px) {
      margin-bottom: func.size(17);
    }
  }

  .desc, .work {
    @media screen and (min-width:768px) {
      max-width: func.size(574);
    }
  }

  .control {
    width: calc(100% - func.size-m(60));
    border-top: func.size-m(1) solid #000;
    margin: func.size-m(38) auto 0 auto;
    padding: func.size-m(17) 0;
    @media screen and (min-width:768px) {
      width: calc(100% - func.size(164 * 2));
      border-width: func.size(1);
      margin: func.size(60) auto 0 auto;
      padding: func.size(47) 0;
      display: flex;
    }

    .item {
      font-size: func.size-m(14);
      font-weight: 350;
      letter-spacing: .02em;
      margin-bottom: func.size-m(15);
      cursor: pointer;
      @media screen and (min-width:768px) {
        font-size: func.size(23);
        margin-bottom: 0;
        margin-right: func.size(32);
        position: relative;

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: calc(func.size(-16) - 0.01em);
          transform: translate(0, -50%);
          width: func.size(1);
          height: func.size(26);
          background: #000;
        }
      }

      &:last-child {
        margin: 0;

        &:after {
          display: none;
        }
      }

      &.active {
        font-weight: 700;
      }
    }
  }
}

.team:nth-child(even) {
  @media screen and (min-width:768px) {
    .flex {
      flex-direction: row-reverse;
    }

    .team-title {
      text-align: right;
    }

    .team-title, .content {
      padding: 0 func.size(163) 0 func.size(100);
    }
  }
}

.team:nth-child(2) {
  .team-title {
    @media screen and (min-width:768px) {
      margin-bottom: func.size(83);
    }
  }
}
</style>

<script setup>
import { ref } from 'vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = ref([Autoplay, Pagination]);
const slider1CurrIdx = ref(0);
const slider1Ref = ref();
const slider2CurrIdx = ref(0);
const slider2Ref = ref();
const slider3CurrIdx = ref(0);
const slider3Ref = ref();
const slider4CurrIdx = ref(0);
const slider4Ref = ref();

const slideChange = (swiper, num) => {
  if (num === 1) {
    slider1CurrIdx.value = swiper.realIndex;
  } else if (num === 2) {
    slider2CurrIdx.value = swiper.realIndex;
  } else if (num === 3) {
    slider3CurrIdx.value = swiper.realIndex;
  } else if (num === 4) {
    slider4CurrIdx.value = swiper.realIndex;
  }
}

const onSwiper = (swiper, num) => {
  if (num === 1) {
    slider1Ref.value = swiper;
  } else if (num === 2) {
    slider2Ref.value = swiper;
  } else if (num === 3) {
    slider3Ref.value = swiper;
  } else if (num === 4) {
    slider4Ref.value = swiper;
  }
};
</script>