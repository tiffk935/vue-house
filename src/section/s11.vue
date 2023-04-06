<template>
  <section class="s11 relative">
    <div class="content absolute">
      <div class="title" data-aos="fade-up">住戶獨家獨棟 <br class="hidden md:block">私藏第二會館</div>
      <div class="txt" data-aos="fade-up">【美地莊園】住戶才能享受私人美地會館，<br>公設再進化、享受再升級！</div>
      <div class="photo relative" data-aos="fade-up">
        <img class="w-full block" src="@/section/s11/img1.jpg" />
        <div class="info absolute">3D示意圖</div>
      </div>
    </div>
    <div class="img absolute">
      <img class="w-full block" src="@/section/s11/img2.jpg" />
      <div class="info absolute">3D示意圖</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size-m(665);
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .content {
    width: 100%;
    height: size-m(350);
    left: 0;
    top: 0;
    padding: size-m(28) size-m(20) size-m(23) size-m(20);
    color: #fff;
    text-align: center;
    background: linear-gradient(189.69deg, #EDE9E5 2.54%, #CDB69C 11.9%, #BB9E7F 19.88%);
    @media screen and (min-width:768px) {
      width: size(567);
      height: size(1080);
      padding: size(217) size(41) size(170) size(49);
    }

    .title {
      font-family: 'Noto Serif TC';
      font-weight: 500;
      font-size: size-m(24);
      line-height: size-m(34);
      letter-spacing: 0.08em;
      margin-bottom: size-m(11.53);
      @media screen and (min-width:768px) {
        font-size: size(59);
        line-height: size(85);
        margin-bottom: size(31);
      }
    }

    .txt {
      font-weight: 500;
      font-size: size-m(13);
      line-height: size-m(25);
      margin-bottom: size-m(11.64);
      @media screen and (min-width:768px) {
        font-size: size(25);
        line-height: size(55);
        margin-bottom: size(70);
      }
    }

    img {
      height: size-m(179);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    .info {
      bottom: size-m(1.53);
      right: size-m(10.39);
      font-weight: 500;
      font-size: size-m(12);
      line-height: size-m(17);
      text-align: justify;
      letter-spacing: -0.03em;
      color: #000;
      @media screen and (min-width:768px) {
        bottom: size(5);
        right: size(10);
        font-size: size(13);
        line-height: size(19);
      }
    }
  }

  .img {
    width: 100%;
    height: size-m(315);
    left: 0;
    top: size-m(350);
    @media screen and (min-width:768px) {
      width: size(1353);
      height: size(1080);
      left: size(567);
      top: size(0);
    }

    img {
      height: 100%;
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }

    .info {
      bottom: size-m(5);
      right: size-m(10);
      font-weight: 500;
      font-size: size-m(12);
      line-height: size-m(17);
      text-align: justify;
      letter-spacing: -0.03em;
      color: #000;
      @media screen and (min-width:768px) {
        bottom: size(10);
        right: size(10);
        font-size: size(13);
        line-height: size(19);
      }
    }
  }
}
</style>

<script setup>
</script>