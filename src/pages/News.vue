<template>
  <section>
    <div class="top">
      <div class="title"><span>NEWS</span>最新消息</div>
      <div class="tabs">
        <div class="tab active"><a href="">消息新聞</a></div>
        <div class="tab"><a href="">專題研究</a></div>
      </div>
    </div>
    <div class="list">
      <article v-for="(item, idx) in list">
        <a href="#">
          <img :src="getImg(`../assets/news/${idx + 1}/thumbnail.jpg`)" />
          <h3>{{ item.title }}</h3>
          <div class="meta">
            <div class="date">{{ item.date }}</div>
            <div class="line"></div>
            <div class="more">READ MORE+</div>
          </div>
        </a>
      </article>
    </div>
    <div class="pagination">
      <template v-for="num in 7">
        <a :class="{ active: num === 1 }" href="">{{ num }}</a>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

section {
  padding: func.size-m(60) func.size-m(30) func.size-m(34) func.size-m(30);
  @media screen and (min-width:768px) {
    padding: func.size(108) func.size(160) func.size(250) func.size(160);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .top {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: func.size(106);
    }
  }

  .title {
    font-size: func.size-m(18);
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: func.size-m(27);
    @media screen and (min-width:768px) {
      font-size: func.size(33);
      margin-bottom: 0;
    }

    span {
      font-weight: 100;
      margin-right: func.size-m(6);
      @media screen and (min-width:768px) {
        margin-right: func.size(21);
      }
    }
  }

  .tabs {
    margin-bottom: func.size-m(20);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    @media screen and (min-width:768px) {
      margin-bottom: 0;
    }

    .tab {
      color: #B6B6B7;
      font-size: func.size-m(16);
      line-height: 1;
      font-weight: 700;
      padding-right: func.size-m(9);
      border-right: func.size-m(1) solid #000;
      margin-right: func.size-m(9);
      @media screen and (min-width:768px) {
        font-size: func.size(27);
        padding-right: func.size(13);
        border-right: func.size(1) solid #000;
        margin-right: func.size(13);
      }

      &:last-child {
        padding-right: 0;
        margin-right: 0;
        border: none;
      }

      &.active {
        color: #000;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: func.size-m(80);
    @media screen and (min-width:768px) {
      margin: 0 func.size(-52.5) func.size(135) func.size(-52.5);
    }

    article {
      width: 100%;
      margin-bottom: func.size-m(34);
      @media screen and (min-width:768px) {
        width: 33.3333%;
        padding: 0 func.size(52.5);
      }

      &:last-child {
        margin-bottom: 0;
      }

      &:nth-last-child(-n + 3) {
        @media screen and (min-width:768px) {
          margin-bottom: 0;
        }
      }

      img {
        display: block;
        width: 100%;
        margin-bottom: func.size-m(7);
        @media screen and (min-width:768px) {
          margin-bottom: func.size(23);
        }
      }

      h3 {
        font-size: func.size-m(18);
        font-weight: 500;
        line-height: func.size-m(26);
        letter-spacing: .01em;
        margin-bottom: func.size-m(5);
        @media screen and (min-width:768px) {
          font-size: func.size(27);
          line-height: func.size(45);
          margin-bottom: func.size(10);
        }
      }

      .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .date {
          font-size: func.size-m(12);
          font-weight: 100;
          letter-spacing: .06em;
          @media screen and (min-width:768px) {
            font-size: func.size(14);
          }
        }

        .line {
          flex: 1;
          height: func.size-m(1);
          background: #000;
          margin: 0 func.size-m(10);
          @media screen and (min-width:768px) {
            height: func.size(1);
            margin: 0 func.size(20);
          }
        }

        .more {
          color: #898989;
          font-size: func.size-m(12);
          font-weight: 300;
          letter-spacing: .03em;
          @media screen and (min-width:768px) {
            font-size: func.size(12);
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    padding-bottom: func.size-m(21);
    border-bottom: func.size-m(1) solid #000;
    @media screen and (min-width:768px) {
      justify-content: flex-end;
      padding-bottom: func.size(17);
      border-bottom: func.size(1) solid #000;
    }

    a {
      color: #C8C9CA;
      font-size: func.size-m(21);
      padding: 0 func.size-m(4);
      margin-right: func.size-m(7);
      @media screen and (min-width:768px) {
        font-size: func.size(37);
        padding: 0 func.size(4);
        margin-right: func.size(7);
      }

      &:last-child {
        margin-right: 0;
      }

      &.active {
        color: #000;
      }
    }
  }
}
</style>

<script setup>
const images = import.meta.glob('../assets/news/**/*.*', { eager: true });
const getImg = path => images[path]?.default || '';
const list = [
  {
    title: '國城建設台南都更聯貸近175億今簽約將蓋12棟住宅大樓',
    date: '2024.10.08',
  },
  {
    title: '國城建設攜手高興昌 拿下高雄 2 捷運聯開案 2025年動工',
    date: '2024.03.27',
  },
  {
    title: '高雄之光米其林雙星餐廳後繼有好料 國城集團再開高檔粵菜中餐廳',
    date: '2024.03.21',
  },
  {
    title: '【開箱國城】6個細節深入《定潮》：高雄人的極致嚮往',
    date: '2024.10.08',
  },
  {
    title: '【平實超展開】臺南人也不知道的平實重劃區 ？解密區域發展脈絡',
    date: '2024.03.27',
  },
  {
    title: '【產業超白話】公辦都更的難與喃，國城建設：重來一次還是會這麼做',
    date: '2024.03.27',
  },
];
</script>