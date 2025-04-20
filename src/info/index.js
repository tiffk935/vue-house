const caseName = "藏築3"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台南市北區文賢路218巷10弄7號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5463530124985!2d120.19428769999999!3d23.0037035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e765d50a433c7%3A0xf9e8279c2e5bb60!2zNzA05Y-w5Y2X5biC5YyX5Y2A5paH6LOi6LevMjE45be3MTDlvIQ36Jmf!5e0!3m2!1szh-TW!2stw!4v1744969464766!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/My3UgHh3t7aQrA928",
    phone: "06-580-2368",
    fbLink: "https://www.facebook.com/#/",
    fbMessage: "https://m.me/#/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "茂德建設股份有限公司"],
        ["建築設計", "陳朝雄建築師事務所"],
        ["園藝景觀", "大漢景觀設計"],
        ["坪數規劃", "16~32坪"],
        ["企劃銷售", "得邦廣告股份有限公司"],
        ["結構安全", "永安結構顧問事務所"],
    ],
    gtmCode: ["GTM-W2Z2B6ND","GTM-KXCTSBDN"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋 book now",
        subTitle: "",
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["早上","下午","晚上"],
    budget: [],
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