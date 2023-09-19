<template>
  <section class="s1 text-white bg-[#D7282F] relative">
    <video class="md:hidden" src="https://h35.banner.tw/park/mo.mp4" playsinline autoplay muted loop></video>
    <video class="hidden md:block" src="https://h35.banner.tw/park/pc.mp4" playsinline autoplay muted loop></video>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s1 {
  width: 100%;
  height: calc(100vh - 63px );
  max-height: size-m(812);
  min-height: size-m(604);
  background: #fff;
  @media screen and (min-width:768px) {
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);

  }
  
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  

  .house {
    width: size-m(429);
    max-width: 200%;
    top: size-m(283.44);
    left: size-m(-33);
    @media screen and (min-width:768px) {
      width: size(1033.81);
      top: size(180);
      left: size(102);
    }
  }

  .logo2 {
    width: size-m(288.83);
    top: size-m(143);
    left: size-m(43);
    @media screen and (min-width:768px) {
      width: size(578.84);
      top: size(448);
      left: size(1074);
    }
  }

  .logo1 {
    width: size-m(173.4);
    top: size-m(346);
    left: size-m(101);
    @media screen and (min-width:768px) {
      width: size(406.15);
      top: size(449);
      left: size(460);
    }
  }
}
</style>

<script setup>

</script>
