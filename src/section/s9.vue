<template>
  <section class="s9 relative parallax">
    <div class="photo absolute">
      <div class="txt absolute">
        此為廣告效果示意，為單一建築電腦3D透視表現，<br class="md:hidden">
        周遭環境係電腦合成，建設公司保有建物外觀修正之權利。
      </div>
    </div>

    <div class="content absolute text-white">
      <div class="t1 text-white fade">人文原鄉建築，<br class="hidden md:block">社子公園首境。</div>
      <div class="t2 text-white fade md:hidden">
        回扣社子地貌風情，溫潤質樸的紅磚意象照應在<br>
        地人文風情。呂佳隆建築師說：「為公園旁的住<br>
        宅建築，創造恆久不褪色的家記憶，是創作的初<br>
        衷。」由此發展源於傳統三合院紅磚屋瓦的立面<br>
        韻味，搭配框架線條形塑歷史記憶，跳躍式的陽<br>
        台分佈縱橫交構出新舊融合的語彙輔以上下排列<br>
        錯層的堆砌，以近乎雙層立面的構造回應建築、<br>
        人居與景觀的協調性。
      </div>
      <div class="t2 text-white fade hidden md:block">
        回扣社子地貌風情，溫潤質樸的紅磚意象照應在地人文風情。<br>
        呂佳隆建築師說：「為公園旁的住宅建築，創造恆久不褪色的<br>
        家記憶，是創作的初衷。」由此發展源於傳統三合院紅磚屋瓦<br>
        的立面韻味，搭配框架線條形塑歷史記憶，跳躍式的陽台分佈<br>
        縱橫交構出新舊融合的語彙輔以上下排列錯層的堆砌，以近乎<br>
        雙層立面的構造回應建築、人居與景觀的協調性。
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s9 {
  width: 100%;
  height: size-m(970);
  background: linear-gradient(184.34deg, #1F978D 9.75%, #0B6A62 85.16%);
  font-family: 'Noto Serif TC';
  overflow: hidden;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .photo {
    width: 100%;
    height: size-m(440);
    top: size-m(87);
    left: 0;
    background-image: url(@/section/s9/photo_m.jpg);
    background-size: cover;
    background-position: center;
    @media screen and (min-width:768px) {
    background-image: url(@/section/s9/photo.jpg);
      height: size(1080);
      top: 0;
    }

    .txt {
      left: size-m(5);
      top: size-m(6);
      font-family: 'Noto Sans TC';
      font-weight: 500;
      font-size: size-m(10);
      line-height: size-m(12);
      color: #FFFFFF;
      @media screen and (min-width:768px) {
        left: size(29);
        top: size(1050);
        font-size: size(13);
        line-height: size(15);
      }
    }
  }

  .content {
    top: size-m(565);
    left: size-m(0);
    width: 100%;
    display: flex;
    // height: size-m(410);
    justify-content: center;
    // align-items: center;
    flex-direction: row-reverse;
    gap: size-m(12);
    @media screen and (min-width:768px) {
      top: size(0);
      left: size(1614.67);
      width: size(220);
      background: linear-gradient(0deg, rgba(17, 161, 150, 0.3) -11.37%, #004B47 99.89%);
      gap: size(48);
      flex-direction: column;
    }
  }
  .t1 {
    font-size: size-m(19);
    line-height: 1.8;
    font-weight: 500;
    writing-mode: vertical-rl;
    white-space: nowrap;
    @media screen and (min-width:768px) {
      font-size: size(33);
      line-height: 1.4;
      margin: size(48.43) auto 0 auto;
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
    font-family: 'Noto sans TC';
    @media screen and (min-width:768px) {
      font-size: size(17);
      line-height: 1.7;
      font-weight: 200;
      letter-spacing: .2em;
      margin:0 auto 5em auto;
    }
  }
}

</style>

<script setup>
</script>
