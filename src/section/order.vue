<template>
  <div id="order" class="order bg-white relative text-center">
    
    <div class="order-inner md:flex">
      <div class="info" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0">
        <img class="hidden md:block" src="@/section/form/info.svg" />
        <img class="md:hidden" src="@/section/form/info-m.svg" />
      </div>
      <div class="order-section">

        <div class="order-title flex text-[#931F1C]">
          <span class="md:font-['Noto_Serif_TC']">預約賞屋</span>
          <span>book now</span>
        </div>

        <!-- Form -->
        <div class="form mx-auto relative flex justify-center">
          <div class="left h-full flex flex-col justify-between items-center">
            <label class="row">
              <span>姓名<span>*</span></span>
              <input type="text" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" />
            </label>
            <label class="row">
              <span>手機<span>*</span></span>
              <input type="text" class="input w-full rounded-none" :value="formData.phone"
                @input="(event) => (formData.phone = event.target.value)" />
            </label>
            <label class="row">
              <span>居住城市<span>*</span></span>
              <select class="select w-full rounded-none" v-model="formData.city">
                <option value="" selected disabled>請選擇城市</option>
                <option v-for="city in cityList" :value="city.value">
                  {{ city.label }}
                </option>
              </select>
            </label>
            <label class="row">
              <span>居住地區<span>*</span></span>
              <select class="select w-full rounded-none" v-model="formData.area">
                <option value="" selected disabled>請選擇地區</option>
                <option v-for="area in areaList" :value="area.value">
                  {{ area.label }}
                </option>
              </select>
            </label>
            <label class="row">
              <span>電子信箱</span>
              <input type="text" class="input w-full rounded-none" :value="formData.email"
                @input="(event) => (formData.email = event.target.value)" />
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
          <p class="text-[#000]">
            本人知悉並同意<label for="policy-modal"
              class="modal-button cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
          </p>
        </div>
        <Policy />

        <!-- Recaptcha -->
        <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

        <!-- Send -->
        <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
          {{ sending? '發送中..': '立即預約' }}
        </div>
      </div>
    </div>

    <div class="info2">
      <img class="hidden md:block" src="@/section/form/info2.svg" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" />
      <img class="md:hidden" src="@/section/form/info2-m.svg" data-aos="cuscus" data-aos-duration="1000" data-aos-delay="0" />
    </div>

    <!-- Map -->
    <Map v-if="info.address" />

    <!-- Contact Info -->
    <ContactInfo />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order {
  width: 100%;
  padding-top: size(196);

  .order-inner {
    justify-content: center;
    gap: size(150);
    max-width: 1624px;
    margin: 0 auto;
    padding-bottom: size(20);
  }

  .info {
    flex: 1;
    max-width: size(612);

    img {
      width: 100%;
      max-width: 612px;
    }
  }

  .order-title {
    font-size: 30px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 3.3px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 45px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 330px;
      width: calc(100% - 330px);
      height: 1px;
      background: #931F1C;
    }

    span:nth-child(2) {
      font-size: 27px;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2.97px;
      margin-left: 27px;
    }
  }

  .form {
    width: size(894);
    min-width: 680px;
    gap: size(60);
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

    textarea {
      border: 1px solid #931F1C;
    }

    .row{
      background: #FFF;
      // border: 1px solid #931F1C;
      color: #000;
      display: flex;
      width: 100%;
      align-items: center;

      & > span{
        width: 5.5em;
        text-align: left;
        padding-right: 1em;

        & > span{
          color: #F00;
          font-size: 12px;
        }
      }
      input,select{
        background: inherit;
        flex: 1;
        border: 1px solid #931F1C;
      }
      option{
        color: #666;
      }
      select{
        background:url("//h65.tw/img/select.svg") no-repeat calc(100% - .5em) 100%;
        background-size:auto 200%;
        transition: background .3s;

        &:focus{
          background-position:calc(100% - .5em) 0%;
        }
      }
    }
  }

  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    background-color: #A32424;
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

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
    margin-top: size(30);
  }

  .info2 {
    padding: size(168) 0 size(110) 0;
    background: linear-gradient(180deg, #FFF 0%, #EBECC5 100%);

    img {
      width: size(775.6);
      margin: 0 auto;
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

    .info {
      max-width: size-m(265);
      margin: 0 auto size-m(67) auto;

      img {
        width: 100%;
      }
    }

    .order-title {
      font-size: size-m(16);
      letter-spacing: size-m(1.76);
      display: block;
      margin-bottom: size-m(43);
      position: relative;
      text-align: center;
      background: #A32424;
      color: #fff;
      padding: size-m(7) 0;
      font-weight: 400;

      &:before {
        display: none;
      }

      span:nth-child(2) {
        display: none;
      }
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
    }

    .send {
      font-size: size-m(21);
      width: size-m(310);
      height: size-m(72);
    }

    .control {
      font-size: size-m(14.6);
    }

    .info2 {
      margin-top: size-m(-12);
      padding: size-m(87) 0 size-m(89) 0;

      img {
        width: size-m(283);
      }
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
const bypass = ["project", "msg", "room_type", "budget", "email"]

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
