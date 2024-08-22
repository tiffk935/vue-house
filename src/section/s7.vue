<template>
  <section class="s7 user-n w-full relative">
    <img class="logo absolute" src="@/section/s2/logo.svg" />
    <div class="line absolute" data-aos="cuscus" data-aos-delay="0"></div>
    <img class="small absolute" src="@/section/s7/small.jpg" />
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">幸せはいつも自分<br class="md:hidden" />の心が決める</div>
      <div class="t2">
        擁抱北區門戶計劃<br />
        懷抱北投優質核心
      </div>
      <div class="t3m md:hidden">
        906公頃北區門戶計劃，結合北士科、關渡洲美平原開發、生態社子島，5倍信義計劃規模，將為北投帶來戲劇性飛躍成長。<br />
        此時此刻，掌握北投無可取代商道核心、優質生活，碩樺拾樂是悠然自得最佳選。
      </div>
    </div>
    <div class="view">
      <View />
      <div class="hidden md:block t3">
        906公頃北區門戶計劃，結合北士科、關渡洲美平原開發、生態社子島，5倍信義計劃規模，將為北投帶來戲劇性飛躍成長。<br />
        此時此刻，掌握北投無可取代商道核心、優質生活，碩樺拾樂是悠然自得最佳選。
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  height: size-m(810);
  padding-top: size-m(124);
  background-image: url("@/section/s7/bgm.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    background-image: none;
    height: auto;
    padding-top: size(278);
  }

  .logo {
    top: size-m(22);
    left: size-m(25);
    width: size-m(48.24);
    @media (min-width: 768px) {
      top: size(82);
      left: size(79);
      width: size(85.38);
    }
  }

  .line {
    top: size-m(106);
    left: size-m(31);
    width: 1px;
    height: calc(100% - size-m(106) - size-m(304));
    background: #c9a063;
    transform-origin: 0 0;
    transition-duration: 2s !important;
    @media (min-width: 768px) {
      top: size(82);
      left: size(242);
      width: size(1);
      height: calc(100% - size(82) - size(716));
    }
  }

  .small {
    top: size-m(29);
    right: 0;
    width: size-m(80);
    @media (min-width: 768px) {
      top: size(82);
      right: 0;
      width: size(273);
    }
  }

  .t1 {
    color: #981f23;
    font-family: "Noto Sans JP";
    font-size: size-m(19);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: size-m(3.61);
    margin-bottom: size-m(60);
    padding-left: size-m(55);
    @media (min-width: 768px) {
      font-size: size(51);
      letter-spacing: size(3.57);
      margin-bottom: size(40);
      padding-left: size(398);
    }
  }

  .t2 {
    font-size: size-m(23);
    font-weight: 500;
    line-height: normal;
    letter-spacing: size-m(1.38);
    margin-bottom: size-m(21);
    padding-left: size-m(55);
    @media (min-width: 768px) {
      font-size: size(67);
      letter-spacing: size(0);
      margin-bottom: size(143);
      padding-left: size(398);
    }
  }

  .t3m {
    width: 100%;
    padding: 0 size-m(55);
    color: #000;
    font-family: "Noto Sans JP";
    font-size: size-m(12);
    font-weight: 500;
    line-height: 173.6%;
    letter-spacing: size-m(0.48);
    margin-bottom: size-m(75);
  }

  .view {
    @apply w-full relative;
    height: size-m(304);

    @media (min-width: 768px) {
      height: size(796);
    }

    .t3 {
      @apply absolute z-10 pointer-events-auto;
      bottom: size(70);
      right: size(58);
      width: size(373);
      color: #fff;
      font-family: "Noto Sans JP";
      font-size: size(26);
      font-style: normal;
      font-weight: 500;
      line-height: 163.6%;
      letter-spacing: size(0.52);
    }
  }
}
</style>

<script setup>
import View from "@/section/s7/view.vue"
</script>
