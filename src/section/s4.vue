<template>
  <section class="s4 user-n w-full relative">
    <div class="content">
      <div class="en relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="w-full block" src="@/section/s4/en.svg" />
        <img class="star block absolute" src="@/section/s2/star.svg" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title font-bold">
          <div>新世代住居新思維</div>
        </div>
        <div class="desc">2-3 房，住同社區不同戶，相互照應</div>
      </div>
    </div>
    <div class="img relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="img-en block absolute" src="@/section/s4/img-en.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  padding: 0 0 size-m(14) 0;
  @media screen and (min-width:768px) {
    display: flex;
    justify-content: space-between;
    padding: size(66) size(60) size(78) 0;
  }

  .content {
    padding: size-m(38) 0 0 0;
    @media screen and (min-width:768px) {
      padding: size(48) 0 0 0;
    }
  }

  .en {
    width: size-m(308);
    margin: 0 0 size-m(26) size-m(9);
    @media screen and (min-width:768px) {
      width: size(535);
      margin: 0 0 size(49) size(59);
    }

    .star {
      width: size-m(28);
      bottom: 0;
      left: size-m(280);
      @media screen and (min-width:768px) {
        width: size(55);
        left: size(488);
      }
    }
  }

  .title {
    width: size-m(352);
    font-size: size-m(23.28);
    line-height: size-m(28);
    margin-bottom: size-m(9);
    @media screen and (min-width:768px) {
      width: size(628);
      font-size: size(27);
      line-height: size(32);
      margin-bottom: size(10);
    }

    div {
      padding-left: size-m(14);
      padding-bottom: size-m(12);
      margin-bottom: size-m(12);
      border-bottom: size-m(1.11) solid #C59B6D;
      @media screen and (min-width:768px) {
        padding-left: size(58.27);
        padding-bottom: size(10);
        margin-bottom: size(10);
        border-bottom: size(1.28) solid #C59B6D;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .desc {
    font-size: size-m(21);
    line-height: 150%;
    padding-left: size-m(14);
    margin-bottom: size-m(60);
    @media screen and (min-width:768px) {
      font-size: size(26.89);
      line-height: 170%;
      padding-left: size(58.27);
      margin-bottom: 0;
    }
  }

  .img {
    width: 100%;
    height: size-m(436);
    background-image: url(@/section/s4/img.jpg);
    background-size: cover;
    @media screen and (min-width:768px) {
      width: size(470.62);
      height: size(546.81);
    }

    .img-en {
      width: size-m(247.54);
      bottom: size-m(17);
      left: 50%;
      transform: translate(-50%, 0);
      @media screen and (min-width:768px) {
        width: size(310.65);
        bottom: size(33);
      }
    }
  }
}
</style>

<script setup>
</script>
