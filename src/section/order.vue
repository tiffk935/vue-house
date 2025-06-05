  <template>
  <div class="order relative text-center">
    <div class="order1 relative">
      <img class="tree absolute hidden md:block" src="@/section/s1/bottom.png" />
      <div class="order2">
        <!-- Title -->
        <div class="order-title text-center text-white">{{ info.order.title }}</div>
        <!-- Title Image -->
        <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="紅布朗花園" srcset=""
          data-aos="fade" data-aos-duration="1000">
        <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="紅布朗花園" srcset="" data-aos="fade"
          data-aos-duration="1000"> -->
        <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name"><span>姓名<span>*</span></span>
          <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
            @input="(event) => (formData.name = event.target.value)" /></label>
            <label class="row"><span>手機<span>*</span></span>
              <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
            @input="(event) => (formData.phone = event.target.value)" /></label>

<!-- 動態 select 欄位產生 預算 用途 等 在index.js控制  -->
<template v-for="(fieldData, fieldKey) in selectFields" :key="fieldKey">
    <label class="row">
      <span>{{ fieldData.title }}<span v-if="fieldData.bypass">*</span></span>
      <select
        class="select w-full rounded-none bg-white"
        v-model="formData[fieldKey]"
      >
        <option value="" disabled>{{ fieldData.hold }}</option>
        <option
          v-for="option in fieldData.option"
          :value="option"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
    </label>
  </template>
<!-- 動態 select end-->



        <!--  -->
          <label class="row"><span>居住縣市</span>
          <select class="select w-full rounded-none" v-model="formData.city">
            <option value="" selected disabled>請選擇城市</option>
            <option v-for="city in cityList" :value="city.value" :key="city">
              {{ city.label }}
            </option>
          </select></label>
          <label class="row"><span>居住地區</span>
          <select class="select w-full rounded-none" v-model="formData.area">
            <option value="" selected disabled>請選擇地區</option>
            <option v-for="area in areaList" :value="area.value" :key="area">
              {{ area.label }}
            </option>
          </select></label>
        </div>
        <div class="right">
          <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
            class="row textarea w-full h-full rounded-none" placeholder="(非必填) 請輸入您的留言"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#fff]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#FFF000] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send --><div class="sendall mt-8 mx-auto">
      <button class="send hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send" :disabled="sending">
  立即預約
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
</div>
</div>

      <!-- Contact Info -->
      <ContactInfo />
    </div>


    <!-- Map -->
    <Map />

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
  padding-top: 0;

  .order1 {
    background-size: cover;
    background-position: center center;
    padding-bottom: size(21);
    .tree {
      width:108%;
      bottom: size(0);
      left: -4%;
      max-width: none;
      transform-origin: bottom;
    transform:skewX(6deg);
      animation: tree 3s alternate-reverse infinite ease-in-out;
    }
  }

  .order-title {
    font-size: size(40);
    font-weight: 700;
    color: #fff;
    padding-top:1.5em;
    //filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
  }

  .order-title-img {
    width: size(1008);
    margin-bottom: size(155);
  }
  .order-subTitle{
    font-size: size(17);
    color: #fff;
    padding-top:.8em;
    letter-spacing: .1em;
    //font-weight: 500;filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
  }
  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
    background-color: #055F76;
  }

  .form {
    width: size(920);
    min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;

    .left {
      flex: 1;
      gap: size(20);
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
      background-color: #fff;
      position: absolute;
    }
    .row{background: #FFF;border: 1px solid #CCC;color: #000;
      display: flex;width: 100%;
    align-items:center;
      > span{
        width: 5.5em;
        text-align: left;padding-left:1em ;
        > span{color: #F00;font-size: 12px;}
      }
      input,select{background: inherit;flex: 1;}
      option{color: #666;}
      select{background:url("//h35.banner.tw/img/select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
      &:focus{
        background-position:calc(100% - .5em) 0%;
      }
      }
    }
  }

  .sendall{
  font-size:20px;
  font-weight: 400;
    line-height: 3.3;
  height:3.3em;}
  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #000;
    background-color:#fff;;
    //border: 1px solid #FFF9;
    border:0;
    border-radius: 0em;

    width: 308px;
    height:3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
    font-weight: 600;
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
    //padding-bottom: size-m(63);
    // border-radius: size-m(68) size-m(68) 0 0;
   /* padding-top: size-m(0);
    margin-top: size-m(0);

    .order-title-img {
      width: size-m(315);
      margin-bottom: size-m(22);
    } */

    .bird {
      @apply absolute;
      width: size-m(48.8);
      top: size-m(205);
      right: size-m(40);
    }

    .cus-divider {
      margin: 0 auto;
      width: size-m(117);
      height: size-m(2);
      margin-bottom: size-m(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: size-m(25);
      padding-top:1.5em;
    }
    .order-subTitle{
      font-size: size-m(13);
      padding-top:0;
    }


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
      font-size: sizem(21);
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