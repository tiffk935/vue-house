// const caseName = "豐邑匯禮"
const caseName = "000"

export default {
  caseid: "655075fa-e77e-48b0-9720-01dce2672bd9",
  case_code: "test",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市西屯區市政路10號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4456548862177!2d120.64585090000001!3d24.156098600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d000f1c2ccf%3A0xb2554ffe02fcf3bb!2z6LGQ6YKR5Yyv56au772c5LiD5pyf5paw5bu65qGI772c5aSn5aKp5Zub6KGX772c5Y2X5bGv5o236YGL56uZ772c5paH5b-D5qOu5p6X5YWs5ZyS772c5YWs55uK6Lev5ZWG5ZyI772cMy005oi_!5e0!3m2!1szh-TW!2stw!4v1736418037806!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/wsacNj4DcqZjg85T6",
    phone: "04-2258-0988",
    fbLink: "https://www.facebook.com/61556823341836/",
    fbMessage: "https://m.me/61556823341836/",
    caseName: caseName,
  houseInfos: [
    ["投資興建", "豐邑建設"],
    ["公設設計", "天坊室內設計"],
    ["建照號碼", "113中都建字第420號"],
    ["園藝景觀", "上境設計"],
    ["建築設計", "永豐建築師事務所"],
    ["結構技師", "立信工程顧問有限公司"],
  ],
  gtmCode: ["GTM-PRNDKDGX","GTM-5F7H79C4","GTM-N9XP8LTX"], // 可放置多個
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "我想了解",
    subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
  },
  //底下2個 沒項目就會隱藏
  
    selectFields: {
      room_type: {
        title: "需求房型",
        hold: "請選擇房型",
        option:  ["3房","4房"],
        bypass:true,
      },
      budget: {
        title: "購屋預算",
        hold: "請選擇區間",
        option:["3000-3500萬","3501-4000萬","4001-4500萬","4501萬以上"],
        bypass:true, //必填開啟使用
      },
      /*
      use_type: {
        title: "使用用途",
        hold: "請選擇用途",
        option: ["自住", "投資", "租賃"]
    },
      */
},
  navList: [
    {
      name: "金質品牌",
      target: ".s2_manu",
      offset: "",
    },
    {
      name: "五星標竿",
      target: ".s3_manu",
      offset: "",
    },
    {
      name: "城心地段",
      target: ".s4",
      offset: "",
    },
    {
      name: "繁華精彩",
      target: ".s5",
      offset: "",
    },
    {
      name: "鮮氧體會",
      target: ".s6",
      offset: "",
    },
    {
      name: "名匠之作",
      target: ".s7",
      offset: "",
    },
    {
      name: "立即預約",
      target: ".order-form-content",
      offset: "",
      isOrder: true,
    },
  ],
}
