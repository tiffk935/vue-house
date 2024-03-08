<template>
  <section class="s1 text-white relative">
    <img class="bg absolute hidden md:block" src="@/section/s1/bg1.png" />
  <img class="bg absolute md:hidden" src="@/section/s1/bg-m.jpg" />
   <!--   <img class="tree absolute hidden md:block" src="@/section/s1/tree.png" />
    <img class="tree absolute md:hidden" src="@/section/s1/tree_m.png" />
    <img class="tree1 absolute md:hidden" src="@/section/s1/tree_m1.png" /> --> 
    <img class="logo absolute" data-aos="fade-down" data-aos-delay="0" src="@/section/s1/logo.svg" />
    <div class="title absolute hidden md:block" data-aos="fade-down" data-aos-delay="200">
      <div class="l1">千億建設啟動 純住文教特區</div>
    </div>
    <div class="title absolute md:hidden" data-aos="fade-down" data-aos-delay="200">
      <div class="l1">千億建設啟動 純住文教特區</div>
    </div>
    <img class="logo2 absolute" data-aos="fade-down" data-aos-delay="0" src="@/section/s1/logo2.svg" />
    
    <!--img class="person1 absolute" data-aos="fade-right" data-aos-delay="0" src="@/section/s1/person1.png" />
    <img class="person2 absolute" data-aos="fade-right" data-aos-delay="200" src="@/section/s1/person2.png" />
    <div data-aos="fade-left" data-aos-delay="200">
      <img class="person3 absolute" src="@/section/s1/person3.png" />
    </div>
    <img class="person4 absolute" data-aos="fade-left" data-aos-delay="0" src="@/section/s1/person4.png" /-->

    <!-- <img class="cloud absolute md:hidden" src="@/section/s1/cloud-m.png" />
    <img class="cloud absolute hidden md:block" src="@/section/s1/cloud.png" />
    <img class="house absolute" src="@/section/s1/house.png" />
    <img class="logo absolute md:hidden" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/logo.svg" />
    <img class="logo absolute hidden md:block" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/logo.svg" />
    
    <div class="title">
      <div class="t1" data-aos="fade-up" data-aos-delay="200">超低公設 甲級營造</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="300">航空客運園區 <span>2-3</span> 房</div>
    </div> -->
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes tree {
  from {
    transform: skew(-3deg)
  }
  to {
    transform: skew(3deg)
  }
}

.s1 {
  width: 100%;
  height: size-m(667);
  font-family: 'Noto Serif TC';
  overflow: hidden;
  background: #8D3862;
  @media screen and (min-width:768px) {
    height: size(1080);
  }
  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
   // mix-blend-mode: multiply;
  }

  .tree {
    width: size-m(375);
    bottom: size-m(0);
    left: size-m(0);
    max-width: none;
    transform-origin: bottom;
    //animation: tree 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width:100%;
      bottom: size(0);
      left: size(0);
    }
  }

  .tree1 {
    width: size-m(375);
    top: size-m(0);
    left: size-m(0);
    max-width: none;
    transform-origin: bottom;
    //animation: tree 3s alternate-reverse infinite ease-in-out;
    @media screen and (min-width:768px) {
      width: size(1920);
      bottom: size(0);
      left: size(0);
    }
  }
/*
  .person1 {
    width: size-m(171.23);
    top: size-m(410);
    left: size-m(-25);
    @media screen and (min-width:768px) {
      width: size(350.24);
      top: size(758.36);
      left: size(131);
    }
  }

  .person2 {
    width: size-m(105.21);
    top: size-m(414);
    left: size-m(50.79);
    @media screen and (min-width:768px) {
      width: size(223.67);
      top: size(751);
      left: size(379);
    }
  }

  .person3 {
    width: size-m(174.34);
    top: size-m(387.35);
    left: size-m(185.05);
    transform: matrix(-1, 0.03, 0.03, 1, 0, 0);
    @media screen and (min-width:768px) {
      width: size(404.43);
      top: size(684.12);
      left: size(1235);
    }
  }

  .person4 {
    width: size-m(150);
    top: size-m(385);
    left: size-m(268);
    @media screen and (min-width:768px) {
      width: size(342);
      top: size(678);
      left: size(1529);
    }
  }
*/
  .logo {
    width: size-m(271);
    top: size-m(190);
    left: size-m(52);
    @media screen and (min-width:768px) {
      width: size(900);
      top: size(350);
      left: size(500);
    }
  }

  .title {
    width: 100%;
    top: size-m(341);
    left: 0;
    text-align: center;
    font-weight: 600;
    font-size: size-m(23);
    @media screen and (min-width:768px) {
      top: size(600);
      font-size: size(40);
    }

    .l1 {
      font-weight: 700;
      font-size: size-m(25);
      @media screen and (min-width:768px) {
        font-size: size(40);
      }
    }
  }
  .logo2 {
    width: size-m(271);
    top: size-m(190);
    left: size-m(52);
    @media screen and (min-width:768px) {
      width: size(200);
      top: size(221);
      left: size(567);
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
