<template>
  <section class="s7 user-n w-full relative">
    <img class="title block" src="@/section/s7/title.png" />
    <div class="items md:flex md:justify-between">
      <div class="item relative">
        <div class="img relative" data-aos="zoom-in" data-aos-duration="0" data-aos-delay="0">
          <img class="block w-full" src="@/section/s7/1.jpg" />
        </div>
        <div class="flex justify-between">
          <img class="item-label block" src="@/section/s7/label-1.png" />
          <div class="txt">生活無需多言<br>專屬照料，所願皆成</div>
        </div>
      </div>
      <div class="item relative">
        <div class="img relative" data-aos="zoom-in" data-aos-duration="0" data-aos-delay="200">
          <img class="block w-full" src="@/section/s7/2.jpg" />
        </div>
        <img class="item-label block" src="@/section/s7/label-2.png" />
        <div class="txt">隱密景點導覽<br>專屬海上行程規劃</div>
      </div>
      <div class="item relative">
        <div class="img relative" data-aos="zoom-in" data-aos-duration="0" data-aos-delay="400">
          <img class="block w-full" src="@/section/s7/3.jpg" />
        </div>
        <img class="item-label block" src="@/section/s7/label-3.png" />
        <div class="txt">唯層峰共享<br>沉浸於遊艇會專屬天地</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  padding: size-m(60) 0;
  background-image: url(@/section/s7/bg.jpg);
  background-size: auto size-m(1140);
  background-position: 50% 0;
  color: #CDA176;
  font-weight: 300;
  font-size: size-m(14);
  line-height: size-m(24);
  @media screen and (min-width:768px) {
    padding: size(146) size(0) size(93) size(0);
    background-size: cover;
    background-position: center center;
    font-size: size(24);
    line-height: size(40);
  }

  .title {
    width: calc(100% - size-m(25));
    margin: 0 auto size-m(51) auto;
    @media screen and (min-width:768px) {
      width: size(647);
      margin: 0 auto size(70) auto;
    }
  }

  .items {
    width: size-m(232);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: size(1594);
    }

    .item {
      margin-bottom: size-m(50);
      @media screen and (min-width:768px) {
        margin-bottom: 0;
        width: size(434);
      }

      &:last-child {
        margin-bottom: 0;
      }

      .item-label {
        width: size-m(94);
        @media screen and (min-width:768px) {
          width: size(166);
        }
      }

      .txt {
        padding-top: size-m(15);
        @media screen and (min-width:768px) {
          padding-top: size(40);
        }
      }

      &:nth-child(1) .item-label {
        @media screen and (min-width:768px) {
          position: absolute;
          top: size(-63);
          right: size(30);
        }
      }

      &:nth-child(2) {
        @media screen and (min-width:768px) {
          margin-top: size(129);
        }
      }

      &:nth-child(2) .item-label {
        position: absolute;
        top: size-m(22);
        right: size-m(-10);
        @media screen and (min-width:768px) {
          position: absolute;
          top: size(48);
          right: size(-33);
        }
      }

      &:nth-child(3) {
        @media screen and (min-width:768px) {
          margin-top: size(62);
        }
      }

      &:nth-child(3) .item-label {
        position: absolute;
        top: size-m(-24);
        left: size-m(-32);
        @media screen and (min-width:768px) {
          position: absolute;
          top: size(-63);
          right: size(30);
          left: auto;
        }
      }
    }
  }
}
</style>

<script setup>
</script>