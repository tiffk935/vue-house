<template>
  <article class="s9">
    <img src="./s9/1.jpg" class="img">
    <div class="main">
      <div class="txt">
        <h2 class="title font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-delay="0" >隈研吾</h2>
        <p class="desc" data-aos="zoom-in" data-aos-delay="200">世界知名日本建築師<br>
在業界被稱為「負建築」、「隈研吾流」；又以自然景觀的融合為特色，運用木材、泥磚、竹子、石板、紙或玻璃等天然建材，結合水、光線與空氣，創造外表看似柔弱，卻更耐震、且讓人感覺到傳統建築的溫馨與美的「負建築」。</p>
      </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s9 {
  @apply relative flex items-center justify-center bg-[#FFF];
  width: 100%;
  height: size(850);
  padding:0;
  font-size:size(22);
  gap:2.8em;
  flex-direction: row-reverse;
  // background: url("./s9/07.jpg") bottom;

  .main {
    @apply relative flex text-[#3E3A39];
    margin: 0;
    flex-basis: size(400);
  flex-direction: column;
  text-align: justify;
  .txt {
    position: relative;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.7;
    margin: 0 0 0;
  .title{
    font-size: 2.3em;
    margin: 0 auto .7em;
    line-height: 1.4;
    font-weight: 900;
    letter-spacing: .4em;
  }
  .img{
    width:100%;
  }
  }
}
.img{
    margin: 0;
    flex-basis: size(919);
      height: size(468);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
  @apply flex-col;
    height: auto;
    padding:4em 0 5em 0 ;
  font-size:size-m(13);
  gap: 2em;

    .main {
    padding: 0 size-m(32.5);
    text-align: justify;
  .txt {
    margin: 0 0 0em;
  .title{
    font-size: 1.5em;
    padding: 0em 0 0;
  }
  .en{
    height:  2.6em;
  }
  .subtitle{
    font-size: 1.3em;
    margin: 2em 0 .3em;
  }
  }
}
.img{
    width:size-m(315);}
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
</script>
