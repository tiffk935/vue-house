<template>
  <!--  <Marquee />  -->
  <section class="team">
    <!-- 
     <img src="@/assets/pc.jpg" class="t0" />
    <img src="@/assets/pct2.jpg" class="t0 pc" />
    <img src="@/assets/mot2.jpg" class="t0 mob" /> -->
    <!-- <img class="mob" src="@/assets/work/banner-m.webp" />
    <img class="pc" src="@/assets/work/banner.webp" />  -->
    <img class="pc" src="@/assets/team/pic.jpg" />
    <img class="mob" src="@/assets/team/pic-m.jpg" />
    <img class="logo" src="@/assets/team/logo.svg" />
    <div class="title">
      <div>
        <div class="t1">不只是住得好，更要活得講究。</div>
        <div class="t2">做建築，要做到國際級；做美食，要拿到米其林。</div>
      </div>
    </div>
  </section>

  <section class="team-list">
    <div class="tabs">
      <div class="tab" :class="{ active: tab === '巨擘團隊' }" @click="tab = '巨擘團隊'">巨擘團隊</div>
      <div class="tab" :class="{ active: tab === '米其林團隊' }" @click="tab = '米其林團隊'">米其林團隊</div>
    </div>

    <Transition>
      <div class="items items1" v-if="tab === '巨擘團隊'">
        <div class="txt">
          <div>
            國城建設四十年來，每一個建築計畫，都不只是打造一座房子，而是思考如何為城市帶來新的價值。國城始終選擇與世界級的大師攜手合作，因為我們深信：唯有卓越，才能不辜負土地的珍貴；唯有引進國際視野，再從在地出發，才能孕育出獨一無二的生活場景。<br /><br />
            正因如此，國城建設不畏挑戰、不甘平凡，持續以大師的維度，推動城市的更新與美學的進化。我們要的從來不只是建築本身，而是讓建築成為一座城市的風景、一種生活的品味，以及一代代人們共享的驕傲。</div>
        </div>
        <div class="item" v-for="(item, idx) in list1" data-aos="fade-up" data-aos-duration="1000"
          :data-aos-delay="idx * 200" :key="idx">
          <div class="photo">
            <img :src="getImg(`../assets/team/1/${idx + 1}.webp`)" :alt="item.name" />
          </div>
          <div class="info">
            <div>
              <div class="title" v-html="item.title"></div>
              <div class="desc" v-html="item.desc"></div>
            </div>
            <div class="name" v-html="item.name"></div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition>
      <div class="items items2" v-if="tab === '米其林團隊'">
        <div class="txt">
          <div>國城與米其林主廚聯手，打造完整的高端生活版圖。我們相信，好的建築提供居住的容器，而講究的餐飲則延伸生活的內涵；兩者結合，才能構成真正的生活美學。<br /><br />
            米其林是國城對「國際標準的高端生活」的詮釋，也是一種對細節的執著、對品質的嚴謹、對生活的尊重，透過跨界的生活實踐，國城希望讓建築之外的日常，也能與世界同步，成為人們與城市共享的高端品味。</div>
        </div>
        <template v-for="(item, idx) in list2" :key="idx">
        <div v-if="!(isMobile && !item.desc && !item.srcm)" class="item" data-aos="fade-up" data-aos-duration="1000" 
          :data-aos-delay="idx * 200" :key="idx">
          <div class="photo">
            <img :src="isMobile && item.srcm ? item.srcm : getImg(`../assets/team/2/${idx + 1}.webp`)" :alt="item.name" />
            <img class="icon" v-if="item.icon" src="@/assets/team/icon.svg" />
          </div>
          <div class="info" v-if="item.desc">
            <div>
              <div class="title" v-html="item.title"></div>
              <div class="desc" v-if="item.desc" v-html="item.desc"></div>
            </div>
            <div class="name" v-html="item.name"></div>
          </div>
        </div>
      </template>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

.t0 {
  position: absolute;
  top: -75px;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 9;
  opacity: .4;
}

.mob {
  display: block;

  @media screen and (min-width:768px) {
    display: none;
  }
}

.pc {
  display: none;

  @media screen and (min-width:768px) {
    display: block;
  }
}


#page-team {

  .v-enter-active,
  .v-leave-active {
    transition: opacity .5s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 1;
  }

  .marquee-wrapper {
    padding: 0 0 func.size-m(27) 0;

    @media screen and (min-width:768px) {
      padding: func.size(85) 0 func.size(67) 0;
    }
  }

  .team {
    position: relative;
    margin: 0;

    @media screen and (min-width:768px) {
      margin: func.size(115) 0 0 0;
    }

    img {
      width: 100%;
    }

    .logo {
      position: absolute;
      top: func.size-m(156);
      left: 0;
      right: 0;
      margin: 0 auto;
      width: func.size-m(120);

      @media screen and (min-width:768px) {
        top: func.size(268);
        width: func.size(345);
      }
    }

    .title {
      text-align: center;
      padding: 0 func.size-m(10) 0 func.size-m(30);

      @media screen and (min-width:768px) {
        text-align: left;
        padding: 0 func.size(135);
      }

      &>div {
        padding: func.size-m(34) 0 func.size-m(23) 0;

        @media screen and (min-width:768px) {
          padding: func.size(20) 0 func.size(25) 0;
          border-bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
      }

      .t1 {
        font-size: func.size-m(23);
        line-height: 1.6;
        font-weight: 500;
        margin-bottom: func.size-m(15);
        text-align: justify;

        @media screen and (min-width:768px) {
          font-size: func.size(55);
          margin-bottom: 0;
        }
      }

      .t2 {
        font-size: func.size-m(14);
        line-height: 1.6;
        text-align: justify;

        @media screen and (min-width:768px) {
          font-size: func.size(25);
          letter-spacing: .02em;
          margin-bottom: .3em;
        }
      }
    }
  }


  .team-list {
    padding: 0 func.size-m(30);

    @media screen and (min-width:768px) {
      padding: 0 func.size(135);
    }

    .tabs {
      width: 100%;
      display: table;
      border-collapse: collapse;
      margin-bottom: func.size-m(22);

      @media screen and (min-width:768px) {
        margin-bottom: func.size(130);
      }

      .tab {
        width: 50%;
        display: table-cell;
        border: func.size-m(1) solid #000;
        text-align: center;
        padding: func.size-m(6);
        cursor: pointer;

        @media screen and (min-width:768px) {
          border: func.size(1) solid #000;
          padding: func.size(14);
          font-size: func.size(30);
        }

        &:hover {
          background: #0003;
        }

        &.active {
          background: #000;
          color: #fff;
          font-weight: 700;
        }
      }
    }

    .txt {
      font-size: func.size-m(13);
      line-height: 1.8;
      margin-bottom: func.size-m(40);
      text-align: justify;

      @media screen and (min-width:768px) {
        font-size: func.size(25);
        line-height: 2.5;
        margin-bottom: func.size(150);
        width: 100%;
      }

      div {
        width: 100%;
        margin: 0 auto;

        @media screen and (min-width:768px) {
          width: func.size(985);
        }
      }
    }

    .items {
      @media screen and (min-width:768px) {
        margin: 0 func.size(-27);
        width: calc(100% + func.size(27 * 2));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      &.items1{
        .item{
          .title{text-transform: uppercase;}
        }
      }

      .item {
        position: relative;
        display: flex;
        align-items: stretch;
        margin-bottom: func.size-m(21);
        font-family: Roboto, "Noto Sans TC", sans-serif;
        flex-direction: row-reverse;
        background: #fff;

        @media screen and (min-width:768px) {
          width: func.size(500);
          display: block;
          padding: 0 func.size(27);
          margin-bottom: func.size(132);
          background: none;
        }

        .photo {
          position: relative;
          height: func.size-m(124);
          padding: 0;

          @media screen and (min-width:768px) {
            width: 100%;
            height: auto;
          }

          img {
            width: auto;
            height: 100%;
          @media screen and (min-width:768px) {
            
            width: 100%;
            height: auto;
          }
            // display: block;
          }
        }

        .icon {
          position: absolute;
          top: func.size-m(8);
          right: func.size-m(10);
          width: func.size-m(23) !important;

          @media screen and (min-width:768px) {
            top: func.size(14);
            right: func.size(16);
            width: func.size(59) !important;
          }
        }

        .info {
          width: calc(100% - func.size-m(149));
          padding: 0  func.size-m(9) func.size-m(7) func.size-m(9);
          display: flex;
          align-items:flex-start;
          flex-direction: column;
          justify-content: flex-end;


          // border-bottom: func.size-m(2) solid #000;
          @media screen and (min-width:768px) {
            flex-direction: row;
            justify-content:flex-start;
            align-items:center;
            width: 100%;
            padding: func.size(27) 0 func.size(17) 0;
            border-bottom: func.size(6) solid #000;
          }
        }

        &:nth-child(even) {
          flex-direction: row;

          @media screen and (max-width:767px) {
            .info {
              align-items:flex-end;
              text-align: right;
            }
          }
        }

        .title {
          font-size: func.size-m(15);
          font-weight: 500;
          margin-bottom: func.size-m(-2);
          // text-transform:none;
          line-height: 1.5;

          @media screen and (min-width:768px) {
            font-size: func.size(42);
            margin-bottom: func.size(-6);
            letter-spacing: 0;
        //  text-transform: uppercase;
          }
        }

        .desc {
          font-size: func.size-m(12);
          font-weight: 500;
          letter-spacing: .02em;

          @media screen and (min-width:768px) {
            font-size: func.size(22);
            margin-bottom: func.size(37);
            margin-top: func.size(-2);
          }
        }

        .name {
          font-size: func.size-m(19);
            font-weight: 600;
            margin-top: .9em;

          @media screen and (min-width:768px) {
          position: absolute;
            bottom: func.size(16);
            left: auto;
            right: func.size(27);
            font-size: func.size(39);
            letter-spacing: 0;
          }

          span {
            font-size: func.size-m(9);

            @media screen and (min-width:768px) {
              font-size: func.size(24);
            }
          }
        }
      }
    }
  }
}
</style>

<script setup>
import { ref, watch ,onMounted } from "vue";
import { useRoute } from 'vue-router';
// import Marquee from "@/components/Marquee.vue";
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
})
const route = useRoute();
const hash = route.hash ? route.hash.substring(1) : '巨擘團隊';
const tab = ref(hash); // 米其林團隊
const images = import.meta.glob('../assets/team/**/*.*', { eager: true });
const getImg = path => images[path]?.default || '';
const list1 = [
  {
    title: 'Aman之父',
    desc: '安縵御用',
    name: 'Jaya Ibrahim'
  },
  {
    title: 'Ando Tadao',
    desc: '普利茲克獎 建築師',
    name: '安藤 忠雄'
  },
  {
    title: 'SCDA',
    desc: '豪宅推手',
    name: 'SOO K. CHAN'
  },
  {
    title: 'SHUNMYO MASUNO',
    desc: '日本現代景觀大師',
    name: '枡野俊明'
  },
  {
    title: 'OBAYASHI',
    desc: '台灣大林組',
    name: '今井 昌彥'
  },
  {
    title: 'The Flaming Beacon',
    desc: '燈光團隊',
    name: 'Andrew Jaques'
  },
  {
    title: 'KEIJI ASHIZAWA',
    desc: 'Blue Bottle 風格美學',
    name: '芦沢 啓治'
  },
  {
    title: 'Tomoya Hashiuchi',
    desc: '橋內庭園設計',
    name: '橋內 智也'
  },
  {
    title: 'AURORA Inc.',
    desc: '日籍 燈光設計師',
    name: '市川善幾'
  },
];
const list2 = [
  {
    name: '雋GEN',
    srcm: new URL('../assets/team/2/1m.webp', import.meta.url).href
  },
  {
    title: '雋GEN',
    desc: isMobile?'頂級粵菜 / 行政主廚':'頂級粵菜',
    name: isMobile?'胡鑑波':'<span>行政主廚</span> 胡鑑波',
    icon: false
  },
  {
    title: '雋GEN',
    desc: isMobile?'頂級粵菜 / 餐飲總監':'頂級粵菜',
    name: isMobile?'陳泰榮':'<span>餐飲總監</span> 陳泰榮',
  },
  {
    name: '承Sho',
    srcm: new URL('../assets/team/2/4m.webp', import.meta.url).href
  },
  {
    name: '承Sho',
  },
  {
    title: '承Sho',
    desc: isMobile?'日本料理 / 料理長':'日本料理',
    name: isMobile?'藤本 詳一':'<span>料理長</span> 藤本詳一',
  },
  {
    name: 'Li.nu',
    srcm: new URL('../assets/team/2/7m.webp', import.meta.url).href
  },
  {
    title: 'Li.nu',
    desc: '日本料理',
    name: '<span>bon.nu 創辦人</span> 來栖けい'
  },
  {
    title: 'Li.nu',
    desc: isMobile?'日本料理 / 星級主廚':'日本料理',
    name: isMobile?'李祈睿':'<span>星級主廚</span> 李祈睿',
  },
  {
    name: '雋GEN',
    srcm: new URL('../assets/team/2/10m.webp', import.meta.url).href
  },
  {
    title: 'Liberte',
  },
  {
    title: 'Liberte',
    desc: isMobile?'法式料理 / 星級主廚':'法式料理',
    name: isMobile?'武田 健志':'<span>星級主廚</span> 武田健志',
  },
];

watch(() => route.hash, (newHash, oldHash) => {
  const hash = newHash ? newHash.substring(1) : '巨擘團隊';
  tab.value = hash;
  window.scrollTo(0, 0);
})
</script>