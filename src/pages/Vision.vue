<template>
  <div id="vision-page-inner">
    <section class="banner">
      <img class="img mob" src="@/assets/vision/banner/img-m.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
      <img class="img pc" src="@/assets/vision/banner/img.webp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
      <div class="onder-btn" @click="scrollToEl('#order')">立即預約</div>
    </section>

    <section id="about">
      <h2>關於策展</h2>
      
      <div class="sec info">
        <div class="flex">
          <img src="@/assets/vision/about/img.webp" />
          <div class="content">
            <div class="name">
              <div class="jp">芦沢啓治</div>
              <div class="line"></div>
              <div class="en">KEIJI ASHIZAWA</div>
            </div>
            <div class="t1">日本近現代建築設計美學的關鍵人物。</div>
            <div class="t2">
              「所謂的設計，並不是單純從形體上來發想設計這樣單純的事情而已； 『製造/創造出什麼』這個行為，其實是將設計與社會緊緊聯繫在一起的。」
            </div>
            <div class="t2 by">芦沢啓治</div>
            <div class="line"></div>
          </div>
        </div>
      </div>

      <div class="sec idea">
        <div class="sec-title mob">設計理念</div>
        <div class="flex">
          <div class="slider">
            <swiper
              :spaceBetween="10"
              :modules="modules"
              :pagination="{
                clickable: true
              }"
              loop
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
              }"
            >
              <swiper-slide>
                <img src="@/assets/vision/about/idea1.webp" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/idea2.webp" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="content">
            <div class="sec-title pc">設計理念</div>
            <div class="t1">
              「 誠實設計 」的概念，<br>
              一種誠摯面對設計本質的態度。
            </div>
            <div class="t2">
              芦沢啓治認為，設計不應該只是為了促使人們購買商品，或者僅僅是為了反映某個時代的潮流，而是應該朝著更有助於構建美好未來的方向發展，故提出了「誠實設計」的概念，指的是忠於本質的設計，強調回歸事物本質，尊重材料的特性、回應人的真實需求，讓設計成為我們實現理想生活的工具，為未來創造真正的價值。
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>

      <div class="sec design">
        <div class="sec-title mob">建築設計／室內設計／傢俱設計</div>
        <div class="flex">
          <div class="slider">
            <swiper
              :spaceBetween="10"
              :modules="modules"
              :pagination="{
                clickable: true
              }"
              loop
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
              }"
            >
              <swiper-slide>
                <img src="@/assets/vision/about/design1.webp" />
                <div class="txt">Ishinomaki Home Base</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/design2.webp" />
                <div class="txt">TRUNK(HOTEL) YOYOGI PARK</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/design3.webp" />
                <div class="txt">dotcom coffee</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/design4.webp" />
                <div class="txt">BELLUSTAR Penthouse</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/design5.webp" />
                <div class="txt">BELLUSTAR Penthouse</div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="content">
            <div class="sec-title pc">建築設計／室內設計／傢俱設計</div>
            <div class="t1">
              空間內所需要的各種元素，<br>
              都可以進行設計。
            </div>
            <div class="t2">
              簡潔中追求精緻，實用中追求周到與體貼；整個空間都充滿了舒適，連角落裡的材質都在釋放著魅力。芦沢啓治的建築設計注重與自然環境的和諧共生，他的作品通過巧妙的空間佈局和自然光的運用，創造出開放、舒適的生活環境。每座建築與空間都融入周圍的自然景觀，呈現簡潔而優雅的形態，強調建築與環境的緊密聯繫，使生活空間成為心靈的棲息地。在芦沢啓治的設計中，您可以感受到自然的脈動和空間的靈動，享受身心靈的和諧與舒適。
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>

      <div class="sec work">
        <div class="sec-title mob">知名業績</div>
        <div class="flex">
          <div class="slider">
            <swiper
              :spaceBetween="10"
              :modules="modules"
              :pagination="{
                clickable: true
              }"
              loop
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
              }"
            >
              <swiper-slide>
                <img src="@/assets/vision/about/work1.webp" />
                <div class="txt">Blue Bottle Coffee Nagoya Sakae Cafe</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/work2.webp" />
                <div class="txt">Blue Bottle Coffee Shibuya Cafe</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/work3.webp" />
                <div class="txt">Blue Bottle Coffee Kobe Hankyu Cafe</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/work4.webp" />
                <div class="txt">Blue Bottle Coffee Qiantan Café</div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/vision/about/work5.webp" />
                <div class="txt">Blue Bottle Coffee Jakc Cafe</div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="content">
            <div class="sec-title pc">知名業績</div>
            <div class="t1">
              藍瓶咖啡空間靈魂人物<br class="mob">
              ＿＿芦沢啓治
            </div>
            <div class="t2">
              藍瓶咖啡東京澀谷店、名古屋榮店、神戶阪急店，都出自芦沢啓治事務所的手筆，秉持著以使用者為核心的設計理念，「石卷工房」在日本311大地震的背景下誕生了，「製作在地物品」為初衷的傢俱品牌，透過設計傳遞DIY的無限可能，2019年與日本傢俱大廠 KARIMOKU 合作推出全新品牌 Karimoku Case，堅持寧靜美、多樣材料表現的美學，更曾擔任日本 GOOD DESIGN 設計獎評審委員以及德國 iF 2020 設計獎評審。
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="prev">
      <h2>上期展覽</h2>
      <div class="img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="mob" src="@/assets/vision/prev/img-m.webp" />
        <img class="pc" src="@/assets/vision/prev/img.webp" />
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
            <a target="_blank" :href="info.igLink"><img src="@/assets/icon-ig.svg" /></a>
            <a target="_blank" :href="info.lineLink"><img src="@/assets/icon-line.svg" /></a>
          </div>
        </div>
      </div>
    </section>

    <div id="order">
      <h2>預約表單</h2>
      <Order />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

#vision-page-inner {
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
    margin-bottom: func.size-m(29);
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
      top: func.size-m(45);
      left: func.size-m(49);
      width: func.size-m(277);
      @media screen and (min-width:768px) {
        top: func.size(131);
        left: func.size(85);
        width: func.size(1671);
      }
    }

    .onder-btn {
      position: absolute;
      top: func.size-m(492);
      left: func.size-m(273);
      width: func.size-m(53);
      height: func.size-m(20);
      border: func.size-m(1) solid #000;
      text-decoration: none;
      color: #000;
      font-size: func.size-m(9);
      line-height: 1;
      letter-spacing: .23em;
      text-indent: .23em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @media screen and (min-width:768px) {
        top: func.size(756);
        left: func.size(1587);
        width: func.size(169);
        height: func.size(56);
        border: func.size(3) solid #000;
        font-size: func.size(27);
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
    padding: func.size-m(19) 0 func.size-m(36) 0;
    @media screen and (min-width:768px) {
      padding: func.size(167) 0 func.size(160) 0;
    }

    .sec {
      .sec-title {
        color: #269161;
        font-size: func.size-m(14);
        font-weight: 500;
        padding: 0 func.size-m(49);
        margin-bottom: func.size-m(20);
        @media screen and (min-width:768px) {
          font-size: func.size(26);
          margin-bottom: func.size(28);
          padding: 0;
        }
      }

      .flex {
        @media screen and (min-width:768px) {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
      }

      .content {
        padding: 0 func.size-m(48);
        @media screen and (min-width:768px) {
          padding: 0;
        }

        .t1 {
          font-size: func.size-m(15);
          font-weight: 500;
          line-height: 133.2%; /* 19.98px */
          @media screen and (min-width:768px) {
            font-size: func.size(38);
          }
        }

        .t2 {
          font-size: func.size-m(12);
          font-weight: 500;
          line-height: 171%;
          @media screen and (min-width:768px) {
            font-size: func.size(20);
          }
        }
      }
    }

    .info {
      @media screen and (min-width:768px) {
        padding-bottom: func.size(161);
      }
      img {
        display: block;
        width: 100%;
        margin-bottom: func.size-m(41);
        @media screen and (min-width:768px) {
          width: func.size(926);
          margin-bottom: 0;
        }
      }
      
      .content {
        @media screen and (min-width:768px) {
          width: func.size(668);
          margin-left: func.size(160);
        }

        .name {
          display: flex;
          align-items: center;
          margin-bottom: func.size-m(13);
          font-weight: 500;
          @media screen and (min-width:768px) {
            margin-bottom: func.size(28);
          }

          .jp {
            font-size: func.size-m(16);
            line-height: 133.2%;
            @media screen and (min-width:768px) {
              font-size: func.size(38);
            }
          }

          .line {
            flex: 1;
            margin: 0 func.size-m(8) 0 func.size-m(4);
            height: func.size-m(1);
            background: #000;
            @media screen and (min-width:768px) {
              margin: 0 func.size(8) 0 func.size(14);
              height: func.size(1);
            }
          }

          .en {
            color: #269161;
            font-size: func.size-m(20);
            line-height: 133.2%;
            @media screen and (min-width:768px) {
              font-size: func.size(47);
            }
          }
        }

        .t1 {
          margin-bottom: func.size-m(24);
          @media screen and (min-width:768px) {
            margin-bottom: func.size(163);
          }
        }

        .t2 {
          color: #269161;
          margin-bottom: func.size-m(16);
          text-align: justify;
          @media screen and (min-width:768px) {
            margin-bottom: func.size(27);
          }

          &.by {
            text-align: right;
            position: relative;
            margin-bottom: func.size-m(60);
            @media screen and (min-width:768px) {
              margin-bottom: func.size(121);
            }

            &:after {
              content: '';
              position: absolute;
              top: 50%;
              right: func.size-m(57);
              width: func.size-m(41);
              height: func.size-m(1);
              background: #269161;
              @media screen and (min-width:768px) {
                right: func.size(94);
                width: func.size(128);
                height: func.size(1);
              }
            }
          }
        }

        .line {
          width: 100%;
          height: func.size-m(3);
          background: #269161;
          @media screen and (min-width:768px) {
            height: func.size(3);
          }
        }
      }
    }

    .idea, .design, .work {
      padding: func.size-m(24) 0 func.size-m(41) 0;
      @media screen and (min-width:768px) {
        padding: func.size(105) 0 func.size(28) 0;
      }

      .flex {
        @media screen and (min-width:768px) {
          align-items: flex-end;
        }
      }

      .slider {
        overflow: hidden;
        margin-bottom: func.size-m(41);
        @media screen and (min-width:768px) {
          width: func.size(926);
          margin-bottom: 0;
          padding-bottom: func.size(128 + 10);
        }

        .swiper {
          overflow: visible;

          .swiper-pagination {
            bottom: -4vw;
            justify-content: flex-end;

            .swiper-pagination-bullet {
              width: func.size(119.89);
              height: func.size(10);
              background: #CCCCCC;
              opacity: 1;
              border-radius: 0;
              margin: 0 func.size(5) 0 0;

              &.swiper-pagination-bullet-active {
                background: #269161;
              }
            }
          }
        }

        img {
          display: block;
          width: 100%;
          height: func.size-m(261);
          object-fit: cover;
          @media screen and (min-width:768px) {
            height: func.size(752);
          }
        }

        .swiper-pagination {
          display: none;
          @media screen and (min-width:768px) {
            display: flex;
          }
        }
      }

      .content {
        @media screen and (min-width:768px) {
          width: func.size(651);
          margin-right: func.size(160);
          padding-bottom: func.size(128 + 10);
        }

        .t1 {
          line-height: 232.2%;
          margin-bottom: func.size-m(26);
          @media screen and (min-width:768px) {
            line-height: 133.2%;
            margin-bottom: func.size(136);
          }
        }

        .t2 {
          margin-bottom: func.size-m(19);
          text-align: justify;
          @media screen and (min-width:768px) {
            margin-bottom: func.size(88);
          }
        }

        .line {
          width: 100%;
          height: func.size-m(3);
          background: #269161;
          @media screen and (min-width:768px) {
            height: func.size(3);
          }
        }
      }
    }

    .info, .idea {
      .flex {
        @media screen and (min-width:768px) {
          flex-direction: row-reverse;
        }
      }

      .content {
        @media screen and (min-width:768px) {
          margin-left: func.size(160);
        }
      }

      .slider .swiper .swiper-pagination {
        justify-content: flex-start;
      }
    }

    .design, .work {
      .slider {
        position: relative;
        margin-bottom: func.size-m(12);
        @media screen and (min-width:768px) {
          padding-bottom: func.size(68 + 10);
          margin-bottom: 0;
        }

        .txt {
          padding-right: func.size-m(48);
          font-size: func.size-m(12);
          line-height: 171%;
          font-weight: 500;
          margin-top: func.size-m(2);
          text-align: right;
          @media screen and (min-width:768px) {
            padding-right: 0;
            font-size: func.size(25);
            margin-top: func.size(17);
          }
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

  #prev {
    padding: func.size-m(19) 0 func.size-m(50) 0;
    @media screen and (min-width:768px) {
      padding: func.size(127) 0 func.size(295) 0;
    }

    .img {
      width: func.size-m(277.77);
      margin: 0 auto;
      @media screen and (min-width:768px) {
        width: func.size(1437);
        margin-top: func.size(275);
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
        margin-bottom: func.size(120);
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
}
</style>

<script setup>
import info from '@/info';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Order from '@/components/Order.vue';

gsap.registerPlugin(ScrollToPlugin);

const modules = ref([Autoplay, Pagination]);
const swiperRef = ref();

function scrollToEl(el) {
  gsap.to(window, { duration: 1, scrollTo: { y: el, offsetY: 30 } });
}

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
</script>