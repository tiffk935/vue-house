<template>
  <Marquee />

  <section class="team-list">
    <div class="t1t2">
      <div class="t1">走在前，讓後面跟上來</div>
      <div class="t2">做建築，要做到國際級；做美食，要拿到米其林</div>
    </div>
    <div class="tabs">
      <div class="tab" :class="{active: tab === '巨擘團隊'}" @click="tab = '巨擘團隊'">巨擘團隊</div>
      <div class="tab" :class="{active: tab === '米其林團隊'}" @click="tab = '米其林團隊'">米其林團隊</div>
    </div>

    <Transition>
      <div class="items" v-if="tab === '巨擘團隊'">
        <div class="item" v-for="(item, idx) in list1" data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="idx * 200">
          <div class="photo">
            <img :src="getImg(`../assets/team/1/${idx + 1}.webp`)" />
          </div>
          <div class="info">
            <div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition>
      <div class="items" v-if="tab === '米其林團隊'">
        <div class="item" v-for="(item, idx) in list2" data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="idx * 200">
          <div class="photo">
            <img :src="getImg(`../assets/team/2/${idx + 1}.webp`)" />
            <img class="icon" v-if="item.icon" src="@/assets/team/icon.svg" />
          </div>
          <div class="info">
            <div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
            <div class="name" v-html="item.name"></div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

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

  .team-list {
    padding: 0 func.size-m(30);
    @media screen and (min-width:768px) {
      padding: 0 func.size(140);
    }

    .t1t2 {
      @media screen and (min-width:768px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: func.size(95);
      }
    }

    .t1 {
      font-size: func.size-m(20);
      font-weight: 700;
      margin-bottom: func.size-m(9);
      @media screen and (min-width:768px) {
        font-size: func.size(78);
        line-height: 1;
        font-weight: 700;
        margin-bottom: func.size(0);
      }
    }

    .t2 {
      font-size: func.size-m(12);
      margin-bottom: func.size-m(23);
      @media screen and (min-width:768px) {
        font-size: func.size(32);
        line-height: 1;
        margin-bottom: 0;
        letter-spacing: .05em;
      }
    }

    .tabs {
      width: 100%;
      display: table;
      border-collapse: collapse;
      margin-bottom: func.size-m(22);
      @media screen and (min-width:768px) {
        margin-bottom: func.size(146);
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
          background: #000;
          color: #fff;
        }

        &.active {
          font-weight: 700;
        }
      }
    }

    .items {
      @media screen and (min-width:768px) {
        margin: 0 func.size(-27);
        width: calc(100% + func.size(27 * 2));
        display: flex;
        flex-wrap: wrap;
      }

      .item {
        position: relative;
        display: flex;
        align-items: stretch;
        margin-bottom: func.size-m(28);
        @media screen and (min-width:768px) {
          width: 25%;
          display: block;
          padding: 0 func.size(27);
          margin-bottom: func.size(112);
        }

        .photo {
          position: relative;
          width: func.size-m(149);
          padding: 0;
          @media screen and (min-width:768px) {
            width: 100%;
          }

          img {
            width: 100%;
            display: block;
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
          padding: 0 0 0 func.size-m(9);
          display: flex;
          align-items: center;
          border-bottom: func.size-m(2) solid #000;
          @media screen and (min-width:768px) {
            width: 100%;
            padding: func.size(15) 0 func.size(17) 0;
            border-bottom: func.size(6) solid #000;
          }
        }

        &:nth-child(even) {
          flex-direction: row-reverse;

          .info {
            padding: 0 func.size-m(9) 0 0;
            @media screen and (min-width:768px) {
              padding: func.size(15) 0 func.size(17) 0;
            }
          }

          .name {
            right: auto;
            left: 0;
            @media screen and (min-width:768px) {
              right: func.size(27);
              left: auto;
            }
          }
        }

        .title {
          font-size: func.size-m(16);
          font-weight: 500;
          margin-bottom: func.size-m(4);
          @media screen and (min-width:768px) {
            font-size: func.size(33);
            margin-bottom: func.size(1);
            letter-spacing: .02em;
          }
        }

        .desc {
          font-size: func.size-m(12);
          font-weight: 500;
          letter-spacing: .02em;
          @media screen and (min-width:768px) {
            font-size: func.size(19);
            margin-bottom: func.size(56);
          }
        }
        
        .name {
          position: absolute;
          bottom: func.size-m(4);
          right: 0;
          font-size: func.size-m(16);
          @media screen and (min-width:768px) {
            bottom: func.size(9);
            right: func.size(27);
            font-size: func.size(33);
            letter-spacing: .02em;
          }
          
          span {
            font-size: func.size-m(12);
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
import { ref, watch } from "vue";
import { useRoute } from 'vue-router';
import Marquee from "@/components/Marquee.vue";
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
    name: '安藤 忠雄'
  },
  {
    title: 'SCDA',
    desc: '豪宅推手',
    name: 'SOO K. CHAN'
  },
  {
    title: 'The Flaming Beacon',
    desc: '燈光團隊',
    name: 'Andrew Jaques'
  },
  {
    title: 'SHUNMYO MASUNO',
    desc: '日本現代景觀大師',
    name: '枡野俊明'
  },
  {
    title: 'Tomoya Hashiuchi',
    desc: '橋内庭園設計',
    name: '橋內 智也'
  },
  {
    title: 'KEIJI ASHIZAWA',
    desc: 'Blue Bottle 風格美學',
    name: '芦沢 啓治'
  },
  {
    title: 'OBAYASHI',
    desc: '台灣大林組',
    name: '今井 昌彥'
  },
  {
    title: 'AURORA Inc.',
    desc: '日籍 燈光設計師',
    name: '市川善幾'
  },
];
const list2 = [
  {
    title: 'Li.nu',
    desc: '日本料理',
    name: '來栖 けい'
  },
  {
    title: '雋GEN',
    desc: '頂級粵菜',
    name: '<span>行政主廚</span> 胡鑑波',
    icon: true
  },
  {
    title: '雋GEN',
    desc: '頂級粵菜',
    name: '<span>餐飲總監</span> 陳泰榮',
    icon: true
  },
  {
    title: '承Sho',
    desc: '日本料理',
    name: '藤本 詳一',
    icon: true
  },
];

watch(() => route.hash, (newHash, oldHash) => {
  const hash = newHash ? newHash.substring(1) : '巨擘團隊';
  tab.value = hash;
  window.scrollTo(0, 0);
})
</script>