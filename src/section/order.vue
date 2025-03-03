<template>
  <div id="order" class="order bg-[#C30D23] relative text-center">
    
    <div class="order-inner">
      <div class="order-section">

        <div class="order-title text-white">CONTACT US</div>

        <!-- Form -->
        <div class="form mx-auto relative flex justify-center">
          <div class="left h-full flex flex-col justify-between items-center">
            <label class="row">
              <span>姓名<span>*</span></span>
              <input type="text" class="input w-full rounded-none" placeholder="姓名*" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" />
            </label>
            <label class="row">
              <span>手機<span>*</span></span>
              <input type="text" class="input w-full rounded-none" placeholder="手機*" :value="formData.phone"
                @input="(event) => (formData.phone = event.target.value)" />
            </label>
            <label class="row">
              <span>信箱<span>*</span></span>
              <input type="text" class="input w-full rounded-none" placeholder="信箱*" :value="formData.email"
                @input="(event) => (formData.email = event.target.value)" />
            </label>
            <label class="row">
              <span>居住城市<span>*</span></span>
              <select class="select w-full rounded-none" v-model="formData.city">
                <option value="" selected disabled>請選擇城市*</option>
                <option v-for="city in cityList" :value="city.value" :key="city">
                  {{ city.label }}
                </option>
              </select>
            </label>
            <label class="row">
              <span>居住地區<span>*</span></span>
              <select class="select w-full rounded-none" v-model="formData.area">
                <option value="" selected disabled>請選擇地區*</option>
                <option v-for="area in areaList" :value="area.value" :key="area">
                  {{ area.label }}
                </option>
              </select>
            </label>
          </div>
          <div class="right">
            <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
              class="row textarea w-full h-full rounded-none" placeholder="請輸入您的留言"></textarea>
          </div>
        </div>

        <div class="policy-wrapper md:flex md:justify-center md:items-center">
          <!-- Policy -->
          <div class="flex gap-2 items-center justify-center control">
            <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
              class="checkbox bg-white rounded-md" />
            <p class="text-white">
              本人知悉並同意<label for="policy-modal"
                class="modal-button cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
            </p>
          </div>
          <Policy />

          <!-- Recaptcha -->
          <vue-recaptcha class="flex justify-center z-10 mx-2" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
            @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

          <!-- Send -->
          <div class="send mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
            {{ sending? '發送中..': '立即預約' }}
          </div>
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

.order {
  width: 100%;
  padding-top: size(165);

  .order-inner {
    justify-content: center;
    gap: size(150);
    max-width: 1624px;
    margin: 0 auto;
    padding-bottom: size(165);
  }

  .order-title {
    width: 965px;
    margin: 0 auto 10px auto;
    font-size: 18px;
    text-align: left;
    @media screen and (max-width:1040px) {
      width: 680px;
    }
  }

  .form {
    width: 965px;
    gap: size(60);
    align-items: stretch;
    @media screen and (max-width:1040px) {
      width: 680px;
    }

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

    textarea {
      border: 1px solid #fff;
      background: none;
      color: #fff;

      &::placeholder {
        color: #fff;
        opacity: 1;
      }

      &::-ms-input-placeholder {
        color: #fff;
      }
    }

    .row{
      // border: 1px solid #fff;
      // color: #000;
      display: flex;
      width: 100%;
      align-items: center;

      & > span{
        width: 5.5em;
        text-align: left;
        padding-right: 1em;
        display: none;

        & > span{
          color: #F00;
          font-size: 12px;
        }
      }
      input {
        &::placeholder {
          color: #fff;
          opacity: 1; /* Firefox */
        }

        &::-ms-input-placeholder { /* Edge 12 -18 */
          color: #fff;
        }
      }
      input, select{
        background: inherit;
        flex: 1;
        border: 1px solid #fff;
        color: #fff;
      }
      option{
        color: #666;
      }
      select{
        background:url("@/assets/select.svg") no-repeat calc(100% - .5em) 100%;
        background-size:auto 200%;
        transition: background .3s;
        color: #000;
        border-color: #000;
        filter: invert(100%) sepia(72%) saturate(0%) hue-rotate(66deg) brightness(107%) contrast(100%);

        &:focus{
          background-position:calc(100% - .5em) 0%;
        }
      }
    }
  }

  .policy-wrapper {
    margin: 50px 0;
    @media screen and (max-width:1040px) {
      display: block;
    }
  }

  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 0em;
    background: none;
    margin: 0;

    width: 308px;
    height:3.3em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
    font-weight: 600;
    @media screen and (max-width:1040px) {
      margin-top: 20px;
    }
  }

  .control {
    font-size: 16px;
    color: #000;
    position: relative;
    @media screen and (max-width:1040px) {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width:768px) {
  .order {
    width: 100%;
    padding-top: size-m(60);

    .order-inner {
      display: block;
      padding-bottom: 0;
    }

    .order-title {
      width: size-m(310);
    }

    .form {
      width: size-m(310);
      min-width: 0;
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
        .row{
          height: 7em;
        }
      }
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

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());



import { useToast } from "vue-toastification"
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
  r_verify: true,
})

//非必填
const bypass = ["msg", "room_type", "budget", "project"]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  "預算", //budget
  "建案", //project
  "信箱", //email
  "居住縣市", //city
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
