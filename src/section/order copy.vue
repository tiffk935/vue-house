  <template>
  <div class="order relative bg-[#FFDFE3] text-center">
    <!-- Title -->
    <div class="order-title text-center text-[#595757]">{{ info.order.title }}</div>
    <!-- Title Image -->
    <!-- <img v-if="$isMobile()" class="order-title-img" src="@/section/form/titleImg_m.svg" alt="昕馳" srcset=""
      data-aos="fade" data-aos-duration="1000">
    <img v-else class="order-title-img" src="@/section/form/titleImg.svg" alt="昕馳" srcset="" data-aos="fade"
      data-aos-duration="1000"> -->
    <!-- Form -->
    <div class="form mx-auto relative flex items-start justify-center">
      <div class="left h-full flex flex-col justify-between items-center">
        <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
          @input="(event) => (formData.name = event.target.value)" />
        <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
          @input="(event) => (formData.phone = event.target.value)" />
        <select class="select w-full rounded-none" v-model="formData.room_type">
          <option value="" selected disabled>需求房型</option>
          <option value="2房">2 房</option>
          <option value="3房">3 房</option>
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
        <textarea :value="formData.note" @input="(event) => (formData.note = event.target.value)"
          class="textarea w-full h-full rounded-none" placeholder="備註訊息"></textarea>
      </div>
    </div>

    <!-- Policy -->
    <div class="flex gap-2 items-center justify-center control">
      <input type="checkbox" v-model="formData.policyChecked" :checked="formData.policyChecked"
        class="checkbox bg-white rounded-md" />
      <p>
        本人知悉並同意<label for="policy-modal"
          class="modal-button text-[#D9374B] font-bold cursor-pointer hover:opacity-70">「個資告知事項聲明」</label>內容
      </p>
    </div>
    <Policy />

    <!-- Recaptcha -->
    <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
      @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

    <!-- Send -->
    <div class="send mt-8 mx-auto hover:scale-90 btn cursor-pointer btregistration bg-[#D9374B] text-white rounded-full" @click="send()">
      送出表單
    </div>

    <!-- Contact Info -->
    <ContactInfo />

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
  padding-top: size(115);

  .order-title {
    font-size: size(43);
    font-weight: 500;
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;
    align-self: stretch;

    .left {
    display: flex;
    padding: 0px 0 24px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    .left > * {
  flex: 1;
}   

     .input,
    .select {
    width: 512px;
    padding: 0 size(32);
    align-items: center;
    gap: 10px;
    border-radius: 24px;
    background: rgba(0, 119, 26, 0.35);
    box-shadow: -3px 2px 26.3px 0 rgba(10, 38, 16, 0.22) inset;
    color: #FFF;
    font-family: "Noto Sans TC";
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2.8px;

    
     }

  .input::placeholder {
    color: #FFF;
   font-family: "Noto Sans TC";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .input:focus,
  .select:focus {
    outline: none;
    border-color: #D9374B;
  }
}
    

    .right {
      display: flex;
      padding: 0px 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      align-self: stretch;

      width: 540px;
      height: 100%;
      padding: 26px 19px;
      align-items: flex-start;
      gap: 10px;

      border-radius: 16px;
      background: rgba(0, 119, 26, 0.35);
      box-shadow: -3px 2px 26.3px 0 rgba(10, 38, 16, 0.22) inset;


  .textarea {
    width: 100%;
    height: 100%;

    background: transparent;   // ← 不要白底
    border: none;              // ← 不要外框
    resize: none;              // ← 不讓使用者拖曳大小

    color: #FFF;
    font-size: 20px;
    padding: 0 16px;
  }

  .textarea::placeholder {
    color: #FFF;
font-family: "Noto Sans";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2.8px;
  }

  .textarea:focus {
    outline: none;
  }

   
  }}

  .send {
    display: flex;
width: 264px;
height: 66px;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 26px;
background: linear-gradient(179deg, #FFF -44.42%, #067700 27.67%, #005C19 88.16%, #31FF87 127.94%);
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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
    padding-top: size-m(40);
    margin-top: size-m(0);

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
  note: "",
  policyChecked: false,
  r_verify: false,
})

//非必填
// const bypass = ["note", "room_type", "email"]
const bypass = [];

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
  // "信箱", //email
  "居住縣市", //city
  "居住地區", //area
  "備註訊息", //note
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

  if (pass) {


    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${formData.name}
      &phone=${formData.phone}
      &room_type=${formData.room_type}
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
    ).then(() => {
      fetch("contact-form.php", {
        method: "POST",
        body: presend,
      }).then((response) => {
        if (response.status === 200) {
          window.location.href = "formThanks";
        }
      });
    });



    // toast.success(`表單已送出，感謝您的填寫`)
  }
}
</script>
