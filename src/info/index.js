const caseName = "佳鋐大境"

export default {
    caseid: "f4febb5a-b711-4b3f-a71b-8673bee58dd1",
    case_code: "dajing",
    address1: "基地位置",//按鈕區的--- 如空白會只呈現地址
    address2: "基地位置",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市梧棲區中華路二段",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3637.813058514882!2d120.5550312!3d24.2483163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469151ebe57d387%3A0x8553e024331e32ed!2z5L2z6YuQ5aSn5aKD5o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1705376910890!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/V5sYHiChFYQAUNZH7",
    phone: "04-2663-0999",
    fbLink: "https://www.facebook.com/61554748627993/",
    fbMessage: "https://m.me/61554748627993/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "佳鋐建設股份有限公司"],
        ["營造公司", "協侑營造有限公司"],
        ["產品規劃", "地上 15層，地下2層，245戶"],
        ["景觀設計", "邑埕景觀設計"],
        ["建築外觀", "曾聰憲建築師事務所"],
    ],
    gtmCode: ["GTM-KTP354Z8"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏(必填)
    
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
          option: ["601-800萬","801-1,000萬","1,001-1,200萬","1,201-1,400萬","1,400萬以上"],
          bypass:false, //必填開啟使用
        },
  },
    navList: [
        {
            name: "大城之境",
            target: ".s3",
            offset: "",
        },
        {
            name: "大境美宅",
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
        {
            name: "預約賞屋",
            target: ".order",
            offset: "",
        },
    ],
}