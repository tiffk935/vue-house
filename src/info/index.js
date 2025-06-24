const caseName = "夢公園"

export default {
    caseid: "1d02eb74-ef57-4613-a461-951c876f8674",
    case_code: "dreampark",
    address: "台南市東區小東路196號旁<br class='md:hidden'>(與光明街交叉口)",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.6477431866674!2d120.225761!3d22.9999774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77db3ca021f3%3A0xcfa5beddea6441d4!2z5riF5pmv6bqf5aSi5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1706173268088!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/w7thtZwbL8crRv2e8",
    phone: "06-2083366",
    fbLink: "https://www.facebook.com/profile.php?id=100094216000797",
    fbMessage: "https://m.me/100094216000797/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "上維地產有限公司 "],
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
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["兩房", "三房", "店面"],
          bypass:false,
        },
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["1000萬以下", "1000~1500萬", "1500~2000萬", "2000萬以上"],
          bypass:false, //必填開啟使用
        },
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