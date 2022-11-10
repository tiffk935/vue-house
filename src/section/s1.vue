<template>
  <section class="s1 text-white bg-[#D9374B] relative">
    <img class="cloud absolute md:hidden" src="@/section/s1/cloud-m.png" />
    <img class="cloud absolute hidden md:block" src="@/section/s1/cloud.png" />
    <img class="house absolute" src="@/section/s1/house.png" />
    <img class="logo absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/logo.svg" />
    <img class="logo absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/logo.svg" />
    <div class="title">
    <div class="t1" data-aos="fade-up" data-aos-delay="200">超低公設 甲級營造</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="300">航空客運園區 <span>2-3</span> 房</div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes floatY {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-10%);
  }
}

.s1 {
  width: 100%;
  height: size-m(667);
  @media screen and (min-width:768px) {
    height: size(1080);
  }


  .title{
    position: absolute;
    top: size(550);
    right:size(280);

    @media screen and (max-width:768px) {
      text-align: center;
      top: size-m(240);
      right:size-m(70);
    }

    .t1{
      font-size: size(46);
      color: #fff;
      font-weight: 900;
      margin-bottom:size(-20);

      @media screen and (max-width:768px) {
        font-size: size-m(29);
        margin-bottom:size-m(-15);
      }
    }

    .t2{
      font-size: size(40);
      color: #fff;
      font-weight:500;

      @media screen and (max-width:768px) {
        font-size: size-m(25);
      }

      span{
        color: #FFF100;
        font-size: size(61);

        @media screen and (max-width:768px) {
        font-size: size-m(34);
      }
      }
    }

  }



  .cloud {
    top: size-m(346);
    left: size-m(136);
    width: size-m(158);
    animation: floatY 6s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      top: size(126);
      left: size(389);
      width: size(402);
    }
  }



  .house {
    top: size-m(488);
    left: size-m(35);
    width: size-m(304);
    @media screen and (min-width:768px) {
      top: size(759);
      left: size(1232);
      width: size(575);
    }
  }

  .logo {
    top: size-m(62);
    left: size-m(64);
    width: size-m(246);
    @media screen and (min-width:768px) {
      top: size(382);
      left: size(722.85);
      width: size(448.81);
    }
  }

  .text {
    top: size-m(243);
    left: size-m(68);
    width: size-m(238);
    @media screen and (min-width:768px) {
      top: size(557);
      left: size(1230);
      width: size(410);
    }
  }
}

</style>

<script setup>
// import { inject } from 'vue';
// const smoothScroll = inject('smoothScroll')
// const scrollTo = (el) => {
//   smoothScroll({
//     scrollTo: document.querySelector(el)
//   })
// }
</script>
