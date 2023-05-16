<template>
  <section class="s3 relative parallax">
    <div class="photo absolute md:hidden"></div>

    <div class="content absolute text-white">
    <div class="t1 text-white fade">推窗見綠、出門入園，<br />豈止珍稀而已。</div>
    <div class="t2 text-white fade">
      面積總計逾一公頃的社子公園，為社子島<br />
      內最大綠地公園，也為「德林哲里」住戶<br />
      帶來朗闊棟距與視野，公園宅奇貨可居，<br />
      綠金價值等同生活品質。
    </div></div>
    <img class="bg bg01 absolute" src="@/section/s1/01.gif" />
    <img class="bg bg02 absolute" src="@/section/s1/02.gif" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s3 {
  width: 100%;
  height: size-m(860);
  background-image: url(@/section/s3/bg-m.jpg);
  background-size: cover;
  background-position: 50% 50%;
  font-family: 'Noto Serif TC';
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
    background-image: url(@/section/s3/bg.jpg);
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
    background-image: url(@/section/s3/photo.jpg);
  background-size: cover;
  background-position: center;
  }

  .content {
    // top: size-m(509);
    top: size-m(450);
    left: size-m(0);
    width: 100%;
     // width: size-m(145);
    display:flex;
    height: size-m(410);
    justify-content:center;
    align-items:center;
    // opacity: 0.5;
    flex-direction:row-reverse;
    gap:size-m(12);

    @media screen and (min-width:768px) {
      top: size(0);
      left: size(1614.67);
      width: size(209.31);
      height: size(898.5);
      background: linear-gradient(0deg, rgba(17, 161, 150, .7) -11.37%, rgba(0, 75, 71, 0.7) 99.89%);
      gap:size(36);
    flex-direction:column;
    }
  }
  .t1 {
    font-size: size-m(19);
    line-height: 1.8;
    font-weight: 500;
    writing-mode: vertical-rl;
    margin:auto 0;
    padding: 0 0 5.6em;
    white-space: nowrap;
    @media screen and (min-width:768px) {
      font-size: size(33);
      line-height: 1.4;
      margin:0 auto;
    padding: 0;
    }
  }

  .t2 {
    font-size: size-m(15);
    line-height: 1.8;
    font-weight: 300;
    letter-spacing: .1em;
    writing-mode: vertical-rl;
    white-space: nowrap;
    margin: auto 0;
    @media screen and (min-width:768px) {
      font-size: size(19);
      line-height: 1.7;
      font-weight: 200;
      letter-spacing: .2em;
      margin:0 auto 1.6em auto;
    }
  }
}

</style>

<script setup>
</script>
