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
            <input v-model="formData.name" type="text" class="input w-full" placeholder="請填寫您的姓名" />
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
            <input v-model="formData.phone" type="text" class="input w-full" placeholder="請填寫您的聯絡電話" />
          </label>

          <!-- 動態欄位 -->
          <template v-for="(field, key) in selectFields" :key="key">
  <Transition name="area-drop">
    <label
      class="row dynamic-row"
      v-if="!field.hidden && shouldShowField(field)"
    >

      <span>
        {{ field.title }}
        <span v-if="field.required">*</span>
      </span>

      <CustomSelect
  v-if="field.type === 'select'"
  v-model="formData[key]"
  :placeholder="field.hold"
  :options="field.option?.map(item => ({
    label: item,
    value: item
  })) || []"
  :nowrap="field.nowrap"
/>

      <input
        v-else
        v-model="formData[key]"
        type="text"
        class="input w-full"
        :placeholder="field.hold"
      />

    </label>
  </Transition>
</template>

          <!-- 縣市 -->
          <label class="row" v-if="info.locationConfig?.city?.enabled">
            <span>居住縣市<span v-if="info.locationConfig?.city?.required">*</span></span>

            <CustomSelect
  v-model="formData.city"
  placeholder="請選擇縣市"
  :options="cityList"
/>

          </label>

          <!-- 地區 --><Transition name="area-drop">
  <label 
    class="row" 
    v-if="info.locationConfig?.area?.enabled && formData.city"
  >
    <span>居住地區<span v-if="info.locationConfig?.area?.required">*</span></span>

   <CustomSelect
  v-model="formData.area"
  placeholder="請選擇地區"
  :options="areaList"
/>
  </label>
</Transition>

        </div>

        <!-- 留言 -->
        <div class="right">
          <textarea v-model="formData.msg" class="row textarea w-full h-full rounded-none"
            placeholder="（非必填）歡迎留下您想了解的內容"></textarea>
        </div>

      </div>

      <!-- 同意 -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" class="checkbox" />
        <p>
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
          送出登記
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
  font-size: clamp(12px, 4vw, 16px);
  z-index: 6;

  .order-section {
    position: relative;
    overflow: hidden;
    min-height: size(500);
    margin-bottom: sizem(-100);
  
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
  padding-bottom: 0px;
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
  font-size: 24px;
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
    width: min(1000px, 95%); //最大1200px
    //  height: 350px;
    gap: 2em;
    margin-top: 2em;
    margin-bottom: 6em;
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
        padding-top: 1.5em;
        letter-spacing: 2px;}
    }

    .right textarea::placeholder {
    color: #ffffff;
    opacity: 0.5;
    letter-spacing: 1px;
    font-weight: 100;
    padding-left: 1em;
    padding-top: 1em;
    }



    .row {
      font-family: "Chiron Hei HK", sans-serif;

      border-radius: 12px;
      border: 0.1px solid #FFF;
      background: rgba(255, 255, 255, 0.01);
      box-shadow: 1px 4px 38.3px 0 rgba(255, 255, 255, 0.04) inset;
      color: #def6ff;
      display: flex;
      width: 100%;
      align-items: center;
      font-size: clamp(10px, 3.5vw, 16px);
      letter-spacing:1.5px;
  


      >span {
        min-width: 8em;
        text-align: left;
        padding-left: 1.5em;

        >span {
          color: #c00;
        }
      }

      input {
    color:#ffffff;
    opacity:1;
    background:transparent;
    font-size: clamp(12px, 4vw, 16px);
    letter-spacing:1px;
  }


  input::placeholder {
    color:rgba(255,255,255,.5);
    opacity:1;
    font-size: clamp(12px, 4vw, 16px);
    letter-spacing:1.5px;
  }

      

    }

     .dynamic-row {
  flex-direction: column;
  align-items: stretch;
  gap: 0em;

  > span {
    width: 100%;
    min-width: 0;
    padding-left: 1.5em;
    padding-top: 0.8em;
  }

  > input {
    width: calc(100% - 3em);
    height: 2em;
    margin: 1em auto 1em;
    padding-left: 0em; // ⭐ 加這個
  }

  :deep(.custom-select) {
    width: calc(100% - 3em);
    margin: 0 auto 1em;
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
    font-size: 20px;
    border-radius: 1px;

  background:
  radial-gradient(
    ellipse at 36% -20%,
    #e93fff 0%,
    #9b66b9 10%,
    #003c80 55%,
    transparent 75%
  ),

  radial-gradient(
    ellipse at -100% 100%,
  
    #5893FF 22%,
    #00446E 55%,
    transparent 75%
  ),
  radial-gradient(
    ellipse at 180% 120%,
    #AD3DB7 0%,
    #5893FF 22%,
    #00446E 55%,
    transparent 75%
  ),
  #00446E;
    
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: .7em 0;
    letter-spacing: 0.2em;
    line-height: 1.5;
    text-indent: 0.5em;
    border-radius: 12px;
    text-align: center;
    width: 264px;
    z-index: 10;
    color: #fff;
    position: relative;
    transition: transform .5s;
    margin-bottom: 0em;
    font-weight: 400;
    &:hover{transform: scale(1.03);}
  }
  .send-load{color: #ffffff;}

  .control {
    font-size: clamp(12px, 4vw, 16px);
  color: #ffffff;
  position: relative;
  z-index: 10;
  }
 
}

.checkbox {
  appearance: none;
  -webkit-appearance: none;

  width: 20px;
  height: 20px;

  margin: 0 0.5em -0.1em 0;

  border: 1.5px solid rgba(255, 255, 255, 0.8);
  border-radius: 4px;

  background: rgba(255, 255, 255, 0.08);

  cursor: pointer;

  position: relative;
  flex-shrink: 0;

  transition: all 0.2s ease;
}

/* 勾選後 */
.checkbox:checked {
  background:
    radial-gradient(
      ellipse at 36% -20%,
      #e93fff 0%,
      #9b66b9 10%,
      #003c80 55%,
      transparent 75%
    ),
    radial-gradient(
      ellipse at -100% 100%,
      #5893FF 22%,
      #00446E 55%,
      transparent 75%
    ),
    #00446E;

  border-color: transparent;
}

/* 勾號 */
.checkbox:checked::after {
  content: "";

  position: absolute;

  width: 5px;
  height: 9px;

  left: 6px;
  top: 2px;

  border: solid #fff;
  border-width: 0 2px 2px 0;

  transform: rotate(45deg);
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
      margin-bottom: sizem(20);
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
      display: flex;
    justify-content: center;
      width: calc(100% - 4em);
      min-width: 0;
      flex-direction: column;
      gap: 0;
      margin: 3em auto 2em;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width:80vw;
    margin: 0 auto;
    font-size: sizem(12);
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: 2px;
    }
  }

  
}

@media screen and (max-width: 768px) {
  .order {
    .form {
      .row {
        background: rgba(64, 106, 161, 0.466);
      }
    }
  }

}



</style>
<script setup>
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
//import Map from "@/section/form/map.vue"
import HouseInfo from "@/section/form/houseInfo.vue"
/*自訂下拉選單*/
import CustomSelect from "@/section/CustomSelect.vue"


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
  budget: "",
  time: "",
  recommender: "",
  recname: "",
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
  //gender: "性別",
  room_type: "需求房型",
  budget: "購屋預算",
  time: "方便聯絡時間",
  recommender: "介紹、推薦來源",
  recname: "介紹人、店家名稱",
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
  presendA.form[k] = v
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

  // B API 欄位對應
  const apiKey = selectFields[k]?.apiB || k
  presendB.append(apiKey, v)
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
    if (["policyChecked", "r_verify"].includes(k)) continue;
    if (mergeToMessageKeys.includes(k)) continue; // ← 新增：car、time 不單獨送
    if (k === "area" && !v) continue;

    scriptParams.append(k, v ?? "");
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