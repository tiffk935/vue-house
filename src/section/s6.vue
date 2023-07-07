<template>
  <section class="s6 relative bg-[#00803F] text-white">
    <div class="content">
      <div class="title md:flex md:items-end" data-aos="fade-up" data-aos-delay="0">
        <div class="t1">天際上的</div>
        <div class="t2">一道自然風</div>
      </div>
      <div class="t3" data-aos="fade-up" data-aos-delay="0">清透語彙 吾印美學</div>
      <div class="t4" data-aos="fade-up" data-aos-delay="0">【艾美綠河】站立15層視野，以明德新村的林蔭大道為靈感，退居旁觀角度，打造清透自然、織白、木紋繡起的建築形象，讓建築無違和地藏進樹海風景，將綠色風光邀進日常。</div>
    </div>
    <div class="img relative">
      <img class="w-full" src="@/section/s6/1.webp" />
      <div class="img-txt absolute">3D外觀示意圖</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  @media screen and (min-width:768px) {
    display: flex;
    align-items: stretch;
  }

  .content {
    padding: size-m(55.37) size-m(32.6) size-m(53.26) size-m(32.6);
    @media screen and (min-width:768px) {
      padding: size(150) size(90) size(130) size(90);
      width: calc(100% - size(1170));
    }
  }

  .title {
    @media screen and (min-width:768px) {
      margin-bottom: size(81);
    }
  }

  .t1 {
    font-size: size-m(30); 
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(13);
    @media screen and (min-width:768px) {
      font-size: size(82); 
      width: size(73);
      margin: 0 size(32) 0 0;
    }
  }

  .t2 {
    font-size: size-m(24);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(49);
    @media screen and (min-width:768px) {
      font-size: size(71); 
      width: size(73);
      margin: 0;
    }
  }

  .t3 {
    font-size: size-m(18);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 150%; 
    padding-bottom: size-m(13);
    margin-bottom: size-m(13);
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(32);
      padding-bottom: size(30.31);
      margin-bottom: size(36.32);
      display: inline-block;
    }

    &:after {
      content: '';
      width: size-m(150);
      height: size-m(2);
      background: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      @media screen and (min-width:768px) {
        width: size(256);
        height: size(2);
      }
    }
  }

  .t4 {
    text-align: justify;
    font-size: size-m(13);
    font-family: 'Noto Sans TC';
    line-height: 170%; 
    @media screen and (min-width:768px) {
      font-size: size(22);
    }
  }

  .img {
    @media screen and (min-width:768px) {
      width: size(1170);

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .img-txt {
    font-size: size-m(12);
    font-weight: 500;
    line-height: normal; 
    left: size-m(4.5);
    bottom: size-m(4);
    @media screen and (min-width:768px) {
      font-size: size(15);
      left: size(14);
      bottom: size(11);
    }
  }
}
</style>

<script>
</script>