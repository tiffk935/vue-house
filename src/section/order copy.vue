<template>
  <div id="order" class="order relative text-center">
    <div class="order-section">
    <div
      class="cloth2 absolute"
      data-aos="fade"
      data-aos-delay="200">
    <img
      src="@/section/s1/cloth.webp"
      alt="cloth"
    />
  </div>
  <div
      class="cloth1 absolute"
      data-aos="fade"
      data-aos-delay="0">
    <img
      src="@/section/s1/cloth.webp"
      alt="cloth"
    />
  </div>
      <img class="logo" src="@/section/logo.png" alt="" srcset="">
      <!-- Form -->
      <div class="form mx-auto relative flex justify-center z-10">
        <div class="s-order-title">
          <p v-if="!isMobile">
            {{ info.order.title }}
          </p>
          <p v-else>
            預約賞屋
          </p>
          <p v-if="!isMobile">
            {{ info.order.subTitle }}
          </p>
        </div>
        <div class="left h-full flex flex-col justify-between items-center">
          <label class="row"
            ><span>姓名<span>(必填)</span></span>
            <input
              type="text"
              placeholder="姓名"
              class="input w-full rounded-none placeholder:text-[#fff]"
              :value="formData.name"
              @input="(event) => (formData.name = event.target.value)"
          /></label>
          <label class="row"
            ><span>手機<span>(必填)</span></span>
            <input
              type="text"
              placeholder="手機"
              class="input w-full rounded-none placeholder:text-[#fff]"
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
              <option v-for="city in cityList" :value="city.value">
                {{ city.label }}
              </option>
            </select></label
          >
          <label class="row"
            ><span>居住地區<span>(必填)</span></span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value">
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

      <div
        class="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:items-end justify-between w-full"
      >
        <div class="flex flex-col">
          <!-- Policy -->
          <div
            class="flex gap-2 items-center justify-start control relative z-10"
          >
            <input
              type="checkbox"
              v-model="formData.policyChecked"
              :checked="formData.policyChecked"
              class="checkbox bg-white rounded-none"
            />
            <p class="text-white">
              本人知悉並同意<label
                for="policy-modal"
                class="modal-button text-[#FFF000] cursor-pointer font-bold hover:opacity-70 whitespace-nowrap"
                >「個資告知事項聲明」</label
              >內容
            </p>
          </div>
          <Policy />

          <!-- Recaptcha -->
          <vue-recaptcha
            class="flex justify-start mt-8 relative z-10 left-0 ml-0"
            ref="recaptcha"
            :sitekey="info.recaptcha_site_key_v2"
            @verify="onRecaptchaVerify"
            @expired="onRecaptchaUnVerify"
          />
        </div>

        <!-- Send -->
        <div class="send btn cursor-pointer relative z-10" @click="send()">
          {{ sending ? "發送中.." : "立即預約" }}
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

.order-section {
  position: relative;
  overflow: hidden;
  // background-color: #e89213;
//  background-image: url("@/section/orderbg.jpg");
background-image: linear-gradient(180deg, #83CCD3 38.5%, #7AC5CB 62.5%, #5FB3BD 76%, #4EA8B3 86%, #45A0B2 100%);

  background-size: cover;
  background-position: center;
  padding: 0 size(364);
  padding-top: size(142);

  .bg-image {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: size(50);
    vertical-align: middle;
  }
  .cloth1{
    width: 106vw;
    top: size(-700);
  //  top: calc(50% + #{size(-770 - 1080 * .5)});
    left: 13.4vw;
    transform: rotate(5deg)translateX(10%);
    img{width: 100%;}
  }
  .cloth2{
    width: 116.7vw;
    top: size(-600);
  //  top: calc(50% + #{size(-670 - 1080 * .5)});
    left: -31.8vw;
    transform: rotate(-10deg)translateX(-10%);
  img{width: 100%;transform: rotate(51.1deg);opacity: 0.55;}
  }

  
}

.order {
  position: relative;
  width: 100%;

  .logo {
    position: relative;z-index: 2;
    width: size(559);
    margin-bottom: size(430);
  }

  .s-order-title {
    @apply absolute left-0 top-0 text-center w-full;
    p {
      font-size: size(32);
      font-weight: 500;
      color: #fff;

      &:nth-child(2) {
        font-size: size(18);
        margin-top: size(5);
      }
    }
  }

  .order-title {
    @apply text-left relative left-0 inline-block;
    font-size: size(40);
    font-weight: 700;
    color: #36677f;
    padding-top: 0;
    margin-left: size(0);
    margin-right: auto;
    border-bottom: 1px solid #fff;
    padding-bottom: size(20);
  }

  .order-title-img {
    width: size(557);
    margin-bottom: size(0);
  }
  .order-subTitle {
    font-size: size(17);
    color: black;
    padding-top: 0.8em;
    letter-spacing: 0em;
    font-weight: 500;
  }
  .cus-divider {
    margin: 0 auto;
    width: size(300);
    height: size(2);
    margin-bottom: size(50);
    background-color: #055f76;
  }

  .form {
    @apply left-1/2 -translate-x-1/2;
    width: size(1191);
    min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;
    padding-top: size(150);

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

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #FFF;
      position: absolute;
    }
    .row {
      background: rgba($color: #fff, $alpha: 0);
      border: 1px solid #fff;
      color: #fff;
      display: flex;
      width: 100%;
      align-items: center;
      > span {
        width: 7.5em;
        text-align: left;
        padding-left: 1em;
        > span {
          color: #FFF000;
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
        // filter: brightness(0) invert(1);

        &:focus {
          background-position: calc(100% - 0.5em) 0%;
        }
      }
      &::placeholder {
        color: #fff;
      }
      textarea {
        @apply text-[#fff];
      }
    }
  }

  .send {
    @apply bg-white/50 border-white;
    font-size: 20px;
    letter-spacing: 0.9em;
    text-indent: 0.9em;
    color: #fff;
    // background: ;
    border-radius: 0px;
    border: 1px solid;

    width: size(442);
    height: size(87);
    line-height: 3.3;
    z-index: 10;
    font-weight: 700;
    position: relative;

    @apply hover:bg-[#034150] hover:text-white hover:border-[#034150];
  }

  .control {
    font-size: size(16);
    color: #000;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .order-section {
    @apply bg-cover;
    min-height: sizem(800);
    position: relative;
    background-image: url("@/section/orderbgm.jpg");
    // overflow: hidden;
    padding: 0 sizem(30);
    padding-top: sizem(150);

    .logo {
      width: sizem(269);
    }

    .bg-image {
      position: absolute;
      width: 100%;
      left: -#{sizem(30)};
      bottom: sizem(590);
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

    .cus-divider {
      margin: 0 auto;
      width: sizem(117);
      height: sizem(2);
      margin-bottom: sizem(25);
      background-color: #055f76;
    }

    .order-title {
      font-size: sizem(25);
      // padding-top:4.5em;
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
      margin-top: sizem(100);
      padding-top: sizem(60);

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
      font-size: sizem(14.6);
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
