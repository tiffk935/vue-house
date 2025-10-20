const caseName = "亞果濱海寓所"

export default {
    caseid: "ad8edddb-1f50-47c7-bec3-f9c5d571aa18",
    case_code: "king",
    address1: "",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台南市安平區新港路二段585號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.096232942265!2d120.1635414!3d22.9834885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e75feb74702ed%3A0x296f70dc2ee14d30!2zNzA45Y-w5Y2X5biC5a6J5bmz5Y2A5paw5riv6Lev5LqM5q61NTg16Jmf!5e0!3m2!1szh-TW!2stw!4v1760695073759!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/PQjBAt9e9ZQuBLtq9",
    phone: "08-8352-888",
    fbLink: "https://www.facebook.com/61581195067952/",
    fbMessage: "https://www.facebook.com/messages/t/61581195067952/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "亞果遊艇集團"],
        ["營造公司", "銓興營造有限公司"],
        ["產品規劃", "許清俊建築師事務所"],
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