<template>
  <div id="order" class="order relative text-center ">
    <div class="order-section">
      <div class="order-title-style">
        <div class="order-title-line">
          <div class="order-title" v-if="info.order.title" v-html="info.order.title"></div>
        </div>  
      </div> 
    <div class="order-subTitle text-center" v-if="info.order.subTitle"
        v-html="$isMobile() && info.order.subTitle_mo ? info.order.subTitle_mo : info.order.subTitle">
      </div>
<!--  -->
      <!-- FORM -->
      <div class="form mx-auto relative flex justify-center">

        <div class="left h-full flex flex-col justify-between items-center">
          <div class="name">
          <!-- 姓名 -->
          <label class="row">
            <span>姓名<span>*</span></span>
            <input v-model="formData.name" type="text" class="input w-full" placeholder="請填寫姓名" />
          </label>

          <!-- 性別（可開關） -->
          <div v-if="info.formConfig?.gender?.enabled" class="gender">
            <label>
              <input type="radio" value="男" v-model="formData.gender" />先生
            </label>
            <label>
              <input type="radio" value="女" v-model="formData.gender" />女士
            </label>
          </div>
          </div>

          <!-- 手機 -->
          <label class="row">
            <span>聯絡電話<span>*</span></span>
            <input v-model="formData.phone" type="text" class="input w-full" placeholder="請填寫電話" />
          </label>

          <!-- 動態欄位 -->
          <template v-for="(field, key) in selectFields" :key="key">
            <label class="row" v-if="!field.hidden">

              <span>
                {{ field.title }}
                <span v-if="field.required">*</span>
              </span>

              <select v-if="field.type === 'select'" v-model="formData[key]" class="select w-full rounded-none">

                <option value="" disabled>{{ field.hold }}</option>
                <option v-for="opt in field.option" :key="opt" :value="opt">
                  {{ opt }}
                </option>
              </select>

              <input v-else v-model="formData[key]" type="text" class="input w-full"
                :placeholder="field.hold" />
            </label>
          </template>

          <!-- 縣市 -->
          <label class="row" v-if="info.locationConfig?.city?.enabled">
            <span>居住縣市<span v-if="info.locationConfig?.city?.required">*</span></span>

            <select v-model="formData.city" class="select w-full">
              <option value="" disabled>請選擇城市</option>
              <option v-for="c in cityList" :key="c.value" :value="c.value">
                {{ c.label }}
              </option>
            </select>
          </label>

          <!-- 地區 --><Transition name="area-drop">
  <label 
    class="row" 
    v-if="info.locationConfig?.area?.enabled && formData.city"
  >
    <span>居住地區<span v-if="info.locationConfig?.area?.required">*</span></span>
    <select v-model="formData.area" class="select w-full">
      <option value="" disabled>請選擇地區</option>
      <option v-for="a in areaList" :key="a.value" :value="a.value">
        {{ a.label }}
      </option>
    </select>
  </label>
</Transition>

        </div>

        <!-- 留言 -->
        <div class="right">
          <textarea v-model="formData.msg" class="row textarea w-full h-full rounded-none"
            placeholder="(非必填) 請輸入您的留言"></textarea>
        </div>

      </div>

      <!-- 同意 -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" class="checkbox" />
        <p class="text-white tracking-[1px]">
          本人知悉並 「 同意個資告知事項聲明 」內容
        </p>
      </div>

      <Policy />

      <!-- recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 relative z-10" :sitekey="info.recaptcha_site_key_v2" @verify="onRecaptchaVerify"
        @expired="onRecaptchaExpired" />

      <!-- submit -->
      <div class="sendall mt-8 mb-12 mx-auto">

        <button v-if="!submitted" class="send" :disabled="sending" @click="send">
          送出表單
        </button>

        <div v-else class="send-load">
          發送中...
        </div>

      </div>

      <ContactInfo />
    </div>

    <Map v-if="info.address" />
    <HouseInfo />

  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
.area-drop-enter-active {
  transition: all 0.35s ease;
  overflow: hidden;
}
.area-drop-enter-from {
  max-height: 0;
  opacity: 0;
}
.area-drop-enter-to {
  max-height: 4em;
  opacity: 1;
}
$o-title-c: #A30C24; //.order-title

.order {
  width: 100%;
  padding-top: size(40);
  font-size: 16px;
  z-index: 6;

  .order-section {
    position: relative;
    overflow: hidden;
    min-height: size(500);
  }
/*
.order-title-img{
  width:sizem(310);
  @media screen and (min-width: 768px) {
    width: min(1200px, 95%); //最大1200px
    margin-bottom: size(20);
  }
}
  */


  .order-title-style{
  display: flex;
  padding-bottom: 25px;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  align-self: stretch;
  }

  .order-title-line{
  display: flex;
  padding: 18px 112px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  }

  .order-title-line::after {
  content: "";
  width: 400px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 1) 50%,
    transparent 100%
  );
}

  .order-title {
  color: #FFF;
  font-family: "Noto Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.16px;
  z-index: 6;
  }

 /* .order-subTitle {
    font-size: 1.2em;
    padding-top: .5em;
    letter-spacing: .1em;
  }
    */

  .form {
    width: min(1200px, 95%); //最大1200px
    //  height: 350px;
    gap: 4em;
    margin-top: 2.8em;
    margin-bottom: 3em;
    z-index: 50;
    align-items: stretch;

    .left {
      position: relative;
      flex: 1;
      gap: 1.25em;
      align-items: flex-start;
      //   width: size(419);
    }

    .right {
      flex: 1;
      height: auto;
      //  width: size(419);
      .row {
        color: #ffffff;
        padding-left: 2em;
        padding-right: 2em;
        padding-top: 1em;
        letter-spacing: 1px;}
    }

    .right textarea::placeholder {
    color: #fff;
    opacity: 0.5;
    letter-spacing: 1px;
    font-weight: 100;
    padding-left: 1em;
    padding-top: 1em;
    }



    &::after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: #0003;
      position: absolute;
      top: 0;left:0;right: 0;margin: auto;
    }


    .row {
      border-radius: 24px;
      background: rgba(0, 119, 26, 0.35);
      box-shadow: -3px 2px 26.3px 0 rgba(10, 38, 16, 0.4) inset;
      border: 0px;
      color: #ffffff;
      display: flex;
      width: 100%;
      align-items: center;
      font-size: 16px;
  


      >span {
        min-width: 8em;
        text-align: left;
        padding-left: 2em;

        >span {
          color: #c00;
        }
      }

      input,
      select {
        background: rgba(10, 38, 16, 0);
        flex: 1;
        font-weight: 100;
      }

       input::placeholder {
      color: #ffffff;
      opacity: 0.5;
      font-size: 16px;
      letter-spacing: 1px;
  }

      option {
        
        border-radius: 24px;
        background: rgba(1, 126, 28, 0.678);
        box-shadow: -3px 2px 26.3px 0 rgba(10, 38, 16, 0.22) inset;
        li {

          font-size:14px;
          letter-spacing:2px;

          &:hover {
         background:#006400;
         color:white;

          }
          }
}
      select {
        background: url("//h35.banner.tw/img//select.svg") no-repeat calc(100% - 1em) 100%;
        background-size: auto 200%;
        transition: background .3s;
        color: #ffffff;
        opacity: 1;
        font-size: 16px;
        letter-spacing: 1px;
    // filter:  brightness(0) invert(1); //select的箭頭顏色

        &:focus {
          background-position: calc(100% - 1em) 0%;
          border-radius: 12px;
        }
      }

    }

      .name {
        width: 100%;
        display: flex;
        .row{
          flex: 1;}
          
      // width: calc(100% - 3.8em);
      }
    .gender {
      display: flex;
      right: 0;
      flex-direction: column;
      margin-left: .7em;

      label:first-child {
        margin-bottom: .3em;
      }

      input {
        margin-right: .3em;
      }
    }
  }

  .send {
    font-size: 1.4em;
    background-color: #A30C24;
    //border: 1px solid #FFF9;
    border: 0;
    padding: .7em 0;
    letter-spacing: 0.5em;
    line-height: 1.5;
    text-indent: 0.5em;
    border-radius: 2em;
    text-align: center;
    width: 18em;
    z-index: 10;
    color: #fff;
    position: relative;
    transition: transform .5s;
    margin-bottom: 2em;
    font-weight: 700;
    &:hover{transform: scale(1.1);}
  }
  .send-load{color: #ffffff;}

  .control {
    font-size: 16px;
    color: #ffffff;
    position: relative;
    z-index: 10;
    input[type="checkbox"] {border: 2px solid #666;background-color:#fff;}
  }
 
}


@media screen and (max-width:768px) {
  .order-section {
    min-height: sizem(800);
    position: relative;
    // overflow: hidden;
    // padding-top: sizem(200);

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
    }

  }

  .order {
    width: 100%;
  padding-top: sizem(96);
    padding-bottom: sizem(63);

    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055F76;
    }

    .order-title {
      font-size: 20px;
      width: sizem(310);
      /*  font-size: sizem(27);
      padding-top:2em;
      .line{width: sizem(258);
      
      }*/
    }

    .order-subTitle {
      // font-size: sizem(13);
      padding-top: 0;
    }


    .form {
      width: sizem(310);
      min-width: 0;
      flex-direction: column;
      gap: 0;
      margin: 2em auto 1.1em;
      /*  height: auto;
      gap: sizem(15);
      margin-bottom: sizem(20);
      margin-top: sizem(20);*/

      .left {
        width: 100%;
        //gap: sizem(15);
      }

      .right {
        width: 100%;
        height: 6.25em;
        margin-top: 1.1em;

        .row {
          height: 7em;
        }
      }

      &::after {
        display: none;
      }
    }

    .send {
      width: sizem(310);
    }

    .control {
      font-size: 14px;
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
import { ref, reactive, watch, computed, getCurrentInstance } from "vue"
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
// 🔥 FORM DATA
// ==========================
const formData = reactive({
  name: "",
  phone: "",
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
// 🔥 FIELD LABEL MAP
// ==========================
const fieldLabelMap = {
  name: "姓名",
  phone: "手機",
  gender: "性別",
  city: "居住縣市",
  area: "居住地區",
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
  presendA.form[k] = v
}

presendA.form.note = formData.msg
delete presendA.form.msg

  Object.assign(presendA.form, utm)

// ======================
// B API
// ======================
const presendB = new FormData()

for (const [k, v] of Object.entries(formData)) {
  if (["policyChecked", "r_verify", "msg"].includes(k)) continue
  if (k === "area" && !v) continue

  // B API 欄位對應
  const apiKey = selectFields[k]?.apiB || k

  presendB.append(apiKey, v)
}

Object.entries(utm).forEach(([k, v]) => presendB.append(k, v))
presendB.append("message", formData.msg)

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
      fetch("https://script.google.com/macros/s/AKfycbzqyW-sbiYwNAwunTDkp3ncVcvPnPEkvsUQWswyprd2b1V2u1HQ/exec")
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