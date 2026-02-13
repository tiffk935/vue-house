const caseName = "佳鋐首耀"

export default {
    caseid: "20b3aa3a-e122-4db4-b253-dcf60fe08372",
    //case_code: "shouyao",
    address1: "基地位子",//按鈕區的--- 如空白會只呈現地址
    address2: "導航地址",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市梧棲區中華路二段155號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7275.674967350943!2d120.54793815857862!3d24.247462221438916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDE0JzUwLjkiTiAxMjDCsDMzJzExLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1770953354204!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/dmQT3t7zk7u3N56r5",
    phone: "04-2663-0999",
    fbLink: "https://www.facebook.com/61563772475620/",
    fbMessage: "https://m.me/61563772475620/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "佳鋐建設股份有限公司"],
        ["經紀人", "蔡明儒(112)北市經證字第02517號"],
        ["建造執照", "111中都建字第00895號"],
        ["建築設計", "蔡智勸建築師事務所"],
        ["企劃銷售", "昕華廣告有限公司"]
    ],
    gtmCode: ["GTM-KLHKDVV6","GTM-P22JMBFR"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["兩房","三房"],
          bypass:false,
        },
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option:["900-1,000萬","1,100-1,200萬","1,200-1,300萬","1,300-1,400萬","1,400-1,500萬"],
          bypass:false, //必填開啟使用
        },
  },
    navList: [
        {
            name: "佳鋐首耀",
            target: ".s1",
            offset: "",
        },
        {
            name: "首耀之境",
            target: ".s3",
            offset: "",
        },
        /*
        {
            name: "首耀美宅",
            target: ".s5",
            offset: "",
        },
        {
            name: "工藝嚴選",
            target: ".s7",
            offset: "",
        },
        {
            name: "空間展演",
            target: ".s8",
            offset: "",
        },
        */
        {
            name: "預約賞屋",
            target: ".order",
            offset: "",
        },
    ],
}