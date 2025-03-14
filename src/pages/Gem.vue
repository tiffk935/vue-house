<template>
  <section class="banner">
    <div class="title-m" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"></div>
    <div class="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"></div>
    <img class="style" src="@/assets/home/banner/style.webp" />
    <div class="info" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"></div>
    <img class="logoicon" src="@/assets/home/banner/logoicon.svg" />
    <RouterLink class="onder-btn" to="/vision#order">立即預約</RouterLink>
  </section>

  <section class="about">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>關於國城</h2>
    </div>
    <div class="marquee-wrapper">
      <div class="marquee marquee1">
        <img v-for="num in 4" src="@/assets/home/about/pic1.webp" />
      </div>
      <div class="marquee marquee2">
        <img v-for="num in 4" src="@/assets/home/about/pic2.webp" />
      </div>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">走在前，讓後面跟上來</div>
      <div class="t2">做建築，要做到國際級；做美食，要拿到米其林</div>
      <div class="t3">｜敬請期待</div>
    </div>
  </section>

  <section class="work">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>國城作品</h2>
    </div>
    <div class="container pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="pc" src="@/assets/home/work/pic.webp" />
      <img class="mob" src="@/assets/home/work/pic-m.webp" />
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">港都豪宅建築的定潮者</div>
      <div class="t2">想把最好的都帶進台灣來，這條路我們走了13年</div>
      <div class="t3">｜敬請期待</div>
    </div>
  </section>

  <section class="area">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>平實特區</h2>
    </div>
    <div class="container pic">
      <div class="parallax"></div>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1"><span>平實公園特區，<br>台南最好的都在這裡。</span></div>
      <div class="t2">要說府城最好的人文居住環境在哪？非東區莫屬。<br class="mob">而台南東區裡最美好的未來，在平實公園特區！</div>
      <div class="t3">｜敬請期待</div>
    </div>
  </section>

  <section class="team">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>平實團隊</h2>
    </div>
    <div class="container pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="pc" src="@/assets/home/team/pic.webp" />
      <img class="mob" src="@/assets/home/team/pic-m.webp" />
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t3">｜敬請期待</div>
    </div>
  </section>

  <section class="archi">
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <h2>平實建築</h2>
    </div>
    <div class="container pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <img class="pc" src="@/assets/home/archi/pic.webp" />
      <img class="mob" src="@/assets/home/archi/pic-m.webp" />
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t3">｜敬請期待</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

@mixin bg-contain {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  padding: 0 func.size-m(30);
  @media screen and (min-width:768px) {
    padding: 0 func.size(160);
  }
}

h2 {
  font-size: func.size-m(17);
  line-height: func.size-m(19);
  border-top: func.size-m(1) solid #000;
  border-bottom: func.size-m(1) solid #000;
  padding: func.size-m(9) 0;
  @media screen and (min-width:768px) {
    font-size: func.size(40);
    line-height: func.size(48);
    border-top: func.size(1) solid #000;
    border-bottom: func.size(1) solid #000;
    padding: func.size(22) 0;
  }
}

.t1 {
  font-size: func.size-m(24);
  font-weight: 700;
  line-height: func.size-m(29);
  margin-bottom: func.size-m(19);
  @media screen and (min-width:768px) {
    font-size: func.size(78);
    line-height: func.size(113);
    margin-bottom: func.size(38);
  }
}

.t2 {
  font-size: func.size-m(12);
  line-height: func.size-m(14);
  margin-bottom: func.size-m(22);
  @media screen and (min-width:768px) {
    font-size: func.size(34);
    line-height: func.size(41);
    margin-bottom: 0;
    letter-spacing: .05em;
  }
}

.t3 {
  font-size: func.size-m(14);
  line-height: func.size-m(38);
  text-align: right;
  padding-bottom: func.size-m(9);
  border-bottom: func.size-m(1) solid #000;
  letter-spacing: .04em;
  @media screen and (min-width:768px) {
    font-size: func.size(37);
    line-height: func.size(44);
    text-align: right;
    padding-bottom: func.size(19);
    border-bottom: func.size(1) solid #000;
    letter-spacing: .12em;
    margin-top: -2.2vw;
  }
}

.pc {
  display: none;
  @media screen and (min-width:768px) {
    display: block;
  }
}

.mob {
  display: block;
  @media screen and (min-width:768px) {
    display: none;
  }
}

.banner {
  position: relative;
  width: 100%;
  height: func.size-m(667);
  @media screen and (min-width:768px) {
    height: func.size(1080);
  }
  
  .title-m {
    position: absolute;
    top: func.size-m(94 + 74);
    left: func.size-m(53);
    width: func.size-m(267.52);
    height: func.size-m(135);
    background-image: url(@/assets/home/banner/img-m.webp);
    @include bg-contain;
    @media screen and (min-width:768px) {
      display: none;
    }
  }

  .title {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      top: func.size(347);
      left: func.size(475);
      width: func.size(1014.69);
      height: func.size(192.55);
      background-image: url(@/assets/home/banner/title.svg);
      @include bg-contain;
    }
  }

  .style {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      top: func.size(614);
      left: func.size(475);
      width: func.size(1014);
    }
  }
  
  .info {
    position: absolute;
    top: func.size-m(391);
    left: func.size-m(54);
    width: func.size-m(266.9);
    height: func.size-m(86.91);
    background-image: url(@/assets/home/banner/txt-m.svg);
    @include bg-contain;
    @media screen and (min-width:768px) {
      top: func.size(831);
      left: func.size(223);
      width: func.size(1067.44);
      height: func.size(133.23);
      background-image: url(@/assets/home/banner/txt.svg);
    }
  }
  
  .logoicon {
    position: absolute;
    top: func.size-m(552);
    left: func.size-m(131);
    width: func.size-m(113);
    @media screen and (min-width:768px) {
      top: func.size(939.98);
      left: func.size(1436);
      width: func.size(293.82);
    }
  }

  .onder-btn {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      top: func.size(670 + 165);
      left: func.size(1438);
      border: func.size(5) solid #219664;
      background: #fff;
      text-decoration: none;
      color: #000;
      font-size: func.size(31);
      letter-spacing: .18em;
      width: func.size(293);
      height: func.size(70);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover{
        background: #219664;
        color: #fff;
        transition:.3s;
      }
    }
  }
}

/* @keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
} */

.about {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(98) 0;
  }

  .marquee-wrapper {
    margin: func.size-m(48) 0;
    @media screen and (min-width:768px) {
      margin: func.size(80) 0 func.size(59) 0;
    }

    .marquee {
      height: func.size-m(118.5);
      background: #ddd;
      display: flex;
      overflow: hidden;
      @media screen and (min-width:768px) {
        height: func.size(229.5);
      }

      img {
        width: auto;
        height: 100%;
        /* animation: marquee 30s linear infinite; */
      }

      /* &.marquee2 {
        img {
          animation-delay: -2s;
        }
      } */
    }
  }
}

.work {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(98) 0;
  }

  .pic {
    margin: func.size-m(38) 0 func.size-m(29) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: func.size(67) 0 func.size(80) 0;
      padding: 0 func.size(160);
    }

    img {
      width: 100%;
    }
  }
}

.area {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(98) 0;
  }

  .pic {
    margin: func.size-m(38) 0 func.size-m(29) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: func.size(67) 0 0 0;
      padding: 0 func.size(160);
    }

    .parallax {
      width: 100%;
      height: func.size-m(273);
      background: #ddd;
      overflow: hidden;
      background-image: url(@/assets/home/area/pic.webp);
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: 0 80%;
      @media screen and (min-width:768px) {
        height: func.size(600);
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 58% 100%, 58% 72%, 0% 72%);
      }
    }
  }

  .t1 {
    @media screen and (min-width:768px) {
      margin-top: -7vw;
    }
  }

  .t2 {
    @media screen and (min-width:768px) {
      font-size: func.size(30);
      letter-spacing: 0;
    }
  }
}

.team {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(98) 0;
  }

  .pic {
    margin: func.size-m(36) 0 func.size-m(40) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: func.size(161) 0 func.size(171) 0;
      padding: 0 0 0 func.size(160);
    }

    img {
      width: func.size-m(260);
      margin: func.size-m(36) auto;
      @media screen and (min-width:768px) {
        width: 100%;
      }
    }
  }

  .t3 {
    @media screen and (min-width:768px) {
      margin-top: 0;
    }
  }
}

.archi {
  padding: func.size-m(25) 0 func.size-m(25 + 50) 0;
  @media screen and (min-width:768px) {
    padding: func.size(76) 0 func.size(69) 0;
  }

  .pic {
    margin: func.size-m(51) 0 func.size-m(40) 0;
    padding: 0 0 0 func.size-m(53);
    @media screen and (min-width:768px) {
      margin: func.size(268) 0 func.size(298) 0;
      padding: 0 func.size(160);
    }

    img {
      width: 100%;
    }
  }

  .t3 {
    @media screen and (min-width:768px) {
      margin-top: 0;
    }
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

  const marquee1TL = gsap.timeline({ repeat: -1, paused: true });
  marquee1TL.to('.about .marquee1 img', { xPercent: -100, duration: 30, ease: 'none' });
  const marquee2TL = gsap.timeline({ repeat: -1, paused: true });
  marquee2TL.to('.about .marquee2 img', { xPercent: -100, duration: 30, ease: 'none' });
  marquee2TL.seek(2);
  marquee1TL.play();
  marquee2TL.play();

  setTimeout(() => {
    gsap.to('.area .parallax', {
      backgroundPositionY: '30%',
      scrollTrigger: {
        trigger: '.area .parallax',
        start: 'top bottom',
        scrub: 0.2,
        end: 'top top',
      }
    });
  }, 50);
});
</script>