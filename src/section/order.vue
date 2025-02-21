<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
      <div class="order-form-content">
        <!-- <div class="order-title text-center" v-if="info.order.title" v-html="info.order.title"></div> -->
        <!-- <div class="order-subTitle text-center" v-if="info.order.subTitle" v-html="$isMobile() && info.order.subTitle_mo?info.order.subTitle_mo:info.order.subTitle"></div> -->
        
        <img class="logo" src="@/section/form/logo.svg" />

        <!-- Form -->
        <div class="form mx-auto relative flex justify-center z-10">
          <div class="left h-full flex flex-col justify-between items-center">
            <label class="row"
              ><span>姓名<span>(必填)</span></span>
              <input
                type="text"
                placeholder="姓名"
                class="input w-full rounded-none placeholder:text-[#3A3A3A]"
                :value="formData.name"
                @input="(event) => (formData.name = event.target.value)"
            /></label>
            <label class="row"
              ><span>手機<span>(必填)</span></span>
              <input
                type="text"
                placeholder="手機"
                class="input w-full rounded-none placeholder:text-[#3A3A3A]"
                :value="formData.phone"
                @input="(event) => (formData.phone = event.target.value)"
            /></label>

            <label class="row" v-if="info.room_type"
              ><span>需求房型<span>(必填)</span></span>
              <select
                class="select w-full rounded-none"
                v-model="formData.room_type"
              >
                <option value="" selected disabled>請選擇房型</option>
                <option
                  v-for="room in info.room_type"
                  :value="room"
                  v-text="room" :key="room"
                ></option></select
            ></label>
            <label class="row" v-if="info.budget.length > 0"
              ><span>購屋預算<span>(必填)</span></span>
              <select
                class="select w-full rounded-none bg-white"
                v-model="formData.budget"
              >
                <option value="" selected disabled>請選擇預算</option>
                <option
                  v-for="budget in info.budget"
                  :value="budget"
                  v-text="budget" :key="budget"
                ></option>
              </select>
            </label>
            <label class="row"
              ><span>居住縣市<span>(必填)</span></span>
              <select class="select w-full rounded-none" v-model="formData.city">
                <option value="" selected disabled>請選擇城市</option>
                <option v-for="city in cityList" :value="city.value" :key="city">
                  {{ city.label }}
                </option>
              </select></label
            >
            <label class="row"
              ><span>居住地區<span>(必填)</span></span>
              <select class="select w-full rounded-none" v-model="formData.area">
                <option value="" selected disabled>請選擇地區</option>
                <option v-for="area in areaList" :value="area.value" :key="area">
                  {{ area.label }}
                </option>
              </select></label
            >
          </div>
          <div class="right">
            <textarea
              :value="formData.msg"
              @input="(event) => (formData.msg = event.target.value)"
              class="row textarea w-full h-full rounded-none"
              placeholder="請輸入您的留言"
            ></textarea>
          </div>
        </div>

        <!-- Policy -->
        <div class="flex gap-2 items-center justify-center control">
          <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
            class="checkbox bg-white rounded-md" />
          <p>
            本人知悉並同意<label for="policy-modal"
              class="modal-button text-[#303C80] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
          </p>
        </div>
        <Policy />

        <!-- Recaptcha -->
        <vue-recaptcha class="flex justify-center mt-[2vw] z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

        <!-- Send -->
        <div class="send mt-6 mx-auto hover:scale-90 btn cursor-pointer" @click="send()">
          {{ sending? '發送中..': '確認送出' }}
        </div>

        <!-- Contact Info -->
        <ContactInfo />
      </div>

      <div class="ad relative">
        <img class="corner" src="@/section/form/corner.png" />
        <img class="txt" src="@/section/form/txt.svg" />
        <img class="logos" src="@/section/form/logos.svg" />
      </div>
    </div>

    <!-- Map -->
    <Map v-if="info.address" />

    <!-- HouseInfo -->
    <HouseInfo />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.order-section {
  color: #3A3A3A;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: stretch;

  .order-form-content {
    // width: calc(100% - size(903));
    padding: size(60) size(56) size(40) size(37);
    flex: 1;
  }

  .ad {
    width: size(903);
    background-image: url(@/section/form/pic.jpg);
    background-position: bottom center;
    background-size: cover;

    .bg {
      display: block;
      width: 100%;
    }

    .corner {
      position: absolute;
      top: 0;
      right: 0;
      width: size(270.96);
    }

    .txt {
      position: absolute;
      top: size(232.48);
      right: size(38);
      width: size(507);
    }

    .logos {
      position: absolute;
      bottom: size(20);
      right: size(36);
      width: size(503.94);
    }
  }
}

.order {
  position: relative;
  width: 100%;

  .logo {
    display: block;
    width: size(251);
    margin: 0 auto size(38) auto;
  }

  .order-title {
    font-size: size(52);
    letter-spacing: 0.02em;
    font-weight: 700;
  }

  .order-subTitle{
    font-size: size(17);
    letter-spacing: .1em;
  }

  .form {
    // width: size(920);
    // min-width: 680px;
    gap: size(80);
    margin: 0 auto size(35) auto;
    z-index: 50;
    align-items: stretch;

    .left {
      flex: 1;
      gap: size(20);
    }

    .right {
      flex: 1;
      height: auto;
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #474747;
      position: absolute;
    }
    .row {
      background: rgba($color: #fff, $alpha: 0);
      border: 1px solid #3A3A3A;
      display: flex;
      width: 100%;
      align-items: center;
      > span {
        width: 7.5em;
        text-align: left;
        padding-left: 1em;
        > span {
          color: #303C80;
          font-size: 12px;
        }
      }
      input,
      select {
        @apply font-bold;
        background: none;
        flex: 1;
      }
      option {
        color: #000;
      }
      select {
        background: url("//h35.banner.tw/img//select.svg") no-repeat calc(100% - 0.5em)
          100%;
        background-size: auto 200%;
        transition: background 0.3s;
        //  filter: brightness(0) invert(1);//箭頭白色 拿掉變黑色  其他顏色用工具變顏色

        &:focus {
          background-position: calc(100% - 0.5em) 0%;
        }
      }
      &::placeholder {
        color: #3A3A3A;
      }
    }
  }

  .send {
    font-size:20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #3A3A3A;
    background-color: #fff;
    //border: 1px solid #FFF9;
    border:2px solid #3A3A3A;
    border-radius: 0em;
    width: 308px;
    height: 2.6em;
    line-height: 2.5em;
    z-index: 10;
    font-weight: 400;
    position: relative;
    margin: 1.5rem 0 1rem 0;
  }

  .control {
    font-size: calc(12px + #{size(4)});
    color: #000;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .order-section {
    @apply bg-cover;
    position: relative;
    flex-direction: column-reverse;

    .order-form-content {
      padding: sizem(32) 0;
      flex: 1;
    }

    .ad {
      width: 100%;
      // height: sizem(374);
      height: sizem(470);
      background-color: #3156F1;
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: bottom right;

      .corner {
        width: sizem(101);
      }

      .txt {
        position: absolute;
        top: sizem(70);
        right: sizem(22);
        width: sizem(234.92);
      }

      .logos {
        position: absolute;
        bottom: sizem(3);
        right: sizem(10);
        width: sizem(283);
      }
    }

    .logo {
      width: sizem(198.58);
      margin: 0 auto sizem(32) auto;
    }
  }

  .order {
    width: 100%;

    .s-order-title {
      @apply absolute left-0 top-0 flex flex-col items-center justify-center w-full;
      p {
        font-size: sizem(29);
        font-weight: 500;

        &:nth-child(2) {
          font-size: sizem(15);
          margin-top: sizem(5);
        }
      }
    }

    .order-title-img {
      width: sizem(200);
      margin-bottom: sizem(22);
    }

    .bird {
      @apply absolute;
      width: sizem(48.8);
      top: sizem(205);
      right: sizem(40);
    }

    .order-title {
      font-size: sizem(25);
    }
    .order-subTitle {
      font-size: sizem(13);
      padding: sizem(10) sizem(20);
    }

    .form {
      width: sizem(310);
      min-width: 0;
      height: auto;
      gap: 0;
      margin-bottom: sizem(20);
      flex-direction: column;

      .left {
        width: 100%;
        gap: 0;
        .row {
          margin: 0 0 sizem(15);
        }
      }

      .right {
        width: 100%;
        height: sizem(100);
        .row {
          height: 7em;
        }
      }

      &::after {
        display: none;
      }
    }

    .send {
      font-size: sizem(21);
      width: sizem(310);
      height: sizem(72);
      background-size: cover;
    }

    .control {
      font-size: calc(12px + #{sizem(2)});
      margin-bottom: 5vw;
    }
  }
}
</style>

<script setup>
import Policy from "@/section/form/policy.vue"
import ContactInfo from "@/section/form/contactInfo.vue"
import Map from "@/section/form/map.vue"
import HouseInfo from "@/section/form/houseInfo.vue"
/*
import orderIntro from "@/section/order_intro.vue"
import orderBadge from "@/section/order_badge.vue"
*/

import info from "@/info"

import { cityList, renderAreaList } from "@/info/address.js"
import { computed, ref, reactive, getCurrentInstance, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
const toast = useToast()

const sending = ref(false)

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  budget: "",
  project: "",
  people: "",
  email: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: true,
})

//非必填
const bypass = [
  "project",
  "msg",
  "people",
  "email",
  "room_type",
  "budget",
  "city",
  "area",
]

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  "預算", //budget
  "建案", //project
  "服務專員", //people
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
  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get("utm_source")
  const utmMedium = urlParams.get("utm_medium")
  const utmContent = urlParams.get("utm_content")
  const utmCampaign = urlParams.get("utm_campaign")
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  const hour = time.getHours()
  const min = time.getMinutes()
  const sec = time.getSeconds()
  const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`

  const presend = new FormData()
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

    idx++

    presend.append(key, value)
  }

  presend.append("utm_source", utmSource)
  presend.append("utm_medium", utmMedium)
  presend.append("utm_content", utmContent)
  presend.append("utm_campaign", utmCampaign)

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
      &people=${formData.people}
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
        method: "GET",
      }
    )

    fetch("contact-form.php", {
      method: "POST",
      body: presend,
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "formThanks"
      }
      sending.value = false
    })

    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>
