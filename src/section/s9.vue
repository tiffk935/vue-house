<template>
  <section class="s9 user-n w-full relative bg-white text-[#000]">
    <div class="md:hidden">
      <div class="banner">
        <div class="t1 text-white">HOME & BOUTIQUE</div>
        <div class="t2 text-white">建材質地</div>
        <div class="t3">淬鍊不凡 一寓珍藏</div>
        <div class="t4">Crafted with Timeless Materials</div>
      </div>

      <div class="slider md:hidden">
        <swiper
          :spaceBetween="0"
          :navigation="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :loop="true"
          :modules="modules"
        >
          <swiper-slide>
            <div class="slide1">
              <div class="brand alfa">
                <img src="@/section/s9/alfa.svg" alt="">
                <div class="t1">戴雲發Alfa Safe柱中柱工法</div>
                <div class="t2">穩定實力 住的安心</div>
              </div>
              <div class="brand ykk">
                <img src="@/section/s9/ykk.svg" alt="">
                <div class="mb-[1.5em]">
                  <div class="t1">YKKap氣密窗</div>
                  <div class="t2">制音取靜 居境恬謐</div>
                </div>
                <div>
                  <div class="t1">LOW-E玻璃</div>
                  <div class="t2">5mm+5mm膠合玻璃 隔熱隔音 防暴防盗</div>
                </div>
              </div>
              <div class="brand daisin">
                <img src="@/section/s9/daisin.svg" alt="">
                <div class="t1">大信防水</div>
                <div class="t2">世界级耐久性防水防護系统</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide2">
              <div class="brand litai">
                <img src="@/section/s9/litai.svg" alt="">
                <div class="t1">力泰水泥</div>
              </div>
              <div class="row row-bot">
                <div class="brand sharp">
                  <img src="@/section/s9/sharp.svg" alt="">
                  <div class="t1">電子鎖+<br>空氣清淨機</div>
                </div>
                <div class="brand lifegear">
                  <img src="@/section/s9/lifegear.svg" alt="">
                  <div class="t1">暖風機</div>
                </div>
              </div>
              <div class="row row-bot">
                <div class="brand taya">
                  <img src="@/section/s9/taya.svg" alt="">
                  <div class="t1">廚具</div>
                </div>
                <div class="brand bwt">
                  <img src="@/section/s9/bwt.svg" alt="">
                  <div class="t1">社區淨水</div>
                </div>
              </div>
              <div class="row">
                <div class="brand masada">
                  <img src="@/section/s9/masada.svg" alt="">
                  <div class="t1">永佳捷<br>智能電梯</div>
                </div>
                <div class="brand glemgas">
                  <img src="@/section/s9/glemgas.svg" alt="">
                  <div class="t1">洗碗機</div>
                </div>
              </div>
              <div class="row">
                <div class="brand rinnai">
                  <img src="@/section/s9/rinnai.svg" alt="">
                  <div class="t1">廚房雙機</div>
                </div>
                <div class="brand linax">
                  <img src="@/section/s9/linax.svg" alt="">
                  <div class="t1">衛浴</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="pc-content hidden md:block">
      <div class="top-sec">
        <div class="content">
          <div class="en">
            <div class="t1">HOME & BOUTIQUE</div>
            <div class="t2">Crafted with Timeless Materials</div>
          </div>
          <div class="zh">
            <div class="t1 text-[#5ACBBD]">建材質地</div>
            <div class="line"></div>
            <div class="t2">淬鍊不凡 一寓珍藏</div>
          </div>

          <div class="brand alfa">
            <img src="@/section/s9/alfa.svg" alt="">
            <div class="t1">戴雲發Alfa Safe柱中柱工法</div>
            <div class="t2">穩定實力 住的安心</div>
          </div>
          <div class="brand ykk">
            <img src="@/section/s9/ykk.svg" alt="">
            <div class="flex justify-center">
              <div>
                <div class="t1">YKKap氣密窗</div>
                <div class="t2">制音取靜 居境恬謐</div>
              </div>
              <div>
                <div class="t1">LOW-E玻璃</div>
                <div class="t2">5mm+5mm膠合玻璃 隔熱隔音 防暴防盗</div>
              </div>
            </div>
          </div>
          <div class="brand daisin">
            <img src="@/section/s9/daisin.svg" alt="">
            <div class="t1">大信防水</div>
            <div class="t2">世界级耐久性防水防護系统</div>
          </div>

        </div>
        <div class="img relative">
          <img class="block w-full" src="@/section/s9/img2.jpg" alt="">
          <div class="info text-white">情境示意圖</div>
        </div>
      </div>
      
      <div class="hr"></div>

      <div class="bottom-sec">
        <div class="brands">
          <div class="brand litai">
            <img src="@/section/s9/litai.svg" alt="">
            <div class="t1">力泰水泥</div>
          </div>
          <div class="brand masada">
            <img src="@/section/s9/masada.svg" alt="">
            <div class="t1">永佳捷智能電梯</div>
          </div>
          <div class="brand bwt">
            <img src="@/section/s9/bwt.svg" alt="">
            <div class="t1">社區淨水</div>
          </div>
          <div class="brand sharp">
            <img src="@/section/s9/sharp.svg" alt="">
            <div class="t1">電子鎖+空氣清淨機</div>
          </div>
          <div class="brand rinnai">
            <img src="@/section/s9/rinnai.svg" alt="">
            <div class="t1">廚房雙機</div>
          </div>
          <div class="brand glemgas">
            <img src="@/section/s9/glemgas.svg" alt="">
            <div class="t1">洗碗機</div>
          </div>
          <div class="brand taya">
            <img src="@/section/s9/taya.svg" alt="">
            <div class="t1">廚具</div>
          </div>
          <div class="brand lifegear">
            <img src="@/section/s9/lifegear.svg" alt="">
            <div class="t1">暖風機</div>
          </div>
          <div class="brand linax">
            <img src="@/section/s9/linax.svg" alt="">
            <div class="t1">衛浴</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  .banner {
    width: 100%;
    height: size-m(321);
    background-image: url(@/section/s9/img.jpg);
    background-size: 307% auto;
    background-position: 56% 57%;
    padding-top: size-m(35);
    text-align: center;

    .t1 {
      font-size: size-m(10);
      line-height: 100%;
      text-transform: uppercase;
      margin-bottom: size-m(14);
    }

    .t2 {
      font-weight: 800;
      font-size: size-m(34);
      line-height: size-m(49);
      letter-spacing: .25em;
      margin-bottom: size-m(12);
    }

    .t3 {
      font-weight: 600;
      font-size: size-m(16);
      line-height: size-m(23);
      letter-spacing: .25em;
      margin-bottom: size-m(5);
    }

    .t4 {
      font-size: size-m(8);
      line-height: size-m(9);
    }
  }

  .slider {
    .brand {
      text-align: center;
      margin-bottom: size-m(62);

      &:last-child {
        margin-bottom: 0;
      }

      img {
        margin: 0 auto size-m(10) auto;
      }

      .t1 {
        font-weight: 700;
        font-size: size-m(19);
        line-height: size-m(27);
        letter-spacing: .1em;
        margin-bottom: size-m(7);
      }

      .t2 {
        font-size: size-m(12);
        line-height: size-m(24);
        letter-spacing: .1em;
        margin-bottom: size-m(7);
      }
    }

    .slide1 {
      padding: size-m(48) 0 size-m(64) 0;
    }

    .slide2 {
      padding: size-m(40) size-m(58) size-m(34) size-m(58);

      .brand {
        margin-bottom: size-m(30);

        .t1 {
          font-size: size-m(15);
        }
      }
      
      .row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .brand {
          width: 50%;
        }

        &:last-child .brand {
          margin-bottom: 0;
        }

        &.row-bot {
          align-items: flex-end;
        }
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(34);
      height: size-m(34);
      top: size-m(327);
      --swiper-navigation-sides-offset: #{size-m(18)};
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      &:after {
        display: none;
      }

      &.swiper-button-prev {
        background-image: url('data:image/svg+xml,<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1133 7.37109L7.37143 16.9528L22.1133 26.5355" stroke="%23CBCBCB" stroke-width="1.47418"/><circle cx="16.9531" cy="16.9531" r="16.216" transform="matrix(-1 0 0 1 33.9062 0)" stroke="%23CBCBCB" stroke-width="1.47418"/></svg>');
      }

      &.swiper-button-next {
        background-image: url('data:image/svg+xml,<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.793 7.37109L26.5348 16.9528L11.793 26.5355" stroke="%23CBCBCB" stroke-width="1.47418"/><circle cx="16.9531" cy="16.9531" r="16.216" stroke="%23CBCBCB" stroke-width="1.47418"/></svg>');
      }
    }
  }

  .pc-content {
    .top-sec {
      padding: size(83) size(98) size(77) 0;
      display: flex;
      justify-content: flex-end;

      .content {
        width: size(759);

        .en {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: size(10);

          .t1 {
            font-size: size(24);
            line-height: size(28);
          }

          .t2 {
            font-size: size(20);
            line-height: size(23);
          }
        }

        .zh {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: size(128);

          .t1 {
            font-size: size(42);
            line-height: size(60);
            letter-spacing: .25em;
            font-weight: 900;
          }

          .line {
            flex: 1;
            height: size(1);
            background: #000;
            margin: 0 size(25) 0 size(10);
          }

          .t2 {
            font-size: size(18);
            line-height: size(26);
            letter-spacing: .25em;
            font-weight: 600;
          }
        }
      }

      .img {
        width: size(673);
        margin-left: size(160);

        .info {
          position: absolute;
          bottom: size(11);
          right: size(14);
          font-size: size(14);
          line-height: size(22);
          filter: drop-shadow(0 0 size(5) #000);
        }
      }
    }

    .hr {
      width: size(1602);
      height: size(2);
      background: #BFBFBF;
      margin: 0 auto;
    }

    .bottom-sec {
      .t1 {
        font-size: size(20);
        line-height: size(29);
      }
    }
  }

  .brand {
    text-align: center;
    @media screen and (min-width:768px) {
      margin-bottom: size(89);

      &:last-child {
        margin-bottom: 0;
      }
    }

    img {
      @media screen and (min-width:768px) {
        margin: 0 auto size(10) auto;
      }
    }

    .t1 {
      font-size: size(28);
      line-height: size(34);
      font-weight: 700;
      margin-bottom: size(16);
    }

    .t2 {
      font-size: size(18);
      line-height: size(35);
    }

    &.ykk .flex > div {
      margin: 0 size(37);
    }
  }

  .bottom-sec {
    padding: size(76) 0;

    .brands {
      width: size(1192);
      height: size(369);
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .brand {
        width: size(379);
        height: size(71);
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(3n+2) {
          width: size(384);
        }

        &:nth-child(3n) {
          width: size(237);
        }

        img {
          margin: 0;
        }

        .t1 {
          margin: 0 0 0 size(30);
        }
      }
    }
  }

  .alfa img {
    width: size-m(100);
    @media screen and (min-width:768px) {
      width: size(149);
    }
  }
  .ykk img {
    width: size-m(56);
    @media screen and (min-width:768px) {
      width: size(83);
    }
  }
  .daisin img {
    width: size-m(127);
    @media screen and (min-width:768px) {
      width: size(189);
    }
  }
  // .litai {
  //   width: 100%;
  // }
  .litai img {
    @media screen and (min-width:768px) {
      width: size(53.02);
    }
  }
  .sharp img {
    width: size-m(120);
    @media screen and (min-width:768px) {
      width: size(159.74);
    }
  }
  .lifegear img {
    width: size-m(102);
    @media screen and (min-width:768px) {
      width: size(135.54);
    }
  }
  .taya img {
    width: size-m(88);
    @media screen and (min-width:768px) {
      width: size(116.87);
    }
  }
  .bwt img {
    width: size-m(87);
    @media screen and (min-width:768px) {
      width: size(115.37);
    }
  }
  .masada img {
    width: size-m(78);
    @media screen and (min-width:768px) {
      width: size(103);
    }
  }
  .glemgas img {
    width: size-m(104);
    @media screen and (min-width:768px) {
      width: size(138.22);
    }
  }
  .rinnai img {
    width: size-m(97);
    @media screen and (min-width:768px) {
      width: size(128.77);
    }
  }
  .linax img {
    width: size-m(95);
    @media screen and (min-width:768px) {
      width: size(125.88);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
const modules = ref([Autoplay, Navigation]);
</script>