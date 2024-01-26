<template>
  <div class="order relative bg-[#003399] text-center">
    <div class="order1 relative">
      <div class="title text-white mb-3">
        <div class="text-4xl font-bold mb-3">DREAM PARK</div>
        若想了解更多資訊，歡迎填寫表單或來電洽詢，
        將由專人為您服務，謝謝！
      </div>
      <div class="order2 relative">
        <!-- <div class="order-title text-center text-white font-['noto_Serif_tc']">{{ info.order.title }}</div> -->
        <img class="line absolute" src="@/section/form/line.png" />
        <div class="stars">
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.svg" />
          <img class="star absolute" src="@/section/form/star.png" />
        </div>
        <img class="butterfly1 absolute" src="@/section/s1/butterfly1.svg" />
        <img class="butterfly2 absolute" src="@/section/s1/butterfly2.svg" />
        <!-- Form -->
        <div class="form mx-auto relative flex items-start justify-center">
          <div class="left h-full flex flex-col justify-between items-center">
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" />
            <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" />
            <select class="select w-full rounded-none" v-model="formData.room_type">
              <option value="" selected disabled>需求房型</option>
              <option value="兩房">兩房</option>
              <option value="三房">三房</option>
            </select>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>居住縣市</option>
              <option v-for="city in cityList" :value="city.value">
                {{ city.label }}
              </option>
            </select>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>居住地區</option>
              <option v-for="area in areaList" :value="area.value">
                {{ area.label }}
              </option>
            </select>
          </div>
          <div class="right h-full">
            <textarea :value="formData.msg" @input="(event) => (formData.msg = event.target.value)"
              class="textarea w-full h-full rounded-none" placeholder="備註訊息"></textarea>
          </div>
        </div>

        <!-- Policy -->
        <div class="flex gap-2 items-center justify-center control">
          <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
            class="checkbox bg-white rounded-md" />
          <p class="text-white font-bold">
            本人知悉並同意<label for="policy-modal"
              class="modal-button text-[#FFF100] cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
          </p>
        </div>
        <Policy />

        <!-- Recaptcha -->
        <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

        <!-- Send -->
        <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer btregistration bg-transparent text-white rounded" @click="send()">
          {{ sending ? '發送中..' : '立即預約' }}
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
  overflow: hidden;
  width: 100%;
  // padding-top: size(115);

  .order1 {
    background-size: cover;
    background-position: center center;
    // padding-bottom: size(21);
    background-image: url(@/section/form/bg.jpg);
    padding-top: size(100);
  }

  .order2 {
    padding: size(33) 0 size(282) 0;
  }

  .line {
    max-width: unset;
    bottom: -4vw;
    left: size(103);
    width: size(1820);
    mix-blend-mode: color-dodge;
  }

  .stars {
    .star {
      &:nth-child(1) {
        width: size(109);
        top: 140px;
        left: calc(50% - size(509 + 54.5));
        animation: 3s linear 1s infinite alternate twinkle;
      }

      &:nth-child(2) {
        width: size(199);
        top: -11vw;
        left: calc(50% - size(15 + 190));
        animation: 4s linear 0s infinite alternate twinkle;
      }

      &:nth-child(3) {
        width: size(87);
        top: calc(100% - 13vw);
        left: calc(50% + size(825));
        animation: 2.5s linear 0.5s infinite alternate twinkle;
      }

      &:nth-child(4) {
        width: size(115);
        top: -11vw;
        left: calc(50% + size(447));
        animation: 1.25s linear 1.5s infinite alternate twinkle;
      }

      &:nth-child(5) {
        width: size(91);
        top: calc(100% - 2vw);
        left: calc(50% - size(406 + 45));
        animation: 3.5s linear 0.5s infinite alternate twinkle;
      }

      &:nth-child(6) {
        width: size(115);
        top: 10vw;
        left: size(0.01);
        animation: 4s linear .7s infinite alternate twinkle;
      }

      &:nth-child(7) {
        width: size(81);
        top: 280px;
        left: calc(50% + size(700));
        animation: 4s linear 0s infinite alternate twinkle;
      }

      &:nth-child(8) {
        width: size(125);
        top: 540px;
        left: calc(50% - size(230));
        animation: 1.8s linear 0.5s infinite alternate twinkle;
      }

      &:nth-child(9) {
        width: size(168);
        top: 350px;
        left: calc(50% + size(250));
        animation: 2s linear 1.5s infinite alternate twinkle;
      }
    }
  }

  .butterfly1 {
    width: size(52);
    bottom: 18vw;
    left: size(1643);
    transform: translateY(80%);
    animation: an 3s linear infinite alternate;
  }

  .butterfly2 {
    width: size(46.47);
    bottom: 2vw;
    left: size(1330);
    transform: translateY(-20%);
    animation: an 1.5s linear infinite alternate;
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
    border: size(1) solid #fff;
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
    margin-top: size-m(0);

    .title {
      width: size-m(310);
      margin: 0 auto;
    }
    
    .order1 {
      background-image: url(@/section/form/bg-m.jpg);
      padding-bottom: 0;
      padding-top: size-m(60);
    }

    .order2 {
      padding: size-m(40) 0 size-m(70) 0;
      background-size: cover;
      background-position: center center;
    }

    .line {
      bottom: -36vw;
      left: size-m(-527);
      width: size-m(991);
    }

    .stars {
      .star {
        &:nth-child(1) {
          width: size-m(34.53);
          top: -34vw;
          left: 82.128vw;
        }

        &:nth-child(2) {
          width: size-m(17.79);
          top: -35vw;
          left: size-m(104.11);
        }

        &:nth-child(3) {
          width: size-m(38.71);
          top: -1vw;
          left: size-m(47.64);
        }

        &:nth-child(4) {
          width: size-m(34);
          top: size-m(408);
          left: size-m(212.5);
        }

        &:nth-child(5) {
          width: size-m(35);
          top: size-m(35.56);
          left: size-m(314);
        }

        &:nth-child(6) {
          display: none;
        }

        &:nth-child(7) {
          display: none;
        }

        &:nth-child(8) {
          display: none;
        }

        &:nth-child(9) {
          display: none;
        }
      }
    }

    .butterfly1 {
      width: size-m(51.98);
      bottom: 140vw;
      left: size-m(287);
    }

    .butterfly2 {
      width: size-m(46.47);
      bottom: 87vw;
      left: size-m(56);
    }

    .order-title {
      font-size: size-m(29);
      font-weight: 500;
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
      border: size-m(1) solid #fff;
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
import { ref, reactive, watch, onMounted } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

import { useToast } from "vue-toastification"
const toast = useToast()

const formData = reactive({
  name: "",
  phone: "",
  room_type: "",
  // email: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

const sending = ref(false)

//非必填
// const bypass = ["msg", "room_type", "email"]
const bypass = ["msg","room_type"];

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  // "信箱", //email
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
    idx++
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