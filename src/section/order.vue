<template>
  <!--  雲禾月表單改版型過 -->
  <div id="order" class="order relative text-center font-['Noto_Sans_TC']">
    <div class="order-section">
      <div class="order-title text-center font-['Noto_Serif_TC',serif] " v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div>

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name">
            <span>貴賓姓名<span>*</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" />
          </label>

          <!-- 性別 -->            
          <div class="gender">
          <label><input  type="radio" name="gender" value="男" 
              @input="(event) => (formData.gender = event.target.value)">先生</label>
          <label><input  type="radio" name="gender" value="女" 
              @input="(event) => (formData.gender = event.target.value)">女士</label>
        </div>


            <label class="row"><span>聯絡電話<span>*</span></span>
              <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" /></label>


          <label class="row" v-if="requiredFields.city"><span>居住縣市</span>
          <select class="select w-full rounded-none" v-model="formData.city">
            <option value="" selected disabled>請選擇城市</option>
            <option v-for="city in cityList" :value="city.value" :key="city">
              {{ city.label }}
            </option>
          </select></label>
          <label class="row" v-if="requiredFields.area"><span>居住地區</span>
          <select class="select w-full rounded-none" v-model="formData.area">
            <option value="" selected disabled>請選擇地區</option>
            <option v-for="area in areaList" :value="area.value" :key="area">
              {{ area.label }}
            </option>
          </select></label>
          
          <!-- 需求房型 選項 -->            
          <div class="row room_type"><span>需求房型</span>
          <label><input  type="radio" name="room_type" value="兩房" 
              @input="(event) => (formData.room_type = event.target.value)">兩房</label>
          <label><input  type="radio" name="room_type" value="三房" 
              @input="(event) => (formData.room_type = event.target.value)">三房</label>
          <label><input  type="radio" name="room_type" value="店面" 
              @input="(event) => (formData.room_type = event.target.value)">店面</label>
        </div>
        </div>
        <div class="right">
          <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
            class="row textarea w-full h-full rounded-none" placeholder="留言諮詢"></textarea>
        </div>
      </div>
<div class="flex order-send mx-auto justify-between flex-wrap">
<div class="">
      <!-- Recaptcha -->
      <vue-recaptcha class="flex mb-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />
        
        <!-- Policy -->
      <div class="flex gap-2 mb-8 justify-center control text-left">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#000]">本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#c00] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容<br>
            你所登錄的個人資料將做為以下用途<br>
          (一)本網站所載之相關事項通知<br>
(二)客戶管理與服務<br>
(三)本公司行銷業務之推廣本案實際內容以現場公布為準
        </p>
      </div>
      <Policy />

      </div>
<div>
        <!-- Send --><div class="sendall mx-auto mt-0">
      <button class="send hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send" :disabled="sending">
  送出表單
</button>
<div v-else class="send-load">
  <svg
    class="animate-spin h-5 w-5 text-blue-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
  <span>發送中...</span>
</div>
</div></div>
</div>
      

      

      <!-- Contact Info -->
      <ContactInfo />
    </div>


    <!-- Map -->
    <Map v-if="info.address" />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";


.order-section {
  position: relative;
 // padding-top: size(406);
   overflow: hidden;
    min-height: size(500);

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }

}

.order {
  width: 100%;
  padding-top: size(40);
  /*
  background:url("@/section/form/bg.jpg");
  background-size: auto;
  */
 // background: linear-gradient(to bottom, #195c45, #000704);
  


  .order-title {
    font-size: size(40);
    font-weight: 700;
  //  color: #fff;
    padding-top:1.5em;
    //filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
    .line{width: size(439);}
  }

  .order-title-img {
    width: size(1008);
    margin-bottom: size(155);
  }
  .order-subTitle{
    font-size: size(17);
    // color: #fff;
    padding-top:.8em;
    letter-spacing: .1em;
    //font-weight: 500;filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
  }
  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
  //  background-color: #055F76;
  }

  .order-send{
    width: size(920);
    min-width: 750px;}
  .form {
    width: size(920);
    min-width: 750px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;
    line-height: 1.7;

    .left {position: relative;
      flex: 1;
      gap: size(20);
      align-items: flex-start;
      //   width: size(419);
    }

    .right {
      flex: 1;
      height: auto;
      //  width: size(419);
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #fff9;
      position: absolute;
    }
    .row{color: #000;
      display: flex;width: 100%;
      align-items:flex-start;
      flex-direction:column;
      justify-content:flex-start;
      > span{
        width: 6.2em;
        text-align: left;padding-left:0;
        > span{color: #F00;//font-size: 12px;
          }
      }
      input,select{background: #fffb;flex: 1;padding: 1em;}
      option{color: #000;background: #fffb;}
      select{background:#fffb url("//h35.banner.tw/img//select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
      &:focus{
        background-position:calc(100% - .5em) 0%;
      }
      }
      // &.name{width: calc(100% - 3.8em);}//沒有性別的話這條槓掉
    }
    .gender{display: flex;position: absolute;right: 0;
       //flex-direction:column;
      label:first-child{margin-right: 1em;}
      input{margin-right: .3em;}
    }
    .room_type{display: flex; flex-wrap: wrap;
      flex-direction:row;
      span:first-child{width: 100%;}
      label{margin-right: 1.5em;}
      input{margin-right: .3em;}
    }
  }

      input::placeholder{color: #333;}
      
      textarea{background:#fffb}
      textarea::placeholder{color: #333;}
  .sendall{
  font-size:20px;
  font-weight: 400;
    line-height: 3.3;
  height:3.3em;}
  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background-color: #009FE1;
    //border: 1px solid #FFF9;
    border:0;
    border-radius: 3em;

    width: 308px;
    height:3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
    //box-shadow: .2em .2em .05em #0004;
  }
  @keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.send-load{
  letter-spacing: 0.9em;
  text-indent: 0.9em;
  height:100%;}
.animate-spin {
  display: inline-block;margin:0 .5em; animation: spin 1s linear infinite;
}

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width:768px) {
  .order-section {
    min-height: size-m(800);
    position: relative;
    // overflow: hidden;
   // padding-top: size-m(200);

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{size-m(30)};
      bottom: size-m(590);
    } 

  }

  .order {
    width: 100%;
    padding-bottom: size-m(63);

    .cus-divider {
      margin: 0 auto;
      width: size-m(117);
      height: size-m(2);
      margin-bottom: size-m(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: size-m(27);
      padding:.6em 0 .2em;
    }
    .order-subTitle{
      font-size: size-m(13);
      padding-top:0;
      letter-spacing: 0;
    }

  .order-send{
      width: size-m(310);
      min-width: 0;}

    .form {
      width: size-m(310);
      min-width: 0;
      height: auto;
      gap: size-m(15);
      margin-bottom: size-m(20);
      flex-direction: column;
      margin-top: size-m(20);

      .left {
        width: 100%;
        gap: size-m(15);
      }

      .right {
        width: 100%;
        height: size-m(100);
        .row{
          height: 7em;
        }
      }

      &::after {
        display: none;
      }
    }
    .sendall {
      font-size: size-m(21);
    }

    .send {
      font-size: size-m(21);
      width: size-m(310);
      height: size-m(72);
    }

    .control {
      font-size: size-m(14.6);
    }
  }
}
</style>

<script setup>
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
import Map from "@/section/form/map.vue"
import HouseInfo from "@/section/form/houseInfo.vue"

import info from "@/info"

import { cityList, renderAreaList } from "@/info/address.js"
import {computed, getCurrentInstance, ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

// const selectFields = info.selectFields

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)
const submitted = ref(false)

// 後端那 name phone email msg 為必要欄位 請勿刪除
const requiredFields = {
  // 固定必要欄位 (請勿刪)
  name: "姓名",
  phone: "手機",
  email: "信箱",
  msg: "備註訊息",
  city: "居住縣市",
  area: "居住地區",
  policyChecked: "個資告知事項聲明",
  r_verify: "機器人驗證"
}

// selectFields
const selectFields = info.selectFields || {}

// 初始 formData（包含 selectFields 欄位）
const formData = reactive({
  ...Object.keys(requiredFields).reduce((acc, key) => {
    acc[key] = key === "policyChecked" || key === "r_verify" ? false : ""
    return acc
  }, {}),
  ...Object.keys(selectFields).reduce((acc, key) => {
    acc[key] = ""
    return acc
  }, {})
})

// bypass（非必填欄位，根據 selectFields 的 bypass 設定）
const staticBypass = ["email", "msg", "city", "area"]
const bypass = [
  ...staticBypass,
  ...Object.entries(selectFields)
    .filter(([_, field]) => field.bypass !== true)
    .map(([key]) => key)
]

// 中文對照（formDataRef）
const formDataRef = {
  ...requiredFields,
  ...Object.entries(selectFields).reduce((acc, [key, val]) => {
    acc[key] = val.title || key
    return acc
  }, {})
}

const areaList = ref([])

watch(
  () => formData.city,
  (newVal, oldVal) => {
    areaList.value = renderAreaList(newVal)
    formData.area = areaList.value[0].value
  }
)
// 新系統這裡需調整
const onRecaptchaVerify = (token) => {
  formData.r_verify = token;
}
const onRecaptchaUnVerify = () => {
  formData.r_verify = false
}

const send = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || "null"; // 确保有有效的来源
  const utmMedium = urlParams.get("utm_medium") || "null";
  const utmContent = urlParams.get("utm_content") || "null";
  const utmCampaign = urlParams.get("utm_campaign") || "null";
  /*
  */
  const pad = (n) => String(n).padStart(2, '0');
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  

  const presend = new FormData();
  let pass = true;
  let unfill = [];
  let idx = 0;
  
//有性別的話 性別顯示
if (formData.gender) {
  formData.name = `${formData.name}(${formData.gender})`;
}
if (formData.msg.trim() === "") {
    formData.msg = "無留言";
  }
  
  // 验证必填字段
  for (const [key, value] of Object.entries(formData)) {
  if (!bypass.includes(key) && (value === "" || value === false)) {
    unfill.push(formDataRef[key] || key)
    pass = false
  }
  if (key !== "r_verify" && key !== "policyChecked") {
    presend.append(key, value)
  }
}
  
  presend.append("utm_source", utmSource);
  presend.append("utm_medium", utmMedium);
  presend.append("utm_content", utmContent);
  presend.append("utm_campaign", utmCampaign);
  presend.append("message", formData.msg)
  presend.append("case_code", info.case_code?info.case_code:info.caseid );

  // 如果有必填字段为空，返回
  if (!pass) {
    toast.error(`「${unfill.join(", ")}」為必填或必選`);
    return;
  }

  // 手机格式验证
  const MobileReg = /^(09)[0-9]{8}$/;
  if (!formData.phone.match(MobileReg)) {
    toast.error("手機格式錯誤 ( 09開頭10位數字 )");
    return;
  }

  // 如果通过验证
  if (pass && !sending.value) {
  sending.value = true;
  submitted.value = true;
    /*
    */
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &email=${formData.email}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.room_type}；${formData.msg}
      &utm_source=${utmSource}
      &utm_medium=${utmMedium}
      &utm_content=${utmContent}
      &utm_campaign=${utmCampaign}
      &date=${date}
      &campaign_name=${info.caseName}`,
      {
        method: "GET"
      }
    );
   //caseid 在index.js裡設定
    fetch("https://service-sys.lixin.com.tw/reserve/"+ info.caseid, {
      method: "POST",
      body: presend,
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "formThanks";
        } else {
          return response.json().then(err => {
            console.error("後端錯誤訊息：", err);
            toast.error(err.message || "提交失敗");
          });
        }
      })
      .catch((error) => {
        console.error("傳送失敗：", error);
        toast.error("無法連線或伺服器錯誤");
      })
      .finally(() => {
        sending.value = false;
      });
  }
};
</script>