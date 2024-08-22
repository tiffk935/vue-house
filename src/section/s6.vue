<template>
  <section class="s6">
    <img src="@/section/s6/badge.png" class="badge_" alt="" srcset="" />
    <img src="@/section/s6/logo.png" class="logo1" alt="" srcset="" />
    <img src="@/section/s6/logo2.png" class="logo2" alt="" srcset="" />
    <img src="@/section/s6/t.svg" class="t hidden md:block" alt="" srcset="" />
    <img src="@/section/s6/tm.svg" class="t md:hidden" alt="" srcset="" />
    <img src="@/section/s6/logo3.png" class="logo3 md:hidden" alt="" srcset="" />
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  @apply w-full relative bg-cover;
  @apply flex flex-col items-center justify-center;
  height: size(1120);
  background-image: url("@/section/s6/bg.jpg");
  @media (max-width: 768px) {
    height: size-m(779);
    background-image: url("@/section/s6/bgm.jpg");
  }

  .badge_ {
    @apply absolute;
    width: size(216);
    height: size(216);
    left: 0;
    top: 0;
    @media (max-width: 768px) {
      width: size-m(104);
      height: size-m(104);
    }
  }
  .logo1 {
    width: size(262);
    @media (max-width: 768px) {
      width: size-m(122);
    }
  }
  .logo2 {
    width: size(614);
    margin-top: size(26);
    @media (max-width: 768px) {
      margin-top: size-m(16.85);
      width: size-m(273.92);
    }
  }
  .t {
    margin-top: size(54);
    width: size(1426);
    @media (max-width: 768px) {
      margin-top: size-m(35.52);
      width: size-m(289);
    }
  }
  .logo3 {
    margin-top: size-m(95);
    width: size-m(120);
  }
}
</style>

<script setup></script>
