<template>
  <section class="s4 relative">
    <img class="photo absolute md:hidden" src="@/section/s4/photo.jpg" />
    <div class="content-m absolute text-white md:hidden">
      推窗見綠、出門入園，<br />
      豈止珍稀而已。<br />
      面積總計逾一公頃的社子公園，為社子島<br />
      內最大綠地公園，也為「德林哲里」住戶<br />
      帶來朗闊棟距與視野，公園宅奇貨可居，<br />
      綠金價值等同生活品質。
    </div>
    <div class="content absolute text-white hidden md:block fade"></div>
    <div class="t1 absolute text-white hidden md:block fade">推窗見綠、出門入園，<br />豈止珍稀而已。</div>
    <div class="t2 absolute text-white hidden md:block fade">
      面積總計逾一公頃的社子公園，為社子島<br />
      內最大綠地公園，也為「德林哲里」住戶<br />
      帶來朗闊棟距與視野，公園宅奇貨可居，<br />
      綠金價值等同生活品質。
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s4 {
  width: 100%;
  height: size-m(860);
  z-index: 1;
  background-image: url(@/section/s4/bg-m.jpg);
  background-size: cover;
  font-family: 'Noto Serif TC';
  @media screen and (min-width:768px) {
    height: size(1080);
    background-image: url(@/section/s4/bg.jpg);
  }

  .photo {
    width: 100%;
    top: size-m(135);
    left: 0;
  }

  .content-m {
    top: size-m(529);
    left: size-m(115.4);
    font-size: size-m(12);
    line-height: 2;
    font-weight: 500;
    writing-mode: vertical-rl;
  }

  .content {
    @media screen and (min-width:768px) {
      width: size(209.31);
      height: size(898.5);
      top: size(0);
      left: size(1614.67);
      background: linear-gradient(0deg, rgba(17, 161, 150, 0.3) -11.37%, #004B47 99.89%);
      opacity: 0.7;
    }
  }

  .t1 {
    @media screen and (min-width:768px) {
      font-size: size(30);
      line-height: 1.4;
      top: size(46.17);
      left: size(1676.01);
      font-weight: 500;
      writing-mode: vertical-rl;
    }
  }

  .t2 {
    @media screen and (min-width:768px) {
      font-size: size(16);
      line-height: 1.7;
      top: size(423.42);
      left: size(1666.63);
      font-weight: 500;
      writing-mode: vertical-rl;
    }
  }
}

</style>

<script setup>
</script>
