<template>
  <section class="s5 user-n w-full relative">
    <div class="content">
      <div class="en relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img class="w-full block" src="@/section/s5/en.svg" />
        <img class="star block md:hidden absolute" src="@/section/s2/star.svg" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="title font-bold">
          <div>早鳥預約 即刻擁有</div>
        </div>
        <div class="desc">
          六星級全齡雅緻御所<br>
          實現人生最夢幻的奢想
        </div>
      </div>
    </div>
    
    <div class="items">
      <div class="item relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="img">
          <img class="w-full block" src="@/section/s5/img1.jpg" />
        </div>
        <div class="text absolute md:relative">
          <img class="block" src="@/section/s5/text1.svg" />
        </div>
        <div class="line-block bg-[#E3750F] md:hidden">
          <div class="line-block-inner bg-[#796A56] h-full"></div>
        </div>
      </div>
      <div class="item relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="img">
          <img class="w-full block" src="@/section/s5/img2.jpg" />
        </div>
        <div class="text absolute md:relative">
          <img class="block" src="@/section/s5/text2.svg" />
        </div>
        <div class="line-block bg-[#E3750F] md:hidden">
          <div class="line-block-inner bg-[#796A56] h-full"></div>
        </div>
      </div>
      <div class="item relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="img">
          <img class="w-full block" src="@/section/s5/img3.jpg" />
        </div>
        <div class="text absolute md:relative">
          <img class="block" src="@/section/s5/text3.svg" />
        </div>
        <div class="line-block bg-[#E3750F] md:hidden">
          <div class="line-block-inner bg-[#796A56] h-full"></div>
        </div>
      </div>
      <div class="item relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="img">
          <img class="w-full block" src="@/section/s5/img4.jpg" />
        </div>
        <div class="text absolute md:relative">
          <img class="block" src="@/section/s5/text4.svg" />
        </div>
        <div class="line-block bg-[#E3750F] md:hidden">
          <div class="line-block-inner bg-[#796A56] h-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @media screen and (min-width:768px) {
    display: flex;
    justify-content: space-between;
    padding: size(34) 0 0 0;
  }

  .content {
    padding: size-m(35) 0 0 0;
    @media screen and (min-width:768px) {
      padding: size-m(5) 0 0 0;
    }
  }

  .en {
    width: size-m(343);
    margin: 0 0 size-m(28) size-m(9);
    @media screen and (min-width:768px) {
      width: size(535);
      margin: 0 0 size(49) size(59);
    }

    .star {
      width: size-m(28);
      bottom: 0;
      left: size-m(315);
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
      margin-bottom: size(5);
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
    margin-bottom: size-m(22);
    @media screen and (min-width:768px) {
      font-size: size(26.89);
      line-height: 170%;
      padding-left: size(58.27);
      margin-bottom: 0;
    }
  }

  .items {
    @media screen and (min-width:768px) {
      width: size(530);
    }

    .item {
      @media screen and (min-width:768px) {
        display: flex;
        background: #796A56;

        &:nth-child(even) {
          flex-direction: row-reverse;
        }
      }

      .img {
        @media screen and (min-width:768px) {
          width: size(325);
        }
      }

      .text {
        bottom: size-m(18);
        left: 50%;
        transform: translate(-50%, 0);
        @media screen and (min-width:768px) {
          bottom: auto;
          left: auto;
          transform: none;
          flex: 1;
          background: #E3750F;
          margin-left: size(14);
        }

        img {
          width: auto;
          height: size-m(43);
          @media screen and (min-width:768px) {
            height: size(35);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      
      .line-block {
        width: 100%;
        height: size-m(12);
        @media screen and (min-width:768px) {
          height: size(28);
        }

        .line-block-inner {
          width: size-m(56);
          @media screen and (min-width:768px) {
            width: size(254.55);
          }
        }
      }

    }
  }
}
</style>

<script setup>
</script>
