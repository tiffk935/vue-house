<template>
  <section>
    <div class="title"><span>NEWS</span>最新消息</div>
    <article>
      <h1>國城建設台南都更聯貸近175億今簽約將蓋12棟住宅大樓</h1>
      <div class="detail">
        <img class="cover" src="@/assets/news/1/thumbnail.jpg" />
        <div class="content">
          <PerfectScrollbar ref="scrollbar">
            【記者林巧雁／台北報導】<br>
            <br>
            <br>
            第一銀行與合庫銀、土銀今日完成主辦國城建設174.9億元聯貸簽約，聯貸資金主要支應台南市東區平實段4筆土地都市更新，由國城建設擔任本都更案實施者，基地位於台南市東區文教區，面積約8683坪，將興建12棟大樓住宅，其中一棟回饋予台南市政府作為公宅。<br>
            <br>
            一銀主辦國城建設174.9億元聯貸，由合庫銀董事長林衍茂（左1）、國城建設董事長蔡麗環（左2）、一銀董事長邱月琴（中）、國城建設總裁洪平森（右2）及土銀董事長何英明（右1）代表簽約。<br>
            <br>
            此都更案將提昇國有地的經濟效益與都市更新價值，加速達成土地資產活化與都市環境更新等目的，為大眾創造宜居、舒適、便利之生活空間。
          </PerfectScrollbar>
        </div>
      </div>
      <div class="bottom">
        <RouterLink class="prev-page-link" to="/news">
          <svg viewBox="0 0 49 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.1052 0.927246H1" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
            <path d="M1 0.927246L12.8859 12.8132" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
            <path d="M42.1055 0.927246C45.3387 0.927246 48.0005 3.58899 48.0005 6.82225C48.0005 10.0555 45.3387 12.7173 42.1055 12.7173" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
            <path d="M42.1037 12.7173H28.791" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
          </svg>
          <span>回上一頁</span>
        </RouterLink>
        <div class="next-post">
          <div class="next-post-sub">
            <span>Next  NEWS</span>
            <RouterLink class="next-post-wrapper" to="/single">
              <div class="next-post-label">下一則</div>
              <svg viewBox="0 0 75 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.897H74.02" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
                <path d="M74.0195 11.8967L63.1191 1" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
              </svg>
            </RouterLink>
          </div>
          <RouterLink class="next-post-title" to="/single">國城建設攜手高興昌 拿下高雄 2 捷運聯開案 2025年動工</RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

.ps {
  position: relative;
  overflow: hidden;
  @media screen and (min-width:768px) {
    max-height: func.size(714);
    padding-right: func.size(98);
  }

  .ps__rail-x, .ps__rail-y {
    display: none;
  }

  &.ps--active-y .ps__rail-y {
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      left: auto !important;
      right: func.size(7.5);
      width: 1px;
      background: #000;

      .ps__thumb-y {
        position: absolute;
        left: func.size(-7.5);
        width: func.size(15);
        background: #19AA39;
      }
    }
  }
}
</style>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

section {
  padding: func.size-m(60) func.size-m(30) func.size-m(79) func.size-m(30);
  @media screen and (min-width:768px) {
    padding: func.size(108) func.size(160) func.size(136) func.size(160);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .title {
    font-size: func.size-m(18);
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: func.size-m(50);
    @media screen and (min-width:768px) {
      font-size: func.size(33);
      margin-bottom: func.size(62);
    }

    span {
      font-weight: 100;
      margin-right: func.size-m(6);
      @media screen and (min-width:768px) {
        margin-right: func.size(21);
      }
    }
  }

  h1 {
    font-size: func.size-m(16);
    font-weight: 700;
    line-height: func.size-m(21);
    padding: func.size-m(9) 0;
    border-top: func.size-m(1) solid #000;
    border-bottom: func.size-m(1) solid #000;
    margin-bottom: func.size-m(25);
    @media screen and (min-width:768px) {
      font-size: func.size(54);
      line-height: func.size(65);
      padding: func.size(55) 0;
      border-top: func.size(1) solid #000;
      border-bottom: func.size(1) solid #000;
      margin-bottom: func.size(162);
    }
  }

  .detail {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: func.size(135);
    }
  }

  .cover {
    display: block;
    width: 100%;
    margin-bottom: func.size-m(34);
    @media screen and (min-width:768px) {
      width: func.size(631);
      margin-bottom: 0;
    }
  }

  .content {
    font-size: func.size-m(12);
    line-height: func.size-m(20);
    letter-spacing: .06em;
    margin-bottom: func.size-m(53);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: func.size(750);
      font-size: func.size(25);
      line-height: func.size(44);
      margin-bottom: 0;
    }
  }

  .bottom {
    border-top: func.size-m(1) solid #000;
    padding: func.size-m(37) 0 0 0;
    @media screen and (min-width:768px) {
      border-top: none;
      padding: 0;
      display: none;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .prev-page-link {
      display: flex;
      align-items: center;
      margin-bottom: func.size-m(73);
      @media screen and (min-width:768px) {
        margin-bottom: 0;
      }

      svg {
        display: block;
        width: func.size-m(47);
        margin-right: func.size-m(13);
        @media screen and (min-width:768px) {
          width: func.size(102);
          margin-right: func.size(55);
        }
      }

      span {
        font-size: func.size-m(15);
        letter-spacing: .01em;
        @media screen and (min-width:768px) {
          font-size: func.size(27);
        }
      }
    }

    .next-post {
      @media screen and (min-width:768px) {
        position: relative;
        padding-bottom: func.size(100);
      }
    }

    .next-post-sub {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      margin-bottom: func.size-m(10);
      @media screen and (min-width:768px) {
        margin-bottom: func.size(28);
        justify-content: flex-start;

        .next-post-wrapper {
          display: flex;
          justify-content: flex-end;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      span {
        font-size: func.size-m(18);
        line-height: 1;
        font-weight: 100;
        letter-spacing: .06em;
        margin-right: func.size-m(9);
        @media screen and (min-width:768px) {
          display: block;
          font-size: func.size(35);
          margin-right: 0;
        }
      }

      .next-post-label {
        display: none;
        @media screen and (min-width:768px) {
          display: block;
          font-size: func.size(27);
          margin-right: func.size(40);
        }
      }

      svg {
        display: block;
        width: func.size-m(74);
        @media screen and (min-width:768px) {
          width: func.size(202);
        }
      }
    }

    .next-post-title {
      font-size: func.size-m(16);
      font-weight: 700;
      line-height: func.size-m(21);
      @media screen and (min-width:768px) {
        font-size: func.size(27);
        line-height: func.size(32);
      }
    }
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const scrollbar = ref(null);

onMounted(() => {
  if (scrollbar.value) {
    window.onresize = () => {
      scrollbar.value.ps.update();
    }
  }
});
</script>