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
          <label class="row"><span>居住城市<span class="required">*</span></span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value" :key="city">
                {{ city.label }}
              </option>
            </select></label>
          <label class="row"><span>居住地區<span class="required">*</span></span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value" :key="area">
                {{ area.label }}
              </option>
            </select></label>
          <label class="row">
            <span>LINE ID</span>
            <input type="text" placeholder="LINE" class="input w-full rounded-none" :value="formData.room_type"
              @input="(event) => (formData.room_type = event.target.value)" />
          </label>
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
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

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
  // email: "信箱",
  budget: "購屋預算",
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
const staticBypass = ["budget", "msg"]
const bypass = [
  ...staticBypass,
  ...Object.entries(selectFields)
    .filter(([_, field]) => field.bypass === true)
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
      `https://script.google.com/macros/s/AKfycbzqyW-sbiYwNAwunTDkp3ncVcvPnPEkvsUQWswyprd2b1V2u1HQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &email=${formData.email}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.room_type}；${formData.budget}；${formData.msg}
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