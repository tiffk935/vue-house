<template>
  <div class="house" v-if="info.houseInfos?.length">
    <div class="house-inner">
      <div class="info-box">

        <!-- 標題 -->
        <div class="title">
          建案資訊
        </div>

        <!-- 建案資訊 -->
        <div class="info-items">
          <div
            class="item"
            v-for="(item, index) in info.houseInfos"
            :key="index"
          >
            <!-- 左側標題 -->
            <p
              class="item-label"
              v-html="item[0]"
            ></p>

            <!-- 右側內容 -->
            <p
              class="item-value"
              v-html="item[1]"
            ></p>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">

    <a
      href="https://www.lixin.com.tw/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="//h65.tw/img/footerLogo.gif"
        alt="立炘數位"
      />
    </a>

    <a
      href="https://www.h65.tw/admin/test/login"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link"
    >
      網頁製作
    </a>

  </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";


/* =========================================================
   House
========================================================= */

.house {
  position: relative;
  width: 100%;
  color: #fff;
}

.house-inner {
  width: 100%;
  padding: size(80) size(40);
}


/* =========================================================
   Info Box
========================================================= */

.house {
  position: relative;
  width: 100%;
  color: #fff;
}

.house-inner {
  width: 100%;
  box-sizing: border-box;

  /* 左右一起往中間收 */
  padding: 80px 30px;
}

.info-box {
  position: relative;

  width: 100%;
  max-width: 800px;

  /* 核心：永遠置中 */
  margin-left: auto;
  margin-right: auto;
}


/* =========================================================
   Title
========================================================= */

.title {
  width: 100%;

  margin-bottom: size(40);

  color: #fff;

  font-family: "Noto Sans TC", sans-serif;

  /* 固定字體 */
  font-size: 24px;

  font-weight: 400;

  letter-spacing: 2px;

  line-height: 1.5;

  text-align: center;
}


/* =========================================================
   Info Grid
========================================================= */

.info-items {
  width: 100%;

  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: size(120);
  row-gap: size(25);
}


/* =========================================================
   Single Item
========================================================= */

.item {
  width: 120%;

  min-width: 0;

  display: flex;

  align-items: flex-start;

  font-family: "Noto Sans TC", sans-serif;

  /* 固定字體 */
  font-size: 18px;

  line-height: 1.6;

  letter-spacing: 1px;

  text-align: left;
}


/* =========================================================
   Label
========================================================= */

.item-label {
  flex: 0 0 auto;

  margin: 0 size(18) 0 0;

  padding-right: size(18);

  border-right: 2px solid #fff;

  color: #fff;

  font-weight: 500;

  white-space: nowrap;
}


/* =========================================================
   Value
========================================================= */

.item-value {
  flex: 1 1 auto;

  min-width: 0;

  margin: 0;

  color: #fff;

  font-weight: 400;

  text-align: left;

  white-space: pre-line;

  overflow-wrap: anywhere;

  word-break: break-word;
}


/* =========================================================
   Footer
========================================================= */

.footer {
  width: 100%;

  height: 40px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  background: #302626;

  img {
    display: block;

    height: 17px;

    transition: opacity 0.3s ease;
  }

  a:hover img {
    opacity: 0.5;
  }
}

.footer-link {
  color: #fff;

  font-size: 12px;

  text-decoration: none;
}


/* =========================================================
   Tablet
   769px ~ 1100px
========================================================= */

@media screen and (max-width: 1100px) {

  .house-inner {
    padding: 70px 30px;
  }

  .info-box {
    width: min(100%, 800px);
  }

  .title {
    font-size: 20px;

    margin-bottom: 32px;

    letter-spacing: 2px;
  }

  .info-items {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: 40px;
  row-gap: 25px;
}

  .item {
    /* 固定 16px */
    font-size: 16px;
  }

  .item-label {
    margin-right: 14px;

    padding-right: 14px;
  }
}


/* =========================================================
   Mobile
   768px 以下
========================================================= */

@media screen and (max-width: 768px) {

  .house-inner {
    width: 100%;
    box-sizing: border-box;

    padding: 55px 24px;
  }

  .info-box {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-size: 22px;
    margin-bottom: 30px;
  }

  .info-items {
    width: fit-content;
    max-width: 100%;

    display: grid;
    grid-template-columns: 1fr;

    row-gap: 18px;

    margin: 0 auto;
  }

  .item {
    width: auto;
    max-width: 100%;

    display: flex;
    align-items: center;

    font-size: 14px;
  }

  .item-label {
    flex: 0 0 auto;

    margin-right: 12px;
    padding-right: 12px;

    border-right: 1px solid #fff;

    font-size: 14px;
    white-space: nowrap;
  }

  .item-value {
    flex: 0 1 auto;

    min-width: 0;

    font-size: 14px;

    text-align: left;

    white-space: pre-line;
    overflow-wrap: anywhere;
    word-break: break-word;
  }



  /* -------------------------
     Title
  ------------------------- */

  .title {
    margin-bottom: 30px;

    /* Mobile 固定 22px */
    font-size: 22px;

    letter-spacing: 2px;

    line-height: 1.5;
  }


  /* -------------------------
     Mobile 改成單欄
  ------------------------- */

  .info-items {
    display: grid;

    grid-template-columns: 1fr;

    column-gap: 0;

    row-gap: 18px;

    width: 100%;
  }


  /* -------------------------
     Item
  ------------------------- */

  .item {
    width: 100%;

    /* Mobile 固定 14px */
    font-size: 14px;

    line-height: 1.6;

    align-items: center;
  }


  /* -------------------------
     Label
  ------------------------- */

  .item-label {
    flex: 0 0 auto;

    margin-right: 12px;

    padding-right: 12px;

    border-right: 1px solid #fff;

    white-space: nowrap;

    /* 固定 14px */
    font-size: 14px;
  }


  /* -------------------------
     Value
  ------------------------- */

  .item-value {
    flex: 1;

    min-width: 0;

    /* 固定 14px */
    font-size: 14px;

    line-height: 1.6;

    white-space: pre-line;

    overflow-wrap: anywhere;

    word-break: break-word;
  }


  /* -------------------------
     Footer
  ------------------------- */

  .footer {
    height: 40px;

    gap: 8px;
  }

  .footer img {
    height: 17px;
  }

  .footer-link {
    /* 固定 12px */
    font-size: 12px;
  }
}


/* =========================================================
   Very Small Mobile
   375px 以下
========================================================= */

@media screen and (max-width: 375px) {

  .house-inner {
    padding-left: 20px;

    padding-right: 20px;
  }

  .title {
    /* 仍然固定 22px */
    font-size: 22px;
  }

  .info-items {
    row-gap: 16px;
  }

  .item {
    /* 仍然固定 14px */
    font-size: 14px;
  }

  .item-label {
    margin-right: 9px;

    padding-right: 9px;

    font-size: 14px;
  }

  .item-value {
    font-size: 14px;
  }
}
</style>


<script setup>
import info from "@/info";
</script>
