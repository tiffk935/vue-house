.team<template>
  <section id="main">
    <div class="bg"></div>
    <div class="content">
      <div class="t1">國際級大師 世界級美感</div>
      <div class="t2">跨域整合  與世界對話的美學實踐</div>
    </div>
  </section>

  <div>
    <section id="architecture" class="team">
        <div class="team-title">建築規劃</div>

        <div class="person">
            <div class="flex">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/1.webp" /> <div class="photo-desc"></div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/2.webp" /> <div class="photo-desc">2025 大阪世博 Tech World 館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/3.webp" /> <div class="photo-desc">台南市立圖書館 總館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/4.webp" /> <div class="photo-desc">國立故宮博物院南部院區二館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/5.webp" /> <div class="photo-desc">工研院光復院區研發大樓</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/6.webp" /> <div class="photo-desc">台南火車站新建工程</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/7.webp" /> <div class="photo-desc">台南市東區 裕文圖書館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/8.webp" /> <div class="photo-desc">北港文化中心</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">MAYU architects+</div>
                  <div class="name">張瑪龍陳玉霖聯合建築師事務所</div>
                  <div class="desc">重視建築實踐中的團隊合作能量與個別建築作品的獨特與藝術性，在建築實踐中揉和跨領域專業合作與實驗性創作啟發，同時關注都市規劃設計領域，張瑪龍建築師曾實際參與或主持高雄與台南多項都市景觀規劃，包括愛河綜合發展計畫、台南孔廟周邊都市更新等。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 2025大阪世界博覽會玉山館　 ■ 台南市立圖書館總館<br>
                    ■ 嘉義故宮博物院南院新館　■ 台南火車站新建工程
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/1/1/1.webp" /> <div class="photo-desc"></div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/2.webp" /> <div class="photo-desc">2025 大阪世博 Tech World 館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/3.webp" /> <div class="photo-desc">台南市立圖書館 總館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/4.webp" /> <div class="photo-desc">國立故宮博物院南部院區二館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/5.webp" /> <div class="photo-desc">工研院光復院區研發大樓</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/6.webp" /> <div class="photo-desc">台南火車站新建工程</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/7.webp" /> <div class="photo-desc">台南市東區 裕文圖書館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/1/8.webp" /> <div class="photo-desc">北港文化中心</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

        <div class="person">
            <div class="flex left">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/1.webp" /> <div class="photo-desc">林澤森 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/2.webp" /> <div class="photo-desc">台南煙波大飯店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/3.webp" /> <div class="photo-desc">台南煙波大飯店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/4.webp" /> <div class="photo-desc">高雄小城全區規劃</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/5.webp" /> <div class="photo-desc">高雄小城</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">CD HOUSE</div>
                  <div class="name">林澤森建築師事務所</div>
                  <div class="desc">林澤森建築師畢業於成功大學建築系碩士，以 CD HOUSE 揪團起厝為名，認為 Construction（營造）與 Design（設計）應完美融合，建築設計必須考慮施工性，而營造也必須有設計美感，兩相輝映才能充分體現建築的真實價值。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 高雄小城　■ 台南煙波飯店
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/1/2/1.webp" /> <div class="photo-desc">林澤森 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/2.webp" /> <div class="photo-desc">台南煙波大飯店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/3.webp" /> <div class="photo-desc">台南煙波大飯店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/4.webp" /> <div class="photo-desc">高雄小城全區規劃</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/2/5.webp" /> <div class="photo-desc">高雄小城</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

        <div class="person">
            <div class="flex">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/1.webp" /> <div class="photo-desc">賈書恆 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/2.webp" /> <div class="photo-desc">國城UFO</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/3.webp" /> <div class="photo-desc">國城賦格</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/4.webp" /> <div class="photo-desc">國城賦格</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/5.webp" /> <div class="photo-desc">國城賦格</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">賈書恆建築師事務所</div>
                  <div class="name">賈書恆</div>
                  <div class="desc">賈書恆建築師事務所於台北、高雄、中壢均設有辦公室，為具備綜合性專長之建築事務所，曾榮獲 2009年、2011年金獅首獎及第三屆景觀設計評選大獎等殊榮；20 年來秉持高度創意、優良造型、完善機能等全方位理念，作品橫跨軍事營區、超高層建築、集合式住宅、都市更新等多樣面向。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 國城賦格　■ 國城UFO<br>
                    ■ 高雄軟體園區　■ 義大天悅飯店
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/1/3/1.webp" /> <div class="photo-desc">賈書恆 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/2.webp" /> <div class="photo-desc">國城UFO</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/3.webp" /> <div class="photo-desc">國城賦格</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/4.webp" /> <div class="photo-desc">國城賦格</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/3/5.webp" /> <div class="photo-desc">國城賦格</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>  

        <div class="person">
            <div class="flex left">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/1/4/1.webp" /> <div class="photo-desc">陳俊廷 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/4/2.webp" /> <div class="photo-desc">台南煙波PARK</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/4/3.webp" /> <div class="photo-desc">台南煙波四季</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/4/4.webp" /> <div class="photo-desc">宗大青田</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">陳俊廷建築師事務所</div>
                  <div class="name">陳俊廷</div>
                  <div class="desc">致力於發現土地與環境獨具的紋理，融入生活與想像的場景，如同矩陣間組織運用，讓人遊走於其中；交織人文與空間對白的詩情，填充建築介質，形成對話與形象、故事與畫面。建築作品多次囊括國內獎項，包含台灣建築獎、高雄園治獎、高雄綠建築大獎與國家建築金獅獎設計首獎。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 春福煙波四季　■ 宗大青田<br>
                    ■ 台南煙波PARK　■ 天步私人住宅
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/1/4/1.webp" /> <div class="photo-desc">陳俊廷 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/4/2.webp" /> <div class="photo-desc">台南煙波PARK</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/4/3.webp" /> <div class="photo-desc">台南煙波四季</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/4/4.webp" /> <div class="photo-desc">宗大青田</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

        <div class="person">
            <div class="flex">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/1/5/1.webp" /> <div class="photo-desc">劉紹魁 總經理</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/5/2.webp" /> <div class="photo-desc">高雄海洋及流行音樂中心</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/5/3.webp" /> <div class="photo-desc">鳳山都更好</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">科建聯合工程顧問</div>
                  <div class="name">劉紹魁 <span>總經理</span></div>
                  <div class="desc">科建聯合工程顧問成立於 1989 年，承攬國內多家知名建設公司業務，並與李祖源、李天鐸、郭旭原等建築師事務所有著深厚的合作關係；提供最新工法及價值工程等設計服務，並擁有如複合式二元建築結構等多項台灣結構設計專利。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 高雄海洋及流行音樂中心　■ 台中NTC國家商貿中心<br>
                    ■ 台北藍海　■ 台北豐盈海
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/1/5/1.webp" /> <div class="photo-desc">劉紹魁 總經理</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/5/2.webp" /> <div class="photo-desc">高雄海洋及流行音樂中心</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/1/5/3.webp" /> <div class="photo-desc">鳳山都更好</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

    </section>


    <section id="public" class="team">
        <div class="team-title">公設美學</div>

        <div class="person">
            <div class="flex">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/1.webp" /> <div class="photo-desc">芦沢啓治 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/2.webp" /> <div class="photo-desc">2023 BELLUSTAR Penthouse</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/3.webp" /> <div class="photo-desc">2023 TRUNK(HOTEL) YOYOGI PAR</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/4.webp" /> <div class="photo-desc">2023 House in Aoyama</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/5.webp" /> <div class="photo-desc">2023 Blue Bottle Coffee Qiantan Café</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/6.webp" /> <div class="photo-desc">2024 Blue Bottle Coffee Nagoya Sakae Cafe</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/7.webp" /> <div class="photo-desc">2022 Blue Bottle Coffee Jakc Cafe</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/8.webp" /> <div class="photo-desc">2025 Logy Taipei</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">Keiji Ashizawa Design</div>
                  <div class="name">芦沢啓治 建築設計事務所</div>
                  <div class="desc">芦沢啓治建跨足建築、室內、傢俱、產品四大領域，主張忠於本質的「誠實設計」，讓設計發揮其本質的價值，成為人們實現更理想生活的工具，先後成立 KEIJI ASHIZAWA、石卷工房、與日本傢俱大廠KARIMOKU 推出全新品牌 Karimoku Case，從建築到產品，實踐他對使用者的細膩思考。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 東京Trunk Hotel yoyogi park　■ 上海Blue Bottle<br>
                    ■ 東京Bellustar Hotel Penthouse　■ 東京澀谷Blue Bottle<br>
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/2/1/1.webp" /> <div class="photo-desc">芦沢啓治 建築師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/2.webp" /> <div class="photo-desc">2023 BELLUSTAR Penthouse</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/3.webp" /> <div class="photo-desc">2023 TRUNK(HOTEL) YOYOGI PAR</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/4.webp" /> <div class="photo-desc">2023 House in Aoyama</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/5.webp" /> <div class="photo-desc">2023 Blue Bottle Coffee Qiantan Café</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/6.webp" /> <div class="photo-desc">2024 Blue Bottle Coffee Nagoya Sakae Cafe</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/7.webp" /> <div class="photo-desc">2022 Blue Bottle Coffee Jakc Cafe</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/1/8.webp" /> <div class="photo-desc">2025 Logy Taipei</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

        <div class="person">
            <div class="flex left">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/1.webp" /> <div class="photo-desc">林新峰 總監</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/2.webp" /> <div class="photo-desc">嘉義市立美術館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/3.webp" /> <div class="photo-desc">GEN 雋 頂級粵菜餐廳</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/4.webp" /> <div class="photo-desc">SHO 承 日本料理餐廳</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/5.webp" /> <div class="photo-desc">Liberte 頂級法餐餐廳</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">擊壤設計</div>
                  <div class="name">林新峰總監</div>
                  <div class="desc">好的建築必須在精神向度上觸動人心，建構出具有場所精神的空間經驗，是實現建築精神最有力量的途徑。其建築與室內作品，源自對台灣城市空間的觀察，以「連續性」與「場所感」與都市空間積極對話，其作品涵蓋公共建築、商業餐飲空間、集合住宅與藝術地景等多個面向。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 嘉義市立美術館　■ 國家圖書館南部分館暨聯合典藏中心<br>
                    ■ SHO承 日本料理餐廳部　■ 高雄雋GEN<br>
                    ■ Liberté 法式餐廳
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/2/2/1.webp" /> <div class="photo-desc">林新峰 總監</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/2.webp" /> <div class="photo-desc">嘉義市立美術館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/3.webp" /> <div class="photo-desc">GEN 雋 頂級粵菜餐廳</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/4.webp" /> <div class="photo-desc">SHO 承 日本料理餐廳</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/2/2/5.webp" /> <div class="photo-desc">Liberte 頂級法餐餐廳</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
    </section>


    <section id="view" class="team">
        <div class="team-title">景觀設計</div>

        <div class="person">
            <div class="flex">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/1.webp" /> <div class="photo-desc">橋內智也 景觀設計師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/2.webp" /> <div class="photo-desc">2023 Blue Bottle Coffee Qiantan Café</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/3.webp" /> <div class="photo-desc">2023 Blue Bottle Coffee Qiantan Café</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/4.webp" /> <div class="photo-desc">群馬縣桐生市新川公園</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/5.webp" /> <div class="photo-desc">鎌倉山の庭</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">HLD 橋內庭園設計</div>
                  <div class="name">橋內智也</div>
                  <div class="desc">擁有號稱歐洲麻省理工的荷蘭 Delft University of Technology 取得城市設計系碩士學位，以及荷蘭公共工程制定總體景觀規劃之國際經驗，作品以特定場域、地形為導向、增強人類活動的設計手法為特色，跨越自然與城市環境，設計領域包括商業設施、度假設施、公共設施及私人住宅等景觀設計工作。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 上海Blue Bottle　■ 千葉縣立山花園<br>
                    ■ 輕井澤千瀧花園　■ 群馬縣桐生市新川公園
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/3/1/1.webp" /> <div class="photo-desc">橋內智也 景觀設計師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/2.webp" /> <div class="photo-desc">2023 Blue Bottle Coffee Qiantan Café</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/3.webp" /> <div class="photo-desc">2023 Blue Bottle Coffee Qiantan Café</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/4.webp" /> <div class="photo-desc">群馬縣桐生市新川公園</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/3/1/5.webp" /> <div class="photo-desc">鎌倉山の庭</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
    </section>


    <section id="light" class="team">
        <div class="team-title">燈光設計</div>

        <div class="person">
            <div class="flex">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/1.webp" /> <div class="photo-desc">市川 善幾 燈光設計師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/2.webp" /> <div class="photo-desc">AZABU HILLS RESIDENCE</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/3.webp" /> <div class="photo-desc">Blue Bottle 上海店 第二分店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/4.webp" /> <div class="photo-desc">Blue Bottle 阪急神戶店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/5.webp" /> <div class="photo-desc">Blue Bottle 上海 第五分店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/6.webp" /> <div class="photo-desc">TRUNK(HOTEL) YOYOGI PARK</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">AURORA 照明設計</div>
                  <div class="name">市川善幾</div>
                  <div class="desc">市川善幾畢業於日本最早也最先進的設計學校-桑澤設計學院，深受包浩斯風格影響的他，重視的是渴望更接近有序的大自然所創造的美麗景色和現象，極簡的照明專注真正需要的光，而不是盲目照亮空間，目標是更邏輯與有機的照明設計，而非只依賴主觀意識。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 名古屋Blue Bottle　■ 東京TRUNK(HOTEL) YOYOGI PARK<br>
                    ■ 上海 Blue Bottle　■ AZABU HILLS RESIDENCE
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/4/1/1.webp" /> <div class="photo-desc">市川 善幾 燈光設計師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/2.webp" /> <div class="photo-desc">AZABU HILLS RESIDENCE</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/3.webp" /> <div class="photo-desc">Blue Bottle 上海店 第二分店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/4.webp" /> <div class="photo-desc">Blue Bottle 阪急神戶店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/5.webp" /> <div class="photo-desc">Blue Bottle 上海 第五分店</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/1/6.webp" /> <div class="photo-desc">TRUNK(HOTEL) YOYOGI PARK</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

        <div class="person">
            <div class="flex left">
              <div>
                <div class="photo mob">
                  <swiper
                    :modules="modules"
                    loop
                    :pagination="{
                      clickable: true
                    }"
                    :autoplay="{
                      delay: 3000,
                      disableOnInteraction: false,
                    }"
                  >
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/1.webp" /> <div class="photo-desc">陳怡彰 燈光設計師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/2.webp" /> <div class="photo-desc">竹跡館｜2018台中花博</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/3.webp" /> <div class="photo-desc">竹跡館｜2018台中花博</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/4.webp" /> <div class="photo-desc">新竹美術館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/5.webp" /> <div class="photo-desc">新竹美術館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/6.webp" /> <div class="photo-desc">台南歷史文化園區-台南孔廟周邊</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/7.webp" /> <div class="photo-desc">台南歷史文化園區-台南孔廟周邊</div></swiper-slide>
                  </swiper>
                </div>
                <div class="content">
                  <div class="company">偶得設計</div>
                  <div class="name">陳怡彰</div>
                  <div class="desc">偶得設計陳怡彰主持設計畢業於紐約Parsons設計學院碩士，作品囊括美國、英國、義大利、台灣等各大獎項，陳怡彰認為，照明設計是利用光線的鋪排重新詮釋空間層次、材料紋理與設計細節，將美好帶入使用者的心之中，而住宅照明設計的核心在與周邊環境、住民的溫柔相處，同時表現出建築本身的自明性。</div>
                  <div class="work">
                    建築作品｜<br>
                    ■ 泰安產險大樓　■ 新竹市美術館<br> 
                    ■ 台南歷史文化園區 孔廟周邊　■ 台中花博竹跡
                  </div>
                </div>
              </div>
              <div class="photo pc">
                <swiper
                  :modules="modules"
                  loop
                  :pagination="{
                    clickable: true
                  }"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                >
                  <swiper-slide><img src="@/assets/pinshi-team/4/2/1.webp" /> <div class="photo-desc">陳怡彰 燈光設計師</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/2.webp" /> <div class="photo-desc">竹跡館｜2018台中花博</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/3.webp" /> <div class="photo-desc">竹跡館｜2018台中花博</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/4.webp" /> <div class="photo-desc">新竹美術館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/5.webp" /> <div class="photo-desc">新竹美術館</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/6.webp" /> <div class="photo-desc">台南歷史文化園區-台南孔廟周邊</div></swiper-slide>
                    <swiper-slide><img src="@/assets/pinshi-team/4/2/7.webp" /> <div class="photo-desc">台南歷史文化園區-台南孔廟周邊</div></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

    </section>


  </div>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

#page-pinshiTeam .swiper-pagination {
  bottom: func.size-m(11);
  line-height: 1;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width:768px) {
    bottom: func.size(60);
    left: func.size(68);
    width: auto;
  }

  .swiper-pagination-bullet {
    width: func.size-m(30);
    height: func.size-m(5);
    opacity: 1;
    background: none;
    border: func.size-m(1) solid #fff;
    margin: 0 func.size-m(11) 0 0;
    border-radius: func.size-m(50);
    @media screen and (min-width:768px) {
      width: func.size(30);
      height: func.size(5);
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

.v-enter-active,
.v-leave-active {
  transition: opacity .5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

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
    margin: 0 func.size-m(30);
    border-bottom: func.size-m(1) solid #000;
    text-align: center;
    font-weight: 700;
    @media screen and (min-width:768px) {
      position: absolute;
      bottom: func.size(74);
      left: func.size(140);
      width: calc(100% - func.size(140 * 2));
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
  padding: func.size-m(40) 0 func.size-m(0) 0;
  font-size: func.size-m(12);
  line-height: func.size-m(20);
  //border-bottom: func.size-m(1) solid #000;
  @media screen and (min-width:768px) {
    padding: func.size(100) 0 func.size(0) 0;
    font-size: func.size(22);
    line-height: func.size(45);
    //border-width: func.size(1);

    
  }

      .team-title{
        padding: func.size-m(10) 0 func.size-m(10) 0;
        margin: func.size-m(0) func.size-m(30) func.size-m(30);
        border-top:#000 1px solid;
        border-bottom:#000 1px solid;
        text-align: center;
        font-size: func.size-m(20);
        font-weight: 700;

        @media screen and (min-width:768px) {
          font-size: func.size(40);
          padding: func.size(30) 0 func.size(30) 0;
          margin: func.size(0) func.size(145) func.size(100) ;
          font-size: func.size(50);

        }

      }

      .person {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      padding: func.size-m(0) 0 func.size-m(60) 0;

      @media screen and (min-width:768px) {
      padding: func.size(0) 0 func.size(150) 0;  
      }
    }

  .flex {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .left{
    @media screen and (min-width:768px) {
    flex-direction: row-reverse;
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
      //text-shadow: 0px func.size-m(4) func.size-m(4) rgba(0, 0, 0, 0.55);
      font-family: "Noto Sans TC";
      font-size: func.size-m(12);
      font-weight: 400;
      letter-spacing: .05em;
      z-index: 1;
      @media screen and (min-width:768px) {
        top: auto;
        left: auto;
        bottom: func.size(40);
        right: func.size(151);
        //text-shadow: 0px func.size(4) func.size(4) rgba(0, 0, 0, 0.55);
        font-size: func.size(22);
        font-weight: 400;
        letter-spacing: .05em;
      }
    }
  }

  .content {
    padding: 0 func.size-m(28);
    width: 100%;
    @media screen and (min-width:768px) {
      padding: 0 func.size(100) 0 func.size(140);
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
    text-align: justify;
    margin-bottom: func.size-m(12);
    @media screen and (min-width:768px) {
      margin-bottom: func.size(17);
    }
  }

  .desc, .work {
    @media screen and (min-width:768px) {
      max-width: func.size(584);
    }
  }

  .work{
    white-space:nowrap;
  }

  .control {
    width: calc(100% - func.size-m(60));
    border-top: func.size-m(1) solid #000;
    margin: func.size-m(38) auto 0 auto;
    padding: func.size-m(17) 0;
    @media screen and (min-width:768px) {
      width: calc(100% - func.size(140 * 2));
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




</style>

<script setup>
import { ref } from 'vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = ref([Autoplay, Pagination]);
const team1Active = ref(1);
const team2Active = ref(1);
const team3Active = ref(1);
const team4Active = ref(1);
</script>