const caseName = "恆合中山"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "基地位置",//按鈕區的--- 如空白會只呈現地址
    address2: "基地位置",//map點下確認的--- 如空白會顯示"導航地址"
    address: "中山區中山北路二段118-1號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2029041335295!2d121.5227247!3d25.0611111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a943a0989e4d%3A0x3200f9c9a3e6ca4a!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDkuK3lsbHljJfot6_kuozmrrUxMTgtMeiZnw!5e0!3m2!1szh-TW!2stw!4v1714794661679!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/HVEB6ykPA8XyuZr48",
    phone: "02-2581-5588",
    fbLink: "#",
    fbMessage: "#",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "恆合建設股份有限公司"],
        ["建築設計", "李岳軍建築師事務所"],
        ["外觀設計", "張紘聞建築師"],
        ["建築營造", "恆合營造股份有限公司"],
        ["建照號碼", "113建字0041號"],
        ["基地面積", "157坪"],
        ["格局規劃", "1+1房～3房"],
        ["公設比", "約32.4%"],
    ],
    gtmCode: ["GTM-KTP354Z8"], // 可放置多個
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
    budget: ["601-800萬","801-1,000萬","1,001-1,200萬","1,201-1,400萬","1,400萬以上"],
    navList: [
        {
            name: "中山市心",
            target: ".s2",
            offset: "",
            isBtn: false,
        },
        {
            name: "中山風華",
            target: ".s3",
            offset: "",
            isBtn: false,
        },
        {
            name: "雙捷奔馳",
            target: ".s4",
            offset: "",
            isBtn: false,
        },
        {
            name: "尖端工學",
            target: ".s5",
            offset: "",
            isBtn: false,
        },
        {
            name: "美學印記",
            target: ".s6",
            offset: "",
            isBtn: false,
        },
        {
            name: "預約賞屋",
            target: ".order",
            offset: "",
            isBtn: true,
        },
    ],
}