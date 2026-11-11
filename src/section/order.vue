<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <!-- Title -->
      <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div>
      <!-- <div class="cus-divider"></div> -->

      <!-- Title Image
      <img class="order-title-img" src="@/section/form/ordertitle.png" alt="" srcset="">
 -->
      <!-- Custom Image -->

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
        <p class="text-[#000]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#c00] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send --><div class="sendall mt-8 mx-auto">
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
  padding-top: 0;

  .bird {
    @apply absolute;
    width: size(155);
    top: size(420);
    right: size(450);
    animation: fly 6s ease-in-out infinite alternate-reverse;

    @keyframes fly {
      from {
        transform: skewX(-10deg) skewY(-3deg) translate(-4%, 8%) rotate(10deg);
      }

      to {
        transform: skewX(10deg) skewY(3deg) translate(4%, -8%) rotate(0deg);

      }
    }
  }

  .order-title {
    font-size: size(40);
    font-weight: 700;
    color: #821c3e;
    padding-top:1.5em;
    //filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8))
  }

  .order-title-img {
    width: size(1008);
    margin-bottom: size(155);
  }
  .order-subTitle{
    font-size: size(17);
    color: #000;
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
    color: #821c3e;
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

import { useToast } from "vue-toastification"



const toast = useToast()
const sending = ref(false)
const submitted = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const selectFields = info.selectFields || {}
const formConfig = info.formConfig || {}
const locationConfig = info.locationConfig || {}


// ==========================
// 🔥 欄位依賴控制
// ==========================
const shouldShowField = (field) => {

  // 沒有設定 dependsOn → 正常顯示
  if (!field.dependsOn) {
    return true
  }

  // 有設定 dependsOn → 判斷指定欄位是否有值
  return !!formData[field.dependsOn]
}

// ==========================
// 🔥 FORM DATA
// ==========================
const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  budget: [],
  msg: "",
  city: "",
  area: "",
  //gender: "",
  policyChecked: false,
  r_verify: false,

  ...Object.keys(selectFields).reduce((acc, k) => {
    acc[k] = selectFields[k].type === "checkbox" ? [] : ""
    return acc
  }, {})
})






// ==========================
// 🔥 FIELD LABEL MAP
// ==========================
const fieldLabelMap = {
  name: "姓名",
  phone: "手機",
  //gender: "性別",
  room_type: "需求房型",
  budget: "預算",
  //time: "方便聯絡時間",
  city: "居住縣市",
  area: "居住地區",
  policyChecked: "個資聲明",
  r_verify: "我不是機器人",
  // 動態欄位從 selectFields 自動取 title
  ...Object.fromEntries(
    Object.entries(selectFields).map(([k, v]) => [k, v.title])
  )
}

// ==========================
// 🔥 AREA LIST CONTROL
// ==========================
const areaList = ref([])

watch(() => formData.city, (val) => {
  if (!val) {
    formData.area = ""
    areaList.value = []
    return
  }

  areaList.value = renderAreaList(val)
  formData.area = ""
})

// ==========================
// 🔥 REQUIRED RULE ENGINE
// ==========================
const isRequired = (key) => {
  if (key === "name" || key === "phone") return true
  if (key === "policyChecked") return true
  if (key === "r_verify") return true
  if (key === "gender") return formConfig.gender?.required
  if (key === "city") return locationConfig.city?.required
  if (key === "area") return locationConfig.area?.required

  if (selectFields[key]) return selectFields[key].required

  return false
}

// ==========================
// 🔥 RECAPTCHA
// ==========================
const onRecaptchaVerify = (token) => {
  formData.r_verify = token
}

const onRecaptchaExpired = () => {
  formData.r_verify = false
  toast.warning("驗證已過期")
}

// ==========================
// 🔥 SUBMIT
// ==========================
const send = async () => {

  const urlParams = new URLSearchParams(window.location.search)

  const utm = {
    utm_source: urlParams.get("utm_source") || "null",
    utm_medium: urlParams.get("utm_medium") || "null",
    utm_content: urlParams.get("utm_content") || "null",
    utm_campaign: urlParams.get("utm_campaign") || "null"
  }

  // ======================
  // gender tag
  // ======================
  if (formData.gender && formConfig.gender?.enabled) {
    const tag = `(${formData.gender})`
    if (!formData.name.includes(tag)) {
      formData.name += tag
    }
  }

  // ======================
  // validation
  // ======================
  const unfill = []

  for (const [key, value] of Object.entries(formData)) {

    if (!isRequired(key)) continue

    if (value === "" || value === false) {
      unfill.push(key)
    }
  }

if (unfill.length) {
  const labels = unfill.map(k => fieldLabelMap[k] || k)
  toast.error(`請填寫：${labels.join(", ")}`)
  return
}

  const phoneReg = /^(09)[0-9]{8}$/
  if (!phoneReg.test(formData.phone)) {
    toast.error("手機格式錯誤")
    return
  }

  if (sending.value) return

  sending.value = true
  submitted.value = true

  // ======================
  // A API
  // ======================
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

  presendA.form[k] = Array.isArray(v)
    ? v.join(" / ")
    : v
}

presendA.form.note = formData.msg
delete presendA.form.msg

  Object.assign(presendA.form, utm)

// ======================
// B API
// ======================
const presendB = new FormData()
// 因對方欄位不足改併入 message，不再單獨送出
const mergeToMessageKeys = ["time","recommender", "recname"]

for (const [k, v] of Object.entries(formData)) {
  if (["policyChecked", "r_verify", "msg"].includes(k)) continue
  if (mergeToMessageKeys.includes(k)) continue
  if (k === "area" && !v) continue

  const apiKey = selectFields[k]?.apiB || k

  presendB.append(
    apiKey,
    Array.isArray(v) ? v.join(" / ") : v
  )
}

Object.entries(utm).forEach(([k, v]) => presendB.append(k, v))

// 組合簡潔的留言內容：原留言 + 額外項目 / 額外項目
const extraMsgParts = []
if (formData.time) extraMsgParts.push(`【方便聯絡時間】${formData.time}`)
if (formData.recommender) extraMsgParts.push(`【介紹、推薦來源】${formData.recommender}`)
if (formData.recname) extraMsgParts.push(`【介紹人、店家名稱】${formData.recname}`)

const finalMessage = [formData.msg, ...extraMsgParts].filter(Boolean).join(" / ")

presendB.append("message", finalMessage)

presendB.append(
  "case_code",
  info.case_code || info.caseid_j || info.caseid
)


  // ======================
  // SUBMIT
  // ======================
  const DEBUG_ONLY_A = false  // 👈 測試時開啟，上線前改回 false / true

  try {
    if (!DEBUG_ONLY_A) {
  const scriptParams = new URLSearchParams();

  for (const [k, v] of Object.entries(formData)) {
  if (["policyChecked", "r_verify"].includes(k)) continue
  if (mergeToMessageKeys.includes(k)) continue
  if (k === "area" && !v) continue

  scriptParams.append(
    k,
    Array.isArray(v) ? v.join(" / ") : (v ?? "")
  )
}

  // msg 也統一改用合併後的 finalMessage
  scriptParams.set("msg", finalMessage);

  // UTM
  Object.entries(utm).forEach(([k, v]) => {
    scriptParams.append(k, v);
  });

  // 額外固定欄位
  scriptParams.append("date", new Date().toISOString());
  scriptParams.append("campaign_name", info.caseName || "");
  scriptParams.append(
    "case_code",
    info.case_code || info.caseid_j || info.caseid || ""
  );

  fetch(
    `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?${scriptParams.toString()}`,
    { method: "GET" }
  );
}

    const requests = [
      fetch("https://leads.lixin.com.tw/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(presendA)
      })
    ]

    if (!DEBUG_ONLY_A) {
      requests.push(
        fetch("https://service-sys.lixin.com.tw/reserve/" + (info.caseid_j || info.caseid), {
          method: "POST",
          body: presendB
        })
      )
    }

    const [resA, resB] = await Promise.allSettled(requests)

    const aOk = resA.status === "fulfilled" && resA.value.ok
    const bOk = DEBUG_ONLY_A ? true : (resB.status === "fulfilled" && resB.value.ok)

    if (!aOk) {
      console.warn("A API 發送失敗，B 與 Google Script 仍繼續")
    }

    if (DEBUG_ONLY_A ? aOk : bOk) {
      window.location.href = "formThanks"
    } else {
      toast.error("送出失敗")
    }

  } catch (err) {
    console.error(err)
    toast.error("系統錯誤")
  } finally {
    sending.value = false
  }
}

</script>