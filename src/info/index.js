const caseName = "富旺W行館"

export default {
    caseid: "b156bd0e-b96c-4add-9cfe-aa3eb09d8a89",
    //case_code: "king",
    address1: "接待中心：",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "彰化市彰美路一段278號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.3168231302425!2d120.53602160000001!3d24.090351399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693900340a1af9%3A0x3298cee576fe1087!2z5a-M5pe6V-ihjOmkqOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1763620481164!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/W7hGX6xBUmYU4pMt6",
    phone: "04-7003888",
    fbLink: "https://www.facebook.com/61574545217179/",
    fbMessage: "https://m.me/61574545217179/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "XXXX"],
        ["建築設計", "XXXX"],
        ["基地面積", "XXXX"],
        ["格局規劃", "XXXX"],
    ],
    gtmCode: ["GTM-569RX26M"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "CONTACT US",
        // subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    selectFields: {
        budget: {
            title: "聯繫時段",
            hold: "請選擇時段",
            option: ["上午", "下午", "晚上", "皆可"],
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