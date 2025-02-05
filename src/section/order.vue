<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <!-- Title -->
      <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div>
      <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div>

      <!-- Form -->
      <div class="form mx-auto relative flex justify-center">
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row"><span>姓名<span><!--(必填)--></span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name" @input="(event) => (formData.name = event.target.value)" />
          </label>
          <label class="row"><span>手機<span><!--(必填)--></span></span>
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone" @input="(event) => (formData.phone = event.target.value)" />
          </label>
          <label class="row"><span>電子信箱<span><!--(必填)--></span></span>
            <input type="text" placeholder="電子信箱" class="input w-full rounded-none" :value="formData.email" @input="(event) => (formData.email = event.target.value)" />
          </label>
          <label class="row" v-if="info.room_type"><span>可預約時間</span>
            <select class="select w-full rounded-none bg-white" v-model="formData.room_type">
              <option value="" selected disabled>請選擇時間</option>
              <option v-for="room in info.room_type" :value="room" v-text="room" :key="room"></option>
            </select>
          </label>
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
            class="row textarea w-full h-full rounded-none" placeholder="請輸入您的留言"></textarea>
        </div>
      </div>

      <!-- Policy -->
      <div class="flex gap-2 items-center justify-center control">
        <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
          class="checkbox bg-white rounded-md" />
        <p class="text-[#fff]">
          本人知悉並同意<label for="policy-modal"
            class="modal-button text-[#BBA693] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
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
    <Map v-if="info.address" />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order {
  padding-top: 0;

  .order-section {
    position: relative;
    padding-top: 4em;
    overflow: hidden;
    background-image: url(@/section/form/bg.jpg);
    background-size: cover;
    background-position: center center;
    @media screen and (min-width:768px) {
      padding-top: 5.3em;
    }
  }

  .order-title {
    font-size: size-m(25);
    line-height: 1.44;
    font-weight: 700;
    color: #fff;
      margin-bottom: .5em;
    @media screen and (min-width:768px) {
      font-size: size(50);
    }
  }

  .order-subTitle {
    font-size: size-m(14);
    color: #fff;
    margin: 0 auto 2em auto;
    width: size-m(310);
    @media screen and (min-width:768px) {
      font-size: size(20);
      width: auto;
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
      width:60em;
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
      border: 1px solid #CCC;
      color: #000;
      display: flex;
      width: 100%;
      align-items:center;
      > span{
        width: 7em;
        text-align: left;padding-left:1em;
        > span{color: #F00;}
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
    background-color: #785A4F;
    border:0;
    border-radius: 0em;
    height:3.6em;
    line-height: 3.3;
    z-index: 10;
    font-weight: 400;
    position: relative;
    font-weight: 600;
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
const bypass = ["project", "msg", "room_type","budget", "city", "area"]

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
