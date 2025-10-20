<template>
  <section class="s2 user-n w-full relative bg-[#CDA176]">
    <div class="video-wrapper">
      <div class="video">
        <iframe width="560" height="314"
          src="https://www.youtube.com/embed/QLZnOQUY1MM?si=YpF-00bOlTzrW7S9&autoplay=1&mute=1&loop=1&playlist=QLZnOQUY1MM"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div>
      <img class="title" src="@/section/s2/title.png" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" />
      <div class="txt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        當視野已盡天下，言語亦難盡成就。<br>
        唯一值得追尋的，是一處與身份相襯的場域。<br>
        建築不止是居所，更是臥於港灣的私人行館—<br>
        靜可藏心，動能宴客。<br class="hidden md:block">
        以藍海與天際為疆界，以時間與格局為內涵，<br class="hidden md:block">
        以限量濱海寓所昇華人生極致，<br>
        為層峰留下無可複製的答案。
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  padding: size-m(60) size-m(23) size-m(45) size-m(23);
  font-weight: 300;
  font-size: size-m(14);
  line-height: size-m(24);

  @media screen and (min-width:768px) {
    padding: size(175) size(30) size(116) 0;
    font-size: size(24);
    line-height: size(40);
    display: flex;
  }

  .video-wrapper {
    width: 100%;
    margin: 0 0 size-m(30) 0;

    @media screen and (min-width:768px) {
      width: size(900);
      margin: 0 size(60) 0 0;
    }

    .video {
      width: 99.8%;
      height: 0;
      padding-top: 56.25%;
      position: relative;

      iframe {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .title {
    display: block;
    width: size-m(231);
    margin: 0 0 size-m(30) 0;

    @media screen and (min-width:768px) {
      width: size(407);
      margin: 0 0 size(65) 0;
    }
  }
}
</style>

<script setup>

</script>
