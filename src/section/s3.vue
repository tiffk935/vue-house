<template>
  <section class="s3 user-n w-full relative bg-[#E3750F] text-[#123C33]">
    <div class="content">
      <div class="en relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="w-full block" src="@/section/s3/en.svg" />
        <img class="star block absolute" src="@/section/s3/star.svg" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title font-bold">
          <div>維繫三代人的共同喜好</div>
        </div>
        <div class="desc">美好時光，就此展開</div>
      </div>
    </div>
    <div class="img relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="img-en block absolute" src="@/section/s3/img-en.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  padding: 0 0 size-m(14) 0;
  @media screen and (min-width:768px) {
    display: flex;
    justify-content: space-between;
    padding: size(90) size(60) size(51) 0;
  }

  .content {
    padding: size-m(39) 0 0 0;
    @media screen and (min-width:768px) {
      padding: 0;
    }
  }

  .en {
    width: size-m(295);
    margin: 0 0 size-m(25) size-m(10);
    @media screen and (min-width:768px) {
      width: size(513);
      margin: 0 0 size(31) size(57);
    }

    .star {
      width: size-m(28);
      bottom: 0;
      left: size-m(216);
      @media screen and (min-width:768px) {
        width: size(55);
        left: size(351);
      }
    }
  }

  .title {
    width: size-m(320);
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
      border-bottom: size-m(1.11) solid #123C33;
      @media screen and (min-width:768px) {
        padding-left: size(58.27);
        padding-bottom: size(10);
        margin-bottom: size(10);
        border-bottom: size(1.28) solid #123C33;
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
    height: size-m(435);
    background-image: url(@/section/s3/img.jpg);
    background-size: cover;
    // background-position: size-m(-40) size-m(-238);
    // background-repeat: no-repeat;
    @media screen and (min-width:768px) {
      width: size(470.9);
      height: size(521.58);
      // background-size: size(1392) auto;
      // background-position: size(-54.99) size(-341.88);
    }

    .img-en {
      width: size-m(249);
      bottom: size-m(17);
      left: 50%;
      transform: translate(-50%, 0);
      @media screen and (min-width:768px) {
        width: size(311);
        bottom: size(30);
      }
    }
  }
}
</style>

<script setup>
</script>
