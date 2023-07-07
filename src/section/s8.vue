<template>
  <section class="s8 relative bg-[#00803F] text-white">
    <div class="content">
      <div class="title md:flex md:items-end" data-aos="fade-up" data-aos-delay="0">
        <div class="t1">高規建材</div>
        <div class="t2">致獻最愛</div>
      </div>
      <div class="t3" data-aos="fade-up" data-aos-delay="0">BUILDING MATERIALS</div>
      <div class="t4" data-aos="fade-up" data-aos-delay="0">全面拔高建材規格，精選實用與美感共存的配備，獻給為認真生活的你們。</div>
    </div>
    <div class="img relative">
      <img class="w-full" src="@/section/s8/1.jpg" />
      <img class="inner absolute" src="@/section/s8/inner.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
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
    font-size: size-m(30);
    font-family: 'Noto Serif TC';
    font-weight: 700;
    line-height: 103%; 
    margin-bottom: size-m(49);
    @media screen and (min-width:768px) {
      font-size: size(82); 
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
      padding: 0;
    }

    img {
      height: size-m(366);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: 100%;
      }
    }

    .inner {
      width: size-m(308);
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (min-width:768px) {
        width: size(773.62);
      }
    }
  }
}
</style>

<script>
</script>