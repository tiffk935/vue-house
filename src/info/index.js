const caseName = "紅布朗花園"

export default {
    caseid: "22739067-8e85-4064-aebd-cf1c16379926",
    case_code: "hbl",
    address: "接待中心:新北市土城區明德路一段343號旁",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7233.139757395482!2d121.45165569561678!3d24.98074463657931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468033c05ba0839%3A0xa3ff3cfafc480798!2z57SF5biD5pyX6Iqx5ZyS!5e0!3m2!1szh-TW!2stw!4v1749104158140!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/4cS1pFZMfQjiNq849",
    phone: "02-2264-6789",
    fbLink: "https://www.facebook.com/hbl.haiwo",
    fbMessage: "https://m.me/hbl.haiwo/",
    caseName: caseName,
    houseInfos: [
        ["建案名稱", "紅布朗花園"],
        ["投資興建", "茂德建設 眾德建設"],
        ["樓層規劃", "地上15 地下6層"],
        ["房型規劃", "2-3房"],
        ["企劃銷售", "海沃創意行銷"],
    ],
    gtmCode: ["GTM-M6L9FJ9"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz",
    // recaptcha_site_key_v2: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", //testkey
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "立即預約",
        subTitle: "",
    },
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["兩房", "三房"],
          bypass:false,
        },
  },
    navList: [
        //{
        //    name: "慢活哲學",
        //    target: ".s2",
        //    offset: "",
        //},
        {
            name: "城市樂活",
            target: ".s3",
            offset: "",
        },
        {
            name: "築美視野",
            target: ".s9",
            offset: "",
        },
        {
            name: "安心成家",
            target: ".s14",
            offset: "",
        },
        {
            name: "預約鑑賞",
            target: ".order",
            offset: "",
        },
    ],
}