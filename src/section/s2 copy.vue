<template>
  <section class="s2 user-n w-full relative">
    <div class="content">
      <div class="en relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="w-full block" src="@/section/s2/en.svg" />
        <img class="star block absolute" src="@/section/s2/star.svg" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title font-bold">
          <div>北彰化唯一大基地</div>
          <div>千坪泳池渡假俱樂部</div>
        </div>
        <div class="desc">
          首座飯店式渡假宅<br>
          讓回家即是渡假的開始
        </div>
      </div>
    </div>
    <div class="video-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="video">
        <video src="@/section/s2/video.mp4" muted loop autoplay playsinline></video>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  padding: 0 0 size-m(14) 0;
  @media screen and (min-width:768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 size(109) 0 0;
  }

  .content {
    padding: size-m(35) 0 0 0;
    @media screen and (min-width:768px) {
      padding: size(75) 0 0 0;
    }
  }

  .en {
    width: size-m(343);
    margin: 0 0 size-m(22) size-m(5);
    @media screen and (min-width:768px) {
      width: size(584);
      margin: 0 0 size(31) size(58.58);
    }

    .star {
      width: size-m(28);
      bottom: 0;
      left: size-m(264);
      @media screen and (min-width:768px) {
        width: size(54.73);
        left: size(438.29);
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
      margin-bottom: size(18);
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
    margin-bottom: size-m(30);
    @media screen and (min-width:768px) {
      font-size: size(26.89);
      line-height: 170%;
      padding-left: size(58.27);
      margin-bottom: 0;
    }
  }

  .video-wrapper {
    width: 100%;
    @media screen and (min-width:768px) {
      width: size(372.65);
    }

    .video {
      width: 100%;
      height: 0;
      padding-top: 178.21782%;
      position: relative;
      overflow: hidden;

      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<script setup>
</script>
