<template>
  <section class="s4 user-n w-full relative">
    <img class="logo absolute" src="@/section/s2/logo.svg" />
    <div class="line absolute" data-aos="cuscus" data-aos-delay="0"></div>
    <img class="small absolute" src="@/section/s4/small.webp" />
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">幸せはいつも自分<br class="md:hidden">の心が決める</div>
      <div class="t2">
        捷運北投站350米<br>
        一線直抵北車生活圈
      </div>
    </div>
    <div class="relative md:flex md:items-center md:justify-end md:flex-row-reverse">
      <div class="t3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <ol>
          <li><div>淡水信義線軌道要津，紅線捷運信義計劃輕鬆遊</div></li>
          <li><div>北投站、奇岩站雙捷運，資產向左向右價值逢源</div></li>
          <li><div>社區規劃通行捷運綠徑，樹蔭悠閒散步捷運直結</div></li>
          <li><div>捷運宅資產優勢支撐點，國家資源推升區域發展</div></li>
          <li><div>唯一支線通行溫泉觀光，新北投站攜行人流金脈</div></li>
        </ol>
      </div>
      <div class="img relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="w-full" src="@/section/s4/img.webp" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  background-image: url(@/section/s2/bg.webp);
  background-size: auto size-m(365);
  background-repeat: no-repeat;
  padding-top: size-m(124);
  @media (min-width: 768px) {
    background: none;
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
    background: #C9A063;
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
    color: #981F23;
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

  .t3 {
    font-family: "Noto Sans JP";
    font-size: size-m(12);
    font-weight: 500;
    line-height: 200%;
    letter-spacing: size-m(0.48);
    margin-bottom: size-m(50);
    padding-left: size-m(55);
    width: size-m(278 + 55);
    @media (min-width: 768px) {
      font-size: size(26);
      font-weight: 500;
      line-height: 230%;
      letter-spacing: size(0.52);
      margin-bottom: size(0);
      padding-left: size(112);
      width: size(670);
    }

    ol {
      margin: size-m(24) 0 0 0;
      padding-left: size-m(18);
      color: #981F23;
      font-family: "Noto Sans JP";
      font-size: size-m(11);
      font-style: normal;
      letter-spacing: size-m(0.22);
      list-style: outside;
      @media (min-width: 768px) {
        margin: size(50) 0 0 0;
        padding-left: size(24);
        font-size: size(18);
        letter-spacing: size(0.46);
      }

      div {
        color: #000;
        font-size: size-m(11);
        line-height: 163.6%;
        font-weight: 500;
        @media (min-width: 768px) {
          font-size: size(23);
        }
      }
    }
  }

  .img {
    img {
      width: 100%;
      height: size-m(304);
      object-fit: cover;
      @media (min-width: 768px) {
        width: size(1017);
        height: auto;
      }
    }

    .txt {
      bottom: size-m(14);
      right: size-m(16);
      color: #FFF;
      font-family: "Noto Sans JP";
      font-size: size-m(11);
      font-weight: 500;
      line-height: 163.6%;
      letter-spacing: size-m(0.22);
      @media (min-width: 768px) {
        bottom: size(33);
        right: size(49);
        font-size: size(24);
        letter-spacing: size(0.48);
      }
    }
  }
}
</style>

<script setup>
</script>
