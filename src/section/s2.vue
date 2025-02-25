<template>
  <article class="s2">
    <div class="bg1 w-full">


      <div class="sec1">
        <img class="halo" src="@/section/s2/halo.png" />
        <img class="sec1-logo" src="@/section/s2/sec1-logo.svg" />

        <div class="sec1-item sec1-item1 absolute">
          <img class="sec1-item-bg w-full block" src="@/section/s2/sec1-item-bg.svg" />
          <div class="sec1-item-content absolute">
            <div class="sec1-item-title">甲級營造</div>
            <div class="sec1-item-text">聖恩營造／頌揚營造<br>頌恩營造</div>
          </div>
        </div>
          
        <div class="sec1-item sec1-item2 absolute">
          <img class="sec1-item-bg w-full block" src="@/section/s2/sec1-item-bg.svg" />
          <div class="sec1-item-content absolute">
            <div class="sec1-item-title">物業管理</div>
            <div class="sec1-item-text">喜來登物業</div>
          </div>
        </div>
        <div class="sec1-item sec1-item3 absolute">
          <img class="sec1-item-bg w-full block" src="@/section/s2/sec1-item-bg.svg" />
          <div class="sec1-item-content absolute">
            <div class="sec1-item-title">星級飯店</div>
            <div class="sec1-item-text">
              新竹喜來登飯店<br>
              豐邑MOXY飯店<br>
              逢甲商旅LA VIDA
            </div>
          </div>
        </div>
        <div class="sec1-item sec1-item4 absolute">
          <img class="sec1-item-bg w-full block" src="@/section/s2/sec1-item-bg.svg" />
          <div class="sec1-item-content absolute">
            <div class="sec1-item-title">永續經營</div>
            <div class="sec1-item-text">豐邑豐生活</div>
          </div>
        </div>
        <div class="sec1-item sec1-item5 absolute">
          <img class="sec1-item-bg w-full block" src="@/section/s2/sec1-item-bg.svg" />
          <div class="sec1-item-content absolute">
            <div class="sec1-item-title">百貨商場</div>
            <div class="sec1-item-text">FUNLIFE<br>豐生活購物中心</div>
          </div>
        </div>
        <div class="sec1-item sec1-item6 absolute">
          <img class="sec1-item-bg w-full block" src="@/section/s2/sec1-item-bg.svg" />
          <div class="sec1-item-content absolute">
            <div class="sec1-item-title">建設開發</div>
            <div class="sec1-item-text">豐邑建設/豐謙建設/佳成建設<br>浩瀚開發/旌旗開發</div>
          </div>
        </div>
        <div class="sec1-item sec1-item7 absolute">
          <img class="sec1-item-bg w-full block" src="@/section/s2/sec1-item-bg.svg" />
          <div class="sec1-item-content absolute">
            <div class="sec1-item-title">豐邑文教<br>基金會</div>
            <div class="sec1-item-text">豐藝館藝文空間</div>
          </div>
        </div>
        
        <img class="sec1-en" src="@/section/s2/sec1-en.svg" />
        <div class="sec1-title" data-aos="fade-up" data-aos-delay="0">以感恩的心突破並創新</div>
        <div class="sec1-title2" data-aos="fade-up" data-aos-delay="100">
          <div>7大領域</div>
          <div class="line"></div>
          <div>全方位整合</div>
        </div>
        <div class="sec1-desc relative" data-aos="fade-up" data-aos-delay="200">
          以愛為名穩扎穩打，在台中、新竹建構眾多精彩實績<br>
          經營多角化、營建專業化、管理神性化、服務知性化<br>
          豐邑懷抱感恩的心，不斷更新、突破過往！
        </div>
      </div>

      <div class="t4 text-center hidden md:block s2_manu" data-aos="fade-up" data-aos-delay="0">全國唯一連續24年，榮獲國家金質獎</div>
      <div class="t4 text-center md:hidden" data-aos="fade-up" data-aos-delay="0">全國唯一連續24年<br>榮獲國家金質獎</div>

      <div class="swiper-section">
        <div class="l">
          <div class="t">
            <div class="tt1" data-aos="fade-up" data-aos-delay="0">
              豐邑機構至2024年10月已連續24年榮獲建築金質獎肯定，累積獲獎140座，其中有43座全國首獎、92座金質獎、5座特別獎(優質獎、鑽石金首獎、卓越金首獎、最佳創意設計)
            </div>
            <div class="tt2" data-aos="fade-up" data-aos-delay="100">
              豐邑匠心藝，國家的肯定
            </div>
            <div class="tt3"
        data-aos="fade-up"
        data-aos-delay="200">建築金質獎</div>
            <div class="tt4"
        data-aos="fade-up"
        data-aos-delay="300">
              建築金質獎、優質獎、鑽石金首獎、卓越金首獎
              <br v-if="isMobile" />特別獎/最佳創意設計
            </div>
            <div class="tt5"
        data-aos="fade-up"
        data-aos-delay="400">第十六屆國家優良建商及營造商認證標章</div>
          </div>
          <img class="gold" src="@/section/s2/gold.webp" alt="" srcset=""
        data-aos="fade-up"
        data-aos-delay="500" />
        </div>
        <div class="r"
        data-aos="fade-up"
        data-aos-delay="0">
          <div class="rt1">經典業績，永恆篇章</div>
          <div class="swiper-box">
            <Splide
              ref="splide"
              class="slide"
              :options="{
                arrows: true,
                autoplay: true,
                pagination: true,
                interval: 4000,
                gap: 10,
                type: 'loop',
                autoWidth: true,
              }"
              @splide:move="onMove"
            >
              <SplideSlide
                class="slide-item"
                :key="i"
                v-for="i in imgs"
                :style="{ 'background-image': `url(${i.img})` }"
              >
                <div class="caption">
                  {{ i.caption }}
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div class="timeline">
            <span v-if="!isMobile">2015</span>
            <span v-else>
              <template v-if="currentIdx === 0">2015</template>
              <template v-else-if="currentIdx === 9">2023</template>
              <template v-else>2022</template>
            </span>
            <div class="line"></div>
            <span v-if="!isMobile">2022</span>
            <span v-else>{{ imgs[currentIdx].caption }} </span>
            <div class="line" v-if="!isMobile"></div>
            <span v-if="!isMobile">2023</span>
            <div class="line" v-if="!isMobile"></div>
            
          </div>
          <div class="swiper-btns">
            <div class="swiper-btns-inner">
              <div>
                <div
                  class="item"
                  v-for="idx in 1"
                  :key="0"
                  :class="{ active: 0 === currentIdx }"
                  @click="splide.go(0)"
                >
                  {{ imgs[0].caption }}
                </div>
              </div>
              <div>
                <div
                  class="item"
                  v-for="idx in 8"
                  :key="idx - 1 + 1"
                  :class="{ active: (idx - 1 + 1) === currentIdx }"
                  @click="splide.go(idx - 1 + 1)"
                >
                  {{ imgs[idx - 1 + 1].caption }}
                </div>
              </div>
              <div>
                <div
                  class="item"
                  v-for="idx in 1"
                  :key="9"
                  :class="{ active: 9 === currentIdx }"
                  @click="splide.go(9)"
                >
                  {{ imgs[9].caption }}
                </div>
              </div>
            </div>
          </div>
          <img class="en" src="@/section/s2/en.png" alt="" srcset="" />
        </div>
      </div>
    </div>




    <div class="last-swiper s3_manu">
      <div class="ttt1 hidden md:block" data-aos="fade-up" data-aos-delay="0">五星飯店標竿，將創立豐生活百貨</div>
      <div class="ttt1 md:hidden" data-aos="fade-up" data-aos-delay="0">五星飯店標竿<br>將創立豐生活百貨</div>

      <img class="luxury hidden md:block" src="@/section/s2/luxury.svg" />
      <img class="luxury md:hidden" src="@/section/s2/luxury-m.svg" />
      
      <div class="ttt2" 
      data-aos="fade-up"
      data-aos-delay="100">
        跨足飯店事業注入軟實力，新竹五星級喜來登大飯店，奢華渡假美學標竿<br class="hidden md:block">
        台中逢甲商旅LaVida Hotel深耕在地觀光，引進國際品牌萬豪集團台灣首家Moxy飯店<br class="hidden md:block">
        打造全新FUNLIFE豐生活購物中心，以多元版圖豐美全方位悠享人生。
      </div>

      <div class="swiper-box" 
      data-aos="fade"
      data-aos-delay="0">
        <div class="swiper-wrapper">
          <Splide
            ref="splide2"
            class="slide2"
            :options="{
              drag: isMobile,
              arrows: isMobile,
              autoplay: isMobile,
              pagination: false,
              interval: 4000,
              gap: 10,
              type: 'loop',
              autoWidth: true,
            }"
          >
            <SplideSlide
              class="slide-item"
              :key="i"
              v-for="i in imgs2"
              :style="{ 'background-image': `url(${i.img})` }"
            >
              <!-- <div class="caption">
                {{ i.caption }}
              </div> -->
            </SplideSlide>
          </Splide>
        </div>
        <!-- <div class="mo-arrow" v-if="isMobile">
          <img
            class="prev"
            @click="splide2.go('<')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
          <img
            class="next"
            @click="splide2.go('>')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
        </div> -->
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  .splide__arrow {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .s2 {
    .splide__arrow {
      display: block;
      position: absolute;
      top: 50%;
      width: sizem(40);
      height: sizem(40);
      background-size: contain;
      background-repeat: no-repeat;

      svg {
        display: none;
      }

      &.splide__arrow--prev {
        left: 2vw;
        transform: translate(-100%, 0);
        background-image: url('data:image/svg+xml,<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_298_137)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4594 31.1383C17.9963 31.6753 18.8669 31.6753 19.4039 31.1383C19.9409 30.6013 19.9409 29.7307 19.4039 29.1937L10.3226 20.1124L19.4039 11.0311C19.9409 10.4941 19.9409 9.62348 19.4039 9.08651C18.8669 8.54954 17.9963 8.54954 17.4594 9.08651L7.40575 19.1401C6.86878 19.6771 6.86878 20.5477 7.40575 21.0847L17.4594 31.1383Z" fill="white"/></g><defs><filter id="filter0_d_298_137" x="3.00293" y="8.68384" width="20.8037" height="30.8572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_298_137"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_298_137" result="shape"/></filter></defs></svg>');
        background-position: 1vw 0;
      }

      &.splide__arrow--next {
        right: 2vw;
        transform: translate(100%, 0);
        background-image: url('data:image/svg+xml,<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_298_132)"><g filter="url(%23filter0_d_298_132)"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5406 9.08681C23.0037 8.54984 22.1331 8.54984 21.5961 9.08681C21.0591 9.62378 21.0591 10.4944 21.5961 11.0314L30.6774 20.1127L21.5961 29.194C21.0591 29.731 21.0591 30.6016 21.5961 31.1386C22.1331 31.6756 23.0037 31.6756 23.5406 31.1386L33.5943 21.085C34.1312 20.548 34.1312 19.6774 33.5943 19.1404L23.5406 9.08681Z" fill="white"/></g></g><defs><filter id="filter0_d_298_132" x="17.1934" y="8.68408" width="20.8037" height="30.8572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_298_132"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_298_132" result="shape"/></filter><clipPath id="clip0_298_132"><rect width="40.2145" height="40.2145" fill="white" transform="translate(0.785645 0.00537109)"/></clipPath></defs></svg>');
        background-position: -1vw 0;
      }
    }

    .slide2 {
      .splide__arrow.splide__arrow--prev {
        left: -10vw;
      }

      .splide__arrow.splide__arrow--next {
        right: -10vw;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply w-full relative bg-cover;
  @apply flex flex-col items-center justify-start;

  .bg1 {
    padding: size(132) 0 size(52) 0;
    background: linear-gradient(180deg, #B4DED2 -0.32%, #AEDCEA 26.98%, #9DC4DD 55.28%, #84A2CA 100.78%);
  }

  .sec1 {
    width: 100%;
    height: size(1286);
    padding: size(130) 0 0 size(104);
    position: relative;

    .halo {
      position: absolute;
      top: size(119);
      right: size(-4);
      width: size(1310);
      mix-blend-mode: screen;
    }

    .sec1-logo {
      position: absolute;
      top: size(515);
      right: size(478);
      width: size(236);
    }

    .sec1-en {
      display: block;
      width: size(284);
      margin-bottom: size(24);
    }

    .sec1-title {
      font-size: size(60);
      font-weight: 700;
      letter-spacing: .05em;
      margin-bottom: size(74);
    }
    
    .sec1-title2 {
      font-size: size(41);
      font-weight: 500;
      letter-spacing: .05em;
      display: flex;
      align-items: center;
      margin-bottom: size(14);
      

      .line {
        width: size(73);
        height: size(1);
        margin: 0 size(11) 0 size(7);
        background: #000;
      }
    }

    .sec1-desc {
      width: size(567);
      text-align: justify;
      font-size: size(23);
      font-weight: 400;
      line-height: size(40);
      letter-spacing: size(1.38);
    }

    .sec1-item {
      .sec1-item-bg {
        // background-blend-mode: screen;
        mix-blend-mode: screen;
      }

      .sec1-item-content {
        width: 100%;
        text-align: center;
        top: calc(50% + 1.4vw);
        left: 0;
        transform: translate(0, -50%);
      }

      .sec1-item-title {
        font-size: size(42);
        font-weight: 700;
        line-height: size(46);
        letter-spacing: .05em;
        margin-bottom: size(18);
      }

      .sec1-item-text {
        font-size: size(24);
        font-weight: 700;
        line-height: size(35);
        letter-spacing: -0.05em;
      }

      &.sec1-item1 {
        width: size(270);
        top: size(734);
        left: size(315);
      }

      &.sec1-item2 {
        width: size(268);
        top: size(472);
        left: size(542);
      }

      &.sec1-item3 {
        width: size(321);
        top: size(718);
        left: size(728);
      }

      &.sec1-item4 {
        width: size(270);
        top: size(245);
        left: size(791);
      }

      &.sec1-item5 {
        width: size(307);
        top: size(30);
        right: size(378);
      }

      &.sec1-item6 {
        width: size(340);
        top: size(305);
        right: size(28);
      }

      &.sec1-item7 {
        width: size(270);
        top: size(1);
        right: size(41);
      }
    }
  }

  .cloth1{
    width: 89.9vw;
    top: -7vw;
    left: -69.4vw;
    transform: rotate(-10deg)translateX(-10%);
  img{width: 100%;transform: rotate(-163deg);opacity: 0.5;}
  }
  .cloth2{
    width: 87vw;
    bottom: 10vw;
    right: -33vw;
    transform: rotate(10deg)translateX(10%);
  img{width: 100%;
    transform: rotate(-29deg) scaleY(-1);}
  }

  .cloth3{
    width: 130vw;
    bottom: -5vw;
    right: -62vw;
    transform: rotate(-10deg)translateX(-10%);
  img{width: 100%;
    transform: rotate(195deg);opacity: 0.5;}
  }
  .bg{
    width:100%;
    height: size(1806);
    bottom:0;
    background: linear-gradient(180deg, rgba(3, 65, 80, 0.00) 3.34%, #034150 87.72%);
    left:0;
  }

  .t1 {
    font-size: size(48);
    font-weight: 700;
    letter-spacing: size(2.88);
  }
  .t2 {
    width: size(872.23);
    margin-top: size(15);
  }
  .t3 {
    @apply text-center;
    font-size: size(16);
    font-weight: 400;
    letter-spacing: size(1.44);
    margin-top: size(30);
    span {
      font-size: size(24);
    }
  }
  .spn {
    width: size(799);
    margin-top: size(30);
  }
  .t4 {
    font-size: size(48);
    font-weight: 700;
    letter-spacing: size(2.88);
    margin-top: size(5);
  }
  .swiper-section {
    @apply flex;
    gap: size(51);
    margin-top: size(33);
    padding-left: 4.2vw;
    .l {
      @apply flex flex-col items-end;
      .t {
        width: size(333);
        .tt1 {
          @apply text-justify;
          font-size: size(15);
          font-weight: 400;
          letter-spacing: size(0.9);
        }
        .tt2 {
          font-size: size(26);
          font-weight: 700;
          letter-spacing: size(0.52);
          margin-top: size(42);
        }
        .tt3 {
          @apply text-[#CEAF73] bg-[#034150] text-center;
          width: size(131);
          height: size(30);
          line-height: size(30);
          font-size: size(16);
          font-weight: 700;
          letter-spacing: size(0.96);
          border-radius: size(8) 0 size(8) 0;
          margin-top: size(21);
        }
        .tt4 {
          font-size: size(15);
          font-weight: 500;
          letter-spacing: size(0.9);
          margin-top: size(8);
        }
        .tt5 {
          @apply text-[#034150];
          font-size: size(16);
          font-weight: 700;
          letter-spacing: size(0.9);
          margin-top: size(25);
        }
      }
      .gold {
        margin-top: size(22);
        width: size(604);
      }
    }
    .r {
      border-left: 1px solid #fff;
      padding-left: size(21);
      .rt1 {
        font-size: size(26);
        font-weight: 700;
        letter-spacing: size(0.52);
        line-height: 1;
      }
      .swiper-box {
        width: size(755);
        height: size(518);
        margin-top: size(30);
        .slide-item {
          @apply bg-cover relative;
          width: size(755);
          height: size(518);
          .caption {
            @apply absolute;
            bottom: size(10);
            left: size(15);
            font-size: size(15);
            font-weight: 700;
          }
        }
      }
      .timeline {
        @apply flex items-center;
        gap: size(12);
        margin-bottom: size(5);
        margin-top: size(29);
        span {
          color: #034150;
          font-size: size(20);
          font-weight: 700;
          letter-spacing: size(1.2);
        }
        .line {
          @apply bg-[#034150];
          height: 0.5px;
          &:nth-child(2) {
            width: size(117);
          }
          &:nth-child(4) {
            width: size(505);
          }
          &:nth-child(6) {
            width: size(117);
          }
        }
      }
      .swiper-btns {
        @apply flex whitespace-nowrap flex-wrap;
        @apply text-center;
        width: size(1170);
        column-gap: size(5);
        row-gap: size(11);
        .item {
          @apply cursor-pointer;
          color: #fff;
          width: size(185);
          height: size(36);
          line-height: size(36);
          border: 1px solid #fff;
          font-size: size(13.7);
          margin-bottom: size(11);
          // &:nth-child(1) {
          //   width: size(155);
          // }
          // &:nth-child(4) {
          //   width: size(150);
          // }
          // &:nth-child(5) {
          //   margin-left: size(8);
          // }
          // &:nth-child(6) {
          //   margin-left: size(8);
          // }
          // &:nth-child(7) {
          //   width: size(155);
          // }
          // &:nth-child(9) {
          //   font-size: size(13.37);
          // }
          // &:nth-child(10) {
          //   width: size(150);
          // }
          &.active {
            @apply bg-white text-[#83CCD2];
          }
          &:hover {
            @apply bg-white text-[#83CCD2];
          }
        }
      }
      .swiper-btns-inner {
        display: flex;
        justify-content: space-between;
        width: size(955);
        
        &>div {
          display: flex;
          flex-wrap: wrap;
          gap: 0 size(5);
          &:nth-child(1), &:nth-child(3) {
            width: size(185);
          }
          &:nth-child(2) {
            width: size(565);
          }
        }
      }
      .en {
        width: size(593.49);
        margin-top: size(37);
      }
    }
  }
  .last-swiper {
    @apply text-center;
    width: 100%;
    background-image: url(@/section/s2/sec2-bg.jpg);
    background-size: 100% auto;
    padding: size(137) 0 size(33) 0;
    .ttt1 {
      color: #78572E;
      font-size: size(60);
      font-weight: 700;
      letter-spacing: .05em;
      margin-bottom: size(50);
    }
    .luxury {
      width: size(942.35);
      margin: 0 auto size(32) auto;
    }
    .ttt2 {
      color: #86807B;
      font-size: size(23);
      font-weight: 400;
      letter-spacing: .06em;
      width: size(930);
      margin: 0 auto size(67) auto;
    }
    .swiper-box {
      @apply relative;
      width: size(1550);
      height: size(749);
      padding: size(14) size(16);
      margin: 0 auto;
      .swiper-wrapper {
        @apply w-full;
        .slide-item {
          @apply relative bg-cover;
          width: size(370);
          height: size(613);
          background-position: center center;
          
          &:nth-child(odd) {
            margin-top: size(47);
          }

          .caption {
            @apply absolute w-full;
            bottom: size(30);
            font-size: size(15);
            font-weight: 500;
            letter-spacing: size(0.15);
          }
        }
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    @apply w-full relative bg-cover;
    @apply flex flex-col items-center justify-start;

    .bg1 {
      padding: 0 0 sizem(38) 0;
      background: linear-gradient(180deg, #B4DED2 -0.32%, #AEDCEA 26.98%, #9DC4DD 55.28%, #84A2CA 100.78%);
    }

    .sec1 {
      width: 100%;
      height: sizem(921);
      padding: sizem(44) sizem(30) 0 sizem(30);
      position: relative;
      text-align: center;

      .halo {
        position: absolute;
        top: sizem(490);
        right: sizem(-20.7);
        width: sizem(464.7);
        mix-blend-mode: screen;
      }

      .sec1-logo {
        position: absolute;
        top: sizem(623);
        right: sizem(139.17);
        width: sizem(96.83);
      }

      .sec1-en {
        display: none;
      }

      .sec1-title {
        font-size: sizem(25);
        letter-spacing: .06em;
        margin-bottom: sizem(17);
      }
      
      .sec1-title2 {
        font-size: sizem(20);
        margin-bottom: sizem(17);
        justify-content: center;

        .line {
          width: sizem(53);
          height: sizem(1);
          margin: 0 sizem(10);
          background: #000;
        }
      }

      .sec1-desc {
        width: 100%;
        font-size: sizem(13);
        line-height: sizem(21);
        letter-spacing: .05em;
      }

      .sec1-item {
        .sec1-item-content {
          width: 100%;
          text-align: center;
          top: calc(50% + 3vw);
          left: 0;
          transform: translate(0, -50%);
        }

        .sec1-item-title {
          font-size: sizem(16);
          line-height: sizem(17);
          margin-bottom: sizem(5);
        }

        .sec1-item-text {
          font-size: sizem(10);
          line-height: sizem(16);
          letter-spacing: -0.05em;
        }

        &.sec1-item1 {
          width: sizem(105);
          top: sizem(224);
          left: sizem(63);
        }

        &.sec1-item2 {
          width: sizem(110);
          top: sizem(340);
          left: sizem(260);
        }

        &.sec1-item3 {
          width: sizem(110);
          top: sizem(223);
          left: sizem(200);
        }

        &.sec1-item4 {
          width: sizem(112);
          top: sizem(338);
          left: sizem(3);
        }

        &.sec1-item5 {
          width: sizem(120);
          top: sizem(334);
          right: sizem(126);
        }

        &.sec1-item6 {
          width: sizem(125);
          top: sizem(457);
          right: sizem(207);
        }

        &.sec1-item7 {
          width: sizem(121);
          top: sizem(454);
          right: sizem(52);
        }
      }
    }

  .cloth1{
        width: 127vw;
        top: 113vw;
        left: -78.4vw;
  }
  .cloth2{
    width: 303vw;
    bottom: -5vw;
    right: -194vw;
  }
  .bg{
    height: sizem(1200);
  }
    .t1 {
      font-size: sizem(25);
      font-weight: 700;
      letter-spacing: sizem(1.5);
    }
    .t2 {
      width: sizem(290);
      margin-top: sizem(8);
    }
    .t3 {
      @apply text-center;
      width: sizem(315);
      font-size: sizem(13);
      font-weight: 400;
      letter-spacing: sizem(0.78);
      margin-top: sizem(18.15);
      span {
        font-size: sizem(16);
      }
    }
    .spn {
      width: 90%;
      margin-top: sizem(25);
    }
    .t4 {
      font-size: sizem(25);
      font-weight: 700;
      letter-spacing: sizem(1.5);
      margin-top: sizem(35);
    }
    .swiper-section {
      @apply flex flex-col;
      gap: sizem(19);
      margin-top: sizem(32);
      padding-left: 0;
      .l {
        @apply flex flex-col items-end;
        .t {
          width: sizem(315);
          margin: 0 auto;
          border-top: 1px solid #fff;
          padding-top: sizem(21);
          .tt1 {
            @apply text-justify;
            font-size: sizem(13);
            font-weight: 400;
            letter-spacing: sizem(0.78);
          }
          .tt2 {
            font-size: sizem(15);
            font-weight: 700;
            letter-spacing: sizem(0.9);
            margin-top: sizem(15);
          }
          .tt3 {
            @apply text-[#CEAF73] bg-[#034150] text-center;
            width: sizem(87);
            height: sizem(25);
            line-height: sizem(25);
            font-size: sizem(13);
            font-weight: 700;
            letter-spacing: sizem(0.78);
            border-radius: sizem(8) 0 sizem(8) 0;
            margin-top: sizem(13);
          }
          .tt4 {
            font-size: sizem(13);
            font-weight: 500;
            letter-spacing: sizem(0.9);
            margin-top: sizem(12);
            line-height: 1.5;
          }
          .tt5 {
            font-size: sizem(13);
            font-weight: 700;
            letter-spacing: sizem(0.78);
            margin-top: sizem(13);
          }
        }
        .gold {
          width: sizem(301);
          margin: sizem(13) auto 0 auto;
        }
      }
      .r {
        width: sizem(315);
        border-left: 0;
        padding-left: 0;
        padding-top: sizem(25);
        border-top: 1px solid #fff;
        margin: 0 auto;
        .rt1 {
          font-size: sizem(15);
          font-weight: 700;
          letter-spacing: sizem(0.9);
          line-height: 1;
        }
        .swiper-box {
          width: sizem(315);
          height: sizem(216.12);
          margin-top: sizem(14);
          .slide-item {
            width: sizem(315);
            height: sizem(216.12);
            .caption {
              @apply absolute;
              bottom: sizem(5);
              left: sizem(8);
              font-size: sizem(12);
              font-weight: 700;
            }
          }
        }
        .timeline {
          @apply flex items-center;
          gap: sizem(12);
          margin-bottom: sizem(9);
          margin-top: sizem(10);
          span {
            font-size: sizem(15);
            font-weight: 700;
            letter-spacing: auto;
          }
          .line {
            &:nth-child(2) {
              @apply grow;
              width: auto;
            }
          }
        }
        .en {
          width: sizem(315);
          margin-top: 0;
        }
      }
    }
    .swiper-section .r .swiper-btns {
      display: none;
    }
    .last-swiper {
      padding: sizem(66) 0 sizem(32) 0;
      background-size: auto 100%;
      .ttt1 {
        font-size: sizem(25);
        line-height: sizem(35);
        font-weight: 700;
        letter-spacing: .06em;
      }
      .luxury {
        width: sizem(317.37);
        margin: 0 auto sizem(33) auto;
      }
      .ttt2 {
        font-size: sizem(13);
        line-height: sizem(22);
        font-weight: 400;
        letter-spacing: sizem(0.78);
        width: sizem(315);
        margin: 0 auto sizem(31) auto;
        text-align: left;
        letter-spacing: .06em;
      }
      .swiper-box {
        width: sizem(198);
        height: auto;
        // padding: sizem(12);
        padding: 0;
        margin-top: sizem(20);
        .swiper-wrapper {
          @apply w-full h-full;
          .slide-item {
            @apply relative bg-cover;
            width: 100%;
            height: sizem(328);
            margin-top: 0 !important;
            .caption {
              @apply absolute w-full;
              bottom: sizem(13);
              font-size: sizem(13);
              font-weight: 500;
              letter-spacing: sizem(0.13);
            }
          }
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const currentIdx = ref(0)
const splide = ref()
const splide2 = ref()
const onMove = (val, val2) => {
  currentIdx.value = val2
}
const imgs = [
  {
    img: new URL("../section/s2/11.jpg", import.meta.url).href,
    caption: "豐邑A8市政核心",
  },
  {
    img: new URL("../section/s2/1.webp", import.meta.url).href,
    caption: "浩瀚 森PARK 新竹",
  },
  {
    img: new URL("../section/s2/2.webp", import.meta.url).href,
    caption: "豐邑GREEN IN桃園龜山",
  },
  {
    img: new URL("../section/s2/3.webp", import.meta.url).href,
    caption: "豐邑氧森 森活 桃園龜山",
  },
  {
    img: new URL("../section/s2/6.webp", import.meta.url).href,
    caption: "浩瀚創立方 台中北屯",
  },
  {
    img: new URL("../section/s2/7.webp", import.meta.url).href,
    caption: "豐邑豐穗 台中北屯",
  },
  {
    img: new URL("../section/s2/8.webp", import.meta.url).href,
    caption: "豐邑Park One 臺中市西屯區",
  },
  {
    img: new URL("../section/s2/4.webp", import.meta.url).href,
    caption: "豐邑之森 新竹竹北",
  },
  {
    img: new URL("../section/s2/9.webp", import.meta.url).href,
    caption: "浩瀚無極 台南東區",
  },
  {
    img: new URL("../section/s2/5.webp", import.meta.url).href,
    caption: "浩瀚 景立方 台中北屯",
  },
  // {
  //   img: new URL("../section/s2/10.jpg", import.meta.url).href,
  //   caption: "豐邑TOP+ 高雄前金",
  // },
]

const imgs2 = [
  {
    img: new URL("../section/s2/a1.jpg", import.meta.url).href,
    caption: "新竹喜來登大飯店",
  },
  {
    img: new URL("../section/s2/a2.jpg", import.meta.url).href,
    caption: "MOXY飯店",
  },
  {
    img: new URL("../section/s2/a3.jpg", import.meta.url).href,
    caption: "台中逢甲商旅La Vida Hotel",
  },
  {
    img: new URL("../section/s2/a4.jpg", import.meta.url).href,
    caption: "FUNLIFE豐生活購物中心",
  },
]
</script>
