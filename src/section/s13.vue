<template>
  <section class="s13 w-full relative">
    <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      專鑄精工，永續為您<br class="md:hidden"><span>東泥建設堅持做最好</span>
      <div class="line hidden md:block"></div>
    </div>
    <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">東泥建設蓋給自己住的心情，細細琢磨建築的每一公分，從結構、柱、鋼筋、混凝土到防水工程，皆以穩紮穩打的大匠精神，將精工品質推升到頂規標準，讓您買到的不只是別墅的美麗外表，更有材實料的厚實內在。</div>
    <img class="ooo md:hidden" src="@/section/s13/ooom.svg" />
    <img class="ooo hidden md:block" src="@/section/s13/ooo.svg" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s13 {
  width: 100%;
  height: size-m(648);
  background-image: url(@/section/s13/bg.jpg);
  background-size: auto 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  padding-top: size-m(36);
  @media screen and (min-width:768px) {
    height: size(1001);
  }

  .t1 {
    color: #133556;
    font-size: size-m(25);
    font-weight: 700;
    letter-spacing: .02em;
    text-align: center;
    margin-bottom: size-m(21);
    position: relative;
    @media screen and (min-width:768px) {
      font-size: size(54);
      margin-bottom: size(52);

      span {
        margin-left: size(59);
      }
    }

    &:before, &:after, .line {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: size-m(1);
      height: 100%;
      background: #133556;
      transform: translate(calc(-50% - 38vw), 0) rotate(198deg);
      @media screen and (min-width:768px) {
        width: size(1);
        transform: translate(calc(-50% - 29.5vw), 0) rotate(198deg);
      }
    }

    .line {
      transform: translate(calc(-50% - 0vw), 0) rotate(198deg);
    }

    &:after {
      transform: translate(calc(-50% + 29.5vw), 0) rotate(198deg);
    }
  }

  .t2 {
    color: #595757;
    font-family: "Noto Sans TC";
    font-size: size-m(12);
    line-height: 175%;
    padding: 0 size-m(30);
    margin-bottom: size-m(50);
    @media screen and (min-width:768px) {
      font-size: size(22);
      padding: 0;
      margin: 0 auto;
      margin-bottom: size(110);
      text-align: center;
      width: size(1203);
    }
  }

  .ooo {
    width: size-m(317.11);
    margin: 0 auto;
    @media screen and (min-width:768px) {
      width: size(1195.35);
    }
  }
}
</style>

<script setup>
</script>