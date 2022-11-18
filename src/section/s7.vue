<template>
  <section class="s7 bg-[#E4E3DB] relative">
    <div class="item">
      <div class="relative">
        <img class="title md:hidden" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/1/title-m.svg">
        <img class="title hidden md:block" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/1/title.svg">
        <div class="text absolute" data-aos="fade-in" data-aos-delay="0">立足仁德區公所商圈，市中心蛋黃區難得大型素地，造鎮思維全區規劃。不僅食衣住行育樂全到位，更坐擁類重劃嶄新街廓。</div>
      </div>
      <img class="photo" src="@/section/s7/1/photo.png">
    </div>
    <div class="item">
      <div class="relative">
        <img class="title md:hidden" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/2/title-m.svg">
        <img class="title hidden md:block" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/2/title.svg">
        <div class="text absolute" data-aos="fade-in" data-aos-delay="0">台南市心榮景一路向東，從南紡、虎尾寮富人區，延伸至公園簇擁的仁德，成熟機能造就宜居日常，兼享繁榮與自然生活。</div>
      </div>
      <img class="photo" src="@/section/s7/2/photo.png">
    </div>
    <div class="item">
      <div class="relative">
        <img class="title md:hidden" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/3/title-m.svg">
        <img class="title hidden md:block" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/3/title.svg">
        <div class="text absolute" data-aos="fade-in" data-aos-delay="0">出門轉個彎即為仁德幹道中山路，迅速接軌「國道一號」仁德交流道所在，近台39線與未來捷運藍線延伸線，打通高鐵動脈，迅馳悠遊。</div>
      </div>
      <img class="photo" src="@/section/s7/3/photo.png">
    </div>
    <div class="item">
      <div class="relative">
        <img class="title md:hidden" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/4/title-m.svg">
        <img class="title hidden md:block" data-aos="fade-in" data-aos-delay="0" src="@/section/s7/4/title.svg">
        <div class="text absolute" data-aos="fade-in" data-aos-delay="0">46公頃「南紡科技園區」、3.38萬坪「京城智慧園區」，兩大重磅開發案聚焦仁德，以5G、AI為主軸的科技園區，將創造可觀住居需求。</div>
      </div>
      <img class="photo" src="@/section/s7/4/photo.png">
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  padding-top: size-m(73);
  @media screen and (min-width:768px) {
    padding: size(130) 0;
  }

  .item {
    width: size-m(295);
    margin: 0 auto;
    margin-bottom: size-m(55);
    padding-bottom: size-m(55);
    border-bottom: 1px solid #D68F41;
    @media screen and (min-width:768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: size(1260);
      margin: 0 auto;
      padding: 0;
      border: none;

      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }

    &:last-child {
      margin-bottom: size-m(0);
      padding-bottom: size-m(41);
      border: none;
      @media screen and (min-width:768px) {
        padding: 0;
      }
    }
  }

  .title {
    width: 100%;
    margin-bottom: size-m(41);
    @media screen and (min-width:768px) {
      width: size(564);
      margin: 0;
    }
  }

  .text {
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: size-m(12);
    line-height: size-m(27);
    letter-spacing: 0.16em;
    text-align: justify;
    @media screen and (min-width:768px) {
      font-size: size(19);
      line-height: size(48);
      padding-left: size(96);
    }
  }

  .photo {
    width: size-m(250);
    margin: 0 auto;
    filter: grayscale(1) sepia(.4);
    transition: all .4s;
    @media screen and (min-width:768px) {
      width: size(542);
      margin: 0;
    }

    &:hover {
      filter: none;
    }
  }
  
}

</style>

<script setup>
</script>