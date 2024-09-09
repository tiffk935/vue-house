<template>
  <section class="s6">
    <img src="@/section/s6/badge.png" class="badge_" alt="" srcset="" />
    <img src="@/section/s6/logo.png" class="logo1" alt="" srcset="" />
    <img src="@/section/s6/logo2.png" class="logo2" alt="" srcset="" />
    <!-- 
    <img src="@/section/s6/t.svg" class="t hidden md:block" alt="" srcset="" />
    <img src="@/section/s6/tm.svg" class="t md:hidden" alt="" srcset="" /> -->
    <div class="content flex md:justify-between md:items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-offset="-200">
      <div class="t1"><span>68坪捷運金店面</span>  正中央南路核心商圈</div>
      <div class="t2 hidden md:flex md:items-center">
        <div>｜捷運北投站<span>350</span>米｜傳承富寓<span>31-39</span>坪｜邊間<span>3</span>房｜</div>
        <img class="w-full" src="@/section/s6/info.svg" />
      </div>
      <div class="t2 md:hidden md:flex md:items-center">
        <div><span>捷運北投站350米</span>｜31-39坪｜邊間3房｜</div>
        <img src="@/section/s6/infom.svg" alt="" srcset="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  @apply w-full relative bg-cover;
  @apply flex flex-col items-center justify-center;
  height: size(1120);
  background-image: url("@/section/s6/bg.jpg");
  @media (max-width: 768px) {
    height: size-m(779);
    background-image: url("@/section/s6/bgm.jpg");
  }

  .badge_ {
    @apply absolute;
    width: size(216);
    height: size(216);
    left: 0;
    top: 0;
    @media (max-width: 768px) {
      width: size-m(104);
      height: size-m(104);
    }
  }
  .logo1 {
    width: size(262);
    @media (max-width: 768px) {
      width: size-m(122);
    }
  }
  .logo2 {
    width: size(614);
    margin-top: size(26);
    @media (max-width: 768px) {
      margin-top: size-m(16.85);
      width: size-m(273.92);
    }
  }
  .t {
    margin-top: size(54);
    width: size(1426);
    @media (max-width: 768px) {
      margin-top: size-m(35.52);
      width: size-m(289);
    }
  }
  .logo3 {
    margin-top: size-m(95);
    width: size-m(120);
  }
  
  .content {
    color: #000;
   // top: size-m(495);
   // left: size-m(55);
    text-align: center;
    flex-direction:column;
    justify-content:center; align-items:center;
    @media (min-width: 768px) {
      margin-top: size(85);
     // top: size(900);
     // top: calc(60% + #{size(920 - 1080 * .6)});
     // left: size(50);
      white-space: nowrap;
      // width: size(1600);
    }

    .t1 {
      font-size: size-m(32);
      font-weight: 500;
      line-height: 1.7;
      letter-spacing:0.08em;
      margin-bottom: size-m(10);
      color: #000;
      @media (min-width: 768px) {
        font-size: size(96);
        letter-spacing: 0.03em;
        margin-bottom: 0;
        color: #9f291c;
       // margin-right: size(35);
      }
      @media (max-width: 767px) {
        margin-top: size-m(40);
        border-bottom: 1px solid #0005;
        span{
          display: block;
          font-size: 1.3em;    
          letter-spacing:0.05em;
          border-bottom: 1px solid #0005;
          color: #9f291c;
        }
      }
    }

    .t2 {
      font-size: size-m(34);
      color: #000;
      line-height: normal;
      letter-spacing:0;
      margin-bottom: size-m(13);
      font-weight: 500;
      @media (min-width: 768px) {
        font-size: size(51);
        letter-spacing: 0;
        margin-bottom: 0;
      }
      span{font-size: 1.2em;
      @media (max-width: 767px) {
        color: #9f291c;
          display: block;
          font-size: 1.15em;   
          letter-spacing: 0.05em;
      }
    }
    }

    img {
      width: size-m(260);
      margin:  size(100) auto 0;
      @media (min-width: 768px) {
        width: auto;
        height:size(65);
        margin: 0 size(10) 0 size(0);
      }
    }
  }
}
</style>

<script setup></script>
