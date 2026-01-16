const caseName = "雲禾月"

export default {
    caseid: "76ba5df2-d3a5-4d7d-8e41-ee1d8128a3e4",
   //case_code: "csl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市汐止區樟樹二路422號1樓",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.83527141937!2d121.6428191!3d25.0735718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d5338f990cd0f%3A0x5b8bfb03db2385c3!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5qif5qi55LqM6LevNDIy6Jmf!5e0!3m2!1szh-TW!2stw!4v1753844618616!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/SZmpZ2UPaugZFzHk7",
    phone: "02-2690-3888",
    fbLink: "https://www.facebook.com/61578333132817/",
    fbMessage: "https://m.me/61578333132817/",
    caseName: caseName,
    houseInfos: [
        ["投資建設", "合展建設股份有限公司"],
        ["企劃銷售", "睿頤廣告有限公司"],
        ["建照執照", "110汐建字第00415-02號"],
    ],
    gtmCode: ["GTM-TN23QFFJ"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "立即預約",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    selectFields: {
        budget: {
            title: "購屋預算",
            hold: "請選擇預算",
            option: ["8千萬 ~ 1.1億", "1.2億 ~ 1.4億", "1.4億 ~ 1.6億"],
            bypass: false,
        },
    },
    navList: [
        {
            name: "奔赴幸福",
            target: ".s3",
            offset: "",
        },
        {
            name: "休閒天地",
            target: ".s5",
            offset: "",
        },
        {
            name: "生活領地",
            target: ".s6",
            offset: "",
        },
        {
            name: "文教美地",
            target: ".s7",
            offset: "",
        },
        {
            name: "合展建設",
            target: ".s8",
            offset: "",
        },
        {
            name: "建材質地",
            target: ".s9",
            offset: "",
        },
        {
            name: "世代之築",
            target: ".s10",
            offset: "",
        },
    ],
}