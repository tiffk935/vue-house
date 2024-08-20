const caseName = "東泥大賦"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "",//按鈕區的--- 如空白會只呈現地址
    address2: "地圖導航",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市燕巢區中民路393巷28號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14713.007466300809!2d120.3670153!3d22.7931294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e139614c0990f%3A0x5f59e6c6c408c85!2z5p2x5rOlLeWkp-izpg!5e0!3m2!1szh-TW!2stw!4v1720081343826!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/knSsspkn3YKwHMtS7",
    phone: "07-353-7988",
    fbLink: "//facebook.com/61557073910546",
    fbMessage: "//m.me/61557073910546",
    caseName: caseName,
    houseInfos: [
        ["投資建設", "東泥建設股份有限公司"],
        ["企劃銷售", "慧謀廣告有限公司"],
        ["建造執照", "(110)高市工建築字第00532-01號等27個"],
        ["接待會館", "高雄市燕巢區中民路393巷28號"],
        ["營造公司", "順裕營造有限公司"],
        ["建築設計", "鍾佳霖建築師事務所"],
        ["使用執照", "(113)高市工建築使字第00088號等27個"],
        ["聯絡電話", "07-353-7988"],
    ],
    gtmCode: ["GTM-W2Z2B6ND","GTM-KXCTSBDN","GTM-PGF3THPV"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["兩房","三房"],
    budget: [],
    navList: [
        {
            name: "燕巢核心",
            target: ".s2",
            offset: "",
        },
        {
            name: "耀眼未來",
            target: ".s3",
            offset: "",
        },
        {
            name: "優質機能",
            target: ".s8",
            offset: "",
        },
        {
            name: "自然藝墅",
            target: ".s9",
            offset: "",
        },
        {
            name: "質感空間",
            target: ".s11",
            offset: "",
        },
        {
            name: "名品建材",
            target: ".s12",
            offset: "",
        },
        {
            name: "精工品牌",
            target: ".s13",
            offset: "",
        },
    ],
}