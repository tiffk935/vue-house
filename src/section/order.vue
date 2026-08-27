  <template>
  <div class="order relative bg-[#FFDFE3] text-center">
    <img class="logo absolute hidden md:block" src="@/section/form/logo.svg" alt="小城故事8" srcset="" />
    <img class="logo absolute md:hidden" src="@/section/form/logo-m.svg" alt="小城故事8" srcset="" />
    <img class="style1 absolute" src="@/section/form/style1.svg" alt="小城故事8" srcset="" />
    <img class="style2 absolute hidden md:block" src="@/section/form/style2.svg" alt="小城故事8" srcset="" />
    <div class="order1">
      <div class="order2 relative">
        <img class="style2 absolute block md:hidden" src="@/section/form/style2.svg" alt="小城故事8" srcset="" />
        <!-- Title -->
        <div class="order-title text-center text-white">{{ info.order.title }}</div>
        <!-- Title Image -->
        <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="小城故事8" srcset=""
          data-aos="fade" data-aos-duration="1000">
        <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="小城故事8" srcset="" data-aos="fade"
          data-aos-duration="1000"> -->
       <!-- FORM -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left flex flex-col justify-between items-stretch">
          <div class="name">
            <!-- 姓名 -->
            <label class="row">
              <input
                v-model="formData.name"
                type="text"
                class="input w-full"
                placeholder="姓名"
              />
            </label>

            <!-- 性別（可開關） 
            <div v-if="info.formConfig?.gender?.enabled" class="gender">
              <label>
                <input type="radio" value="男" v-model="formData.gender" />先生
              </label>
              <label>
                <input type="radio" value="女" v-model="formData.gender" />女士
              </label>
            </div>-->
          </div>

          <!-- 手機 -->
          <label class="row">
            <input
              v-model="formData.phone"
              type="text"
              class="input w-full"
              placeholder="手機"
            />
          </label>

          <!-- LINE 
          <label class="row">
            <input
              v-model="formData.room_type"
              type="text"
              class="input w-full"
              placeholder="請填寫LINE ID"
            />
          </label>-->

          <!-- 動態欄位 -->
          <template v-for="(field, key) in selectFields" :key="key">
            <label class="row" v-if="!field.hidden">
              <span>
                {{ field.title }}
                <span v-if="field.required"> </span>
              </span>

              <select
                v-if="field.type === 'select'"
                v-model="formData[key]"
                class="select w-full rounded-none"
              >
                <option value="" disabled>{{ field.hold }}</option>
                <option v-for="opt in field.option" :key="opt" :value="opt">
                  {{ opt }}
                </option>
              </select>

              <input
                v-else
                v-model="formData[key]"
                type="text"
                class="input w-full"
                :placeholder="field.hold"
              />
            </label>
          </template>

          <!-- 縣市 -->
          <label class="row" v-if="info.locationConfig?.city?.enabled">
        

            <select v-model="formData.city" class="select w-full">
              <option value="" disabled>居住縣市</option>
              <option v-for="c in cityList" :key="c.value" :value="c.value">
                {{ c.label }}
              </option>
            </select>
          </label>

          <!-- 地區 --><Transition name="area-drop">
            <label
              class="row"
            >
              <select v-model="formData.area" class="select w-full">
                <option value="" disabled>居住地區</option>
                <option v-for="a in areaList" :key="a.value" :value="a.value">
                  {{ a.label }}
                </option>
              </select>
            </label>
          </Transition>
        </div>

        <!-- 留言 -->
        <div class="right">
          <textarea
  v-model="formData.msg"
  class="row textarea w-full rounded-none"
  placeholder="備註訊息"
></textarea>
        </div>
      </div>

      <!-- 同意 -->
      <div class="flex gap-2 items-center justify-center control">
        <input
          type="checkbox"
          v-model="formData.policyChecked"
          :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md"
        />
        <p>
            本人知悉並同意<label for="policy-modal"
              class="modal-button text-[#7EAA46] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
          </p>
      </div>

      <Policy />

      <!-- recaptcha -->
      <vue-recaptcha
        class="flex justify-center mt-8 relative z-10"
        :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify"
        @expired="onRecaptchaExpired"
      />

      <!-- Send -->
      <div
        class="sendall mt-8 mx-auto"
        style="font-size: 20px; font-weight: 400; line-height: 3.3"
      >
        <button
          class="send hover:scale-90 btn cursor-pointer"
          v-if="!submitted"
          @click="send"
          :disabled="sending"
        >
          送出表單
        </button>
        <div
          v-else
          class="send-load text-[#333]"
          style="letter-spacing: 0.7em; text-indent: 0.9em; height: 100%"
        >
          <svg
            class="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style="display: inline-block; margin: 0 0.8em"
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
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          <span>發送中...</span>
</div>
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

.row,
.input,
.select,
.textarea,
.form {
  border-radius: 0 !important;
}
.order {
  width: 100%;
  background-color: #4B6730;
  // padding-top: size(115);

  .logo {
    width: size(1750);
    left: size(129);
    top: size(102);
  }

  .style1 {
    width: size(1405);
    left: size(1046);
    top: size(196);
  }

  .style2 {
    width: size(567.68);
    left: size(0);
    top: size(612);
  }

  .order1 {
    background-size: cover;
    background-position: center center;
    padding-bottom: size(21);
    position: relative;
  }

  .order2 {
    padding: size(526) 0 size(58) 0;
  }

  .order-title {
    font-size: size(43);
    font-weight: 500;
    margin: 0 auto size(45) auto;
    background: #364724;
    width: size(920);
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
  display: flex;
  align-items: stretch;
  gap: size(80);
  margin-bottom: size(50);

  .left {
    width: size(419);
    display: flex;
    flex-direction: column;
    gap: size(15);
  }

  .right {
    width: size(419);
    display: flex;
  }

  .textarea {
    width: 100%;
    min-height: 240px;
    height: auto;
  }

  &::after {
    content: "";
    width: size(1);
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
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
    margin-top: 2rem;           /* mt-8 */
    margin-left: auto;          /* mx-auto */
    margin-right: auto;
  
    cursor: pointer;            /* cursor-pointer */
    background-color: #7EAA46;  /* bg-[#7EAA46] */
    color: #fff;                /* text-white */
    border-radius: 9999px;      /* rounded-full */

  /* hover:scale-90 */
  transition: transform 0.3s ease;
  }

  .send:hover {
  transform: scale(0.9);
  background-color: rgb(48, 45, 64);
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
    height:auto;
    // border-radius: size-m(68) size-m(68) 0 0;
    // padding-top: size-m(40);
    margin-top: size-m(0);

    .logo {
      width: size-m(340);
      left: size-m(26);
      top: size-m(32);
    }

    .style1 {
      width: size-m(592.02);
      left: size-m(8);
      top: size-m(207);
      max-width: none;
    }

    .style2 {
      width: size-m(325);
      left: size-m(-6);
      top: auto;
      bottom: size-m(15);
    }

    .order1 {
      background: none;
      padding-bottom: 0;
    }

    .order2 {
      padding: size-m(488) 0 size-m(240) 0;
      background-size: cover;
      background-position: center center;
    }

    .order-title {
      font-size: size-m(29);
      font-weight: 500;
      margin-bottom: size-m(20);
      background: none;
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
import {computed, getCurrentInstance, ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

// const selectFields = info.selectFields

import { useToast } from "vue-toastification"
const toast = useToast()

const sending = ref(false)

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

