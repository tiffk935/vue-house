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
    <Order />
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
  height: func.size-m(667 - 74);
  @media screen and (min-width:768px) {
    height: func.size(1080 - 165);
  }

  .img {
    position: absolute;
    top: func.size-m(61);
    left: func.size-m(92);
    width: func.size-m(189);
    @media screen and (min-width:768px) {
      top: func.size(192);
      left: func.size(177);
      width: func.size(1566);
    }
  }

  .txt {
    position: absolute;
    top: func.size-m(406);
    left: func.size-m(57);
    width: func.size-m(262);
  }

  .onder-btn {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      top: func.size(574);
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
  padding: func.size-m(30 + 30) 0 func.size-m(60) 0;
  @media screen and (min-width:768px) {
    padding: func.size(65 + 74) 0 func.size(197) 0;
  }
  
  h2 {
    @media screen and (min-width:768px) {
      margin-bottom: func.size(118);
    }
  }
}
</style>

<script setup>
import info from '@/info';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Order from '@/components/Order.vue';

gsap.registerPlugin(ScrollToPlugin);

const modules = ref([]);
const swiperRef = ref();

function scrollToEl(el) {
  gsap.to(window, { duration: 1, scrollTo: { y: el, offsetY: 30 } });
}

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
</script>