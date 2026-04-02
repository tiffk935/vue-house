<template>
  <section>
    <div class="top">
      <div class="title"><span>NEWS</span>最新消息</div>
      <!-- <div class="tabs">
         <div class="tab" :class="{active: type === '消息新聞'}"><RouterLink to="/news">消息新聞</RouterLink></div>
       <div class="tab" :class="{active: type === '專題研究'}"><RouterLink to="/projects">專題研究</RouterLink></div>
      </div> -->
    </div>
    <div class="list">
      <article v-for="item in list" :key="item">
        <RouterLink :to="item.link">
          <div class="photo">
            <img :src="getImg(item.thumbnail)" :alt="item.title" />
          </div>
          <h3>{{ item.title }}</h3>
          <div class="meta">
            <div class="date">{{ item.date }}</div>
            <div class="line"></div>
            <div class="more">READ MORE+</div>
          </div>
        </RouterLink>
      </article>
    </div>

    <!-- <pagination
      v-if="list.length > 0"
      v-model="currPage"
      :records="typeList.length"
      :per-page="perPage"
      :options="{
        chunk: 5,
        hideCount: true
      }"
      @paginate="onClickPagination($event)"
    /> -->

    <vue-awesome-paginate
      :total-items="typeList.length"
      :items-per-page="6"
      :max-pages-shown="3"
      v-model="currPage"
      @click="onClickPagination"
      prev-button-content="<<"
      next-button-content=">>"
      type="button"
      :link-url="`/${type}/page/[page]`"
    />
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

#page-undefined section {
  padding: func.size-m(60) func.size-m(30) func.size-m(34) func.size-m(30);
  @media screen and (min-width:768px) {
    padding: func.size(108) func.size(160) func.size(250) func.size(160);
    margin: func.size(115)  auto 0;
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
      font-weight: 400;
      color: #0008;
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
    

  a {
    position: relative;
  @media screen and (min-width:768px) {
    &::before{
      content: "";
      position: absolute;
      top:func.size(-10);left: func.size(-10);width: calc(100% + func.size(20) - 2px);height: calc(100% + func.size(20));z-index:3;
      border: 1px solid #0003;transform: scale(.7);opacity: 0;
      transition: all .3s;
    }
    &:hover:before{
      transform: scale(1);opacity: 1;
    }
  }
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

      .photo {
        width: 100%;
        height: 0;
        padding-top: 68.615%;
        position: relative;
        margin-bottom: func.size-m(7);
        @media screen and (min-width:768px) {
          margin-bottom: func.size(23);
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h3 {
        font-size: func.size-m(18);
        font-weight: 400;
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
        color: #0007;

        .date {
          font-size: func.size-m(12);
          letter-spacing: .06em;
          @media screen and (min-width:768px) {
            font-size: func.size(14);
          }
        }

        .line {
          flex: 1;
          height: func.size-m(1);
          background:currentColor;
          margin: 0 func.size-m(10);
          @media screen and (min-width:768px) {
            height: func.size(1);
            margin: 0 func.size(20);
          }
        }

        .more {
          font-size: func.size-m(12);
          letter-spacing: .03em;
          @media screen and (min-width:768px) {
            font-size: func.size(12);
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

.pagination-container {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  padding-bottom: func.size-m(21);
  border-bottom: func.size-m(1) solid #000;
  @media screen and (min-width:768px) {
    justify-content: flex-end;
    padding-bottom: func.size(17);
    border-bottom: func.size(1) solid #000;
  }
  
  li {
    display: block;
    margin-right: func.size-m(7);
    @media screen and (min-width:768px) {
      margin-right: func.size(7);
    }

    &:last-child {
      margin-right: 0;
    }
  }
  
  button {
    color: #C8C9CA;
    font-size: func.size-m(21);
    padding: 0 func.size-m(4);
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    @media screen and (min-width:768px) {
      font-size: func.size(37);
      padding: 0 func.size(4);
    }
  }

  .active-page {
    color: #000;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import news from '@/info/news';
// import Pagination from 'v-pagination-3';
import { useRoute, useRouter } from 'vue-router';
import "vue-awesome-paginate/dist/style.css";

const router = useRouter();
const route = useRoute();

let type = '消息新聞';
let typeSlug = 'news';
if (route.path === '/projects' || route.path === '/projects/' || route.path.substring(0, 9) === '/projects') {
  type = '專題研究';
  typeSlug = 'projects';
}

const typeList = news.filter(item => item.type === type);
const currPage = ref(parseInt(route.params.page) || 1);
const perPage = 6;
const list = ref([]);

const images = import.meta.glob('../assets/news/**/*.*', { eager: true });
const getImg = path => images[path]?.default || '';

const fetchList = page => {
  const offset = perPage * (page - 1);
  list.value = typeList.filter((item, idx) => idx >= offset && idx < offset + perPage);
}

fetchList(currPage.value);

const onClickPagination = (page) => {
  router.push(`/${typeSlug}/page/${page}`);
}
</script>