const caseName = "泰和茂田中新案"

export default {
  caseid: "f65b0dfd-6b1d-448b-9460-b5112e1ac995",
  //caseid_j: "3c00c7f1-d23a-4d28-a94c-790a8f4626c5", //兩邊id一樣可以不用有
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "XXXXX",
  googleSrc: "",
  googleLink: "",
  phone: "04-829-1133",
  fbLink: "",
  fbMessage: "",
  //line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
    ["投資建設", "秀溙開發有限公司"],
    ["營造公司", "和固營造有限公司"],
    ["建造執照", "(115)府建管(建)字第0189047號"],
    ["企劃銷售", "泰和茂營建團隊"],
    ["建築設計", "華峰建築師事務所-蘇林⽴設計"],
    /*
    */
  ],
   gtmCode: ["GTM-000000"], // 可放置多個
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "立即預約",
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
      option: ["1房", "2房", "3房"],
      required: false, //必填開啟使用
      nowrap: false, //選項過長時是否換行
    }, 
    
        budget: {
          title: "購屋預算",
          type: "select",
          hold: "請選擇區間",
          option: ["600萬以下", "600～800萬", "800～1,000萬","1,000萬以上"],
          nowrap: false, //選項過長時是否換行
          //bypass:true, //必填開啟使用
        },

         time: {
          title: "方便聯絡時間",
          type: "select",
          hold: "請選擇",
          option: ["全天皆可", "上午 09:00–12:00", "中午 12:00–13:00","下午 13:00–17:00","晚上 17:00–21:00",],
          nowrap: false, //選項過長時是否換行
          //bypass:true, //必填開啟使用
        },

       
        recommender: {
          title: "介紹、推薦來源",
          type: "select",
          hold: "請選擇來源",
         option: ["親友介紹", "合作店家推薦"]
      },

        recname: {
          title: "介紹人、店家名稱",
          type: "text",
          dependsOn: "recommender",
          hold: "請填寫介紹人或店家名稱",
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