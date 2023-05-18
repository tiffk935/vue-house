<template>
  <section class="s12 relative text-white">
    <Transition>
      <div v-if="currTab === 2">
        <div class="slider absolute">
          <swiper
            :pagination="{
              clickable: true
            }"
            :navigation="true"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :modules="modules"
          >
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/2-1.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/2-2.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/2-3.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/2-4.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/2-5.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="content absolute">
          <div class="t1 fade">戶戶迎向公園綠景<span><span style="display: inline; writing-mode: horizontal-tb; line-height: 1;">24</span>坪  <span style="display: inline; writing-mode: horizontal-tb; line-height: 1;">2</span>房 ／ <span style="display: inline; writing-mode: horizontal-tb; line-height: 1;">2</span>衛</span></div>
          <div class="txt fade">
            ‧落地景觀陽台，私納社子公園綠意<br>
            ‧臥室低台度開窗設計，自然光通透全室<br>
            ‧挑高<span style="display: inline; writing-mode: horizontal-tb; line-height: 1.3;">3.3</span>米，空間感受舒適不壓迫<br>
            ‧無走道虛坪空間浪費，格局規劃坪效高<br>
            ‧樑柱外推設計，室內格局方正好規劃
          </div>
        </div>
      </div>
    </Transition>
    <Transition>
      <div v-if="currTab === 3">
        <div class="slider absolute">
          <swiper
            :pagination="{
              clickable: true
            }"
            :navigation="true"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :modules="modules"
          >
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/3-1.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/3-2.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/3-3.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/3-4.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
            <swiper-slide>
              <img class="w-full block" src="@/section/s12/3-5.jpg" />
              <div class="txt">樣品屋裝潢情境參考示意圖，其中裝修建材、傢俱飾品、植栽畫作<br class="md:hidden">等為設計表現，實際依買賣合約書為準。</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="content absolute">
          <div class="t1 fade">栽植家的美好故事<span><span style="display: inline; writing-mode: horizontal-tb; line-height: 1;">39</span>坪  <span style="display: inline; writing-mode: horizontal-tb; line-height: 1;">3</span>房 ／ <span style="display: inline; writing-mode: horizontal-tb; line-height: 1;">2</span>衛</span></div>
          <div class="txt fade">
            ‧雙陽台規劃，景觀陽台私納社子公園綠意<br>
            ‧邊間三面採光，自然光通透全室<br>
            ‧雙衛浴皆開窗，主衛規劃四件式衛浴<br>
            ‧臥室皆可放雙人床<br>
            ‧挑高<span style="display: inline; writing-mode: horizontal-tb; line-height: 1.3;">3.3</span>米，空間感受舒適不壓迫<br>
            ‧樑柱外推設計，室內格局方正好規劃
          </div>
        </div>
      </div>
    </Transition>

    <div :class="['tab2', 'absolute', {active: currTab === 2}]" @click="currTab = 2">
      <div>2<span>房</span></div>
    </div>
    <div :class="['tab3', 'absolute', {active: currTab === 3}]" @click="currTab = 3">
      <div>3<span>房</span></div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  width: 100%;
  height: size-m(797);
  background: linear-gradient(180.82deg, #0A675F 6.4%, #11A196 93.93%);
  @media screen and (min-width:768px) {
    height: size(1124);
    background: #004B47;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .slider {
    position: absolute;
    top: size-m(114);
    left: 0;
    width: size-m(375);
    @media screen and (min-width:768px) {
      top: size(0);
      width: size(1920);
    }

    img {
      height: size-m(328);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: size(1004);
      }
    }

    .txt {
      position: absolute;
      bottom: size-m(7);
      left: size-m(5);
      font-family: 'Noto Sans TC';
      font-weight: 500;
      font-size: size-m(10);
      line-height: size-m(12);
      @media screen and (min-width:768px) {
        bottom: size(13);
        left: size(29);
        font-size: size(13);
        line-height: size(15);
      }
    }

    .swiper-button-prev, .swiper-button-next {
      width: size-m(17);
      height: size-m(17);
      background-size: contain;
      background-repeat: no-repeat;
      @media screen and (min-width:768px) {
        width: size(56);
        height: size(56);
      }

      &:after {
        display: none;
      }
    }

    .swiper-button-prev {
      background-position: left;
      background-image: url(@/section/s11/arrow-left-m.svg);
      left: size-m(6);
      @media screen and (min-width:768px) {
        left: size(27);
        background-image: url(@/section/s11/arrow-left.svg);
      }
    }

    .swiper-button-next {
      background-position: right;
      background-image: url(@/section/s11/arrow-right-m.svg);
      right: size-m(6);
      @media screen and (min-width:768px) {
        right: size(27);
        background-image: url(@/section/s11/arrow-right.svg);
      }
    }

    .swiper-pagination {
      line-height: 1;
      top: size-m(10);
      bottom: auto;
      right: size-m(10);
      left: auto;
      width: auto;
      @media screen and (min-width:768px) {
        right: size(27);
      }

      .swiper-pagination-bullet {
        width: size-m(8);
        height: size-m(8);
        margin: 0 size-m(3.6);
        background: none;
        border: size-m(1) solid #fff;
        opacity: 1;
        @media screen and (min-width:768px) {
          width: size(16);
          height: size(16);
          margin: 0 size(7);
          border: size(1) solid #fff;
        }

        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }
  }

  .content {
    // width: size-m(290);
    top: size-m(506);
    left: size-m(45);
    text-align: justify;
    z-index: 1;
    @media screen and (min-width:768px) {
      top: size(0);
      left: size(101);
      width: size(220);
      background: linear-gradient(0deg, rgba(17, 161, 150, 0.3) -11.37%, #004B47 99.89%);
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
      gap: size(36);
      flex-direction: column;
    }

    .t1 {
      font-family: 'Noto Serif TC';
      font-size: size-m(21);
      line-height:1.34;
      font-weight: 700;
      margin-bottom: size-m(9.5);
      letter-spacing: .03em;
      @media screen and (min-width:768px) {
        font-size: size(33);
        line-height: 1.4;
        margin: size(48.43) auto 0 auto;
        padding: 0;
        writing-mode: vertical-rl;
        white-space: nowrap;
      }

      span {
        display: block;
        font-size: size-m(23);
        @media screen and (min-width:768px) {
          font-size: size(36);
        }
      }
    }

    .txt {
      font-size: size-m(15);
      line-height:1.5;
      margin-bottom: size-m(24.5);
      font-weight: 300;
      letter-spacing: 0em;
      font-family: 'Noto sans TC';
      @media screen and (min-width:768px) {
        font-size: size(19);
        line-height: 1.7;
        font-weight: 200;
        letter-spacing: .2em;
        margin:0 auto 1.6em auto;
        writing-mode: vertical-rl;
        white-space: nowrap;
      }
    }
  }

  .tab2, .tab3 {
    top: size-m(80);
    left: size-m(19);
    width: size-m(68);
    height: size-m(68);
    background: #AADECE;
    border: size-m(1.88) solid #CCE3D7;
    opacity: 0.8;
    z-index: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Serif TC';
    font-weight: 500;
    font-size: size-m(35);
    line-height: 1;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    cursor: pointer;
    @media screen and (min-width:768px) {
      top: size(900);
      left: size(1534);
      width: size(145);
      height: size(145);
      border: size(1.88) solid #CCE3D7;
      font-size: size(70);
    }

    span {
      font-size: size-m(20);
      line-height: 1;
      @media screen and (min-width:768px) {
        font-size: size(35);
      }
    }

    &.active {
      background: #5CBD9E;
      opacity: 1;
      z-index: 2;
    }
  }

  .tab3 {
    left: size-m(81);
    @media screen and (min-width:768px) {
      left: size(1659);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);
const currTab = ref(2);
</script>