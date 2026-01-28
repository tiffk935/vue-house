const caseName = "國王大道"

export default {
    caseid: "69cf9884-c68a-4e5b-92e1-ec665d2423ab",
    case_code: "king",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市新莊區富貴路．中華路三段",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7228.619649444191!2d121.45249!3d25.057486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a965069393e1%3A0x3f4f54588cc81ac7!2z5ZyL546L5aSn6YGTS0lORyBQQVJL5o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1754290760670!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/rUAkADhbs3bwRzWd9",
    phone: "02-8522-7337",
    fbLink: "https://www.facebook.com/61582772002255/",
    fbMessage: "https://m.me/61582772002255/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "漢翔開發股份有限公司"],
        ["建築設計", "陳朝雄建築師事務所"],
        ["園藝景觀", "大漢設計工程有限公司"],
        ["坪數規劃", "17-28坪"],
        ["企劃銷售", "得邦廣告股份有限公司"],
        ["結構安全", "圓方結構工程顧問有限公司"],
    ],
    gtmCode: ["GTM-NVGGJ9T5"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    selectFields: {
        room_type: {
            title: "需求房型",
            hold: "請選擇房型",
            option: ["2房", "3房", "店面"],
            bypass: false,
        },
    },
    navList: [
        {
            name: "增值盛世",
            target: ".s3",
            offset: "",
        },
        //{
        //name: "(影片預留)",
        // target: ".s4",
        // offset: "",
        //},
        {
            name: "重劃之王",
            target: ".s5",
            offset: "",
        },
        {
            name: "馳騁未來",
            target: ".s6",
            offset: "",
        },
        {
            name: "完整教育",
            target: ".s7",
            offset: "",
        },
        {
            name: "國王高度",
            target: ".s8",
            offset: "",
        },
        {
            name: "宮殿盛典",
            target: ".s9",
            offset: "",
        },
    ],
}