<template>
  <div id="order" class="order relative text-center">
    <div class="cir3 absolute hidden md:block"></div>

    <div class="order-section">
      <!-- Title -->
      <div class="order-title text-left" v-if="info.order.title" v-html="info.order.title"></div>
      <!-- <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div> -->

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row"><span>姓名*</span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name" @input="(event) => (formData.name = event.target.value)" />
          </label>
          <label class="row"><span>連絡電話*</span>
            <input type="text" placeholder="連絡電話" class="input w-full rounded-none" :value="formData.phone" @input="(event) => (formData.phone = event.target.value)" />
          </label>
          <label class="row"><span>選擇縣市*</span>
          <select class="select w-full rounded-none" v-model="formData.city">
            <option value="" selected disabled>請選擇縣市</option>
            <option v-for="city in cityList" :value="city.value" :key="city">
              {{ city.label }}
            </option>
          </select></label>
          <label class="row"><span>選擇區域*</span>
          <select class="select w-full rounded-none" v-model="formData.area">
            <option value="" selected disabled>請選擇區域</option>
            <option v-for="area in areaList" :value="area.value" :key="area">
              {{ area.label }}
            </option>
          </select></label>
          <label class="row"><span>選擇建案*</span>
            <select class="select w-full rounded-none" v-model="formData.project">
              <option value="" selected disabled>請選擇建案</option>
              <option value="藏筑3">藏筑3</option>
              <option value="藏筑2">藏筑2</option>
            </select>
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
        <p class="text-[#000] font-medium">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#9F223D] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
        </p>
      </div>
      <Policy />

      <!-- Recaptcha -->
      <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
        @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

      <!-- Send -->
      <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
        {{ sending? '發送中..': '送出表單' }}
      </div>

      <!-- Contact Info -->
      <ContactInfo />
    </div>


    <!-- Map -->
    <!-- <Map v-if="info.address" /> -->

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order {
  .order-section {
    position: relative;
    padding-top: size-m(62);
    overflow: hidden;
    @media screen and (min-width:768px) {
      padding-top: size(119);
    }
  }

  .order-title {
    color: #9F223D;
    width: size-m(310);
    font-size: size-m(26);
    font-weight: 700;
    margin: 0 auto size-m(20) auto;
    @media screen and (min-width:768px) {
      font-size: size(26);
      margin-bottom: 0;
      width: size(1470);
      letter-spacing: .05em;
    }
  }

  .order-subTitle {
    color: #666;
    font-size: size-m(13);
    line-height: size-m(24);
    margin-bottom: size-m(20);
    @media screen and (min-width:768px) {
      font-size: size(18);
      line-height: size(36);
      margin-bottom: size(31);
    }
  }

  .form {
    width: size-m(310);
    gap: size-m(15);
    margin: 1.43em auto;
    z-index: 50;
    align-items: stretch;
    flex-direction: column;
    line-height: 1.7;
    @media screen and (min-width:768px) {
      width: size(1470);
    //  min-width: 680px;
      gap: size(80);
      flex-direction: row;
      font-size: calc(12px + #{size(3)});
    }
    .left {
      flex: 1;
      gap: 1em;
    }
    .right {
      flex: 1;
      height: size-m(100);
      @media screen and (min-width:768px) {
        height: auto;
      }
      @media screen and (max-width:768px) {
        .row{
          height: 7em;
        }
      }
    }
    @media screen and (min-width:768px) {
      &::after {
        content: "";
        width: size(1);
        height: 100%;
        background-color: #fff;
        position: absolute;
      }
    }
    .row{
      background: #FFF;
      border: 1px solid #9F223D;
      color: #000;
      display: flex;
      width: 100%;
      align-items:center;
      > span{
        width: 7em;
        text-align: left;padding-left:1em;
        > span{color: #000;}
      }
      .input,
      .select{height: 3em;min-height: 0;}
      option{color: #666;}
      select{background:url("//h35.banner.tw/img//select.svg") no-repeat calc(100% - .5em) 100%;
      background-size:auto 200%;
      transition: background .3s;
      &:focus{
        background-position:calc(100% - .5em) 0%;
      }
      }
    }
      input,select,textarea{background: inherit;flex: 1;font-size:1em;}
  }

  .send {
    font-size: size-m(20);
    width:15.5em;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background-color: #9F223D;
    border:0;
    height:3.6em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
    font-weight: 600;
    border-radius: 0;
    @media screen and (min-width:768px) {
      font-size: size(25);
    }
  }
  .control {
    color: #000;
    position: relative;
    @media screen and (min-width:768px) {
      font-size: .75em;
    }
  }
}
</style>

<script setup>
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
// import Map from "@/section/form/map.vue"
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
  r_verify: false,
})

//非必填
const bypass = ["msg","budget","room_type","email"]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "連絡電話", //phone
  "預約時段", //room_type
  "預算", //budget
  "建案", //project
  "信箱", //email
  "居住縣市", //city
  "居住區域", //area
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
