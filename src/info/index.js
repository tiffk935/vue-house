const caseName = "華友聯next21"

export default {
    caseid: "a22d99da-95b0-4141-8338-c57c3e34b13d",
    //case_code: "hylnext21",
    address: "高雄市左營區啟文路7號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4888439927086!2d120.28087068819879!3d22.672839134813874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05d2b0254fcd%3A0x29644036bc418322!2z6I-v5Y-L6IGvTmVYVDIx6Yq35ZSu5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1718778305359!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/hTCRH6YKWE6o698PA",
    phone: "07-322-2121",
    fbLink: "https://www.facebook.com/hylNext21",
    Link1: "https://official.huakai.com.tw/ReserveConstruction/rckhbsj8?source=other&source_note=%E4%B8%80%E9%A0%81%E5%BC%8F%E7%B6%B2%E7%AB%99#reserve",
    fbMessage: "https://m.me/hylNext21/",
    caseName: caseName,
    houseInfos: [
        ["坪數規劃", "23-48坪"],
        ["戶數規劃", "共497戶"],
        ["樓層規劃", "地下4F / 地上18F"],
        ["接待會館", "高雄市左營區啟文路7號"],
        ["基地位置", "左營區啟文路 X 勵志中街路"],
        ["建設公司", "華友聯開發股份有限公司"],
        ["貴賓專線", "(07) 322-2121"],
        ["建築代銷", "上揚國際建築團隊|上旺開發(股)"],
    ],
    gtmCode: ["GTM-MGS879P","GTM-M87MK5M"], // 可放置多個
    recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    // recaptcha_site_key_v2: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", //testkey
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "",
    },
    selectFields: {
      room_type: {
        title: "需求房型",
        hold: "請選擇房型",
        option: ["2房", "3房", "4房"],
        bypass:false,
      },
      source: {
        title: "消息來源",
        hold: "請選擇來源",
        value: ["social_media", "internet_media", "print_media", "tv_media", "billboard", "from_others", "other"],
        option: ["社群媒體", "網路媒體", "平面媒體", "電視媒體", "戶外看板", "親友介紹", "其它來源"],
        bypass:false,
      },
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
  },
    navList: [{
            name: "社口特區",
            target: ".s2",
            offset: "",
        },
        {
            name: "文教特區",
            target: ".s3",
            offset: "",
        },
        {
            name: "恣遊市心",
            target: ".s4",
            offset: "",
        },
        {
            name: "蒔尚住宅",
            target: ".s5",
            offset: "",
        },
        {
            name: "姮興開發",
            target: ".s6",
            offset: "",
        },
        {
            name: "豪宅團隊",
            target: ".s7",
            offset: "",
        },
        {
            name: "預約賞屋",
            target: ".order",
            offset: "",
        },
    ],
}