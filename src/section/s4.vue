<template>
  <section class="s4 w-full relative bg-[#EFEFEF]">
    <div class="content">
      <div class="text">
        <div class="t1" data-aos="fade-up" data-aos-delay="0">交通新未來</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">捷運紫線計劃，串聯高雄大學城、兩大醫療中心</div>
        <div class="t3" data-aos="fade-up" data-aos-delay="400">「捷運紫線計畫」途經 文藻、左營高中、高雄大學、<br class="hidden md:block">義大醫學院、樹德科大、榮總、義大、佛光山。</div>
      </div>
      <div class="img relative">
        <img src="@/section/s4/img.jpg" data-aos="zoom-out" data-aos-delay="200"/>
        <div class="mask1 absolute"></div>
        <div class="mask2 absolute"></div>
        <div class="info absolute">高雄捷運示意圖</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  @media screen and (min-width:768px) {
    padding: size(152) size(0) size(202);
  }

  .content {
    @media screen and (min-width:768px) {
      width: size(1580);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .text {
    padding: size-m(54) size-m(30) size-m(31);
    @media screen and (min-width:768px) {
      padding: size(33) size(0) size(0);
      width: size(578);
      position: relative;
      z-index: 1;
    }

    .t1 {
      color: #006457;
      text-align: center;
      font-size: size-m(25);
      font-weight: 700;
      letter-spacing: .02em;
      padding-bottom: size-m(15);
      margin-bottom: size-m(13);
      border-bottom: size-m(1) solid #006457;
      @media screen and (min-width:768px) {
        text-align: left;
        font-size: size(54);
        padding-bottom: size(19);
        margin-bottom: size(19);
        border-bottom: size(1) solid #006457;
      }
    }

    .t2 {
      color: #006457;
      text-align: center;
      font-size: size-m(14);
      font-weight: 700;
      line-height: 150%;
      margin-bottom: size-m(28);
      @media screen and (min-width:768px) {
        text-align: left;
        font-size: size(24);
        margin-bottom: size(92);
        letter-spacing: .02em;
      }
    }

    .t3 {
      text-align: justify;
      font-size: size-m(12);
      font-weight: 500;
      line-height: 175%;
      @media screen and (min-width:768px) {
        font-size: size(20);
      }
    }
  }

  .img {
    width: 100%;
  overflow: hidden;
    @media screen and (min-width:768px) {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: size(1400);
    }

    img {
      width: 100%;
      height: size-m(388);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: 100%;
      }
    }

    .mask1 {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
        top: 0;
        left: 0;
        width: size(678);
        height: 100%;
        background: linear-gradient(90deg, #EFEFEF 30%, rgba(239, 239, 239, 0.00) 100%);
      }
    }

    .mask2 {
      top: 0;
      left: 0;
      width: 100%;
      height: size-m(302);
      background: linear-gradient(180deg, #EFEFEF 0%, rgba(239, 239, 239, 0.00) 100%);
      @media screen and (min-width:768px) {
        display: none;
      }
    }

    .info {
      bottom: size-m(10);
      right: size-m(10);
      color: #FFF;
      text-shadow: 0 size-m(4) size-m(4) rgba(0, 0, 0, 0.55);
      font-size: size-m(12);
      font-weight: 600;
      @media screen and (min-width:768px) {
        bottom: size(10);
        right: size(10);
        color: #FFF;
        text-shadow: 0 size(4) size(4) rgba(0, 0, 0, 0.55);
        font-size: size(15);
      }
    }
  }
}
</style>

<script setup>
</script>