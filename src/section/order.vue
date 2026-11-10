<template>
  <div id="order" class="order relative text-[#000000]">
    <div class="order-info">
      <div class="info1">
        <img class="logo block md:hidden" src="@/section/form/logo-m.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
        <img class="logo hidden md:block" src="@/section/form/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
        <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <span style="letter-spacing: 0;">2-4房 24.27.35.48坪</span><br>
          千坪泳池渡假俱樂部
        </div>
      </div>
      <div class="info2">
        <img class="fullwang block" src="@/section/form/fullwang.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
        <div>
          <div class="info2-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
            <div class="t2">樹立經典 綠動未來</div>
            <div class="stock">股票代號<span> 6219</span></div>
          </div>
          <div class="t3 md:hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">人與環境共好的<br>理想建築品牌</div>
        </div>
      </div>
    </div>

    <!-- Title -->
    <div class="order-title text-[#C59B6D]" v-if="info.order.title">{{ info.order.title }}</div>
    <div class="order-subTitle text-center" v-if="info.order.subTitle">{{ info.order.subTitle }}</div>

    <div class="container">
      <!-- Form -->
      <div class="form mx-auto relative md:flex md:justify-center text-[#000000]">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row name">
            <span>姓名<span class="required">*</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" />
          </label>
          <label class="row">
            <span>手機<span class="required">*</span></span>
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" />
          </label>

          <!-- 動態 select 欄位（type: select）在index.js selectFields 控制 -->
          <template v-for="(field, key) in selectFieldsBefore" :key="key">
            <label class="row">
              <span>{{ field.title }}<span class="required" v-if="field.required">*</span></span>
              <select class="select w-full rounded-none bg-white" v-model="formData[key]">
                <option value="" disabled>{{ field.hold }}</option>
                <option v-for="opt in field.option" :value="opt" :key="opt">
                  {{ opt }}
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

          <!-- 動態 input 欄位（type: input，例如 LINE ID）排在縣市之後，維持原版面順序 -->
          <template v-for="(field, key) in selectFieldsAfter" :key="key">
            <label class="row">
              <span>{{ field.title }}<span class="required" v-if="field.required">*</span></span>
              <input type="text" :placeholder="field.hold" class="input w-full rounded-none" v-model="formData[key]" />
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
        <p class="font-bold text-white">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#FFFF00] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaExpired" />

      <!-- Send -->
      <div class="sendall mt-8 mx-auto">
        <button class="send bg-[#C59B6D] hover:scale-90 btn cursor-pointer" v-if="!submitted" @click="send"
          :disabled="sending">
          確認送出
        </button>
        <div v-else class="send-load text-[#FFF]">
          <div>
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
  .order-info {
    text-align: center;
    color: #fff;
    padding: size-m(68) 0 size-m(86) 0;
    @media screen and (min-width:768px) {
      padding: size(99) 0 size(45) 0;
    }

    .info1 {
      @media screen and (min-width:768px) {
        display: flex;
        justify-content: center;
        margin-bottom: size(28);
      }
    }

    .logo {
      width: size-m(219);
      margin: 0 auto size-m(37) auto;
      @media screen and (min-width:768px) {
        width: size(310);
        margin: 0 size(23) 0 0;
      }
    }

    .t1 {
      width: calc(100% - size-m(64));
      padding: size-m(10) 0;
      font-size: size-m(26);
      line-height: size-m(32);
      font-weight: 700;
      letter-spacing: .06em;
      border-top: size-m(1) solid #fff;
      border-bottom: size-m(1) solid #fff;
      margin: 0 auto size-m(34) auto;
      @media screen and (min-width:768px) {
        width: auto;
        padding: 0 0 0 size(23);
        font-size: size(24.35);
        line-height: 130%;
        border: none;
        border-left: size(0.64) solid #fff;
        margin: 0;
      }
    }

    .info2 {
      @media screen and (min-width:768px) {
        display: flex;
        justify-content: center;
      }
    }

    .fullwang {
      width: size-m(92);
      margin: 0 auto size-m(23) auto;
      @media screen and (min-width:768px) {
        width: size(119);
        margin: 0 size(13) 0 0;
      }
    }

    .info2-1 {
      @media screen and (min-width:768px) {
        display: flex;
        border: size(1) solid #fff;
      }
    }

    .t2 {
      font-size: size-m(22);
      line-height: size-m(29);
      font-weight: 700;
      letter-spacing: .1em;
      margin: 0 0 size-m(13) 0;
      @media screen and (min-width:768px) {
        font-size: size(14);
        line-height: size(25);
        font-weight: 500;
        margin: 0;
        padding: 0 size(20);
      }
    }

    .stock {
      width: size-m(120);
      border: size-m(1) solid #fff;
      font-size: size-m(12.6);
      line-height: size-m(28);
      margin: 0 auto size-m(11) auto;
      @media screen and (min-width:768px) {
        width: size(75);
        border: none;
        font-size: size(9.44);
        line-height: size(25);
        margin: 0;
        background: #fff;
        color: #011D19;
      }

      span {
        letter-spacing: .15em;
        @media screen and (min-width:768px) {
          letter-spacing: 0;
        }
      }
    }

    .t3 {
      font-size: size-m(23);
      line-height: 170%;
      font-weight: 700;
      letter-spacing: .04em;
    }
  }

  .btn {
    text-transform: none;
  }

  .container {
    width: 100%;
    padding: 0 size-m(22);

    @media screen and (min-width:768px) {
      padding: 0;
      max-width: size(800);
      margin: 0 auto;
    }
  }

  .order-title {
    text-align: center;
    font-size: size-m(34);
    line-height: size-m(41);
    margin: 0 auto size-m(30) auto;

    @media screen and (min-width:768px) {
      font-size: size(34);
      line-height: size(41);
      margin-bottom: size(20);
    }
  }

  .form {
    position: relative;
    margin-bottom: size-m(20);

    @media screen and (min-width:768px) {
      margin-bottom: size(30);
      display: flex;
      justify-content: space-between;
      align-items: stretch;

      div:nth-child(1) {
        width: size(375);
        margin-right: size(50);
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

      &:focus {
        outline: 2px solid rgba(255, 255, 255, 0.44);
        outline-offset: 2px;
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
        outline: 2px solid rgba(255, 255, 255, .44);
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
        font-weight: 600;

        .required {
          display: inline-block;
          font-size: 14px;
          margin-left: 3px;
          width: auto;
          padding: 0;
          color: #CC0000;
          font-weight: 700;
        }
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
    height: size-m(72);
    font-size: size-m(20);
    font-weight: 700;
    line-height: 1;
    padding: 0;
    border: none;
    letter-spacing: .3em;
    text-indent: .3em;
    display: flex;
    justify-content: center;
    align-content: center;

    @media screen and (min-width:768px) {
      width: size(260);
      height: size(60);
      font-size: size(20);
      letter-spacing: 1em;
      text-indent: 1em;
      min-height: auto;
      margin: 0 auto;
      
    }
  }

  .send-load {
    width: 100%;
    height: size-m(72);
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.7em;
    text-indent: 0.9em;
    @media screen and (min-width:768px) {
      height: size(60);
    }
  }

  .gmap {
    width: 100%;
    height: size-m(354);

    @media screen and (min-width:768px) {
      height: size(320);
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
  presendA.form.note = formData.msg
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

  if (formData.msg) {
    extraFieldsForBMessage.push(
      extraFieldsForBMessage.length ? `留言：${formData.msg}` : formData.msg
    )
  }

  const combinedBMessage = extraFieldsForBMessage.join(" / ")
  presendB.append("message", combinedBMessage)
  presendB.append("msg", combinedBMessage)

  Object.entries(utm).forEach(([k, v]) => presendB.append(k, v))
  presendB.append("case_code", info.case_code || info.caseid_j || info.caseid || "")

  // ====================================================
  // C 系統 (Google Apps Script - 備份試算表，沿用富旺原本的 GAS)
  // ====================================================
  const dynamicMsgParts = []
  for (const [key, fieldConfig] of Object.entries(selectFields)) {
    const val = formData[key]
    if (val) dynamicMsgParts.push(`${fieldConfig.title || key}：${val}`)
  }
  if (formData.msg) {
    dynamicMsgParts.push(dynamicMsgParts.length ? `留言：${formData.msg}` : formData.msg)
  }
  
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

    fetch("https://service-sys.lixin.com.tw/reserve/" + (info.caseid_j || info.caseid), {
      method: "POST",
      body: presendB,
      keepalive: true
    }).catch((e) => console.warn("B 系統送出失敗", e))

    const resA = await fetch("https://leads.lixin.com.tw/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(presendA),
      keepalive: true
    })

    if (!resA.ok) throw new Error("A not ok")

    window.location.href = "formThanks"
  } catch (err) {
    console.error("A 系統送出失敗:", err)
    toast.error("送出失敗，請稍後再試")
    sending.value = false
    submitted.value = false
  }
}
</script>