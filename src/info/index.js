const caseName = "小城故事8"

export default {
    caseid: "134fd51c-4505-47b9-879b-c992eafff560",
    address: "宜蘭縣冬山鄉梅花路802號對面",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d906.4951309138495!2d121.73381147711355!3d24.658798718507633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM5JzMxLjMiTiAxMjHCsDQ0JzAyLjMiRQ!5e0!3m2!1szh-TW!2stw!4v1765869786304!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/zQ3WKHCULvmhmi8Q9",
    phone: "(03)9563-888",
    fbLink: "https://www.facebook.com/IlanCSdeveloper/",
    fbMessage: "https://m.me/IlanCSdeveloper/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "長勝國際建設有限公司"],
        ["格局規劃", "60-67坪‧雙主臥‧四套房"],
        ["建築設計", "張宗祺建築師事務所 / 陳宜宏設計工作室"],
        ["超級優勢", "電梯別墅‧社區公園"],
        ["工程營造", "宜錦營造有限公司"],
        ["建照號碼", "(112)(1)(3)建管建字第0004~00056號"],
    ],
    gtmCode: ["GTM-565Q52X"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz",
    // recaptcha_site_key_v2: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", //testkey
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "",
    },
      /*
    selectFields: {
      room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["兩房", "三房"],
          bypass:false,
        },
    },*/
    
order: {
    title: "預約賞屋",
    subTitle: "",
    subTitle_mo: "",
  },
  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: false ,     // ✅ 控制顯示 / 隱藏
      required: false    // ✅ 是否必填（通常不會必填）
    }
  },
  //各種欄位
  selectFields: {
    /*room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["兩房","三房","四房"],
      required: true, //必填開啟使用
    }, 
    /*
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["1000", "2000", "3000"],
          //bypass:true, //必填開啟使用
        },
       
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
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
            name: "十 樂",
            target: ".s2",
            offset: "",
        },
        {
            name: "頂 天",
            target: ".s3",
            offset: "",
        },
        {
            name: "立 地",
            target: ".s4",
            offset: "",
        },
        {
            name: "自 由",
            target: ".s6",
            offset: "",
        },
        {
            name: "預約鑑賞",
            target: ".order",
            offset: "",
        },
    ],
};
