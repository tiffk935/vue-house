<template>
  <section class="s8 user-n w-full relative bg-[#5ACBBD] text-white">
    <div class="content">
      <div class="t1 text-[#FFFCB2] text-center">永恆建築 ｜ 友善環境 ｜ 細節至上</div>
      <div class="t2 text-[#FFFCB2] text-center">The Glory of Works</div>
      <div class="t3 text-center">The happiness of building</div>
      <div class="t4 text-center">合展建設  共築幸福</div>
      <div class="t5">
        永恆建築之本，始於友善環境，重視細節，<br>
        合展視建築為一個生命有機體，全心全意創造有品質的生活，<br class="hidden md:block">
        施工上以結構安全為第一優先考量；<br class="hidden md:block">
        室內格局機能站在使用者的立場滿足人性化的需求：<br class="hidden md:block">
        嚴選建材以國際品牌塑造出整體建築的優異質感，<br>
        同時創造讓客戶無後顧之憂的售後服務，<br>
        這是合展建築對消費者始終信守的承諾。
      </div>
      <div class="main text-[#000]">
        <img class="w-full block" src="@/section/s8/main.jpg" />
        <div class="item-info bg-white flex justify-between items-center">
          <div class="flex items-center">
            <div class="item-place">新<br class="md:hidden">北<br>汐<br class="md:hidden">止</div>
            <div class="item-slogon text-[#5ACBBD]">步月登雲 <br class="md:hidden">合砌大展</div>
          </div>
          <div class="item-name text-right">合展<br class="md:hidden">雲禾月</div>
        </div>
      </div>
    </div>

    <div class="slider text-[#000] md:hidden">
      <swiper
        :slidesPerView="'auto'"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/1.jpg" alt="">
            <div class="item-info bg-white flex justify-between items-center">
              <div class="flex items-center">
                <div class="item-place">桃園<br>青埔</div>
                <div class="item-slogon text-[#5ACBBD]">夢享成家<br>青青松松</div>
              </div>
              <div class="item-name text-right">合展享青松</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/2.jpg" alt="">
            <div class="item-info bg-white flex justify-between items-center">
              <div class="flex items-center">
                <div class="item-place">桃園<br>中路</div>
                <div class="item-slogon text-[#5ACBBD]">幸福合聲<br>好市發生</div>
              </div>
              <div class="item-name text-right">合展好市</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/3.jpg" alt="">
            <div class="item-info bg-white flex justify-between items-center">
              <div class="flex items-center">
                <div class="item-place">桃園<br>龜山</div>
                <div class="item-slogon text-[#5ACBBD]">天作之合<br>家禾之興</div>
              </div>
              <div class="item-name text-right">合展家禾</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/4.jpg" alt="">
            <div class="item-info bg-white flex justify-between items-center">
              <div class="flex items-center">
                <div class="item-place">桃園<br>中路</div>
                <div class="item-slogon text-[#5ACBBD]">近悦遠來<br>風禾日麗</div>
              </div>
              <div class="item-name text-right">合展悦禾</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/5.jpg" alt="">
            <div class="item-info bg-white flex justify-between items-center">
              <div class="flex items-center">
                <div class="item-place">桃園<br>觀音</div>
                <div class="item-slogon text-[#5ACBBD]">大觀所見<br>夫富合求</div>
              </div>
              <div class="item-name text-right">合展大觀富域</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/6.jpg" alt="">
            <div class="item-info bg-white flex justify-between items-center">
              <div class="flex items-center">
                <div class="item-place">桃園<br>大園</div>
                <div class="item-slogon text-[#5ACBBD]">賞心悦目<br>風恬月朗</div>
              </div>
              <div class="item-name text-right">合展悦恬</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img class="block w-full" src="@/section/s8/7.jpg" alt="">
            <div class="item-info bg-white flex justify-between items-center">
              <div class="flex items-center">
                <div class="item-place">桃園<br>青埔</div>
                <div class="item-slogon text-[#5ACBBD]">精采絕倫<br>美學蔓延</div>
              </div>
              <div class="item-name text-right">合展晶采學</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="marquee text-[#000] hidden md:block">
      <div class="inline-flex">
        <div class="flex" v-for="num in 2">
          <div class="item">
            <div class="relative">
              <img class="block w-full" src="@/section/s8/1.jpg" alt="">
              <div class="item-info bg-white flex justify-between items-center">
                <div class="flex items-center">
                  <div class="item-place">桃園<br>青埔</div>
                  <div class="item-slogon text-[#5ACBBD]">夢享成家<br>青青松松</div>
                </div>
                <div class="item-name text-right">合展享青松</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="relative">
              <img class="block w-full" src="@/section/s8/2.jpg" alt="">
              <div class="item-info bg-white flex justify-between items-center">
                <div class="flex items-center">
                  <div class="item-place">桃園<br>中路</div>
                  <div class="item-slogon text-[#5ACBBD]">幸福合聲<br>好市發生</div>
                </div>
                <div class="item-name text-right">合展好市</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="relative">
              <img class="block w-full" src="@/section/s8/3.jpg" alt="">
              <div class="item-info bg-white flex justify-between items-center">
                <div class="flex items-center">
                  <div class="item-place">桃園<br>龜山</div>
                  <div class="item-slogon text-[#5ACBBD]">天作之合<br>家禾之興</div>
                </div>
                <div class="item-name text-right">合展家禾</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="relative">
              <img class="block w-full" src="@/section/s8/4.jpg" alt="">
              <div class="item-info bg-white flex justify-between items-center">
                <div class="flex items-center">
                  <div class="item-place">桃園<br>中路</div>
                  <div class="item-slogon text-[#5ACBBD]">近悦遠來<br>風禾日麗</div>
                </div>
                <div class="item-name text-right">合展悦禾</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="relative">
              <img class="block w-full" src="@/section/s8/5.jpg" alt="">
              <div class="item-info bg-white flex justify-between items-center">
                <div class="flex items-center">
                  <div class="item-place">桃園<br>觀音</div>
                  <div class="item-slogon text-[#5ACBBD]">大觀所見<br>夫富合求</div>
                </div>
                <div class="item-name text-right">合展大觀富域</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="relative">
              <img class="block w-full" src="@/section/s8/6.jpg" alt="">
              <div class="item-info bg-white flex justify-between items-center">
                <div class="flex items-center">
                  <div class="item-place">桃園<br>大園</div>
                  <div class="item-slogon text-[#5ACBBD]">賞心悦目<br>風恬月朗</div>
                </div>
                <div class="item-name text-right">合展悦恬</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="relative">
              <img class="block w-full" src="@/section/s8/7.jpg" alt="">
              <div class="item-info bg-white flex justify-between items-center">
                <div class="flex items-center">
                  <div class="item-place">桃園<br>青埔</div>
                  <div class="item-slogon text-[#5ACBBD]">精采絕倫<br>美學蔓延</div>
                </div>
                <div class="item-name text-right">合展晶采學</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note text-[#000]">預推個案 合展青峰段<span>約</span>135戶 合展青平段二期<span>約</span>78戶 合展青平段三期<span>約</span>130戶</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  padding-top: size-m(41);
  @media screen and (min-width:768px) {
    padding: 0;
    width: 100%;
    height: size(1325);
  }

  .content {
    width: size-m(284);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: 100%;
      height: 100%;
    }
  }

  .t1 {
    font-size: size-m(13);
    line-height: size-m(19);
    font-weight: 600;
    letter-spacing: .25em;
    margin-bottom: size-m(3);
    @media screen and (min-width:768px) {
      font-size: size(18);
      line-height: size(26);
      margin-bottom: 0;
      position: absolute;
      top: size(80);
      right: size(37);
    }
  }

  .t2 {
    font-size: size-m(10);
    line-height: size-m(11);
    margin-bottom: size-m(44);
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: size(23);
      margin-bottom: 0;
      position: absolute;
      top: size(116);
      right: size(37);
    }
  }

  .t3 {
    font-size: size-m(16);
    line-height: size-m(18);
    margin-bottom: size-m(30);
    @media screen and (min-width:768px) {
      font-size: size(24);
      line-height: size(28);
      margin-bottom: 0;
      position: absolute;
      top: size(306);
      left: size(877);
    }
  }

  .t4 {
    font-size: size-m(28);
    line-height: 1;
    font-weight: 700;
    letter-spacing: .1em;
    margin-bottom: size-m(30);
    @media screen and (min-width:768px) {
      font-size: size(42);
      line-height: size(60);
      letter-spacing: .25em;
      margin-bottom: 0;
      position: absolute;
      top: size(344);
      left: size(877);
    }
  }

  .t5 {
    font-size: size-m(12);
    line-height: size-m(23);
    margin-bottom: size-m(33);
    @media screen and (min-width:768px) {
      font-size: size(18);
      line-height: size(35);
      margin-bottom: 0;
      position: absolute;
      top: size(424);
      left: size(877);
    }
  }

  .main {
    margin: 0 auto size-m(35) auto;
    box-shadow: size-m(9) size-m(19) size-m(10.7) rgba(0,0,0,.25);
    position: relative;
    z-index: 1;
    @media screen and (min-width:768px) {
      margin: 0;
      box-shadow: size(9) size(19) size(10.7) rgba(0,0,0,.25);
      width: size(683);
      position: absolute;
      top: size(80);
      left: size(96);
    }

    .item-info {
      padding: size-m(12);
      @media screen and (min-width:768px) {
        padding: size(22) size(22) size(22) size(33);
      }
    }

    .item-place {
      padding-right: size-m(13);
      position: relative;
      font-size: size-m(14);
      line-height: size-m(16);
      @media screen and (min-width:768px) {
        padding-right: size(29);
        font-size: size(18);
        line-height: size(25);
      }

      &:after {
        content: '';
        position: absolute;
        top: size-m(-6);
        right: 0;
        width: size-m(1);
        height: size-m(76);
        background: #5ACBBD;
        @media screen and (min-width:768px) {
          top: size(-7);
          width: size(1);
          height: size(63);
        }
      }
    }

    .item-slogon {
      font-size: size-m(18);
      line-height: size-m(25);
      margin-left: size-m(12);
      @media screen and (min-width:768px) {
        font-size: size(22);
        line-height: size(35);
        margin-left: size(28);
      }
    }

    .item-name {
      font-size: size-m(28);
      line-height: size-m(35);
      font-weight: 700;
      letter-spacing: .1em;
      @media screen and (min-width:768px) {
        font-size: size(28);
        line-height: size(34);
      }
    }
  }

  .slider {
    margin-bottom: size-m(30);

    .swiper-slide {
      width: size-m(275);
      margin-right: size-m(41);
    }

    .item-info {
      padding: size-m(7) size-m(10);
    }

    .item-place {
      padding-right: size-m(12);
      position: relative;
      font-size: size-m(9.57);
      line-height: size-m(13.7);

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: size-m(1);
        height: size-m(29);
        background: #5ACBBD;
      }
    }

    .item-slogon {
      font-size: size-m(10.93);
      line-height: size-m(15);
      margin-left: size-m(12);
    }

    .item-name {
      font-size: size-m(15);
      line-height: size-m(22);
      font-weight: 700;
      letter-spacing: .1em;
    }
  }

  .marquee {
    position: absolute;
    top: size(756);
    left: 0;
    width: 100%;
    
    .item {
      width: size(403);
      margin-right: size(60);
    }

    .item-info {
      padding: size(12) size(16);
    }

    .item-place {
      padding-right: size(19);
      position: relative;
      font-size: size(14);
      line-height: size(20);

      &:after {
        content: '';
        position: absolute;
        top: size(-1);
        right: 0;
        width: size(1);
        height: size(42);
        background: #5ACBBD;
      }
    }

    .item-slogon {
      font-size: size(16);
      line-height: size(22);
      margin-left: size(18);
    }

    .item-name {
      font-size: size(22);
      line-height: size(32);
      font-weight: 700;
      letter-spacing: .1em;
    }
  }

  .note {
    padding: size-m(8) 0 size-m(8) size-m(22);
    font-size: size-m(9.67);
    line-height: size-m(13.3);
    background: #FFFCB2;
    background: linear-gradient(90deg,rgba(255, 252, 178, 1) 80%, rgba(255, 252, 178, 0) 100%);
    @media screen and (min-width:768px) {
      width: size(807);
      padding: size(8) 0 size(8) size(64);
      font-size: size(16);
      line-height: size(22);
      position: absolute;
      top: size(1187);
      left: size(757);
    }

    span {
      font-size: size-m(7.25);
      @media screen and (min-width:768px) {
        font-size: size(12);
      }
    }
  }
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
const modules = ref([Autoplay, Navigation]);
let tween;
const v = 40; // 速率

onMounted(() => {
  if (!tween) {
    let duration = 10;
    if (document.querySelector('.s8 .marquee').style.display !== 'none') {
      duration = document.querySelector('.s8 .inline-flex').clientWidth / v;
    }
    tween = gsap.to('.s8 .inline-flex', { xPercent: -50, ease: 'none', duration: duration, repeat: -1 });
  }
});

window.addEventListener('resize', () => {
  if (document.querySelector('.s8 .marquee').style.display === 'none') return;
  if (tween) {
    const duration = document.querySelector('.s8 .inline-flex').clientWidth / v;
    tween.duration(duration);
  }
});
</script>