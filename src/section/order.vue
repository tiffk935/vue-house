<template>
  <div id="order" class="order relative">
    <div class="ball ball1 absolute"></div>
    <div class="ball ball2 absolute"></div>

    <!-- Title -->
    <div class="order-title" v-if="info.order.title">{{ info.order.title }}</div>
    <div class="order-subTitle text-center" v-if="info.order.subTitle">{{ info.order.subTitle }}</div>

    <div class="container">
      <!-- Form -->
      <div class="form relative">
        <div>
          <label>
            <span>姓名</span>
            <input type="text" class="input w-full rounded-none" :value="formData.name" @input="(event) => (formData.name = event.target.value)" />
          </label>
          <label>
            <span>手機</span>
            <input type="text" class="input w-full rounded-none" :value="formData.phone" @input="(event) => (formData.phone = event.target.value)" />
          </label>
          <label>
            <span>需求房型</span>
            <select class="select w-full rounded-none" v-model="formData.room_type">
              <option value="" selected disabled>請選擇房型</option>
              <option v-for="type in info.room_type" :value="type" :key="type">
                {{ type }}
              </option>
            </select>
          </label>
          <label>
            <span>居住城市</span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value" :key="city">
                {{ city.label }}
              </option>
            </select>
          </label>
          <label>
            <span>居住地區</span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value" :key="area">
                {{ area.label }}
              </option>
            </select>
          </label>
        </div>
        <div>
          <textarea 
            :value="formData.msg" 
            @input="(event) => (formData.msg = event.target.value)"
            class="row textarea w-full h-full rounded-none" 
            placeholder="請輸入您的留言"></textarea>
        </div>
      </div>
    </div>

    <!-- Policy -->
    <div class="control flex gap-2 items-center justify-center">
      <input 
        type="checkbox" 
        v-model="formData.policyChecked" 
        :checked="formData.policyChecked"
        class="checkbox bg-white rounded-md" />
      <p class="text-white font-bold">
        本人知悉並同意
        <label for="policy-modal" class="modal-button text-[#FFFA6B] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
      </p>
    </div>
    <Policy />

    <div class="recaptcha flex justify-center">
      <vue-recaptcha
        ref="recaptcha"
        :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify"
        @expired="onRecaptchaUnVerify" />
    </div>

    <!-- Send -->
    <div class="container">
      <div class="send btn text-white bg-[#560048] text-center hover:scale-90 cursor-pointer" @click="send()">
        {{ sending? '發送中..': '送出表單' }}
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

    input[type=text], select, textarea {
      font-size: 16px;
      font-weight: 400;
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

      input[type=text], .select {
        width: calc(100% - 95px);
      }

      input[type=text], select {
        &:focus {
          outline: none;
        }
      }
    }
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
import { useToast } from "vue-toastification"

// const globals = getCurrentInstance().appContext.config.globalProperties;
// const isMobile = computed(() => globals.$isMobile());

const toast = useToast()
const sending = ref(false)
const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  budget: "",
  project: "",
  email: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

//非必填
const bypass = ['room_type', 'budget', 'project', 'email', 'msg']

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "預約時段", //room_type
  "預算", //budget
  "建案", //project
  "信箱", //email
  "居住城市", //city
  "居住地區", //area
  "備註訊息", //msg
  "個資告知事項聲明", //policyChecked
  "機器人驗證", //r_verify
])

const areaList = ref([])

watch(
  () => formData.city,
  (newVal, oldVal) => {
    areaList.value = renderAreaList(newVal)
    formData.area = areaList.value[0].value
  }
)

const onRecaptchaVerify = () => {
  formData.r_verify = true
}
const onRecaptchaUnVerify = () => {
  formData.r_verify = false
}

const send = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmContent = urlParams.get("utm_content");
  const utmCampaign = urlParams.get("utm_campaign");
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

  const presend = new FormData();
  let pass = true
  let unfill = []
  let idx = 0

  //驗證
  for (const [key, value] of Object.entries(formData)) {
    if (!bypass.includes(key)) {
      if (value == "" || value == false) {
        unfill.push(formDataRef.value[idx])
      }

    }

    idx++;

    presend.append(key, value);
  }

  presend.append("utm_source", utmSource);
  presend.append("utm_medium", utmMedium);
  presend.append("utm_content", utmContent);
  presend.append("utm_campaign", utmCampaign);

  //有未填寫
  if (unfill.length > 0) {
    pass = false
    toast.error(`「${unfill.join(", ")}」為必填或必選`)
    return
  }

  //手機驗證
  const MobileReg = /^(09)[0-9]{8}$/
  if (!formData.phone.match(MobileReg)) {
    pass = false
    toast.error(`手機格式錯誤 ( 09開頭10位數字 )`)
    return
  }

  if (pass && !sending.value) {
    sending.value = true
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &room_type=${formData.room_type}
      &budget=${formData.budget}
      &project=${formData.project}
      &email=${formData.email}
      &cityarea=${formData.city}${formData.area}
      &msg=${formData.msg}
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

    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks";
      }
      sending.value = false
    });

    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>