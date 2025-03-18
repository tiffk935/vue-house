<template>
  <section class="banner">
    <img class="img mob" src="@/assets/vision/banner/img-m.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <img class="img pc" src="@/assets/vision/banner/img.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <img class="txt mob" src="@/assets/vision/banner/txt-m.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <div class="onder-btn" @click="scrollToEl('#order')">立即預約</div>
  </section>

  <section id="about">
    <h2>關於策展</h2>
    <div class="slider" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <swiper
        :spaceBetween="10"
        :modules="modules"
        loop
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @swiper="onSwiper"
      >
        <swiper-slide>
          <img src="@/assets/vision/about/1.webp" />
          <div>
            <div class="t1">
              <span>脈絡</span><br>
              平實重劃區 —— 留存與延續
            </div>
            <div class="t2">代謝  Metabolism</div>
            <div class="t3">讓舊有的美好，轉化成當代，<br>傳承到未來。</div>
            <div class="line"></div>
            <div class="t4">代謝｜保存與延續  <span style="color: #269161;">展區主題</span></div>
            <div class="t5 pc">
              ● 營區內原生老樹保留移植
              ● 工兵群營舍建築轉身文化資產 <br>
              ● 從軍事防衛到氣候防衛
              ● 日治競馬場與南紡後甲舊廠 
            </div>
            <div class="t5 mob">
              ●　營區內原生老樹保留移植 <br>
              ●　工兵群營舍建築轉身文化資產 <br>
              ●　從軍事防衛到氣候防衛 <br>
              ●　日治競馬場與南紡後甲舊廠 
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/vision/about/2.webp" />
          <div>
            <div class="t1">
              <span>新生</span><br>
              平實重劃區 —— 共創社會公共價值
            </div>
            <div class="t2">新生  Regeneration</div>
            <div class="t3">多樣性是偉大城市的基本價值。</div>
            <div class="line"></div>
            <div class="t4">架構｜共創社會公共價值  <span style="color: #269161;">展區主題</span></div>
            <div class="t5 pc">
              ● 什麼是「公辦」都市更新
              ● 城市設計創造生活願景 <br>
              ● TOD導向城市更新
              ● 府城的遠景
              ● 東區綠核心 <br>
              ● 點線面三維整合
              ● 成大文教生活圈 
            </div>
            <div class="t5 mob">
              ●　什麼是「公辦」都市更新 <br>
              ●　城市設計創造生活願景 <br>
              ●　TOD導向城市更新 <br>
              ●　府城的遠景 <br>
              ●　東區綠核心 <br>
              ●　點線面三維整合 <br>
              ●　成大文教生活圈 
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/vision/about/3.webp" />
          <div>
            <div class="t1">
              <span>集成</span><br>
              平實重劃區 —— 東台南新富聚落
            </div>
            <div class="t2">集成  Integration</div>
            <div class="t3">唯有城市由眾人創造，<br>城市才能滋養眾人。</div>
            <div class="line"></div>
            <div class="t4">願景｜東台南新富聚落  <span style="color: #269161;">展區主題</span></div>
            <div class="t5 pc">
              ● 從人居視角看都市複合機能
              ● 平實重劃區，堪稱集大成 <br>
              ● 平實森林轉運站與藍綠雙捷運預定
              ● 商業特區串連南紡未來開發 <br>
              ● 退縮開放謙讓，讓生活走進來
            </div>
            <div class="t5 mob">
              ●　從人居視角看都市複合機能 <br>
              ●　平實重劃區，堪稱集大成 <br>
              ●　平實森林轉運站與藍綠雙捷運預定 <br>
              ●　商業特區串連南紡未來開發 <br>
              ●　退縮開放謙讓，讓生活走進來
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="slider-btn-prev" @click="swiperRef.slidePrev()">瀏<br>覽<br>上<br>個<br>展<br>區</div>
    <div class="slider-btn-next" @click="swiperRef.slideNext()">瀏<br>覽<br>下<br>個<br>展<br>區</div>
  </section>

  <section id="preview">
    <h2>展覽預告</h2>
    <div class="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="mob" src="@/assets/vision/preview/pic-m.webp" />
      <img class="pc" src="@/assets/vision/preview/pic.webp" />
    </div>
  </section>

  <section id="info">
    <h2>展覽資訊</h2>
    <div class="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="mob" src="@/assets/vision/info/pic-m.webp" />
      <img class="pc" src="@/assets/vision/info/pic.webp" />
    </div>
    <div class="container">
      <div class="line"></div>
      <div class="info-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div>
          <div class="t1">平實城市願景館</div>
          <div class="t2">
            <span style="color: #269D45;">展館地址｜</span>台南市東區後甲二路／平實二街口<br>
            <span style="color: #269D45;">參觀時間｜</span>週一至週日 10:00 - 18:00（免費參觀）<br>
            <span style="color: #269D45;">聯絡電話｜</span>06-273-8888
          </div>
        </div>
        <div class="info-btns">
          <a target="_blank" :href="'tel:' + info.phone"><img src="@/assets/icon-phone.svg" /></a>
          <a target="_blank" :href="info.fbMessage"><img src="@/assets/icon-messenger.svg" /></a>
          <a target="_blank" :href="info.fbLink"><img src="@/assets/icon-fb.svg" /></a>
          <!--a target="_blank" :href="info.igLink"><img src="@/assets/icon-ig.svg" /></a-->
          <a target="_blank" :href="info.lineLink"><img src="@/assets/icon-line.svg" /></a>
        </div>
      </div>
    </div>
  </section>

  <div id="order">
    <h2>預約表單</h2>

    <!-- Form -->
    <div class="container">
      <div class="form">

        <div class="form-inner">
          <div>
            <div class="input-group">
              <span>姓　　名</span>
              <input type="text" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" />
            </div>
            <div class="input-group">
              <span>連絡電話</span>
              <input type="text" :value="formData.phone"
                @input="(event) => (formData.phone = event.target.value)" />
            </div>
            <div class="input-group">
              <span>電子信箱</span>
              <input type="text" :value="formData.email"
                @input="(event) => (formData.email = event.target.value)" />
            </div>
          </div>

          <div>
            <div class="input-group">
              <span>參觀人數</span>
              <input type="text" :value="formData.people"
                @input="(event) => (formData.people = event.target.value)" />
            </div>
            <div class="input-group">
              <span>登錄方案</span>
              <div class="radios">
                <div class="pretty p-default p-round">
                  <input 
                    type="radio" 
                    name="radio1" 
                    :checked="formData.type === '展覽參觀'"
                    value="展覽參觀"
                    @input="(event) => (formData.type = event.target.value)" />
                  <div class="state">
                    <label>展覽參觀</label>
                  </div>
                </div>
                <div class="pretty p-default p-round">
                  <input 
                    type="radio" 
                    name="radio1"
                    :checked="formData.type === '平實預推案'"
                    value="平實預推案"
                    @input="(event) => (formData.type = event.target.value)" />
                  <div class="state">
                    <label>平實預推案</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="input-group">
          <span>備　　註</span>
          <input type="text" :value="formData.msg"
            @input="(event) => (formData.msg = event.target.value)" />
        </div>
      </div>

      <div class="others">
        <div class="policy-recaptcha">
          <!-- Policy -->
          <div class="control">
            <div class="pretty p-default p-round">
              <input id="privacy-checkbox" type="checkbox" v-model="formData.policyChecked" />
              <div class="state">
                <label for="privacy-checkbox">我同意使用上方提供的資訊與我聯繫，詳情請參閱<span @click="open">隱私權聲明</span>。</label>
              </div>
            </div>
            <ModalsContainer />
          </div>

          <!-- Recaptcha -->
          <vue-recaptcha
            class="recaptcha"
            ref="recaptcha"
            :sitekey="info.recaptcha_site_key_v2"
            @verify="onRecaptchaVerify"
            @expired="onRecaptchaUnVerify" />
        </div>

        <!-- Send -->
        <div class="send" @click="send">
          {{ sending? '發送中..': '立即預約' }}
        </div>
      </div>
    </div>

    <div class="map">
      <iframe :src="info.googleSrc" frameborder="0"></iframe>
    </div>

    <div class="location">
      <div class="container">
        <div class="addr">
          平實願景館 地址｜<br>
          {{ info.address }}
        </div>
        <a class="navigation" target="_blank" :href="info.googleLink">立即導航</a>
      </div>
    </div>
  </div>
</template>

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

.container {
  padding: 0 func.size-m(49);
  @media screen and (min-width:768px) {
    padding: 0 func.size(299);
  }
}

h2 {
  font-size: func.size-m(16);
  font-weight: 500;
  padding: 0 func.size-m(49);
  margin-bottom: func.size-m(20);
  @media screen and (min-width:768px) {
    font-size: func.size(37);
    padding: 0 func.size(174);
    margin-bottom: func.size(53);
  }
}

.banner {
  position: relative;
  width: 100%;
  height: func.size-m(667);
  @media screen and (min-width:768px) {
    height: func.size(1080);
  }

  .img {
    position: absolute;
    top: func.size-m(135);
    left: func.size-m(92);
    width: func.size-m(189);
    @media screen and (min-width:768px) {
      top: func.size(411);
      left: func.size(177);
      width: func.size(1566);
    }
  }

  .txt {
    position: absolute;
    top: func.size-m(480);
    left: func.size-m(57);
    width: func.size-m(262);
  }

  .onder-btn {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      top: func.size(670 + 124);
      left: func.size(1490);
      border: func.size(5) solid #219664;
      background: #fff;
      text-decoration: none;
      color: #000;
      font-size: func.size(23);
      letter-spacing: .18em;
      width: func.size(253);
      height: func.size(50);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    &:hover{
     background: #219664;
    color: #fff;
    transition:.3s;
    }
  }
}

#about {
  position: relative;
  padding: func.size-m(30) 0;
  @media screen and (min-width:768px) {
    padding: func.size(65) 0 func.size(153) 0;
  }

  .slider {
    width: func.size-m(276);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: 100%;
    }

    .swiper-slide {
      @media screen and (min-width:768px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
      }

      & > div {
        @media screen and (min-width:768px) {
          padding-left: func.size(174);
        }
      }

      img {
        display: block;
        width: 100%;
        height: func.size-m(284);
        margin-bottom: func.size-m(15);
        object-fit: cover;
        @media screen and (min-width:768px) {
          width: func.size(924);
          height: func.size(750);
          margin-bottom: 0;
        }
      }

      .t1 {
        color: #269161;
        font-size: func.size-m(14);
        font-weight: 500;
        line-height: 129.2%;
        margin-bottom: func.size-m(22);
        @media screen and (min-width:768px) {
          font-size: func.size(39);
          line-height: 133.2%;
          margin-bottom: func.size(96);
        }

        span {
          font-size: func.size-m(12);
          @media screen and (min-width:768px) {
            font-size: func.size(30);
          }
        }
      }

      .t2 {
        color: #269161;
        font-size: func.size-m(14);
        font-weight: 500;
        line-height: 129.2%;
        margin-bottom: func.size-m(3);
        @media screen and (min-width:768px) {
          font-size: func.size(39);
          line-height: 133.2%;
        }
      }

      .t3 {
        font-size: func.size-m(16);
        font-weight: 500;
        line-height: 129.2%;
        margin-bottom: func.size-m(17);
        @media screen and (min-width:768px) {
          font-size: func.size(48);
          line-height: 133.2%;
          margin-bottom: func.size(45);
        }
      }

      .line {
        width: 100%;
        height: func.size-m(3);
        background: #269161;
        margin-bottom: func.size-m(39);
        @media screen and (min-width:768px) {
          width: func.size(597);
          height: func.size(3);
          margin-bottom: func.size(206);
        }
      }

      .t4 {
        font-size: func.size-m(12);
        font-weight: 500;
        line-height: 129.2%;
        margin-bottom: func.size-m(7);
        @media screen and (min-width:768px) {
          font-size: func.size(24);
          line-height: 133.2%;
          margin-bottom: func.size(17);
        }
      }

      .t5 {
        font-size: func.size-m(12);
        font-weight: 500;
        line-height: 149.2%;
        @media screen and (min-width:768px) {
          font-size: func.size(20);
          line-height: func.size(34);
          letter-spacing: .05em;
        }
      }
    }
  }

  .slider-btn-prev, .slider-btn-next {
    color: #269161;
    font-size: func.size-m(14);
    font-weight: 500;
    line-height: 111.2%;
    position: absolute;
    top: func.size-m(139);
    background-size: func.size-m(13) auto;
    background-position: top center;
    background-repeat: no-repeat;
    padding-top: func.size-m(50);
    cursor: pointer;
    z-index: 1;
    @media screen and (min-width:768px) {
      font-size: func.size(25);
      line-height: func.size(44);
      top: auto;
      bottom: func.size(139);
      background-size: func.size(24) auto;
      padding-top: 0;
    }
  }

  .slider-btn-prev {
    background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.28408 12.9454L12.9463 1.2832L11.6632 9.37871e-05L0.000975074 11.6623L1.28408 12.9454Z" fill="%23269161"/><path d="M-9.70249e-05 11.6706L11.6621 23.3328L12.9452 22.0497L1.28301 10.3875L-9.70249e-05 11.6706Z" fill="%23269161"/></svg>');
    left: func.size-m(24);
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .slider-btn-next {
    background-image: url('data:image/svg+xml,<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6622 10.3874L0 22.0496L1.28311 23.3327L12.9453 11.6705L11.6622 10.3874Z" fill="%23269161"/><path d="M12.9464 11.6622L1.28418 0L0.00107036 1.28311L11.6633 12.9453L12.9464 11.6622Z" fill="%23269161"/></svg>');
    right: func.size-m(24);
    @media screen and (min-width:768px) {
      padding-right: func.size(45);
      background-position: top right;

      br {
        display: none;
      }
    }
  }
}

#preview {
  padding: func.size-m(30) 0;
  @media screen and (min-width:768px) {
    padding: func.size(65) 0 func.size(163) 0;
  }

  .pic {
    padding: 0 func.size-m(49);
    @media screen and (min-width:768px) {
      padding: 0 func.size(175);
    }

    img {
      width: 100%;
    }
  }
}

#info {
  padding: func.size-m(30) 0 func.size-m(0) 0;
  @media screen and (min-width:768px) {
    padding: func.size(65) 0 func.size(0) 0;
  }

  .pic {
    padding: 0 func.size-m(83);
    margin-bottom: func.size-m(43);
    @media screen and (min-width:768px) {
      padding: 0 func.size(299);
    }

    img {
      width: 100%;
    }
  }

  .line {
    width: 100%;
    height: func.size-m(1);
    background: #000;
    margin-bottom: func.size-m(21);
    @media screen and (min-width:768px) {
      height: func.size(1);
      margin-bottom: func.size(96);
    }
  }

  .info-wrapper {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .t1 {
    font-size: func.size-m(14);
    font-weight: 700;
    line-height: 129.2%;
    margin-bottom: func.size-m(12);
    @media screen and (min-width:768px) {
      font-size: func.size(29);
      line-height: 203.2%;
      margin-bottom: 0;
    }
  }

  .t2 {
    font-size: func.size-m(12);
    font-weight: 500;
    line-height: 187.2%;
    margin-bottom: func.size-m(26);
    @media screen and (min-width:768px) {
      font-size: func.size(29);
      line-height: 203.2%;
      margin-bottom: 0;
    }
  }

  .info-btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      //width: func.size(570);
      width: func.size(470);
    }

    a {
      width: func.size-m(39);
      height: func.size-m(39);
      background: #E8E8E8;
      border: 1px solid #21966300;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (min-width:768px) {
        width: func.size(80);
        height: func.size(80);
      }

      &:hover{
        border: 1px solid #219664;
        transition:.3s;
      }

    }

    img {
      width: auto;
      height: func.size-m(20);
      display: block;
      filter: invert(41%) sepia(89%) saturate(388%) hue-rotate(83deg) brightness(100%) contrast(93%);
      @media screen and (min-width:768px) {
        height: func.size(42);
      }
    }
  }
}

#order {
  padding: func.size-m(30 + 30) 0 func.size-m(127) 0;
  @media screen and (min-width:768px) {
    padding: func.size(65 + 74) 0 func.size(197) 0;
  }

  h2 {
    @media screen and (min-width:768px) {
      margin-bottom: func.size(118);
    }
  }

  .container {
    @media screen and (min-width:768px) {
      padding: 0 func.size(304);
    }
  }

  .form {

    .form-inner {
      @media screen and (min-width:768px) {
        display: flex;
        justify-content: space-between;

        & > div {
          width: func.size(612);
        }
      }
    }


    .input-group {
      display: block;
      width: 100%;
      margin-bottom: func.size-m(20);
      display: flex;
      align-items: center;
      border-bottom: func.size-m(1) solid #000;
      @media screen and (min-width:768px) {
        margin-bottom: func.size(49);
        border-bottom: func.size(1) solid #000;
      }
      
      span {
        display: block;
        width: func.size-m(62);
        padding-right: func.size-m(13);
        margin-bottom: func.size-m(4);
        margin-right: func.size-m(13);
        border-right: func.size-m(1) solid #000;
        font-size: func.size-m(12);
        line-height: func.size-m(14);
        font-weight: 500;
        letter-spacing: .07em;
        white-space: nowrap;
        @media screen and (min-width:768px) {
          width: func.size(125);
          padding-right: func.size(22);
          margin-bottom: func.size(22);
          margin-right: func.size(22);
          border-right: func.size(1) solid #000;
          font-size: func.size(25);
          line-height: func.size(25);
        }
      }

      input[type=text], select {
        appearance: none;
        display: block;
        width: 100%;
        font-size: 16px;
        border: none;
        background: none;
        padding: func.size-m(4) 0;
        margin-bottom: func.size-m(4);
        @media screen and (min-width:768px) {
          padding: 0;
          margin-bottom: func.size(22);
        }

        &:focus {
          outline: none;
        }
      }

      .radios {
        width: 100%;
        padding: func.size-m(4) 0;
        margin-bottom: func.size-m(4);
        display: flex;
        @media screen and (min-width:768px) {
          padding: 0;
          justify-content: flex-end;
        }

        .pretty {
          margin-right: func.size-m(23);
          @media screen and (min-width:768px) {
            margin-right: func.size(61);
          }
          
          &:last-child {
            margin-right: 0;
          }
        }

        .pretty .state label {
          min-width: unset;
          position: relative;
          text-indent: func.size-m(18);
          font-size: func.size-m(12);
          line-height: func.size-m(12);
          display: block;
          font-weight: 500;
          letter-spacing: .07em;
          @media screen and (min-width:768px) {
            text-indent: func.size(49);
            font-size: func.size(25);
            line-height: func.size(25);
          }

          &:before {
            width: func.size-m(12);
            height: func.size-m(12);
            border-color: #000;
            top: 0;
            @media screen and (min-width:768px) {
              width: func.size(25);
              height: func.size(25);
            }
          }

          &:after {
            width: func.size-m(8);
            height: func.size-m(8);
            transform: none;
            margin: func.size-m(2);
            top: 0;
            @media screen and (min-width:768px) {
              width: func.size(17);
              height: func.size(17);
              margin: func.size(4);
            }
          }
        }

        .pretty.p-default input:checked~.state label:after {
          background: #000 !important;
        }
      }
    }
  }

  .others {
    @media screen and (min-width:768px) {
      margin-bottom: func.size(260);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .policy-recaptcha {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }

  .control {
    margin-bottom: func.size-m(11);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
    }

    .pretty input {
      width: func.size-m(12);
      height: func.size-m(12);
      @media screen and (min-width:768px) {
        width: func.size(25);
        height: func.size(25);
      }
    }

    .pretty .state label {
      white-space: initial;
      padding-left: func.size-m(20);
      text-indent: 0;
      font-size: func.size-m(12);
      line-height: func.size-m(14);
      font-weight: 500;
      letter-spacing: .05em;
      @media screen and (min-width:768px) {
        padding-left: func.size(51);
        font-size: func.size(25);
        line-height: func.size(25);
      }

      &:after, &:before {
        top: 50%;
        transform: translate(0, -50%);
        width: func.size-m(12);
        height: func.size-m(12);
        @media screen and (min-width:768px) {
          width: func.size(25);
          height: func.size(25);
        }
      }

      &:before {
        border-color: #000;
      }

      &:after {
        transform: translate(0, -50%) scale(.6666);
      }
    }

    .pretty.p-default input:checked~.state label:after {
      background-color: #000 !important;
    }

    label span {
      cursor: pointer;

      &:hover {
        color: #6b6b6b;
      }
    }
  }

  .recaptcha {
    display: flex;
    justify-content: center;
    margin: 0 func.size-m(-49) func.size-m(20) func.size-m(-49);
    @media screen and (min-width:768px) {
      justify-content: flex-start;
      margin: 0 0 func.size(44) 0;
    }
  }

  .send {
    width: 100%;
    border: func.size-m(3) solid #299644;
    text-align: center;
    padding: func.size-m(19) 0;
    color: #299644;
    font-size: func.size-m(18);
    font-weight: 500;
    letter-spacing: .23em;
    cursor: pointer;
    transition: all .2s;
    margin-bottom: func.size-m(65);
    @media screen and (min-width:768px) {
      width: func.size(328);
      border: func.size(3) solid #299644;
      padding: func.size(20) 0;
      font-size: func.size(35);
      margin: 0;
    }

    &:hover {
      background: #299644;
      color: #fff;
    }
  }

  .map {
    width: 100%;
    height: func.size-m(230);
    background: #ddd;
    margin-bottom: func.size-m(21);
    @media screen and (min-width:768px) {
      width: func.size(1311);
      height: func.size(529);
      margin: 0 auto func.size(35) auto;
    }

    iframe {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .location {

    .container {
      @media screen and (min-width:768px) {
        padding: 0;
        display: flex;
        width: func.size(1311);
        margin: 0 auto;
      }
    }

    .addr {
      width: 100%;
      font-size: func.size-m(14);
      font-weight: 500;
      line-height: func.size-m(21);
      letter-spacing: .05em;
      padding: func.size-m(10) func.size-m(20);
      border: func.size-m(1) solid #299644;
      @media screen and (min-width:768px) {
        flex: 1;
        font-size: func.size(29);
        line-height: func.size(42);
        padding: func.size(27) func.size(56);
        border: func.size(1) solid #299644;

        br {
          display: none;
        }
      }
    }

    .navigation {
      display: block;
      width: 100%;
      font-size: func.size-m(15);
      font-weight: 500;
      line-height: func.size-m(21);
      letter-spacing: .23em;
      text-align: center;
      padding: func.size-m(13) 0;
      border: func.size-m(1) solid #299644;
      background: #299644;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      @media screen and (min-width:768px) {
        width: func.size(266);
        font-size: func.size(35);
        line-height: func.size(42);
        padding: func.size(27) 0;
        border: func.size(1) solid #299644;
      }
      &:hover{
       background: #fff;
      color: #299644; 
      transition:.3s;
    }
    }
  }
}
</style>

<script setup>
import 'pretty-checkbox/dist/pretty-checkbox.min.css';
import info from '@/info';
import { ref, reactive } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';
import { useToast } from 'vue-toastification';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ModalsContainer, useModal } from 'vue-final-modal';
import 'vue-final-modal/style.css';
import Privacy from '@/components/Privacy.vue';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const modules = ref([]);
const swiperRef = ref();

function scrollToEl(el) {
  gsap.to(window, { duration: 1, scrollTo: { y: el, offsetY: 30 } });
}

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const { open, close } = useModal({
  component: Privacy,
  attrs: {
    onConfirm() {
      close();
    },
  }
});

const toast = useToast()
const sending = ref(false)
const formData = reactive({
  name: "",
  phone: "",
  email: "",
  people: "",
  type: "展覽參觀",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

//非必填
const bypass = ['type', 'msg']

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "信箱", //email
  "參觀人數", //people
  "登錄方案", //type
  "備註訊息", //msg
  "個資告知事項聲明", //policyChecked
  "機器人驗證", //r_verify
])

const onRecaptchaVerify = () => {
  formData.r_verify = true
}
const onRecaptchaUnVerify = () => {
  formData.r_verify = false
}

const send = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmContent = urlParams.get("utm_content");
  const utmCampaign = urlParams.get("utm_campaign");
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

  const presend = new FormData();
  let pass = true
  let unfill = []
  let idx = 0

  //驗證
  for (const [key, value] of Object.entries(formData)) {
    if (!bypass.includes(key)) {
      if (value == "" || value == false) {
        unfill.push(formDataRef.value[idx])
      }

    }

    idx++;

    presend.append(key, value);
  }

  presend.append("utm_source", utmSource);
  presend.append("utm_medium", utmMedium);
  presend.append("utm_content", utmContent);
  presend.append("utm_campaign", utmCampaign);

  //有未填寫
  if (unfill.length > 0) {
    pass = false
    toast.error(`「${unfill.join(", ")}」為必填或必選`)
    return
  }

  //手機驗證
  const MobileReg = /^(09)[0-9]{8}$/
  if (!formData.phone.match(MobileReg)) {
    pass = false
    toast.error(`手機格式錯誤 ( 09開頭10位數字 )`)
    return
  }

  if (pass && !sending.value) {
    sending.value = true
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &email=${formData.email}
      &people=${formData.people}
      &type=${formData.type}
      &msg=${formData.msg}
      &utm_source=${utmSource}
      &utm_medium=${utmMedium}
      &utm_content=${utmContent}
      &utm_campaign=${utmCampaign}
      &date=${date}
      &campaign_name=${info.caseName}`,
      {
        method: "GET"
      }
    );

    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        // window.location.href = "formThanks";
        toast.success(`表單已送出，感謝您的填寫`)
      }
      sending.value = false
    });
  }
}


</script>