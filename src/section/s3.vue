<template>
  <section class="s3 user-n w-full relative">
    <div class="img img1">
      <img class="bg block w-full" src="@/section/s3/1.jpg" />
      <img class="en absolute" src="@/section/s3/en1.svg" />
    </div>
    <div class="img img2">
      <img class="bg block w-full" src="@/section/s3/2.jpg" />
      <img class="en absolute md:hidden" src="@/section/s3/en2-m.svg" />
      <img class="en absolute hidden md:block" src="@/section/s3/en2.svg" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  @media (min-width: 768px) {
    height: size(915);
  }

  .img {
    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      width: size(1068);
      height: 100%;

      &:hover .bg {
        filter: grayscale(0);
      }
    }

    .bg {
      filter: grayscale(1);
      transition: filter .4s;
      @media (min-width: 768px) {
        height: 100%;
        object-fit: cover;
      }
    }

    &.show .bg {
      filter: grayscale(0);
    }
  }
  
  .img1 {
    clip-path: polygon(0 0, 100% 0, 100% 68.54%, 0% 100%);
    @media (min-width: 768px) {
      left: 0;
      clip-path: polygon(0 0, 100% 0, 77% 100%, 0% 100%);
    }

    .en {
      top: size-m(35);
      left: size-m(37);
      width: size-m(239);
      @media (min-width: 768px) {
        top: size(102);
        left: size(75);
        width: size(727.79);
      }
    }
  }

  .img2 {
    margin-top: -26vw;
    clip-path: polygon(0 31.46%, 100% 0, 100% 100%, 0 100%);
    @media (min-width: 768px) {
      right: 0;
      margin-top: 0;
      clip-path: polygon(23% 0, 100% 0, 100% 100%, 0% 100%);
    }

    .en {
      bottom: size-m(35);
      right: size-m(37);
      width: size-m(236);
      @media (min-width: 768px) {
        bottom: size(86);
        right: size(76);
        width: size(341.73);
      }
    }
  }
}
</style>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  function isFullyVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= windowWidth
    );

    return isVisible;
  }

  function checkImgs() {
    const img1 = document.querySelector('.s3 .img1');
    const img2 = document.querySelector('.s3 .img2');

    if (isFullyVisible(img1)) {
      img1.classList.add('show');
    } else {
      img1.classList.remove('show');
    }

    if (isFullyVisible(img2)) {
      img2.classList.add('show');
    } else {
      img2.classList.remove('show');
    }
  }

  const media = window.matchMedia("(min-width: 768px)");

  media.addEventListener("change", function() {
    if (media.matches) {
      document.querySelector('.s3 .img1').remove('show');
      document.querySelector('.s3 .img2').remove('show');
    } else {
      checkImgs();
    }
  });

  window.addEventListener('scroll', function() {
    if (media.matches) return;
    checkImgs();
  });
});
</script>
