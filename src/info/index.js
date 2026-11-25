const caseName = "夢公園"

export default {
    caseid: "1d02eb74-ef57-4613-a461-951c876f8674",
    //case_code: "dreampark",
    address: "台南市東區中華東路一段<br class='md:hidden'>與平實七街口",
    googleSrc: "https://www.google.com/maps?q=%E5%8F%B0%E5%8D%97%E5%B8%82%E6%9D%B1%E5%8D%80%E4%B8%AD%E8%8F%AF%E6%9D%B1%E8%B7%AF%E4%B8%80%E6%AE%B5%20%26%20%E5%B9%B3%E5%AF%A6%E4%B8%83%E8%A1%97&output=embed",
    googleLink: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E5%B8%82%E6%9D%B1%E5%8D%80%E4%B8%AD%E8%8F%AF%E6%9D%B1%E8%B7%AF%E4%B8%80%E6%AE%B5%20%26%20%E5%B9%B3%E5%AF%A6%E4%B8%83%E8%A1%97",
    phone: "06-2008822", // 留空會隱藏撥號按鈕
    fbLink: "https://www.facebook.com/100094216000797",
    fbMessage: "https://m.me/100094216000797/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "上維地產有限公司"],
        ["建照號碼", "(112)南工造字第00823號"],
        ["建築設計", "大磊建築師聯合事務所"],
        ["公設設計", "雅元設計"],
        ["景觀設計", "方極景觀"],
        ["燈光設計", "日銧燈光"],
        ["基地面積", "約2044坪"],
        ["格局規劃", "2-3房"],
        ["企劃行銷", "上博國際"],
    ],
    gtmCode: ["GTM-5673NQBS"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    // recaptcha_site_key_v2: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", //testkey
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "",
    },
    // 控制表單欄位（新系統格式）
    //性別
    formConfig: {
        gender: {
            enabled: false,    // 夢公園原本沒有性別欄位
            required: false
        }
    },
    //各種欄位
    selectFields: {
        room_type: {
            title: "需求房型",
            type: "select",
            hold: "請選擇房型",
            option: ["兩房", "三房", "店面"],
            required: false,
            //apiB: "room_type" // B API 對應欄位
        },
        budget: {
            title: "購屋預算",
            type: "select",
            hold: "請選擇區間",
            option: ["1000萬以下", "1000~1500萬", "1500~2000萬", "2000萬以上"],
            required: false,
            //apiB: "budget" // B API 對應欄位
        },
    },
    //縣市地區
    locationConfig: {
        city: {
            enabled: true,
            required: false
        },
        area: {
            enabled: true,     // ⚠️ 不能單獨 true
            required: false
        }
    },
    navList: [
        {
            name: "JIA 地段",
            target: ".s2",
            offset: "",
        },
        {
            name: "JIA 品牌",
            target: ".s4",
            offset: "",
        },
        {
            name: "JIA 美學",
            target: ".s6",
            offset: "",
        },
        {
            name: "愛・JIA 人",
            target: ".order",
            offset: "",
        },
    ],
}
