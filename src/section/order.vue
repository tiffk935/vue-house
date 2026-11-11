<template>
  <div id="order" class="order relative">

    <!-- Title -->
    <div class="order-title" v-if="info.order.title">{{ info.order.title }}</div>
    <div class="order-subTitle text-center" v-if="info.order.subTitle">{{ info.order.subTitle }}</div>

    <div class="container">
      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name"><span>姓名<span>*</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" /></label>
          <label class="row"><span>手機<span>*</span></span>
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" /></label>

          <!-- 動態 select 欄位（type: select）在index.js selectFields 控制 -->
          <template v-for="(fieldData, fieldKey) in selectFieldsBefore" :key="fieldKey">
            <label class="row">
              <span>{{ fieldData.title }}<span class="required" v-if="fieldData.required">*</span></span>
              <select class="select w-full rounded-none bg-white" v-model="formData[fieldKey]">
                <option value="" disabled>{{ fieldData.hold }}</option>
                <option v-for="option in fieldData.option" :value="option" :key="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </template>
          <!-- 動態 select end-->

          <!-- 居住縣市 / 地區 在index.js locationConfig 控制 -->
          <label class="row" v-if="locationConfig.city?.enabled"><span>居住城市<span class="required" v-if="locationConfig.city?.required">*</span></span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value" :key="city">
                {{ city.label }}
              </option>
            </select></label>
          <label class="row" v-if="locationConfig.city?.enabled && locationConfig.area?.enabled"><span>居住地區<span class="required" v-if="locationConfig.area?.required">*</span></span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value" :key="area">
                {{ area.label }}
              </option>
            </select></label>

          <!-- 動態 input 欄位（type: input，例如 LINE ID）排在縣市之後 -->
          <template v-for="(fieldData, fieldKey) in selectFieldsAfter" :key="fieldKey">
            <label class="row">
              <span>{{ fieldData.title }}<span class="required" v-if="fieldData.required">*</span></span>
              <input type="text" :placeholder="fieldData.hold" class="input w-full rounded-none" v-model="formData[fieldKey]" />
            </label>
          </template>
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
        @verify="onRecaptchaVerify" @expired="onRecaptchaExpired" />

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
    flex-direction:column;

    @media screen and (min-width:768px) {
      margin-bottom: size(49);
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      flex-direction:row;

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
      color: #000;
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
        > span {
          color: #CC0000;
        display: inline;
        padding-left:0;
        width:auto;
        }
      }

      .required {
        display: inline-block;
        width: auto;
        padding: 0;
        margin-left: 3px;
        font-size: 14px;
        color: #CC0000;
        font-weight: 700;
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
      background: rgba(255, 0, 0, .6);

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
// 新發信系統（A: leads.lixin 主要 / B: service-sys 過渡 / C: GAS 備份）
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
import HouseInfo from "@/section/form/houseInfo.vue"

import info from "@/info"
import { cityList, renderAreaList } from "@/info/address.js"
import { computed, getCurrentInstance, ref, reactive, watch } from "vue"
import { VueRecaptcha } from "vue-recaptcha"
import { useToast } from "vue-toastification"

const toast = useToast()

// ⚠️ 測試用：true = 送出後不跳頁，並在 Console 印出 A / B 回應。上線前務必改回 false
const DEBUG_NO_REDIRECT = true
const sending = ref(false)
const submitted = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const selectFields = info.selectFields || {}
const formConfig = info.formConfig || {}
const locationConfig = info.locationConfig || {}

// 版面順序：select 類放在縣市前，input 類（LINE ID）放在縣市後
const pickFields = (fn) =>
  Object.fromEntries(Object.entries(selectFields).filter(([_, f]) => !f.hidden && fn(f)))
const selectFieldsBefore = pickFields((f) => f.type !== "input")
const selectFieldsAfter = pickFields((f) => f.type === "input")

// ==========================
// FORM DATA
// ==========================
const formData = reactive({
  name: "",
  phone: "",
  email: "",
  msg: "",
  city: "",
  area: "",
  gender: "",
  policyChecked: false,
  r_verify: false,

  ...Object.keys(selectFields).reduce((acc, k) => {
    acc[k] = ""
    return acc
  }, {})
})

// ==========================
// FIELD LABEL MAP
// ==========================
const fieldLabelMap = {
  name: "姓名",
  phone: "手機",
  email: "信箱",
  gender: "性別",
  city: "居住縣市",
  area: "居住地區",
  policyChecked: "個資告知事項聲明",
  r_verify: "機器人驗證",
  ...Object.fromEntries(
    Object.entries(selectFields).map(([k, v]) => [k, v.title])
  )
}

// ==========================
// AREA LIST
// ==========================
const areaList = ref([])

watch(() => formData.city, (val) => {
  if (!val) {
    formData.area = ""
    areaList.value = []
    return
  }
  areaList.value = renderAreaList(val)
  formData.area = areaList.value[0]?.value || ""
})

// ==========================
// REQUIRED RULE
// ==========================
const isRequired = (key) => {
  if (key === "name" || key === "phone") return true
  if (key === "policyChecked") return true
  if (key === "r_verify") return true
  if (key === "gender") return formConfig.gender?.enabled && formConfig.gender?.required
  if (key === "city") return locationConfig.city?.enabled && locationConfig.city?.required
  if (key === "area") return locationConfig.area?.enabled && locationConfig.area?.required
  if (selectFields[key]) return selectFields[key].required
  return false
}

// ==========================
// RECAPTCHA
// ==========================
const onRecaptchaVerify = (token) => {
  formData.r_verify = token
}

const onRecaptchaExpired = () => {
  formData.r_verify = false
  toast.warning("驗證已過期，請重新勾選")
}

// ==========================
// SUBMIT
// ==========================
const send = async () => {
  const urlParams = new URLSearchParams(window.location.search)

  const utmSource = urlParams.get("utm_source") || "null"
  const utmMedium = urlParams.get("utm_medium") || "null"
  const utmContent = urlParams.get("utm_content") || "null"
  const utmCampaign = urlParams.get("utm_campaign") || "null"

  const utm = {
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_content: utmContent,
    utm_campaign: utmCampaign
  }

  // 1. 性別標籤
  if (formData.gender && formConfig.gender?.enabled) {
    const tag = `(${formData.gender})`
    if (!formData.name.includes(tag)) {
      formData.name += tag
    }
  }

  // 2. 必填驗證
  const unfill = []
  for (const [key, value] of Object.entries(formData)) {
    if (!isRequired(key)) continue
    if (value === "" || value === false) unfill.push(key)
  }

  if (unfill.length) {
    const labels = unfill.map((k) => fieldLabelMap[k] || k)
    toast.error(`「${labels.join(", ")}」為必填或必選`)
    return
  }

  const phoneReg = /^(09)[0-9]{8}$/
  if (!phoneReg.test(formData.phone)) {
    toast.error("手機格式錯誤 ( 09開頭10位數字 )")
    return
  }

  if (sending.value) return
  sending.value = true
  submitted.value = true

  // ====================================================
  // A 系統 (leads.lixin - 主要系統)
  // ====================================================
  // 留言：沒填時一律送「無留言」（B 系統留言空白會被擋）
  const msgText = (formData.msg || "").trim() || "無留言"

  const presendA = {
    caseId: info.caseid,
    form: {},
    validation: {
      siteKey: info.recaptcha_site_key_v2,
      recaptchaToken: formData.r_verify
    }
  }

  for (const [k, v] of Object.entries(formData)) {
    if (["policyChecked", "r_verify"].includes(k)) continue
    if (k === "area" && !v) continue
    presendA.form[k] = v
  }
  presendA.form.note = msgText
  delete presendA.form.msg
  Object.assign(presendA.form, utm)

  // ====================================================
  // B 系統 (service-sys - 舊系統，過渡期)
  // ====================================================
  const presendB = new FormData()

  presendB.append("name", formData.name || "")
  presendB.append("phone", formData.phone || "")
  if (formData.email) presendB.append("email", formData.email)
  if (formData.gender) presendB.append("gender", formData.gender)
  if (formData.city) presendB.append("city", formData.city)
  if (formData.area) presendB.append("area", formData.area)

  const assignedBFields = { room_type: false, budget: false }
  const extraFieldsForBMessage = []

  // 依 apiB 對應到 B 的 room_type / budget，其餘併入留言
  for (const [key, fieldConfig] of Object.entries(selectFields)) {
    const val = formData[key]
    if (!val) continue

    const label = fieldConfig.title || key
    const targetBKey = fieldConfig.apiB || key

    if (targetBKey === "room_type" && !assignedBFields.room_type) {
      presendB.append("room_type", val)
      assignedBFields.room_type = true
    } else if (targetBKey === "budget" && !assignedBFields.budget) {
      presendB.append("budget", val)
      assignedBFields.budget = true
    } else {
      extraFieldsForBMessage.push(`${label}：${val}`)
    }
  }

  extraFieldsForBMessage.push(
    extraFieldsForBMessage.length ? `留言：${msgText}` : msgText
  )

  const combinedBMessage = extraFieldsForBMessage.join(" / ")
  presendB.append("message", combinedBMessage)
  presendB.append("msg", combinedBMessage)

  Object.entries(utm).forEach(([k, v]) => presendB.append(k, v))
  presendB.append("case_code", info.case_code || info.caseid_j || info.caseid || "")

  // ====================================================
  // C 系統 (Google Apps Script - 備份試算表)
  // ====================================================
  const dynamicMsgParts = []
  for (const [key, fieldConfig] of Object.entries(selectFields)) {
    const val = formData[key]
    if (val) dynamicMsgParts.push(`${fieldConfig.title || key}：${val}`)
  }
  dynamicMsgParts.push(dynamicMsgParts.length ? `留言：${msgText}` : msgText)
  
// 固定台灣時間（UTC+8，台灣無夏令時間），不受訪客電腦時區影響
  const t = new Date(Date.now() + 8 * 60 * 60 * 1000)
  const pad = (n) => String(n).padStart(2, "0")
  const date = `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())} ${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

  const scriptParams = new URLSearchParams()
  scriptParams.append("name", formData.name || "")
  scriptParams.append("phone", formData.phone || "")
  scriptParams.append("email", formData.email || "")
  scriptParams.append("cityarea", `${formData.city || ""}${formData.area || ""}`)
  scriptParams.append("msg", dynamicMsgParts.join(" / "))
  scriptParams.append("utm_source", utmSource)
  scriptParams.append("utm_medium", utmMedium)
  scriptParams.append("utm_content", utmContent)
  scriptParams.append("utm_campaign", utmCampaign)
  scriptParams.append("date", date)
  scriptParams.append("campaign_name", info.caseName || "")

  const scriptUrl = `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?${scriptParams.toString()}`

  // ====================================================
  // 發送：C、B 不等待；A 成功才跳轉
  // ====================================================
  try {
    fetch(scriptUrl, {
      method: "GET",
      mode: "no-cors",
      keepalive: true
    }).catch(() => {})

    const reqB = fetch("https://service-sys.lixin.com.tw/reserve/" + (info.caseid_j || info.caseid), {
      method: "POST",
      body: presendB,
      keepalive: true
    })
      .then(async (res) => {
        const text = await res.text().catch(() => "")
        if (DEBUG_NO_REDIRECT) console.log("【DEBUG】B 系統回應", res.status, text)
        if (!res.ok) console.warn("B 系統回應錯誤", res.status, text)
      })
      .catch((e) => console.warn("B 系統送出失敗", e))

    const resA = await fetch("https://leads.lixin.com.tw/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(presendA),
      keepalive: true
    })

    if (!resA.ok) throw new Error("A not ok")

    // 測試模式：不跳頁，等 B 回應後印在 Console
    if (DEBUG_NO_REDIRECT) {
      console.log("【DEBUG】A 系統回應", resA.status, await resA.text().catch(() => ""))
      await reqB
      toast.success("【測試模式】已送出，未跳頁，請看 Console")
      sending.value = false
      submitted.value = false
      return
    }

    window.location.href = "formThanks"
  } catch (err) {
    console.error("A 系統送出失敗:", err)
    toast.error("送出失敗，請稍後再試")
    sending.value = false
    submitted.value = false
  }
}
</script>
