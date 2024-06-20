<template>
  <section class="s5 relative">
    <div class="line md:hidden" data-aos="line" data-aos-duration="1000" data-aos-delay="0"></div>
    <div class="content1">
      <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">國際底蘊雋譽美學<br>凝練鍛造雍容御邸</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">源自於生活品味的「雋品建築」</div>
      <div class="t3 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        取自雋永的「雋」與匯聚眾人智慧的「品」，<br>
        「雋品」自古即代表俊秀、超著的品格，<br>
        蘊含精品之意。以幾何方塊構成的「品」，<br>
        巧妙地融合建築、人與環境之間的精髓，
      </div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">「雋品建築」</div>
      <div class="t3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        厚積十年歷練，從公共建設到居住空間設計，<br>
        在國際上屢獲大獎肯定，也深受客戶口碑推崇，<br>
        「雋品建築」堅持講究細節，不斷突破創新，<br>
        展現超乎預期的精緻質感與細膩品味。
      </div>
    </div>

    <div class="slider">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="0"
        :centeredSlides="true"
        :loop="true"
        :navigation="false"
        :pagination="false"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/1.jpg" />
            <div class="txt">3D示意模擬圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/2.jpg" />
            <div class="txt">3D示意模擬圖</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative">
            <img src="@/section/s5/3.jpg" />
            <div class="txt">實景拍攝</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="content2">
      <div class="flex justify-between items-end mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1">《雍雋品》<br>中正區住宅大樓</div>
        <img class="logo" src="@/section/s5/logo.png" />
      </div>
      <div class="en" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">JADE POSH-GATHERING GREEN, FLOURISHING OPULENCE.</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">本案位於南海路，鄰近台北植物園，規劃住宅大樓建築外觀與公設空間與整體興建，榮獲2024芬蘭Arch設計大獎Arch Design Award－金獎、米蘭設計大獎MILAN Design Awards－銀獎。得獎推介：「尊重都市既存結構，融入周遭環境，呈現地段特有的人文價值與記憶，透過自然光影述說空間的層次與故事，形塑一處安定、自在雍然、濾除塵囂的居所」以都市涵構（Contextualism）和基地紋理作為設計出發點，構築最合乎當地樣貌與形式的建築。</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  background: rgba(0, 0, 0, .06);
  font-family: "Noto Serif TC";

  .line {
    position: absolute;
    top: size-m(-61);
    left: 50%;
    width: size-m(1);
    height: size-m(120);
    background: #000;
  }

  .content1 {
    text-align: center;
    padding: size-m(109) size-m(30) size-m(50) size-m(30);
    @media screen and (min-width:768px) {
      padding: size(160) size(0) size(115) size(0);
    }
    
    .t1 {
      color: #12352A;
      font-size: size-m(25);
      font-weight: 700;
      line-height: 150%;
      letter-spacing: .04em;
      margin-bottom: size-m(26.23);
      @media screen and (min-width:768px) {
        font-size: size(50);
        margin-bottom: size(68.23);
      }
    }

    .t2 {
      font-size: size-m(20);
      font-weight: 700;
      line-height: 205%;
      letter-spacing: .06em;
      margin-bottom: size-m(3);
      @media screen and (min-width:768px) {
        font-size: size(23);
        margin-bottom: size(0);
      }
    }

    .t3 {
      font-size: size-m(14);
      font-weight: 600;
      line-height: 205%;
      letter-spacing: .07em;
      @media screen and (min-width:768px) {
        font-size: size(19);
      }
    }
  }

  .content2 {
    padding: size-m(41.4) size-m(30) size-m(85) size-m(30);
    @media screen and (min-width:768px) {
      padding: size(61.33) size(0) size(110) size(0);
      width: size(817.68);
      margin: 0 auto;
    }

    .t1 {
      color: #12352A;
      font-size: size-m(20);
      font-weight: 700;
      line-height: 150%;
      letter-spacing: .04em;
      @media screen and (min-width:768px) {
        font-size: size(22);
      }
    }

    .logo {
      width: size-m(121.32);
      @media screen and (min-width:768px) {
        width: size(124.5);
      }
    }

    .en {
      color: #BBA693;
      font-size: size-m(11);
      line-height: 170%;
      margin-bottom: size-m(12.75);
      letter-spacing: -.03em;
      @media screen and (min-width:768px) {
        font-size: size(13);
        margin-bottom: size(21.75);
      }
    }

    .t2 {
      text-align: justify;
      font-size: size-m(14);
      font-style: normal;
      font-weight: 600;
      line-height: 205%;
      @media screen and (min-width:768px) {
        font-size: size(16);
      }
    }
  }

  .swiper-slide {
    width: size-m(315);
    margin: 0 size-m(5);
    @media screen and (min-width:768px) {
      width: size(870);
      margin: 0 size(50);
    }

    .txt {
      position: absolute;
      bottom: size-m(5);
      right: size-m(8);
      color: #FFF;
      font-family: "Noto Sans TC";
      font-size: size-m(12);
      line-height: 170%;
      @media screen and (min-width:768px) {
        bottom: size(7.5);
        right: size(11);
        font-size: size(14);
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper";
const modules = ref([Autoplay, Navigation, Pagination]);
</script>