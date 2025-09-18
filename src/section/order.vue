<template>
  <div id="order" class="order relative">
    <div class="ball ball1 absolute"></div>
    <div class="ball ball2 absolute"></div>

    <!-- Title -->
    <div class="order-title" v-if="info.order.title">{{ info.order.title }}</div>
    <div class="order-subTitle text-center" v-if="info.order.subTitle">{{ info.order.subTitle }}</div>

    <div class="container">
      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name"><span>姓名</span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" /></label>
          <label class="row"><span>手機</span>
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" /></label>

          <!-- 動態 select 欄位產生 預算 用途 等 在index.js控制  -->
          <template v-for="(fieldData, fieldKey) in selectFields" :key="fieldKey">
            <label class="row">
              <span>{{ fieldData.title }}<span v-if="fieldData.bypass">*</span></span>
              <select class="select w-full rounded-none bg-white" v-model="formData[fieldKey]">
                <option value="" disabled>{{ fieldData.hold }}</option>
                <option v-for="option in fieldData.option" :value="option" :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </template>
          <!-- 動態 select end-->

          <!--  -->
          <label class="row"><span>居住城市</span>
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
            class="row textarea w-full h-full rounded-none" placeholder="請輸入您的留言"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-white font-bold">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#FFFA6B] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send -->
      <div class="sendall mt-8 mb-12 mx-auto" style="font-size:20px;font-weight: 400;
    line-height: 3.3;height:3.3em">
        <button class="send hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send" :disabled="sending">
          立即預約
        </button>
        <div v-else class="send-load text-[#FFF]" style="letter-spacing: 0.7em;
  text-indent: 0.9em;
  height:100%;text-align: center;">
          <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            style=" display: inline-block;margin:0 .8em">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 12 12"
                to="360 12 12" dur="1s" repeatCount="indefinite" />
            </path>
          </svg>
          <span>發送中...</span>
        </div>
      </div>
    </div>
    <!-- Contact Info -->
    <ContactInfo />

    <!-- Map -->
    <div class="gmap relative z-10">
      <iframe :src="info.googleSrc" frameborder="0"></iframe>
    </div>

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order {
  color: #000;
  padding: size-m(60) 0 0 0;
  z-index: 2;

  @media screen and (min-width:768px) {
    padding: size(100) 0 0 0;
  }

  .btn {
    text-transform: none;
  }

  .ball1 {
    width: size-m(263);
    height: size-m(263);
    top: calc(16vw + 500px);
    left: size-m(-120);
    transform: translateY(-20%);
    background-image: url(@/section/ball2.png);
    animation: ball 8s ease 0s infinite alternate;
    opacity: .9;

    @media screen and (min-width:768px) {
      width: size(352);
      height: size(352);
      top: size(-123);
      left: size(-143);
    }

    &:after {
      content: '';
      background-color: #00DBFF;
      mix-blend-mode: soft-light;
    }
  }

  .ball2 {
    width: size-m(108);
    height: size-m(108);
    top: calc(size-m(170) - 50px);
    right: size-m(-60);
    transform: translateY(30%);
    background-image: url(@/section/ball2.png);
    animation: ball 6s ease 0s infinite alternate;
    opacity: .9;
    z-index: 1;

    @media screen and (min-width:768px) {
      width: size(158);
      height: size(158);
      top: calc(size(210) + 250px);
      right: size(125);
    }

    &:after {
      content: '';
      background-color: #00DBFF;
      mix-blend-mode: soft-light;

      @media screen and (min-width:768px) {
        background-color: #FF90FF;
      }
    }
  }

  .container {
    width: 100%;
    padding: 0 size-m(26);

    @media screen and (min-width:768px) {
      padding: 0;
      max-width: size(1200);
      margin: 0 auto;
    }
  }

  .order-title {
    color: #fff;
    text-align: center;
    font-size: size-m(28);
    line-height: size-m(34);
    font-weight: 700;
    margin: 0 auto size-m(20) auto;

    @media screen and (min-width:768px) {
      font-size: size(40);
      line-height: size(48);
      font-weight: 400;
      margin-bottom: size(11);
    }
  }

  .order-subTitle {
    color: #fff;
    text-align: center;
    font-size: size-m(14);
    line-height: size-m(36);
    margin-bottom: size-m(20);

    @media screen and (min-width:768px) {
      font-size: size(15);
      line-height: size(36);
      margin-bottom: size(31);
    }
  }

  .form {
    position: relative;
    margin-bottom: size-m(20);

    @media screen and (min-width:768px) {
      margin-bottom: size(49);
      display: flex;
      justify-content: space-between;
      align-items: stretch;

      div:nth-child(1) {
        width: size(559);
        margin-right: size(82);
      }

      div:nth-child(2) {
        flex: 1;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: size(1);
        height: 100%;
        background: rgba(255, 255, 255, .5);
      }
    }

    input[type=text],
    select,
    textarea {
      font-size: 16px;
      font-weight: 400;
      color: #666666;
    }

    textarea {
      border: size-m(1) solid #fff;
      height: 5rem;
      resize: none;

      @media screen and (min-width:768px) {
        border: size(1) solid #fff;
        height: 100%;
      }
    }

    label {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: size-m(13);
      border: size-m(1) solid #fff;
      background: #fff;

      @media screen and (min-width:768px) {
        margin-bottom: size(20);
        border: size(1) solid #fff;
      }

      &:has(:focus) {
        outline: 2px solid hsla(var(--bc) / 0.2);
        outline-offset: 2px;
      }

      &:last-child {
        @media screen and (min-width:768px) {
          margin-bottom: 0;
        }
      }

      span {
        font-size: 16px;
        width: 95px;
        display: block;
        padding-left: 1rem;
      }

      input[type=text],
      .select {
        width: calc(100% - 95px);
      }

      input[type=text],
      select {
        &:focus {
          outline: none;
        }

        //姓名、手機註解文字
        &::placeholder {
          color: #666666;
        }
      }
    }
  }

  .text-gray,
  textarea::placeholder {
    color: #666666;
  }

  .control {
    margin: 0 size-m(-32) size-m(27) size-m(-32);

    @media screen and (min-width:768px) {
      margin: 0 0 size(49) 0;
    }
  }

  .recaptcha {
    margin-bottom: size-m(25);

    @media screen and (min-width:768px) {
      margin: 0 0 size(49) 0;
    }
  }

  .send {
    width: 100%;
    height: auto;
    display: block;
    font-size: size-m(20);
    font-weight: 500;
    line-height: 1;
    padding: size-m(25) 0;
    border: none;
    border-radius: size-m(10);

    @media screen and (min-width:768px) {
      display: block;
      width: size(480);
      font-size: size(24);
      font-weight: 400;
      letter-spacing: 1em;
      text-indent: 1em;
      padding: size(30) 0;
      min-height: auto;
      margin: 0 auto size(20) auto;
      border-radius: size(10);
      background: rgba(182, 0, 100, .6);
    }
  }

  .gmap {
    width: 100%;
    height: size-m(354);

    @media screen and (min-width:768px) {
      height: size(500);
    }

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script setup>
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
import HouseInfo from "@/section/form/houseInfo.vue"

import info from "@/info"

import { cityList, renderAreaList } from "@/info/address.js"
import { computed, getCurrentInstance, ref, reactive, watch, onMounted } from "vue"
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
    const genderTag = `(${formData.gender})`;
    if (!formData.name.endsWith(genderTag)) {
      formData.name += genderTag;
    }
  }
  /*
  if (formData.msg.trim() === "") {
    formData.msg = "無留言";
  }
    */

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
  presend.append("message", formData.msg);
  presend.append("case_code", info.case_code ? info.case_code : info.caseid);

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
    fetch("https://service-sys.lixin.com.tw/reserve/" + info.caseid, {
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