<template>
  <section class="s4 relative parallax">
    <div class="photo absolute md:hidden"></div>

    <div class="content absolute text-white hidden md:block"></div>
    <div class="t1 absolute text-white fade">推窗見綠、出門入園，<br />豈止珍稀而已。</div>
    <div class="t2 absolute text-white fade">
      面積總計逾一公頃的社子公園，為社子島<br />
      內最大綠地公園，也為「德林哲里」住戶<br />
      帶來朗闊棟距與視野，公園宅奇貨可居，<br />
      綠金價值等同生活品質。
    </div>
    <img class="bg bg01 absolute" src="@/section/s1/01.gif" />
    <img class="bg bg02 absolute" src="@/section/s1/02.gif" />

    <!--
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
    </div>  -->
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
  background-position: 50% 50%;
  font-family: 'Noto Serif TC';
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
    background-image: url(@/section/s4/bg.jpg);
  }



.bg01{
  top:0;
  width:100%;
  height: 100%;
  object-fit: cover;
  background-size: 100% auto;
  mix-blend-mode: overlay;
  opacity: 0.6;
}
.bg02{
  top:0;
  width:100%;
  height: 100%;
  object-fit: cover;
  background-size: 100% auto;  
  mix-blend-mode: screen;
  opacity: 0.5;
  filter: blur(7.5px);
}  
  .photo {
    width: 100%;
    height: size-m(315);
    top: size-m(135);
    left: 0;
    background-image: url(@/section/s4/photo.jpg);
  background-size: cover;
  background-position: center;
  }

  .content {
    top: size-m(529);
    left: size-m(115.4);
      width: size-m(145);
      height:size-m(300);
    @media screen and (min-width:768px) {
      top: size(0);
      left: size(1614.67);
      width: size(209.31);
      height: size(898.5);
      background: linear-gradient(0deg, rgba(17, 161, 150, 0.3) -11.37%, #004B47 99.89%);
      opacity: 0.7;
    }
  }

  .t1 {
    top: size-m(529);
    left: size-m(215.3);
    font-size: size-m(17);
    line-height: 2;
      font-weight: 500;
    writing-mode: vertical-rl;
    @media screen and (min-width:768px) {
      font-size: size(31);
      line-height: 1.4;
      top: size(46.17);
      left: size(1676.01);
    }
  }

  .t2 {
    top: size-m(529);
    left: size-m(115.4);
    font-size: size-m(13);
    line-height: 1.8;
      font-weight: 500;
    letter-spacing: .1em;
    writing-mode: vertical-rl;
    @media screen and (min-width:768px) {
      top: size(423.42);
      left: size(1666.63);
      font-size: size(17);
      line-height: 1.7;
      font-weight: 200;
      letter-spacing: .2em;
    }
  }
}

</style>

<script setup>
</script>
