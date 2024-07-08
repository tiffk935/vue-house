<template>
  <section class="s3 w-full relative bg-[#EFEFEF]">
    <div class="content">
      <div class="text">
        <div class="t1" data-aos="fade-up" data-aos-delay="0">科技新未來</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">橋科預計2025年完工，鴻海、日月光等大廠進駐，<br>未來燕巢可說是北高雄蛋黃區。</div>
        <div class="t3" data-aos="fade-up" data-aos-delay="400">引進半導體、精準健康、智慧機械、航太及產業創新等產業，<br class="hidden md:block">預計年產值達1800億元，創造約1.1萬個就業機會。</div>
      </div>
      <div class="img relative">
        <img src="@/section/s3/img.jpg" />
        <div class="info absolute">情境示意圖</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @media screen and (min-width:768px) {
    padding: size(119) size(0) size(55);
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
    @media screen and (min-width:768px) {
      width: size(860);
    }

    img {
      width: 100%;
      height: size-m(405);
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
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