const caseName = "得邦日進學"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市五股區成泰路三段356號旁",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.08159615667!2d121.45088739999998!3d25.099099099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af9c08905843%3A0x71c9a16c3c2f019a!2z5pel6YCy5a245o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1744770581921!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/tkk6nTRVGV2mPUvaA",
    phone: "02-8292-3777",
    fbLink: "https://www.facebook.com/100063678532415/",
    fbMessage: "https://m.me/100063678532415/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "茂德建設股份有限公司"],
        ["建築設計", "陳朝雄建築師事務所"],
        ["園藝景觀", "大漢景觀設計"],
        ["坪數規劃", "16~32坪"],
        ["企劃銷售", "太御地產開發股份有限公司"],
        ["結構安全", "永安結構顧問事務所"],
    ],
    gtmCode: ["GTM-5GX3PDJ2"], // 可放置多個
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["兩房","三房"],
    ctime: ["早上","下午","晚上"],
    //budget: ["900-1,000萬","1,100-1,200萬","1,200-1,300萬","1,300-1,400萬","1,400-1,500萬"],
    navList: [
        {
            name: "首購天堂",
            target: ".s3",
            offset: "",
        },
        {
            name: "天選地標",
            target: ".s4",
            offset: "",
        },
        {
            name: "通勤首選",
            target: ".s5",
            offset: "",
        },
        {
            name: "難得綠地",
            target: ".s6",
            offset: "",
        },
        {
            name: "雙語校園",
            target: ".s7",
            offset: "",
        },
        {
            name: "成熟商圈",
            target: ".s8",
            offset: "",
        },
        {
            name: "日系精工",
            target: ".s9",
            offset: "",
        },
        {
            name: "全齢格局",
            target: ".s10",
            offset: "",
        },
    ],
}