<template>
  <section class="s8 user-n w-full relative bg-white z-[1]">
    <div class="ball ball1 absolute"></div>
    <div class="ball ball2 absolute hidden md:block"></div>
    <img class="bg w-full block md:hidden" src="@/section/s8/bg-m.jpg" />
    <img class="bg w-full hidden md:block" src="@/section/s8/bg.jpg" />
    <div class="content">
      <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">國家級規模 站上雙北C位</div>
      <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        「KING PARK國王大道」定錨副都心核心樞紐，<br class="md:hidden">
        以千坪規模純住宅稀有大基地、大開發、大建商，鼎足中原路、昌德街與昌平街三面臨路地王，<br>
        以國王高度，重新定義副都心尺度，已再無可複製的第二個基地，掌握成名先機，恭迎入主為王。
      </div>
      <div class="t3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        信義的風光，<br class="md:hidden">
        由你在KING PARK國王大道<br class="md:hidden">
        接棒稱王。
      </div>
    </div>
    <div class="info">建築3D透視</div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  letter-spacing: .08em;

  .ball1 {
    width: size-m(87);
    height: size-m(87);
    top: size-m(-20);
    right: size-m(30);
    transform: translateY(-20%);
    background-image: url(@/section/ball1.png);
    animation: ball 5s ease 0s infinite alternate;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(295);
      height: size(295);
      top: size(-125);
      right: size(128);
    }
  }

  .ball2 {
    transform: translateY(20%);
    background-image: url(@/section/ball1.png);
    animation: ball 8s ease 0s infinite alternate;
    z-index: 1;
    @media screen and (min-width:768px) {
      width: size(535);
      height: size(535);
      top: size(200);
      left: size(-226);
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: size-m(82) size-m(18) 0 size-m(18);
    text-align: center;
    @media screen and (min-width:768px) {
      padding: size(248) size(18) 0 size(18);
    }

    .t1 {
      font-size: size-m(28);
      font-weight: 500;
      line-height: size-m(40);
      margin-bottom: size-m(40);
      @media screen and (min-width:768px) {
        font-size: size(48);
        line-height: size(58);
        margin-bottom: size(24);
      }
    }

    .t2 {
      font-size: size-m(14);
      line-height: 160%;
      margin-bottom: size-m(40);
      @media screen and (min-width:768px) {
        font-size: size(16);
        margin-bottom: size(32);
      }
    }

    .t3 {
      font-size: size-m(18);
      font-weight: 500;
      line-height: 160%;
      letter-spacing: .12em;
      @media screen and (min-width:768px) {
        font-size: size(20);
        font-weight: 700;
      }
    }
  }

  .info {
    position: absolute;
    bottom: size-m(5);
    right: size-m(5);
    font-size: size-m(10);
    line-height: size-m(12);
    @media screen and (min-width:768px) {
      bottom: size(22);
      right: auto;
      left: size(26);
      font-size: size(13);
      line-height: size(16);
    }
  }
}
</style>

<script setup>
</script>