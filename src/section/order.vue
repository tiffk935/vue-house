  <template>
  <div class="order relative md:font-['Noto_Serif_TC']">
    <img class="bg absolute bottom-[40px] left-0 w-full hidden md:block" src="@/section/form/bg.png" />
    <div class="order1">
      <div class="order2">
        <!-- Title -->
        <div class="order-title md:flex md:justify-between">
          <img class="order-title1" src="@/section/form/order-title1.svg" />
          <img class="order-title2" src="@/section/form/order-title2.svg" />
        </div>
        <!-- Form -->
        <div class="form mx-auto relative flex justify-center">
          <div class="left h-full flex flex-col justify-between items-center">
            <label class="row"><span>姓名<span> *</span></span>
            <input type="text" placeholder="姓名" class="input w-full rounded-none" :value="formData.name"
              @input="(event) => (formData.name = event.target.value)" /></label>
              <label class="row"><span>手機<span> *</span></span>
                <input type="text" placeholder="手機" class="input w-full rounded-none" :value="formData.phone"
              @input="(event) => (formData.phone = event.target.value)" /></label>
            <label class="row"><span>居住縣市</span>
            <select class="select w-full rounded-none" v-model="formData.city">
              <option value="" selected disabled>請選擇城市</option>
              <option v-for="city in cityList" :value="city.value">
                {{ city.label }}
              </option>
            </select></label>
            <label class="row"><span>居住地區</span>
            <select class="select w-full rounded-none" v-model="formData.area">
              <option value="" selected disabled>請選擇地區</option>
              <option v-for="area in areaList" :value="area.value">
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
          <p class="text-[#002B69] md:font-bold">
            本人知悉並同意<label for="policy-modal"
              class="modal-button cursor-pointer text-[#CC0000] hover:opacity-70">「個資告知事項聲明」</label>內容
          </p>
        </div>
        <Policy />

        <!-- Recaptcha -->
        <vue-recaptcha class="flex justify-center mt-8 z-10" ref="recaptcha" :sitekey="info.recaptcha_site_key_v2"
          @verify="onRecaptchaVerify" @expired="onRecaptchaUnVerify" />

        <!-- Send -->
        <div class="send block mt-8 mx-auto hover:scale-90 btn cursor-pointer btregistration bg-[rgba(255,255,255,.3)] text-[#002B69] hover:text-white rounded-none font-['Noto_Serif_TC']" @click="send()">
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
  width: 100%;

  input, select, textarea {
    // border: 1px solid #002B69;
    background: none;
  }

  .order2 {
    padding: size(128.39) 0 0 0;
  }

  .order-title {
    width: size(1272.11);
    margin: 0 auto size(76.58) auto;

    .order-title1 {
      width: size(601.55);
    }

    .order-title2 {
      width: size(612.48);
    }
  }

  .form {
    width: size(1280);
    min-width: 680px;
    //  height: 350px;
    gap: size(80);
    margin-top: size(45);
    margin-bottom: size(50);
    z-index: 50;
    align-items: stretch;

    .left {
      width: size(660);
      gap: size(20);
    }

    .right {
      width: size(660);
    }

    &::after {
      content: "";
      width: size(1);
      height: 100%;
      background-color: #fff;
      position: absolute;
      opacity: .5;
    }
    
    .row {
      border: 1px solid #002B69;
      color: #000;
      display: flex;
      width: 100%;
      align-items: center;

      & > span{
        width: 5.5em;
        text-align: left;
        padding-left: 1em;
        color: #002B69;

        & > span{
          color: #F00;
          font-size: 12px;
          position: relative;
          top: -3px;
        }
      }

      input,select{
        background: inherit;
        flex: 1;
      }

      option{
        color: #666;
      }

      select{
        background: url("//h65.tw/img/select.svg") no-repeat calc(100% - .5em) 100%;
        background-size: auto 200%;
        transition: background .3s;
        &:focus{
          background-position:calc(100% - .5em) 0%;
        }
      }
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
    // padding-top: size-m(40);
    margin-top: size-m(0);

    .order2 {
      padding: size-m(77) 0 0 0;
      background-size: cover;
      background-position: center center;
    }

    .order-title {
      width: size-m(270);
      margin: 0 auto size-m(40) auto;

      .order-title1, .order-title2 {
        width: 100%;
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
        .row {
          height: 7em;
        }
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
  email: "",
  city: "",
  area: "",
  msg: "",
  policyChecked: false,
  r_verify: false,
})

const sending = ref(false)

//非必填
// const bypass = ["msg", "room_type", "email"]
const bypass = ["msg","room_type","area","city","email"];

//中文對照
const formDataRef = ref([
  "姓名", //name
  "手機", //phone
  "房型", //room_type
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
