const caseName = "宏利發 SUN PARK"

export default {
  caseid: "40a42369-777f-4955-9369-99a146dc510d",
  //caseid_j: "3c00c7f1-d23a-4d28-a94c-790a8f4626c5", //兩邊id一樣可以不用有
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "XXXXX",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7359.266492949288!2d120.3097038172106!3d22.74186923554725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ0JzMwLjciTiAxMjDCsDE4JzUzLjUiRQ!5e0!3m2!1szh-TW!2stw!4v1725006447269!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/eLWxyc2yPaKc228G9",
  phone: "02-2857-8666",
  fbLink: "https://www.facebook.com/profile.php?id=100054610803161",
  fbMessage: "https://m.me/100054610803161",
  //line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
    ["空間設計", "相即空間設計"],
    ["企劃銷售", "低碳健康樂活行銷"],
    ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
    ["經紀人", "(91)北市經證字第00692號 陳子瑞"],
    ["建築設計", "弘憲聯合建築師事務所"],
    ["使照號碼", "王朝雍建築師事務所"],
    ["行銷企劃", "自售"],
    /*
    */
  ],
   gtmCode: ["GTM-5RNC43KN"], // 可放置多個
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "預約賞屋",
    //subTitle: "歡迎填寫表單，將由專人與您聯繫並提供服務，謝謝！",
    //subTitle_mo: "歡迎填寫表單，將由專人與您聯繫並提供服務，謝謝！",
  },
  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: false,     // ✅ 控制顯示 / 隱藏
      required: false    // ✅ 是否必填（通常不會必填）
    }
  },

  //各種欄位
  selectFields: {
    room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["兩房", "店面"],
      required: false, //必填開啟使用
    }, 
    
        budget: {
          title: "購屋預算",
          type: "select",
          hold: "請選擇區間",
          option: ["1,500 ~ 2,000", "2,000 ~ 2,500", "2,500 ~ 3,000"],
          //bypass:true, //必填開啟使用
        },

        car: {
          title: "需求車位",
          type: "select",
          hold: "請選擇",
          option: ["是", "否"],
          //bypass:true, //必填開啟使用
        },

         time: {
          title: "聯絡時間",
          type: "select",
          hold: "請選擇",
          option: ["10:00 ~ 12:00", "13:00 ~ 15:00","15:00 ~ 17:00","17:00 ~ 19:00",],
          //bypass:true, //必填開啟使用
        },

       /*
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
    /*
    {
        name: "雙核心地段",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "交通中軸",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    }
*/
  ],
}