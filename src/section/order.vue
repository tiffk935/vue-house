<template>
  <div class="order relative bg-[#9E8077] text-center">
    <div class="toplogo">
      <img class="toplogo-logo" src="@/section/s1/toplogo.svg" data-aos="zoom-in" data-aos-delay="0" />
      <!-- <div class="toplogo-text">隈の日本絕美藝術 22-41 坪｜06-2602-777</div> -->
    </div>
    <div class="order1 relative">
      <div class="order2 relative">
        <img class="style3 absolute" src="@/section/s1/style1.png" />
        <img class="style2 absolute" src="@/section/s1/style1.png" />
        <img class="style1 absolute" src="@/section/s1/style1.png" />
        <img class="en absolute" src="@/section/s1/en.png" />
        <!-- <img class="style2 absolute md:hidden" src="@/section/s1/style2.png" />
        <img class="style1 absolute md:hidden" src="@/section/s1/style1.png" />
        <img class="en absolute md:hidden" src="@/section/s1/en.png" />
        Title -->
        <div class="order-title text-center text-white font-['noto_Serif_tc']">{{ info.order.title }}</div>
        <!-- Title Image -->
        <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="研森" srcset=""
          data-aos="fade" data-aos-duration="1000">
        <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="研森" srcset="" data-aos="fade"
          data-aos-duration="1000"> -->
        <!-- Form -->
        <div class="form mx-auto relative flex justify-center">
          <div class="left h-full flex flex-col justify-between items-center">
            <label class="row name w-full">
              <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
                @input="(event) => (formData.name = event.target.value)" /></label>
            <label class="row w-full">
              <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
                @input="(event) => (formData.phone = event.target.value)" /></label>

            <!-- 動態 select 欄位產生 預算 用途 等 在index.js控制  -->
            <template v-for="(fieldData, fieldKey) in selectFields" :key="fieldKey">
              <label class="row w-full">
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
            <label class="row w-full">
              <select class="select w-full rounded-none" v-model="formData.city">
                <option value="" selected disabled>居住縣市</option>
                <option v-for="city in cityList" :value="city.value" :key="city">
                  {{ city.label }}
                </option>
              </select></label>
            <label class="row w-full">
              <select class="select w-full rounded-none" v-model="formData.area">
                <option value="" selected disabled>居住地區</option>
                <option v-for="area in areaList" :value="area.value" :key="area">
                  {{ area.label }}
                </option>
              </select></label>
          </div>
          <div class="right">
            <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
              class="row textarea w-full h-full rounded-none" placeholder="備註訊息"></textarea>
          </div>
        </div>

        <!-- Policy -->
        <div class="flex gap-2 items-center justify-center control">
          <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
            class="checkbox bg-white rounded-md" />
          <p class="text-[#FFF]">
            本人知悉並同意<label for="policy-modal"
              class="modal-button text-[#FFF100] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
          </p>
        </div>
        <Policy />

        <!-- Recaptcha -->
        <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

        <!-- Send -->
        <div class="sendall mt-8 mx-auto" style="font-size:20px;font-weight: 400;
    line-height: 3.3;height:3.3em">
          <button
            class="send hover:scale-90 btn cursor-pointer  btregistration bg-[#CBC8C1] text-[#333333] hover:text-white rounded-none"
            v-if="!submitted" @click="send" :disabled="sending">
            送出表單
          </button>
          <div v-else class="send-load text-[#333333]" style="letter-spacing: 0.7em;
  text-indent: 0.9em;
  height:100%;">
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
    </div>

    <!-- Map -->
    <Map />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>

</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order {
  width: 100%;
  // padding-top: size(115);

  .toplogo {
    padding: size(110) size(131) size(80) size(131);

    img {
      width: size(600);
      //margin-bottom: size(11);
    }

    .toplogo-text {
      font-weight: 700;
      font-size: size(40);
      line-height: size(58);
      text-align: left;
      color: #fff;
    }
  }

  .style1 {
    max-width: 200%;
    left: -55vw;
    bottom: -10vw;
    width: 115vw;
    transform-origin: bottom left;

    @media screen and (min-width:768px) {
      left: -30vw;
      bottom: size(-270);
      width: 58vw;
    }
  }

  .style2 {
    left: -30vw;
    bottom: -30vw;
    width: 90vw;
    transform-origin: bottom left;
    mix-blend-mode: soft-light;
    opacity: .5;

    @media screen and (min-width:768px) {
      left: -21vw;
      bottom: size(-490);
      width: 47vw;
    }
  }

  .style3 {
    max-width: 200%;
    right: -124vw;
    bottom: 0vw;
    width: 124vw;
    transform-origin: bottom left;
    mix-blend-mode: soft-light;
    opacity: .5;

    @media screen and (min-width:768px) {
      right: -30vw;
      bottom: size(-270);
      width: 58vw;
    }
  }

  .en {
    width: size-m(144);
    left: size-m(60);
    bottom: size-m(33.33);

    @media screen and (min-width:768px) {
      width: size(294);
      left: size(346.53);
      bottom: size(-10);
    }
  }

  input,
  select,
  textarea {
    opacity: 0.8;
  }

  .order1 {
    background-size: cover;
    background-position: center center;
    // padding-bottom: size(21);
  }

  .order2 {
    padding: size(33) 0 size(73) 0;
  }

  .order-title {
    font-size: size(43);
    font-weight: 700;
    margin-bottom: size(45);
  }

  .z-10 {
    z-index: 10;
    position: relative;
  }

  .order-title-img {
    display: block;
    width: size(859);
    margin: 0 auto;
    margin-bottom: size(40);
  }

  .form {
    width: size(920);
    height: 270px;
    gap: size(80);
    margin-bottom: size(50);

    .left {
      width: size(419);
    }

    .right {
      width: size(419);
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #fff;
      position: absolute;
    }
  }

  .send {
    font-size: size(22);
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    width: size(350);
    height: 3.3em;
    line-height: 3.3;
    border: 0;
    z-index: 10;
    position: relative;
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width:768px) {
  .order {
    width: 100%;
    // border-radius: size-m(68) size-m(68) 0 0;
    // padding-top: size-m(40);
    margin-top: size-m(0);

    .toplogo {
      padding: size-m(100) size-m(24.5) size-m(0) size-m(24.5);

      img {
        width: size-m(280);
        margin-bottom: size-m(17);
      }

      .toplogo-text {
        font-weight: 700;
        font-size: size-m(16);
        line-height: size-m(23);
        text-align: left;
        color: #fff;
      }
    }

    .order1 {
      background: none;
      padding-bottom: 0;
    }

    .order2 {
      padding: size-m(40) 0 size-m(360) 0;
      background-size: cover;
      background-position: center center;
    }

    .order-title {
      font-size: size-m(29);
      font-weight: 500;
      margin-bottom: size-m(20);
    }

    .order-title-img {
      width: size-m(208);
      margin-bottom: size-m(20);
    }

    .form {
      width: size-m(310);
      height: auto;
      gap: size-m(15);
      margin-bottom: size-m(20);
      flex-direction: column;

      .left {
        width: 100%;
        gap: size-m(15);
      }

      .right {
        width: 100%;
        height: size-m(100);
      }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: size-m(21);
      width: size-m(318);
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
    formData.name = `${formData.name}(${formData.gender})`;
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