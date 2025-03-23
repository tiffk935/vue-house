<template>
  <section class="area">
    <div class="container pic">
      <div class="parallax"></div>
    </div>
    <div class="container txt" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1"><span>平實公園特區，<br>台南最好的都在這裡。</span></div>
      <div class="t2">要說府城最好的人文居住環境在哪？非東區莫屬。<br class="mob">而台南東區裡最美好的未來，在平實公園特區！</div>
    </div>
  </section>

  <!-- <section class="s1 tem-slider">
    <div class="slider">
      slider
    </div>
    <div class="tem-txt">
      <div class="t1">
        <span>台南雙核</span><br>
        工作在南科，生活在平實
      </div>
      <div class="t2">2023年，南科產值正式超越竹科，今日是台灣經濟發展引擎，明日未來也是；在南科展現前端科技工作，生活在東區最核心的平實公園特區，用台南最好的豐饒款待您與您的家人。</div>
    </div>
  </section> -->

  <section class="s3 tem-1">
    <img class="style" src="@/assets/pinshi/s3.jpg" />
    <div class="tem-txt">
      <div class="t1">
        <div>基地特性</div>
        平實最大<br>8600坪全街廓開發
      </div>
      <div class="t2">國城建設延伸高雄亞洲新灣區的開發經驗，與擘劃國際建築的心意，來到平實公園特區裡最大的土地，用整體開發、全面思考的眼光看待土地，讓8600坪基地綻放屬於台南的色彩。</div>
    </div>
  </section>

  <section class="s5 tem-1">
    <img class="style" src="@/assets/pinshi/s5.jpg" />
    <div class="tem-txt">
      <div class="t1">
        <div>十字軸線</div>
        台南命脈<br>小東路與中華東路
      </div>
      <div class="t2">小東路串連台南火車站、成大校區、對接大灣交流道直上國道；中華東路與中華西路、中華南北構成台南外環道，由此串連台南舊城區各大生活圈，往來皆便捷。</div>
    </div>
  </section>

  <section class="s8 tem-1">
    <img class="style" src="@/assets/pinshi/s8.jpg" />
    <div class="tem-txt">
      <div class="t1">
        <div>優質學區</div>
        成大校區、東光國小、<br>復興國中小
      </div>
      <div class="t2">車程5分鐘抵達東光國小、8分鐘復興中小學，擁有台南最優質少年養成環境；鄰近台南文教核心成大、一中校區車程約10分鐘，鋪排孩子最好的教育環境，就在此地。</div>
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

.t1 {
  font-size: func.size-m(17);
  font-weight: 700;
  line-height: func.size-m(20);
  margin-bottom: func.size-m(15);
  @media screen and (min-width:768px) {
    font-size: func.size(47);
    line-height: func.size(56);
    margin-bottom: func.size(49);
  }

  div {
    font-size: func.size-m(14);
    line-height: func.size-m(17);
    @media screen and (min-width:768px) {
      font-size: func.size(38);
      line-height: func.size(46);
    }
  }
}

.t2 {
  font-size: func.size-m(12);
  line-height: func.size-m(20);
  text-align: justify;
  @media screen and (min-width:768px) {
    font-size: func.size(20);
    line-height: func.size(36);
    letter-spacing: .05em;
  }
}

.tem-1 {
  padding: func.size-m(31) 0 func.size-m(58) 0;
  @media screen and (min-width:768px) {
    padding: func.size(96) func.size(170) func.size(96) 0;
    display: flex;
  }

  img  {
    display: block;
    width: 100%;
    @media screen and (min-width:768px) {
      width: func.size(1053);
    }
  }

  .tem-txt {
    width: calc(100% - func.size-m(60));
    margin: 0 auto;
    padding: func.size-m(30) func.size-m(20) func.size-m(24) func.size-m(20);
    background: #fff;
    @media screen and (min-width:768px) {
      width: calc(100% - func.size(1053));
      margin: 0;
      padding: func.size(106) func.size(65) func.size(100) func.size(65);
    }
  }

  .t1 {
    text-align: center;
    line-height: func.size-m(24);
    padding-bottom: func.size-m(28);
    border-bottom: func.size-m(1) solid #000;
    @media screen and (min-width:768px) {
      line-height: func.size(62);
      padding-bottom: func.size(114);
      border-bottom: func.size(1) solid #000;
    }

    div {
      margin-bottom: func.size-m(12);
      @media screen and (min-width:768px) {
        line-height: func.size(46);
        margin-bottom: func.size(69);
      }
    }
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

.area {
  padding: func.size-m(25) 0;
  @media screen and (min-width:768px) {
    padding: func.size(142) 0 func.size(67) 0;
  }

  .pic {
    margin: 0 0 func.size-m(26) 0;
    padding: 0;
    @media screen and (min-width:768px) {
      margin: 0 0 0 0;
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

  .txt {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .t1 {
    font-size: func.size-m(20);
    font-weight: 700;
    line-height: func.size-m(26);
    margin-bottom: func.size-m(25);
    @media screen and (min-width:768px) {
      font-size: func.size(78);
      line-height: func.size(94);
      margin-bottom: 0;
      margin-top: calc(-7vw - func.size(22));
    }
  }

  .t2 {
    padding-bottom: func.size-m(26);
    margin-bottom: 0;
    border-bottom: func.size-m(1) solid #000;
    @media screen and (min-width:768px) {
      font-size: func.size(30);
      line-height: func.size(42);
      letter-spacing: 0;
      width: func.size(666);
      margin-top: func.size(22);
      padding-bottom: 0;
      border: none;
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