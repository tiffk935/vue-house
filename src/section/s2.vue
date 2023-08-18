<template>
  <section class="s2 relative">
    <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400">「日本．台南 隈研吾俬有宅」</div>
    <img class="logo" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700" src="@/section/s2/logo.svg" />
    <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
      全世界都在追逐的建築師、<br class="md:hidden">2020年東京奧運主場館首席設計，<br>
      <br class="md:hidden">
      建築普立茲克獎呼聲最高的候選人<br class="md:hidden">日本國寶建築師「隈研吾」<br>
      <br class="md:hidden">
      為台南，留一座國際級數建築，過去未見，<br class="hidden md:block">
      打造有史以來最高規格與東京新國立競技場、根津美術館⋯國際間齊名的建築，<br class="hidden md:block">
      於台南東區「新都心重劃區」、名宅聚落，植下一棵城市建築大樹森林姿態，<br class="hidden md:block">
      展現革新思維植下前所未見的「隈研吾大樹建築」，<br class="hidden md:block">
      就在隈研吾全球限量「巴克禮 PARK」<br class="hidden md:block">
      這將是台南唯一「隈研吾俬宅」，100%傳達「隈研吾」的想法與精神，<br class="hidden md:block">
      珍藏「隈研吾」獨一無二、無可取代的藝術之作，<br class="hidden md:block">
      絕無僅有的機會，只有親臨親聆、才能體會與感動。
    </p>
    <div class="photo md:flex" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" >
      <div class="kkaa">
        <img src="@/section/s2/kkaa.svg" />
      </div>
      <div class="img">
        <img class="w-full" src="@/section/s2/img.jpg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s2 {
  padding: size-m(80) size-m(23) size-m(28) size-m(23);
  text-align: center;
  @media screen and (min-width:768px) {
    padding: size(187) size(437) size(84) size(437);
  }

  .title {
    font-family: 'Noto Serif TC';
    font-weight: 900;
    font-size: size-m(20);
    line-height: size-m(29);
    margin-bottom: size-m(11);
    @media screen and (min-width:768px) {
      font-size: size(38);
      line-height: size(55);
      margin-bottom: size(22);
    }
  }

  .logo {
    width: size-m(200);
    margin: 0 auto size-m(27) auto;
    @media screen and (min-width:768px) {
      width: size(331.76);
      margin: 0 auto size(67) auto;
    }
  }

  p {
    font-weight: 400;
    font-size: size-m(13);
    line-height: size-m(22);
    margin-bottom: size-m(60);
    @media screen and (min-width:768px) {
      font-size: size(18);
      line-height: size(39);
      margin-bottom: size(110);
    }
  }

  .photo {
      background: #D9D9D9;
    align-items:stretch;

    @media screen and (min-width:768px) {
      flex-direction: row-reverse;
    }

    .kkaa {
      height: size-m(153);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      @media screen and (min-width:768px) {
        width: size(269);
        height: 100%;
    //    height: size(494);
      }

      img {
        width: size-m(174.72);
        @media screen and (min-width:768px) {
          width: size(174.72);
        }
      }
    }

    .img {
      @media screen and (min-width:768px) {
        width: size(777);
      }
    }
  }
}
</style>

<script setup>
</script>
